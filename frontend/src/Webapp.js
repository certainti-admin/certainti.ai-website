import React,{useState} from "react";
import "./styles.css";
import { Footer } from "./Footer.jsx";

import { Navbar } from "./Navbar.jsx";
import { Header } from "./Header.jsx";
// import { Frame } from "./Login.jsx";

const Home = () => {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [contact, setContact] = useState("");
  const [company, setCompany] = useState("");
  const [error,setError] = useState(false);


  const addProduct = async() => {

    if(!email || !fname || !lname || !contact || !company)
    {
        setError(true);
        return false;
    }

      
    let result = await fetch('http://localhost:3007/formValues',{
        method: 'post',
        body: JSON.stringify({email,fname,lname,contact,company}),
        headers: {
            "Content-Type": "application/json"
        }
    });
    result = await result.json();
    console.log(result);
    
  }

  return (
    <>
      <Navbar />
      <section className="blog">
        <Header />
        </section>
      <div className="container">
        <div className="form-box">
          <div className="contact-with-us">
            <h1>Get call back within 5 min.</h1>
          </div>
          <div className="short-description">
            Tell us a little about yourself and we'll connect you with a
            Certainti expert who can share more about the product and answer any
            questions you have.
          </div>
          <form>
            <div className="input-group">
              <div className="input-field1">
                <label htmlFor="email">Work Email:</label>
                <input
                  type="email"
                  placeholder="Your Mail"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                 {error && !email && <span className='invalid-input'>Enter Valid Email</span>}
              </div>
              <div className="input-field2">
                <label htmlFor="firstname">First Name:</label>
                <input
                  type="text"
                  placeholder="Your First Name"
                  name="firstname"
                  id="firstname"
                  value={fname}
                  onChange={(e) => {
                    setFname(e.target.value);
                  }}
                  />
                  {error && !fname && <span className='invalid-input'>Enter Valid First Name</span>}
              </div>
              <div className="input-field3">
                <label htmlFor="lastname">Last Name:</label>
                <input
                  type="text"
                  placeholder="Your Last Name"
                  name="lastname"
                  id="lastname"
                  value={lname}
                  onChange={(e) => {
                    setLname(e.target.value);
                  }}
                />
                  {error && !lname && <span className='invalid-input'>Enter Valid Last Name</span>}
              </div>
              <div className="input-field4">
                <label htmlFor="contactnumber">Contact Number:</label>
                <input
                  type="number"
                  placeholder="Your Contact Number"
                  name="contactnumber"
                  id="contactnumber"
                  value={contact}
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                />
                  {error && !contact && <span className='invalid-input'>Enter Valid Contact</span>}
              </div>
              <div className="input-field5">
                <label htmlFor="company">Company:</label>
                <input
                  type="text"
                  placeholder="Company Name"
                  name="company"
                  id="company"
                  value={company}
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                />
                  {error && !company && <span className='invalid-input'>Enter Valid Company</span>}
              </div>
              <div className="input-field6">
             
            <button id='SignUpBtn'  className="callback" onClick={addProduct}>Request quick call back</button>

              </div>
            </div>
          </form>
          </div>
          <div class="chat"><h3>Give us a call</h3>
                <div class="short-description-chat">
                        Tell us a little about yourself and we'll connect you with a
                        Certainti expert who can share more about the product and
                        answer any questions you have.
                    </div>
                    <div class="contact-no">9876543210</div>
                </div>
                <div class="connect-email"><h3>Send us an email</h3>
                <div class="short-description-chat">
                        Tell us a little about yourself and we'll connect you with a
                        Certainti expert who can share more about the product and
                        answer any questions you have.
                    </div>
                    <div className="contact-email">info@certainti.com</div>
                </div>

      </div>
      <Footer />
    </>
  );
};

export default Home;