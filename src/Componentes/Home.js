import React from 'react'
import styled from 'styled-components'


const StiloDasImagens = styled.img
`
width: 200px;
border: 1px solid black;
display flex;
justify-content: center;
align-items: center;


`

const DescricaoProdutos = styled.p
`
display flex;
text-align: center
`


const ValorDoProduto = styled.p
`
display flex;
align-items: center;
`




const BotaoAdicionar = styled.button 
`
display flex; 

`



const  listaDeProdutos = [
{
id: 1,
descricao: "SpaçoNave",
valor: 30000.00,
urlProduto:"https://st.depositphotos.com/1320280/4156/i/950/depositphotos_41564581-stock-photo-unidentified-flying-object.jpg"

},
{
id: 2,
descricao: "Foguete",
valor: 50000.00,
urlProduto:"https://st2.depositphotos.com/2197700/9185/i/950/depositphotos_91851398-stock-photo-space-shuttle-flying-over-the.jpg"
},

{
id: 3,
descricao: "Foguete Branco",
valor: 55000.00,
urlProduto:"https://st3.depositphotos.com/1006542/13733/i/1600/depositphotos_137335916-stock-photo-launch-of-space-missile.jpg"
}
]



export default class Home extends React.Component {

    

    render() {
        return (
            <div>
                <p>Home</p>
                
                <div className="card-produto">
                    <StiloDasImagens src={listaDeProdutos[0].urlProduto} alt=" EspaçoNave" ></StiloDasImagens>
                    <DescricaoProdutos>{listaDeProdutos[0].descricao} </DescricaoProdutos>
                    <ValorDoProduto>{listaDeProdutos[0].valor}</ValorDoProduto>
                    <BotaoAdicionar>Adicionar ao carrinho</BotaoAdicionar>
                    
              
                     <StiloDasImagens src={listaDeProdutos[1].urlProduto} alt="foguete" ></StiloDasImagens>
                    <DescricaoProdutos>{listaDeProdutos[1].descricao} </DescricaoProdutos>
                    <ValorDoProduto>{listaDeProdutos[1].valor}</ValorDoProduto>
                    <BotaoAdicionar>Adicionar ao carrinho</BotaoAdicionar>


                    
                    <StiloDasImagens src={listaDeProdutos[2].urlProduto} alt="foguete branco" ></StiloDasImagens>                   
                    <DescricaoProdutos>{listaDeProdutos[2].descricao} </DescricaoProdutos>
                    <ValorDoProduto>{listaDeProdutos[2].valor}</ValorDoProduto>
                    <BotaoAdicionar>Adicionar ao carrinho</BotaoAdicionar>
                    
                    
        
                    </div>

                







            </div>
        )
    }
}