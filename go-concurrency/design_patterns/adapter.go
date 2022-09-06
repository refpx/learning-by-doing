package main

import "fmt"

type Payment interface {
	Pay()
}

type CashPayment struct{}

func (CashPayment) Pay() {
	fmt.Println("Paying with cash")
}

type BankPayment struct{}

func (BankPayment) Pay(bankAccount int) {
	fmt.Printf("Paying using BankAccount: %d\n", bankAccount)
}

func ProcessPayment(p Payment) {
	p.Pay()
}

type BankPaymentAdapter struct {
	BankPayment *BankPayment
	BankAccount int
}

func (bpa *BankPaymentAdapter) Pay() {
	bpa.BankPayment.Pay(bpa.BankAccount)
}

func main() {
	cash := &CashPayment{}
	ProcessPayment(cash)

	// bank := &BankPayment{}
	// ProcessPayment(bank)

	bpa := &BankPaymentAdapter{
		BankPayment: &BankPayment{},
		BankAccount: 5,
	}
	ProcessPayment(bpa)
}
