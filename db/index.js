const express=require('express');
const app=express();
const cors=require('cors');
const sql=require("mysql");
const bodyParser=require('body-parser');
const connec=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"ramesh",
    database:"sample"
});
connec.connect(()=>{
    console.log("connected")
});

app.use(cors());
app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.send("hello there");
    connec.query("create table table8 (name varchar(10),phone int(11))",(err)=>{
       if (err) throw err;
        console.log("table created");
})
});
app.post('/insert',(req,res)=>{
    var name=req.body.name;
    var phone=req.body.phone;
    connec.query("insert into table1 values (?,?)",[name,phone],(err)=>{
        if(err) throw err;
        console.log("inserted");
        
    })
    res.send("inserted");
    
});
app.listen("2000",()=>{
    console.log("listening");
})

