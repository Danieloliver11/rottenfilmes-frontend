import MovieStars from '../MovieStars';
import './styles.css';

function MovieScore() {

    const score = 3.5;
    const count = 15;

    return (
        <div className="rottenfilmes-score-container">
            <p className="rottenfilmes-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="rottenfilmes-score-count">{count} avaliações</p>
        </div>
    );
}
export default MovieScore;