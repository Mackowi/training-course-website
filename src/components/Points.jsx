import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Points() {
  return (
    <section>
      <Container>
        <Row className='text-center mb-5'>
          <Col md={8} className='offset-md-2'>
            <h2>Unlock Your Potential with Engaging Training Videos</h2>
          </Col>
        </Row>
        <Row>
          <Col md={6} className='mb-4'>
            <div className='d-flex gap-3'>
              <div className='number'>
                <span className='bg-primary py-3 px-4 fs-3 rounded-circle'>
                  1
                </span>
              </div>
              <div>
                <h3 className='fs-4'>Enhance Your Skills</h3>
                <p>
                  Our training videos provide comprehensive insights and
                  practical tips to help you enhance your skills in various
                  domains. From technical expertise to soft skills, we've got
                  you covered.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} className='mb-4'>
            <div className='d-flex gap-3'>
              <div className='number'>
                <span className='bg-primary py-3 px-4 fs-3 rounded-circle'>
                  2
                </span>
              </div>
              <div>
                <h3 className='fs-4'>Stay Updated</h3>
                <p>
                  Keep pace with the latest industry trends and advancements
                  through our informative and up-to-date videos. Stay ahead of
                  the curve and broaden your knowledge.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} className='mb-4'>
            <div className='d-flex gap-3'>
              <div className='number'>
                <span className='bg-primary py-3 px-4 fs-3 rounded-circle'>
                  3
                </span>
              </div>
              <div>
                <h3 className='fs-4'>Connect with Experts</h3>
                <p>
                  Our platform allows you to connect with like-minded
                  individuals and industry experts. Expand your network, foster
                  new connections, and unlock new opportunities.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} className='mb-4'>
            <div className='d-flex gap-3'>
              <div className='number'>
                <span className='bg-primary py-3 px-4 fs-3 rounded-circle'>
                  4
                </span>
              </div>
              <div>
                <h3 className='fs-4'>Flexible Learning</h3>
                <p>
                  Our training videos are available on-demand, allowing you to
                  learn at your own pace and convenience. Access the content
                  anytime, anywhere, and tailor your learning experience.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} className='mb-4'>
            <div className='d-flex gap-3'>
              <div className='number'>
                <span className='bg-primary py-3 px-4 fs-3 rounded-circle'>
                  5
                </span>
              </div>
              <div>
                <h3 className='fs-4'>Practical Knowledge</h3>
                <p>
                  Gain practical knowledge and apply it directly to real-world
                  scenarios. Our videos offer hands-on insights and practical
                  tips to help you succeed in your professional endeavors.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} className='mb-4'>
            <div className='d-flex gap-3'>
              <div className='number'>
                <span className='bg-primary py-3 px-4 fs-3 rounded-circle'>
                  6
                </span>
              </div>
              <div>
                <h3 className='fs-4'>Continuous Learning</h3>
                <p>
                  Lifelong learning is key to personal and professional growth.
                  Explore a vast collection of training videos and embark on a
                  journey of continuous learning and self-improvement.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Points
