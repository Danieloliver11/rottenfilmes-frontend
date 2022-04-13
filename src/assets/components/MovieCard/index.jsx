import { Link } from "react-router-dom";
import MovieScore from "../MovieScore";



type Props = {
    movie: Movie;
}

function MovieCard({ movie }: Props) {

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher Segunda Temporada", 
        count: 2,
        score: 4.5
    };
    return (

        <div>
            <img className="rottenfilmes-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="rottenfilmes-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore  />

                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary rottenfilmes-btn">Avaliar</div>
                </Link>


                 

            </div>
        </div>
    );
}
export default MovieCard;