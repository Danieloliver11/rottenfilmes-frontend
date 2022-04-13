import { ReactComponent as StarFull } from 'assets/img/star_full.svg';
import { ReactComponent as StarHalf } from 'assets/img/star_half.svg';
import { ReactComponent as StarEmpty } from 'assets/img/star_empity.svg';
import './styles.css';

function MovieStars() {

    return (

        <div className="rottenfilmes-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );

    
}
export default MovieStars;