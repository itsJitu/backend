import { useState } from 'react'


function App() {
  

  return (
    <>
      <main style={{textAlign: 'center', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', height:'100vh', gap:'10px'}}>
        <h1>Welcome to the free Chat Services</h1>
        <div style={{display:'flex', gap:'20px', fontSize:'20px', fontWeight:'bold'}}>
          <h2>Login</h2>
          <h2>Sig in</h2>
        </div>
        <div>
          <p>Enter email or phone Number</p>
          <div style={{border:'1px solid black', width:'300px', height:'30px', display:'flex', alignItems:'center', paddingLeft:'10px', borderRadius:'5px'}}>
            <input type="text" placeholder='Email or Phone Number' style={{border: 'none' }}/>
          </div>
        </div>
        <div>
          <p>Enter Your Password</p>
          <div >

          </div>
        </div>
        <div>
          <button>Login</button>
          <button>Sign in</button>
        </div>
      </main>
    </>
  )
}

export default App
