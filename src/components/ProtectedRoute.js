import React, { useEffect, useState } from "react";
import { GetCurrentUser } from "../apicalls/users";
import { message } from "antd";

function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null);

  const getCurrentuser = async () => {
    try {
      const response = await GetCurrentUser();
      if (response.success) {
        setUser(response.data);
      } else {
        setUser(null);
        message.error(response.message);
      }
    } catch (error) {
      setUser(null);
      message.error(error.message);
    }
  };

  useEffect(() => {
    getCurrentuser();
  }, []);

  
  //if user is present then only render the content
  return (
    user && (
      <div>
        (user.name)
        {children}
      </div>
    )
  );
}

export default ProtectedRoute;
