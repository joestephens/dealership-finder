# Dealership Finder

## Installation

You'll need to rename `.env.example` to `.env`. The application uses the Google Geocoding API to determine lat/lng coordinates from a given address, so you'll need to register for the Geocoding API and copy your key into the `.env` file.

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

## To Do

* [ ] "CONTINUE TO NEXT STEP" button and behaviour
* [ ] Tests for existing components
* [ ] Add a map to `StepOne`
* [ ] Select component
* [ ] SelectedDealership component
* [ ] CheckboxGroup component
* [ ] StepTwo form and Axios post request
