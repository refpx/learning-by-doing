package main

import (
	"fmt"
	"time"
)

func mains() {
	// x := 5
	// y := func() int {
	// 	return x * 2
	// }()
	// fmt.Println(y)

	c := make(chan int)

	go func() {
		fmt.Println("Starting a new function")
		time.Sleep(time.Second * 5)
		fmt.Println("Ending a new function")
		c <- 1
	}()
	<-c
}
