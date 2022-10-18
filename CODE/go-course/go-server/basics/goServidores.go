package main

import (
	"fmt"
	"net/http"
	"time"
)

func main() {
	inicio := time.Now()

	canal := make(chan string)

	servidores := []string{
		"http://google.com",
		"http://facebook.com",
		"http://golang.org",
		"http://stackoverflow.com",
	}

	i := 0

	for {
		if i > 2 {
			break
		}
		for _, servidor := range servidores {
			go revisarServidor(servidor, canal)
		}
		time.Sleep(time.Second * 1)
		fmt.Println(<-canal)
		i++
	}

	tiempoPaso := time.Since(inicio)
	fmt.Printf("Tiempo de ejecución: %s\n", tiempoPaso)
}

func revisarServidor(servidor string, canal chan string) {
	_, err := http.Get(servidor)
	if err != nil {
		canal <- servidor + " no está funcionando"
	} else {
		canal <- servidor + " está funcionando"
	}
}
