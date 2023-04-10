import Movie from "../Movie/Movie"


export default function MovieList(props) {
    return (
        <>
            {
                props.data.map(element => {
                    return (

                        <Movie data={element} key={element.id} commentHandler={props.commentHandler}/>
                    )
                })
            }
        </>
    )
}