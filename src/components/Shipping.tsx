import React from 'react';
import { Truck, Clock, MapPin, Package, Phone, Mail, Instagram, Youtube, Twitter } from 'lucide-react';
import Footer from './Footer';
import Header from './Header';

const ShippingPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
        <Header />

      {/* Main Content */}
      <div className="flex justify-center p-4 md:p-8">
        <div className="max-w-4xl w-full  bg-black rounded-lg p-6 md:p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Truck className="h-12 w-12 text-blue-400" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 pb-4 border-b-2 border-gray-700">
              Shipping Policy
            </h1>
            <p className="text-gray-400 text-sm">Last Updated: 10/02/2025</p>
          </div>
          
          <p className="text-gray-300 mb-8 leading-relaxed text-center">
            Welcome to Anim3Fits! We strive to provide a smooth and reliable shipping experience for all our customers. Please review our shipping policy to understand how we process and deliver orders across India.
          </p>

          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Package className="h-6 w-6 text-blue-400 mr-3" />
              <h2 className="text-xl md:text-2xl font-semibold">
                1. Shipping Partners
              </h2>
            </div>
            <p className="text-gray-300 pl-9">
              We use SpeedPost, a trusted and well-known shipping service, to ensure secure and timely delivery of your orders anywhere in India.
            </p>
          </section>

          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-green-400 mr-3" />
              <h2 className="text-xl md:text-2xl font-semibold">
                2. Order Processing Time
              </h2>
            </div>
            <div className="pl-9">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">•</span>
                  <span><strong className="text-white">Custom Orders:</strong> Dispatched within 3 days of order confirmation.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">•</span>
                  <span><strong className="text-white">Pre-Made Orders:</strong> Dispatched within 48 hours of order confirmation.</span>
                </li>
              </ul>
              <p className="text-gray-400 italic mt-4">
                Note: Order processing time does not include transit time.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-red-400 mr-3" />
              <h2 className="text-xl md:text-2xl font-semibold">
                3. Estimated Delivery Time
              </h2>
            </div>
            <div className="pl-9">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">•</span>
                  Delivery time varies based on the shipping location. Typically, orders are delivered within 5-10 business days after dispatch.
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">•</span>
                  Remote areas may experience slightly longer delivery times.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Package className="h-6 w-6 text-yellow-400 mr-3" />
              <h2 className="text-xl md:text-2xl font-semibold">
                4. Shipping Charges
              </h2>
            </div>
            <div className="pl-9">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  Shipping charges (if applicable) will be displayed at checkout.
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  Any promotional free shipping offers will be mentioned on the website.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Truck className="h-6 w-6 text-purple-400 mr-3" />
              <h2 className="text-xl md:text-2xl font-semibold">
                5. Order Tracking
              </h2>
            </div>
            <p className="text-gray-300 pl-9">
              Once your order is dispatched, we will provide you with a tracking number via email, SMS, or Instagram DM (if applicable). You can track your package through the SpeedPost website.
            </p>
          </section>

          <section className="mb-8">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-indigo-400 mr-3" />
              <h2 className="text-xl md:text-2xl font-semibold">
                6. Shipping Address & Changes
              </h2>
            </div>
            <div className="pl-9">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-3 mt-1">•</span>
                  Please ensure that your shipping address is correct before placing an order.
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-3 mt-1">•</span>
                  Address changes are only possible before the order is dispatched. Contact us at{' '}
                  <span className="text-blue-400">anim3fits@gmail.com</span> or{' '}
                  <span className="text-blue-400">+91 9354862299</span> as soon as possible if you need to update your address.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-orange-400 mr-3" />
              <h2 className="text-xl md:text-2xl font-semibold">
                7. Delays & Issues
              </h2>
            </div>
            <div className="pl-9">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1">•</span>
                  While we ensure timely dispatch, unforeseen delays due to weather, logistics, or external factors may occur. We appreciate your patience in such cases.
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1">•</span>
                  If your order is delayed beyond the estimated timeframe, please reach out to us for assistance.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Package className="h-6 w-6 text-red-500 mr-3" />
              <h2 className="text-xl md:text-2xl font-semibold">
                8. Lost or Damaged Packages
              </h2>
            </div>
            <div className="pl-9">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  If your package is lost or arrives damaged, please contact us immediately with your order details and tracking number.
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  We will work with the shipping provider to resolve the issue.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Phone className="h-6 w-6 text-green-500 mr-3" />
              <h2 className="text-xl md:text-2xl font-semibold">
                9. Contact Us
              </h2>
            </div>
            <div className="pl-9">
              <p className="text-gray-300 mb-4">For any shipping-related queries, feel free to reach out to us:</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-400 mr-3" />
                  Email: <span className="text-blue-400 ml-2">anim3fits@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-green-400 mr-3" />
                  Phone: <span className="text-blue-400 ml-2">+91 9354862299</span>
                </li>
                <li className="flex items-center">
                  <Instagram className="h-5 w-5 text-pink-400 mr-3" />
                  Instagram DM: <span className="text-blue-400 ml-2">@anim3fits</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-red-400 mr-3 mt-1" />
                  <span>Address: RZ-14A Sitapuri Street No 3, Near Dabri Mor Metro Station</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>

    <Footer />
    </div>
  );
};

export default ShippingPolicy;