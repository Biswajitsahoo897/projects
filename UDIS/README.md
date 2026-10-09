# University Development Information System (UDIS)

A simple web-based **University Development Information System (UDIS)** developed using HTML, CSS, and JavaScript as part of a Software Engineering case study. The project demonstrates how a centralized web interface can organize university-related academic information and provide different dashboards for students, faculty, administrators, and Heads of Department (HOD).

## 📌 Project Overview

The University Development Information System aims to simplify common academic and administrative activities through a single web interface. It provides role-based dashboards to demonstrate how different university stakeholders can access relevant information and perform their respective tasks.

This project was developed as an academic prototype to demonstrate software engineering concepts, frontend development, system design, and practical implementation.

## 🎯 Objectives

- Develop a centralized interface for university information management.
- Provide separate dashboards for different user roles.
- Demonstrate student and course management.
- Provide interfaces for attendance and academic result management.
- Display university notices and academic information.
- Demonstrate software engineering principles through a working website prototype.

## ✨ Features

### 👨‍🎓 Student Dashboard
- View student profile information.
- View enrolled courses.
- Check attendance information.
- View academic results.
- Access timetable information.
- View university notices.

### 👨‍🏫 Faculty Dashboard
- Access faculty-related functionality.
- Mark student attendance.
- Enter student marks.
- Publish notices.

### 🛠️ Administrator Dashboard
- Add and manage student records.
- Manage course information.
- Access administrative reports.

### 📊 HOD Dashboard
- Access academic and departmental reports.
- View summarized information through the dashboard.

**Note:** These features are implemented as a frontend demonstration. They do not represent a fully deployed university management system.

## 🧰 Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure of the web pages |
| CSS3 | Styling, layout, and visual design |
| JavaScript | Application logic and user interactions |
| Browser Local Environment | Running the website prototype |

## 📂 Project Structure

The project contains three implementation files in the root directory, along with this README file.

```text
University-Development-Information-System/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

- **index.html** — Defines the website structure and interface.
- **style.css** — Contains the styling and layout.
- **script.js** — Handles interactions, demo login, dashboard functionality, and application logic.
- **README.md** — Provides project documentation and setup instructions.

## 🚀 Getting Started

You do not need to install any additional packages or configure a backend server to run the current prototype.

### Prerequisites

- A modern web browser such as Google Chrome, Microsoft Edge, or Firefox.
- The three project files: `index.html`, `style.css`, and `script.js`.

### Installation and Execution

**Step 1: Clone the repository**

Open a terminal and run:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual repository URL.

**Step 2: Open the project folder**

```bash
cd University-Development-Information-System
```

Use the actual folder name created when cloning your repository.

**Step 3: Run the website**

Open `index.html` in your web browser.

Alternatively, open the project folder in Visual Studio Code and use the Live Server extension.

No build process or package installation is required for the current static website prototype.

## 🔐 Demo Login Credentials

The prototype provides demonstration accounts for its four user roles.

| Role | Username | Password |
|---|---|---|
| Student | `student1` | `1234` |
| Faculty | `faculty1` | `1234` |
| Admin | `admin1` | `1234` |
| HOD | `hod1` | `1234` |

**Important:** Select the corresponding role on the login interface before signing in.

These credentials are intended only for demonstrating the prototype. They are not secure authentication credentials and must not be used in a production system.

## 🖥️ Application Workflow

The general workflow of the prototype is:

1. The user opens the website.
2. The user selects a role and enters the demo credentials.
3. The application displays the corresponding dashboard.
4. The user accesses the functionality available for that role.
5. The user interacts with the relevant interface, such as attendance, results, notices, or student management.

The application uses JavaScript to handle the demonstration workflows and interface interactions.

## 🏗️ System Design

The project is supported by the software engineering documentation prepared for the case study, including the following diagrams:

- **Data Flow Diagram (DFD):** Represents the flow of information through the system.
- **Use Case Diagram:** Describes the interactions between users and system functions.
- **Class Diagram:** Represents the proposed system classes and their relationships.
- **Sequence Diagram:** Illustrates interactions between participants over time.
- **State Machine Diagram:** Represents states and transitions in a selected workflow.
- **Communication Diagram:** Illustrates interactions and relationships between participating objects.

These diagrams help explain the system's design and intended behavior.

## 🧪 Testing

The prototype can be manually tested by performing the following checks:

- Verify that the login interface loads correctly.
- Test the provided demonstration credentials for each role.
- Check whether each role opens the appropriate dashboard.
- Navigate through the available pages and sections.
- Test attendance, marks, notices, and student management interactions.
- Check the website layout at different browser window sizes.
- Verify that the JavaScript functionality works as expected.

Testing results should be recorded after actually performing the tests. This README does not claim that every test has passed.

## ⚠️ Limitations

The current project is a frontend-oriented academic prototype with the following limitations:

- It does not use a backend server or database.
- Login credentials are demonstration values handled by the frontend.
- It does not provide production-grade authentication or authorization.
- Data entered during the session is stored in application memory and may disappear after refreshing the page.
- It is not intended to manage real university records.
- The current implementation does not provide persistent multi-user data storage.

## 🔮 Future Scope

The project can be extended with the following improvements:

- Integrate a backend using Node.js and Express.js.
- Connect a database such as MySQL or MongoDB.
- Implement secure authentication and role-based authorization.
- Store student records, attendance, and results persistently.
- Add course registration and academic record management.
- Generate downloadable academic reports.
- Implement notifications and announcements.
- Deploy the application to a suitable hosting platform.

These improvements would help evolve the prototype into a more complete university information management application.

## 🎓 Academic Context

**Project Title:** University Development Information System (UDIS)

**Subject:** Software Engineering

**Programme:** Bachelor of Technology (B.Tech)

**Purpose:** Academic case study and website prototype development.

The project demonstrates the application of software engineering concepts through requirements identification, system modeling, interface development, implementation, and testing.

## 👥 Project Contributors

Refer to the project report for the complete list of student contributors, registration numbers, institution details, and faculty information.

## 📄 License

This project was developed for academic and educational purposes. Reuse and distribution are subject to the repository owner's requirements and any applicable third-party licenses.

---

**University Development Information System (UDIS)**  
*Software Engineering Case Study*
