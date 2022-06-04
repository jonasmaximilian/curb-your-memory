import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
    return (
        <div className='min-h-screen bg-[#131313] text-gray-300'>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
