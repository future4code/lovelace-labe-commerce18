import React from 'react'
import styled from 'styled-components'
import Cards from './Cards'

const EstiloContCards = styled.div `
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    
    margin: 20px;
    row-gap: 10px;
    column-gap: 10px;
    width: 100%;
    height: 250px;
`


export default function ContainerCards (props) {
    return (
        <EstiloContCards>
            <Cards
                imagem = {props.imagem}
                descricao={props.descricao}
                valor={props.valor}
                onClickAdicionar={props.onClickAdd}
                id_produto={props.id_Produto}
            ></Cards>
            
        </EstiloContCards>
    )
}