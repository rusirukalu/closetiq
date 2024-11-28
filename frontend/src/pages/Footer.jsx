import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 AI Stylist. All Rights Reserved.</p>
        <div className="mt-4 text-gray-400">
          <a href="/about" className="mx-4 hover:text-yellow-500">About</a>
          <a href="/privacy" className="mx-4 hover:text-yellow-500">Privacy</a>
          <a href="/terms" className="mx-4 hover:text-yellow-500">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
