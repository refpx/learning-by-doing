package main

import "testing"

func TestGetFullTimeEmployeeById(t *testing.T) {
	table := []struct {
		id               int
		dni              string
		mockFunc         func()
		expectedEmployee FullTimeEmployee
	}{
		{
			id:  1,
			dni: "1",
			mockFunc: func() {
				GetPersonByDNI = func(dni string) (Person, error) {
					return Person{
						Name: "John",
						Age:  30,
						DNI:  "1",
					}, nil
				}

				GetEmployeeById = func(id int) (Employee, error) {
					return Employee{
						Id:       1,
						Position: "Developer",
					}, nil
				}
			},
			expectedEmployee: FullTimeEmployee{
				Person: Person{
					Name: "John",
					Age:  30,
					DNI:  "1",
				},
				Employee: Employee{
					Id:       1,
					Position: "Developer",
				},
			},
		},
	}

	originalGetEmployeeById := GetEmployeeById
	originalGetPersonByDNI := GetPersonByDNI

	for _, tt := range table {
		tt.mockFunc()
		ft, err := GetFullTimeEmployeeById(tt.id, tt.dni)
		if err != nil {
			t.Errorf("GetFullTimeEmployeeById(%d, %s) = %v", tt.id, tt.dni, err)
		}

		if ft.Age != tt.expectedEmployee.Age {
			t.Errorf("GetFullTimeEmployeeById(%d, %s) = %v, want %v", tt.id, tt.dni, ft, tt.expectedEmployee)
		}
	}

	GetEmployeeById = originalGetEmployeeById
	GetPersonByDNI = originalGetPersonByDNI
}
