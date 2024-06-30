const axios = require('axios');
const config = require('../config');

exports.fetchColorPalette = async () => {
  const response = await axios.get('https://api.adobe.com/v2/colors', {
    headers: { 'Authorization': `Bearer ${config.ADOBE_COLOR_API_KEY}` }
  });
  return response.data;
};
