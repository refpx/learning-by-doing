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

// package main

// import "fmt"

// func normalFunction(message string) {
// 	fmt.Println(message)
// }

// func tripleArgument(x, y int, z string) {
// 	fmt.Println(x, y, z)
// }

// func returnValue(x int) int {
// 	return x * 3
// }

// func doubleReturn(x int) (y, z int) {
// 	return x * 2, x * 3
// }

// func main() {
// 	normalFunction("Hola mundo!")
// 	tripleArgument(1, 2, "Hola")

// 	value1 := returnValue(3)
// 	fmt.Println("Value 1:", value1)

// 	// value2, value3 := doubleReturn(3)
// 	value2, _ := doubleReturn(3)
// 	fmt.Println("Value 2:", value2)
// 	// fmt.Println("Value 3:", value3)
// }

// ================================================

// 7. Go doc

// https://pkg.go.dev/ -> Documentación de paquetes
// https://go.dev/ref/spec -> Especificación de Go

// ================================================

// 8. El poder del ciclo for en Golang

// package main

// import "fmt"

// func main() {
// 	// For condicional
// 	for i := 0; i < 5; i++ {
// 		fmt.Println("Valor de i:", i)
// 	}

// 	for i := 10; i > 0; i-- {
// 		fmt.Println("Valor de i:", i)
// 	}

// 	// For while
// 	counter := 0
// 	for counter < 5 {
// 		fmt.Println("Valor de counter:", counter)
// 		counter++
// 	}

// 	// For infinito
// 	counterForever := 0
// 	for {
// 		fmt.Println(counterForever)
// 		counterForever++
// 	}
// }

// ================================================

// 9. El condicional if en Golang

// package main

// import (
// 	"fmt"
// 	"log"
// 	"strconv"
// )

// func evenOrOdd(value int) string {
// 	if value%2 == 0 {
// 		return "Par"
// 	} else {
// 		return "Impar"
// 	}
// }

// func isAdmin(username, password string) bool {
// 	usernameAdmin := "admin"
// 	passwordAdmin := "admin"

// 	if username == usernameAdmin && password == passwordAdmin {
// 		return true
// 	} else {
// 		return false
// 	}
// }

// func main() {
// 	valor1 := 1
// 	valor2 := 2

// 	if valor1 == 1 {
// 		fmt.Println("Valor1 es igual a 1")
// 	} else {
// 		fmt.Println("Valor1 no es igual a 1")
// 	}

// 	// Con AND - &&
// 	if valor1 == 1 && valor2 == 2 {
// 		fmt.Println("Es verdad")
// 	}

// 	// Con OR - ||
// 	if valor1 == 1 || valor2 == 2 {
// 		fmt.Println("Es verdad")
// 	}

// 	// Convertir texto a número
// 	// value, err := strconv.Atoi("asdasd") // Error
// 	value, err := strconv.Atoi("10") // OK
// 	if err != nil {                  // nil = vacío
// 		log.Fatal(err)
// 	}
// 	fmt.Println(value)

// 	// Reto: función para determinar si un número es par o impar
// 	fmt.Println(evenOrOdd(1))
// 	fmt.Println(evenOrOdd(2))

// 	// Reto: función para determinar acceso a un sitio web
// 	fmt.Println(isAdmin("admin", "admin"))
// 	fmt.Println(isAdmin("admin", "admin2"))
// }

// ================================================

// 10. Multiples condiciones anidadas con switch en Golang

// package main

// import "fmt"

// func main() {
// 	// modulo := 4 % 2
// 	switch modulo := 4 % 2; modulo {
// 	case 0:
// 		fmt.Println("Es par")
// 	default:
// 		fmt.Println("Es impar")
// 	}

// 	// Switch sin condición
// 	value := 100
// 	switch {
// 	case value > 100:
// 		fmt.Println("Es mayor a 100")
// 	case value < 100:
// 		fmt.Println("Es menor a 100")
// 	default:
// 		fmt.Println("Es igual a 100")
// 	}
// }

// ================================================

// 11. El uso de los keywords defer, break y continue

// package main

// import "fmt"

// func main() {
// 	// Defer -> Se ejecuta al final de la función, antes de que todo muera
// 	defer fmt.Println("Hola")
// 	fmt.Println("Mundo")

