import {useState} from 'react';
function Zoo(){
    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [contact,setContact]=useState('');
    const [location,setLocation]=useState('');
        return(
        <>
        <h1>Enter Zoo Details</h1>
        <input type="text" placeholder="Enter Zoo Id" onChange={(e)=>setId(e.target.value)}></input>
        <input type="text" placeholder="Enter Zoo Name" onChange={(e)=>setName(e.target.value)}></input>
        <input type="number" placeholder="Enter Contact" onChange={(e)=>setContact(e.target.value)}></input>
        <input type="text" placeholder="Enter Location" onChange={(e)=>setLocation(e.target.value)}></input>
        </>
    )
};
export default Zoo;