import { useEffect, useState, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function FavList() {

    const commentRef = useRef();

    const [favMovies, setFavMovies] = useState([])

    async function getFavMovies() {
        let url = `${process.env.REACT_APP_SERVER_URL}/getMovie`;
        let response = await fetch(url, {
            method: 'GET',
        })

        let recievedData = await response.json();
        setFavMovies(recievedData);
    }

    async function UpdateHandler(event, id) {
        event.preventDefault();

        console.log(id)
        let url = `${process.env.REACT_APP_SERVER_URL}/updateMovie/${id}`;
        let data = {
            comments: event.target.comment.value
        }
        let response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        getFavMovies()
        if (response.status === 200) {
            getFavMovies()
            alert("Comment Updated successfully !!")
        }


    }
    async function deleteHandler(id) {

        let url = `${process.env.REACT_APP_SERVER_URL}/deleteMovie/${id}`;
        let response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })

        if (response.status === 204) {
            getFavMovies()
            alert("successfully deleted !!")
        }

    }

    useEffect(() => {
        getFavMovies()

    }, [])

    return (
        <>
            <h2>These are your favorite movies</h2>
            {
                favMovies.map(movie => {
                    return (
                        <Card key={movie.id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={movie.posterpath} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>{movie.overview}</Card.Text>
                                <Card.Text>{movie.comments}</Card.Text>
                                <Form onSubmit={(event) => UpdateHandler(event, movie.id)}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control name="comment" as="textarea" rows={1} ref={commentRef} />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" > Update Comment </Button>
                                </Form>

                                <Button variant="primary" onClick={() => deleteHandler(movie.id)}> Delete </Button>

                            </Card.Body>
                        </Card>
                    )
                })
            }
        </>
    )
}