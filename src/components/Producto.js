import { Component } from "react";
import { Container, Image } from "react-bootstrap";
import ButtonCart from "./Button";


// const styles = {
//     producto: {
//         border: 'solid 1px #eee',
//         boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
//         whidth: '30%',
//         padding: '10px 15px',
//         borderRadius: '5px'
//     },
//     img: {
//         width: '100%',
//     }
// }

class Producto extends Component {
    render() {
        const { producto, agregarAlCarro } = this.props

        return (
            <Container className="text-center">
                <Image alt={producto.name} src={producto.img} />
                <h3> {producto.name} </h3>
                <p> {producto.price} </p>
                <ButtonCart onClick={() => agregarAlCarro(producto)}>
                    Agregar al Carro
                </ButtonCart>
            </Container>
        )
    }
}

export default Producto;