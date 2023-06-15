# Pharmacy Management System

PMS is a pharmacy management system that helps in operating a pharmacy. The following project is suitable for student's project.

[Screenshot](./imgs/Screenshot%20from%202023-06-15%2011-50-23.png)


## Admin

Login

View, Update and Add medicine stock

View and Add pharmacists

[Screenshot](./imgs/Screenshot%20from%202023-06-15%2011-51-03.png)

[Screenshot](./imgs/Screenshot%20from%202023-06-15%2011-51-12.png)


[Screenshot](./imgs/Screenshot%20from%202023-06-15%2011-51-21.png)

## Pharmacists

Login

Add new patient

Add new hospitals from where the patient got the prescription

Add the physician details who attended the patient

Add the prescription of the patient

Admnister prescription to the patient

[Screenshot](./imgs/Screenshot%20from%202023-06-15%2011-53-23.png)

[Screenshot](./imgs/Screenshot%20from%202023-06-15%2011-53-30.png)

[Screenshot](./imgs/Screenshot%20from%202023-06-15%2011-53-34.png)

## Overall System data requirements

The following are the system data requirements-

### Pharmacist credentials
This is the pharmacist who runs the pharmacy. In one pharmacy, there can be many pharmacists.

### An admin user
This is the administrator of the system who adds the pharmacists and updates medicine inventory

### A customer
This is a customer who has some prescription from a hospital and wants to purchase medication.

### Medicine inventory
This is the stock of medicine that the pharmacy currently posses.



## Installation
### The Database
Download Mysql Workbench and a Mysql server to connect the database

Create a database named pms, then import the sql file to the database.

In the backend folder, create a dotenv file and set up the following
```
APP_PORT=4000
DB_PORT=3306
DB_HOST=localhost
DB_USER=root
DB_PASS=
MYSQL_DB=pms
KEY=
```

## The Backend
To run the backend first install all the npm dependencies

```
npm install
```

Then run the backend
```
npm start
```



## The Frontend
Install all the npm dependencies

```
npm install
```

Then run the frontend dev server
```
npm start
```
