const Footer = () => {
    return (
      <footer className="bg-slate-800 text-white pt-8 pb-4 px-4">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
          {/* Contact Us Section */}
          <div>
            <h2 className="font-bold text-xl mb-4">CONTACT US</h2>
            <address className="not-italic mb-4">
              <p className="mb-2">Education Foundation</p>
              <p>123 Education Lane</p>
              <p>Knowledge City, Karnataka, India – 574227</p>
            </address>
            <p className="mb-2">Phone: 08258-123456-123456 (7 lines)</p>
            <p>Email: info@educationfoundation.org</p>
          </div>
  
          {/* About Section */}
          <div>
            <h2 className="font-bold text-xl mb-4">ABOUT US</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-red-500 transition-all">About the Education Foundation</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-all">Affiliation and Legal Recognitions</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-all">Culture</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-all">Education</a>
              </li>
              <li>
                <a href="#" className="hover:text-black-3 transition-all">Literature</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-all">Placements</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-all">Social Welfare</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-all">Sports</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-all">Student Welfare</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-all">Terms and Conditions</a>
              </li>
            </ul>
          </div>
  
          {/* Courses Offered Section */}
          <div>
            <h2 className="font-bold text-xl mb-4">COURSES OFFERED</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-red-500 transition-all">College of Hospital Administration</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-all">Degree College</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-all">Institute of Engineering & Technology</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-all">Pre-University College</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-all">College of Medical Laboratory Technology</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-all">College of Nursing</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-all">College of Naturopathy & Yogic Sciences</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-all">College of Physical Education</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-all">College of Physiotherapy & Research Center</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-all">Master of Business Administration</a>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="border-t border-n-4 mt-8 pt-4 text-center">
          <p className="text-sm">© 2024 Education Foundation. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  