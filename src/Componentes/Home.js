import React from 'react'
import styled from 'styled-components'
import Cards from './Cards'


const EstiloContCards = styled.div `
    border: 1px black solid;
    padding: 5px;
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    margin: 20px;
    row-gap: 10px;
    column-gap: 10px;
`
const EstiloTitulo = styled.div `
    display: flex;
    justify-content: space-between;
    margin: 20px;
    select{
        margin-left: 5px;
    }
`
export default class Home extends React.Component {
 
    componentDidMount() {

    }
    render () {
        const ListarProdutos = this.props.lista.map((produto) => {
            return (
                    <Cards
                        imagem={produto.urlProduto}
                        descricao={produto.descricao}
                        valor={produto.valor}
                        id_Produto={produto.id}
                        onClick={this.props.onClickAcrescentarProduto}
                    >
                    </Cards>
            )
        })
//onChange={this.props.onChangeOrdenacao}
        
        return (
            <div>
                <p>Home</p>
                <EstiloTitulo>
                    <div>Quantidade de produtos: {this.props.quantidade}</div>
                    <div>Ordenação
                        <select id='Selecao' onClick={this.props.onChangeOrdenacao}> 
                            <option value='C' >Crescente</option>
                            <option value='D' >Descrcente</option>
                        </select>
                    </div>
                </EstiloTitulo>
                
                <EstiloContCards>
                    {ListarProdutos}
                </EstiloContCards>
            </div>
        )
    }
}