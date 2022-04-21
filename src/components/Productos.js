import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Producto from './Producto'


// const styles = {
//     productos: {
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'space-between'

//     }
// }


class Productos extends Component {
    render() {
        const { productos, agregarAlCarro } = this.props

        return (
            <Container>
                <Row>
                    {productos.map(producto =>
                        <Col sm={12} md={4} className='mx-auto my-5 mb-5'>
                            <Producto
                                agregarAlCarro={agregarAlCarro}
                                key={producto.name}
                                producto={producto}
                            />
                        </Col>

                    )}
                </Row>
            </Container>
        )
    }
}

export default Productos;