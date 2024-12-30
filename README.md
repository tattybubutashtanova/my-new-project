# TO DO App

## Description
This is the backend service for the **My To-Do App**, which provides RESTful API endpoints for managing tasks, including creating, retrieving, updating, and deleting tasks. The frontend is built using React and communicates with this Spring Boot backend.

---

## Frontend Information
- **GitHub Repository Link:** [Frontend Repo](https://github.com/tattybubutashtanova/backend-repo.git)
- **Deployed Frontend Link:** [Vercel Live Demo](https://my-new-project-cecu.vercel.app/)
- **YouTube Demo:** [How It Works - Frontend](https://youtu.be/_GiP5biiLs4)

---

## Backend Information
- **GitHub Repository Link:** [Backend Repo](https://github.com/tattybubutashtanova/backend-repo.git)
- **Deployed Backend Link:** [Railway API Endpoint](https://backend-repo-production-a6a1.up.railway.app/api/tasks)
- **YouTube Demo:** [How It Works - Backend](https://youtu.be/Aqi9MVsb1io)

---

## Features
- Create new tasks with a title, deadline, and priority.
- Retrieve all tasks with sorting and filtering capabilities.
- Edit tasks to update details like title or priority.
- Delete tasks when completed or no longer needed.
- Persistent task storage through the backend API.

---

## Technologies Used
### Frontend:
- React.js
- Axios for API communication
- LocalStorage for temporary data persistence

### Backend:
- Spring Boot
- H2 Database for local development
- REST API
- Railway for deployment

---

## Setup Instructions
### Backend
1. Clone the backend repository:
   ```bash
   git clone https://github.com/tattybubutashtanova/backend-repo.git
   cd backend-repo
   ```
2. Run the backend application:
   - **With Gradle:**
     ```bash
     ./gradlew bootRun
     ```
   - **With Maven:**
     ```bash
     ./mvnw spring-boot:run
     ```
3. Access the API at:
   ```
   http://localhost:8080/api/tasks
   ```

### Frontend
1. Clone the frontend repository:
   ```bash
   git clone https://github.com/tattybubutashtanova/backend-repo.git
   cd frontend-repo
   ```
2. Install dependencies and start the app:
   ```bash
   npm install
   npm start
   ```
3. Access the app at:
   ```
   http://localhost:3000
   ```

---

## Usage Instructions
1. Open the frontend application.
2. Add tasks by entering a title, selecting a deadline, and choosing a priority.
3. View all tasks fetched from the backend API.
4. Sort tasks by date or priority using the provided buttons.
5. Edit or delete tasks as needed.
6. Search for tasks using the search bar.

---

## Additional Information
### Testing Endpoints:
You can test the backend API using Postman or any other tool:
- **Get All Tasks:** `GET /api/tasks`
- **Create a Task:** `POST /api/tasks`
- **Update a Task:** `PUT /api/tasks/{id}`
- **Delete a Task:** `DELETE /api/tasks/{id}`

### Known Issues:
- API requires CORS settings to be enabled for localhost development.

### Contributors:
- **Tattybubu Tashtanova**
