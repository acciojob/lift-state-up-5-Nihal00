
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Components</h1>

        {isLoggedIn ? 
          <p>You are logged in!</p>
          :
          <form>
            <label>Username: <input type="text" /> </label>
            <label>Password: <input type="password" /> </label>
            <button onClick={() => setIsLoggedIn(true)} >Login</button>
          </form>
    
        }
    </div>
  )
}

export default App
