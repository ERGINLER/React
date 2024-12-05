import React, { useState } from 'react'

function CounterSample() {

    const [fullName, setFullName] =useState("Hamy")

    let name ="Hamza"
    const changeName = () => {
        console.log("worked")
        name = "Hamza ERGINLER"
        console.log(name)
    }

    function changeName2(){
        setFullName("Hamza ERGINLER")
        
    }

  return (
    <div>
        <h1>{name}</h1>
        <button onClick={changeName}>Chane Name</button>
        <h1>{fullName}</h1>
        <button onClick={changeName}>Chane Name</button>
    </div>
  )
}

export default CounterSample