// //## 1. Criação e Instalação
// //npm create vite@latest .
 
// //npm i react-router-dom
 
 
// //### 2. http://main.jsx
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom';
 
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// )
 
 
// //### 3. http://App.jsx
// import { Route, Routes } from 'react-router-dom'
// import './App.css'
// import Header from './Componentes/Header'
// import Footer from './Componentes/Footer'
// import Home from './Pages/Home'
// import About from './Pages/About'
// import EX1 from './Pages/EX1'
 
// function App() {
//   return (
//     <>
//       <Header/>
//       <Routes>
//         <Route path="/" element={<Home />}/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/ex1" element={<EX1/>}/>
//       </Routes>
//       <Footer/>
//     </>
//   )
// }
 
// export default App
 
 
// ### 4. Pages/Home.jsx
// import { Link } from 'react-router-dom'
// import './style.css'
 
// function Home (){
//   return(
//     <>
//       <h2>bem vindo ao meu sistema</h2>
//       <Link to="/about">
//         <button>navegar para exercicios = about</button>
//       </Link>
//     </>
//   )
// }
// export default Home
 
 
// ### 5. Pages/About.jsx
// import { Link } from 'react-router-dom'
// import './style.css'
 
// function About (){
//   return (
//     <>
//       <h2>tela about</h2>
//       <Link to="/">
//         <button>voltar para tela inicial /home</button>
//       </Link>
//       <Link to="/ex1">
//         <button>ir para exercicio 1</button>
//       </Link>
//     </>
//   )
// }
// export default About
 
// Corrigi: troquei to="/Ex1" por to="/ex1" pra bater com a rota do http://App.jsx.
 
// ### 6. Pages/EX1.jsx
// import './style.css'
// import { useState } from 'react'
// import { Link } from 'react-router-dom'
 
// function EX1() {
//   const [numero1, setNumero1] = useState("")
//   const [numero2, setNumero2] = useState("")
//   const [resultado, setResultado] = useState()
 
//   function handleSubmit(event){
//     event.preventDefault()
//     console.log()
//     setResultado(Number(numero1) + Number(numero2))
//   }
 
//   return(
//     <>
//       <h1>atividade1</h1>
//       <form onSubmit={handleSubmit}>
//         <label>Digite outro numero:</label>
//         <input
//           type="text"
//           value={numero1}
//           onChange={(event)=> setNumero1(event.target.value)}
//         />
 
//         <label>Digite um outro numero:</label>
//         <input
//           type="number"
//           value={numero2}
//           onChange={(event)=> setNumero2(event.target.value)}
//         />
 
//         <label>somar os dois numeros</label>
//         <button type="submit">somar</button>
//       </form>
//       <p>{resultado}</p>
//     </>
//   )
// }
// ´´´