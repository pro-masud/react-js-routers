import { useState } from "react"
import Header from "../components/Header"

const About = () => {
  const [couter, setCouter] = useState(0);
  const [bgColor, setBgColor] = useState("red");
  const handleCouterDec = () => {
    setCouter((prevState) => prevState -1);
  }
  const handleCouterInc = () => {
    setCouter((prevState) => prevState + 1);
  }
  const handleCouterReset = () => {
    setCouter(0);
  }
  return (
    <>
        <Header />
        <h1>About Us</h1>
        <hr />
        <div className="container p-5" style={{backgroundColor: bgColor}}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h2 style={{fontSize: "80px", color:"red", fontWeight: "bold"}}>{couter}</h2>
                  <hr />
                  <button className="btn btn-danger mx-2" onClick={handleCouterDec}>--</button>
                  <button className="btn btn-info" onClick={handleCouterInc}>++</button>
                  <button className="btn btn-info mx-2" onClick={handleCouterReset}>Reset</button>
                  <hr />
                  <button onClick={() => setBgColor('red')}>Red</button>
                  <button onClick={() => setBgColor('green')}>Green</button>
                  <button onClick={() => setBgColor('skyblue')}>SkyBlue</button>
                  <button onClick={() => setBgColor('blue')}>Blue</button>
                  <button onClick={() => setBgColor('orange')}>Orange</button>
                  <button onClick={() => setBgColor('pink')}>Pink</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default About