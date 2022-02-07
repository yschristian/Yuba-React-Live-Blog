const Navbar = () => {
    return (  
      <nav className="navbar">
          <h1>The Live Blog</h1>
          <div className="links">
              <a className="a"  href="/">Home</a>
              <a className="cre" href="/create" style={{
                  backgroundColor:'#f1356d',
                  borderRadius:'8px'
              }}>New Blog</a>
          </div>
      </nav>
    );
}
export default Navbar;