- Properties hold values
- function are method that has some logic
- When an object has more than one method, object has behaviour to do different things


- Duplicating objects
- When an object is duplicated, if it has 0 method, it is not a big problem, however if it behavior, it is a big problem, and makes it redundant.
- Direct copy of object ctrl-c ctrl-v is called creating ibject using object literal syntax
- In such case we can use a factory function/constructors to create a new object, and return it.


- Constructor function
- When constructor function is called with new it creates a new object {}
- 'this' is a reference to the new object
- implicitly returh this is there but in code we dont write `return this`
- ES6 arrow functions cannot be used as constructor functions
- when you return object that is called factory function and when you use this along with new operator it is constructor funtion

Constructor Property
- Every object has a constructor property that points to the constructor function that created it
- there are many constructor properties like new String(), new Array(), new Date(), new Boolean(), new Number() but we use 'jatin',true,1,2
- when we create object jaavscript engine behind the scene uses new Object() constructor
- another.constructor, by default new Object()  constructor is not shown in console.log hereas constructor function, object's constructors are shown.