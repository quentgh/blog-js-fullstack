# Blog - Javascript - fullstack

### Work in progress - the authentication module with JWT works

Tools : React JS / Express JS / MongoDB

---

## Install

- Install NodeJS

### Front-end :

- Install ReactJS - we use "Create React App" here.

```bash
npx create-react-app my-app
```

- Go to your repo :

    cd my-app

Install "React Router" package with NPM

    npm install react-router-dom


Install Axios

    npm install axios


It's possible to clean some files :

- reportWebVitals.js (remove from package.json and index.js)
- App.test.js
- setupTests.js
- logo.svg


- Add "proxy" config, into package.json, add this line :

  ```json
  "proxy":"http://localhost:<choose_port>",
  ```


&nbsp;

### Back-end,

- Server node initialization :
```bash
npm init
```

- Install Node JS demon

```bash
npm install nodemon --save-dev
```

- then check the package.json :

  ```json
  {
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^2.0.21"
  },
  }
  ```

- Install libraries

- Express
```bash
npm install express --save
```

  - Mongoose
```bash
npm install mongoose --save
```

  - Morgan
```bash
npm install morgan --save
```

  - JWT
```bash
npm install jsonwebtoken --save
```

  - Bcrypt
```bash
npm install bcrypt --save
```

- Check the package.json

  ```json
  "dependencies": {
      "bcrypt": "^5.1.0",
      "express": "^4.18.2",
      "jsonwebtoken": "^9.0.0",
      "mongoose": "^7.0.0",
      "morgan": "^1.10.0"
    }

    ```

- Install Axios
```bash
npm install axios
```


- Update the script line in order to load the node server with these commands :

```bash
npm run dev
```
and

```bash
npm run prod
```

  ```json
  "scripts": {
    "prod": "node index.js",
    "dev": "nodemon index.js"
  },
  ```

- Add "type": "module"

&nbsp;

- Here we have the target package.json file :

  ```json
  {
  "name": "back",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "prod": "node index.js",
    "dev": "nodemon index.js"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^2.0.21"
  },
  "dependencies": {
    "bcrypt": "^5.1.0",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^7.0.0",
    "morgan": "^1.10.0"
  }
  }
  ```
