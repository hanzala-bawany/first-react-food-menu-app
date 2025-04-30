// import img from "../assets/shafe_imf-removebg-preview.png"
// import img from "../assets/shafe_imge_2-removebg-preview.png"
import img from "../assets/shafe 3 removebg.png"
import "./afterHeader.css"

export const AfterHeader = () => {

    return (
        <div id="main">

            <div className="foodIntroContainer">
                <div className="firstLine">Deliever More.<span style={{color : "#fbca2b"}}> Earn More.</span></div>
                <div className="secondLine">Grow More.</div>
                <p style={{color : "#fbca2b"}}>Join our fast-growing food delivery network and start your journey with us.</p>
                <div className="fourthLine">
                    <h1>Bawany Foods</h1>
                    <button>Contact Us</button>
                </div>
            </div>

            {/* <div className="myImageContainer"> */}
                {/* <div className="myImageParent"> */}
                    <img className="myImage" src={img} alt="" />
                {/* </div> */}
            {/* </div> */}

        </div>

    )
}