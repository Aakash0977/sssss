const {Client} = require('pg');

const client = new Client({
    host: "localhost",
    user:"postgres",
    port:5432,
    password: "aakash123"  ,
    database: "BloggingSite"
})

client.connect();

const model=client.query('Select * from tbl_user', (err, res)=> {
    if (!err){
         console.log(res.rows);
         return res.rows;
    }else{
        console.log(err.message);
    }
})

console.log(model);