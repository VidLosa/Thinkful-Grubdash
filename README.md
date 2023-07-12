Project description: GrubDash
You've been hired as a backend developer for a new startup called GrubDash! As another developer works on the design and frontend experience, you have been tasked with setting up an API and building out specific routes so that the frontend developers can demo some initial design ideas for the big bosses.

For detailed instructions on how to complete this project, consult the Instructions document in the Qualified assessment interface.

Learning objectives
This project will test your ability to build APIs with complex validation. Before taking on this project, you should be comfortable with the learning objectives listed below:

Running tests from the command line
Using common middleware packages
Receiving requests through routes
Accessing relevant information through route parameters
Building an API following RESTful design principles
Writing custom middleware functions
GrubDash frontend
Although it isn't required, if you would like to see this project connected to a frontend application, visit the following repository:

Instructions on how to get the frontend application up and running are included in the repository.

alt GrubDash

Remember to sync this Qualified project with your local machine so that you can commit it to GitHub in the next lesson. After navigating to the Qualified assessment, you will be asked to choose if you want to solve the challenge using the web-based IDE or your own IDE. Select the Start in your IDE option and follow the instructions to connect Qualified to your local IDE.

Project setup
Follow the instructions below to get this project up and running on your own machine:

Download the Qualified assessment files to your computer.
Run npm install to install the project and run git init  to initialize a Git repository.
Running tests
To run the tests, you can run the following command: npm test

npm test
Tasks
In the src/dishes/dishes.controller.js file, add handlers and middleware functions to create, read, update, and list dishes. Note that dishes cannot be deleted.
In the src/dishes/dishes.router.js file, add two routes: /dishes and /dishes/:dishId. Attach the handlers (create, read, update, and list) exported from src/dishes/dishes.controller.js.
In the src/orders/orders.controller.js file, add handlers and middleware functions to create, read, update, delete, and list orders.
In the src/orders/orders.router.js file, add two routes: /orders and /orders/:orderId. Attach the handlers (create, read, update, delete, and list) exported from src/orders/orders.controller.js.
Anytime you need to assign a new id to an order or dish, use the nextId function exported from src/utils/nextId.js.
Steps to complete
To complete this project, you must do the following:

Write code that passes all the tests in the Qualified assessment in this lesson.
Write code that passes all of the requirements outlined below, and submit your GitHub repo link to the Thinkful team in the next lesson.
Requirements to pass
For your project to pass, all of the following statements must be true. These criteria are reflected in the rubric in the following lesson.

All tests are passing in Qualified.
All middleware and handler functions have a single responsibility and are named functions.
All data passed between middleware and handler functions uses response.locals.
All chained method calls on a route(...) end with all(methodNotAllowed).
All update handlers guarantee that the id property of the stored data cannot be overwritten.
