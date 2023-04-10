import ModalMovie from "../ModalMovie/ModalMovie"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";


export default function Movie(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // console.log(props.data)
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`} />
                <Card.Body>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Button variant="primary" onClick={handleShow}>Addto favorites</Button>
                </Card.Body>
            </Card>
            <ModalMovie show={show} handleClose={handleClose} data={props.data} commentHandler={props.commentHandler} />
        </>
    )
}