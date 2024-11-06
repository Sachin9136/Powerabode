import React, { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    const Tawk_API = Tawk_API || {};
    const Tawk_LoadStart = new Date();
    
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/6729d5f92480f5b4f598d104/1ibtmnm8s';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    document.body.appendChild(script);

    return () => {
      // Cleanup: Remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't need to render anything
};

export default TawkToChat;