import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  // Check if the user has already accepted or declined cookies
  useEffect(() => {
    const cookieConsent = Cookies.get("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true); // Show the banner if no consent has been set
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookieConsent", "accepted", { expires: 365 }); 
    setShowBanner(false); // Hide the banner
  };

  const declineCookies = () => {
    Cookies.set("cookieConsent", "declined", { expires: 365 });
    setShowBanner(false); // Hide the banner
  };

  const cookieConsent = Cookies.get("cookieConsent");
  if (cookieConsent === "accepted") {
    // Perform actions for accepted cookies
    console.log("User has accepted cookies.");
  } else if (cookieConsent === "declined") {
    // Perform actions for declined cookies
    console.log("User has declined cookies.");
  }

  return (
    <>
      {showBanner && (
        <div style={styles.banner}>
          <p className="text-white">
            We use cookies to improve your experience. By using our website, you
            agree to our use of cookies.
          </p>
          <button
            onClick={acceptCookies}
            className="bg-yellow-500 p-2 rounded cursor-pointer mx-2"
          >
            Accept
          </button>
          <button
            onClick={declineCookies}
            className="bg-red-500 p-2 rounded cursor-pointer mx-2"
          >
            Decline
          </button>
        </div>
      )}
    </>
  );
};

// Simple styling for the banner
const styles = {
  banner: {
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "white",
    textAlign: "center",
    padding: "20px",
    zIndex: "1000",
  },
};

export default CookieConsent;
