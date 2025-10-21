# 04_express_33828139 - Express Routing Lab (Week 4)

This application is a simple Node.js server built with the Express framework. It demonstrates the core routing capabilities of Express as required for Lab 4.

The project successfully implements:
* [cite_start]Basic static routes (e.g., `/`, `/about`, `/contact`, `/date`)[cite: 208, 299, 314, 317].
* [cite_start]A **parameterised route** (`/welcome/:name`)[cite: 359].
* [cite_start]A **chained handler** (`/chain`)[cite: 361].
* [cite_start]A route that **serves a static file** (`/file`)[cite: 362].

## Technologies Used

* **Node.js**: The JavaScript runtime environment.
* [cite_start]**Express.js**: The web framework used for the server and routing[cite: 213, 231].
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
    [cite_start]The server will be running at `http://localhost:8000`[cite: 260].

## Available Routes

The application is deployed on the university VM and is accessible at the base URL:
[cite_start]**`https://doc.gold.ac.uk/usr/201/`** [cite: 185, 423]

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

* `index.js`: The main server file. [cite_start]It imports Express, sets the port (8000), loads the routes, and starts the server [cite: 341-351].
* [cite_start]`routes/main.js`: Contains all the Express route handlers (e.g., `router.get(...)`) [cite: 327-337]. [cite_start]This file is imported by `index.js`[cite: 347].
* [cite_start]`a.html`: A static HTML file served by the `/file` route[cite: 362].
* [cite_start]`package.json`: Lists project dependencies (like Express)[cite: 237].
* [cite_start]`.gitignore`: Instructs Git to ignore the `node_modules` folder, as per lab instructions [cite: 381-382].