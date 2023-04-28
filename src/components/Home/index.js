import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="home-container">
          <div className="home-content">
            <h1 className="home-heading">WE TAKE CARE BECAUSE WE CARE</h1>
            <p className="home-description">
              We Provide Medical Services That You Can Trust!
            </p>
            <div>
              <Link to="/doctors">
                <button type="button" className="shop-now-button">
                  Make an Appointment
                </button>
              </Link>

              <Link to="/profile">
                <button type="button" className="shop-now-button profile">
                  Go To <br />
                  Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Home
