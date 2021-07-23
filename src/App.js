import React from 'react';

import './App.css';
import Carrinho from './Componentes/Carrinho'
import Filtro from './Componentes/Filtro';
import Home from './Componentes/Home';
import styled from 'styled-components';



const Style = styled.div
`
display: flex;

`








class App extends React.Component {
  
  componentDidMount() {
    this.setState({listaProdutosFiltrada: this.state.listaProdutos})
  }

  state = {
    listaProdutos: [
      { id: 1,
        descricao: "SpaçoNave",
        valor: 30000.00,
        urlProduto:"https://st.depositphotos.com/1320280/4156/i/950/depositphotos_41564581-stock-photo-unidentified-flying-object.jpg",
        visivel: true
      },
      {id: 2,
        descricao: "Foguete",
        valor: 50000.00,
        urlProduto:"https://st2.depositphotos.com/2197700/9185/i/950/depositphotos_91851398-stock-photo-space-shuttle-flying-over-the.jpg",
        visivel: true
      },
      {id: 3,
        descricao: "Foguete Branco",
        valor: 55000.00,
        urlProduto:"https://st3.depositphotos.com/1006542/13733/i/1600/depositphotos_137335916-stock-photo-launch-of-space-missile.jpg",
        visivel: true
      },
      {id: 5,
        descricao: 'Foeguete Premiun',
        valor: 15000.00,
        urlProduto:"https://st2.depositphotos.com/2197700/9185/i/950/depositphotos_91851398-stock-photo-space-shuttle-flying-over-the.jpg",
        visivel: true
      }
    ],
    listaProdutosFiltrada:[],
    inputValorMinimo: 0,
    inputValorMaximo: 100000,
    inputDescricao: '',

    carrinho: [
      {
          id_produto: 1,
          descricao: 'Produto 1',
          precoUnitario: 35,
          quantidade: 5
      },
      {
          id_produto: 2,
          descricao: 'Produto 2',
          precoUnitario: 30,
          quantidade: 3
      }
  ]




  }
//valorMinimo, valorMaximo, descricao
  filtrarRangerDescricao = (valorMinimo, valorMaximo, descricao) => {
    const novaListaProduto = this.state.listaProdutos.filter((produto) =>{
        return ((produto.valor >= valorMinimo) && 
                (produto.valor <= valorMaximo)) 
        
    })
    // console.log('min/max', valorMinimo, valorMaximo)
    this.setState({listaProdutosFiltrada: novaListaProduto})
  }
  onChangeValorMinimo = (event) => {
    this.setState({inputValorMinimo: event.target.value})
    this.filtrarRangerDescricao(event.target.value)
    //event.target.value
  }

  onChangeValorMaximo = (event) => {
    // console.log('v.maqximo', event.target.value)
    this.setState({inputValorMaximo: event.target.value})
    this.filtrarRangerDescricao(event.target.value)
  }

  onChangeDescricao = (event) => {
    this.setState({inputDescricao: event.target.value})
    // this.filtrarRangerDescricao(event.target.value)
  }


  onClickAcrescentarProduto = (event) => {
    //event.currentTarget.id
    const idProd = parseInt(event.currentTarget.id)
    console.log(typeof(event.currentTarget.id))
    const produtoSelecionado = this.state.carrinho.filter((produto) => {
        console.log('id',produto.id_produto)
        console.log(produto.id_produto === idProd)
        return produto.id_produto === parseInt(event.currentTarget.id)
    });
    console.log('prod. seleciondo', produtoSelecionado)
    if (produtoSelecionado.length > 0) {
        // Aumentar Quantidade
        this.AlteraQuantidadeUmProduto(produtoSelecionado[0].id, 
            produtoSelecionado[0].quantidade + 1)
    } else {
        // Adicionar Produto da lista
        const produtoCarrinho = this.state.listaProdutos.filter((produto) => {
          return produto.id === event.currentTarget.id
        })
        console.log('produto para o carrinho', produtoCarrinho)
        // {
        //     id_produto: event.currentTarget.id,
        //     descricao: event.id,
        //     precoUnitario: event.currentTarget.id,
        //     quantidade: 1
        // }
        this.AdicionaProduto(produtoCarrinho)
    }
}

onClickRemoverQuantidade = (event) => {
    const produtoSelecionado = this.state.carrinho.filter((produto) => {
        return produto.id_produto === event.currentTarget.id
    });
    if (produtoSelecionado[0].quantidade > 1) {
        // Diminuir quantidade
        this.AlteraQuantidadeUmProduto(event.currentTarget.id, 
            produtoSelecionado[0].quantidade - 1)
    } else {
        // Remover produto
        this.RemoverProduto(event.currentTarget.id)
    }
}

AdicionaProduto = (produto) => {
    const novoProdutoCarrinho = {
        id_produto: produto.id,
        descricao: produto.descricao,
        precoUnitario: produto.valor,
        quantidade: 1
    }
    console.log(novoProdutoCarrinho)
    const novoCarrinho = [...this.state.carrinho, novoProdutoCarrinho]
    this.setState({carrinho: novoCarrinho})
}

RemoverProduto = (idProduto) => {
    let novoCarrinho = this.state.carrinho.filter((produto) => {
        return (produto.id_produto !== idProduto)
    })
    this.setState({carrinho: novoCarrinho})
}

AlteraQuantidadeUmProduto = (idProduto, quantidade) => {
    const novoCarrinho = this.state.carrinho.map((produto) => {

        if (idProduto === produto.id_produto) {
        
            const novoProduto = {...produto,
                quantidade: quantidade
            }
            return novoProduto
        
        } else {
            return produto
        }
    })
    this.setState ({carrinho: novoCarrinho})
}

  render() {
    return ( 
    <div>
      
            <div className="App">

        {/* <Home /> */}
        
        <Filtro
        inputValorMinimo={this.state.inputValorMinimo}
        onChangeValorMinimo={this.onChangeValorMinimo}

        inputValorMaximo={this.state.inputValorMaximo}
        onChangeValorMaximo={this.onChangeValorMaximo}

        inputDescricao={this.state.inputDescricao}
        onChangeDescricao={this.onChangeDescricao}
        listaProdutosFiltrada={this.state.listaProdutosFiltrada}
        />
        <Home 
          carrinho={this.state.carrinho}
          onClickRemoverQuantidade={this.onClickRemoverQuantidade}
          onClickAcrescentarProduto={this.onClickAcrescentarProduto}
          lista={this.state.listaProdutosFiltrada}
        ></Home>
      </div>
      </div>
    );
  }
}


export default App;
