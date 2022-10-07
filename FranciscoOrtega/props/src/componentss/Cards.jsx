import React from 'react'

const cards = (props) =>{
    const{imagen, titulo, texto} = props

    return (
        <div className="card" style = {{width: "18rem", border:'1px solid red'}}>
            <img src={imagen} className="card-img-top img-thumbnail" alt="..."/>
            <div className="card-body">
                <h5 className= "card-title">{titulo}</h5>
                <p className="card-text">{texto}</p>
                <a href="#" className="btn btn-primary">Ver mas</a>
            </div>
        </div>

    )
}
export default cards