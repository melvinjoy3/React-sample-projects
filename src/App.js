import React from 'react'
import {fireBase as firebase} from './firebase/config';


function App() {

  const fBase=(e)=>{
    firebase.firestore().collection('products').add({
      name:"Melvin"
    })

  }
  return (
    <div>
      <button onClick={fBase}>Click Me</button>
    </div>
  )
}

export default App
