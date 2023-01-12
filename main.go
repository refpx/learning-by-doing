package main

import (
	"fmt"

	"0.Basics/greet"
)

func main() {
	// ==========> Variables
	/*
		// var dog string = "🐕"
		// var dog = "🐕"
		// var dog, cat string = "🐕", "🐈"
		// var dog, cat = "🐕", "🐈"
		dog, cat := "🐕", "🐈"
		face, cat := "😀", "🐈"
		fmt.Println(dog, cat, face)
	*/

	// ==========> Constantes
	/*
		const Pi = 3.14
		fmt.Println(Pi)
	*/

	// ==========> Tipos de datos y valor zero
	/*
		// bool, string, numeric
		// var a bool = true
		// var a string = "Hola"
		// var a uint8 = 100
		// var a byte = 100
		// var a rune = 'a'
		// var a float64 = 23.56

		// _ = 0
		// var _ string = "Hola"

		// var a uint8 = 100
		// var b uint16 = 23000
		// c := uint16(a) + b

		// var a bool

		// fmt.Printf("Tipo: %T, Valor: %v\n", a, a)

	*/

	// ==========> Operadores aritméticos y de asignación
	/*

		// Operadores Aritméticos: (), *, /, %, +, -
		var a = 4 + 2*3
		fmt.Println(a)

		// Operadores de asignación: =, +=, -=, *=, /=, %=
		var b = 10
		b += 2
		fmt.Println(b)

		// Declaración post-incremento y post-decremento: ++, --
		// (no son una expresión sino una declaración)
		var c = 3
		c++
		fmt.Println(c)

	*/

	// ==========> Operadores de comparación y lógicos
	/*
		// Operadores de comparación: >, <, ==, !=, >=, <=
		fmt.Println(3 != 2)

		// Operadores lógicos: &&, ||
		fmt.Println(true && false)

		// Unario: !
		fmt.Println(!(4 == 4))
	*/

	// ==========> Punteros
	/*
		// &: operador de dirección
		fruit := "🍎"
		var p *string // *: declarando una variable de tipo puntero
		p = &fruit
		*p = "😀" // *: operador de desreferenciación
		fmt.Printf("Tipo: %T, Valor: %s, Dirección: %v\n", fruit, fruit, &fruit)
		fmt.Printf("Tipo: %T, Valor: %v, Desreferenciación: %s\n", p, p, *p)
	*/

	// ==========> Arrays
	/*
		// var food [3]string
		// food[0] = "🍔"
		// food[1] = "🍕"
		// food[2] = "🍟"
		// food[3] = "🍝"

		food := [3]string{"🍔", "🍕", "🍝"}

		fmt.Println(food)
	*/

	// ==========> Slices
	/*

		// Slice son apuntadores a un Array, no poseen datos
		// Slice permite trabajar con Arrays de forma dinámica
		// set := [7]string{"🍔", "🍕", "🍝", "🍟", "🍿", "🍺", "🍷"}
		// food := set[:5]
		// drink := set[5:]
		// fmt.Println(food)
		// fmt.Println(drink)
		// fmt.Println(set[:])

		// set := [5]string{"🍺", "🍷", "🍝", "🍟", "🍿"}
		// drink := set[1:3] // "🍺", "🍷"
		// drink = append(drink, "💧", "🍹")
		// fmt.Println("Comida", set)
		// fmt.Println("Bebidas", drink)
		// fmt.Println("Tamaño", len(drink))
		// fmt.Println("Capacidad", cap(drink))

		// fruits := []string{"🍎", "🍌", "🍉", "🍇", "🍓"}
		// fruits = append(fruits, "🍍")
		// fmt.Println("Frutas", fruits)
		// fmt.Println("Tamaño", len(fruits))
		// fmt.Println("Capacidad", cap(fruits))

		// fruits := make([]string, 0, 3)
		// fruits = append(fruits, "🍍", "🍎", "🍌", "🍉")
		// fmt.Println("Frutas", fruits)
		// fmt.Println("Tamaño", len(fruits))
		// fmt.Println("Capacidad", cap(fruits))

		// fruits := []string{}
		// fmt.Println(fruits == nil)
	*/

	// ==========> Maps
	/*
		animals := make(map[string]string)
		animals["dog"] = "🐶"
		animals["cat"] = "🐱"
		fmt.Println(animals)

		fruits := map[string]string{
			"apple":  "🍎",
			"banana": "🍌",
			"kiwi":   "🥝",
		}
		fmt.Println(fruits)

		delete(fruits, "kiwi")
		fmt.Println(fruits)

		fmt.Println(animals["cat"])

		if _, ok := animals["gorilla"]; !ok {
			animals["gorilla"] = "🦍"
		}

		fmt.Println(animals)
	*/

	// ==========> Structs
	/*
		// type course struct {
		// 	Name      string
		// 	Professor string
		// 	Country   string
		// }

		// db := course{
		// 	Name:      "Base de datos",
		// 	Professor: "Jhon Doe",
		// 	Country:   "Perú",
		// }

		// git := course{"Git", "Jhon Doe", "Perú"}

		// css := course{Professor: "Jhon Doe"}

		// fmt.Printf("%+v\n", db.Name)
		// fmt.Printf("%+v\n", git.Country)
		// fmt.Printf("%+v\n", css.Professor)

		type course struct {
			Name      string
			Professor string
			Country   string
		}

		db := course{
			Name:      "Base de datos",
			Professor: "Jhon Doe",
			Country:   "Perú",
		}

		p := &db
		p.Professor = "Sara Doe"

		fmt.Printf("%+v\n", db)
		fmt.Printf("%+v\n", p)
	*/

	// ==========> If - Else
	/*
		// emoji := "🐕"

		// if emoji == "🌵" {
		// 	fmt.Println("Es un cactus")
		// } else if emoji == "😀" {
		// 	fmt.Println("Es un carita")
		// } else {
		// 	fmt.Printf("El emoji es: %s\n", emoji)
		// }

		if emoji := "🌵"; emoji == "🌵" {
			fmt.Println("Es un cactus")
		} else if emoji == "😀" {
			fmt.Println("Es un carita")
		} else {
			fmt.Printf("El emoji es: %s\n", emoji)
		}
	*/

	// ==========> Switch
	/*

		// emoji := "🍌"

		// switch emoji {
		// case "🐈", "🐕":
		// 	fmt.Println("Es un animal")
		// case "🍌", "🍎":
		// 	fmt.Println("Es una fruta")
		// default:
		// 	fmt.Printf("El emoji es: %s\n", emoji)
		// }

		emoji := "🍌"

		switch {
		case emoji == "🐈" || emoji == "🐕":
			fmt.Println("Es un animal")
		case emoji == "🍌" || emoji == "🍎":
			fmt.Println("Es una fruta")
		default:
			fmt.Printf("El emoji es: %s\n", emoji)
		}
	*/

	// ==========> For
	/*
		// For
		// for i := 1; i <= 10; i++ {
		// 	fmt.Println(i)
		// }

		// For while
		// i := 1
		// for i <= 10 {
		// 	fmt.Println(i)
		// 	i++
		// }

		// For forever
		// i = 1
		// for {
		// 	fmt.Println(i)
		// 	i++
		// }

		// For range
		nums := []uint8{2, 4, 6, 8, 10}
		for i := range nums {
			nums[i] *= 2
		}
		fmt.Println(nums)
	*/

	// ==========> Iterar maps
	/*
	  sports := map[string]string{"basketball": "🏀", "soccer": "⚽️", "tennis": "🎾"}

	  for key, v := range sports {
	    fmt.Println(key, v)
	  }
	*/

	// ==========> Iterar strings
	/*
		  hello := "hello"
			for _, v := range hello {
				fmt.Println(string(v))
			}
	*/

	// ==========> Funciones parte 1
	/*
		// hello()
		// hello("Jhon", "Doe")
		// hello("Sara", "Doe")

		// emoji := "👻"
		// change(&emoji)
		// fmt.Println(emoji)

		// total := sum(1, 2)
		// fmt.Println(total)

		texto := "FreDY"
		minusc, mayusc := convert(texto)
		fmt.Println(minusc, mayusc)
	*/

	// ==========> Manejo de errores
	/*
		// content, err := ioutil.ReadFile("./things.txt")
		// if err != nil {
		// 	fmt.Printf("Ocurrio un error: %v\n", err)
		// 	return
		// }
		// fmt.Println(string(content))

		result, err := division(10, 2)
		if err != nil {
			fmt.Printf("Ocurrio un error: %v\n", err)
			return
		}
		fmt.Println(result)
	*/

	// ==========> Funciones parte 2
	/*
		// nums := []int{1, 4, 70, 5, 67, 90, 2}
		// result := filter(nums, func(num int) bool {
		// 	if num <= 10 {
		// 		return true
		// 	}

		// 	return false
		// })
		// fmt.Println(result)

		// x := hello("Fredy")("Romero")
		// fmt.Println(x)

		fmt.Println(sum(1, 2, 3, 4, 5))
	*/

	// ==========> Funciones anónimas
	/*
		// func() {
		// 	fmt.Println("Hola")
		// }()

		func(text string) {
			fmt.Println("Hola", text)
		}("Fredy")
	*/

	// ==========> Defer
	/*
		// a := 5
		// defer fmt.Println("Defer:", a)

		// a = 10
		// fmt.Println(a)

		file, err := os.Create("file.txt")
		if err != nil {
			fmt.Printf("Ocurrio un error al crear el archivo: %v\n", err)
			return
		}
		defer file.Close()

		_, err = file.Write([]byte("Hola mundo"))
		if err != nil {
			fmt.Printf("Ocurrio un error al escribir el archivo: %v\n", err)
			return
		}
	*/

	// ==========> Panic
	/*
		division(10, 2)
		division(10, 5)
		division(10, 0)
		division(30, 3)
	*/

	// ==========> Recover
	/*
		division(10, 2)
		division(10, 5)
		division(10, 0)
		division(30, 3)
	*/

	// ==========> Paquetes
	fmt.Println("Hello")
	greet.English()
	greet.Spanish()
	greet.Italian()
}

