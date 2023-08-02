import { MongoClient } from './imports.ts';



const client = new MongoClient();
await client.connect('mongodb://127.0.0.1:27017');
export const db = client.database('deno_starter')

const usersCollection = db.collection("users")


const insertId = await usersCollection.insertOne({
    _id: 3,
    username: "Tharak", 
    password: "2344"
})
// console.log("the users collection is", usersCollection, await usersCollection.find({}))
    export  const userDetails = await usersCollection.findOne({ _id: insertId })
    



