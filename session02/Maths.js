function maths ()
{
      addition = "this is the product of two or more numbers"
      subtract = "this is the removal of a quantity from a number"
      multiplication = "this is the increase of a number by a specific amount"
      division = "this is the reduction of a number by a specified amount"

      operator = prompt  ("Please enter one of the following: add, subtract, divide or multiply", "")

      if (operator == "add") {
        op1 = "You have selected ADDITION, "
        document.getElementById("maths").innerHTML = op1 + addition
      }

     else
     if (operator == "subtract") {
       op2 = " You have selected SUBTRACTION, "
       document.getElementById("maths").innerHTML = op2 + subtraction
     }

     if (operator == "add") {
       op3 = "You have selected MULTIPLICATION, "
       document.getElementById("maths").innerHTML = op3 + multiplication
     }

     if (operator == "add") {
       op3 = "You have selected DIVISION, "
       document.getElementById("maths").innerHTML = op3 + division
     }

     if (operator == "") {
       op4 = "You have selected nothing, try again"
       document.getElementById("maths").innerHTML = op4
     }
}
