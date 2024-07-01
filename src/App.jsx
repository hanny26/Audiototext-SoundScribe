import React from 'react';
import AudioToText from './AudioToText';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div id="home" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center font-serif">
          <span className="inline-block">SounScribe</span>
          <img src="https://catalyst-magazine.org/wp-content/uploads/2020/05/3D-sound.png" alt="3D Sound Icon" className="inline-block h-8 md:h-10 ml-2" />
        </h1>
        <AudioToText />
      </div>
      <div id="about" className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">About This Application</h2>
  <div className="max-w-4xl text-center space-y-4">
    <p className="text-gray-200 text-lg">
      SounScribe is an innovative application that allows users to effortlessly convert audio files into text using advanced machine learning technology.
    </p>
    <p className="text-gray-200 text-lg">
      Built on top of the powerful Hugging Face API, our application ensures high accuracy in transcriptions, making it a reliable tool for professionals and enthusiasts alike.
    </p>
    <p className="text-gray-200 text-lg">
      Whether you're a researcher documenting interviews, a journalist transcribing reports, or anyone needing accurate audio-to-text conversion, SounScribe streamlines the process, saving you valuable time and effort.
    </p>
    <p className="text-gray-200 text-lg">
      Our user-friendly interface is designed to make the transcription process seamless. Simply upload your audio file, and let our advanced models handle the rest. Experience the future of transcription with SounScribe.
    </p>
    <div className="flex flex-wrap justify-center mt-6">
      <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/sound-waves.png" alt="Sound Waves Icon" className="h-12 mx-auto mb-4"/>
          <h3 className="text-xl font-semibold mb-2">High Accuracy</h3>
          <p className="text-gray-400">Powered by state-of-the-art AI models, ensuring precise transcriptions.</p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/easy.png" alt="Easy Icon" className="h-12 mx-auto mb-4"/>
          <h3 className="text-xl font-semibold mb-2">User-Friendly</h3>
          <p className="text-gray-400">Intuitive interface designed for ease of use by everyone.</p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/speed.png" alt="Speed Icon" className="h-12 mx-auto mb-4"/>
          <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
          <p className="text-gray-400">Get your transcriptions quickly with our optimized processing.</p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/secure.png" alt="Secure Icon" className="h-12 mx-auto mb-4"/>
          <h3 className="text-xl font-semibold mb-2">Secure</h3>
          <p className="text-gray-400">Your data is safe with us, with top-notch security measures in place.</p>
        </div>
      </div>
    </div>
  </div>
</div>

      <Footer />
    </div>
  );
};

export default App;
