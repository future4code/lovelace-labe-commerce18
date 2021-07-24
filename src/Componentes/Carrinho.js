import React from 'react'
import styled from 'styled-components';

const EstiloTabela = styled.table `
    border: 1px black solid;
    display: block;
    align-items: center;
    text-align: center;
    justify-items: center;

`
class Carrinho extends React.Component {
    
    render () {
        
        const ListaCarrinho = this.props.carrinho.map((produto) => {
            return (
                <tr>
                    <td>{produto.id_produto}</td>
                    <td id={produto.id_produto}>{produto.descricao}</td>
                    <td>{produto.quantidade}</td>
                    <td>{produto.precoUnitario}</td>
                    <td>
                        {produto.quantidade * produto.precoUnitario}
                    </td>
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
                    {!this.props.carrinho.length}  <div>Vazio</div> {ListaCarrinho}
                     
                </EstiloTabela>
            </div>
        )
    }
}
export default Carrinho