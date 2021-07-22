import React from 'react'

class filtro extends React.Component {
    state = [
        {
            id: 1,
            name: "Foguete da Missão Apollo 11",
            value: 10000.0,
            imageUrl: "https://picsum.photos/200/200",
        },
        {
            id: 1,
            name: "Foguete da Missão Apollo 10",
            value: 10000.0,
            imageUrl: "https://picsum.photos/200/200",
        },
        {
            id: 1,
            name: "Foguete da Missão Apollo 9",
            value: 10000.0,
            imageUrl: "https://picsum.photos/200/200",
        }
    ]
}


export default class Filtro extends React.Component {

    render () {
        return (
            <div>
                <h3>Filtros</h3>
                    <label>
                    "Valor Mínimo:"
                    </label>
                    <label>
                    "Valor Máximo:"
                    </label>
                    <label>
                    "Busca por nome:"
                     </label>

            </div>
        )
    }
}