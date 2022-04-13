import {ReactComponent as GithubIcone} from '../../img/git60.svg';
import '../navbar/styles.css'

 function Navbar(){
     return( <header>
        <nav className="container">
            <div className="rottenfilmes-nav-content">
                <h1>RottenFilmes</h1>
                <a href= 'https://github.com/Danieloliver11'></a>
                <div className="rottenfilmes-contatos">
                    <GithubIcone/>
                    <p className='rottenfilmes-contato-link'>Daniel M</p>
                </div>
            </div>  
        </nav> 
      </header>);
 }
 export default Navbar;