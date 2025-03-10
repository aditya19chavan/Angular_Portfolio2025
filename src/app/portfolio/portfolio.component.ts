import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 1,
      name: 'Streamline Supply Solution – End-to-End Material Supply Management System :',
      summary: 'Developed an Enterprise Procurement Management System to optimize procurement workflows, tender submissions,and quotation management for enterprise contractors.The system enhances collaboration, document management, and customer support through a seamless digital platform.',
      description: 'Designed and implemented a user-friendly interface using React.js for tender submissions, product information management,and procurement tracking.Developed secure and scalable REST APIs with Spring Boot for procurement operations.Structured the database using MySQL to efficiently manage tenders, quotations, documents, and procurement workflows.Integrated a quotation system and tender tracking module, enabling real-time status updates and improved decision-making,Implemented JWT-based authentication for secure role-based access control across all modules.',
      projectLink: 'https://github.com/aditya19chavan/Streamline_Supply_Solution.git',
      tags: [Tag.SPRINGBOOT, Tag.SPRINGJWT, Tag.FASTAPI, Tag.REACT, Tag.BOOTSTRAP, Tag.POSTMAN, Tag.HTML5, Tag.JAVA, Tag.MYSQL],
      pictures: ["../../assets/pro1_01.png", "../../assets/pro1_02.png", "../../assets/pro1_03.png", "../../assets/pro1_04.png", "../../assets/pro1_05.png", "../../assets/pro1_06.png", "../../assets/pro1_07.png","../../assets/pro1_08.png"]
    },
    {
      id: 2,
      name: 'MovieFlix - Full Stack Movie Streaming Platform',
      summary: 'A full-stack web application built with React.js and Spring Boot, allowing users to browse and manage movies fetched from a real-time API.',
      description: 'Movie Catalog – Fetches real-time movie data from the backend API ; Search & Filters – Allows users to search movies and filter by category, genre, or rating ; Watchlist Management – Users can save and manage favorite movies;  Responsive UI – Built with React.js and Bootstrap for an intuitive experience ; Backend API – Developed with Spring Boot, MySQL, and RESTful endpoints.Project Structure:  Backend (Spring Boot) : Controller: Handles API requests for movies, users, and authentication Service Layer: Implements business logic for movie management DAO Layer: Uses Spring Data JPA for database operations Entity & DTO: Defines movie, user, and category structures Exception Handling: Global exception handling using @ControllerAdvice  Frontend (React.js) Axios Integration: Fetches movie data from the backend API React Components: Displays movies, categories, and details dynamically State Management: Uses useState and useEffect hooks',
      projectLink: 'https://github.com/aditya19chavan/moviesflix-complete-project.git',
      tags: [Tag.REACT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP, Tag.JAVA, Tag.JDBC, Tag.LOMBOK, Tag.SPRINGBOOT,Tag.MYSQL],
      pictures: ["../../assets/pro2_01.png", "../../assets/pro2_02.png"]
    },
    {
      id: 3,
      name: 'Angular Portfolio App',
      summary: 'A responsive and dynamic portfolio website designed and developed by Aditya Chavan.',
      description: 'This portfolio is a dynamic and responsive web application built using Angular, showcasing my skills and projects as a software developer. The design and development of this portfolio aimed to provide a seamless user experience across different devices while highlighting various aspects of my professional journey. The potfolio has sections of home, about, education, portfolio projects and contact information. Key features are its dynamic content, the responsive design and modern aesthetics.',
      projectLink: 'https://github.com/barbaracalderon/angular-portfolio-app',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP],
      pictures: ["../../assets/portfolio_01.png", "../../assets/portfolio_02.png", "../../assets/portfolio_03.png", "../../assets/portfolio_04.png", "../../assets/portfolio_05.png"]
    },
    {
      id: 4,
      name: 'Doctor-Patient Registration System (MERN Stack, MongoDB, Express.js, React.js, Node.js) :',
      summary: "Developed a full-stack web application for doctor and patient registration using the MERN stack.",
      description: "Implemented a RESTful API with Express.js and MongoDB to handle CRUD operations for doctors and patients.Built a React.js frontend with React Router for navigation, featuring components for viewing, adding, updating, and deleting patient records. Integrated Mongoose ORM for seamless database interaction and CORS middleware for cross-origin requests.Ensured scalability and maintainability with modular routing and component-based architecture.Used Nodemon for backend development and React Router for client-side routing.",
      projectLink: 'https://github.com/barbaracalderon/dou-rest-api',
      tags: [Tag.NODEJS, Tag.MONGODB, Tag.REACT, Tag.EXPRESSJS, Tag.JAVASCRIPT,Tag.POSTMAN],
      pictures: ["../../assets/", "../../assets/", "../../assets/"]
    },
    {
      id: 5,
      name: 'Rock paper scissors Game',
      summary: 'The classic Rock Paper Scissors game, recreated using JavaScript, HTML5, and CSS3, allowing users to play against the computer.',
      description: "This is a simple Rock Paper Scissors game built using HTML, CSS, and JavaScript. The game allows users to choose between Rock, Paper, and Scissors, while the computer makes a random selection. The results are displayed dynamically, updating the scores and showing whether the user won, lost, or if it was a draw. The game was developed as a fun project to enhance frontend development skills and JavaScript programming. Additional features such as animations and sound effects were considered but not implemented due to time constraints.",
      projectLink: 'https://github.com/aditya19chavan/Game1.git',
      tags: [Tag.JAVASCRIPT, Tag.HTML5, Tag.CSS3],
      pictures: ["../../assets/pro5_01.png", "../../assets/pro5_02.png"]
    },
    {
      id: 6,
      name: 'TourPackage Booking API',
      summary: 'Spring Boot application for Tour Package Booking using REST API',
      description: "MySQL database for backend. Create 'TourPackage' as an entity having attributes like packageId, packageName, duration, price, transportationType. -- CRUD Operations",
      projectLink: 'https://github.com/aditya19chavan/TourPackage-CRUD-using-springboot.git',
      tags: [Tag.JAVA, Tag.SPRINGBOOT, Tag.SPRINGJWT, Tag.MYSQL,  Tag.POSTMAN, Tag.JDBC, Tag.RESTAPI],
      pictures: ["../../assets/pro6_01.png", "../../assets/pro6_02.png", "../../assets/pro6_03.png","../../assets/pro6_04.png"]
    },
   


  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('BC | Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
