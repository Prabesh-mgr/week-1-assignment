let students = [
    {
        name: "Alice",
        age: 20,
        grade: "A",
        city: "New York",
    },
    {
        name: "Bob",
        age: 22,
        grade: "B",
        city: "Chicago",
    },
    {
        name: "Charlie",
        age: 21,
        grade: "A",
        city: "Los Angeles",
    },
    {
        name: "Diana",
        age: 23,
        grade: "C",
        city: "Houston",
    },
    {
        name: "Eve",
        age: 20,
        grade: "B",
        city: "Miami",
    },
];

// let count = 0;
// students.forEach((el)=>{
//     if(el.grade === "A"){
//         count++
//     }
// })
// console.log("Total students who have score A is", count);

// students.forEach((el)=>{
//     if(el.age >= 21){
//         console.log(el.name);
//     }
// })

// students.forEach((el)=>{
//     console.log(`${el.name} from ${el.city} got grade ${el.grade}`)
// })

// let totalAge = 0;

// students.forEach((el)=>{
//     totalAge += el.age
// })
// console.log(`Total age of the student is ${totalAge}`)


let names = students.map((el) => el.name.toUpperCase())
console.log(names);

// let ages = "";
let ages = students.map((el)=> el.age);
console.log(ages)

// Add a New Property for Grades

let updatedStudents = students.map((el)=>{
    return{
        ...el,
        passStatus: el.grade === "A" || el.grade === "B" ? "Pass" : "Fail",
    };
});
console.log(updatedStudents);


// To create new custom array message

let message = students.map((el)=>{
    return `${el.name} is ${el.age} years old and got grade ${el.grade}`
})
console.log(message);

let cities = students.map((el) => el.city );
console.log(cities);

// to increase age of student by 1

let upDatedAge = students.map((el)=>{
    return {
        ...el,
        age : el.age + 1
    }
 })
 console.log(upDatedAge)


 // to create an array that contains only names and grade of students 

let upDatedList = students.map((el)=>{
    return{
        name: el.name,
        grade: el.grade
    }
});
console.log(upDatedList)


let bigCity = students.map((el)=>{
    return{
        ...el,
        isFromBigCity: el.city ==="New York" || el.city === "Los Angeles",
    }
})
console.log(bigCity)