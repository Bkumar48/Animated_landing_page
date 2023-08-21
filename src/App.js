import './App.scss';
import { FaBehance } from 'react-icons/fa'
import { IoMailOutline, IoChevronForwardCircle, IoStar } from 'react-icons/io5'
import { IconContext } from 'react-icons'
import Card from './components/Card';

function App() {
  return (
    <>
      <header>
        <div className="logo_wrapper">demo<span>Page</span></div>
        <div className="menu_container">
          <span>
            <IconContext.Provider value={{ color: "#000", size: "18px", className: "icons_container" }}>
              <div className="icons">
                <FaBehance />
              </div>
            </IconContext.Provider>
          </span>
          <span>
            <IconContext.Provider value={{ color: "#000", size: "18px" }}>
              <div className="icons">
                <IoMailOutline />
              </div>
              bittu@adaired.com
            </IconContext.Provider>
          </span>
          <span className='menu'>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </header>

      <div className="content_wrapper">
        <div className="left_content_wrapper">
          <h2>
            <span>Design focused</span>
            <span>startup, for startup.</span>
          </h2>
          <p>
            We are a team of talented designers and developers<br /> making websites and mobile apps for startups.
          </p>
          <div className="btn_group">
            <div className="btn btn_primary">Get Started
              <IconContext.Provider value={{ color: "#000", size: "25px" }}>
                <IoChevronForwardCircle />
              </IconContext.Provider></div>
            <div className="btn btn_secondary">Let's Talk</div>
          </div>
          <div className='review_container'>
            <p className="total_review">10K+ reviews</p>
            <IconContext.Provider value={{ color: "#fff", size: "18px" }}>
              <span><IoStar /></span>
              <span><IoStar /></span>
              <span><IoStar /></span>
              <span><IoStar /></span>
              <span><IoStar /></span>
            </IconContext.Provider>
            <p>More than 100+ startups taking services</p>
          </div>
        </div>
        <div className="right_content_wrapper">
          <img src={process.env.PUBLIC_URL + "/images/bg.png"} alt=""></img>
        </div>
      </div>

      <Card />
    </>
  );
}

export default App;
