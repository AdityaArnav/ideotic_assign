import React, { useState } from 'react'
import s from './Auth.module.css'

 const Auth = () => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [isRegister, setIsRegister] = useState(false);

    const handleChange = (e)=> {
    const {name, value}= e.target;
    setInputs({...inputs,[name]:value})
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(inputs);

    }
  return (
    <>
        <div className={s.container}>
        <form onSubmit={handleSubmit}>

        <h1>{isRegister?"Register":"Login"}</h1>
            <div className={s.inputContainer}>
            { isRegister &&

                <input placeholder='Enter Your Name' name='name' value={inputs.name} onChange={handleChange} type="text" />
            }
                <input placeholder='Enter Your Email' name='email' value={inputs.email} onChange={handleChange} type="email" />
                <input placeholder='Enter Your Password' name='password' value={inputs.password} onChange={handleChange} type="password" />
            </div>
            <input className={s.submitBtn} type="submit"/>
            <p>change to <span onClick={()=>setIsRegister(isRegister?false:true)} className={s.changeBtn}>
            {isRegister?"Login":"Register"}
            </span></p>
        </form>
        </div>
    </>
  )
}

export default Auth;
