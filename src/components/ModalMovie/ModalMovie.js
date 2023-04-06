import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function ModalMovie(props) {

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header>
                    {/* I removed the close button */}
                    {/* <Modal.Header closeButton> */}
                    <Modal.Title>
                        {props.data.title}
                        <img style={{ "width": "465px", "height": "400px" }} src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`} alt={props.data.title} />
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Add a comment</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Add to Favorites
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
