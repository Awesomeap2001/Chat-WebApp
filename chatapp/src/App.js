// import socketIO from 'socket.io-client'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Join from './component/Join/Join'
import Chat from './component/Chat/Chat'


function App() {

  // socket.on('connect' , ()=>{

  // })

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Join />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
