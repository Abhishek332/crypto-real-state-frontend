import React from 'react'
import './Contectus.css'
function Contectus() {
    return (
        <body>
        <div className='contract-us'>
    
          <section class="contact">
            <h1 class="contact-heading">Contact Us</h1>
            <form class="contact-form center">
              <div class="input-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  class="contact-input"
                  placeholder="Enter Your Name"
                />
              </div>
              <div class="input-groups">
                <div class="input-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    class="contact-input"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div class="input-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    class="contact-input"
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>
              <div class="input-group">
                <label>Message</label>
                <textarea
                  class="form-textarea"
                  placeholder="Your Message Here..."
                ></textarea>
              </div>
              <input type="submit" value="Submit" class="form-btn" />
            </form>
          </section>
          {/* <!-- End of Contact --> */}
    
          {/* <!-- Footer --> */}
         
          {/* <!-- End of Footer --> */}
        </div>
        <script src="script.js"></script>
      </body>
    )
}

export default Contectus
