import { useState } from 'react';
import Header from './components/Header';
import AuthContainer from './components/AuthContainer';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <AuthContainer />
      </main>
    </>
  );
}

export default App;
