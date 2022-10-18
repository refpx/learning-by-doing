package main

import "fmt"

func main() {
	m1 := make(map[string]int)
	m1["k1"] = 7
	fmt.Println(m1)
	fmt.Println(m1["k1"])
}
