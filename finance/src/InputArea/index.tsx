import './styles.css'

const InputArea = () => {
  return (
    <div className='container-input'>
        <div className='date'>
            <h3>Data</h3>
            <input type="date" id="data" name="Data" />
        </div>
        <div className='categories'>
            <h3>Categoria</h3>
            <select name="categoria" id="categoria" required>
             <option value="" disabled selected>Selecione uma opção</option>   
            <option value="opcao2">Entrada</option>
            <option value="opcao3">Saída</option>
            </select>
        </div>
        <div className='title'>
            <h3>Titulo</h3>
            <input type="text" />
        </div>
        <div className='value'>
            <h3>Valor</h3>
            <input type="number" pattern="[0-9.,]+" />
        </div>
        <div>
            <button className='button-input'>Adicionar</button>
        </div>

    </div>
  )
}

export default InputArea
