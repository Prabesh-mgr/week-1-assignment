const books = [
    {
        "id": 1,
        "name": "The Great Gatsby",
        "date": "1925-04-10",
        "price": 10.99,
        "author": ["F. Scott Fitzgerald",]
    },
    {
        "id": 2,
        "name": "1984",
        "date": "1949-06-08",
        "price": 8.99,
        "author": "George Orwell"
    },
    {
        "id": 3,
        "name": "To Kill a Mockingbird",
        "date": "1960-07-11",
        "price": 12.99,
        "author": "Harper Lee"
    },
    {
        "id": 4,
        "name": "Pride and Prejudice",
        "date": "1813-01-28",
        "price": 9.99,
        "author": "Jane Austen"
    },
    {
        "id": 5,
        "name": "The Hobbit",
        "date": "1937-09-21",
        "price": 15.99,
        "author": "J.R.R. Tolkien"
    }
]
// const numId = 3
// let newArr = books.filter((obj) => (
//     obj.id != numId
// ))
// console.log(newArr);
// books.push({
//     "id": 6,
//         "name": "The heroic battle between me and myself",
//         "date": "1937-09-21",
//         "price": 15.99,
//         "author": "Prabesh Magar"

// })
console.log(books);

// let updatedItems = books.find((book)=> book.id === 5);
// if(updatedItems){
//     updatedItems.name= "The Prabesh Magar"
//     updatedItems.author = "Prabesh Magar"
// }

// console.log(updatedItems);

// let spliceExample = books.slice(2,5);
// console.log(spliceExample);

// let newAddedItems = books.map((book)=>{
//   return {
//     ...book, 
//     rating:null
//   }
// })
// console.log(newAddedItems);

let ratingItems = books.map((obj, index)=>{
    return {
        ...obj, 
        rating: [5,6,4,3,2][index]
    }
})
console.log(ratingItems);







