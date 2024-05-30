import Person1 from './assets/components/ProopsComponent'
import './App.css'



function App() {
  let student = {
    name : "Ammad",
    age : 18,
    gender : "Male",
    skill : "programming",
    
  }
 
  return (
    <>
      <Person1 std= {student}/>
    </>
  )
}

export default App
