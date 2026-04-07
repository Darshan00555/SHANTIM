import React from 'react';

const HomeLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 px-6 py-4 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold text-orange-500">Devi/webakash1806</h1>
          <nav>
            <ul className="flex space-x-6 text-gray-300">
              <li>
                <a href="/" className="transition-colors hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button className="rounded-full bg-orange-500 px-6 py-2 text-white transition-colors hover:bg-orange-600">
            Login
          </button>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-white/10 bg-black/50 px-6 py-6 backdrop-blur-md">
        <div className="container mx-auto text-center text-gray-400">
          &copy; {new Date().getFullYear()} Devi. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomeLayout;
