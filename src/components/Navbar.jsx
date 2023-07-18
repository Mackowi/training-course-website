import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../images/logo.png'
import { useState, useEffect } from 'react'

function NavigationBar() {
  const [navbarBg, setNavbarBg] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg(true)
      } else {
        setNavbarBg(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Navbar
      expand='lg'
      fixed='top'
      variant='dark'
      className={navbarBg ? 'bg-dark' : ''}
    >
      <Container>
        <Navbar.Brand href='/'>
          <img src={Logo} alt='logo' width='150' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='/' className='text-white'>
              Home
            </Nav.Link>
            <Nav.Link href='/link'>Link</Nav.Link>
            <Nav.Link href='/summary'>Summary</Nav.Link>
            <Nav.Link href='/takeaways'>Takeaways</Nav.Link>
            <Nav.Link href='/subscribe'>Subscribe</Nav.Link>
            <Nav.Link href='/#somewhere'>
              <span className='fa-stack'>
                <i className='fas fa-circle fa-stack-2x text-primary'></i>
                <i className='fab fa-facebook fa-stack-1x'></i>
              </span>
            </Nav.Link>
            <Nav.Link href='/#somewhere2'>
              <span className='fa-stack'>
                <i className='fas fa-circle fa-stack-2x text-primary'></i>
                <i className='fab fa-twitter fa-stack-1x'></i>
              </span>
              <span className='fa-stack'></span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
