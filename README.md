# zipItApp
SPA which allows User to search and filter New England (Connecticut, Maine, Massachusetts, New Hampshire, Rhode Island or Vermont) city details under input search fields.

<h1>AngularJS Search Location Application</h1>

SPA which allows User to search and filter New England (Connecticut, Maine, Massachusetts, New Hampshire, Rhode Island or Vermont) city details under input search fields.

Results displayed in a table
Ascending/descending orderBy for Zip, City, State, Population
Bootstrap and ngAnimate Module to enhance UI (fade in)
Custom Google font integrated
Google Maps API integrated

<h2>Main Points</h2>

- zips.zip JSON object converted to array of JSON objects
- Angular scripts saved in scripts/ folder
- RESTful API created with Node.js and Express web server
- zips.html View page displays list of city data
- map.html View page displays google map via map-location directive in MapController.js
- zipsFactory.js gets place data by asynchronous $http AJAX call

- TODO: 'View Map' link binds selected city longitude and latitude values to map view. It the moment, the init map only retrieves a general area map view. Map markers can be added also.

<h2>Testing Pre-requisites:</h2>

<a href="http://nodejs.org">- Node.js and Express 4</a>
- npm install express
- Node Package Manager

Command prompt: <strong>node server.js</strong>
Now when you visit http://localhost:8080 from your web browser you will be able to use the application.
