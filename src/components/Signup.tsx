import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, User, Mail, Phone, Lock, ArrowRight, Check, X, Sparkles } from 'lucide-react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginSuccess } from "../features/user/userSlice"
import Logo from "../assets/logo.png"

interface FormData {
  name: string;
  email: string;
  password: string;
  mobile: string
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  mobile?: string;
}

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    mobile: "",
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const dispatch = useDispatch();

  // const validateForm = (): boolean => {
  //   const newErrors: FormErrors = {};

  //   // Name validation
  //   if (!formData.name.trim()) {
  //     newErrors.name = 'Name is required';
  //   } else if (formData.name.trim().length < 2) {
  //     newErrors.name = 'Name must be at least 2 characters';
  //   }

  //   // Email validation
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!formData.email) {
  //     newErrors.email = 'Email is required';
  //   } else if (!emailRegex.test(formData.email)) {
  //     newErrors.email = 'Please enter a valid email';
  //   }

  //   // Password validation
  //   if (!formData.password) {
  //     newErrors.password = 'Password is required';
  //   } else if (formData.password.length < 8) {
  //     newErrors.password = 'Password must be at least 8 characters';
  //   }

  //   // Mobile validation
  //   if (!formData.mobile) {
  //     newErrors.mobile = 0;
  //   } else {
  //     const mobileStr = formData.mobile.toString();
  //     const mobileRegex = /^[6-9]\d{9}$/;
  //     if (!mobileRegex.test(mobileStr)) {
  //       newErrors.mobile = 0;
  //     }
  //   }

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  const calculatePasswordStrength = (password: string): number => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;
    return strength;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Handle mobile number as number type
    // if (name === 'mobile') {
    //   const numericValue = value.replace(/\D/g, ''); // Remove non-digits
    //   setFormData(prev => ({ 
    //     ...prev, 
    //     [name]: numericValue === '' ? '' : parseInt(numericValue) || ''
    //   }));
    // } else {
    //   setFormData(prev => ({ ...prev, [name]: value }));
    // }
    
      setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }

    // Calculate password strength
    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(value));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // if (!validateForm()) return;
    console.log("inside submit")
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      // await new Promise(resolve => setTimeout(resolve, 2000));
      const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/user/register_user`,{name:formData.name,
        mobile : Number(formData.mobile),
        email : formData.email,
        password : formData.password}, {withCredentials : true}) 
      // console.log('Form submitted:', formData);
      // console.log(res.data);
      dispatch(loginSuccess({name : formData.name, email : formData.email}));
      navigate("/");
      // Handle successful signup here
    } catch (error) {
      // console.error('Signup failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case 0:
      case 1: return 'bg-red-500';
      case 2:
      case 3: return 'bg-yellow-500';
      case 4:
      case 5: return 'bg-green-500';
      default: return 'bg-gray-300';
    }
  };

  const getPasswordStrengthText = () => {
    switch (passwordStrength) {
      case 0:
      case 1: return 'Weak';
      case 2:
      case 3: return 'Medium';
      case 4:
      case 5: return 'Strong';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
              {/* <Sparkles className="w-6 h-6 text-white" /> */}
              <img src={Logo} alt="" className="w-6 h-6" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Create Account</h1>
            <p className="text-gray-300 text-sm sm:text-base">Join us and wear your imagination</p>
          </div>

          <div className="space-y-5">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full pl-11 pr-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.name 
                      ? 'border-red-500 focus:ring-red-500/50' 
                      : 'border-white/20 focus:border-blue-500 focus:ring-blue-500/50'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <div className="flex items-center mt-1 text-red-400 text-xs">
                    <X className="w-3 h-3 mr-1" />
                    {errors.name}
                  </div>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-11 pr-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.email 
                      ? 'border-red-500 focus:ring-red-500/50' 
                      : 'border-white/20 focus:border-blue-500 focus:ring-blue-500/50'
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <div className="flex items-center mt-1 text-red-400 text-xs">
                    <X className="w-3 h-3 mr-1" />
                    {errors.email}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Field */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Mobile Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile.toString()}
                  onChange={handleInputChange}
                  className={`w-full pl-11 pr-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.mobile 
                      ? 'border-red-500 focus:ring-red-500/50' 
                      : 'border-white/20 focus:border-blue-500 focus:ring-blue-500/50'
                  }`}
                  placeholder="Enter your mobile number"
                  maxLength={10}
                />
                {errors.mobile && (
                  <div className="flex items-center mt-1 text-red-400 text-xs">
                    <X className="w-3 h-3 mr-1" />
                    {errors.mobile}
                  </div>
                )}
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full pl-11 pr-12 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.password 
                      ? 'border-red-500 focus:ring-red-500/50' 
                      : 'border-white/20 focus:border-blue-500 focus:ring-blue-500/50'
                  }`}
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Password Strength</span>
                    <span className={`font-medium ${passwordStrength >= 4 ? 'text-green-400' : passwordStrength >= 2 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {getPasswordStrengthText()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1">
                    <div 
                      className={`h-1 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                      style={{ width: `${(passwordStrength / 5) * 100}%` }}
                    />
                  </div>
                </div>
              )}
              
              {errors.password && (
                <div className="flex items-center mt-1 text-red-400 text-xs">
                  <X className="w-3 h-3 mr-1" />
                  {errors.password}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Creating Account...</span>
                </>
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <p className="text-gray-300 text-sm">
              Already have an account?{' '}
              {/* <a href="#" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                Sign in
              </a> */}
              <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors" onClick={()=>navigate("/login")}>Sign In</button>
            </p>
          </div>

          {/* Terms */}
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-xs">
              By creating an account, you agree to our{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300 underline">Terms</a>
              {' '}and{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300 underline">Privacy Policy</a>
            </p>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center space-x-4 text-gray-400 text-sm">
            <div className="flex items-center space-x-1">
              <Check className="w-4 h-4 text-green-400" />
              <span>Secure</span>
            </div>
            <div className="flex items-center space-x-1">
              <Check className="w-4 h-4 text-green-400" />
              <span>Fast Setup</span>
            </div>
            <div className="flex items-center space-x-1">
              <Check className="w-4 h-4 text-green-400" />
              <span>No Spam</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
