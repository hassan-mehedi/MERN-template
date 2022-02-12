# MERN Template

To use this template, you must follow the steps below:

1. Clone the repository
2. Install dependencies using npm
    - First do `npm install` in the root directory
    - Then do `npm install` in the `client` directory
3. To only run the backend server, run
    - `npm start` in the root directory
4. To only run the frontend server, run
    - `npm run start` in the `client` directory
5. To run both servers, run
    - `npm run dev` in the root directory

## Prerequisites

You need to do the steps below to get the project up and running:

1. Create a MongoDB Atlas account
2. Create a MongoDB database
3. Copy the `mongodb://<username>:<password>@<host>:<port>/<database>` string
4. Create a config folder in the root directory
5. Create a `default.json` file in the config folder
    - In that file create a JSON object with the following property:
        - `mongoURI`: The URL to your MongoDB database
6. Create a `db.js` file in the root directory
    - In that file create a function that returns a MongoDB connection
    - If you want to know how to create a MongoDB connection then check out
      the [MongoDB connection](https://docs.mongodb.com/manual/reference/method/connect/)
      documentation

### Create an issue if you face any problem with the template
