import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'
import styles from '../styles/Home.module.css'
import { useMoralis } from 'react-moralis';
import LoggedIn from '../components/LoggedIn';
import stylee from '../styles/LoggedIn.module.css'


export default function Home() {
  const { isAuthenticated, logout } = useMoralis();
  return (
    <div>
      {
        isAuthenticated ? (
          <>
            <div style={{ backgroundColor: "black", height: '100vh', margin: "0", padding: "0", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <h3 style={{ color: '#4ef44e', textAlign: 'center', fontSize: '2rem' }}>Your are logged In</h3>
              <br></br>
              <button onClick={logout} style={{
                padding: '20px 40px',
                borderRadius: '10px',
                backgroundColor: 'rgb(14, 165, 233)',
                color: 'wheat',
                fontSize: "0.9rem",
                fontWeight: '600',
                cursor: 'pointer'



              }}>Log Out</button>
            </div>
          </>
        ) : <Login />
      }

    </div>
  )
}
