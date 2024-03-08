const express=require('express');
const bodyparse=require('body-parser');
const app=express();
const cors=require('cors');
const sql=require('mysql');
const create=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"ramesh",
    database:"zoo"
})
create.connect((err)=>{
 if(err) throw err;
 else
 console.log("database connected");
})
app.use(cors());
app.use(bodyparse.json());
app.post('/insert',(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const address=req.body.address;
    const phone=req.body.phone;
    create.query('insert into customer(cname,email,address,phone) values (?,?,?,?)',[name,email,address,phone],(err)=>{
        if (err) throw err;
        else{
            console.log("insertion successfull");
        }
    });

})
app.listen("2000",()=>{
    console.log("server listening on port 2000");
})