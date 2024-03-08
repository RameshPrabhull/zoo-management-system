import {useState} from 'react';
function Customer(){
   /*  const [id,setId]=useState(0) */
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [address,setAddress]=useState('');
    const [phone,setPhone]=useState(0);
    function send(){
        fetch("http://localhost:2000/insert",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify({
                name:name,
                email:email,
                address:address,
                phone:phone
            })
        })
        .then(()=>{
        console.log("request sent")
    }).catch(err=>{
        console.error('error creating table',err);
    });
    };
    return(
        <>
        <h1>Enter Customer Details</h1>
        {/* <input type="text" placeholder="Enter Customer ID" onChange={(e)=>setId(e.target.value)}></input> */}
        <input type="text" placeholder="Enter Customer Name" onChange={(e)=>setName(e.target.value)}></input>
        <input type="text" placeholder="Enter Customer EmailID" onChange={(e)=>setEmail(e.target.value)}></input>
        <input type="text" placeholder="Enter Customer Address" onChange={(e)=>setAddress(e.target.value)}></input>
        <input type="number" placeholder="Enter Customer PhoneNumber" onChange={(e)=>setPhone(e.target.value)}></input>
        <input type="button" value="send"onClick={send}></input>
        </>
    )
}
export default Customer;