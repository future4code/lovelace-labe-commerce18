import React from 'react'
import styled from 'styled-components'
import Carrinho from './Carrinho'
import ContainerCards from './ContainerCards'

const EstiloLista = styled.div `
display: flex;

`



export default class Home extends React.Component {
    
    render () {
        const ListarProdutos = this.props.lista.map((produto) => {
            return (
                <EstiloLista>
                    <ContainerCards 
                        imagem={produto.urlProduto}
                        descricao={produto.descricao}
                        valor={produto.valor}
                        id_Produto={produto.id}
                        onClickAdd={this.props.onClickAcrescentarProduto}
                    > 
                    </ContainerCards>
                </EstiloLista> 
                
            )
        })

        
        return (
            <div>
                <p>Home</p>
                
                    {ListarProdutos}
                
                <button>adicionar</button>
                <Carrinho 
                    carrinho={this.props.carrinho} 
                    clickRemover={this.props.onClickRemoverQuantidade}
                ></Carrinho>
            </div>
        )
    }
}