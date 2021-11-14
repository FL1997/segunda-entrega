import react, { useState } from "react"

class Libro{

    constructor (id, titulo, descripcion,categoria , precio, stock, seccion) {
         this.id = id
         this.titulo=titulo
         this.descripcion=descripcion
         this.categoria=categoria
         this.precio=precio
         this.stock=stock
         this.seccion=seccion
         
    }
}




export default Libro