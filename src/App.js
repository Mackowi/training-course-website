import './Custom.scss'
import './App.scss'
import NavigationBar from './components/Navbar'
import Header from './components/Header'
import Register from './components/Register'
import Details from './components/Details'
import Points from './components/Points'
import Summary from './components/Summary'
import Img1 from './images/instructor.jpg'
import Img2 from './images/audience.jpg'

function App() {
  return (
    <div>
      <NavigationBar />
      <Header />
      <Register />
      <Details img={Img1} />
      <Points />
      <Summary />
      <Details img={Img2} />
    </div>
  )
}
export default App
