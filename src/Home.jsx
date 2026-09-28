import { Link } from 'react-router-dom'

const Home = ()=> {
  return (
    <div className="home">
      <h1>Welcome to React World</h1>

      <p>
        Learn about React, a JavaScript library used
        to build interactive user interfaces.
      </p>

      <Link to="/concepts" className="btn">
        Explore React
      </Link>
    </div>
  )
}

export default Home