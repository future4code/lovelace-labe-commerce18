import React from "react";
import styled from "styled-components";

const EstiloCards = styled.div `
    /* display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr; */
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-width: thin;
    align-items: stretch;
    height: 250px;
    margin-bottom: 5px;
    /* align-items: start; */
    /* justify-items: stretch; */
    img {
        /* width: 100px; */
        height: 80px;
        
    }
    p {
        background-color: aqua;
    }
    > button {
        margin-bottom: 300px;
    }
`

export default function Cards (props) {

    return (
        
            <div>
                <EstiloCards>
                <img src={props.imagem} alt=''/>
                <p>{props.descricao}</p>
                <p>R$ {props.valor}</p>
                <button 
                    onClick={props.onClickAdicionar}
                    id={props.id_produto}
                >Adicionar ao carrinho</button>
                
                </EstiloCards>
            </div>
        
        
    )
}