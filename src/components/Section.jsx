import react from "react"
import {RenderBook} from "./Books/RenderBook"
import{RenderBookMost} from "./Books/RenderBookMost"
import{RenderBookRecommended} from "./Books/RenderBookRecommended"
import { useState,useEffect } from "react";


const Section= () =>{

    const [Libros, setLibros] = useState([]);

   
       

    useEffect(()=> {
        fetch("http://localhost:4000/libros")

        .then(data => data.json())
        .then(data => { setLibros(data)
        
                            })
        .catch(error => console.log("error") )
        console.log(Libros)
    },[])
    
       

return(
    <><section id="new">
    <h1>Novedades</h1>

    <div id="books-holder-new">

    <RenderBook
    Libros={Libros}
    />
    </div>



</section><section id="books-most">

        <h1 id="title-most" class="titulos">Libros mas vendidos</h1>

        <div id="books-holder-most">
        <RenderBookMost
      Libros={Libros}
    />
        </div>

    </section><section id="books-recommended" class="text">

        <h1 class="titulos">Recomendados</h1>
        
        <div id="books-holder-recommended">

        <RenderBookRecommended
      Libros={Libros}
            />
        </div>
    </section></>

)}

export default Section