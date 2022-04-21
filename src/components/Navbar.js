import { Component } from "react";
import Logo from './Logo';
import Carro from './Carro'
import { Navbar, Container, Row, Col } from "react-bootstrap";

// const styles = {
//     navbar: {
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//         height: '100px',
//         justifyContent: 'space-between',
//         position: 'relative',
//         padding: '0 50px',
//         boxShadow: '0 2px 3px rgb(0, 0, 0, 0.1)'
//     }
// }


class Navigation extends Component {
    render() {
        const { carro, esCarroVisible, mostrarCarro } = this.props
        return (

            <Navbar variant="light" bg="light">
                <Container>
                    <Navbar.Brand>
                        <Logo />
                    </Navbar.Brand>
                    <Row>
                        <Col>
                            <Carro
                                carro={carro}
                                esCarroVisible={esCarroVisible}
                                mostrarCarro={mostrarCarro}
                            />
                        </Col>
                    </Row>
                </Container>
            </Navbar>


        )
    }
}

export default Navigation