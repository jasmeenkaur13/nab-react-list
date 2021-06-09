# nab-react-list

## Install

```sh
$ npm install 
or 
yarn

```

## Test

npm test

## Run

1. yarn Start
2. Clone the repo https://github.com/jasmeenkaur13/sample-fetch-accestype.git
3. Follow the instructions and start the server
4. On the Web Page Login using any User Name and Password. The access type can be determined from Overview section.
5. Enter Details
6. Click on Login Button

## Areas Of Improvement
1. Use of Typescript could have made it more readable and scalable.
2. Storybook could have been set up Implementation can help testing the component integration properly.
3. Use of styled Components across the project can give more readablity.
4. Use of sessionStorage or local storage to maintain the session of a user for a limited time.
5. Use of proper API data - currently a static list has been passed to component.

## Overview.
1. Tried to show the known variance of css and its inclusion with the help of normal css classes and styled components as well.
2. Creates a dummy API to return the Accesstype and on the basis of which list data and permissions are handled
3. There are 5 access types:
    admin - Can see and work on any request - username - 1
    readonly - can only see the request
    jira - Can see and work on JIRA request - username -3
    confluence - Can see and work on Confluence request - username -2
    pay advice - Can see and work on Pay Advice request - username -4