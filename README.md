# Inventory Management System

This is a full-stack Inventory Management System with a Django backend and a React frontend.

## Features

- User authentication with JWT (login/signup)
- CRUD operations for products
- Protected API endpoints
- Search and pagination for products
- Colorful and responsive UI with TailwindCSS

## Project Structure

```
/
├── backend
│   ├── api
│   ├── backend
│   ├── manage.py
│   └── requirements.txt
└── frontend
    ├── public
    ├── src
    ├── package.json
    └── tailwind.config.js
```

## Setup and Installation

### Backend (Django)

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Create a virtual environment:**
    ```bash
    python -m venv venv
    ```

3.  **Activate the virtual environment:**
    -   On Windows:
        ```bash
        venv\Scripts\activate
        ```
    -   On macOS/Linux:
        ```bash
        source venv/bin/activate
        ```

4.  **Install the dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

5.  **Create a MySQL database:**
    -   Create a new database in MySQL named `inventory`.
    -   Update the `.env` file in the `backend` directory with your MySQL database credentials.

6.  **Run the database migrations:**
    ```bash
    python manage.py migrate
    ```

7.  **Start the backend server:**
    ```bash
    python manage.py runserver
    ```

    The backend will be running at `http://127.0.0.1:8000`.

### Frontend (React)

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install the dependencies:**
    ```bash
    npm install
    ```

3.  **Start the frontend development server:**
    ```bash
    npm start
    ```

    The frontend will be running at `http://localhost:3000`.

## Deployment

### Cloning from GitHub

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```

2.  **Follow the setup instructions for the backend and frontend as described above.**

### Downloading as a Zip File

1.  **Extract the zip file.**

2.  **Follow the setup instructions for the backend and frontend as described above.**
