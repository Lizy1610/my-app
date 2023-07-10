"use client"
import React from "react"
import "./login.css"

export default function login() {
    const [estate,setestate]=React.useState({
        email:"",
        password:""
    })

function onChange (event){

    const value = event.target.value;
    const name = event.target.name;
    setestate({
        ...estate,
        [name]:value 
    })
}


    return (
        <div className="container">
            <input name="email"onChange={onChange}  value={estate.email} type="text" placeholder="Ingrese el email" />
            <input name="password"onChange={onChange}  value= {estate.password} type="password" placeholder="Ingrese la contraseña" />
            <button>Login</button>
        </div>
    )
}

function onlogin() {
//const email=estate.password;
//const password =estate.password;
const {email,password} = estate; //otra manera de hacerlo 
login(email,password);

}

