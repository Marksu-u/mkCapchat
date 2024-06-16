# mkCapchat

## Overview

**mkCapchat** is a simple, yet dynamic CAPTCHA generator built with Node.js and Express. It serves a series of images, challenging users to identify a unique "singular" image from among "neutral" images based on a given hint. This project leverages both client-side and server-side JavaScript to create a seamless user experience.

## Features

- **Dynamic Image Serving**: Randomly selects and serves a set of images for each CAPTCHA challenge.
- **Hint Integration**: Provides a hint related to the unique image to assist users.
- **Timer Functionality**: Implements a countdown timer to complete the CAPTCHA within a set timeframe.
- **Responsive Design**: Ensures the CAPTCHA is accessible and functional across various devices and screen sizes.
- **Error Handling**: Provides feedback on incorrect selections and reloads the CAPTCHA on timeout.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js**: Version 14.x or higher
- **npm**: Node package manager, typically installed with Node.js

### Installation

Follow these steps to set up the development environment:

1. Clone the repository:

    ```bash
    git clone https://github.com/Marksu-u/mkCapchat.git
    ```

2. Navigate to the project directory:

    ```bash
    cd mkCapchat
    ```

3. Install the necessary dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000/](http://localhost:3000/) in your web browser to see the CAPTCHA in action.

## Project Structure

The project consists of the following key files and directories:

- **index.js**: The main server file that sets up the Express server, handles routing, and serves the CAPTCHA images.
- **public/**: Contains static files, including images and the client-side JavaScript and HTML.
    - **images/neutres/**: Directory containing neutral images.
    - **images/singuliers/**: Directory containing singular images.
    - **index.html**: The main HTML file rendered on the client side.
- **indices.txt**: A text file containing the hints for each singular image.

## Technologies and Techniques

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 engine, used for server-side scripting.
- **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

### Frontend

- **HTML**: Standard markup language for creating web pages.
- **CSS**: Stylesheet language used for describing the presentation of a document written in HTML.
- **JavaScript**: Programming language that enables interactive web pages and is an essential part of web applications.

### Key Techniques

- **File System Operations**: Utilizes Node.js `fs` module to read and serve image files dynamically.
- **JSON Handling**: Sends and receives data between the client and server in JSON format.
- **DOM Manipulation**: Uses JavaScript to dynamically update the HTML DOM, handling user interactions and updating the UI in real-time.
- **Timers**: Implements a countdown timer to enforce time constraints on user actions.

## Usage

1. **Loading the CAPTCHA**:
    - On loading the page, a set of images is fetched from the server along with a hint.
    - Images are displayed in a grid, and the hint is shown above them.

2. **User Interaction**:
    - The user must identify the unique image based on the provided hint.
    - If the correct image is clicked, a success message is displayed, and the CAPTCHA is reloaded.
    - If an incorrect image is clicked, an error message is shown, prompting the user to try again.
    - If the timer expires, the CAPTCHA is reloaded, and the user must try again with a reduced time limit.

## Contributing

If you wish to contribute to the project, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.