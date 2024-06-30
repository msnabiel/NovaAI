const axios = require('axios');
const config = require('../config');

exports.generateText = async () => {
  try {
    const response = await axios.post('https://api.example.com/generate-text', {
      prompt: 'Write your text generation prompt here...',
      model: 'gpt-3', // Specify the text generation model
      apiKey: config.TEXT_GENERATION_API_KEY // Use API key from config
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to generate text: ${error.message}`);
  }
};
