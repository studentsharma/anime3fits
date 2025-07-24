// RefundPolicy.tsx
// import { Instagram, Youtube, Twitter, Phone } from "lucide-react";
import Footer from './Footer';
import Header from './Header';

const RefundPolicy: React.FC = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-black text-white font-sans">

      {/* Content */}
      <div className="px-4 md:px-20 py-12 space-y-6 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Refund Policy</h1>

        <p>
          At Anim3Fits, we deeply value our customers and strive to provide high-quality, uniquely designed apparel that you’ll love. While all our products are non-returnable due to the custom nature of our printing process, we are committed to ensuring you have the best shopping experience with us.
        </p>

        <h2 className="text-xl font-semibold">Received a Damaged Product? We’ve Got You Covered!</h2>
        <p>
          Every order undergoes strict quality checks and careful packaging before shipping. In the rare instance that your product arrives damaged or incorrect, please reach out to us within 48 hours of delivery. Our team will ensure a smooth resolution in your favor.
        </p>

        <h2 className="text-xl font-semibold">How to Get in Touch?</h2>
        <p>If you receive a damaged or incorrect item, please contact us through any of the following channels:</p>
        <ul className="list-disc pl-6">
          <li>Email: <a href="mailto:anim3fits@gmail.com" className="text-indigo-400">anim3fits@gmail.com</a></li>
          <li>WhatsApp: <a href="https://wa.me/919354862299" className="text-indigo-400">+91 9354862299</a></li>
          <li>Instagram DM: <a href="https://instagram.com/anim3fits" className="text-indigo-400">@anim3fits</a></li>
        </ul>

        <h2 className="text-xl font-semibold">To help us process your request quickly, please provide the following details:</h2>
        <ol className="list-decimal pl-6">
          <li>Your order number</li>
          <li>Clear photos of the damaged or incorrect item</li>
          <li>An unboxing video (if available, as it helps speed up the resolution process)</li>
        </ol>

        <h2 className="text-xl font-semibold">Resolution Options</h2>
        <p>
          Once we review your request, we will gladly offer either a free replacement or store credit, depending on your preference. Our goal is to ensure you are completely satisfied with your purchase, as every member of the Anim3Fits community is important to us.
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default RefundPolicy;
