# Lista Telefônica - Phone Directory Application

> A comprehensive contact management system built with AngularJS and Node.js/Express, designed to demonstrate modern web application architecture with a responsive frontend and RESTful backend API.

[![AngularJS](https://img.shields.io/badge/AngularJS-1.x-red?style=flat-square)](https://angularjs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-3.x-blue?style=flat-square)](https://getbootstrap.com/)
[![Node.js](https://img.shields.io/badge/Node.js-12.x+-green?style=flat-square)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-lightgrey?style=flat-square)](https://expressjs.com/)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [API Documentation](#api-documentation)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Overview

Lista Telefônica is a full-stack contact management application that demonstrates modern web development practices. Users can create, read, update, and delete contacts while managing multiple phone numbers and associating contacts with telecommunications operators. The application showcases the integration of a single-page application (SPA) built with AngularJS with a Node.js/Express backend API.

**Primary Use Case**: Manage a phonebook/contact list with operator information and advanced filtering capabilities.

## Features

- ✅ **Contact Management**: Add, edit, view, and delete contacts
- ✅ **Phone Numbers**: Manage multiple phone numbers per contact
- ✅ **Operator Selection**: Associate phone numbers with telecommunications operators
- ✅ **Filtering**: Search and filter contacts by name and other criteria
- ✅ **Responsive UI**: Bootstrap-based responsive design
- ✅ **REST API**: Full-featured RESTful API backend
- ✅ **Real-time Updates**: Dynamic data binding with AngularJS
- ✅ **Icon Support**: Font Awesome icons for enhanced UX

## Technology Stack

### Frontend
- **AngularJS 1.x**: JavaScript MVC framework for building dynamic single-page applications
- **Bootstrap 3.x**: Responsive CSS framework for styling and layout
- **Font Awesome**: Icon library for UI elements
- **Angular Route**: Client-side routing for navigation between views

### Backend
- **Node.js**: JavaScript runtime environment
- **Express 4.x**: Lightweight web application framework
- **CORS**: Cross-Origin Resource Sharing middleware for frontend-backend communication

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js**: Version 12.x or higher (check with `node --version`)
- **npm**: Version 6.x or higher (comes with Node.js, check with `npm --version`)
- **Modern Web Browser**: Chrome, Firefox, Safari, or Edge (ES6 support recommended)
- **Git**: For cloning the repository (optional)

## Installation

Follow these steps to set up the project locally:

### 1. Clone or Download the Project

```bash
# Clone the repository
git clone <repository-url>
cd EstudoAngular

# Or download the ZIP file and extract it
```

### 2. Install Backend Dependencies

```bash
# Navigate to the project root
cd EstudoAngular

# Install Node.js dependencies for the backend
npm install
```

This will install all required packages listed in `package.json`, including Express and CORS middleware.

### 3. Verify Installation

```bash
# Check that Node.js modules are installed
ls node_modules/

# Verify key dependencies
npm list express
npm list cors
```

## Running the Application

### Step 1: Start the Backend Server

```bash
# From the project root directory
node node/contatosBackend.js
```

You should see output similar to:
```
Server running on port 3000
```

The backend API will be available at `http://localhost:3000`.

### Step 2: Access the Frontend Application

1. Open your web browser
2. Navigate to: `http://localhost:3000`
3. The application will load, and you can start managing contacts

### Step 3: Using the Application

**List Contacts**
- The home page displays all contacts in a searchable list
- Use the search box to filter contacts by name or other criteria

**View Contact Details**
- Click on a contact to view complete details including all phone numbers and operators

**Add New Contact**
- Click the "Novo Contato" (New Contact) button
- Fill in the contact information and phone details
- Select the appropriate operator for each phone number
- Click "Salvar" (Save) to create the contact

**Edit Contact**
- Click on a contact and select "Editar" (Edit)
- Modify the contact details and phone numbers
- Click "Salvar" to update

**Delete Contact**
- Click on a contact and select "Excluir" (Delete)
- Confirm the deletion

## Project Structure

```
EstudoAngular/
├── index.html                 # Application entry point (HTML template)
├── js/                        # Frontend JavaScript files
│   ├── app.js                # AngularJS application initialization
│   ├── controllers/           # AngularJS controllers
│   │   ├── contatosController.js      # Contacts list controller
│   │   ├── novoContatoController.js   # Add new contact controller
│   │   └── detalhesController.js      # Contact details controller
│   ├── services/              # AngularJS services
│   │   ├── contatosAPIService.js      # Contacts API communication
│   │   └── operadorasAPIService.js    # Operators API communication
│   ├── filters/               # Custom AngularJS filters
│   ├── config/
│   │   └── routeConfig.js    # Application routing configuration
│   └── value/
│       └── configValue.js    # Application configuration values
├── css/                       # Stylesheets (Bootstrap and custom styles)
├── lib/                       # Third-party libraries
│   ├── angular/               # AngularJS library files
│   ├── bootstrap/             # Bootstrap framework files
│   └── font-awesome/          # Font Awesome icon library
├── node/                      # Backend Node.js files
│   ├── contatosBackend.js    # Express server and API endpoints
│   ├── package.json           # Node.js dependencies and configuration
│   └── dados/                 # Data storage (if applicable)
└── README.md                  # This file
```

### Key Directories Explained

- **`js/`**: Contains all AngularJS application code organized by concern (controllers, services, routing)
- **`js/controllers/`**: Contains controller classes that manage application logic and view state
- **`js/services/`**: Contains service classes that handle API communication and data management
- **`lib/`**: Contains third-party libraries (AngularJS, Bootstrap, Font Awesome)
- **`node/`**: Contains the Express backend server and related Node.js code

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Web Browser                               │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │            AngularJS Frontend (SPA)                   │  │
│  │                                                       │  │
│  │  ┌─────────────────────────────────────────────────┐ │  │
│  │  │              Views (HTML/Templates)             │ │  │
│  │  │  - contatosView.html (Contact List)             │ │  │
│  │  │  - novoContatoView.html (Add Contact)           │ │  │
│  │  │  - detalhesView.html (Contact Details)          │ │  │
│  │  └─────────────────────────────────────────────────┘ │  │
│  │                       ↑ ↓                              │  │
│  │  ┌─────────────────────────────────────────────────┐ │  │
│  │  │          Controllers (Business Logic)           │ │  │
│  │  │  - contatosController                           │ │  │
│  │  │  - novoContatoController                        │ │  │
│  │  │  - detalhesController                           │ │  │
│  │  └─────────────────────────────────────────────────┘ │  │
│  │                       ↑ ↓                              │  │
│  │  ┌─────────────────────────────────────────────────┐ │  │
│  │  │         Services (API Communication)            │ │  │
│  │  │  - contatosAPIService                           │ │  │
│  │  │  - operadorasAPIService                         │ │  │
│  │  └─────────────────────────────────────────────────┘ │  │
│  │                                                       │  │
│  │  ┌─────────────────────────────────────────────────┐ │  │
│  │  │      Routing ($routeProvider)                   │ │  │
│  │  │  - /contatos (List)                             │ │  │
│  │  │  - /novoContato (Add)                           │ │  │
│  │  │  - /detalhesContato/:id (Details)               │ │  │
│  │  └─────────────────────────────────────────────────┘ │  │
│  └──────────────────────────────────────────────────────┘  │
│                    HTTP/AJAX Requests                       │
└────────────────────────────┬────────────────────────────────┘
                             │ HTTP
                             ↓
┌─────────────────────────────────────────────────────────────┐
│              Express Backend Server (Node.js)                │
│              Running on http://localhost:3000                │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │            API Routes & Controllers                   │  │
│  │  - GET /api/contatos                                 │  │
│  │  - POST /api/contatos                                │  │
│  │  - GET /api/contatos/:id                             │  │
│  │  - PUT /api/contatos/:id                             │  │
│  │  - DELETE /api/contatos/:id                          │  │
│  │  - GET /api/operadoras                               │  │
│  │  - POST /api/operadoras                              │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │         Data Layer (JSON/Database)                    │  │
│  │  - Contacts data store                                │  │
│  │  - Operators data store                               │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Design Pattern: MVC

The application follows the **Model-View-Controller (MVC)** architectural pattern:

- **Model**: Data services (`contatosAPIService`, `operadorasAPIService`) that manage application data
- **View**: HTML templates and Bootstrap-styled components that display data to users
- **Controller**: AngularJS controllers that handle user interactions and manage view state

### Client-Side Routing

AngularJS routing (`angular-route.js`) provides client-side navigation without page reloads:

- Routes are configured in `js/config/routeConfig.js`
- Each route maps to a controller and template
- The `$routeProvider` handles URL changes and view switching

### Service Layer

Services handle all HTTP communication with the backend API:

- **contatosAPIService**: Manages contact CRUD operations
- **operadorasAPIService**: Manages operator data retrieval and management
- Both use Angular's `$http` service for HTTP requests

## API Documentation

The backend provides a RESTful API for contact and operator management:

### Base URL
```
http://localhost:3000/api
```

### Contacts Endpoints

#### Get All Contacts
```http
GET /api/contatos
```

**Response** (200 OK):
```json
[
  {
    "id": 1,
    "nome": "João Silva",
    "telefone": [
      {
        "numero": "1199999999",
        "operadora_id": 1
      }
    ]
  }
]
```

#### Get Contact by ID
```http
GET /api/contatos/:id
```

**Response** (200 OK):
```json
{
  "id": 1,
  "nome": "João Silva",
  "telefone": [
    {
      "numero": "1199999999",
      "operadora_id": 1
    }
  ]
}
```

#### Create New Contact
```http
POST /api/contatos
Content-Type: application/json
```

**Request Body**:
```json
{
  "nome": "Maria Santos",
  "telefone": [
    {
      "numero": "1188888888",
      "operadora_id": 2
    }
  ]
}
```

**Response** (201 Created):
```json
{
  "id": 2,
  "nome": "Maria Santos",
  "telefone": [
    {
      "numero": "1188888888",
      "operadora_id": 2
    }
  ]
}
```

#### Update Contact
```http
PUT /api/contatos/:id
Content-Type: application/json
```

**Request Body**:
```json
{
  "nome": "Maria Santos Silva",
  "telefone": [
    {
      "numero": "1188888888",
      "operadora_id": 2
    },
    {
      "numero": "1177777777",
      "operadora_id": 1
    }
  ]
}
```

**Response** (200 OK):
```json
{
  "id": 2,
  "nome": "Maria Santos Silva",
  "telefone": [
    {
      "numero": "1188888888",
      "operadora_id": 2
    },
    {
      "numero": "1177777777",
      "operadora_id": 1
    }
  ]
}
```

#### Delete Contact
```http
DELETE /api/contatos/:id
```

**Response** (204 No Content):

### Operators Endpoints

#### Get All Operators
```http
GET /api/operadoras
```

**Response** (200 OK):
```json
[
  {
    "id": 1,
    "nome": "Vivo",
    "categoria": "Móvel"
  },
  {
    "id": 2,
    "nome": "Claro",
    "categoria": "Móvel"
  }
]
```

#### Create New Operator
```http
POST /api/operadoras
Content-Type: application/json
```

**Request Body**:
```json
{
  "nome": "Tim",
  "categoria": "Móvel"
}
```

**Response** (201 Created):
```json
{
  "id": 3,
  "nome": "Tim",
  "categoria": "Móvel"
}
```

### Error Responses

All endpoints may return error responses:

**404 Not Found**:
```json
{
  "erro": "Recurso não encontrado"
}
```

**400 Bad Request**:
```json
{
  "erro": "Dados inválidos"
}
```

**500 Internal Server Error**:
```json
{
  "erro": "Erro interno do servidor"
}
```

## Configuration

### API Configuration

API endpoints and configuration values are managed in `js/value/configValue.js`:

```javascript
app.value('config', {
  apiURL: 'http://localhost:3000/api'
});
```

Modify the `apiURL` value to point to a different backend server if needed.

### Routing Configuration

Application routes are configured in `js/config/routeConfig.js`:

```javascript
app.config(function($routeProvider) {
  $routeProvider
    .when('/contatos', {
      templateUrl: 'views/contatosView.html',
      controller: 'contatosController'
    })
    .when('/novoContato', {
      templateUrl: 'views/novoContatoView.html',
      controller: 'novoContatoController'
    })
    .when('/detalhesContato/:id', {
      templateUrl: 'views/detalhesView.html',
      controller: 'detalhesController'
    })
    .otherwise({
      redirectTo: '/contatos'
    });
});
```

### Backend Server Configuration

The Express server configuration is in `node/contatosBackend.js`:

- **Default Port**: 3000
- **CORS Enabled**: Allows frontend and backend communication
- **Static Files**: Served from the project root

To change the port, modify the port variable in `node/contatosBackend.js`:

```javascript
const port = 3000; // Change this value
```

## Troubleshooting

### Backend Server Won't Start

**Problem**: `node: command not found` or `Error: Cannot find module 'express'`

**Solution**:
1. Verify Node.js is installed: `node --version`
2. Install npm dependencies: `npm install`
3. Ensure you're in the project root directory
4. Try again: `node node/contatosBackend.js`

### Port Already in Use

**Problem**: `Error: listen EADDRINUSE: address already in use :::3000`

**Solution**:
- Option 1: Stop the application currently using port 3000
- Option 2: Change the port in `node/contatosBackend.js` and update `js/value/configValue.js` with the new API URL

### CORS Errors

**Problem**: "Access to XMLHttpRequest has been blocked by CORS policy"

**Solution**:
- Ensure the backend server is running
- Verify the API URL in `js/value/configValue.js` matches your backend URL
- Check that CORS is enabled in `node/contatosBackend.js`

### Frontend Not Updating After Changes

**Problem**: Changes to JavaScript files don't appear in the browser

**Solution**:
1. Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
2. Perform a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
3. Restart the backend server

### AngularJS Not Loading

**Problem**: Page shows raw HTML, no interactivity

**Solution**:
1. Open browser console (F12)
2. Check for JavaScript errors
3. Verify `lib/angular/angular.js` file exists
4. Ensure `index.html` correctly references all required libraries
5. Check that the backend server is serving static files correctly

### Blank Contact List

**Problem**: No contacts are displayed

**Solution**:
1. Open browser developer tools (F12) and check the Network tab
2. Verify the API request to `http://localhost:3000/api/contatos` returns data
3. Check backend console for errors
4. Ensure the backend has contact data initialized

## Contributing

Contributions are welcome! To contribute to this project:

1. **Fork the repository** on GitHub
2. **Create a feature branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** following the existing code style and conventions
4. **Test your changes** thoroughly in both the frontend and backend
5. **Commit your changes** with clear, descriptive messages:
   ```bash
   git commit -am 'feat: add new feature description'
   ```
6. **Push to your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request** with a detailed description of your changes

### Code Style Guidelines

- Follow the existing code style and patterns in the project
- Use meaningful variable and function names
- Add comments for complex logic
- Test your changes on multiple browsers
- Ensure the application works on both desktop and mobile browsers

### Reporting Issues

If you find a bug, please create an issue on GitHub with:
- A clear, descriptive title
- Detailed steps to reproduce the issue
- Expected vs. actual behavior
- Environment details (OS, browser, Node.js version)

## License

This project is provided as-is for educational and learning purposes. You are free to use, modify, and distribute this code.

**Original References**:
- AngularJS: https://angularjs.org/
- Node.js: https://nodejs.org/en/
- Bootstrap: https://getbootstrap.com/
- Express: https://expressjs.com/

---

**Questions?** If you have any questions about the project, feel free to open an issue or contact the project maintainers.

**Happy coding!** 🚀
