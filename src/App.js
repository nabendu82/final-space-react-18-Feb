import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CardGrid from './components/CardGrid';
import Header from './components/Header';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios('https://finalspaceapi.com/api/v0/character/')
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems()
  },[])

  return (
    <div className="container">
      <Header />
      <CardGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
