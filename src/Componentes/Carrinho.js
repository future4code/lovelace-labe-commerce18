import React from 'react'
import styled from 'styled-components';

const EstiloTabela = styled.table `
    border: 1px black solid;
    align-items: center;
    text-align: center;
    justify-items: center ;

`

const produdtoPassado = {
    id: 3,
    descricao: "SpaçoNave",
    valor: 30000.00,
    urlProduto:"https://st.depositphotos.com/1320280/4156/i/950/depositphotos_41564581-stock-photo-unidentified-flying-object.jpg"        
}

class Carrinho extends React.Component {
    
    CalculaValorTotal = (quant, preco) => {
        
        return quant * preco
    };

    render () {
        
        const ListaCarrinho = this.props.carrinho.map((produto) => {
            return (
                <tr>
                    <td>{produto.id_produto}</td>
                    <td id={produto.id_produto}>{produto.descricao}</td>
                    <td>{produto.quantidade}</td>
                    <td>{produto.precoUnitario}</td>
                    <td>
                        {this.CalculaValorTotal(produto.quantidade,
                        produto.precoUnitario)}
                    </td>
                    <td>
                        <button id={produto.id_produto} onClick={this.props.clickRemover} >Remover</button>
                    
                    </td>
                </tr>
            )
        })
            
        const ListaCarrinho2 = () => {
            return (
                <div></div>
            )
        }
        return (
            <div>
                <p>Carrinho:</p>
                <EstiloTabela>
                    <th>Codigo</th>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Preço Unit.</th>
                    <th>Total</th>
                    {/* <th>Opção</th> */}
                        {ListaCarrinho}
                </EstiloTabela>
                {/* <button prod={produdtoPassado} onClick={this.onClickAcrescentarProdutoprodudtoPassado} >acrescentar</button> */}
            </div>
        )
    }
}
export default Carrinho