# RecoveryRoomBeds
Simple app managing recovery beds for a hospital

## Installation Instructions

For Mac

1. Make sure you have node and npm installed:

`brew install npm`

This installs a package manager for javascript. This is similar to homebrew but works only for javascript development packages.

2. Checkout this repo:

`git clone https://github.com/aspanu/RecoveryRoomBeds.git`

and then cd into it:

`cd RecoveryRoomBeds`

3. Time to use npm to install a bunch of dependencies we need. These dependencies are already specified in package.json, so you just need to install them:

`npm install`

4. We need to create the actual javascript file which will run against this. That is, we need to 'compile' our React to html and JS which will be displayed. So let's do that:

`NODE_ENV=production node_modules/.bin/webpack -p`

This should create all of the transpiled JS into a file called 'bundle.js'. The project is already set up to look for that.

5. Now we just need to run the HTTP server serving our webpage to get this running:


