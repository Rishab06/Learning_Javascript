// # Primitive datatypes(In JavaScript, primitive data types are passed by value (call by value). This means that when you assign a primitive value to a variable or pass it to a function, JavaScript creates a copy of that value. Any changes made to the copied value do not affect the original value. )

// 7 types : String , Number , Boolean, Null , undefined , Symbol(make the unquie value) , Bigint.

// JavaScript is a dynamically typed language. Means the type of a variable is determined at runtime, not at compile time.
// 2.) You don’t need to declare the type of a variable explicitly.
// 3.) A variable can hold values of different types at different points in the program.


// Refernece type or Non-Primitive datatypes (Objects and arrays in JavaScript are passed by reference. This means when you assign or pass an object/array, JavaScript copies the reference (memory address) instead of the actual value.)

// Array , Object , Function funcion type of function or function_Object


const score=100;
const scoreValue=100.33

const loogedIn =false
const outsideTemp=null;

let userEmail=undefined;
 const id =Symbol("123")

 const userId=Symbol('123')
 console.log(id==userId);


const bigNumber=454564654654654654654654564564566545645645645645456n


const heroes=["superman" , "ironman"] //Array


    let myObj={  //object
    name:"rishab",
    age : 22,

}


const myFunction=function(){
    console.log("Hello World");
    
}



console.log(typeof myObj);



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 // Stack (Primitive){In this we get the copy} , Heap(Non-Prmitive){in this this we get the refernce or orignal value} 

 let myName="Rishab"

 let anotherName=myName
 anotherName="shukla"

 console.log(myName);
 console.log(anotherName)


 let userOne={

    email: "iwrjd@gmail.com",
    upi:  "user@ybl"

 }

 let userTwo=userOne

 userTwo.email="rs74@gmail.com"
 console.log(userOne.email) // dot(.) is used to excess the value in objects 
 console.log(userTwo.email)
