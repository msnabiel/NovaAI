const axios = require('axios');
const config = require('../config');

exports.fetchFonts = async () => {
  try {
    const response = await axios.get('https://api.example.com/fonts', {
      headers: { 'Authorization': `Bearer ${config.FONT_API_KEY}` }
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch fonts: ${error.message}`);
  }
};
