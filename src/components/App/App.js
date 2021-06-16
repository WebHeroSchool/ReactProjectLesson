import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css'

  const App = () =>  {
    const initialState = {
          items: [
          {
              value: 'Write new aplication',
              isDone: false,
              id: 1
          },
          {
              value: 'Write props',
              isDone: false,
              id: 2
          },
          {
              value: 'Do all works',
              isDone: false,
              id: 3
          }
        ],
      count: 3
    };

    const [items, setItems] = useState(initialState.items);
    const [count, setCount] = useState(initialState.count);

    useEffect( () => {
        console.log('componentDidUpdate');
    });
    useEffect( () => {
        console.log('componentDidMount');
    }, []);

    const onClickDone = id => {
      const newItemList = items.map( item => {
        const newItem ={ ...item };
        if (item.id === id){
          newItem.isDone = !item.isDone;
        }

        return newItem;
      });

      setItems(newItemList);
    };

    const onCliсkDelete = id => {
      const newItemList = items.filter( item => item.id !== id);
      setItems(newItemList);
      setCount(count - 1);
    };

    const onCliсkAdd = value => {
        const newItemList = [
            ...items,
            {
              value,
              isDone: false,
              id:count + 1
            }        
          ];
      setItems(newItemList);
      setCount(count + 1)
    };

    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>TODOS:</h1>
        <InputItem 
          onCliсkAdd = {onCliсkAdd}
        />
        <ItemList 
          items = {items} 
          onClickDone = {onClickDone} 
          onCliсkDelete = {onCliсkDelete}
        />
        <Footer count = {count} />
      </div>);
  };

export default App;