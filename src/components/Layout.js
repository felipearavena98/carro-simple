import { Component } from "react";
import { Container } from "react-bootstrap";


// const styles = {
//     layout: {
//         backgroundColor: '#fff',
//         color: '#0A283E',
//         alignItems: 'center',
//         display: 'flex',
//         flexDirection: 'column'
//     },

//     container: {
//         width: '1200px',
//     }
// }

class Layout extends Component {
    render() {
        return (
            <Container>
                <Container >
                    {this.props.children}
                </Container>
            </Container>
        )
    }
}

export default Layout;