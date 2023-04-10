import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// import { Link } from 'react-router-dom';
import { useRef } from 'react';

export default function ModalMovie(props) {

    const commentRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        let userComment = commentRef.current.value;
        let newData = { ...props.data, userComment }
        // console.log(7777, newData);
        props.commentHandler(newData, newData.id);
    }
    async function addToFavHandler(event, movie) {
        event.preventDefault();

        let url = `${process.env.REACT_APP_SERVER_URL}/addMovie`

        let data = {
            title: props.data.title,
            posterPath: `https://image.tmdb.org/t/p/w500/${props.data.poster_path}`,
            overview: props.data.overview,
            comments: props.data.comment,
        }
        // console.log(1111111111,data)
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        if (response.status === 201) {
            alert("sucessfully added to database")
        }
        // const recievedData = await response.json()
        // console.log(12121212,recievedData);
    }

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
                    {props.data.comment ? props.data.comment : "No comment added"}
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Add a comment</Form.Label>
                            <Form.Control as="textarea" rows={3} ref={commentRef} placeholder='Enter your comment' />
                        </Form.Group>
                        <Button variant="primary" type='submit' onClick={(event) => submitHandler(event)}>
                            Save Comment
                        </Button>
                        <Button variant="primary" type='submit' onClick={(event) => addToFavHandler(event)}>
                            Add to favorites
                        </Button>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
