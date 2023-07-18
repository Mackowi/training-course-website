import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Summary() {
  return (
    <section id='summary' className='summary mt-5 w-80 m-auto'>
      <Container>
        <Row>
          <Col>
            <h2 className='text-center mb-5'>Course Summary</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='bg-white p-5'>
              <ul className='list-unstyled'>
                <li className='border-bottom pb-3'>
                  <h5>1. Comprehensive Training</h5>
                  <p>
                    Our courses provide comprehensive training in a wide range
                    of topics. From beginner-level fundamentals to advanced
                    concepts, we offer in-depth content to cater to learners of
                    all levels.
                  </p>
                </li>
                <li className='border-bottom pb-3 pt-5'>
                  <h5>2. Expert Instructors</h5>
                  <p>
                    Learn from industry experts who bring years of experience
                    and expertise to the table. Our instructors are passionate
                    about sharing their knowledge and helping you succeed.
                  </p>
                </li>
                <li className='pb-3 pt-5'>
                  <h5>3. Practical Application</h5>
                  <p>
                    We believe in practical learning that goes beyond theory.
                    Our courses focus on real-world application, equipping you
                    with the skills and knowledge needed to excel in your field.
                  </p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Summary
