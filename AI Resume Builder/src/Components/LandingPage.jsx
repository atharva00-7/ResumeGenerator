import React, { useEffect, useState } from 'react';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  CloudUploadIcon,
  DocumentTextIcon,
  EyeIcon,
  PencilIcon,
  ShareIcon,
  StarIcon
} from '@heroicons/react/outline';
import { NavLink, useNavigate } from 'react-router-dom';


const features = [
  { icon: DocumentTextIcon, title: 'Easy to Use', description: 'Intuitive interface for quick resume creation' },
  { icon: CheckCircleIcon, title: 'Professional Templates', description: 'Choose from a variety of ATS-friendly designs' },
  { icon: ShareIcon, title: 'Share & Export', description: 'Easily share your resume or export to PDF' },
];

const testimonials = [
  { name: 'John Doe', role: 'Software Engineer', content: 'ResumeCraft helped me land my dream job! The templates are sleek and professional.' },
  { name: 'Jane Smith', role: 'Marketing Manager', content: 'I love how easy it is to customize my resume. It saved me hours of formatting.' },
  { name: 'Mike Johnson', role: 'Recent Graduate', content: 'As a new grad, I was struggling with my resume. ResumeCraft made it simple and effective.' },
];

const howItWorks = [
  { icon: PencilIcon, title: 'Create', description: 'Choose a template and fill in your details' },
  { icon: EyeIcon, title: 'Preview', description: 'See how your resume looks in real-time' },
  { icon: CloudUploadIcon, title: 'Download', description: 'Export your resume in various formats' },
];

const resumeTips = [
  'Tailor your resume to the job description',
  'Use action verbs to describe your achievements',
  'Quantify your accomplishments with numbers and percentages',
  'Keep your resume concise and relevant',
  'Proofread carefully for errors and typos',
];

const faqs = [
  { question: 'How do I get started?', answer: 'Simply sign up for an account and choose a template to begin crafting your resume.' },
  { question: 'Can I use ResumeCraft for free?', answer: 'Yes, we offer a free basic plan that allows you to create and download one resume.' },
  { question: 'How do I make my resume stand out?', answer: "Focus on your unique achievements, use a clean layout, and tailor your content to the job you're applying for." },
  { question: 'Is my information secure?', answer: 'We use industry-standard security measures to protect your personal information and resume data.' },
];

const LandingPage = () => {
  const [isTokenAvailable, setIsTolenAvailable] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    navigate("/login");
  }
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsTolenAvailable(!isTokenAvailable);
    }
  }, []);
  return (
    <div className="font-sans">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-black text-3xl text-blue-600">ResumeCraft</span>
            </div>
            <div className="flex items-center">
              {isTokenAvailable ? <div>
                <button onClick={logout} className="ml-4 bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700">Logout</button>
              </div> : <div><NavLink to="/login" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-bold">Login</NavLink>
                <NavLink to="/signup" className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Sign Up</NavLink></div>}
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Craft Your Perfect Resume
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Create professional resumes in minutes with our easy-to-use builder.
            </p>
            {isTokenAvailable ? <NavLink to="/personalInfo" className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 inline-flex items-center">
              Create now
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </NavLink> : <NavLink to="/signup" className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 inline-flex items-center">
              Get Started
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </NavLink>}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              Why Choose ResumeCraft?
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <div className="px-4 py-5 sm:p-6">
                    <feature.icon className="h-8 w-8 text-blue-600 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {howItWorks.map((step, index) => (
                <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6 text-center">
                    <step.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-sm text-gray-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resume Tips Section */}
        <div className="bg-gray-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              Resume Tips
            </h2>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <ul className="divide-y divide-gray-200">
                {resumeTips.map((tip, index) => (
                  <li key={index} className="px-4 py-4 sm:px-6">
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-3" />
                      <p className="text-sm text-gray-700">{tip}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center">
                          <span className="text-white font-medium text-lg">{testimonial.name[0]}</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">"{testimonial.content}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                    <p className="mt-2 text-sm text-gray-500">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to Build Your Perfect Resume?</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                {isTokenAvailable ? <NavLink to="/start" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                  Create Now
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </NavLink> : <NavLink to="/signup" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                  Get Started Now
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </NavLink>}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">ResumeCraft</h3>
              <p className="mt-2 text-base text-gray-500">Empowering careers with professional resumes.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Quick Links</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Contact</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect With Us</h3>
              <div className="flex space-x-6 mt-4">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <StarIcon className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <StarIcon className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <StarIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">
              &copy; {new Date().getFullYear()} ResumeCraft. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;