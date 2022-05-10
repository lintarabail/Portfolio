import './App.css';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import Start from './components/Start';
import Testimonials from './components/Testimonials';
import Work from './components/Work';

function App() {
  
  return (
   <>
   <Navbar/>
   <Start/>
   <Service/>
   <Experience/>
   <Work/>
   <Portfolio/>
   <Testimonials/>
   <Form/>
   <Footer/>
   </>
  );
}

export default App;
