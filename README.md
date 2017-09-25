https://code.angularjs.org/1.6.4/
https://docs.angularjs.org/guide/migration

1. Go to https://www.typescriptlang.org 
2. Install TypeScript CLI
    npm install -g typescript
3. Installing TypeScript on the project    
4. Append the package.json file as follows

    "scripts": {
    "start": "lite-server",
    "tsc": "tsc -p . -w"
  },

  Note the typescript and typings commands

  5. install typings for jquery, angular and angular-route (REVIEW)

    npm install @types/jquery --save-dev
    npm install @types/angular --save-dev
    npm install @types/angular-route --save-dev


6. Add a tsconfig file (tsconfig.json)

{
    "compilerOptions": {
        "target": "ES5",
        "module": "system",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "removeComments": false
    },
    "exclude": [
        "node_modules",
        "typings/main.d.ts",
        "typings/main"
    ]
}





