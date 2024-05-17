import React, { ReactNode } from 'react';
import AppHeader from '../components/AppHeader'; 
interface LayoutProps {
    children: ReactNode;
  }
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <AppHeader />
      <div style={{ padding: '20px', marginTop: '8px' }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
