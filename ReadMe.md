# 04_express_33828139 - Express Routing Lab (Week 4)

This application is a simple Node.js server built with the Express framework. It demonstrates the core routing capabilities of Express as required for Lab 4.

The project successfully implements:
* Basic static routes (e.g., `/`, `/about`, `/contact`, `/date`).
* A **parameterised route** (`/welcome/:name`).
* A **chained handler** (`/chain`).
* A route that **serves a static file** (`/file`).

## Technologies Used

* **Node.js**: The JavaScript runtime environment.
* **Express.js**: The web framework used for the server and routing.
* **`path` (Node.js module)**: Used to construct an absolute file path for serving `a.html`.

## How to Install and Run Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Vnturo/04_express_33828139.git](https://github.com/Vnturo/04_express_33828139.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd 04_express_33828139
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the server:**
    ```bash
    node index.js
    ```
5.  **View in browser:**
    The server will be running at `http://localhost:8000`.

## Available Routes

The application is deployed on the university VM and is accessible at the base URL:
**`https://doc.gold.ac.uk/usr/201/`**

The following routes are available:

| Route | Method | Description |
| :--- | :--- | :--- |
| `/` | `GET` | Displays the "Hello World!" home page. |
| `/about` | `GET` | Displays the "About" page. |
| `/contact` | `GET` | Displays the "Contact" page. |
| `/date` | `GET` | Displays the current date and time. |
| `/welcome/:name` | `GET` | (Extension Task) Displays a welcome message with the provided name. (e.g., `/welcome/Victor`) |
| `/chain` | `GET` | (Extension Task) Demonstrates a chained route handler using `next()`. |
| `/file` | `GET` | (Extension Task) Serves the static `a.html` file using `res.sendFile()`. |

## Project Structure

* `index.js`: The main server file. It imports Express, sets the port (8000), loads the routes, and starts the server.
* `routes/main.js`: Contains all the Express route handlers (e.g., `router.get(...)`). This file is imported by `index.js`.
* `a.html`: A static HTML file served by the `/file` route.
* `package.json`: Lists project dependencies (like Express).
* `.gitignore`: Instructs Git to ignore the `node_modules` folder, as per lab instructions.