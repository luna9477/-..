const numbers = [5, 10, 15, 20, 25];

const squared = numbers.map(num => num * num);
console.log("Squared:", squared);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);


const students = [
  { id: 1, name: 'Alice', grade: 85 },
  { id: 2, name: 'Bob', grade: 75 },
  { id: 3, name: 'Charlie', grade: 95 },
  { id: 4, name: 'David', grade: 60 },
];

const studentNames = students.map(student => student.name);
console.log("Student Names:", studentNames);

const passedStudents = students.filter(student => student.grade >= 70);
console.log("Passed Students:", passedStudents);

const averageGrade = students.reduce((acc, s) => acc + s.grade, 0) / students.length;
console.log("Average Grade:", averageGrade);

const products = [
  { id: 1, name: 'Laptop', price: 800 },
  { id: 2, name: 'Mouse', price: 20 },
  { id: 3, name: 'Keyboard', price: 50 },
  { id: 4, name: 'Monitor', price: 150 }
];

const totalPrice = products
  .filter(p => p.price > 100)
  .map(p => p.price * 2)
  .reduce((acc, price) => acc + price, 0);

console.log("Total price:", totalPrice);