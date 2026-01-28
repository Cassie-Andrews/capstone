import { MongoClient } from "mongodb";
const uri = process.env.SECRET_MONGODB_URI;

console.log(uri)

if (!uri) {
    throw new Error("Missing SECRET_MONGODB_URI");
}

const client = new MongoClient(uri)
const dbname = "capstoneDB"

const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log(`Connected to the ${dbname} database`);
        return client.db(dbname)
    } catch (err) {
        console.error(`Error connecting to the database: ${err}`);
        throw err;
    }
};

/*

https://learn.mongodb.com/learn/course/connecting-to-mongodb-in-nodejs/lesson-2-connecting-to-an-atlas-cluster-in-nodejs-applications/learn?client=customer


const main = async () => {
    try {
        await connectToDatabase();
    } catch (err) {
        console.error(`Error connecting to the database: ${err}`);
    } finally {
        await client.close();
    }
};

// Run the main function
main();
*/