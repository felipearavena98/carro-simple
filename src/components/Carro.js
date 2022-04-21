import { Component } from "react";
import BubbleAlert from './BubbleAlert';
import DetallesCarro from './DetallesCarro'
import { Button, Container } from "react-bootstrap";
// const styles = {
//     carro: {
//         backgroundColor: '#359A2C',
//         color: '#fff',
//         border: 'none',
//         padding: '15px',
//         borderRadius: '15px',
//         cursor: 'pointer',
//     },
//     bubble: {
//         position: 'relative',
//         left: 12,
//         top: 20,
//     }
// }

class Carro extends Component {
    render() {
        const { carro, esCarroVisible, mostrarCarro } = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        return (
            <Container>
                <span >
                    {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
                </span>
                <Button onClick={mostrarCarro} variant="success">
                    Carro
                </Button>
                {esCarroVisible ? <DetallesCarro carro={carro} /> : null}

            </Container>
        )
    }
}

export default Carro;