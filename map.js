// console.log("Hi my name is prabesh magar");

// const users = [
//     { firstName: "John", lastName: "Doe", age: 25 },
//     { firstName: "Jane", lastName: "Smith", age: 30 },
//     { firstName: "Emily", lastName: "Johnson", age: 35 }
//   ];

//   let newUsers = users.map((el,idx)=>{
//          return `${el.firstName} ${el.lastName}`
//   })
//   console.log(newUsers);

//   const numbers = [1, 2, 3, 4, 5];

//   let newNumbers = numbers.map((el)=>{
//          return { orginal: el , double: el * 2}
//   })
//   console.log(newNumbers);


  const emails = [
    "john.doe@example.com",
    "jane.smith@testmail.com",
    "emily.johnson@domain.org"
  ];

  let userName = emails.map((el)=>{
    return el.split("@")[0].toUpperCase();
  })
  console.log(userName);
  
  
  

  