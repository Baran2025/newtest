import React from "react";
import Image from "./components/images/netflix1.jpg";
import imageOne from './components/images/Netflix_Logo.png';
import Button from '@mui/material/Button';
import Carousels from './components/Carousels.jsx';
import { Container } from 'react-bootstrap'; // Importing Container from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div style={{
        backgroundImage: `url(${Image})`,
        height: '100vh',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 20px',
        textAlign: 'center',
        position: 'relative',
      }}>

        <div style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '100%',
          textAlign: 'center',
          color: "white",
        }}>
          <h1 style={{ fontSize: '70px' }}>Unlimited movies,</h1>
          <h1 style={{ fontSize: '70px' }}> TV shows, and more</h1>
          <h3 style={{ fontSize: '25px' }}>Starts at Rs 250. Cancel anytime.</h3>
          <h6 style={{ fontSize: '15px' }}>Ready to watch? Enter your email to create or restart your membership.</h6>
        </div>

        <div style={{
          position: 'absolute',
          left: '150px',
          top: '20px',
        }}>
          <img src={imageOne} height={50} width={100} alt="Netflix Logo" />
        </div>

        <div style={{
          position: 'absolute',
          right: '150px',
          top: '20px',
        }}>
          <Button variant="contained" sx={{ backgroundColor: '#FF5733', '&:hover': { backgroundColor: '#C70039' } }}>
            Sign Out
          </Button>
        </div>

      </div>

      <Container style={{ marginTop: '50px', height: '300px' }}>
        <Carousels />
      </Container>
    </>
  );
}

export default App;
