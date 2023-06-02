import './App.css'
import { useState } from 'react';
import { InfoArea } from './InfoArea'
import InputArea from './InputArea'
import TableArea, { TableItem } from './TableArea'

function App() {
  const [items, setItems] = useState<TableItem[]>([]);

  const addItem = (item: TableItem) => {
    setItems(prevItems => [...prevItems, item]);
  };

  return (
    <div>
      <header>
        <h1>Sistema Financeiro</h1>
        <h3 className='subtitle'>(Developed by: Henrique Reis)</h3>
      </header>
      <InfoArea items={items} />
      <InputArea addItem={addItem} />
      <TableArea items={items} />
    </div>
  );
}

export default App;
