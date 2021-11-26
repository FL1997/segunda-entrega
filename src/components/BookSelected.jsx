import react from "react";
import Libro from "./Main/Books";
import Book from "./Books/RenderBook";
import Header from './Header';
import Main from './Main';
import Section from './Section';
import Footer from "./Footer";
import RenderBook from "./Books/RenderBook";

  const BookSelected = (item) =>{
 

  
    return(

        
        <>
        <div id="holder-book">
        
       
        <div class="titulo-principal"> <br/>
                                  <h1>{item.titulo} </h1></div>
        
                                    <div class="imagen"><img src={item.img} alt=""/></div>
        
                                        <span>{item.titulo}</span> 
                                    <p id="descripcion"> {item.descripcion} </p>

                                      
         </div>
      
       
         
         </> 
    )
   




 }

export default BookSelected
 