import Navbar from './Navbar';
import Home from './component/Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from  './component/NotFound';
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom'

function App() {
    
  return (
   <Router>
          <div className="App">
            <Navbar/>
            
            <div className="content">
               <Routes>
                    <Route path='/' element={< Home />}/>
                    <Route path='/create'  element={<Create/>}/>
                    <Route path='/blogs/:id' element={<BlogDetails/>}/>
                    <Route path='*'  element={<NotFound/>}/>
               </Routes>
            </div>
          </div>
    </Router>
  );
}

export default App;
