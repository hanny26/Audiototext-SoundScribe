import React, { useState } from 'react';
import axios from 'axios';

const AudioToText = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [transcription, setTranscription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('audio/')) {
      setSelectedFile(file);
      setError(null);
    } else {
      setError('Please select a valid audio file.');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setError('Please select a file before submitting.');
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', selectedFile);

    console.log('Submitting form data:', formData);

    try {
      const response = await axios.post(
        'inference_api',
        formData,
        {
          headers: {
            Authorization: `bearer_token_in_hugginface`, // Replace with your actual API tokenhf_uzhMNbUwXQynGAsjRszSqGQucbPMzYOntZ
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('Response:', response);

      if (response.status === 200) {
        setTranscription(response.data.text);
      } else {
        setError(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (err) {
      console.error('Error:', err);
      if (err.response) {
        setError(`Error: ${err.response.status} - ${err.response.data.error}`);
      } else if (err.request) {
        setError('Error: No response received from server.');
      } else {
        setError(`Error: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-gray-800 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-400">
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="file">
            Upload Audio File
          </label>
          <input 
            type="file" 
            accept="audio/*" 
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        <div className="flex items-center justify-between">
          <button 
            type="submit" 
            disabled={loading}
            className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105`}
          >
            {loading ? 'Transcribing...' : 'Transcribe Audio'}
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
      {transcription && (
        <div className="mt-4 p-4 bg-gray-900 text-gray-200 rounded-lg shadow-inner">
          <h3 className="text-lg font-bold mb-2">Transcription:</h3>
          <p className="text-white">{transcription}</p>
        </div>
      )}
    </div>
  );
};

export default AudioToText;
