import { Link } from "react-router-dom";
const NotFound  =()=>{
  return(
      <div  className="NotFound">
          <h2>Sorry</h2>
          <p>page can not found</p>
          <Link to="/"> Back to the HomePage..</Link>
      </div>

  )
}
export default NotFound;