// 	// Continue -> Salta la iteración actual
// 	// Break -> Sale del ciclo
// 	for i := 0; i < 5; i++ {
// 		fmt.Println("Valor de i:", i)

// 		// Continue
// 		if i == 2 {
// 			fmt.Println("Es 2")
// 			continue
// 		}

// 		// Break
// 		if i == 3 {
// 			fmt.Println("Es 3")
// 			break
// 		}
// 	}
// }

// ================================================

// 12. Arrays y slices

// package main

// import "fmt"

// func main() {
// 	// Arrays
// 	var array [4]int
// 	array[0] = 1
// 	array[1] = 2
// 	fmt.Println(array, len(array), cap(array)) // len -> longitud, cap -> capacidad

// 	// Slices
// 	slice := []int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
// 	fmt.Println(slice, len(slice), cap(slice))

// 	// Métodos en el slice
// 	fmt.Println(slice[0])   // Elemento específico
// 	fmt.Println(slice[:3])  // Desde el inicio hasta el índice 3
// 	fmt.Println(slice[1:3]) // Desde el índice 1 hasta el índice 3
// 	fmt.Println(slice[3:])  // Desde el índice 3 hasta el final
// 	fmt.Println(slice[:])   // Desde el inicio hasta el final

// 	// Agregar elementos al slice
// 	slice = append(slice, 10)
// 	fmt.Println(slice)

// 	// Agregar nuevo slice al slice
// 	newSlice := []int{11, 12, 13}
// 	slice = append(slice, newSlice...)
// 	fmt.Println(slice)
// }

// ================================================

// 13. Recorrido de Slices con Range

// package main

// import (
// 	"fmt"
// 	"strings"
// )

// func esPalindromo(text string) {
// 	text = strings.ToLower(text)
// 	var textReverse string
// 	for i := len(text) - 1; i >= 0; i-- {
// 		textReverse += string(text[i])
// 	}
// 	fmt.Println(text)
// 	fmt.Println(textReverse)

// 	if text == textReverse {
// 		fmt.Println("Es palíndromo")
// 	} else {
// 		fmt.Println("No es palíndromo")
// 	}
// }

// func main() {
// 	slice := []string{"Hola", "Mundo", "!"}

// 	for i, value := range slice {
// 		fmt.Println(i, value)
// 	}

// 	esPalindromo("Ama")
// }

// ================================================

// 14. Llave valor con Maps

// package main

// import "fmt"

// func main() {
// 	// Maps -> Llave - Valor / almacena datos de forma desordenada
// 	m := make(map[string]int)
// 	m["Jose"] = 20
// 	m["Maria"] = 25
// 	fmt.Println(m)

// 	// Recorrer map
// 	for i, v := range m {
// 		fmt.Println(i, v)
// 	}

// 	// Encontrar valor
// 	value, ok := m["Jose"]
// 	fmt.Println(value, ok)
// }

// ================================================

// 15. Structs: La forma de hacer clases en Go

// package main

// import "fmt"

// type car struct {
// 	brand string
// 	year  int
// }

// func main() {
// 	myCar := car{brand: "Ford", year: 2020}
// 	fmt.Println(myCar)

// 	var otherCar car
// 	otherCar.brand = "Ferrari"
// 	otherCar.year = 2021
// 	fmt.Println(otherCar)
// }

// ================================================

// 16. Modificadores de acceso en funciones y Structs

// package main

// import (
// 	"fmt"
// 	pk "learning-golang/basics/src/mypackage"
// )

// func main() {
// 	var myCar pk.CarPublic
// 	myCar.Brand = "Ford"
// 	fmt.Println(myCar)

// 	var myOtherCar pk.carPrivate
// 	fmt.Println(myOtherCar)

// 	pk.PrintMessage("Hola")
// 	pk.printMessage1("Mundo")
// }

// ================================================

// 17. Structs y Punteros

// package main

// import "fmt"

// type pc struct {
// 	ram   int
// 	disk  int
// 	brand string
// }

// func (myPC pc) ping() {
// 	fmt.Println(myPC.brand, "Pong")
// }

