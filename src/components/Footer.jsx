import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer() {
  return (
    <footer className='mt-4 text-bg-dark py-5'>
      <Container>
        <Row>
          <Col md={4} className='d-flex flex-column align-items-center'>
            <h5>Lorem Ipsum</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
              possimus aliquid omnis commodi. Dignissimos, quam obcaecati? Fugit
              non ex repellendus?
            </p>
          </Col>
          <Col md={4} className='d-flex flex-column align-items-center'>
            <h3>Quick Links</h3>
            <ul className='list-unstyled'>
              <li>
                <a href='#home'>Home</a>
              </li>
              <li>
                <a href='#details1'>Discover</a>
              </li>
              <li>
                <a href='#summary'>Summary</a>
              </li>
              <li>
                <a href='#subscribe'>Subscribe</a>
              </li>
            </ul>
          </Col>
          <Col md={4} className='d-flex flex-column align-items-center'>
            <h5>Connect</h5>
            <div className='d-flex gap-3'>
              <a href='#'>
                <i className='fab fa-facebook fa-3x text-white'></i>
              </a>
              <a href='#'>
                <i className='fab fa-twitter fa-3x text-white'></i>
              </a>
              <a href='#'>
                <i className='fab fa-linkedin fa-3x text-white'></i>
              </a>
              <a href='#'>
                <i className='fab fa-instagram fa-3x text-white'></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer
