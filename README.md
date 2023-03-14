# JS - Full Stack - Project

## 00 - Consigne

- créer un site avec React JS / Express JS / MongoDB
- le site aura une page d'accueil qui affichera tous les articles des utilisateurs
- le site aura une navbar responsive pour naviguer entre les pages, avec un header et un footer
- un utilisateur peut s'authentifier (inscription puis connexion) et de manière persistance en utilisant un JWT token

- le site aura une page de profil pour chaque utilisateur, où :

    - les données de l'utilisateur seront affichées
    - l'utilisateur peut modifier ses informations
    - afficher tous les articles de l'utilisateur

- l'utilisateur peut créer des articles, un article consiste en :
    - un ID
    - un titre
    - un contenu
    - une image


## 01 - Livrable dans Github
- une branche par étape du projet (init, authent, navbar ...)
- une branche main dans lequel on ne push pas directement mais avec des PR que proposera le formateur
- faire un repo Github privé et ajouter le formateur comme contributeur

---
## 02 - Détail des étapes

&nbsp;

0. Initialiser Git + le repo local et le distant (Github)
1. Premier commit à faire dans une branche spécifique - "feature-init"
2. Initialiser les répertoires de travail pour la partie Front et la partie Back
3. Installer les différents outils et librairies (react, express, mongo...)
4. Conception de notre site web
5. Réalisation de notre site web
6. Tests et validation (mode itératif)

---

## Installation des outils et librairies

### Pour la partie Front-end :

- Installer ReactJS avec la solution "Create React App"
```bash
npx create-react-app my-app
```

et rentrer les différentes infos de notre projet (name, description...) ou laisser les champs par défaut,

puis aller dans le répertoire de travail :

    cd my-app

Installer le package npm pour React Router 

    npm install react-router-dom

il nous permettra de développer la fonctionnalité de navigation avancée sur notre site.

On va installer la librairie Axios qui nous permettra de faire des requêtes http (à la place de fetch par exemple)

    npm install axios


On peut aussi faire un peu de ménage dans les fichiers installés par défaut par React create app, supprimer :

- reportWebVitals.js (à retirer du package.json et du fichier index.js également)
- App.test.js
- setupTests.js
- logo.svg

et commencer à créer notre arborescence de fichiers :

- dans le répertoire "src"
    - un dossier "assets"
    - un dossier "components"
    - un dossier "utils"

Vérifier dans le fichier package.json que la ligne de script "start" est bien présente :

```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

On pourra ainsi lancer notre application ReactJS avec la commande
```bash
npm start
```

On pourra y ajouter par la suite une configuration "proxy" pour simplifier nos appels http en local

```json
"proxy":"http://localhost:<choose_port>",
```


&nbsp;

### Pour la partie Back-end,

- Installer Node JS (à télécharger depuis le site officiel)

- Créer notre fichier "index.js" à la racine du répertoire "back"

- Initialisation de notre server Node
```bash
npm init
```

- Installation du démon Node JS pour relancer le serveur automatiquement après chaque modifications de code

```bash
npm install nodemon --save-dev
```

On pourra vérifier la présence du paquet dans notre package.json

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

On peut éventuellement utiliser l'option " --save " pour inclure le paquet dans le package.json dans la section des dépendances
( Attention : option deprecated dans les dernières versions de nodejs a priori )


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

On va également installer la librairie Axios qui nous permettra de faire des requêtes http (à la place de fetch par exemple)

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

On pourra utiliser le programme MongoDB Compass pour disposer d'une IHM afin de visualiser et administrer notre base de données MongDB plus facilement,
et le programme Postman pour faire des requêtes http et solliciter nos APIs.

---

## Conception de notre site web
 
### 1. Créer la structure générale du site

[Front-end]

- Une page "Home" -> ajouter un composant Home/Home.jsx
- Une page "Profile" -> ajouter un composant Profile/Profile.jsx


### 2. Ajouter la barre de navigation responsive

[Front-end]

dans src/components/
- créer un composant "/NavBar/NavBar.jsx" avec nos différents liens vers nos pages : Home, Auth et Profile

! Il faudra importer le module "Link" dans la librairie "react-router-dom".
! Penser au reponsive avec intégration d'un "menu burger"

- créer un composant "/Footer/Footer.jsx"

Dans le composant App.js,
- mettre en place un composant "BrowserRouter" et y intégrer notre composant personnalisé "NavBar.jsx" et notre composant "Footer.jsx"

### 3. Créer le modèle de données pour MongoDB

[DB]

- créer une database "project_blog"
- créer une collection "users"
    - "users" avec un document de cette forme (schema) :

        ```json
        id (cette clé sera créer par mongodb)
        email [type string]
        username [type string]
        password [type string]
        articles (cette clé sera à importer de la collection "articles")

        + une option "timestamps"
        ```

- créer une collection "articles"
    - "articles" avec un document de cette forme (schema) :

        ```json
        id (créer par mongodb)
        title [type string]
        content [type string]
        image [type buffer]

        + une option "timestamps"
        ```
??? A préciser le type de clé pour gérer des images dans MongoDB, voici une exemple à creuser :
```json
img:
    {
        data: Buffer,
        contentType: String
    }
```

### 5. Mettre en place la base côté Back end

[Back-end]

Dans notre fichier principal index.js, mettre en place :

- la partie Middleware 
```json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());
app.use(morgan("combined"));
```

- la connexion à la base MongoDB

```json
port : 5002
url  : "mongodb://127.0.0.1:27017/project_blog"
```

On utilisera les routes suivantes pour joindre la backend et la base de données : 

```json
  "/users"
  "/articles"
```

Pour notre futur CRUD,

- ajouter les Routes / Models / Controllers

  - créer nos routes dans src/routes

- src/routes/users.js

```json
usersRouter.post("/subscribe", subscribe);
usersRouter.post("/login", login);
```

- src/routes/articles.js (todo)
   

  - créer les models dans src/models
      - users.js
      - articles.js

  - créer les controllers dans src/controllers
      - users.js
      - articles.js



### 6. Créer le module d'authentification utilisateur

[Back-end]

- créer les chemins pour inscrire ou authentifier un utilisateur

```json
"/subscribe"
"/login"
```

pour le parcours d'inscription, la backend devra inscrire en base de données les infos utilsateur avec un mot de passe chiffré (Bcrypt) et retourner à la front end :
- un email
- un username

pour le parcours de login, la backend devra retourner :
- un email
- un username
- un token (JWT)

avec une gestion des codes et messages d'erreur http pour informer l'utilsateur en cas de souci.

Une fois la partie backend en place, on peut tester les POST "subscribe" et "login" avec Postman.

[Front-end]

- Créer un composant /HOC/Cards/Cards.jsx
- Créer un composant /SubscribeForm/SubscribeForm.jsx
- Créer un composant /LoginForm/LoginForm.jsx

- On pourra créer des composants de type "ui" pour nos Button et nos Input de formulaire

dans src/components/pages/
- ajouter un composant Auth/Auth.jsx, y intégrer les composants Cards.jsx/ SubscribeForm.jsx / LoginForm.jsx
