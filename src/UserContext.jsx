// UserProfile.jsx
import React from "react";

const UserProfile = () => {
  // Retrieve user data from localStorage, providing a default value
  const userDataString = localStorage.getItem("userData") || "{}";

  const userData = JSON.parse(userDataString);
  console.log("aklil", userData);

  // Check if userData is not null and has the expected properties
  if (userData && userData.firstName) {
    // Retrieve profile data based on user's name
    const profileDataString = localStorage.getItem(userData.firstName);

    // Parse profileDataString, handle errors if any
    try {
      const profileData = JSON.parse(profileDataString) || {};

      return (
        <div className="profile">
          <div
            className="card"
            style={{
              height: "2rem",
              width: "2rem",
              backgroundColor: "white",
              marginRight: "40rem",
            }}
          >
            <p>{`Welcome, ${userData.firstName}`}</p>
          </div>
        </div>
      );
    } catch (error) {
      console.error("Error parsing profileDataString:", error);
    }
  }

  // Return a default content or null if userData is not available
  return null;
};

export default UserProfile;
