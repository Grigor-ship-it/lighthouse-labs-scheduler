=========
# Interview Scheduler

## About the Project

!["Screenshot of created appointment"](https://github.com/Grigor-ship-it/lighthouse-labs-scheduler/blob/master/Screenshots/front.png?raw=true)
!["Screenshot of creating appointment"](https://github.com/Grigor-ship-it/lighthouse-labs-scheduler/blob/master/Screenshots/second.png?raw=true)
!["Screenshot of deleting appointment"](https://github.com/Grigor-ship-it/lighthouse-labs-scheduler/blob/master/Screenshots/third.png?raw=true)

Using the latest tools and techniques, we build and test a React application that allows users to book and cancel interviews. We combine a concise API with a WebSocket server to build a realtime experience.

User is able to Select different days and time slots to schedule and appointment with any of the selected interviewers available for that day.

App has built in feature which will notify users if an interview is not properly saved/edited/deleted to avoid problems regarding bookings.



## Project Setup


1. Follow instructions in README.md @ (https://github.com/lighthouse-labs/scheduler-api) to create mock DB server and to seed the database.
2. Run the server: `npm start`
  - Note: nodemon is used, so you should not have to restart your server
3. Visit `http://localhost:8000/`

## Warnings & Tips

- Cypress and Test files are included for testing purposes.
- Custom Hooks are seperated in their own hooks path.
- Helper functions are also seperated in their own file src/helpers.

## Roadmap

Web socket server currently not implemented. Upon implementation, app will allow for further communication between student and interviewer.

## Dependencies

  - @babel/core": "^7.4.3
  - @storybook/addon-actions": "^5.0.10
  - @storybook/addon-backgrounds": "^5.0.10
  - @storybook/addon-links": "^5.0.10
  - @storybook/addons": "^5.0.10
  - @storybook/react": "^5.0.10
  - @testing-library/jest-dom": "^4.0.0
  - @testing-library/react": "^8.0.7
  - @testing-library/react-hooks": "^5.1.2
  - babel-loader": "^8.0.5
  - node-sass": "^4.14.0
  - prop-types": "^15.7.2
  - react-test-renderer": "^16.9.0