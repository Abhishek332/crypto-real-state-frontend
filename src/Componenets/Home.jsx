import React from "react";
import "./Home.css";
import Contectus from "./Contact_us/Contectus";
import How_it_works from "./Middle/How_it_works";
function Home() {
  const cardInfo = [
 {
    "img":"https://as1.ftcdn.net/v2/jpg/02/10/17/26/1000_F_210172606_04K3sGd9NqyMiH6rZfmxjUkDCChrHxy7.jpg",
    "text":[
    "Written in solidity",
    "Audited by  Deloitte",
    "Tested by Quick Hilles"
    ]
   },
 {
    "img":"https://thumbs.dreamstime.com/b/illustration-vector-ethereum-logo-long-shadow-illustration-vector-ethereum-logo-long-shadow-cryptocurrency-113135110.jpg",
    "text":[
    "Security of Ethereum",
    "Validate buy proof of stack",
    "No tempering issue"
    ]
   },
  {
    "img":"https://logopeople.in/blog/wp-content/uploads/2013/01/government-of-india.jpg",
    "text":[
    "Opreated by GOVT OF INDIA",
    "Deparetement of Real state GOI",
    "Total Listed Property 1M"
    ]
   }
  ]
  return (
    <div>
      <header className="header center">
        <div className="header-text">
          <h1 className="heading">Around the India</h1>
          <p className="header-paragraph">
            "crypto state - “Where Dreams Come Home & become secure”
          </p>
        </div>
        <div className="logo">
          <h1>
            <span>
              <img
                className="ts"
                src="https://cdn.xxl.thumbs.canstockphoto.com/houses-group-logo-vector-eps-vector_csp13095548.jpg"
                alt=""
              />
            </span>
            <span className="center">s</span>
            <span className="center">t</span>
            <span className="center">a</span>
            <span className="center">t</span>
            <span className="center">e</span>
          </h1>
        </div>
      </header>
      <section className="popular-tours">
      <h1 className="popular-tours-heading">The Process of Verificatoin</h1>
      <div className="cards-wrapper">
        {
          cardInfo.map(data=>
            <How_it_works data={data} />
            )
        }
      
      </div>
 
      </section>
   
   <Contectus/>
    </div>
  );
}

export default Home;
