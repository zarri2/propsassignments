
import Person4 from "./ComponentNewfordot"
function Person3 (proops) {
    
// dot method
    return (
        <>
{/*         <h1>3rd Method</h1>
            <p>student1 : {student1}</p>
            <p>student2 : {student2}</p>
            <p>student3 : {student3}</p> */}
            <Person4 {...proops}/>
        
        </>
    )

}
export default Person3