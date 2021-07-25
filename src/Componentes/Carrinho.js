import React from 'react'
import styled from 'styled-components';

const EstiloTabela = styled.table `
    border: 1px black solid;
    display: block;
    align-items: center;
    padding: 5px;
    justify-items: center ;
>td{
    text-align: left;
}
button{
    margin-left: 4px;
}
`
const EstiloMoeda = styled.td `
    text-align: right;
`
const ValorTotal = (quantidade, precoUnitario) => {
    let valorTotal = quantidade * precoUnitario * 100
    valorTotal.toFixed(2)
    valorTotal = valorTotal / 100
    return (valorTotal)
}
const formatoMoeda = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
class Carrinho extends React.Component {
    
    render () {
        
        const ListaCarrinho = this.props.carrinho.map((produto) => {
            return (
                <tr>
                    <td>{produto.id_produto}</td>
                    <td 
                    >{produto.descricao}</td>
                    <EstiloMoeda>{produto.quantidade}</EstiloMoeda>
                    <EstiloMoeda>{formatoMoeda(produto.precoUnitario)}</EstiloMoeda>
                    <EstiloMoeda>
                        {formatoMoeda(ValorTotal(produto.quantidade, produto.precoUnitario))}
                    </EstiloMoeda>
                    <td>
                        <button id={produto.id_produto} onClick={this.props.clickRemover} >Remover</button>
                    
                    </td>
                </tr>
            )
        });
        return (
            <div>
                <p>Carrinho:</p>
                <EstiloTabela>
                    <th>Codigo</th>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Preço Unit.</th>
                    <th>Total</th>
                    {!this.props.carrinho.length}
                      {/* <div>Vazio</div>  */}
                      {ListaCarrinho}
                     
                </EstiloTabela>
            </div>
        )
    }
}
export default Carrinho