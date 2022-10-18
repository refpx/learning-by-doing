package main

import "testing"

func TestSum(t *testing.T) {
	// total := Sum(5, 5)

	// if total != 10 {
	// 	t.Errorf("Sum was incorrect, got: %d, want: %d.", total, 10)
	// }
	tables := []struct {
		x int
		y int
		n int
	}{
		{1, 1, 2},
		{2, 2, 4},
		{3, 3, 6},
		{4, 4, 8},
		{5, 5, 10},
	}

	for _, table := range tables {
		total := Sum(table.x, table.y)
		if total != table.n {
			t.Errorf("Sum of (%d+%d) was incorrect, got: %d, want: %d.", table.x, table.y, total, table.n)
		}
	}
}

func TestMax(t *testing.T) {
	tables := []struct {
		x int
		y int
		n int
	}{
		{4, 2, 4},
		{3, 2, 3},
		{5, 4, 5},
	}

	for _, table := range tables {
		max := GetMax(table.x, table.y)
		if max != table.n {
			t.Errorf("Max of (%d, %d) was incorrect, got: %d, want: %d.", table.x, table.y, max, table.n)
		}
	}

}

func TestFib(t *testing.T) {
	tables := []struct {
		x int
		n int
	}{
		{1, 1},
		{8, 21},
		{50, 12586269025},
	}

	for _, item := range tables {
		fib := Fibonacci(item.x)
		if fib != item.n {
			t.Errorf("Fibonacci of (%d) was incorrect, got: %d, want: %d.", item.x, fib, item.n)
		}
	}
}
