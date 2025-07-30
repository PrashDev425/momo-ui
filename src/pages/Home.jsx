import { MdArrowBack, MdArrowForward, MdArrowRightAlt, MdPlayArrow } from "react-icons/md";
import { Link, Navigate, NavLink } from "react-router-dom";
import logo from '../assets/momo.svg';
import paintbg from "../assets/paint.svg"
import momoplate from "../assets/momo-plate.png"
import ellipse from "../assets/ellipse.svg"
import happyCustomer from "../assets/happy-customer.jpg"
import happyCustomer2 from "../assets/happy-customer-2.png"
import chef from "../assets/chef.jpg";
import service1 from "../assets/service-1.svg";
import service2 from "../assets/service-2.svg";
import service3 from "../assets/service-3.svg";
import { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaMapPin, FaTwitter, FaYoutube } from "react-icons/fa6";
import { BiPhone } from "react-icons/bi";
import { FaClock, FaInstagram } from "react-icons/fa";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const getProduct = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();
    console.log(response.recipes);
    setProduct(response.recipes)
    const filter = response.recipes.filter(x => {
      return x.cuisine == "Italian";
    });
    setFilterProduct(filter);
  }
  const Filter = (category) => {
    console.log(category);
    const newfilter = product.filter((item) => {
      return item.cusine == category
    });
    console.log(newfilter);
    setFilterProduct(newfilter)
  }
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      {/* box 1 */}
      <div className="flex justify-between items-center overflow-hidden">
        <div className="max-w-lg p-10">
          <p>RESTAURANT</p>
          <h1 className="text-2xl font-bold">
            The{" "}
            <span
              style={{ backgroundImage: `url(${paintbg})` }}
              className="bg-no-repeat bg-[length:80px] text-center text-white bg-center inline-block w-20"
            >
              #one
            </span>
          </h1>
          <h1 className="text-2xl font-bold">
            Momo<span className="text-[#D95103]">Restaurant</span>
          </h1>
          <p className="font-bold">
            More than <span className="text-[#D95103]">20+ Varieties</span> of momo
            available for you
          </p>
          <NavLink
            to="/menu"
            className="bg-[#0C6967] w-48 flex justify-center items-center text-white gap-1 py-2 rounded-3xl mt-4"
          >
            Explore Food Menu <MdArrowRightAlt />
          </NavLink>
        </div>
        <div className="flex justify-end overflow-hidden">
          <img className="relative -top-6" width={300} src={ellipse} alt="" />
          <img className="absolute top-45 right-25" width={300} src={momoplate} alt="" />
        </div>
      </div>

      {/* box 2 */}
      <div className="p-4 w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">

        {/* Left: Full image */}
        <div className="flex justify-center">
          <img
            src={happyCustomer} // Replace with your full image
            alt="Happy Customer"
            className="w-full max-w-md object-contain"
          />
        </div>
        {/* Right: Text content */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-start justify-end h-full text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Customers <span className="text-orange-600">Love Us</span>
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Sed diam dolor
              vivamus nibh fermentum vulputate tortor. Egestas facilisi luctus
              turpis arcu dignissim. Amet neque enim etiam purus id. Tortor
              sit orci blandit cursus turpis.
            </p>
            <NavLink
              to="/menu"
              className="bg-[#0C6967] w-48 flex justify-center items-center text-white gap-1 py-2 rounded-3xl mt-4"
            >
              Explore Food Menu <MdArrowRightAlt />
            </NavLink>
          </div>
        </div>

      </div>
      {/* box 3 */}
      <div className="gap-y-3 p-5 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl">
            Our <span className="text-[#D95103]">Most Popoular</span> Recipies
          </h1>
          <p>
            Brouse through a verieties of recipies with fresh ingredients selected only from the best places
          </p>
        </div>
        <div className="space-x-2">
          <button onClick={() => Filter("Italian")} className="border rounded-2xl p-1 w-20">Buff</button>
          <button onClick={() => Filter("American")} className="border rounded-2xl p-1 w-20">Chicken</button>
          <button onClick={() => Filter("Pakistani")} className="border rounded-2xl p-1 w-20">Veg</button>
        </div>
        <div>
          {
            filterProduct.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-5 p-5">
                {filterProduct.map((item) => (
                  <div onClick={()=>Navigate(`/product-description/${item.id}`)} key={item.id} className="w-48 flex flex-col items-center">
                    <img src={item.image} width={"100px"} alt="" />
                    <h2>{item.name}</h2>
                    <p>Rs {Math.floor(Math.random() * (1000 - 100 + 1)) + 100}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 p-5">Product not found</div>
            )
          }

        </div>
        <div>
          <NavLink to="/menu" className="bg-[#0C6967] w-49 flex justify-center text-white gap-1 items-center py-2 rounded-3xl">Explore More Menu <MdArrowRightAlt /></NavLink>
        </div>
      </div>
      <div className="bg-white">
        {/* Header text */}
        <div className="text-center py-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            <span className="text-orange-600 font-bold">We Offer People</span>{' '}
            <span className="font-bold">The Service They Want</span>
          </h2>
        </div>

        {/* Background Image section */}
        <div className="relative">
          <img
            src={chef} // Replace with your actual image
            alt="Chef in kitchen"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
            <h3 className="text-3xl md:text-4xl font-bold mb-3">
              Process behind the making
            </h3>
            <p className="text-lg mb-6">
              See how only chefs cooks only the best momos
            </p>
            <button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-full flex items-center gap-2 transition">
              <MdPlayArrow className="text-xl" />
              Watch the Video
            </button>
          </div>
        </div>

        {/* Services section */}
        <div className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl text-center px-6 py-8 shadow-md">
              <img
                src={service1}
                alt="Quality Food"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h4 className="text-lg font-bold mb-2">Quality Food</h4>
              <p className="text-sm text-gray-600">
                Only the best food with top quality products and ingredients
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl text-center px-6 py-8 shadow-md">
              <img
                src={service2}
                alt="Private Party"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h4 className="text-lg font-bold mb-2">Private Party</h4>
              <p className="text-sm text-gray-600">
                Get the best food for all your private parties and gatherings
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl text-center px-6 py-8 shadow-md">
              <img
                src={service3}
                alt="Catering"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h4 className="text-lg font-bold mb-2">Catering</h4>
              <p className="text-sm text-gray-600">
                Get the best food for any occasions and gatherings
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-10">
            <button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-full flex items-center gap-2 justify-center mx-auto">
              Explore Our Services
              <MdArrowForward />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-16 py-12 bg-white">
        {/* Left Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            <span className="text-gray-800">200+</span>{' '}
            <span className="text-orange-600">Happy Customers</span>
          </h2>
          <p className="text-teal-700 font-semibold mt-2">
            What our customers say about us
          </p>

          <blockquote className="mt-6 text-gray-700 italic">
            “Only the best momo you can find in the market. Different Varieties of momo to choose from. Will be visiting again soon”
          </blockquote>

          <p className="mt-4 font-bold text-gray-900">Livia Dias</p>

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-center md:justify-start mt-6">
            <button className="w-10 h-10 rounded-full border flex items-center justify-center text-gray-700 hover:bg-gray-100">

              <MdArrowBack className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full border flex items-center justify-center text-gray-700 hover:bg-gray-100">
              <MdArrowForward className="w-4 h-4" />          </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src={happyCustomer2}
            alt="Livia Dias"
            className="rounded-xl object-cover w-full max-w-md mx-auto md:mx-0"
          />
        </div>
      </div>
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Get <span className="text-orange-600">In Touch</span>
            </h1>
            <p className="text-teal-600 text-lg font-medium">Our Friendly team would love to hear from you</p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left Side - Contact Info */}
            <div className="bg-teal-600 text-white p-8 rounded-2xl">
              {/* Address Section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <FaMapPin className="w-5 h-5" />
                  <h3 className="text-lg font-semibold">Our Address</h3>
                </div>
                <p className="text-teal-100 italic">New Baneshwor, Kathmandu, Bagmati, Nepal</p>
              </div>

              {/* Contacts Section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <BiPhone className="w-5 h-5" />
                  <h3 className="text-lg font-semibold">Our Contacts</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-teal-100 text-sm mb-1">Mobile</p>
                    <p className="font-medium">980 5689789</p>
                    <p className="font-medium">9841 275897</p>
                  </div>
                  <div>
                    <p className="text-teal-100 text-sm mb-1">Landline</p>
                    <p className="font-medium">01-4783972</p>
                  </div>
                </div>
              </div>

              {/* Service Time Section */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <FaClock className="w-5 h-5" />
                  <h3 className="text-lg font-semibold">Our Service Time</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-teal-100 text-sm mb-1">MON - FRI</p>
                    <p className="font-medium italic">10 am - 8 pm</p>
                  </div>
                  <div>
                    <p className="text-teal-100 text-sm mb-1">SAT - SUN</p>
                    <p className="font-medium italic">Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <p className="text-teal-100 italic mb-4">Get in touch in social networks</p>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <FaFacebook className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <FaInstagram className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-5 h-5 bg-white rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 bg-white p-8 rounded-2xl shadow-lg max-w-xl w-full">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="John"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="you@example.com"
                />
              </div>

              {/* Service Dropdown (Optional) */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  What can we do for you?
                </label>
                <select
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Select a service
                  </option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Support</option>
                  <option value="sales">Sales</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>

              {/* Phone Number */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <div className="flex">
                  <div className="flex items-center gap-2 px-4 py-2 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 text-sm">
                    <div className="w-4 h-3 bg-red-600 rounded-sm"></div>
                    +977
                  </div>
                  <input
                    type="tel"
                    className="border border-gray-300 rounded-r-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
                    placeholder="98XXXXXXXX"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Write your message here..."
                />
              </div>

              {/* Submit Button */}
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition duration-300">
                Send Message
              </button>
            </div>

          </div>
        </div>
      </div>
      <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg">
        <iframe
          title="Sipalaya Info Tech Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28268.31907889481!2d85.34541598386839!3d27.669703880985942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190536c1caa7%3A0xf92fcf603dac3960!2sSipalaya%20Info%20Tech%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1753069971472!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <footer className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Logo and description */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4 gap-2">
                <img className="w-8" src={logo} alt="Momos Logo" /> 
                <span className="text-2xl font-bold text-teal-600">momos</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Elit sem tempor egestas molestie. Volutpat quis egestas porttitor
                turpis sit in. Lorem nunc nullam morbi urna amet suspendisse nullam ac vivamus.
              </p>
            </div>

            {/* momos links */}
            <div>
              <h3 className="text-lg font-semibold text-teal-600 mb-4">momos</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-700 hover:text-teal-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-teal-600 transition-colors">
                    Our Menu
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-teal-600 transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-teal-600 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legals links */}
            <div>
              <h3 className="text-lg font-semibold text-teal-600 mb-4">Legals</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-700 hover:text-teal-600 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-teal-600 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-teal-600 transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social media */}
            <div>
              <h3 className="text-lg font-semibold text-teal-600 mb-4">Follow Us</h3>
              <div className="grid grid-cols-3 gap-3 max-w-[180px]">
                <Link
                  href="#"
                  className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                >
                  <FaFacebook className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                >
                  <FaLinkedin className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                >
                  <FaTwitter className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                >
                  <FaYoutube className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                >
                  <FaInstagram className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                >
                  <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-800">T</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-center text-gray-500 text-sm">
              Copyright ©2023 Everest Momo Pvt Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home;