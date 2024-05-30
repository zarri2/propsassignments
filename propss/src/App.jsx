import Person1 from './assets/components/ProopsComponent'
import Person3 from './assets/components/Proops2components'
import ChildProp from './assets/components/childrenprop.component'
import Person2 from './assets/components/Proops3component'

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
      <Person2 
        name = {"Fawad khan"}
        age = {56}
      />
      <Person1 std= {student}/>
      
      
      
      <Person3/>
      <ChildProp>
        <p>Hello </p>
        <p>Hello </p>
        <p>Hello </p>
      </ChildProp>

    </>
  );
}

export default App;
