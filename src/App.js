import './Custom.scss'
import './App.scss'
import NavigationBar from './components/Navbar'
import Header from './components/Header'
import Register from './components/Register'
import Details from './components/Details'
import Points from './components/Points'
import Summary from './components/Summary'
import Invitation from './components/Invitation'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import Img1 from './images/instructor.jpg'
import Img2 from './images/audience.jpg'

function App() {
  return (
    <div>
      <NavigationBar />
      <Header />
      <Register />
      <Details sectionId={1} img={Img1} />
      <Points />
      <Summary />
      <Details sectionId={2} img={Img2} />
      <Invitation />
      <Subscribe />
      <Footer />
    </div>
  )
}
export default App
