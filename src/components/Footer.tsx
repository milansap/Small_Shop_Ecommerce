const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Our Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                            <li><a href="#" className="hover:text-gray-300">Careers</a></li>
                            <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
                        </ul>
                    </div>
                    
                    {/* Customer Service */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Customer Service</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                            <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
                            <li><a href="#" className="hover:text-gray-300">Returns & Refunds</a></li>
                            <li><a href="#" className="hover:text-gray-300">Shipping Info</a></li>
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
                        <a href="#" className="hover:text-blue-400"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="hover:text-blue-400"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="hover:text-blue-400"><i className="fab fa-linkedin"></i></a>
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