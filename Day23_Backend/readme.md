To Install:

npm i cors
npm i express
npm i jsonwebtoken
npm i bcrypt
npm i dotenv
npm i nodemon
npm i mongodb
npm i mongoose

folder Structure:
    |- main.js
    |- .env
    router
        | - authRoutes.js
    controllers
        | - authControllers.js
    models
        | - userModel.js
    config
        | - db.js
    utils
        | - jwt.js
    middlewares

procedures:
    1. inside main.js
    ------> require express, make app, listen to port, port will come from .env
    ------> app.get('/', (req, res)=>{res.send("app is running")})
    ------> require router, require controllers, require models, require config, require utils, require middlewares
            (test if app is running)

    2. 
    --------> make variables for db connection in .env
    -------->make db connection in db.js and rquire it in main.js
    (start the app --> test if the connection is working: there should be an error amd the connection call back should print "-----db connected---------" )

    3. inside authController.js
    -->makea signup function and export it
    --> inside  siqnup function , send response as "..in progress"

    4. inside authRoutes.js
    --------> make a router inside authRoute.js
    --------> add a post handler on '/signup' route with sign
    --------> export the router and import it in main.js
    --------> attach the router on app at route "/api/v1/auth"
    --------> test the app by sending a post request to "/api/v1/auth/signup" with postman POST-> http://localhost:1400/api/v1/auth/signup

    5. go to frontend and past the connection
    --------> make a hook
    --------> which does a simple call of api
    --------> use that hook in signup page
    5. Go to frontend and test the connection
    --> make a hook
    --> which does a simple call of api
    --> use that hook in signUp page on signUp button click
    --> and check if the response is "in progress..."

    6. inside main.js
    --> allow cors

    7. inside frontend 
    --> do validation
    --> send data in body for signUp

    8. inside main.js
    --> app.use(express.json()) (this should be written just after the app variable)

    9. inside authController.js
    (the model is pending)
    --> get the body and verify if the body is coming or not

