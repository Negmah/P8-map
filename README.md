# Capstone/Final Project - Project #8 | Neighborhood Map (React)
#### Udacity's Google Developer Challenger Scholarship - Front End Web Development

[![N|Solid](https://www.stoddard.consulting/images/logos/Udacity_logo_small.p# Capstone/Final Project - Project #8 | Neighborhood Map (React)
#### Udacity's Google Developer Challenger Scholarship - Front End Web Development

[![N|Solid](https://www.stoddard.consulting/images/logos/Udacity_logo_small.png)

### Summary
***
A simple Google Maps App that fetches data from Foursquare API and allows the user to search for POI in Sintra, Portugal.
Built from scratch with React native.

### Goal
***
This project aims to test the all-around learned content throughout the Front-End Nanodegree, focusing mostly on React and API implementation, as well as responsiveness and accessibility rules - WAI-ARIA roles, focus, etc.
The goal is to develop a single-page application using React featuring a map of a chosen. Then additional functionality to this application must be added, including: map markers to identify popular locations or places I’d like to visit, a search function to easily discover these locations, and a list view to support simple browsing of all locations. Then research and implement third-party APIs that provide additional information about each of these locations (such as StreetView images, Wikipedia articles, Yelp reviews, etc).

- **Responsiveness** - the app should display correctly across a large span of different displays;
- **Accessibility** - the code should be correctly coded in order to ensure the latest WAI-ARIA roles are complied with and all properties and attributes are applied in order to have the app fully functional when using a screen-reader;

#### Project specifications
***
  1 Add a full-screen map to your page using the Google Maps API. For sake of efficiency, the map API should be called only once
2  Get a Google Maps API key, and include it as the value of the key parameter when loading the Google Maps API.
3 Display map markers identifying at least 5 locations within this neighborhood. The app should display those locations by default when the page is loaded.
4 Implement a list view of the set of locations defined in step 3
5 Provide a filter option that uses an input field to filter both the list view and the map markers displayed by default on load. The list view and the markers should update accordingly in real time. _Providing a search function through a third-party API is not enough to meet specifications._ This filter can be a text input or a dropdown menu.
6 Add functionality using third-party APIs to provide information when a map marker or list view entry is clicked (ex: Yelp reviews, Wikipedia, Flickr images, etc). Provide attribution to the data sources/APIs used.
7 The app's interface should be intuitive to use. For example, the input text area to filter locations should be easy to locate. It should be easy to understand what set of locations is being filtered. Selecting a location via list item or map marker should cause the map marker to bounce or in some other way animate to indicate that the location has been selected and associated info window should open above the map marker with additional information.

- **Asynchronicity and Error Handling** 
-- All data APIs used in the project should load asynchronously and errors should be handled gracefully. In case of error (e.g. in a situation where a third party API does not return the expected result) the webpage is to do one of the following:
1 A message is displayed notifying the user that the data can't be loaded
2 There are no negative repercussions to the UI.
*Note*: Errors should also be handled for if the browser has trouble initially reaching the 3rd-party site as well. For example, consider a user using this Neighborhood Map App, but the firewall prevents the user from accessing the Instagram servers.

##### Accessibility
- **Are images accessible?**
-- All content-related images include appropriate alternate text that clearly describes the content of the image.
- **Is focus used appropriately to allow easy navigation of the site?**
-- Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus.
- **Are site elements defined semantically?**
-- Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate ARIA roles are defined.

#### Dependencies
***
##### Packages
* [`creat-react-app`](https://github.com/facebookincubator/create-react-app)
* [`axios`](https://github.com/axios/axios)
* [`escapeRegExp`](https://www.npmjs.com/package/escape-regexp)

##### API
* [Google Maps API](https://cloud.google.com/maps-platform/)
* [Foursquare API](https://developer.foursquare.com/)


#### Design

* [Google Fonts](https://fonts.google.com/)
* [Cloudinary](https://cloudinary.com/)

#### Run the Niegborhood Map App
***

To start using this project follow these steps:
* Git clone this [repository](https://github.com/Negmah/P8-map.git) or download as .zip file
* install all dependencies with npm install
* Run a terminal window in the root folder
* Install project dependencies with:
```
npm install
```
* Start the development server with:
```
npm start
```
* Visit localhost:3000

**Service Worker**
`Create React App`, by default, includes a service worker. To enable it, run the application in production build mode.
* run build command by using:
```
npm run build
```
* cd into the build directory
* install static server in terminal:
```
npm install -g serve
```
* run it from terminal :
```
serve -s build
```
* visit localhost:5000

***
### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code.

![N|Solid](https://res.cloudinary.com/negmah/image/upload/v1535463972/Screenshot_10.png)

***
### CREDITS
**- [Header image credits: Gonçalo Nuno Neves](http://www.serradesintra.net/index.php/palacios-de-sintra/palacio-da-pena)**
**- [Palace of Sintra's original icon image](https://www.vectorstock.com/royalty-free-vector/portugal-palace-of-sintra-time-to-travel-travel-vector-19076087)**
**- [Mohamed Riaad | Udacity's Mentor](https://github.com/MOhammedRiaad/) - My source of truth and constant support**
**- [Mohamed Shawky Bayoumi](https://github.com/MohamedShawkyBayoumi) - My personal motivator and best friend**
**- Bycor Sanchez for not quitting on me! A very special thank you for teaching me a hard lesson about unidirectional data flow**