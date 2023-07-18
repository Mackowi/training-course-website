import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Subscribe() {
  return (
    <section id='subscribe' className='mb-5 bg-light'>
      <Container>
        <Row>
          <Col md={6} className='offset-md-3 text-center'>
            <h2>
              Subscribe to our email list and get updates from the experts
            </h2>
            <Form className='my-4'>
              <Form.Control
                type='email'
                placeholder='Enter email'
                className='form-control-lg'
              />
              <Form.Text>
                We'll never share your email with anyone else.
              </Form.Text>
              <div className='d-grid pt-4'>
                <Button variant='primary'>Subscribe</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Subscribe
