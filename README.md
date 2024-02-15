
# EmployWise Fullstack Project
## Using SpringBoot as backend, React as frontend and Mongodb as nosql

Welcome to the EmployWise. It is based on SpringBoot, React, and Mongodb.
![Screenshot (44)](https://github.com/Ishi2001/EmployWise-Full-Stack/assets/71957301/e456dd9a-a9aa-4ec5-929c-ac131730c6eb)

![Screenshot (43)](https://github.com/Ishi2001/EmployWise-Full-Stack/assets/71957301/b330849d-ad58-4513-bb23-28976593e3db)

### Programming lasnguage Used
Java SpringBoot, React.js and nosql


![Screenshot (45)](https://github.com/Ishi2001/EmployWise-Full-Stack/assets/71957301/1e9182a2-5c08-4b5d-9501-3d1f09f0965e)

## Configure MongoDB
1. Create a database in your MongoDB instance.
2. Update the application.properties file in the src/main/resources folder with the URL, username and password for your MongoDB instance. The table schema for the Employ will be created for you in the database.
## Build and run the sample
1. mvnw package
2. Open a web browser to http://localhost:8081

As you add and update employ in the app you can verify the changes in the database through the MongoDB.
## Employ Properties
Each Employ has the following properties:

1. id (String): Unique identifier for the Employ.
2. Employ name (String): Name of the Employ.
3. Gmail (String): Gmail of the Employ.
4. Mobile: Mobile number of the Employ.
5. Reportto:It the relation between Employ and manager.


Implemented the following endpoints:

1. POST /Employs: Create a new Employ.
2. GET /Employs/{id}: Retrieve a Employ by its ID.
3. GET /Employs: Retrieve a list of all Employs.
4. PUT /Employs/{id}: Update an existing Employ by its ID.
5. DELETE /Employs/{id}: Delete a Employ by its ID
## Links
https://github.com/Ishi2001/EmployWise-Full-Stack/tree/my-new-branch

The project is in my-new-branch.
## Features
- EmployWise  will add the Employ
- EmployWise  will update the Employ
- EmployWise  will delete the Employ
- If EmployWise is completed toggle on complete button it will show complition status
- It also handle the error
![Screenshot (47)](https://github.com/Ishi2001/EmployWise-Full-Stack/assets/71957301/c6eec592-1c2a-4685-a273-647aadd11038)
![Screenshot (48)](https://github.com/Ishi2001/EmployWise-Full-Stack/assets/71957301/a9be099b-ea6e-4476-b9ff-2b23dae0bd28)

