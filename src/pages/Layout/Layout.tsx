import Header from '@/components/Header/Header';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <div className="dark:text-white  dark:bg-gray-600 h-screen">
        <Header />
        {children}
      </div>
    </main>
  )
};

export default Layout;