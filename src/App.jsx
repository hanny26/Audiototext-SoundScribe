import React from 'react';
import AudioToText from './AudioToText';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div id="home" className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center font-serif">
  <span className="inline-block">SounScribe</span>
  <img src="https://catalyst-magazine.org/wp-content/uploads/2020/05/3D-sound.png" alt="3D Sound Icon" className="inline-block h-8 md:h-10 ml-2" />
</h1>

        <AudioToText />
      </div>
      <div id="about" className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">About This Application</h2>
        <p className="max-w-prose text-center text-gray-700">
          This application allows users to upload audio files and convert them into text using the Hugging Face API.
          It utilizes modern machine learning models to provide accurate transcriptions and is designed with a user-friendly interface
          to make the process as seamless as possible. Whether you're a researcher, journalist, or just someone looking to transcribe
          audio content, this tool can help you save time and effort.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default App;
