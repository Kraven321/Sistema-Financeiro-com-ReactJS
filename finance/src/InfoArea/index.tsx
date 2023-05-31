import './styles.css'

 export const InfoArea = () => (
    <div className="container-info">
        <div className="mes-selecionado">
            <button> &#8592;</button>
            <h3>Maio,2023</h3>
            <button>&#8594;</button>
        </div>
        <div className="income">
            <h3>Receitas</h3>
            <h5>R$3.000,00</h5>
        </div>
        <div className="expense">
            <h3>Despesas</h3>
            <h5>R$500,00</h5>
        </div>
        <div className="balanço">
            <h3>Balanço</h3>
            <h5>R$2.500,00</h5>
        </div>

    </div>
)


