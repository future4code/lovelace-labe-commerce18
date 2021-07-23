import React from 'react'


class Filtro extends React.Component {
      

    render () {
        return (
            <div>
                <p>Filtro</p>
                <div>
                    <p>Valor mínimo</p>
                    <input type='number'
                    value={this.props.inputValorMinimo}
                    onChange={this.props.onChangeValorMinimo}   
                    ></input>
                </div>
                <div>
                    <p>Valor máximo</p>
                    <input type='number'
                    value={this.props.inputValorMaximo}
                    onChange={this.props.onChangeValorMaximo}   
                    ></input>
                </div>
                <div>
                    <p>descrição</p>
                    <input type='text'
                    value={this.props.inputDescricao}
                    onChange={this.props.onChangeDescricao}   
                    ></input>
                </div>
                {/* <Home lista={this.props.listaProdutosFiltrada}></Home> */}
            </div>
        )
    }
}
export default Filtro
