// Task 0 : (Example) write a function that takes 2 numbers and return the Sum of them

const add = (num1, num2) => {
    return num1 + num2
}
console.log(add(5,10))

// Task1: Create a function that takes the age in years 
// and returns the age in seconds. ex: age = 25 years , Notes: 1 year = 365 days
const age = (i) => {
    return i*365*24*3600
}
console.log(age(13))

// Task2: Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number. ex: halfQuarterEighth(6) ➞ [3, 1.5, 0.75]
const array1 = (x) => {
    return [x/2, x/4, x/8];
}
console.log (array1(6))
 

// Task3: Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.
const evenOdd = (y) => {
    if(y % 2 ==0){
        console.log("even")
    }
    else  console.log("odd")
}
evenOdd(12) 

// Task 4 : Create a function which takes two strings (p1 and p2 ⁠— which represent player 1 and 2) as arguments and returns a string stating the winner in a game of Rock, Paper, Scissors.

// Each argument will contain a single string: "Rock", "Paper", or "Scissors". Return the winner according to the following rules:

// Rock beats Scissors
// Scissors beats Paper
// Paper beats Rock

// If p1 wins, return the string "The winner is p1". If p2 wins, return the string "The winner is p2" and if p1 and p2 are the same, return "It's a draw"

// Notes: All inputs will be strings ex: rps("Scissors", "Paper") ➞ "The winner is p1"

const PaperRock = (p1, p2) => {
    if ((p1=="Rock"&&p2=="Scissors")||(p1 == "Scissors" && p2 == "Paper") || (p1 == "Paper" && p2 == "Rock")) {
        return "The winner is p1"
    }
    else if ((p2=="Rock"&& p1=="Scissors")||(p2 == "Scissors" && p1 == "Paper") || (p2 == "Paper" && p1 == "Rock")) {
        return "The winner is p2"
    }
    else return  "It's a draw" ;
}
console.log(PaperRock("Paper","Scissors"));

// Task 5 : Create a function that takes two numbers and a mathematical operator and returns the result. ex: calculate(4, 9, "+") ➞ 13
const calculate = (numx,numy,oprator) =>
{
    if(oprator== "+"){  return numx + numy }
    else if(oprator == "-"){ return numx - numy }
    else if(oprator== "/"  && numy!=0 ){ return numx / numy }
    else if(oprator == "*"){ return numx * numy }
    else {return "invailde oprator"}
}
console.log( calculate(10,5,"/"))


// Task 6 : Let us have the following Array [65, 14 ,32 ,23 ,44, 14 ,27, 66 , 35]
// Create a function that examines the elements of the array
// It multiplies the odd numbers that are greater than 20 by 2 and the rest of the numbers are replaced by the number 100 
// In addition to having a counter that calculates the number of odd digits that are greater than 20 in the array

const fun = () => {
    const Array = [65, 14 ,32 ,23 ,44, 14 ,27, 66 , 35]
    let counter = 0 ;
    for (let index = 0; index < Array.length; index++) {
        if (Array[index] % 2 != 0 && Array[index] > 20 )
        {
             counter++
             Array[index]*=2
        }
        else {
             Array[index]=100
        }
    }
    console.log(Array)
    console.log(counter)
}
fun()

//Task 7 : write a function that takes two arguments, name and age Stores the characters of the name passed within an array  
// And if the age that is passed to the function is greater than 18, console 
// "You are Welcome"
// Or console
// "Not Found"
// Call the function and pass him your name and age
const funArr = (name, age) =>
{
    if(age > 18){
        console.log("You are Welcome")
    }
    else console.log("Not Found")
}
name= ['s','a','n', 'a']
funArr(name, 21)

// Task8: For section-1 , Match the class name to the content
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const x = one.innerText;
one.innerText = two.innerText;
two.innerText = x;
// Task9: For section-2 , Write the function changeText() that toggle the text from "hello" to "yourWelcome" when you press the button.
// and write the function changeColor() which toggle the color of the text between any two colors you choose.
const text = document.getElementById("text")
const changeText = ()=>{
    text.innerText == "hello" ? text.innerText = "your welcome" : text.innerText ="hello"
}

const changeColor = () => {
    text.style.color == "black" ? text.style.color = "blue" : text.style.color ="black"
}
// Task10 : in section .container you have 3 buttons, Change container background color like button color on click

const gray = document.querySelector(".container .gray")
const gold = document.querySelector(".container .gold")
const orange = document.querySelector(".container .orange")
const container = document.querySelector(".container") ;
gray.addEventListener('click' , ()=>{
    container.style.backgroundColor = "gray";
})
orange.addEventListener('click' , ()=>{
    container.style.backgroundColor = "orange";
})
gold.addEventListener('click' , ()=>{
    container.style.backgroundColor = "gold";
})