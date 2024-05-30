import Person1 from './assets/components/ProopsComponent'
import Person3 from './assets/components/Proops2components'
import Person2 from './assets/components/Proops3component'
import './App.css'



function App() {
  let student = {
    name : "Ammad",
    age : 18,
    gender : "Male",
    skill : "programming",
    
  }
 
  let obj1 = {
    student1 : "Khan1",
    student2 : "Kamran",
    student3 : "Ammad"
    
  }

  return (
    <>
      <Person2 
        name = {"Fawad khan"}
        age = {56}
      />
      <Person1 std= {student}/>
      
      <Person3{...obj1}/>

    </>
  )
}

export default App
