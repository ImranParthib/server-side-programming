/*
This is a simple Hello World program in Go.
It prints "Hello, World!" to the console.
Author: Imran Parthib
Date: 2025-04-04
Time: 10:00 AM
*/
package main

import "fmt"

func main() {
	fmt.Println("Enter a Integer")
	var a int
	fmt.Scanln(&a)
	fmt.Println("You entered:", a)
	fmt.Println("Enter a Float")
	var b float64
	fmt.Scanln(&b)
	fmt.Println("You entered:", b)
	fmt.Println("Enter a String")
	var c string
	fmt.Scanln(&c)
	fmt.Println("You entered:", c)
	fmt.Println("Enter a Boolean")
	var d bool
	fmt.Scanln(&d)
	fmt.Println("You entered:", d)
}
