import React from 'react';
import Footer from "../footer/footer";


function Disclaimer() {
  return (
   <>
    <div className="px-4 py-10 md:px-20 bg-gray-100 min-h-screen ">
      <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
        <h1 className="text-2xl font-bold text-[#29385E] mb-4">Disclaimer</h1>
        <p className="text-gray-700 leading-relaxed">
          The information contained on this website (<a href="https://www.powerabode.com" className="text-blue-500 underline">www.powerabode.com</a>) is for general information purposes only and is provided on an "as is," "as available" basis. Every effort is made to keep the website up and running smoothly. However, PowerAbode DMCC takes no responsibility for and will not be liable for the website being temporarily unavailable due to technical issues beyond our control.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          The information is provided by PowerAbode, and whilst we endeavor to keep the information up-to-date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is strictly at your own risk.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          We accept no responsibility for any loss, of whatever nature, that may arise from use of this website or your reliance on any of the information contained in this site and in no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of or in connection with the use of this website. We cannot accept any responsibility for any damages, loss, or viruses arising directly or indirectly from the use of this website.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          The views and opinions of authors expressed on this website do not necessarily reflect or state those of PowerAbode, shareholders, or directors.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          We reserve the right to change the information contained within this website (including these terms and conditions) at any time.
        </p>
      </div>
    </div>
    <Footer/>
   </>
  );
}

export default Disclaimer;
