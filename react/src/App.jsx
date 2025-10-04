import { RouterProvider } from "react-router-dom";
import router from "../routes/routes";

import { AuthContext } from "../routes/Context/AuthContext";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedin] = useState(false);

  function setAuth(auth) {
    setIsLoggedin(auth);
  }

  return (
    <AuthContext value={{ isLoggedIn, setAuth }}>
      <RouterProvider router={router} />
    </AuthContext>
  );
}

export default App;
