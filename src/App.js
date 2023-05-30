import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Home from './Components/Home';
import Footer from './Components/Footer';
import Videos from './Components/Videos';
import Upload from './Components/Upload';
import Login from './Components/Login';
function App() {
  return (
    <>
    <Router>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/videos' element={<Videos/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App;
