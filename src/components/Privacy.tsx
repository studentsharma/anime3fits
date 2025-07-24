import React from 'react';
import Footer from './Footer';
import Header from './Header';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-black text-white">

      {/* Main Content */}
      <div className="flex justify-center p-4 md:p-8">
        <div className="max-w-4xl w-full bg-blackrounded-lg p-6 md:p-8 shadow-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 pb-4 border-b-2 border-gray-700">
            Privacy Policy
          </h1>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            Welcome to Anim3Fits! This Privacy Policy explains how Anim3Fits ("we," "us," or "our") collects, uses, and protects your personal information when you visit our website or engage with our services. By accessing or using our website, you agree to the terms of this Privacy Policy.
          </p>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 border-l-4 border-gray-600 pl-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-300 mb-4">
              We collect personal information from you when you interact with our website, make a purchase, or contact us. This includes:
            </p>
            
            <div className="mb-4">
              <h3 className="font-bold text-white mb-2">Personal Information You Provide:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  Name
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  Email Address
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  Phone Number
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  Shipping and billing addresses
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  Payment information (processed securely via third-party payment gateways)
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  Any other details you provide when contacting us (e.g., Instagram DM messages)
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-white mb-2">Automatically Collected Information:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  IP address
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  Browser type and device information
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  Usage data (e.g., pages visited, time spent on the site)
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  Cookies and tracking technologies
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-white mb-2">Third-Party Information:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  Payment processors
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  Shipping partners
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 border-l-4 border-gray-600 pl-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-300 mb-4">We use your personal information to:</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-gray-600 mr-3">•</span>
                Process and fulfill orders
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-3">•</span>
                Communicate with you regarding your purchases, support inquiries, or promotions
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-3">•</span>
                Improve our website and services
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-3">•</span>
                Detect and prevent fraud or security risks
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-3">•</span>
                Comply with legal obligations
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 border-l-4 border-gray-600 pl-4">
              3. How We Share Your Information
            </h2>
            <p className="text-gray-300 mb-4">We do not sell or rent your personal data. However, we may share your information with:</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-gray-600 mr-3">•</span>
                Service providers (e.g., payment processors, shipping companies)
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-3">•</span>
                Marketing and advertising partners (for promotional campaigns, with your consent)
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-3">•</span>
                Legal authorities (if required by law or for fraud prevention)
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 border-l-4 border-gray-600 pl-4">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-300">
              We use cookies to enhance your experience. You can manage your cookie preferences through your browser settings. Disabling cookies may affect website functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 border-l-4 border-gray-600 pl-4">
              5. Data Security and Retention
            </h2>
            <p className="text-gray-300">
              We implement security measures to protect your personal data. However, no method of transmission is 100% secure. We retain your data only as long as necessary for the purposes outlined in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 border-l-4 border-gray-600 pl-4">
              6. Your Rights
            </h2>
            <p className="text-gray-300 mb-4">Depending on your location, you may have rights to:</p>
            <ul className="space-y-2 text-gray-300 mb-4">
              <li className="flex items-start">
                <span className="text-gray-600 mr-3">•</span>
                Access, update, or delete your personal data
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-3">•</span>
                Withdraw consent for marketing communications
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-3">•</span>
                Request a copy of your data
              </li>
            </ul>
            <p className="text-gray-300">
              To exercise these rights, contact us at <span className="text-blue-400">anim3fits@gmail.com</span>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 border-l-4 border-gray-600 pl-4">
              7. Third-Party Links
            </h2>
            <p className="text-gray-300">
              Our website may contain links to third-party sites (e.g., payment gateways, Instagram). We are not responsible for their privacy practices. Please review their policies separately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 border-l-4 border-gray-600 pl-4">
              8. Children's Privacy
            </h2>
            <p className="text-gray-300">
              Our services are not intended for children under 13. We do not knowingly collect personal information from minors.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 border-l-4 border-gray-600 pl-4">
              9. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised "Last Updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 border-l-4 border-gray-600 pl-4">
              10. Contact Us
            </h2>
            <p className="text-gray-300 mb-4">For any questions or concerns regarding this Privacy Policy, please contact us at:</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-gray-600 mr-3">•</span>
                Email: <span className="text-blue-400">anim3fits@gmail.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-3">•</span>
                Phone: <span className="text-blue-400">+91 9354862299</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-3">•</span>
                Instagram DM: <span className="text-blue-400">@anim3fits</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-3">•</span>
                Address: RZ-14A Sitapuri Street No 3, Near Dabri Mor Metro Station
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default PrivacyPolicy;