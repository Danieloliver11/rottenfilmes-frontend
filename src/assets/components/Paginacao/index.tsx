import { ReactComponent as Arrow} from 'assets/img/arrow.svg';
import './styles.css'
function Pagination() {
    return (

        <div className="rottenfilmes-pagination-container">
            <div className="rottenfilmes-pagination-box">
                <button className="rottenfilmes-pagination-button" disabled={true} >
                    <Arrow /> 
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="rottenfilmes-pagination-button" disabled={false} >
                    <Arrow className="rottenfilmes-flip-horizontal" />
                </button>
            </div>
        </div>

    );
}

export default Pagination;