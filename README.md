# Sindano project for Apiary
This project is part of Apiary from Practicum. Students work on a real client. This particular project is a landing page for the Sinadano company. It is built using React and Storybook. 

# Instructions
Please find all the instruction on [Notion](https://www.notion.so/Sindano-394de17457e94490b41ab4a1ff099e06)

### Organization

The **frontend** of the app is divided into six folders:

* **_Components_** : Stores code that is divided into reusable components and then pieced together in `App.js`.
* **_images_** : Image, SVG and PNG files used in the app, which is further divided into “social” for the social media icons and “team” for Sindano’s team’s pictures.
* **_pdf_** : Any PDF files used in the app such as Sindano’s ‘terms-of-use’ and online privacy policy.
* **_stories_** : Stores the files in which are needed to simulate different components of the app in Storybook.
* **_utils_** : Miscellaneous code that handles chart configurations, the app’s global styles, statistics, and animation variants for Framer Motion.
* **_vendor_** : Files for the fonts used in the app or any third-party sources.

For the sake of organization and keeping everything that was related together as well as the use frequency of the method in the tech industry, we decided to make use of [Styled Components](https://styled-components.com/) when applying CSS to the app. This reduces the amount of files in the app.
`Index.js` handles the routing between the app and the LinkedIn element.

The backend code has its own folder, handling the Serverless code.
