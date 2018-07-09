# Dealership Finder

You can view on Heroku [here](https://dealership-finder.herokuapp.com/). **Note:** The "Search" button doesn't work on the production environment - the environment variable containing the Google API key isn't configured correctly / compiling into the source. It does work correctly when using locally.

## Installation

You'll need to rename `.env.example` to `.env`. The application uses the Google Geocoding API to determine lat/lng coordinates from a given address, so you'll need to register for the Geocoding API and copy your key into the `.env` file. This key should be URL restricted, as it will show in the compiled source.

```js
git clone git@github.com:joestephens/dealership-finder.git
cd dealership-finder
npm install
npm start
```

To view the component library:

```js
npx styleguidist server
```

## Approach

I decided on `create-react-app` as time was restricted and I wanted to spend the time writing code, not configuring Webpack, Babel, dotenv etc. 

Then when I had the basic boilerplate set up, I installed [react-styleguidist](https://github.com/styleguidist/react-styleguidist). This acted as a sandbox for developing new components, with the added benefit of documentation.

Once I had coded some basic components and the Location Picker, I brought these together in a `StepOne` component. `StepOne` is responsible for the latitude/longitude state - I made it the responsibility of its parent component `App` to look after the state for the selected dealership, as this would later need to be passed into a `StepTwo` component.

All notifications to the user are handled by `react-toastify` - this was a time saving decision allowing me to focus on more important app functionality.

Lat/lng is logged out to the console to demonstrate capability, as the mock dealership data presented doesn't use this in any way.

## To Do

* [ ] Fix environment variable on Heroku
* [ ] "CONTINUE TO NEXT STEP" button and behaviour
* [ ] Tests for existing components
* [ ] Add a map to `StepOne`
* [ ] Select component
* [ ] SelectedDealership component
* [ ] CheckboxGroup component
* [ ] StepTwo form and Axios post request
* [ ] Media queries for desktop view
