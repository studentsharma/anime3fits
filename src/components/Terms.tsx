import Footer from './Footer';
import Header from './Header';

const TermsOfService = () => {
  return (
    <>
    <Header />
    <div id="main" className="bg-black text-white">

      <div id="backgroundcentre" className="p-6 bg-black text-white">
        <div id="refund-centre" className="max-w-4xl mx-auto bg-black text-white p-6 rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-2">Terms Of Service</h1>
          <p className="text-sm text-gray-600 mb-4">Last Updated: 10/02/2025</p>

          <p className="mb-4">
            Welcome to Anim3Fits! These Terms of Service ("Terms") govern your access and use of our website,
            products, and services. By purchasing from or using www.anim3fits.com (the "Site"), you agree to
            these Terms. If you do not agree, please do not use our services.
          </p>

          {/* 1. General Information */}
          <h2 className="text-xl font-semibold mt-6 mb-2">1. General Information</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Business Name: Anim3Fits</li>
            <li>Email: anim3fits@gmail.com</li>
            <li>Phone: +91 9354862299</li>
            <li>Instagram DM: @anim3fits</li>
            <li>Address: RZ-14A Sitapuri Street No 3, Near Dabri Mor Metro Station</li>
          </ul>

          {/* 2. Products & Print-on-Demand Model */}
          <h2 className="text-xl font-semibold mt-6 mb-2">2. Products & Print-on-Demand Model</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Custom & Pre-Made Products: We sell print-on-demand and anime-themed apparel.</li>
            <li>No Ready Stock: We do not keep excess inventory.</li>
            <li>Design & Artwork: All anime-inspired designs are original or legally inspired.</li>
          </ul>

          {/* 3. Order Process & Customization */}
          <h2 className="text-xl font-semibold mt-6 mb-2">3. Order Process & Customization</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Custom Orders: Processed within 3 days.</li>
            <li>Pre-Made Orders: Processed within 48 hours.</li>
            <li>Order Confirmation: Email/message sent after order.</li>
          </ul>

          {/* 4. Pricing & Payments */}
          <h2 className="text-xl font-semibold mt-6 mb-2">4. Pricing & Payments</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Prices: In INR including taxes.</li>
            <li>Payment Methods: UPI, credit/debit cards, etc.</li>
            <li>Secure Transactions: Secure gateways used; no card data stored.</li>
          </ul>

          {/* 5. Shipping & Delivery */}
          <h2 className="text-xl font-semibold mt-6 mb-2">5. Shipping & Delivery</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Shipping Partner: SpeedPost</li>
            <li>Shipping Time:
              <ul className="list-disc pl-6">
                <li>Custom Orders: Dispatched in 3 days.</li>
                <li>Pre-Made Orders: Dispatched in 48 hours.</li>
                <li>Delivery: 5–10 business days.</li>
              </ul>
            </li>
            <li>Tracking: Provided upon dispatch.</li>
          </ul>
          <p className="mb-4">For more details, refer to our <a href="#" className="text-blue-600 underline">Shipping Policy</a>.</p>

          {/* 6. Returns, Refunds & Cancellations */}
          <h2 className="text-xl font-semibold mt-6 mb-2">6. Returns, Refunds & Cancellations</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>No Returns or Exchanges unless defective.</li>
            <li>Cancellations: Only within 6 hours of purchase.</li>
            <li>Defective/Incorrect: Report within 48 hours with images.</li>
            <li>Refunds: Processed in 7–10 business days.</li>
          </ul>
          <p className="mb-4">See our <a href="#" className="text-blue-600 underline">Refund & Return Policy</a>.</p>

          {/* 7. Intellectual Property */}
          <h2 className="text-xl font-semibold mt-6 mb-2">7. Intellectual Property & Copyright</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Design Ownership: Original or properly licensed content only.</li>
            <li>No reproduction of copyrighted characters.</li>
            <li>Custom Designs: You must own rights to submitted designs.</li>
          </ul>

          {/* 8. User Responsibilities */}
          <h2 className="text-xl font-semibold mt-6 mb-2">8. User Responsibilities & Restrictions</h2>
          <p className="mb-2">By using our site, you agree not to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Use our services illegally.</li>
            <li>Upload copyrighted or offensive content.</li>
            <li>Hack or disrupt the site.</li>
          </ul>

          {/* 9. Limitation of Liability */}
          <h2 className="text-xl font-semibold mt-6 mb-2">9. Limitation of Liability</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>We are not liable for delays or disasters.</li>
            <li>Sizing issues due to wrong info are your responsibility.</li>
            <li>We are not responsible for any damage beyond purchase price.</li>
          </ul>

          {/* 10. Privacy Policy */}
          <h2 className="text-xl font-semibold mt-6 mb-2">10. Privacy Policy</h2>
          <p className="mb-4">We handle your data according to our <a href="#" className="text-blue-600 underline">Privacy Policy</a>.</p>

          {/* 11. Changes to Terms */}
          <h2 className="text-xl font-semibold mt-6 mb-2">11. Changes to These Terms</h2>
          <p>We may update these Terms from time to time. Your continued use implies acceptance of any changes.</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default TermsOfService;
