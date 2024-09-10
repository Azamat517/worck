import {  Route, Routes } from 'react-router-dom'
import 'sass-reset'
import Page1 from './page/page1'

import { Container, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './sass/page1.sass'
import './sass/table.sass'

function App() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
           
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Page1 />}></Route>
      </Routes>
    </>
  )
}

export default App
