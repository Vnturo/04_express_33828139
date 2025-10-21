# Express Routing Lab — Week 4

Starter link (VM / course site)
- Base: https://www.doc.gold.ac.uk/usr/201/

If the app is deployed under that base URL, append the routes below to it. Locally the server runs on port 8000 (http://localhost:8000).

What this app is
- An app that demonstrates routing and the three extension tasks from the assignment:
  - Parameterised route: /welcome/:name
  - Chained handlers: /chain
  - Serving a static HTML file: /file
- Routes and logic are implemented in `main.js`. The server is started from `index.js`. `a.html` is served by the `/file` route.

All routes For My VM
- https://www.doc.gold.ac.uk/usr/201/  
- https://www.doc.gold.ac.uk/usr/201/about  
- https://www.doc.gold.ac.uk/usr/201/contact  
- https://www.doc.gold.ac.uk/usr/201/help  
- https://www.doc.gold.ac.uk/usr/201/welcome/:name  
  - Example: https://www.doc.gold.ac.uk/usr/201/welcome/Victor
- https://www.doc.gold.ac.uk/usr/201/chain  
- https://www.doc.gold.ac.uk/usr/201/file

Local equivalents (when running locally on port 8000)
- http://localhost:8000/  
- http://localhost:8000/about  
- http://localhost:8000/contact  
- http://localhost:8000/help  
- http://localhost:8000/welcome/:name  (e.g. /welcome/Victor)  
- http://localhost:8000/chain  
- http://localhost:8000/file

How to install and run (Windows) — clone from GitHub and run
1. Clone the repository:
   git clone https://github.com/Vnturo/04_express_33828139.git
2. Change into the project directory:
   cd 04_express_33828139
3. Install dependencies:
   npm install
4. Start the server:
   node index.js
5. Open a browser and visit:
   http://localhost:8000


Technologies used
- Node.js — runtime
- Express.js — web framework
- Node built-in module: path — used to build the absolute path for res.sendFile
- HTML — static file (`a.html`) served by `/file`

Notes
- The parameter route `/welcome/:name` uses `req.params.name`. Replace `:name` with the name you want to display.
- The `/chain` route demonstrates chaining: the first handler calls `next()` and the second sends the response.
- The `/file` route uses `res.sendFile(path.join(__dirname, 'a.html'))` so `a.html` must remain in the project root unless you change the path.
- If you want, I can add a `package.json` start script or change the app to serve static files from a `public/` folder.