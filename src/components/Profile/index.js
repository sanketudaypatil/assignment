import {Component} from 'react'
import './index.css'

class Profile extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="container">
          <div className="user-image">
            <img
              src="https://i.ibb.co/ykBvXB5/pexels-cottonbro-studio-3171128.jpg"
              alt="profile"
            />
          </div>
          <div className="content">
            <p className="name"> Sunita Sharma</p>
            <p className="username">Sangli, Maharashtra</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Profile
