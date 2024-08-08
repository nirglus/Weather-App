# 🌤️ Weather App

Welcome to the Weather App! This project, developed for **Fintek Digital**, allows you to check the weather around the world using a simple and intuitive interface.

![צילום מסך 2024-08-08 170719](https://github.com/user-attachments/assets/48fa287e-bbd2-4be6-bc58-21aa48d94b37)

## 🗂️ Project Structure

The project is divided into two main folders:

- **Client**: The frontend of the application built with React.
- **Server**: The backend of the application built with Node.js and Express.

## 🚀 Getting Started

To get started with this project, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/nirglus/Weather-App.git
cd weather-app
```

### 2. Install Dependencies
You need to install the dependencies for both the client and server:

Client:

```bash
cd Client
npm install
```

Server:

```bash
cd ../Server
npm install
```

### 3. Add Environment Variables
Create a .env file in both the client and server directories. Use the following templates:

Client .env Template:
```bash
VITE_API_URL=http://localhost:2000/api/weather
```

Server .env Template:

```bash
API_KEY = (contact me for the key)
API_BASE_URL = http://api.weatherapi.com/v1
```
### 4. Run the Application

Open two integrated terminals to run the client and server separately:
### Terminal 1: Run the Client

```bash
cd Client
npm run dev
```
### Terminal 2: Run the Server

```bash
cd Server
npm start
```

Your application should now be running locally! 🎉

### 🛠️ Technologies Used
## Frontend:

- React
- Vite

## Backend:

- Node.js
- Express
- WeatherAPI

## 📜 License
This project is licensed under the MIT License.

`nirglus` `https://github.com/nirglus/Weather-App`
