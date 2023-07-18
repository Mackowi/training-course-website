import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import slide1 from '../images/header-slide-1.jpg'
import slide2 from '../images/header-slide-2.jpg'
import slide3 from '../images/header-slide-3.jpg'

function Header() {
  return (
    <>
      <section id='home' className='header py-7 vh-100 text-white'>
        <Container>
          <Row className='mb-5 text-center'>
            <Col className='text-container d-flex flex-column align-items-center'>
              <h1 className='display-2 mt-3'>
                Explore Our Training And Videos
              </h1>
              <p className='lead w-80 m-auto mb-4'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                animi ut nisi possimus, nulla quas sequi eveniet. Quas,
                perspiciatis voluptatibus!
              </p>
              <div>
                <Button
                  href='#register'
                  variant='primary'
                  className='text-uppercase'
                >
                  Register
                </Button>{' '}
                <Button
                  href='#discover'
                  variant='outline-light'
                  className='text-uppercase'
                >
                  Discover
                </Button>
              </div>
            </Col>
          </Row>
          <Carousel>
            <Carousel.Item>
              <img src={slide1} alt='' className='d-block w-100 rounded-5' />
            </Carousel.Item>
            <Carousel.Item>
              <img src={slide2} alt='' className='d-block w-100 rounded-5' />
            </Carousel.Item>
            <Carousel.Item>
              <img src={slide3} alt='' className='d-block w-100 rounded-5' />
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
    </>
  )
}
export default Header
