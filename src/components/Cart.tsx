import React, { useState, useEffect } from 'react';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from "../features/user/userSlice"
import { RootState } from '../app/Store';

interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  selectedSize: string;
  availableSizes: string[];
  quantity: number | 1;
}

interface CartPageProps {
  initialItems?: CartItem[];
}

const Cart: React.FC<CartPageProps> = ({ initialItems = [] }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialItems);
  const Navigate = useNavigate()
  const email = useSelector((state: RootState) => state.user.email);
  // console.log(email)
  const dispatch = useDispatch()
  // const [isloggedIn, setisloggedIn] = useState<Boolean>(false);
  useEffect(() => {
    async function auth() {
      try {
        const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/user/home`, {
          withCredentials: true,
        });

        if (res.status === 200) {
          // setisloggedIn(true);
          // console.log(res.data)
          // console.log("DISPATCHING loginSuccess with:", {
          //   name: res.data.user,
          //   email: res.data.email
          // });

          dispatch(loginSuccess({ name: res.data.user, email: res.data.email }));
        } else {
          // setisloggedIn(false);
        }
      } catch (err) {
        
        // setisloggedIn(false);
      }
    }

    auth(); // CALL the function
  }, []);
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_SERVER_URL}/api/user/get_cart`,
          { email },
          { withCredentials: true }
        );
        // console.log(res.data.products)
        const mappedItems = (res.data.products || []).map((item: any, index: number) => ({
          id: item._id || index,
          name: item.product_name,
          price: item.price || 999,
          originalPrice: item.originalPrice || item.price || 1299,
          image: item.image,
          selectedSize: item.size || "M",
          availableSizes: ["S", "M", "L"],
          quantity: item.quantity || 1,
          // quantity: item.quantity !== undefined ? Number(item.quantity) : 1,
        }));
        setCartItems(mappedItems);

      } catch (error) {
        // console.error("Error fetching cart items:", error);
      }
    };

    getItems();
  }, []);

  const updateQuantity = (id: number, newQuantity: number, name: string) => {
    if (newQuantity === 0) {
      removeItem(id, name);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const updateSize = (id: number, newSize: string) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, selectedSize: newSize } : item
      )
    );
  };

  const removeItem = async (id: number, name: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
    await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/user/remove_cart`, { email, name }, { withCredentials: true })
    // console.log(res.data)
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 999 ? 0 : 99;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;

  const CartItemComponent: React.FC<{ item: CartItem }> = ({ item }) => (
    <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700 hover:border-gray-600 transition-all duration-200">
      {/* Mobile Layout */}
      <div className="flex flex-col sm:hidden space-y-4">
        {/* Mobile Header with Image and Remove Button */}
        <div className="flex items-start justify-between">
          <div className="flex space-x-3">
            <div className="w-20 h-20 bg-gray-700 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-white truncate mb-1">
                {item.name}
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-white">
                  ₹{item.price.toLocaleString()}
                </span>
                {item.originalPrice && item.originalPrice > item.price && (
                  <span className="text-gray-400 line-through text-sm">
                    ₹{item.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          </div>
          <button
            onClick={() => removeItem(item.id, item.name)}
            className="text-gray-400 hover:text-red-400 p-1 hover:bg-gray-700 rounded-lg transition-all duration-200"
          >
            <Trash2 size={18} />
          </button>
        </div>

        {/* Mobile Size Selection */}
        <div>
          <label className="text-gray-400 text-sm block mb-2">Size:</label>
          <div className="flex gap-2">
            {item.availableSizes.map((size) => (
              <button
                key={size}
                onClick={() => updateSize(item.id, size)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${item.selectedSize === size
                  ? 'bg-blue-600 text-white border-2 border-blue-500'
                  : 'bg-gray-700 text-gray-300 border-2 border-gray-600 hover:border-gray-500'
                  }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Quantity Controls */}
        <div className="flex justify-center">
          <div className="flex items-center bg-gray-700 rounded-xl border border-gray-600">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1, item.name)}
              className="p-3 hover:bg-gray-600 rounded-l-xl transition-colors duration-200"
            >
              <Minus size={16} className="text-gray-300" />
            </button>
            <span className="px-6 py-3 text-white font-medium min-w-16 text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1, item.name)}
              className="p-3 hover:bg-gray-600 rounded-r-xl transition-colors duration-200"
            >
              <Plus size={16} className="text-gray-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:flex gap-4">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 bg-gray-700 rounded-xl overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-semibold text-white truncate pr-4">
                {item.name}
              </h3>
            </div>
            <button
              onClick={() => removeItem(item.id, item.name)}
              className="text-gray-400 hover:text-red-400 p-1 hover:bg-gray-700 rounded-lg transition-all duration-200"
            >
              <Trash2 size={18} />
            </button>
          </div>

          {/* Size Selection */}
          <div className="mb-3">
            <label className="text-gray-400 text-sm block mb-2">Size:</label>
            <div className="flex gap-2">
              {item.availableSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => updateSize(item.id, size)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${item.selectedSize === size
                    ? 'bg-blue-600 text-white border-2 border-blue-500'
                    : 'bg-gray-700 text-gray-300 border-2 border-gray-600 hover:border-gray-500'
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Price and Quantity */}
          <div className="flex justify-between items-end">
            <div className="flex items-center space-x-3">
              <span className="text-xl font-bold text-white">
                ₹{item.price.toLocaleString()}
              </span>
              {item.originalPrice && item.originalPrice > item.price && (
                <span className="text-gray-400 line-through text-sm">
                  ₹{item.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center bg-gray-700 rounded-xl border border-gray-600">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1, item.name)}
                className="p-2 hover:bg-gray-600 rounded-l-xl transition-colors duration-200"
              >
                <Minus size={16} className="text-gray-300" />
              </button>
              <span className="px-4 py-2 text-white font-medium min-w-12 text-center">
                {item.quantity}
              </span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1, item.name)}
                className="p-2 hover:bg-gray-600 rounded-r-xl transition-colors duration-200"
              >
                <Plus size={16} className="text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button onClick={() => Navigate("/")} className="p-2 hover:bg-gray-800 rounded-xl transition-colors duration-200">
              {/* <ArrowLeft size={20} sm:size={24} className="text-gray-300" /> */}
                <ArrowLeft className="text-gray-300 w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Shopping Cart</h1>
              <p className="text-gray-400 text-sm sm:text-base">
                {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
              </p>
            </div>
          </div>
          <ShoppingBag size={28} className="text-blue-500 sm:w-8 sm:h-8" />
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="text-center py-12 sm:py-16">
            <div className="bg-gray-800 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <ShoppingBag size={32} className="text-gray-600 sm:w-10 sm:h-10" />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Your cart is empty</h2>
            <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Add some items to get started</p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold transition-colors duration-200"
              onClick={() => Navigate("/")}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-3 sm:space-y-4">
              {cartItems.map((item) => (
                <CartItemComponent key={item.id} item={item} />
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1 order-first lg:order-last">
              <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700 lg:sticky lg:top-8">
                <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Order Summary</h2>

                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-400">Subtotal ({cartItems.length} items)</span>
                    <span className="text-white font-medium">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-400">Shipping</span>
                    <span className="text-white font-medium">
                      {shipping === 0 ? 'Free' : `₹${shipping}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-400">Tax (18%)</span>
                    <span className="text-white font-medium">₹{tax.toLocaleString()}</span>
                  </div>
                  {shipping === 0 && (
                    <div className="text-green-400 text-xs sm:text-sm bg-green-900/20 p-2 rounded-lg">
                      🎉 You get free shipping!
                    </div>
                  )}
                  {subtotal < 999 && (
                    <div className="text-blue-400 text-xs sm:text-sm bg-blue-900/20 p-2 rounded-lg">
                      Add ₹{(1000 - subtotal).toLocaleString()} more for free shipping
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-700 pt-3 sm:pt-4 mb-4 sm:mb-6">
                  <div className="flex justify-between text-lg sm:text-xl font-semibold">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base">
                    Proceed to Checkout
                  </button>
                  <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2.5 sm:py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base">
                    <Heart size={16} className="sm:w-5 sm:h-5" />
                    <span>Save for Later</span>
                  </button>
                </div>

                {/* Payment Icons */}
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-700">
                  <p className="text-gray-400 text-xs sm:text-sm text-center mb-2 sm:mb-3">Secure payment with</p>
                  <div className="flex justify-center space-x-3 sm:space-x-4 text-gray-500">
                    <div className="bg-gray-700 px-2 sm:px-3 py-1 rounded text-xs font-medium">VISA</div>
                    <div className="bg-gray-700 px-2 sm:px-3 py-1 rounded text-xs font-medium">UPI</div>
                    <div className="bg-gray-700 px-2 sm:px-3 py-1 rounded text-xs font-medium">PayPal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;