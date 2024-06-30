const colorService = require('../services/colorService');

exports.getColors = async (req, res) => {
  try {
    console.log("Inside getColors controller function...");
    const colors = await colorService.fetchColorPalette();
    console.log("Colors fetched:", colors);
    res.json(colors);
  } catch (error) {
    console.error("Error in getColors controller:", error);
    res.status(500).send(error.message);
  }
};
