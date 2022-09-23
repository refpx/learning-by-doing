package main

import "fmt"

type Person struct {
	name string
	age  int
}

type Employee struct {
	id int
}

type FullTimeEmployee struct {
	Person
	Employee
}

func GetMessage(p Person) {
	fmt.Printf("Hello %s, you are %d years old", p.name, p.age)
}

func main() {
	ftEmployee := FullTimeEmployee{}
	ftEmployee.name = "John"
	ftEmployee.age = 25
	ftEmployee.id = 1
	fmt.Printf("%v\n", ftEmployee)
	// GetMessage(ftEmployee) // Error
}
