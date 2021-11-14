import react, { useEffect, useState } from "react";
import Libro from "../Main/Books";



export const RenderBookMost = (props) => {

        const [Book,setBook] = useState([]);


        return (  
        <>
           
     
             
        { props.Libros.filter(value => value.seccion==='mostSelledBook').map((libro,index)=> {
               
               return(
                <div id={libro.id} >
                        <img  className="pad-style" src= {libro.img} alt=""/>
                        <br/>
                        <a  ><span class="titulo">{libro.titulo} </span></a>
                        <br/>
                        <span className="Precio"  >$ {libro.precio}</span>
                        <br />
                        <button id="detalle" type= "button" onClick={() => {
                                        Book.push(libro
                                        
                                        
                                        )
                                        

                                        console.log(libro)
                                        
                                  
                                        
                                

                                }} > DETALLES</button> 
                                <br />
                    </div>
        
           
                    )
               }

          )
          
          }
       </>
        


        )
        

       
    
 } 
 
 export default RenderBookMost
