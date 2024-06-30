const textService = require('../services/textService');

exports.generateText = async (req, res) => {
  try {
    const generatedText = await textService.generateText();
    res.json({ text: generatedText });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
