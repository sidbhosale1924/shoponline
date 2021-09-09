import React from "react";

function Buy() {
  return (
    <>
      <section className="buyhere">
        <div className="form-container">
          <form action="">
            <label htmlFor="">
              Full Name :
              <input
                type="text"
                placeholder="Enter your full name.."
                required
              />
            </label>
            <label htmlFor="">
              Mobile no :
              <input
                type="number"
                placeholder="Enter your mobile no.."
                required
              />
            </label>
            <label htmlFor="">
              Email :
              <input type="email" placeholder="Enter your email.." required />
            </label>
            <div className="gender">
              <input type="radio" name="gender" value="mail" />
              Mail
              <input type="radio" name="gender" value="femail" />
              Femail
              <input type="radio" name="gender" value="other" />
              Other
            </div>
            <div className="date">
              <label htmlFor="">
                Date: <input type="date" className="dateinput" />
              </label>
              <label htmlFor="">
                Quantity: <input type="number" className="qty" />
              </label>
            </div>
            <label htmlFor="">
              Address :
              <input
                type=""
                placeholder="Enter your full address..."
                required
              />
            </label>
            <label htmlFor="">
              Pincode :
              <input type="number" placeholder="Enter your pin.." required />
            </label>
            <button type="submit" className="btn">
              Buy Now
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Buy;
