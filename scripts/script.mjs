// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.mjs";

//Your job is to assemble this information using a single function that takes an id parameter and returns a Promise that resolves to an object containing specific data.
function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
console.log(dbs)
  const returnedValue = await central(id);

  const returnedValue = await db1(id);

  dbs[valueReturnedFromCentral](id);

  const returnedValue = await vault(id);

  // return a promis that resolces to an object with user data of the given id. 
  const userData = new Promise((resolve, reject) => {
    resolve ();
  })

  


getUserData();

// needs to return this info: 
// {
//     id: number,
//     name: string,
//     username: string,
//     email: string,
//     address: {
//       street: string,
//       suite: string,
//       city: string,
//       zipcode: string,
//       geo: {
//         lat: string,
//         lng: string
//       }
//     },
//     phone: string,
//     website: string,
//     company: {
//       name: string,
//       catchPhrase: string,
//       bs: string
//     }
// }
