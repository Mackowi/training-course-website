import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function Invitation() {
  return (
    <section className='invitation mb-5'>
      <Container>
        <Row>
          <Col>
            <div className='invitation-bg text-center py-6 rounded-5'>
              <div className='text-white w-80 m-auto'>
                <h2 className='display-5 fw-bold'>Join Us On December 22nd</h2>
                <p>
                  We cordially invite you to attend a seminar on December 22nd,
                  where we will explore various topics and insights related to
                  <strong>advertising and marketing</strong>. It will be an
                  engaging session where you can gain valuable knowledge about.
                  Don't miss out on this opportunity to enhance your skills and
                  broaden your horizons. Join us and be a part of this enriching
                  experience!
                </p>
                <Button href='#register' variant='primary' size='lg'>
                  Register Now
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Invitation
