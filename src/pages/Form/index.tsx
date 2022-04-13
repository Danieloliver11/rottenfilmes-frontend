import { Link } from 'react-router-dom';
import './style.css'
function Form(){

    const filme = {
        id:1,
        imagem: "https://br.web.img3.acsta.net/pictures/19/11/29/17/57/5161763.jpg",
        titulo: "The Wicher",
        conta:2,
        score: 4.5
    }
    return (
        <div className="rottenfilmes-form-container">
            <img className="rottenfilmes-movie-card-image" src={filme.imagem} alt={filme.titulo} />
            <div className="rottenfilmes-card-bottom-container">
                <h3>{filme.titulo}</h3>
                <form className="rottenfilmes-form">
                    <div className="form-group rottenfilmes-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group rottenfilmes-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="rottenfilmes-form-btn-container">
                        <button type="submit" className="btn btn-primary rottenfilmes-btn">Salvar</button>
                    </div>
                </form >
               
                <Link to={'/'}>
                <button className='btn btn-primary rottenfilmes-btn mt-3'>Cancelar</button>
                </Link>
            </div >
        </div >)
}

export default Form;