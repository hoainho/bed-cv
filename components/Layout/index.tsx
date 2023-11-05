import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface Props {
   children: React.ReactNode;
}

export const LayoutBasic= ({children}: Props) => {

   return (
      <>
        <Header />
        {children}
        <Footer />
      </>
   );
};
