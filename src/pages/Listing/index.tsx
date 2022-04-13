//import MovieScore from "assets/components/MovieScore";
import MovieCard from "assets/components/MovieCard";
import Pagination from "assets/components/Paginacao";

 function Listing(){

    return(
        <>
        <Pagination/>
        <div className= 'container'>
            <div className="row">
                <div className="col-sm-5 col-lg-4 col-xl-3 mb-3">
                 <MovieCard/> 
                </div>

                <div className="col-sm-5 col-lg-4 col-xl-3 mb-3">
                 <MovieCard/> 
                </div> <div className="col-sm-5 col-lg-4 col-xl-3 mb-3">
                 <MovieCard/> 
                </div> <div className="col-sm-5 col-lg-4 col-xl-3 mb-3">
                 <MovieCard/> 
                </div> <div className="col-sm-5 col-lg-4 col-xl-3 mb-3">
                 <MovieCard/> 
                </div> <div className="col-sm-5 col-lg-4 col-xl-3 mb-3">
                 <MovieCard/> 
                </div> <div className="col-sm-5 col-lg-4 col-xl-3 mb-3">
                 <MovieCard/> 
                </div>

               
            </div> 
        </div>
       
        
        </>
         );
}

export default Listing;