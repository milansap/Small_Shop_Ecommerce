import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Small Shop</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
                            <li><Link to="/careers" className="hover:text-gray-300">Careers</Link></li>
                            <li><Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-gray-300">Terms of Service</Link></li>
                        </ul>
                    </div>
                    
                    {/* Customer Service */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Customer Service</h3>
                        <ul className="space-y-2">
                            <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
                            <li><Link to="/faq" className="hover:text-gray-300">FAQ</Link></li>
                            <li><Link to="/returns" className="hover:text-gray-300">Returns & Refunds</Link></li>
                            <li><Link to="/shipping" className="hover:text-gray-300">Shipping Info</Link></li>
                        </ul>
                    </div>
                    
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p className="mb-2">Email: info@example.com</p>
                        <p className="mb-2">Phone: +1 (123) 456-7890</p>
                        <p>Address: 123 Commerce St, City, Country</p>
                    </div>
                    
                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                        <p className="mb-4">Subscribe to our newsletter for the latest products and offers.</p>
                        <div className="flex">
                            <input 
                                type="email" 
                                placeholder="Your email" 
                                className="px-4 py-2 w-full text-gray-900 rounded-l focus:outline-none"
                            />
                            <button className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700 transition duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Social Media & Copyright */}
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-4 mb-4 md:mb-0"> 
                  
                        <Link to="#" className="hover:text-blue-400"><FontAwesomeIcon icon={faFacebook} /></Link>
                        <Link to="#" className="hover:text-blue-400"><FontAwesomeIcon icon={faTwitter} /></Link>
                        <Link to="#" className="hover:text-blue-400"><FontAwesomeIcon icon={faInstagram} /></Link>
                        <Link to="#" className="hover:text-blue-400"><FontAwesomeIcon icon={faLinkedin} /></Link>
                    </div>
                    <div className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Made by Milan. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer