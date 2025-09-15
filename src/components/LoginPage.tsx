import React, { useState } from 'react';
import { BookOpen, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '', general: '' });
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = { email: '', password: '', general: '' };
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setErrors({ email: '', password: '', general: '' });
    
    try {
      const { error } = await signIn(email, password);
      
      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          setErrors(prev => ({ ...prev, general: 'Invalid email or password' }));
        } else if (error.message.includes('email')) {
          setErrors(prev => ({ ...prev, email: error.message }));
        } else {
          setErrors(prev => ({ ...prev, general: error.message }));
        }
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      setErrors(prev => ({ ...prev, general: 'An unexpected error occurred' }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: 'email' | 'password', value: string) => {
    if (field === 'email') {
      setEmail(value);
      if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
    } else {
      setPassword(value);
      if (errors.password) setErrors(prev => ({ ...prev, password: '' }));
    }
    if (errors.general) setErrors(prev => ({ ...prev, general: '' }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md relative overflow-hidden">
        {/* Top gradient bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AmplifiED
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Welcome Back
          </h1>
          <p className="text-lg text-gray-600">
            Sign in to your AmplifiED account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {errors.general && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
              <p className="text-red-800 text-sm">{errors.general}</p>
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-4 py-3 border-2 rounded-xl bg-gray-50 transition-all duration-200 focus:outline-none focus:bg-white ${
                errors.email 
                  ? 'border-red-300 focus:border-red-500' 
                  : email && !errors.email 
                    ? 'border-green-300 focus:border-green-500'
                    : 'border-gray-200 focus:border-blue-500'
              }`}
              placeholder="Enter your email address"
              required
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className={`w-full px-4 py-3 pr-12 border-2 rounded-xl bg-gray-50 transition-all duration-200 focus:outline-none focus:bg-white ${
                  errors.password 
                    ? 'border-red-300 focus:border-red-500' 
                    : password && !errors.password 
                      ? 'border-green-300 focus:border-green-500'
                      : 'border-gray-200 focus:border-blue-500'
                }`}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold text-lg transition-all duration-200 relative overflow-hidden ${
              isLoading 
                ? 'opacity-80 cursor-not-allowed' 
                : 'hover:shadow-xl hover:-translate-y-1 active:translate-y-0'
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Signing In...
              </div>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        {/* Navigation Links */}
        <div className="text-center mt-6">
          <div className="flex items-center justify-center space-x-4 text-sm">
            <a 
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </a>
            <span className="text-gray-400">|</span>
            <a 
              href="/signup"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Create an account
            </a>
          </div>
        </div>

        {/* Forgot Password */}
        <div className="text-center mt-4">
          <button className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
            Forgot your password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;