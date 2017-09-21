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

`node_modules/.bin/http-server src/static`

This should now set up a server on http://localhost:8080 which should display the current status of things.


## For additional development

1. After changes are made in any source component files, we need to recreate the bundle.js. So we can do this with the same command as above:

`NODE_ENV=production node_modules/.bin/webpack -p`

This checks the webpack.config.js config file and does what it tells it to do in there to create the bundle.js file.

2. We can then re-run the http server to pick up the newest changes:

`node_modules/.bin/http-server src/static`

Note: I am going to be working on an auto-refresh mechanism *soon*, as manually doing these two steps is pretty annoying.

Note: I have found that Chrome auto-caches js files annoyingly. So if you are doing this dev with Chrome, you will need to do a complete page refresh (cmd+shift+r) to reload the new bundle.js after restarting the http server. 

If there is anything else, please feel free to reach out to me.
