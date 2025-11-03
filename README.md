# test

A minimal Gradle project with a Spring Boot REST backend and a Node.js frontend.

## Project Structure

- `backend/` - Spring Boot application with a REST endpoint
- `frontend/` - Node.js frontend application

## Requirements

- Java 17 or later
- No need to install Gradle or Node.js separately (handled by Gradle wrapper and Node.js plugin)

## Building the Project

To build both backend and frontend:

```bash
./gradlew build
```

## Running the Application

### Start the Backend

```bash
./gradlew :backend:bootRun
```

The backend server will start on `http://localhost:8080` with the REST endpoint available at `/api/hello`.

### Start the Frontend

In a separate terminal:

```bash
./gradlew :frontend:start
```

The frontend server will start on `http://localhost:3000`.

### Using the Application

1. Open your browser and navigate to `http://localhost:3000`
2. Click the "Fetch Hello World" button
3. The message "hello, world" from the backend API will be displayed

## API Endpoints

- `GET /api/hello` - Returns "hello, world"