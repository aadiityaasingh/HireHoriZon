import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer class="bg-black text-white py-10">
  <div class="container mx-auto px-6 md:px-12 lg:px-20">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* <!-- Logo & About --> */}
      <div>
        <h2 class="text-2xl font-bold text-blue-500">HireHoriZon</h2>
        <p class="mt-2 text-gray-400">Your trusted platform to find the perfect job and career opportunities.</p>
      </div>
      
      {/* <!-- Quick Links --> */}
      <div>
        <h3 class="text-xl font-semibold text-blue-500">Quick Links</h3>
        <ul class="mt-2 space-y-2">
          <li><a href="#" class="text-gray-400 hover:text-blue-300">Home</a></li>
          <li><a href="#" class="text-gray-400 hover:text-blue-300">Jobs</a></li>
          <li><a href="#" class="text-gray-400 hover:text-blue-300">About Us</a></li>
          <li><a href="#" class="text-gray-400 hover:text-blue-300">Contact</a></li>
        </ul>
      </div>
{/*       
      <!-- Contact & Socials --> */}
      <div>
        <h3 class="text-xl font-semibold text-blue-500">Contact Us</h3>
        <p class="mt-2 text-gray-400">Email: support@hirehorizon.com</p>
        <p class="text-gray-400">Phone: +123 456 7890</p>
        <div class="flex space-x-4 mt-3">
          <a href="#" class="text-gray-400 hover:text-blue-400"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="text-gray-400 hover:text-blue-400"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-gray-400 hover:text-blue-400"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
    
    {/* <!-- Copyright --> */}
    <div class="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
      <p>&copy; 2025 Job Portal. All Rights Reserved.</p>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
