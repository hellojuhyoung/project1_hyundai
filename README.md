<div id="top">

<div align="center">

# `Hyundai Website`

<em>A recreation of the Hyundai global website.</em>

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=default&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/CSS-663399.svg?style=default&logo=CSS&logoColor=white" alt="CSS">
<img src="https://img.shields.io/badge/HTML-E34F26.svg?style=default&logo=html5&logoColor=white" alt="HTML">

</div>
<br>

---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
  - [Project Index](#project-index)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
- [Roadmap](#roadmap)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Overview

This project is a **front-end recreation of key sections from the official Hyundai global website**. Built primarily with **HTML, CSS, and JavaScript**, it aims to showcase modern web development skills by replicating design, **adaptability across devices**, and interactive elements found on a major automotive brand's online presence.

**Why This Project?**

This project demonstrates practical skills in building multi-page, **adaptive** web interfaces and handling client-side interactivity. The core aspects highlighted include:

- **🌐 Multi-Page Navigation:** Implements a clear navigation structure across distinct sections like Home, Vehicles, and Company information.
- **📱 Device Adaptability:** Ensures optimal viewing and user experience across various devices and screen sizes, from mobile phones to desktop monitors.
- **✨ Interactive Elements:** Incorporates dynamic features such as video slideshows, navigation bar transformations on scroll, and image galleries to enhance user engagement.
- **🎨 Brand Fidelity:** Focuses on meticulously recreating the visual design and user interface (UI) elements to closely match the original Hyundai website's aesthetic.
- **✂️ Modular Structure:** Organizes code into logical, page-specific files (HTML, CSS, JS) for maintainability and scalability.

---

## Features

|     | Component         | Details                                                                                                                                                                                                                                                                                                                               |
| :-- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ⚙️  | **Architecture**  | <ul><li>Organized into distinct HTML, CSS, and JavaScript files per page (e.g., `page1`, `page2`, `page3`) for clear separation of concerns.</li><li>Utilizes a straightforward client-side architecture suitable for a static website.</li></ul>                                                                                     |
| 🔩  | **Code Quality**  | <ul><li>Employs semantic HTML5 for meaningful structure.</li><li>CSS is structured with clear, descriptive classes and aims for maintainability.</li><li>JavaScript is used for enhancing interactivity and dynamic content.</li></ul>                                                                                                |
| 📄  | **Documentation** | <ul><li>This `README.md` provides an overview, setup instructions, and a detailed file structure.</li><li>Code includes inline comments where complex logic or structure requires further explanation.</li></ul>                                                                                                                      |
| 🔌  | **Integrations**  | <ul><li>Leverages standard web technologies (HTML, CSS, JavaScript) without external API integrations or complex backend systems.</li><li>Designed to run directly in any modern web browser.</li></ul>                                                                                                                               |
| 🧩  | **Modularity**    | <ul><li>Each major section or page of the website (e.g., `page1`, `page2`, `page3`) resides in its own dedicated directory.</li><li>CSS and JavaScript files are linked specifically to their respective HTML pages, promoting reusable and isolated components.</li></ul>                                                            |
| 🧪  | **Testing**       | <ul><li>Primarily relies on **manual browser testing** across different modern browsers (e.g., Chrome, Firefox, Safari).</li><li>Validation of **adaptive layouts** and interactive elements on various screen sizes (desktop, tablet, mobile).</li></ul>                                                                             |
| ⚡️ | **Performance**   | <ul><li>Optimized for fast loading times due to its static nature.</li><li>Efficient use of CSS for styling and minimal JavaScript for dynamic elements.</li><li>No heavy server-side processing contributes to quick page rendering.</li></ul>                                                                                       |
| 🛡️  | **Security**      | <ul><li>As a front-end static website, direct server-side vulnerabilities are not applicable.</li><li>Focuses on client-side security by avoiding insecure inline scripts and adhering to basic web security practices.</li><li>Does not handle sensitive user data or authentication.</li></ul>                                      |
| 🚀  | **Scalability**   | <ul><li>Scalable by adding new HTML pages or sections, following the existing modular structure.</li><li>Can easily be hosted on static site hosting platforms (e.g., GitHub Pages, Netlify) to handle increased traffic efficiently.</li><li>Frontend architecture allows for future expansion into more complex features.</li></ul> |

---

## Visual Showcase

Get a comprehensive look at the Hyundai Website Clone's design and functionality through these visual demonstrations.

### Project Walkthrough

A complete tour of the replicated Hyundai website, navigating through all three main pages to provide an overview of the project's scope and features.

![Project Walkthrough GIF](assets/project-walkthrough.gif)

### Page-Specific Demos

Explore each individual page in detail, showcasing its unique layout, content, and interactive elements.

#### Page 1: Home/Landing Page

Experience the dynamic elements and design fidelity of the website's main landing page.

![Page 1 Demo](assets/page1-demo.gif)

#### Page 2: Vehicles Section

A visual guide through the vehicles section, highlighting its structure and visual presentation.

![Page 2 Demo](assets/page2-demo.gif)

#### Page 3: Company Information

Discover the layout and content of the dedicated company information page.

![Page 3 Demo](assets/page3-demo.gif)

---

## Project Structure

```sh
└── /
    ├── README.md
    ├── blank.css
    ├── blank.html
    ├── page1
    │   ├── images
    │   ├── page1.css
    │   ├── page1.html
    │   └── page1.js
    ├── page2
    │   ├── images
    │   ├── page2.css
    │   ├── page2.html
    │   └── page2.js
    ├── page3
    │   ├── images
    │   ├── page3.css
    │   ├── page3.html
    │   └── page3.js
    ├── sample.css
    ├── sample.html
    └── sample.js
```

### Project Index

<details open>
    <summary><b><code>/</code></b></summary>
    <details>
        <summary><b>__root__</b></summary>
        <blockquote>
            <div class='directory-path' style='padding: 8px 0; color: #666;'>
                <code><b>⦿ __root__</b></code>
            <table style='width: 100%; border-collapse: collapse;'>
            <thead>
                <tr style='background-color: #f8f9fa;'>
                    <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
                    <th style='text-align: left; padding: 8px;'>Summary</th>
                </tr>
            </thead>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='/blank.css'>blank.css</a></b></td>
                    <td style='padding: 8px;'>- `blank.css` styles in-progress indicators within the application. It centrally aligns text, sets a specific font and size, providing consistent visual cues for unfinished tasks or sections across the user interface. Its role is purely presentational, enhancing visual feedback.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='/sample.html'>sample.html</a></b></td>
                    <td style='padding: 8px;'>- `sample.html` provides the front-end structure for displaying car data. It defines the HTML layout, including a header and a container for a table, linking to `sample.css` for styling and `sample.js` for dynamic content. Its purpose is to present a user interface for viewing car information.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='/blank.html'>blank.html</a></b></td>
                    <td style='padding: 8px;'>- `blank.html` provides a basic HTML structure for a 404 error page. It incorporates external styling from `blank.css` and displays a "404 Not Found" message. This file serves as a placeholder or initial template for handling missing pages.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='/sample.js'>sample.js</a></b></td>
                    <td style='padding: 8px;'>- `sample.js` populates a webpage section with a 3x3 table of images. It uses a predefined data array containing image sources, alt text, and captions. The script dynamically generates the HTML table elements, enhancing the user interface.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='/sample.css'>sample.css</a></b></td>
                    <td style='padding: 8px;'>- `sample.css` styles a webpage section, specifically section3, using a grid layout for image display. It arranges images in a three-column grid with gaps, centers them, and enhances them with hover effects for scaling. Captions are styled for improved user interaction.</td>
                </tr>
            </table>
        </blockquote>
    </details>
	<!-- page1 Submodule -->
<details>
        <summary><b>page1</b></summary>
        <blockquote>
            <div class='directory-path' style='padding: 8px 0; color: #666;'>
                <code><b>⦿ page1</b></code>
            <table style='width: 100%; border-collapse: collapse;'>
            <thead>
                <tr style='background-color: #f8f9fa;'>
                    <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
                    <th style='text-align: left; padding: 8px;'>Summary</th>
                </tr>
            </thead>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='/page1/page1.html'>page1.html</a></b></td>
                    <td style='padding: 8px;'>- `page1.html` constitutes the main landing page of the Hyundai website. It showcases a rotating video display featuring company greetings and vehicle highlights, alongside visually rich sections detailing the IONIQ lineup, future mobility initiatives, and sustainability projects. Navigation links connect this page to other website sections, and the page concludes with contact, legal, and social media links.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='/page1/page1.js'>page1.js</a></b></td>
                    <td style='padding: 8px;'>- `page1.js` enhances user experience by dynamically altering the navbar's appearance based on scroll position and mouse interaction. It also implements a video slideshow feature, automatically playing videos sequentially and providing controls for manual navigation, with text overlays synchronized to each video. This functionality contributes to an engaging and interactive webpage experience.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='/page1/page1.css'>page1.css</a></b></td>
                    <td style='padding: 8px;'>- The `page1/page1.css` file defines the layout for page one. It sets the maximum body width based on screen size, ensuring content remains centered and avoids horizontal scrollbars. It adjusts the layout and hides elements (like the `.menuWrap`) on smaller screens, and positions the navigation bar (`navbar`) to remain fixed at the top of the viewport.</td>
                </tr>
            </table>
			<!-- images Submodule -->
			<details>
                <summary><b>images</b></summary>
                <blockquote>
                    <div class='directory-path' style='padding: 8px 0; color: #666;'>
                        <code><b>⦿ page1.images</b></code>
                    <table style='width: 100%; border-collapse: collapse;'>
                    <thead>
                        <tr style='background-color: #f8f9fa;'>
                            <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
                            <th style='text-align: left; padding: 8px;'>Summary</th>
                        </tr>
                    </thead>
                        <tr style='border-bottom: 1px solid #eee;'>
                            <td style='padding: 8px;'><b><a href='/page1/images/hyundai_logo_white.txt'>hyundai_logo_white.txt</a></b></td>
                            <td style='padding: 8px;'>- The `hyundai_logo_white.txt` file stores the Hyundai logo image. Within the `page1/images` directory, it serves as a resource, providing the white version of the logo for display, visually representing the Hyundai brand within the website's design. The file's content is a URL pointing to the actual image asset.</td>
                        </tr>
                        <tr style='border-bottom: 1px solid #eee;'>
                            <td style='padding: 8px;'><b><a href='/page1/images/hyundai_logo_blue.txt'>hyundai_logo_blue.txt</a></b></td>
                            <td style='padding: 8px;'>- The `hyundai_logo_blue.txt` file stores the URL for Hyundai's blue logo image. Within the `page1` image directory, it acts as a data source, providing the path to the logo image used elsewhere in the website's frontend. This centralized approach simplifies image management and ensures consistency.</td>
                        </tr>
                    </table>
                </blockquote>
            </details>
        </blockquote>
    </details>
	<!-- page2 Submodule -->
	<details>
        <summary><b>page2</b></summary>
        <blockquote>
            <div class='directory-path' style='padding: 8px 0; color: #666;'>
                <code><b>⦿ page2</b></code>
            <table style='width: 100%; border-collapse: collapse;'>
            <thead>
                <tr style='background-color: #f8f9fa;'>
                    <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
                    <th style='text-align: left; padding: 8px;'>Summary</th>
                </tr>
            </thead>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='/page2/page2.js'>page2.js</a></b></td>
                    <td style='padding: 8px;'>- The `page2/page2.js` file enhances the user experience on page two by dynamically modifying the navbar's appearance based on scroll position and mouse interaction. It adds a "scrolled" class to the navbar when the user scrolls down or hovers, and removes it otherwise. Additionally, it includes a placeholder function for displaying image captions (currently showing an "In progress" alert). This functionality contributes to the overall visual presentation and interactivity.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='/page2/page2.css'>page2.css</a></b></td>
                    <td style='padding: 8px;'>- `page2/page2.css` styles a webpage, defining layouts for different screen sizes. It establishes a fixed navbar with a smooth color transition on scroll, and styles various sections, including headers, images, and text elements. These styles ensure consistent visual presentation across diverse devices, enhancing user experience. Specific styling is applied to sections 1 through 10, creating a visually appealing and organized page structure.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='/page2/page2.html'>page2.html</a></b></td>
                    <td style='padding: 8px;'>- `page2.html` renders the Vehicles section of a Hyundai website. It displays a navigation bar, a hero image showcasing vehicles, and sections categorized by vehicle type (Cars, Eco, SUV, etc.). Each section provides a header and space for vehicle listings, likely populated dynamically via `page2.js`. The page also includes a footer with contact, corporate, and social media links.</td>
                </tr>
            </table>
        </blockquote>
    </details>
	<!-- page3 Submodule -->
	<details>
        <summary><b>page3</b></summary>
        <blockquote>
            <div class='directory-path' style='padding: 8px 0; color: #666;'>
                <code><b>⦿ page3</b></code>
            <table style='width: 100%; border-collapse: collapse;'>
            <thead>
                <tr style='background-color: #f8f9fa;'>
                    <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
                    <th style='text-align: left; padding: 8px;'>Summary</th>
                </tr>
            </thead>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='/page3/page3.js'>page3.js</a></b></td>
                    <td style='padding: 8px;'>- `page3.js` dynamically modifies the navbar's appearance based on user interaction. It adds a "scrolled" class to the navbar when the user scrolls down or hovers, removing it when scrolling back up or moving the mouse away. This enhances user experience by providing visual feedback related to the page's scroll position and navigation bar interaction.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='/page3/page3.css'>page3.css</a></b></td>
                    <td style='padding: 8px;'>- `page3.css` styles a webpage, defining layouts for different screen sizes. It establishes a consistent container width and manages margins and padding. The stylesheet also formats a fixed navigation bar, various sections with distinct content areas (including text, images, and lists), and a footer with copyright and social media links. The styling incorporates hover effects and layout adjustments for improved user experience.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='/page3/page3.html'>page3.html</a></b></td>
                    <td style='padding: 8px;'>- `page3.html` renders the Company section of a Hyundai website. It displays the company's vision, history, and values through text, images, and a navigation bar consistent with other site pages. The page includes links to other sections, social media, and legal information, contributing to the overall website's structure and user experience. It uses external CSS and JavaScript files for styling and functionality.</td>
                </tr>
            </table>
        </blockquote>
    </details>

---

## Getting Started

### Prerequisites

This project requires only a **modern web browser** to view the website locally. No specific programming language installations or server environments are needed for basic operation.

### Installation

To get a local copy up and running, follow these simple steps:

1. **Clone the repository:**

   ```sh
   ❯ git clone https://github.com/hellojuhyoung/project1_hyundai.git
   ```

2. **Navigate to the project directory:**

   ```sh
   ❯ cd project1_hyundai
   ```

3. **Install the dependencies:**
   **No traditional installation steps are required.** This project is built using client-side HTML, CSS, and JavaScript, meaning it runs directly in a web browser without needing to install packages or build tools.

### Usage

To view the website:

1.  Simply open any of the main HTML files (e.g., `page1/page1.html`, `page2/page2.html`, or `page3/page3.html`) in your preferred web browser by double-clicking them.

### Testing

This project does not include automated tests. To check its functionality and appearance, please open the HTML files in various web browsers to observe the layout and interactions manually.

---

## Roadmap

- [x] **`Landing Page`**: <strike>Replicate core elements of the Hyundai landing page (page1).</strike>
- [x] **`Vehicles Section`**: <strike>Implement the main vehicles overview section (page2).</strike>
- [x] **`Company Section`**: <strike>Develop the company information section (page3).</strike>
- [ ] **`Dynamic Car Data`**: Integrate a simple JSON or API (if applicable) to dynamically load car specifications on vehicle pages.
- [ ] **`Interactive Image Galleries`**: Add zoom, lightbox, or carousel functionality to image galleries.
- [ ] **`Search Functionality`**: Implement a basic client-side search for vehicle models or content.
- [ ] **`Performance Optimizations`**: Reduce image sizes and optimize CSS/JS delivery for faster loading.
- [ ] **`Cross-Browser Compatibility`**: Ensure consistent rendering and functionality across all major browsers.

---

## License

**Hyundai Website** is protected under the [LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## Acknowledgments

- **Inspired by:** The design, layout, and user experience of the official [Hyundai Global Website](https://www.hyundai.com/worldwide/en).
- **README Generator:** This README was initially structured and partially generated by [readme-ai](https://github.com/eli64s/readme-ai).
- **Icons/Fonts:** [Font Awesome](https://fontawesome.com/) or [Google Fonts](https://fonts.google.com/) (adjust if you used others).
- **Learning Resources:** [MDN Web Docs](https://developer.mozilla.org/en-US/) for web development references.

<div align="right">

[![][back-to-top]](#top)

</div>

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square

---
