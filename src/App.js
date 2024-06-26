// App.js

import React, { useState, useEffect } from 'react';
import SplashScreen from './components/splashscreen';
import './App.css'; // Example for CSS import

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate an async operation (e.g., fetching data)
        setTimeout(() => {
            setLoading(false); // Set loading to false when your data is ready
        }, 2000); // Adjust the delay as needed
    }, []);

    return (
        <div className="App">
            {loading ? (
                <SplashScreen />
            ) : (
                <div className="main-content">
                    {/* Your main application content */}
                    <h1>Welcome to My App</h1>
                </div>
            )}
        </div>
    );
};

export default App;
