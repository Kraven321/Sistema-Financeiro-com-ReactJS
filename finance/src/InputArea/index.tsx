// InputArea.tsx
import './styles.css'
import { useState } from 'react';
import { TableItem } from '../TableArea'; 

interface InputAreaProps {
  addItem: (item: TableItem) => void;
}

const InputArea: React.FC<InputAreaProps> = ({ addItem }) => {
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');

  const handleAddItem = () => {
    if (!date || !category || !title || !value) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const newItem: TableItem = {
      date,
      category,
      title,
      value: parseFloat(value)
    };

    addItem(newItem);

    // Reset the input fields
    setDate('');
    setCategory('');
    setTitle('');
    setValue('');
  };

  return (
    <div className='container-input'>
      <div className='date'>
        <h3>Data</h3>
        <input type="date" id="data" name="Data" value={date} onChange={e => setDate(e.target.value)} />
      </div>
      <div className='categories'>
        <h3>Categoria</h3>
        <select name="categoria" id="categoria" required value={category} onChange={e => setCategory(e.target.value)}>
          <option value="" disabled>Selecione uma opção</option>
          <option value="Entrada">Entrada</option>
          <option value="Saída">Saída</option>
        </select>
      </div>
      <div className='title'>
        <h3>Título</h3>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div className='value'>
        <h3>Valor</h3>
        <input type="number" pattern="[0-9.,]+" value={value} onChange={e => setValue(e.target.value)} />
      </div>
      <div>
        <button className='button-input' onClick={handleAddItem}>Adicionar</button>
      </div>
    </div>
  );
}

export default InputArea;
