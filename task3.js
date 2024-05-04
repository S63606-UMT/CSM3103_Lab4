/* 1. Write a JavaScript program to create object product,
		a. Add the property Product Name, Quantity and price.
 		b. Access all the properties and display them.
*/
let product = {
  productName: "Apple iPhone",
  quantity: 10,
  price: 999.99
};

console.log(product.productName);
console.log(product.quantity);
console.log(product.price);

/* 2. Write a JavaScript program to create object book
 		a. Add the property book name, author name
 		b. Add the prototype property price .
 		c. Display all the properties.
*/
let book = {
  bookName: "To Kill a Mockingbird",
  authorName: "Harper Lee"
};

book.__proto__.price = 19.99;

console.log(book.bookName);
console.log(book.authorName);
console.log(book.price);

/*
3. Write a JavaScript program to create Parent object employee (Property : Employee Name , Employee Id , Salary) and Child object Manager (Property : Manager Name , Branch). 
Inherit all the properties of employee and display all the properties.
*/
function Employee(name, id, salary) {
  this.employeeName = name;
  this.employeeId = id;
  this.salary = salary;
}

function Manager(name, id, salary, branch) {
  Employee.call(this, name, id, salary);
  this.branch = branch;
}

Manager.prototype = Object.create(Employee.prototype);

let manager = new Manager("John Doe", 123, 50000, "New York");
console.log(manager.employeeName);
console.log(manager.employeeId);
console.log(manager.salary);
console.log(manager.branch);