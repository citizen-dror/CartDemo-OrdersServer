# CartDemo - Orders Server  

A **Node.js service** for handling orders, including:  
- Placing new orders  
- Retrieving existing orders  

## Overview:
- A backend server built with **Express.js** that interacts with **Amazon OpenSearch**  (formerly Elasticsearch) for managing data, including **read** and **write** operations.
- The system is integrated with **AWS ECS** and **Fargate** containers for scalable cloud deployment.
- The frontend is a React application hosted on **Amazon S3**, which calls the backend for data operations.

### Key Technologies & Libraries:
- `express` – Server framework
- `uuid` – Generates unique order IDs
- `dotenv` – Environment variable management
- `cors` – Handles cross-origin requests from the client
- `express-validator` – Server-side validation

### Features:
- Basic validation system including:
  - Required field checks for orders
  - Email format validation
  - Length validation for first name and last name fields
- Automatic calculation of the **total order amount**
- JSON versioning for each order

### Cloud Infrastructure:
- **Deployed in Docker containers** on **Amazon ECS**
- Utilizes **AWS Fargate** for container orchestration and management
- **Auto-scaling** enabled, allowing for automatic scaling of instances based on traffic and load
- **Client-side** React app hosted on **Amazon S3**, making API calls to the backend server hosted on ECS.


## Related Repository  
- Check out the client application: [CartDemo-Client](https://github.com/citizen-dror/CartDemo-Client)  
- Products Server : [CartDemo-ProductsServer](https://github.com/citizen-dror/CartDemo-ProductsServer/)
