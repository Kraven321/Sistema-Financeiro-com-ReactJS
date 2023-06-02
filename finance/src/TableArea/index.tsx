import React from 'react';
import './styles.css';

export interface TableItem {
  date: string;
  category: string;
  title: string;
  value: number;
}

interface TableAreaProps {
  items: TableItem[];
}

const TableArea: React.FC<TableAreaProps> = ({ items }) => {
  return (
    <div className='container-table'>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Categoria</th>
            <th>Título</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td className={item.category === 'Entrada' ? 'category-entrada' : 'category-saida'}>{item.category}</td>
              <td>{item.title}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableArea;
