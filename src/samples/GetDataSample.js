import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

function GetDataSample() {

    //Fetch ile data cekme

    // const getData=async ()=>{
    //     try {
    //         const response= await fetch("https://rickandmortyapi.com/api/character")
    //         const responseToJson=await response.json()
    //         console.log(responseToJson)
        
    //     } catch (error) {
    //         console.log("Get Characters Error: " , error)
    //     }

    // }

    //Axios İle Data Cekme

    const[data,setData]=useState([])
    const getDataAxios=async ()=>{
        try {
            const response=await axios.get("https://rickandmortyapi.com/api/character")
            console.log(response)
            setData(response.data.results)
            console.log(data.length)
        } catch (error) {
            console.log("Get Characters Error: " , error)
        }
    }

    useEffect(()=>{
        getDataAxios()
        return()=>{
            //component ten cıkılırken(ölürken) yapılacak ıslemler buraya yazılır

        }
    },[])
    
    //Map Örnek
    // data.map({element}=>{
    //     console.log(element)
    // })



  return (
    
    <div>
        {/* <button onClick={getDataAxios}>Get Data</button> */}
        <Link to={"/counter"}>Go To Counter</Link>
        {
            data.map((character,key)=>(
                <div key={key}>
                <h1 >{character.name}</h1>
                <h3>{character.status}</h3>
                </div>
                
            ))
        }
    </div>
  )
}

export default GetDataSample