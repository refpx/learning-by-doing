package main

import (
	"bufio"
	"flag"
	"fmt"
	"log"
	"net"
)

type Client chan<- string

var (
	incomingClients = make(chan Client)
	leavingClients  = make(chan Client)
	messages        = make(chan string)
)

var (
	host = flag.String("h", "localhost", "host to listen on")
	port = flag.Int("p", 3090, "port to listen on")
)

func HandleConnection(conn net.Conn) {
	defer conn.Close()
	message := make(chan string)
	go MessageWrite(conn, message)

	clientName := conn.RemoteAddr().String()

	message <- fmt.Sprintf("Welcome to the server, your name is %s\n", clientName)
	messages <- fmt.Sprintf("%s has joined the server", clientName)
	incomingClients <- message

	inputMessage := bufio.NewScanner(conn)
	for inputMessage.Scan() {
		messages <- fmt.Sprintf("%s: %s\n", clientName, inputMessage.Text())
	}

	leavingClients <- message
	messages <- fmt.Sprintf("%s has left the server", clientName)
}

func MessageWrite(conn net.Conn, messages <-chan string) {
	for message := range messages {
		fmt.Fprintln(conn, message)
	}
}

func Broadcast() {
	clients := make(map[Client]bool)
	for {
		select {
		case message := <-messages:
			for client := range clients {
				client <- message
			}

		case newClient := <-incomingClients:
			clients[newClient] = true

		case leavingClient := <-leavingClients:
			delete(clients, leavingClient)
			close(leavingClient)
		}
	}
}

func main() {
	listener, err := net.Listen("tcp", fmt.Sprintf("%s:%d", *host, *port))
	if err != nil {
		log.Fatal(err)
	}
	go Broadcast()
	for {
		conn, err := listener.Accept()
		if err != nil {
			log.Print(err)
			continue
		}
		go HandleConnection(conn)
	}
}
