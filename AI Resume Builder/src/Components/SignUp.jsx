import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { LockClosedIcon, UserIcon, MailIcon, EyeIcon, EyeOffIcon } from '@heroicons/react/solid';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { name, email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const onSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://localhost:3000/api/v1/signup', formData);
      console.log(res.data);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      setError(err.response.data.msg || 'User already exists!');
      console.error(err.response.data);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }
  }, [navigate]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg">
        <div className='text-center'>
          <span className="font-black text-5xl text-blue-600">ResumeCraft</span>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign Up
          </h2>
        </div>
        {error && <p className='font-bold text-2xl text-red-500 text-center'>{error}</p>}
        <form onSubmit={onSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="flex items-center border-b border-gray-300 focus-within:border-blue-600">
              <UserIcon className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                autoComplete="name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border-0 focus:outline-none focus:ring-0 focus:border-indigo-500 sm:text-sm"
                placeholder="Full Name"
                onChange={onChange}
              />
            </div>
            <div className="flex items-center border-b border-gray-300 focus-within:border-blue-600 mt-4">
              <MailIcon className="h-5 w-5 text-gray-400" />
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border-0 focus:outline-none focus:ring-0 focus:border-indigo-500 sm:text-sm"
                placeholder="Email address"
                onChange={onChange}
              />
            </div>
            <div className="flex items-center border-b border-gray-300 focus-within:border-blue-600 mt-4 relative">
              <LockClosedIcon className="h-5 w-5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                value={password}
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border-0 focus:outline-none focus:ring-0 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
                onChange={onChange}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-0 pr-3 flex items-center text-gray-400 focus:outline-none"
              >
                {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className='text-center'>
          <p>Already having an account? <NavLink to="/login" className="text-blue-600 font-medium">Log In</NavLink></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;