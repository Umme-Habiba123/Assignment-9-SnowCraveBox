import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-cyan-100 to-cyan-300 text-gray-800 pt-10 pb-5 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Branding */}
        <div>
          <h3 className="text-2xl font-bold text-cyan-700 mb-3">SnowCraveBox🐾</h3>
          <p className="text-sm">
            Cozy winter subscription boxes packed with toys, treats, and love for your cats & dogs.
          </p>
        </div>

     
        <div>
  <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
  <ul className="space-y-1 text-sm">
    <li><a href="#" className="hover:underline">Home</a></li>
    <li><a href="#" className="hover:underline">How It Works</a></li>
    <li><a href="#" className="hover:underline">Shop</a></li>
    <li><a href="#" className="hover:underline">FAQ</a></li>
    <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
    <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
  </ul>
</div>

     
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p className="text-sm">Email : habibaislammim@gmail.com</p>
          <p className="text-sm">Phone : 01873333****</p>
        </div>

    
        <div>
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4 text-xl text-cyan-700">
            <a target='_blank' href="https://www.facebook.com/mahiya.rahman.540132"><FaFacebookF className="hover:scale-110 duration-200" /></a>
            <a target='_blank' href="https://www.instagram.com/mahiya_mimu/"><FaInstagram className="hover:scale-110 duration-200" /></a>
            <a target='_blank' href="https://x.com/mahiya_rehman"><FaTwitter className="hover:scale-110 duration-200" /></a>
          </div>
        </div>
      </div>

    
      <div className="text-center mt-10 text-sm text-gray-600">
        © 2025 SnowCraveBox. Made with 🐶❤️🐱 in Winter FrostedDelights.
      </div>
    </footer>
  );
};

export default Footer;
