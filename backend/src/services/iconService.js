const axios = require('axios');
const config = require('../config');

exports.fetchIcons = async () => {
  const response = await axios.get(`https://api.fontawesome.com/icons?api_key=${config.FONT_AWESOME_API_KEY}`);
  return response.data;
};
