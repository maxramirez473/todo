import './App.css';
import Navegacion from './components/navegacion/navbar';
import Hooks from './components/hooks/hooks';
import Text from './components/text/text';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetail from './components/ItemDetail/itemDetail';


function App() {
  return (
    <div className='container'>
      <Navegacion tit="ToDoList" enlaces={['Inicio', 'nosotros', 'API']} className="mb-3"/>
      {/*<Hooks/>
      <Text/>*/}

      <ItemListContainer/>

      {/*<ItemDetail id={3}/>*/}
    </div>
  );
}

export default App;
