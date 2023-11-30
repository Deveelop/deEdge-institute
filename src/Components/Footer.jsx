import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
const Footer = () => {
    return (
      <footer className=' row row-md-3 bg-dark text-white'>
        <hr className="mt-5 mb-4" />
        
        
      <div className=" container-fluid">
        <div className=''>
      <img src="/company_logo.png" alt="company logo" width="50" height="50"/>
            <p>
            ...Empowering Digital Entrepreneurship
            </p>
            </div>
      </div>

      <div className="container-fluid row ">
        <div className="text-white font-weight-bold">
          <h1 className="text-white font-weight-bold h2"> Quick Links </h1>
            <div className="pl-3 my-2">
              <p> About us </p>
              <p> Services </p>
              <p> Portfolio </p>
              <p> Pricing </p>
              <p> Contact </p>
            </div>
        </div>
      
      </div>

      <div className="d-flex justify-content-md-center mx-4 col-lg-3 col-md-1 mb-2 mt-4 md-mt-0 gap-4">
          <a href="http://" target="_blank" rel="noopener noreferrer"> <BsLinkedin size={25} /> </a>
          <a href="http://" target="_blank" rel="noopener noreferrer"> <BsInstagram size={25} /> </a>
          <a href="http://" target="_blank" rel="noopener noreferrer"> <BsTwitter size={25} /> </a>
      </div>

      <div className="w-full col-span-3 mt-6">
        <hr className="border-gray-700 mb-6" />
        <p className="text-center text-gray-500">
          &copy; {new Date().getFullYear()} dEDGE. All rights reserved.
        </p>
      </div>
      </footer>
    );
  };
  
  export default Footer;

 