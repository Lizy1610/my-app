import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useCallback } from "react";

const auth = getAuth();

function login(){
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

//IFE
useCallback

function hello( ) {
  console.long ("hola mundo")
}

functionname();

(function (){
  console.log("Hola mundo")
})()


setTimeout( hello,500)
setTimeout(hello)
//event loop (prioriza las tareas)
//promesas
const promise =new Promise(
  (resolve,reject) => {
    try {
      resolve("hola")
    } catch  {
      reject("error")
    }
  }
)

promise
.then (
  (result) => {
  console.long (`${result}`| soy);//templante string 
  }
)
.catch (
  (error) => {
  console.long(error)
  }
)

//.then para saber si todo esta bien 
//.catch si algo salio mal 

//parametros y argumentos 


