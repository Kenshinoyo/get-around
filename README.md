# Get Around App

- Blog site in development using JavaScript for the front-end and Java for the back-end.
- Application utilizes a RESTful API for data management and class components for UX features and CRUD functionality
- Front-end to back-end communication is established via a "service" component that utilizes multiple fetch calls
- Application is redux-enabled for scalability. Provides the option to apply reducers and actions for larger data/state management


**Component Structure**
- Each component is comprised of a localized state object that contains varying attributes depending on role
- The user is allowed to manipulate the state through the implementation of "handler functions" that are responsible for altering the individual attributes of the state object

**STRETCH GOALS**
- Refactor components to functional structure to make them more efficient, and allow them to be more modular through increased access to hooks
- Implement a search bar
