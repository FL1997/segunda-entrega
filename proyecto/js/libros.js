
class Libro{

          constructor (id, titulo, descripcion,categoria , precio, stock, seccion) {
               this.id = id
               this.titulo=titulo
               this.descripcion=descripcion
               this.categoria=categoria
               this.precio=precio
               this.stock=stock
               this.seccion=seccion
               seccion=['newBook','mostSelledBook','recommendedBook']
          }
        
          asInnerHTMLForBooks() {
          
               return (
               `<div  id="book-${this.id}" >
                                   <img  class="pad-style" src="./miniaturas/libro${this.id}.jpg" alt="">
                                   <br>
                                   <span class="titulo" >${this.titulo} </span>
                                   <br>
                                   <span class="Precio"  >$ ${this.precio}</span>
                              
                              </div>`
               )
          } 
          
         
          

          

     }    






