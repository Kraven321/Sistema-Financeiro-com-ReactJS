import React, { useState, useEffect } from 'react';
import './styles.css';
import { TableItem } from '../TableArea';

interface InfoAreaProps {
  items: TableItem[];
}

export const InfoArea: React.FC<InfoAreaProps> = ({ items }) => {
  const currentDate = new Date();
  const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ];
  const mesAtual = meses[currentDate.getMonth()];
  const anoAtual = currentDate.getFullYear();
  const [mesSelecionado, setMesSelecionado] = useState(mesAtual);
  const [anoSelecionado, setAnoSelecionado] = useState(anoAtual);
  const [receitas, setReceitas] = useState(0);
  const [despesas, setDespesas] = useState(0);
  const [itemsFiltrados, setItemsFiltrados] = useState(items);

  useEffect(() => {
    const receitasTotal = itemsFiltrados
      .filter(item => item.category === 'Entrada')
      .reduce((total, item) => total + item.value, 0);
    const despesasTotal = itemsFiltrados
      .filter(item => item.category === 'Saída')
      .reduce((total, item) => total + item.value, 0);

    setReceitas(receitasTotal);
    setDespesas(despesasTotal);
  }, [itemsFiltrados]);

  useEffect(() => {
    const filteredItems = items.filter(
      item =>
        new Date(item.date).getMonth() === meses.indexOf(mesSelecionado) &&
        new Date(item.date).getFullYear() === anoSelecionado
    );
    setItemsFiltrados(filteredItems);
  }, [items, mesSelecionado, anoSelecionado]);

  const selecionarMesAnterior = () => {
    const mesAtualIndex = meses.indexOf(mesSelecionado);
    let novoAnoSelecionado = anoSelecionado;
    let novoMesSelecionado = mesSelecionado;

    if (mesAtualIndex === 0) {
      novoAnoSelecionado = anoSelecionado - 1;
      novoMesSelecionado = meses[11];
    } else {
      novoMesSelecionado = meses[mesAtualIndex - 1];
    }

    setAnoSelecionado(novoAnoSelecionado);
    setMesSelecionado(novoMesSelecionado);
    setReceitas(0);
    setDespesas(0);
  };

  const selecionarProximoMes = () => {
    const mesAtualIndex = meses.indexOf(mesSelecionado);
    let novoAnoSelecionado = anoSelecionado;
    let novoMesSelecionado = mesSelecionado;

    if (mesAtualIndex === 11) {
      novoAnoSelecionado = anoSelecionado + 1;
      novoMesSelecionado = meses[0];
    } else {
      novoMesSelecionado = meses[mesAtualIndex + 1];
    }

    setAnoSelecionado(novoAnoSelecionado);
    setMesSelecionado(novoMesSelecionado);
    setReceitas(0);
    setDespesas(0);
  };

  const balanceColor = receitas - despesas >= 0 ? 'green' : 'red';

  return (
    <div className="container-info">
      <div className="mes-selecionado">
        <button onClick={selecionarMesAnterior}>&#8592;</button>
        <h3 className='title-dinamo'>{mesSelecionado} de {anoSelecionado}</h3>
        <button onClick={selecionarProximoMes}>&#8594;</button>
      </div>
      <div className="income">
        <h3>Receitas</h3>
        <h5>R${receitas.toFixed(2)}</h5>
      </div>
      <div className="expense">
        <h3>Despesas</h3>
        <h5>R${despesas.toFixed(2)}</h5>
      </div>
      <div className="balanço">
        <h3>Balanço</h3>
        <h5 style={{ color: balanceColor }}>R$ {(receitas - despesas).toFixed(2)}</h5>
      </div>
    </div>
  );
};
