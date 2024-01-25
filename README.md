# Template GraphQL

Architecture afin de commencer tous projet avec GraphQL en ESM.

## Description

Infrastructure App : Express,  
Linter : ESLINT sous AIRBnB + utilisation de double quotes,  
BDD : POSTGRESQL avec PG,    
Test : JEST et SUPERTEST,  
Validation de données : JOI,  
Logger: WINSTON et WINSTON DAILY ROTATE FILE,  
Doc API : SWAGGER 
Template de vue: EJS 

## Commencer

### Mise en place

Depuis le répository, NE PAS le cloner mais plutôt sélectionner "Use this template" en haut à droite. 

### Installation
```bash
  npm install
```
Ne pas oublier de créer un fichier .env à la racine du projet (cf. .env.example)


## Aide

Si vous êtes utilisateur de Windows, vous devez installer CROSS ENV
```bash
  npm install --save-dev cross-env
```
Il permet de faciliter la lecture des environnement NODE dans le script.

Vous devez ensuite modifier le script test comme cela:
```bash
  "test": "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest",
```

## Authors

Romuald Patfoort alias Sulumor