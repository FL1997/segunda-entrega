import react from "react";
import logo from "./images/logo.png"


//   <img id="logo" src="./css/images/logo.png" alt=""> </img>
const Header = (props) =>
 {
     return(

<header>
          


  <nav  >
    <div id="container">

      <img id="logo" src={logo} alt=""></img>
    
       
      <a id="inicio"  href="">Inicio</a> 
                        
                      
                        <a id="libros"href="libro1.html">Libros </a>
                          
                 
                  
                <a id="nosotros" href="">Nosotros</a>
                <a id="contacto" href="">Contacto</a>
                <a id="carrito" href="">Carrito</a>
             
                      
          <input type="text" placeholder="Buscar.."name="" id="search-bar"></input>
          <button className="btn-srch"type="submit"></button>
    </div>
</nav>

</header>

) }
export default Header;