import React from "react";
import styled from "styled-components";

const EstiloCards = styled.div `
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-width: thin;
    row-gap: 10px;
    
    img {
        height: 80px;
        width: 150px;
    }
    
    > button {
        margin: 5px auto;
    }
    >div{
        margin: 0 5px;
    }
`

export default function Cards (props) {

    return (
        
            <div>
                <EstiloCards>
                <img src={props.imagem} alt=''/>
                <div>{props.descricao}</div>
                <div>R$ {props.valor}</div>
                <button 
                    onClick={props.onClick}
                    id={props.id_Produto}
                >Adicionar ao carrinho</button>
                </EstiloCards>
            </div>
        
        
    )
}