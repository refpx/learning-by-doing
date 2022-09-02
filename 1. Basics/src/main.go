// 1. Hello world

// package main

// import "fmt"

// func main() {
// 	fmt.Println("Hello, World!")
// }

// ================================================

// 2. Variables, constants and zero values

// package main

// import "fmt"

// func main() {
// 	// Declaración de constantes
// 	const pi float64 = 3.14
// 	const pi2 = 3.1415

// 	fmt.Println("pi:", pi)
// 	fmt.Println("pi2:", pi2)

// 	// Declaración de variables enteras
// 	base := 12
// 	var altura int = 14
// 	var area int

// 	fmt.Println(base, altura, area)

// 	// Zero values
// 	var a int
// 	var b float64
// 	var c string
// 	var d bool

// 	fmt.Println(a, b, c, d)

// 	// Calcular el área de un cuadrado
// 	const baseCuadrado = 10
// 	areaCuadrado := baseCuadrado * baseCuadrado
// 	fmt.Println("El área del cuadrado es:", areaCuadrado)
// }

// ================================================

// 3. Arithmetic operators

package main

import "fmt"

func main() {
	x := 10
	y := 50

	// Suma
	result := x + y
	fmt.Println("x + y =", result)

	// Resta
	result = y - x
	fmt.Println("y - x =", result)

	// Multiplicación
	result = x * y
	fmt.Println("x * y =", result)

	// División
	result = y / x
	fmt.Println("y / x =", result)

	// Módulo
	result = y % x
	fmt.Println("y % x =", result)

	// Incremento
	x++
	fmt.Println("x++ =", x)

	// Decremento
	x--
	fmt.Println("x-- =", x)

	// Reto: Calcular el área de un rectangulo, trapecio y un círculo
	baseRectangulo := 4
	alturaRectangulo := 5
	areaRectangulo := baseRectangulo * alturaRectangulo
	fmt.Println("El área del rectangulo es:", areaRectangulo)

	baseTrapecio := 4
	base2Trapecio := 5
	alturaTrapecio := 6
	areaTrapecio := (baseTrapecio + base2Trapecio) / 2 * alturaTrapecio
	fmt.Println("El área del trapecio es:", areaTrapecio)

	const pi float64 = 3.1416
	radioCirculo := 5
	areaCirculo := pi * float64(radioCirculo*radioCirculo)
	fmt.Println("El área del círculo es:", areaCirculo)
}

// ================================================
