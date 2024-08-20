import {Link} from 'react-router-dom';

const Navbar=()=>{
  return (    
              <div className='navBar'>
                  <div className='Home'>
                      <Link to="/">Home</Link>
                  </div>
                  <div className='Shop'>
                      <Link to="/Shop">Shop</Link>
              </div>
                  <div className='Cart'>
                      <Link to="/Cart">Cart</Link>
                  </div>
              </div>
  )

}

export default Navbar;