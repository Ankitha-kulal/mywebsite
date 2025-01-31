import { Button } from 'react-bootstrap';
import thumbnail from '../assets/newthumb.jpeg';
import rakuten from '../assets/Rakuten.png';
import disney from '../assets/disnep.jpeg';
import monday from '../assets/Monday.com.png';
import dropbox from '../assets/dropbox.png';
import ncr from '../assets/ncr.png';
import { motion } from 'framer-motion';
import './heroSection.css';
import { Card, CardContent } from '@mui/material'; // Importing Material-UI components for Card

function HeroSection() {
  return (
   <div>
    <div className="flex flex-col md:flex-row items-center justify-between w-full h-screen px-10 md:px-20 text-center md:text-left">
    <div className="flex items-center justify-between w-full h-screen px-20 bg-white">
      {/* Left Side */}
      <div className="text-5xl font-bold leading-tight text-black">
        <h1>Plan.</h1>
        <h1>Manage.</h1>
        <h1>Build.</h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4 text-black">
        <span className="text-xl">/</span>
        <div className="text-sm">
          <h>Our Difference Is In</h>
          <p>The Finishing</p>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-full flex items-center">
          Work →
        </button>
      </div>
</div>
</div>
      <br />

      <motion.div
  className="image-container mt-10 flex justify-center px-6 md:px-16"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <img
    src={thumbnail}
    alt="abstract design"
    className="responsive-image"
  />
</motion.div>



      <br />

      {/* Company Logos Section */}
      <div className="company-container">
        <img src={rakuten} alt="Rakuten" className="company-logo" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={monday} alt="Monday.com" className="company-logo" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={disney} alt="Disney" className="company-logo" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={dropbox} alt="Dropbox" className="company-logo" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={ncr} alt="NCR" className="company-logo" />
      </div>

      <br />

      {/* Card Section */}
      <Card className="mt-10 p-6 max-w-3xl mx-auto">
        <CardContent>
          <h1>
            <p className="text-xl text-center">
              To enhance the growth of your<br/> website, it's essential to expedite <br/>the release of new pages.
            </p>
          </h1>
          <b className="mt-6 text-center font-semibold">Daniel, Design Lead @Google</b>
        </CardContent>
      </Card>

      <br />

      {/* Embedded Testimonial Section */}
     
  {/* Avatars Section (Responsive, Single Line) */}
  <div style={{ 
  display: "flex", 
  alignItems: "center", 
  justifyContent: "center", 
  flexWrap: "wrap", 
  gap: "20px", 
  textAlign: "center", 
  padding: "20px" 
}}>
  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
    <div style={{ width: "45px", height: "45px", borderRadius: "50%", backgroundColor: "#f8a5c2" }}></div>
    <div style={{ width: "45px", height: "45px", borderRadius: "50%", backgroundColor: "#786fa6" }}></div>
    <div style={{ width: "45px", height: "45px", borderRadius: "50%", backgroundColor: "#63cdda" }}></div>
    <div style={{ width: "45px", height: "45px", borderRadius: "50%", backgroundColor: "#f19066" }}></div>
  </div>
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "400px" }}>
    <p style={{ margin: 0, fontSize: "16px" }}>
      We Received A Great Amount Of Work In Just 2 Weeks Timeline!
    </p>
    <strong style={{ fontSize: "14px" }}>Daniel, Design Lead @ Google</strong>
  </div>
</div>



    </div>
  );
}

export default HeroSection