/*
Description:Day prediction program using switch-case statements in Go
Author: Imran Parthib
Time: 05 April 2025, 9:05 PM
*/

package main

import "fmt"

func main() {
	day := "Friday"
	switch day {
	case "Saturday":
		fmt.Println("Today is Saturday")
	case "Sunday":
		fmt.Println("Today is Sunday")
	case "monday":
		fmt.Println("Today is Monday")
	case "Tuesday":
		fmt.Println("Today is Tuesday")
	case "Wednesday":
		fmt.Println("Today is Wednesday")
	case "Thursday":
		fmt.Println("Today is Thursday")
	case "Friday":
		fmt.Println("Today is Friday")
	default:
		fmt.Println("Invalid day")
	}

}
