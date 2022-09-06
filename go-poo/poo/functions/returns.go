package main

import "fmt"

func sum(values ...int) int {
	total := 0
	for _, v := range values {
		total += v
	}
	return total
}

func printNames(names ...string) {
	for _, name := range names {
		fmt.Println(name)
	}
}

func getValues(x int) (normal int, double int, triple int) {
	normal = x
	double = x * 2
	triple = x * 3
	return
}

func main() {
	fmt.Println(sum(5, 51, 1, 2))
	printNames("John", "Doe", "Jane", "Doe")
	fmt.Println(getValues(5))
}
