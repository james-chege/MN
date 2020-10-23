#### Key components

The key files and directories to look at are:
1. `middleware/`
2. `routes/`
2. `controllers/`
3. `utils/`

#### Middleware

When a request is received the aim is to invoke a controller function to process it. Before the controller function is
hit we have middleware to perform checks.

#### Routes

The routes directory is made up of routers named after the system entity they represent. All the routers are registered
to the application in `index.js`


#### Utils

The `utils/` directory defines functions that are used throughout the app to simplify code and separate concerns. 

### Installing packages

Ensure that you're on the root directory of this repository and run the following command.

```bash
$ yarn install
```

# Setup

1. Create a postgres database with name of your choice.
```bash c
createdb tickets -U postgres 
```

2. Copy .env.example to .env and edit the environment variables to match your computer's postgres credentials and the databases that you created.

3. Migrate the development database schema:
   ```bash
   yarn migrate
   ```
   To undo this step run:
   ```bash
   yarn migrate:undo
   ```
   
   Start express server.
   
   ```bash
   $ yarn start
   ```
   
   ## Screenshots
   
   - image 1
   ![image](https://user-images.githubusercontent.com/29597869/96986713-b25a3c80-152a-11eb-838c-65c9f9dae399.png)
   
   - image 2
   ![image](https://user-images.githubusercontent.com/29597869/96986750-bc7c3b00-152a-11eb-8d0c-6c341250287f.png)
   
   - image 3
   ![image](https://user-images.githubusercontent.com/29597869/96986774-c56d0c80-152a-11eb-8424-684135f4293d.png)
