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
    
        <ul>
                  <li><a id="inicio"  href="">Inicio</a> </li>
                  <li ><a id="libros"href="#">Libros</a></li>  
                    <div className="drop">
                          <ul>
                              <li> <a id="historia"  href="">Historia</a> </li>
                              <li> <a id="ciencia"   href="">Ciencias</a></li>
                              <li> <a id="musica"   href="">Musica</a></li>
                              <li> <a id="infantiles"   href="">Infantiles</a></li>
                              <li> <a id="arte"   href="">Arte</a></li>
                              <li> <a id="manga"  href="">Manga</a></li>
                              
                        </ul>
                        </div>
                    
                  <li><a id="nosotros" href="">Nosotros</a></li>
                  <li><a id="contacto" href="">Contacto</a></li>
                  <li><a id="carrito" href="">Carrito</a></li> 
                
            </ul>      
             
                      
          <input type="text" placeholder="Buscar.."name="" id="search-bar"></input>
          <button className="btn-srch"type="submit"></button>
    </div>
</nav>

</header>

) }
export default Header;