import react, { useEffect, useState } from "react";
import Libro from "../Main/Books";



export const RenderBook = (props) => {

    


        return (  
        <>
           
        { props.Libros.filter(value => value.seccion==='newBook').map((libro,index)=> {
               
               return(
                <div id={libro.id} >
                        <img  className="pad-style" src= {libro.img} alt=""/>
                        <br/>
                        <a  ><span class="titulo">{libro.titulo} </span></a>
                        <br/>
                        <span className="Precio"  >$ {libro.precio}</span>
            
                    </div>
        
           
                    )
               }

          )
          
          }
             
        { props.Libros.filter(value => value.seccion==='mostSelledBook').map((libro,index)=> {
               
               return(
                <div id={libro.id} >
                        <img  className="pad-style" src= {libro.img} alt=""/>
                        <br/>
                        <a  ><span class="titulo">{libro.titulo} </span></a>
                        <br/>
                        <span className="Precio"  >$ {libro.precio}</span>
            
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

        





export default RenderBook
