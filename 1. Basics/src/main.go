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

// package main

// import "fmt"

// func main() {
// 	x := 10
// 	y := 50

// 	// Suma
// 	result := x + y
// 	fmt.Println("x + y =", result)

// 	// Resta
// 	result = y - x
// 	fmt.Println("y - x =", result)

// 	// Multiplicación
// 	result = x * y
// 	fmt.Println("x * y =", result)

// 	// División
// 	result = y / x
// 	fmt.Println("y / x =", result)

// 	// Módulo
// 	result = y % x
// 	fmt.Println("y % x =", result)

// 	// Incremento
// 	x++
// 	fmt.Println("x++ =", x)

// 	// Decremento
// 	x--
// 	fmt.Println("x-- =", x)

// 	// Reto: Calcular el área de un rectangulo, trapecio y un círculo
// 	baseRectangulo := 4
// 	alturaRectangulo := 5
// 	areaRectangulo := baseRectangulo * alturaRectangulo
// 	fmt.Println("El área del rectangulo es:", areaRectangulo)

// 	baseTrapecio := 4
// 	base2Trapecio := 5
// 	alturaTrapecio := 6
// 	areaTrapecio := (baseTrapecio + base2Trapecio) / 2 * alturaTrapecio
// 	fmt.Println("El área del trapecio es:", areaTrapecio)

// 	const pi float64 = 3.1416
// 	radioCirculo := 5
// 	areaCirculo := pi * float64(radioCirculo*radioCirculo)
// 	fmt.Println("El área del círculo es:", areaCirculo)
// }

// ================================================

// 4. Tipos de datos primitivos
// int8, int16, int32, int64, int
// uint8, uint16, uint32, uint64, uint
// float32, float64
// string = ""
// bool
// complex64, complex128

// ================================================

// 5. Paquete fmt

// package main

// import "fmt"

// func main() {
// 	// fmt.Println -> Imprime un valor y agrega un salto de línea
// 	helloMessage := "Hello"
// 	worldMessage := "World"
// 	fmt.Println(helloMessage, worldMessage)

// 	// fmt.Printf -> %v = valor, %s = string, %d = int, %f = float, %t = bool
// 	name := "Fredy"
// 	age := 25
// 	fmt.Printf("%s tiene %d años\n", name, age)
// 	fmt.Printf("%v tiene %v años\n", name, age)

// 	// fmt.Sprintf -> Guardar el resultado de un Printf en una variable
// 	message := fmt.Sprintf("%s tiene %d años", name, age)
// 	fmt.Println(message)

// 	// Obtener el tipo de una variable
// 	fmt.Printf("helloMessage: %T\n", helloMessage)
// 	fmt.Printf("age: %T\n", age)
// }

// ================================================

// 6. Uso de funciones y funciones anónimas

package main

import "fmt"

func normalFunction(message string) {
	fmt.Println(message)
}

func tripleArgument(x, y int, z string) {
	fmt.Println(x, y, z)
}

func returnValue(x int) int {
	return x * 3
}

func doubleReturn(x int) (y, z int) {
	return x * 2, x * 3
}

func main() {
	normalFunction("Hola mundo!")
	tripleArgument(1, 2, "Hola")

	value1 := returnValue(3)
	fmt.Println("Value 1:", value1)

	// value2, value3 := doubleReturn(3)
	value2, _ := doubleReturn(3)
	fmt.Println("Value 2:", value2)
	// fmt.Println("Value 3:", value3)
}

// ================================================
