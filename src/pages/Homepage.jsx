
import '../styles/Homepage.css'
import Track from '../assets/icons/track progress.jpg'
import AI_Guidance from '../assets/icons/Ai guidance.jpg'
import cwm from '../assets/icons/connect with mentors.jpg'
import signup from '../assets/icons/signup.jpg'
import getinsights from '../assets/icons/get insights.jpg'
import improve from '../assets/icons/improve.jpg'


function HomePage(){
    return(
        <>
        <div className="container">
            <div className="intro">
            <h1>AI-Powered</h1>
            <h1 className='academi'>Academic Mentorship</h1>
            <h1>Platform</h1>

            <h5>Track Your Performance , get AI guidence , <br />
                and connect with expert mentors.
            </h5>
        </div>

        <div className="buttons">
            <button className="get">Get Started</button>
            <button className="learn">Learn More</button>
        </div>
        </div>


        <div className="main">
            <h1 className='title'>Empowering Your Academic Sucesss</h1>
            <div className="empowering">
            <div className="card">
                <img src={Track} alt="" />
                <h3>Track Progress</h3>
                <h5>View Your grades and CGPA trends</h5>
            </div>

            <div className="card">
                <img src={AI_Guidance} alt="" />
                <h3>AI_Guidance</h3>
                <h5>Personalized Study tips & Predictions</h5>
            </div>

            <div className="card">
                <img src={cwm} alt="" />
                <h3>Connect With Members</h3>
                <h5>Get Support From Experienced Mentors</h5>
            </div>

        </div>

        <h2>How It Works</h2>


        <div className="empowering">
            <div className="card">
                <img src={signup} alt="" />
                <h3>Sign Up & Login</h3>
                <h5>create your account and login</h5>
            </div>

            <div className="card">
                <img src={getinsights} alt="" />
                <h3>Get Insights</h3>
                <h5>Analyze your academic performance</h5>
            </div>

            <div className="card">
                <img src={improve} alt="" />
                <h3>Improve & Succeed</h3>
                <h5>follow ai tips and mentor advice</h5>
            </div>
        </div>
        </div>

        <div className="join">
            <h2>Ready to Boost Your Grades ?</h2>
            <h5>Join us today and achieve your academic goals!</h5>
            <button>Join Now</button>
        </div>
        
        
        </>
    )
}

export default HomePage;