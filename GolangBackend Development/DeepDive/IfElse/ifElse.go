/*
Description: This is a simple program that demonstrates the use of if-else statements in Go.
Author: Imran Parthib
Time: 05 April 2025, 8:44 PM
*/

package main

import "fmt"

func main() {
	myAge := 18
	disablilty := true

	if myAge >= 18 && !disablilty {
		fmt.Println("I am eligible to give vote")
	} else {
		fmt.Println("I am not eligible to give vote")
	}
}
