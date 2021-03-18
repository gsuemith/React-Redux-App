# Accessing the Marvel api
- [ ] To be able to access the Marvel api, you'll need to [create an account](https://developer.marvel.com/documentation/getting_started) and get both a public and private key.  

- [ ] Create a file called `.env` in the root (same folder as `package.json`) folder.

- [ ] In the file, export two constants as follows:
  - [ ] Replace the strings after the `=` with the keys from your marvel account.

```
REACT_APP_PUBLIC_KEY=your_public_key
REACT_APP_PRIVATE_KEY=your_private_key
```
- [ ] Note* No quotes, commas, or quotation marks

- [ ] !DO NOT RECORD API KEYS TO GITHUB! `.env` is already in the `.gitignore` file.  

### Alternatively, run the following in the project's root folder

```
echo "REACT_APP_PUBLIC_KEY=your_key;
REACT_APP_PRIVATE_KEY=your_key;" >> .env
```

Be sure to replace 'your_key' with the appropriate api keys or open the file and edit them.

# To get started run `npm i`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
