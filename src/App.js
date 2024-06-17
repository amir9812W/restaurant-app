import './App.scss';
import { db } from './firebase';
import {collection , onSnapshot} from 'firebase/firestore'
import { useEffect , useState} from 'react';
import Items from './components/items';
import bone from './components/media/boneles.webp'

function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);  

  useEffect(() => {

  }, [])

  useEffect(() => {
    const fetchData = async() => {
      onSnapshot(collection(db, 'users'), (snapMotherFucker) => {
        const updated = []
        snapMotherFucker.forEach((doc) => {
          updated.push({id : doc.id , data : doc.data()})
        })
        setItems(updated);
        setLoading(false);
      
      })
    }
    fetchData()
  }, []);

  return (
    <div className="App">
     <div className='about-app'>
        <h1>Ordered items</h1>
        <div className='image-container'>
          <img src = {bone} alt='food'/>
        </div>
      </div>
      <div className='real-items-container'>
        <Items expenses = {items} func = {setItems} isLoading = {isLoading}/>
      </div>
    </div>
  );
}

export default App;



