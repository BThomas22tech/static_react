
import reactLogo from './assets/react.svg'
import './App.css'


function NavBar() {
  return (
    <div className = "nav">
    <div className ="pic">
    <img src ={reactLogo}/>
    <h1 className="title">ReactFacts</h1>
    </div>
    <p className="p_nav"> React Course - Project 1</p>
    </div>
  )
}



export default NavBar
