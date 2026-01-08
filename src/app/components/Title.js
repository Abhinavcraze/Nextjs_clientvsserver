//server side component,hook,dom manipulation and event handler are not performed on server component

// import React from 'react'

// const Title = () => {

//   const onSubmit = () =>{
//     alert("Form Submitted")
//   }
//   return (
//     <div>
//       <h2>welcome to form</h2>
//       <br />
//       <h4>Get User Name</h4>
//       <input type="text" placeholder='Enter your name' />
//       <button onClick={onSubmit}>Display Name</button>  
//     </div>
//   )
// }

// export default Title



//-------------------------------------------

//client component

'use client';
import {useState} from 'react';

const Title = () => {
  const [name, setName] = useState("");

  const onSubmit = () =>{
    alert(name);
    setName("");
  }
  return (
    <div>
      <h2>welcome to form</h2>
      <br />
      <h4>Get User Name</h4>
      <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onSubmit}>Display Name</button>  
    </div>
  )
}

export default Title