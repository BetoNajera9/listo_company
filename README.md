# Listo company API

_Technical backend testing for listo_

## Objectives

- Create repository on Github
- Create project locally using NestJS framework
- There must be connection to a database using MongoDB Atlas (Free plan, we don't want you to spend your money)
- Within the project you must develop the following methods to be able to manage the information of a company (The data or attributes that you handle the company model is your decision, be creative):
  - Query: reading data from all the companies registered in the database.
  - Query: reading data from a particular company (It must receive as parameter the \_id of the company).
  - Mutation: company creation (must be able to receive as parameters all mandatory and non-mandatory attributes).
  - Mutation: delete a particular company (Must be able to receive the \_id of the company). company)

## Beginning 🚀

_These instructions will allow you to get a copy of the project running on your local machine for development and testing purposes._

### Prerequisites 📋

_First it is necessary to create the .env file, and based on the .env.example to add the required environment variables_

_The following is the url for the test database:_

```env
DATABASE_URL="mongodb+srv://listo:D4j1uey8qvcaKzNh@listo.ctzylip.mongodb.net/listo"
```

### Installation 🔧

_You need to enter the project folder, then execute the following command_

```shell
npm run intall
```

_With this command you will install all the necessary dependencies for the project_

### Running 🆙

_To run the api it is necessary to execute the following command_

```shell
npm run start:dev
```

## Despliegue 📦

_For the deployment it is necessary to build the project with the following command:_

```shell
npm run build
```

_posteriormente se corre el projecto en modo de produccion con el siguiente comando_

```shell
npm run start:prod
```

## Built with 🛠️

- [Nestjs](https://nestjs.com/) - The framework used
- [npm](https://www.npmjs.com/) - Dependency handler
- [MongoDB](https://www.mongodb.com/es) - Database
- [Typescript](https://www.typescriptlang.org/) - Language
- [GraphQL](https://graphql.org/) - Query language

## Author ✒️

- **Roberto Miron Najera** - _Initial Work_ - [betonajera9](https://github.com/villanuevand)

## License 📄

This project is under the (MIT) License - see the [LICENSE](LICENSE) file for details.

---

⌨️ with ❤️ by [betonajera](https://github.com/BetoNajera9) 😊
