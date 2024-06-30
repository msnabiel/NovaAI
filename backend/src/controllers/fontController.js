// fontController.js

const fontService = require('../services/fontService');

// Example endpoint to fetch icon suggestions
const getIconSuggestions = (req, res) => {
  try {
    const iconSuggestions = fontService.getIconSuggestions();
    res.status(200).json(iconSuggestions);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getIconSuggestions,
  // Add other controller functions as needed
};
