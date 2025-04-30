import "./footer.css"

export const Footer = () => {
  return (
    <div id="footer">
     
      <div id="firstColumn">
        <div className="ownerName">
          <h1>Bawany Foods</h1>
          <h2>A Project By Hanzala Bawany</h2>
        </div>
        <div className="email">
          <div>Email :</div>
          <div>hbawanyfoods@gmail.com</div>
        </div>
        <div className="extraInfo">
          Copyrights @ 2025 By <br /> BawanyFoods
        </div>
      </div>

      <div id="secondColumn">
        <h1>UseFul Links For Jobs</h1>
        <p>Register You As A Rider</p>
        <p>Register You As A Shef</p>
        <p>Department Manager</p>
        <p>It Handler</p>
      </div>

      <div id="thirdColumn">
        <h1>Your Next</h1>
        <p>About</p>
        <p>Contact Us</p>
        <p>Registration</p>
        <p>Payment Method</p>
      </div>

    </div>
  )
}

