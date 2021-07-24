import React from "react";
import styled from "styled-components";

const EstiloCards = styled.div `
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-width: thin;
    img {
        height: 80px;
    }
    
    > button {
        margin: 0 auto;
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