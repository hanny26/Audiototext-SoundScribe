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
        'https://api-inference.huggingface.co/models/distil-whisper/distil-large-v2',
        formData,
        {
          headers: {
            Authorization: `Bearer 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`, // Replace with your actual API token
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
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
            Upload Audio File
          </label>
          <input 
            type="file" 
            accept="audio/*" 
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        <div className="flex items-center justify-between">
          <button 
            type="submit" 
            disabled={loading}
            className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            {loading ? 'Transcribing...' : 'Transcribe Audio'}
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
      {transcription && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="text-lg font-bold mb-2">Transcription:</h3>
          <p className="text-gray-700">{transcription}</p>
        </div>
      )}
    </div>
  );
};

export default AudioToText;
