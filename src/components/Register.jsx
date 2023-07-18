import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/esm/FormGroup'

function Register() {
  return (
    <section className='register bg-primary py-5 overflow-hidden'>
      <Container>
        <Row>
          <Col lg={6}>
            <h2>Unlock Your Potential with Engaging Content</h2>
            <p>
              Our wide range of training and seminar videos are designed to
              empower you with valuable knowledge and skills.
            </p>
            <ul className='list-unstyled vstack gap-3'>
              <li>
                <i className='fas fa-square p-1'></i>
                <strong>Gain Expertise:</strong> Our videos provide in-depth
                insights and practical tips to enhance your expertise in various
                domains.
              </li>
              <li>
                <i className='fas fa-square p-1'></i>
                <strong>Stay Updated:</strong> Stay up-to-date with the latest
                industry trends and advancements through our informative and
                up-to-date videos.
              </li>
              <li>
                <i className='fas fa-square p-1'></i>
                <strong>Expand Your Network:</strong> Connect with like-minded
                individuals and industry experts, fostering new connections and
                opportunities.
              </li>
            </ul>
          </Col>
          <Col lg={6} className='p-4'>
            <Form>
              <Form.Group>
                <Form.Control
                  className=' rounded-0 border-0 form-control-lg'
                  type='text'
                  placeholder='Enter name'
                />
                <Form.Control
                  className='my-4 rounded-0 border-0 form-control-lg'
                  type='email'
                  placeholder='Enter email'
                />
                <Form.Control
                  className='my-4 rounded-0 border-0 form-control-lg'
                  type='text'
                  placeholder='Enter phone number'
                />
              </Form.Group>
              <Form.Check
                type='checkbox'
                label='I agree to the terms and conditions'
              />
              <div className='d-grid'>
                <Button className='mt-4' variant='outline-dark'>
                  Register
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Register
