package main

import "fmt"

type Employee struct {
	id   int
	name string
}

func (e *Employee) SetId(id int) {
	e.id = id
}

func (e *Employee) SetName(name string) {
	e.name = name
}

func (e *Employee) GetId() int {
	return e.id
}

func (e *Employee) GetName() string {
	return e.name
}

func NewEmployee(id int, name string) *Employee {
	return &Employee{
		id:   id,
		name: name,
	}
}

func main() {
	e := Employee{}
	e.SetId(1)
	e.SetName("John")
	fmt.Printf("%v\n", e)

	e2 := Employee{
		id:   2,
		name: "Doe",
	}
	fmt.Printf("%v\n", e2)

	e3 := Employee{3, "Jane"}
	fmt.Printf("%v\n", e3)

	e4 := NewEmployee(4, "Doe")
	fmt.Printf("%v\n", *e4)
}
