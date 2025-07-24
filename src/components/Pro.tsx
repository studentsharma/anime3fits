import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../app/Store';
import { X, ShoppingCart, Zap, Heart } from 'lucide-react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
  onClose: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClose }) => {
  // toast.success("Toast works!");
  const Navigate = useNavigate();
  const discountPercent = Math.round(((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100);
  const user = useSelector((state: RootState) => state.user.email);


  const handleAddCart = async () => {
    
    console.log("inside handleaddcart")
    if (!user) {
      toast.error("Please login first."); 
      Navigate("/login")
      return;
    }



    try {
      const already_present = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/user/already_cart`,
        {
          id : product.id,
          email: user,
        },
        {
          withCredentials: true,
        })

        if( already_present.data.message == "YES" ){
          toast.success("already in cart");
          return ;
        }

      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/user/add_cart`,
        {
          id : product.id,
          name: product.name,
          url: product.imageUrl,
          discount : product.discountedPrice,
          size: "S",
          quantity: 1,
          email: user,
        },
        {
          withCredentials: true,
        }
      );

      toast.success("Added to cart!");
      console.log("Add successful", res.data);
    } catch (error) {
      toast.error("Something went wrong while adding to cart.");
    }
  };


  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-in fade-in duration-300">
      <div className="bg-gray-900 rounded-3xl shadow-2xl w-full max-w-md mx-4 relative overflow-hidden transform animate-in slide-in-from-bottom-8 duration-500 border border-gray-700">
        {/* Close Button */}
        <button
          className="absolute right-4 top-4 z-10 bg-gray-800/90 hover:bg-gray-700 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-105 border border-gray-600"
          onClick={onClose}
        >
          <X size={20} className="text-gray-300" />
        </button>

        {/* Discount Badge */}
        {discountPercent > 0 && (
          <div className="absolute left-4 top-4 z-10 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            -{discountPercent}%
          </div>
        )}

        {/* Product Image */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-850 p-8 flex justify-center items-center min-h-64">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="max-h-48 w-auto object-contain transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Product Name */}
          <h2 className="text-2xl font-bold text-white text-center leading-tight">
            {product.name}
          </h2>

          {/* Price Section */}
          <div className="flex items-center justify-center space-x-3">
            <span className="text-3xl font-bold text-white">
              ₹{product.originalPrice-product.discountedPrice}
            </span>
            {product.originalPrice !== product.discountedPrice && (
              <span className="text-lg text-gray-400 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Savings Text */}
          {discountPercent > 0 && (
            <p className="text-center text-green-600 font-medium">
              You save ₹{(product.discountedPrice).toLocaleString()}!
            </p>
          )}

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
              <Zap size={20} />
              <span>Buy Now</span>
            </button>

            <div className="grid grid-cols-2 gap-3">
              <button onClick={handleAddCart} className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-medium py-3 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 border border-gray-600">
                <ShoppingCart size={18} />
                <span>Add to Cart</span>
              </button>

              <button className="bg-gray-800 hover:bg-red-900 text-red-400 font-medium py-3 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 border border-gray-600 hover:border-red-500">
                <Heart size={18} />
                <span>Wishlist</span>
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="pt-4 border-t border-gray-700">
            <div className="grid grid-cols-3 gap-4 text-center text-xs text-gray-400">
              <div className="space-y-1">
                <div className="w-8 h-8 bg-green-900/50 rounded-full flex items-center justify-center mx-auto border border-green-700">
                  <span className="text-green-400 font-bold">✓</span>
                </div>
                <span>Free Shipping</span>
              </div>
              <div className="space-y-1">
                <div className="w-8 h-8 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto border border-blue-700">
                  <span className="text-blue-400 font-bold">↻</span>
                </div>
                <span>Easy Returns</span>
              </div>
              <div className="space-y-1">
                <div className="w-8 h-8 bg-purple-900/50 rounded-full flex items-center justify-center mx-auto border border-purple-700">
                  <span className="text-purple-400 font-bold">⚡</span>
                </div>
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProductCard;