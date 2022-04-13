//import MovieScore from "assets/components/MovieScore";
import MovieCard from "assets/components/MovieCard";
import Pagination from "assets/components/Paginacao";
import axios from "axios";
import { useEffect, useState } from "react";
import { MoviePage } from "types/filme";
import { BASE_URL } from "utils/requests";

 function Listing(){

    const [pageNumber, setPageNumber] = useState(0);
    //
  
    


    const [page,setPage] = useState<MoviePage>({

        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true,
    });

    useEffect(() => {
    axios.get(`${BASE_URL}/filme?page=${pageNumber}&size=20&sort=`)
    .then(response => {
        const data = response.data as MoviePage;
        setPage(data);
        

        // setPageNumber(data.number);
        // console.log(data);
        
    })
    },[pageNumber])

    
    


    return(
        <>
        <Pagination/>
        <div className= 'container'>
            <div className="row">
                  {page.content.map(movie => (

                    <div className="col-sm-5 col-lg-4 col-xl-3 mb-3">
                    <MovieCard movie = {movie}/> 
                    </div>
                  )
                  )}
                

               
            </div> 
        </div>
       
        
        </>
         );
}

export default Listing;