// func (myPC *pc) duplicateRAM() {
// 	myPC.ram = myPC.ram * 2
// }

// func main() {
// 	x := 50
// 	y := &x
// 	fmt.Println(y)
// 	fmt.Println(*y)

// 	*y = 100
// 	fmt.Println(x)

// 	myPC := pc{ram: 16, disk: 256, brand: "ASUS"}
// 	fmt.Println(myPC)

// 	myPC.ping()

// 	fmt.Println(myPC)
// 	myPC.duplicateRAM()

// 	fmt.Println(myPC)
// 	myPC.duplicateRAM()

// 	fmt.Println(myPC)
// }

// ================================================

// 18. Stringers: Personalizar el output de un Struct

// package main

// import "fmt"

// type pc struct {
// 	ram   int
// 	disk  int
// 	brand string
// }

// func (myPC pc) String() string {
// 	return fmt.Sprintf("Tengo %d GB de RAM, %d GB de disco y es una %s", myPC.ram, myPC.disk, myPC.brand)
// }

// func main() {
// 	myPC := pc{ram: 16, disk: 256, brand: "ASUS"}
// 	fmt.Println(myPC)
// }

// ================================================

// 19. Interfaces y listas de interfaces

// package main

// import "fmt"

// type figuras2D interface {
// 	area() float64
// }

// type cuadrado struct {
// 	base float64
// }

// type rectangulo struct {
// 	base   float64
// 	altura float64
// }

// func (c cuadrado) area() float64 {
// 	return c.base * c.base
// }

// func (r rectangulo) area() float64 {
// 	return r.base * r.altura
// }

// func calcular(f figuras2D) {
// 	fmt.Println("Área:", f.area())
// }

// func main() {
// 	miCuadrado := cuadrado{base: 3}
// 	miRectangulo := rectangulo{base: 3, altura: 6}

// 	calcular(miCuadrado)
// 	calcular(miRectangulo)

// 	// Lista de interfaces
// 	miInterface := []interface{}{"Hola", 3, true}
// 	fmt.Println(miInterface...)
// }

// ================================================

// 20. Goroutines

// package main

// import (
// 	"fmt"
// 	"sync"
// 	"time"
// )

// func say(text string, wg *sync.WaitGroup) {
// 	defer wg.Done()
// 	fmt.Println(text)
// }

// func main() {
// 	var wg sync.WaitGroup

// 	fmt.Println("Hola")
// 	wg.Add(1)

// 	go say("Mundo", &wg)

// 	wg.Wait()

// 	go func(text string) {
// 		fmt.Println(text)
// 	}("Adios")

// 	time.Sleep(time.Second * 1)
// }

// ================================================

// 21. Channels: La forma de organizar las goroutines

// package main

// import "fmt"

// func say(text string, c chan<- string) {
// 	c <- text
// }

// func main() {
// 	c := make(chan string, 1)

// 	fmt.Println("Hola")

// 	go say("Adiós", c)

// 	fmt.Println(<-c)
// }

// ================================================

// 22. Range, Close y Select en Channels

// package main

// import "fmt"

// func message(text string, c chan string) {
// 	c <- text
// }

// func main() {
// 	c := make(chan string, 2)
// 	c <- "Mensaje 1"
// 	c <- "Mensaje 2"

// 	fmt.Println(len(c), cap(c))

// 	// Range y close
// 	close(c)

// 	// c <- "Mensaje 3"

// 	for message := range c {
// 		fmt.Println(message)
// 	}

// 	// Select
// 	email1 := make(chan string)
// 	email2 := make(chan string)
// 	go message("Mensaje 1", email1)
// 	go message("Mensaje 2", email2)

// 	for i := 0; i < 2; i++ {
// 		select {
// 		case m1 := <-email1:
// 			fmt.Println("Email 1:", m1)
// 		case m2 := <-email2:
// 			fmt.Println("Email 2:", m2)

// 		}
// 	}
// }

// ================================================

// 23. Go modules

package main

import (
	"net/http"

	"github.com/labstack/echo"
)

func main() {
	// Instanciar echo
	e := echo.New()

	// Ruta
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hola Mundo")
	})
	e.Logger.Fatal(e.Start(":1323"))
}

// ================================================
