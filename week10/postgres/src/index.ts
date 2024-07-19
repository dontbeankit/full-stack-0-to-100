// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://dummyDB_owner:gBTxsNcV28MJ@ep-round-darkness-a1xhw0hr.ap-southeast-1.aws.neon.tech/dummyDB?sslmode=require"
})

async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}

async function insertTable(){
    try{
    await client.connect()
    const result = await client.query(`
        INSERT INTO users (username, email, password)
        VALUES ('username_here', 'user@example.com', 'user_password');
    `)
    console.log(result)
    }
    catch(e){
        console.log(e)
    }
    
}

//createUsersTable();
insertTable();