import react, { useEffect, useState } from "react";
import Libro from "../Main/Books";
import {libro} from "../Section";
import BookSelected from "../BookSelected";
import { Link } from "react-router-dom";
import  LibroNew  from "../../App";


export const RenderBook = (props) => {
  
    const [Book,setBook] = useState([])
       let libro=[];
        
        return (          <>
           
        { props.Libros.filter(value => value.seccion==='newBook').map((libro,index)=> {
               
               return(
                <div id={libro.id} >
                        <img  className="pad-style" src= {libro.img} alt=""/>
                        <br/>
                        <a  ><span class="titulo">{libro.titulo} </span></a>
                        <br/>
                        <span className="Precio"  >$ {libro.precio}</span>
                        
                        <button id="detalle" type= "button" onClick={() => {
                                        Book.push(libro
                                        
                                        
                                        )

                                       
                                      console.log(libro)
                                        
                                        
                                        
                                  
                                    
                                

                                }  } > DETALLES</button> 
                                <br />
                                     
                    </div>
        
                   
        
           
                    )
               }

          )
          
          }
           
             
        
       </>
        


        )
        

       
    
 } 


 

//  <div id="books-holder-most">
//         { Libros.filter(value => value.seccion==='mostSelledBook').map((libro,index)=> {
               
//                return(
//                 <div id={libro.id} >
//                         <img  className="pad-style" src= {libro.img} alt=""/>
//                         <br/>
//                         <a  ><span class="titulo">{libro.titulo} </span></a>
//                         <br/>
//                         <span className="Precio"  >$ {libro.precio}</span>
            
//                     </div>
        
           
//                     )
//                   }

//           )
//           }
//         </div>

        





export default RenderBook;

