import { Link }  from 'react-router-dom'
const Navbar = () => {
    return (  
      <nav className="navbar">
          <h1>The Live Blog</h1>
          <div className="links">
              <Link className="a"  to="/">Home</Link>
              <Link className="cre" to="/create" style={{
                  backgroundColor:'#f1356d',
                  borderRadius:'8px'
              }}>New Blog</Link>
          </div>
      </nav>
    );
}
export default Navbar;