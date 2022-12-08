# Sindano project for Apiary
This project is part of Apiary from Practicum. Students work on a real client. This particular project is a landing page for the Sinadano company. It is built using React and Storybook. 

# Instructions
Please find all the instruction on [Notion](https://www.notion.so/Sindano-394de17457e94490b41ab4a1ff099e06)

<hr>

## Organization 📁

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


<hr>

## Issues and Limitations ⏳

### Chart 📊
[Chart.js](https://www.chartjs.org/), the third party program used to generate the app’s `BarChart` component, doesn’t get along with CSS media queries even though the chart is set to be responsive in its configuration. 
* This is also seen in Chart.js’s documentation under `Bar Chart` when looking at and resizing their [demo](https://www.chartjs.org/docs/latest/charts/bar.html#horizontal-bar-chart).
* The best solution was to surround the chart canvas in a <div> and set the height and/or width on said <div> instead of the canvas.
* In order to see the change in the chart when going from screen size `1024px` to `375px`, the page needs to be refreshed at `375px`.
* The same goes when resizing the screen from `375px` to `1024px`. The page needs to be refreshed in order to see the changes.
* Even with this issue, the chart is set to change only when the screen is shrunk to `580px`. It should show up fine on the larger screen sizes larger than `580px`.


### LinkedIn Feature 👤
* When opening the modal to request a demo, referencing the option to fill in information from LinkedIn instead of manually, seems to only work properly if the user is on the Chrome browser. It doesn’t function on the Safari browser— instead of filling out information in the appropriate field, Safari opens the landing page. Other browsers have not been tested.

* Notice the comment in `index.js` marked “NEVER DO THIS”. The code between those comments are NOT to be deleted. It is just marked as bad practice to code it that way, but there was no other way to make the LinkedIn feature to function.
