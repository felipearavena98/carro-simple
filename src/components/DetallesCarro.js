import { Component } from "react";
import { Container } from "react-bootstrap";
// import Producto from "./Producto";


const styles = {
    detallesCarro: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50,
    },
    imagen: {
        width: 50,
        height: 32,
    },
    ul: {
        margin: 0,
        padding: 0,
    },
    producto: {
        listStylesType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa'
    }
}

class DetallesCarro extends Component {
    render() {
        const { carro } = this.props
        return (
            <Container style={styles.detallesCarro}>
                <ul style={styles.ul}>
                    {carro.map(x => <li style={styles.producto} key={x.name}><img style={styles.imagen} alt={x.name} src={x.img} />{x.name}<span>{x.cantidad}</span> </li>)}
                </ul>
            </Container>
        )
    }
}

export default DetallesCarro