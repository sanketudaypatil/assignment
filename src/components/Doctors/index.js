import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import './index.css'

class Doctors extends Component {
  render() {
    return (
      <>
        <div className="doctor-container">
          <div className="doctor-content">
            <div className="search-input-doctor-list-container">
              <div className="search-input-container-desktop">
                <input type="search" className="search-input-desktop" />
                <button
                  type="button"
                  className="search-button-container-desktop"
                >
                  <BsSearch className="search-icon-desktop" />
                </button>
              </div>

              <div className="healthy-food-section">
                <div className="container">
                  <div className="row">
                    <div className="">
                      <div className="text-center">
                        <img
                          src="https://i.ibb.co/VY7Rm58/pexels-ketut-subiyanto-4307688.jpg"
                          alt="rec"
                          className="healthy-food-section-img"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-7 details">
                      <h1 className="healthy-food-section-heading">
                        Priyanka Sharma
                        <br />
                        RECEPTIONIST
                      </h1>

                      <Link to="/thanks">
                        <button
                          type="button"
                          className="custom-button"
                          onClick={this.appointmentFix}
                        >
                          Get Appointment
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="healthy-food-section">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-5">
                      <div className="text-center">
                        <img
                          src="https://i.ibb.co/4TC2xb2/pexels-tima-miroshnichenko-5452293.jpg"
                          alt="rec"
                          className="healthy-food-section-img"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-7 details">
                      <h1 className="healthy-food-section-heading">
                        Sanket Patil <br /> ORTHOPEDIC
                      </h1>
                      <Link to="/thanks">
                        <button
                          type="button"
                          className="custom-button"
                          onClick={this.appointmentFix}
                        >
                          Get Appointment
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="healthy-food-section">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-5">
                      <div className="text-center">
                        <img
                          src="https://i.ibb.co/tb5gPQf/pexels-antoni-shkraba-6749778.jpg"
                          alt="rec"
                          className="healthy-food-section-img"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-7 details">
                      <h1 className="healthy-food-section-heading">
                        Shweta Ligade <br />
                        GYNECOLOGIST
                      </h1>
                      <Link to="/thanks">
                        <button
                          type="button"
                          className="custom-button"
                          onClick={this.appointmentFix}
                        >
                          Get Appointment
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="healthy-food-section">
                <div className="container">
                  <div className="row">
                    <div className="">
                      <div className="text-center">
                        <img
                          src="https://i.ibb.co/W5LfCVB/pexels-antoni-shkraba-5215024.jpg"
                          alt="rec"
                          className="healthy-food-section-img"
                        />
                      </div>
                    </div>
                    <div className=" details">
                      <h1 className="healthy-food-section-heading">
                        Priyanka Patil <br /> NEUROLOGISTS
                      </h1>
                      <Link to="/thanks">
                        <button
                          type="button"
                          className="custom-button"
                          onClick={this.appointmentFix}
                        >
                          Get Appointment
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Doctors
