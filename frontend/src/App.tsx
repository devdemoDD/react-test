import { useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const divRef = useRef<HTMLSpanElement>(null);

  const getData = (elem: HTMLSpanElement) => {
    fetch(`${import.meta.env.VITE_API_SERVER}/api/test`)
      .then((res) => res.json())
      .then((res) => {
        elem.textContent = res.message;
      });
  };

  useEffect(() => {
    if (divRef.current) getData(divRef.current);
  }, [divRef.current]);

  return (
    <div className="App">
      <p>
        API Called :{' '}
        <span
          ref={divRef}
          style={{ fontWeight: 'bold', fontSize: '2rem' }}
        ></span>
      </p>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
