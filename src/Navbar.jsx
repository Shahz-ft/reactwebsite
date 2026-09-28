import { Link } from 'react-router-dom'

const Navbar = ()=> {
  return (
    <nav>
      <h2>React World</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/concepts">Concepts</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/advantages">Advantages</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar