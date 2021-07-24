import React from 'react'
import styled from 'styled-components'
import Cards from './Cards'

const EstiloContCards = styled.div `
    flex-grow: 1;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    /*repeat(3, 1fr)*/
    grid-template-rows: 1fr;
    
    margin: 20px;
    row-gap: 10px;
    column-gap: 10px;
    /* width: 100%; */
    /* height: 250px; */
`


export default class ContainerCards extends React.Component {
    render() {

        const ListarProdutos = this.props.lista.map((produto) => {
            return (
                <Cards
                    imagem = {produto.imagem}
                    descricao={produto.descricao}
                    valor={produto.valor}
                    onClickAdicionar={this.props.onClickAdd}
                    id_produto={produto.id_Produto}
                >
                </Cards>
            )
        })

    return (
        <EstiloContCards>
            {ListarProdutos}
        </EstiloContCards>
    )
}
}