import UserCard from "./components/UserCard"
import kashif from './assets/kashif.jpeg'
import ali from './assets/ali.jpeg'
import ilyas from './assets/ilyas.jpeg'
import ahmad from './assets/ahmad.jpeg'
import "./app.css"
function App() {

  return (
 <div className="container">
  <UserCard name="Sea View" desc="Belgium" image={kashif}/>
  <UserCard name="Amazing City" desc="Austria" image={ali}/>
  <UserCard name="Lake View" desc="Tronto" image={ilyas}/>
  {/* <UserCard name="Beautiful Building" desc="London" image={ahmad}/> */}
 
  
 
 </div>
  )
}

export default App
