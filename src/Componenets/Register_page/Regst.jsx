import React from 'react'
import '../Contact_us/Contectus'
function Regst() {
    return (
          <section class="contact">
            <h1 class="contact-heading">Crypto Satate</h1>
            <form class="contact-form center">
              <div class="input-group">
                <label> City*</label>
                <input
                  type="text"
                  class="contact-input"
                  placeholder="Enter Your City NAME"
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

    )
}

export default Regst
