# TypeScript
### Starting
- You must install typescript in your PC (Refer to any youtube video)
- Make a `index.ts` file , this is basically your typescript file
- Run the command `tsc --init`, it will make a `tsconfig.json` file
    - Inside the `tsconfig.json` file you can make changes but let it be
- `tsc` is a compiler to convert typescript into javascript 
- When we run command `tsc` it converts all of `.ts` files to `.js` files

#### Day 1

- Typescript is the superset of javascript
- Types by inference
- Interface & Type
- Type are used for union of more primitive types or interfaces

#### Day 2

- Create a `index.ts` file by command `touch index.ts`
- Now you can compile it using `tsc` and then run the respective javascript file but that is a lot 
- In this case the `tsconfig.json` file will help us 
- In order to segregate all the files what we could do is to uncomment `"outDir": "./"` and `"rootDir": "./"`
- All out `.ts` files will be in the `./src` while all the `.js` file we will get in `./dist`

- Run the commands to set the Express server:
```
npm init -y
npm i express
npm i -D typescript @types/node @types/express
npm i nodemon
npm i ts-node
```

- Inside the package.json file made the following changes or replace the existing scripts with this
```
  "scripts": {
    "start": "node ./dist/index.js",
    "dev": "nodemon ./src/index.ts",
    "build":"tsc -p ."
  }
```

- Now upon executing `npm run dev` we will have out `index.ts file running`
- On executing `npm run build` we will get the `./dist` folder with all the javascript files in it

