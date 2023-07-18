import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Details({ img }) {
  return (
    <section id='details1' className='py-6'>
      <Container>
        <Row>
          <Col lg={6}>
            <img
              src={img}
              alt='instructor'
              className='img-fluid rounded-5 mb-4'
            />
          </Col>
          <Col lg={6} className='d-flex flex-column justify-content-center'>
            <h2>Enhance Your Skills with Engaging Training Videos</h2>
            <p>
              Our extensive collection of training videos is designed to help
              you enhance your skills and excel in your chosen field. Whether
              you're looking to improve your technical expertise or develop
              essential soft skills, our videos provide valuable insights and
              practical knowledge.
            </p>
            <p>
              With expert instructors and comprehensive content, you'll gain the
              confidence and competence to tackle challenges and achieve
              success.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Details
