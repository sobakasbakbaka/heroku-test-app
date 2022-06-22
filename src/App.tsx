import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState<string>('')

  useEffect(() => {
    axios.get('https://eto-samoe-react.herokuapp.com/items').then(res => setTitle(res.data.title))
  }, [])

  return (
    <div className="App">
      <h1>Helloalekum, {title}</h1>
    </div>
  );
}

export default App;
