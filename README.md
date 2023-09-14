# CV Generator

Welcome to the CV (Curriculum Vitae) project! This project showcases a personalized web-based CV that provides an interactive and visually appealing way to present your professional background, skills, experiences, and accomplishments.

## Table of Contents

- [Features](https://github.com/connk95/CV/blob/main/README.md#features)
- [Demo](https://github.com/connk95/CV/blob/main/README.md#features)
- [Installation](https://github.com/connk95/CV/blob/main/README.md#installation)
- [Code Description](https://github.com/connk95/CV/blob/main/README.md#code-description)
- [Usage](https://github.com/connk95/CV/blob/main/README.md#usage)
- [Contributing](https://github.com/connk95/CV/blob/main/README.md#contributing)
- [License](https://github.com/connk95/CV/blob/main/README.md#license)
- [Acknowledgements](https://github.com/connk95/CV/blob/main/README.md#acknowledgements)

## Features

- Add work and education experience to show off your background.
- Add your personal and team skills as you like.

## Demo

https://connk95.github.io/CV/

## Installation

1. Clone this repository using the following command:
   ```
   git clone https://github.com/connk95/CV.git
   ```

2. Navigate to the project directory:
   ```
   cd CV
   ```

3. Run the app and view in your browser:
   ```
   npm start
   ```

## Code Description

[App.js](https://github.com/connk95/CV/blob/main/src/App.js) - Contains states for the page currently displayed, personal information, jobs, education, and skills. Theere are also functions to retrieve the data from the user's input. This module renders different input forms depending on what stage of the generator the user is on.

[Personal.js](https://github.com/connk95/CV/blob/main/src/components/Personal.js) - Renders the personal information form.

[Education.js](https://github.com/connk95/CV/blob/main/src/components/Education.js) - Renders the education input form.

[Experience.js](https://github.com/connk95/CV/blob/main/src/components/Experience.js) - Renders the work experience form.

[Skills.js](https://github.com/connk95/CV/blob/main/src/components/Skills.js) - Renders the skills form.

[Resume.js](https://github.com/connk95/CV/blob/main/src/components/Resume.js) - Renders the final resume.

[App.css](https://github.com/connk95/CV/blob/main/src/App.css) - CSS for the entire project.

## Usage

1. Click Start to beigin creating your Resume.
2. Enter your personal information. All fields are required.
3. Enter and add skills. No fields are required.
4. Enter and add work experience. Company and position are required.
5. Enter and add education. Institution name and qualification are required.
6. Generate your resume!

## Contributing

Contributions to this project are welcome! If you find any bugs or have ideas for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- This project was created by Connor Ketcheson.

If you have any questions or feedback, please don't hesitate to contact us.

---
