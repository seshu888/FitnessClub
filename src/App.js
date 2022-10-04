import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Testimonials from './components/testimonials/Testimonials';
import WCU from './components/wcu/WCU';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <WCU/>
          <Plans/>
          <Testimonials/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
