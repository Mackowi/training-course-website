import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '../images/logo.png'
import Button from 'react-bootstrap/Button'

function Header() {
  return (
    <>
      <Navbar
        expand='lg'
        className='bg-body-tertiary'
        fixed='top'
        data-bs-theme='dark'
      >
        <Container>
          <Navbar.Brand href='/'>
            <img src={Logo} alt='logo' width='150' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/link'>Link</Nav.Link>
              <Nav.Link href='/summary'>Summary</Nav.Link>
              <Nav.Link href='/takeaways'>Takeaways</Nav.Link>
              <Nav.Link href='/subscribe'>Subscribe</Nav.Link>
              <Nav.Link>
                <span className='fa-stack'>
                  <a href='/#somewhere'>
                    <i className='fas fa-circle fa-stack-2x text-primary'></i>
                    <i className='fab fa-facebook fa-stack-1x text-white'></i>
                  </a>
                </span>
              </Nav.Link>
              <Nav.Link>
                <span className='fa-stack'>
                  <a href='/#somewhere2'>
                    <i className='fas fa-circle fa-stack-2x text-primary'></i>
                    <i className='fab fa-twitter fa-stack-1x text-white'></i>
                  </a>
                </span>
                <span className='fa-stack'></span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='header py-7 vh-100'>
        <Container>
          <Row className='mb-5-text-center'>
            <Col className='text-container d-flex flex-column align-items-center'>
              <h1 className='display-2 text-white mt-3'>
                Explore Our Training
              </h1>
              <p className='lead text-white w-80 m-auto mb-4'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                animi ut nisi possimus, nulla quas sequi eveniet. Quas,
                perspiciatis voluptatibus! Ex animi ut nisi possimus, nulla quas
                sequi eveniet. Quas, perspiciatis voluptatibus! Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Ex animi ut nisi
                possimus, nulla quas sequi eveniet. Quas, perspiciatis
                voluptatibus! Ex animi ut nisi possimus, nulla quas sequi
                eveniet. Quas, perspiciatis voluptatibus!
              </p>
              <div>
                <a className='mx-2' href='#register'>
                  <Button variant='primary'>REGISTER</Button>
                </a>
                <a className='mx-2' href='#discover'>
                  <Button variant='outline-primary'>DISCOVER</Button>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
export default Header