// ==========> Funciones parte 1
/*
// func hello() {
// 	fmt.Println("Hello")
// }

// func hello(firstName string, lastName string) {
// 	fmt.Printf("Hello %s %s\n", firstName, lastName)
// }

// func change(value *string) {
// 	*value = "🎃"
// }

// func sum(a, b int) int {
// 	return a + b
// }

func convert(text string) (string, string) {
	minusc := strings.ToLower(text)
	mayusc := strings.ToUpper(text)
	return minusc, mayusc
}
*/

// ==========> Manejo de errores
/* func division(dividendo, divisor int) (result int, err error) {
	if divisor == 0 {
		err = errors.New("No se puede dividir por cero")
		return
	}
	result = dividendo / divisor
	return
} */

// ==========> Funciones parte 2
/*
// func filter(nums []int, callback func(int) bool) []int {
// 	result := []int{}
// 	for _, v := range nums {
// 		if callback(v) {
// 			result = append(result, v)
// 		}
// 	}
// 	return result
// }

// func hello(name string) func(string) string {
// 	return func(text string) string {
// 		return "Hello " + name + " " + text
// 	}
// }

func sum(nums ...int) int {
	total := 0
	for _, v := range nums {
		total += v
	}
	return total
}
*/

// ==========> Panic
/*
func division(dividendo, divisor int) {
	validarDivisor(divisor)
	fmt.Println(dividendo / divisor)
}

func validarDivisor(divisor int) {
	if divisor == 0 {
		panic("No se puede dividir por cero")
	}
}
*/

// ==========> Recover
/*
func division(dividendo, divisor int) {
	defer func() {
		if r := recover(); r != nil {
			fmt.Println("Recuperandome del panic:", r)
		}
	}()

	validarDivisor(divisor)
	fmt.Println(dividendo / divisor)
}

func validarDivisor(divisor int) {
	if divisor == 0 {
		panic("No se puede dividir por cero")
	}
}
*/
