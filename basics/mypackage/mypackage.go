package mypackage

import "fmt"

// CarPublic Car con acceso público
type CarPublic struct {
	Brand string
	Year  int
}

type carPrivate struct {
	brand string
	year  int
}

// PrintMessage Imprime un mensaje
func PrintMessage(text string) {
	fmt.Println(text)
}

func printMessage1(text string) {
	fmt.Println(text)
}
