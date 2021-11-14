import react from "react"
import {RenderBook} from "./Books/RenderBook"
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
    })
    
       

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
            
        </div>

    </section><section id="books-recommended" class="text">

        <h1 class="titulos">Recomendados</h1>
        
        <div id="books-holder-recommended">


        </div>
    </section></>

)}

export default Section