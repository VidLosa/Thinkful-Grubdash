# GrubDash
Welcome to my GrubDash repository! This project serves as the backend implementation for the GrubDash startup.

# Learning Objectives
This project assesses my ability to build APIs with complex validation. By completing this project, I must demonstrate the following learning objectives:

Running tests from the command line
Using common middleware packages
Receiving requests through routes
Accessing relevant information through route parameters
Building an API following RESTful design principles
Writing custom middleware functions

# API Endpoints
### Dishes

GET /dishes: Get a list of all dishes.

GET /dishes/:dishId: Get a specific dish by its ID.

POST /dishes: Create a new dish.

PUT /dishes/:dishId: Update an existing dish by its ID.

### Orders

GET /orders: Get a list of all orders.

GET /orders/:orderId: Get a specific order by its ID.

POST /orders: Create a new order.

PUT /orders/:orderId: Update an existing order by its ID.

DELETE /orders/:orderId: Delete an existing order by its ID.

### Data Manipulation
The API uses response.locals to pass data between middleware and handler functions.
The nextId function from src/utils/nextId.js is used to assign new IDs to orders and dishes.

## Project Structure
The project is organized as follows:

src/dishes/dishes.controller.js: Contains handlers and middleware functions to create, read, update, and list dishes.

src/dishes/dishes.router.js: Defines routes for dishes and attaches the corresponding handlers.

src/orders/orders.controller.js: Contains handlers and middleware functions to create, read, update, delete, and list orders.

src/orders/orders.router.js: Defines routes for orders and attaches the corresponding handlers.

src/utils/nextId.js: Contains the nextId function used to generate new IDs.
