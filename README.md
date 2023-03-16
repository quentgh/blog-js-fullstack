# Blog - Javascript - fullstack (en construction)

## Site créé avec React JS / Express JS / MongoDB

---

## Installation des outils et librairies

Installer NodeJS sur son poste de travail.

### Pour la partie Front-end :

- Installer ReactJS avec la solution "Create React App"

```bash
npx create-react-app my-app
```

puis aller dans le répertoire de travail :

    cd my-app

Installer le package npm pour React Router 

    npm install react-router-dom


Installer la librairie Axios

    npm install axios


Possible de faire un peu de ménage dans les fichiers installés par défaut par React create app, en supprimant :

- reportWebVitals.js (à retirer du package.json et du fichier index.js également)
- App.test.js
- setupTests.js
- logo.svg


On pourra ajouter par la suite une configuration "proxy" pour simplifier nos appels http en local - dans le package.json, ajouter :

```json
"proxy":"http://localhost:<choose_port>",
```


&nbsp;

### Pour la partie Back-end,

- Initialisation de notre server Node
```bash
npm init
```

- Installation du démon Node JS

```bash
npm install nodemon --save-dev
```

Vérifier la présence du paquet dans notre fichier package.json

  ```json
  {
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^2.0.21"
  },
  }
```

- Installer les librairies/frameworks suivants :
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

 - Vérifier qu'on a bien toutes ces dépendances dans notre fichier package.json

```json
{
  "dependencies": {
    "bcrypt": "^5.1.0",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^7.0.0",
    "morgan": "^1.10.0"
  }
  ```

On va également installer la librairie Axios

    npm install axios


On pourra aussi paramétrer nos scripts pour lancer notre serveur avec des commandes raccourcies :

    npm run dev

ou 

    npm run prod

- Ajouter le "type": "module" afin de pouvoir importer des modules dans notre code source avec la syntaxe :

    "import <module_name> from " <module_path> ";

&nbsp;

- Enfin, vérifier qu'on a un fichier package.json avec cette configuration :

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

On pourra mettre en place une arborescence pour nos différents scripts nodejs en reprenant une organisation de type MVC :

- ajouter dans le répertoire "src"
    - un dossier "controllers"
    - un dossier "routes"
    - un dossier "models"
    - un dossier "libs" (pour y mettre des composants fonctionnels éventuellement)