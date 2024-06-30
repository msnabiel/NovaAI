# Nova UI/UX Design AI Assistant & Plugin


## Logo
<img src="./logo.png" alt="NovaAI-Logo" width="100" height="100">

## Overview

The **UI/UX Design AI Personal Assistant** is a Figma plugin crafted to assist UI/UX designers by generating color palettes, suggesting icons, recommending fonts, and providing text suggestions directly within the Figma environment. This plugin integrates with various external APIs and utilizes machine learning models for enhanced design suggestions.

## Note: Work is being done, and repo is being updated as you read.

### Features

- **Color Palette Suggestions**: Generates harmonious color palettes using the Adobe Color API.
- **Icon Suggestions**: Provides a wide range of icon suggestions using the Font Awesome API.
- **Font Recommendations**: Suggests suitable fonts from the Google Fonts API for your designs.
- **Text Suggestions**: Offers context-aware text suggestions using a pre-trained model from Hugging Face.

## Folder Structure

```plaintext
NovaAI/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── styles/
│   │   ├── index.js
│   │   ├── plugin.js
│   │   └── manifest.json
│   ├── build/
│   ├── public/
│   ├── package.json
│   ├── package-lock.json
│   └── node_modules/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── fontController.js
│   │   │   ├── colorController.js
│   │   │   ├── textController.js
│   │   │   └── index.js
│   │   ├── services/
│   │   │   ├── fontService.js
│   │   │   ├── colorService.js
│   │   │   ├── textService.js
│   │   │   └── index.js
│   │   ├── models/
│   │   │   ├── textModel.js
│   │   │   └── index.js
│   │   ├── middlewares/
│   │   │   └── errorHandler.js
│   │   ├── routes/
│   │   │   ├── fontRoutes.js
│   │   │   ├── colorRoutes.js
│   │   │   ├── textRoutes.js
│   │   │   └── index.js
│   │   ├── config/
│   │   │   ├── config.js
│   │   │   └── database.js
│   │   ├── app.js
│   │   ├── server.js
│   │   ├── apiHandler.js
│   │   ├── utils/
│   │   │   ├── logger.js
│   │   │   └── helper.js
│   │   ├── static/
│   │   │   ├── css/
│   │   │   ├── js/
│   │   │   └── images/
│   │   ├── templates/
│   │   │   └── index.html
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   └── node_modules/
│   ├── data/
│   │   ├── local_storage/
│   │   └── remote_storage/
│   ├── tests/
│   │   ├── test_app.js
│   │   ├── test_fontService.js
│   │   └── test_apiHandler.js
│   ├── Dockerfile
│   └── README.md
├── docs/
│   ├── api_docs.md
│   ├── plugin_docs.md
│   ├── uml_diagrams/
│   │   ├── component_diagram.puml
│   │   └── component_diagram.png
│   └── README.md
└── README.md
```

## Workflow

![Workflow](./modified.png)

## Installation and Setup

### Prerequisites

- Node.js (for both frontend and backend development)

### Frontend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/msnabiel/NovaAI.git
   cd NovaAI/frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the plugin:

   ```bash
   npm run build
   ```

4. The compiled plugin will be located in the `frontend/build` directory.

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd ../backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the backend server:

   ```bash
   node src/server.js
   ```

## Usage

1. Open Figma and create/open a project.
2. Navigate to the Plugins menu.
3. Select "UI/UX Design AI Personal Assistant" from the list.
4. Use the plugin features to generate color palettes, icons, fonts, and text suggestions directly in your Figma design.

## Documentation

- Detailed API documentation can be found in `docs/api_docs.md`.
- Plugin usage and setup instructions are available in `docs/plugin_docs.md`.
- UML diagrams illustrating the system architecture can be found in `docs/uml_diagrams/`.

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests to contribute new features, improve documentation, or fix issues.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or support, please contact [Syed Nabiel Hasaan M](mailto:msyednabiel@gmail.com) or [Tharagaraman Balaji](mailto:tharagaraman2004@gmail.com).
