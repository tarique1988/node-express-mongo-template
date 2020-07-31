# Node-Express-Mongo Template

This is a simple template for a `Node-Express-Mongo` API development. Please read the usage section for details on how to use it.

## What's included

1. A barebones `Node-Express server` setup.
2. A model, controller, and route for `Template`.
   - models/Template.js
   - routes/template.js
   - controllers/template.js
3. A couple of `middlewares` for handling `async` functions and `custom errors`.
   - middlewares/asyncHandler.js
   - middlewares/errorHandler.js
4. A custom `Error Response` class.
5. Cross origin resource sharing (`CORS`)
6. `Morgan` - a logger middleware.
7. A basic `404` handler.

## Usage

> Step 1: Clone the repository

```bash
git clone <url>
```

> Step 2: CD into the folder

```bash
cd barebones
```

> Step 3: Install all dependencies

```bash
npm install
```

> Step 4: Create a .env file using your favorite code editor

```bash
code .env
```

> Step 5: `Copy paste` the following code in the `.env` file. _Please don't forget to replace dummy data with your app specific details._

```javascript
USER = username;
PASS = password;
HOST = clusterURI; // (e.g., yourclustername.zaittt.gcp.mongodb.net)
DB = database;
PORT = 30000;
```

> Step 6: Run the server

```bash
npm start # using node
```

OR

```bash
npm run dev # using nodemon
```

> Step 7: Visit http://localhost:3000/api/templates/ in your browser to test the server, or use curl

```bash
curl http://localhost:3000/api/templates/
```

> Step 8: Enjoy!

### Contributors

- Tarique Ali Mirza
  1. <sajmtam@gmail.com>
  2. <tarique1988@gmail.com>
