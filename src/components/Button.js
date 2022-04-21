import { Component } from "react";
import { Button } from "react-bootstrap";

// const styles = {
//     button: {
//         backgroundColor: '#0A283E',
//         color: '#fff',
//         padding: '15px 20px',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',

//     }
// }

class ButtonCart extends Component {
    render() {
        return (
            <Button  {...this.props} variant="success" />
        )
    }
}

export default ButtonCart