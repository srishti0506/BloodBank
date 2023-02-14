import React from 'react'
import  '../../assets/css/Contact.css'
import { Button } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import {AiFillFacebook, AiFillInstagram,AiFillLinkedin,AiFillGithub,AiFillTwitterCircle} from "react-icons/ai" 
import {BsPinterest} from "react-icons/bs" 
function Contact() {
  return (

    <div className="bg-info contact4 overflow-hiddedn position-relative mx-md animate__animated animate__fadeInLeftBig">

  <div className="row no-gutters ">
    <div className="container">
      <div className="col-lg-6 contact-box mb-4 mb-md-0">
        <div className="">
          <h1 className="title font-weight-light text-black mt-2 ">Contact Us</h1>
          <form className="mt-3">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group mt-2">
                  <input className="form-control text-white" type="text" placeholder="Name"/>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mt-2">
                  <input className="form-control text-white" type="email" placeholder="Email address"/>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mt-2">
                  <textarea className="form-control text-white" rows="3" placeholder="Message"></textarea>
                </div>
              </div>
              <div className="col-lg-12 d-flex align-items-center mt-2">
                <button type="submit" className="btn bg-white text-inverse px-3 py-2"><span> Submit</span></button>
                <span className="ml-auto text-white align-self-center"><i className="icon-phone mr-2"></i></span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="col-lg-6 right-image p-5 animate__animated animate__fadeInLeftBig">
    <iframe
						title="GMap"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1749715517158!2d76.6575891147718!3d30.51609110309301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1664951064118!5m2!1sen!2sin"
						className="rounded shadow-lg"
						width="100%"
						height="70%"
						allowFullScreen
					>

          </iframe>
    </div>
  </div>
  <div className=" handle-icon ">
            <Button variant="outline-light ">
              <AiFillLinkedin size={20}/>

            </Button>
            <Button variant="outline-light">
              <AiFillFacebook size={20}/>

            </Button>
            <Button variant="outline-light">
              <AiFillInstagram size={20}/>

            </Button>
            <Button variant="outline-light">
              <AiFillGithub size={20}/>

            </Button>
            <Button variant="outline-light">
              <AiFillTwitterCircle size={20}/>

            </Button>
            <Button variant="outline-light">
              <BsPinterest size={20}/>

            </Button>
            

            </div>

</div>
    
  //     <iframe
	// 					title="GMap"
	// 					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1749715517158!2d76.6575891147718!3d30.51609110309301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1664951064118!5m2!1sen!2sin"
	// 					className="rounded shadow-lg"
	// 					width="100%"
	// 					height="70%"
	// 					allowFullScreen
	// 				></iframe>
   
  );
}

export default Contact;
