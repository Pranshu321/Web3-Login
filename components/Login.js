import React from 'react'
import style  from '../styles/Login.module.css';
import Img from 'next/image';
import icon from './img/Moralis-Favicon.svg';
import {useMoralis} from 'react-moralis';
const Login = () => {
  const {authenticate , authError} = useMoralis();
  return (
    <div className={style.login_container}>
     <div className={style.login_card}>
       <Img src={icon} width={100} height={100} alt="Moralis" />
     <div className={style.signin_container}>
        {
          authError && (
            <p className={style.error}>
              {
                authError.name
              }
              {
                authError.message
              }
            </p>
          )
        }
        <button onClick={authenticate}>Login With Moralis</button>
     </div>
     </div>
    </div>
  )
}

export default Login;