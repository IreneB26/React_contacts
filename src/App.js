import './App.css';
import List from './pages/List/List';
import Chat from './pages/Chat/Chat';
import { Route, Routes} from 'react-router-dom';
import InfContact from './pages/InfContact/InfContact';

function App() {
  

  return (
    <>
      <header className="header">React chat</header>
      <main>
        <Routes>
          <Route path="/list" element={<List />} />
          <Route path="/infcontact/:id" element={<InfContact />} />
          <Route path="/chat/:id" element={<Chat />} />
        </Routes>
      
      </main>
      <footer></footer>
    </>
  );
}

export default App;
