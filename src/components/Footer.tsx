
import React from "react";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

const Footer = () => {
  // Define the correct phone number with international format
  const phoneNumber = "+254722920177";
  const emailAddress = "rose@salema.co.ke";

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Salema Supplies
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
              A premier branding and creative design company specializing in customized promotional materials, corporate branding, and digital design.
            </p>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${phoneNumber.replace(/\+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-white hover:bg-[#25D366] transition-colors"
              >
                <MessageSquare size={18} />
              </a>
              <a
                href={`https://tiktok.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.321 7.29294C17.847 7.21GDP(-0.296853, 17.4346) 16.4482 6.31315 16.4482 4.94197V4.87019C16.4498 4.26119 16.449 3.65302 16.4458 3.04494C15.2571 3.0411 14.0721 3.04494 12.8865 3.04494L12.8857 12.2294C12.8682 12.9038 12.6374 13.5532 12.2296 14.0851C11.8218 14.617 11.2586 15.0035 10.6217 15.1883C9.98479 15.3732 9.30908 15.3473 8.68964 15.1147C8.0702 14.882 7.53941 14.4545 7.17535 13.8935C6.81129 13.3325 6.63591 12.6692 6.6748 11.9999C6.71369 11.3307 6.96456 10.6923 7.39018 10.1754C7.8158 9.65855 8.39572 9.28948 9.04266 9.11609C9.6896 8.9427 10.3742 8.97381 11.0009 9.20494V7.42694C10.5297 7.2956 10.0391 7.23181 9.54791 7.23794C8.35726 7.19694 7.18221 7.51298 6.16577 8.14494C5.14933 8.77691 4.33775 9.69625 3.83158 10.7875C3.32541 11.8787 3.14775 13.093 3.32119 14.2805C3.49463 15.4681 4.01084 16.575 4.80591 17.4669C5.60098 18.3588 6.64087 19.0006 7.7997 19.3135C8.95853 19.6264 10.1877 19.5972 11.3317 19.2298C12.4756 18.8625 13.4845 18.1723 14.2358 17.2452C14.9871 16.3181 15.4495 15.1927 15.5667 14.0012C15.5834 13.7497 15.5918 13.4977 15.5917 13.2457L15.5985 8.94494C16.9148 9.89056 18.4871 10.4152 20.1229 10.4529V8.51894C19.8401 8.50472 19.5581 8.46591 19.2809 8.40294C19.2949 8.03294 19.3008 7.66294 19.3217 7.29294H19.321Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#get-started" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Branding Services</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Creative Design</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Stationery Services</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Logo Design</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Brand Identity</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-salema-blue mt-1" />
                <div>
                  <p className="text-gray-300">Phone</p>
                  <a href={`tel:${phoneNumber}`} className="text-white">{phoneNumber}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-salema-pink mt-1" />
                <div>
                  <p className="text-gray-300">Email</p>
                  <a href={`mailto:${emailAddress}`} className="text-white">{emailAddress}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-salema-orange mt-1" />
                <div>
                  <p className="text-gray-300">Address</p>
                  <p className="text-white">Nairobi, Kenya</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Salema Supplies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
