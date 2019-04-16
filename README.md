## Example Stuff

After Git Cloning or just copy and pasting these files into a directory...

- Replace index.html with the html file you have for your site
- Move any .js files you have over, and as long as they are in the root directory, they will be served and importable locally as expected
`<script type="text/javascript" src="./example.js"`
- Edit the mockData.json file to have the data you need to interact with. This may be a bit of work depending on what kind of data you have but it will be the easiest.
- Alternative is to use Firebase or a Cloud SQL database but then you will have to know a bit of Node.js 🎉
- See an example of how I target some of the data inside of the json inside of the /data route.
- To run this, open a command prompt, navigate to the directory that this folder is in, and then run "node server.js". See explanation below.

<p>You will need to install Node.js in order to run this. It is a simple installation, and you won't need to do ANYTHING other than run the installer.
(Just make sure the installer mentions "Adding Node.js to your environment variable/path").</p>

<p>Once Node.js is installed, you can node filename.js any javascript file and Node will attempt to run that file. Navigate command line to your project directory and node server.js</p>

<p>To view the website, navigate to browser and visit localhost:8080</p>

<p>Any time you change the code, you will need to Ctrl+C on the terminal and restart the application, then refresh the page to see them take effect.</p>