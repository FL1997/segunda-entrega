import { BrowserRouter as Router, Routes,Link,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main'
import Section from './components/Section'
import Footer from './components/Footer'
import BookSelected from './components/BookSelected';
import RenderBook from './components/Books/RenderBook';
import Book from "./components/Books/RenderBook"
import { useState } from 'react';
import {libro} from "./components/Books/RenderBook"
import Libro from './components/Main/Books';

function App() {
  return (
    <Router>
      <Header></Header>
      <Main></Main>

      <Routes >
        <Route exact path="/" element={<Page/>}>
        
    
     </Route>

     

      <Route path="/Home" element ={<BookSelected/>}> 
 
      </Route>

</Routes>
     
<Footer></Footer> 
     </Router>
  );
}


const Home = () =>{
  return <h2>Holaaaaa</h2>
}

export const Page =() => {
  return (<>
  
  
  <Section></Section>
  
  </>)
}


export default App;
