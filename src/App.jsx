
import './App.css'
import MainConttent from './assets/components/MainConttent';
import { Container } from '@mui/material';
function App() {
  

  return (
    <>
      <div style={{
        display:"flex",
        justifyContent:"center",
        width:"100vw"
      }}>
      
      <Container maxWidth="xl">
        <MainConttent />
      </Container>
      
      </div>
    </>
  )
}

export default App
