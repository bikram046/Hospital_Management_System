import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            BuddyCare Hospital is a multi-specialty healthcare center dedicated to delivering exceptional medical services with compassion and care. Established with the vision of making quality healthcare accessible to all, we are committed to combining modern technology with a patient-centric approach to healing.
          </p>
          <p>
            Our team of highly qualified doctors, skilled nurses, and experienced healthcare professionals work tirelessly to ensure that every patient receives personalized attention and the highest standards of treatment. At BuddyCare, we believe in not only treating illnesses but also promoting wellness and preventive care.
          </p>
          <p>
            With state-of-the-art infrastructure, advanced diagnostic tools, and world-class medical facilities, we cater to a wide range of specialties including cardiology, orthopedics, pediatrics, oncology, neurology, and more. Our emergency care services are available 24/7 to handle urgent medical needs with speed and efficiency.
          </p>
          <p>
            We are more than just a hospital — we are a community that prioritizes health, hope, and humanity. At BuddyCare, your well-being is our top priority.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
