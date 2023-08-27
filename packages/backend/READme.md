## Mavel Collector

## Description

Project Overview
This is a project for trading marvel comics

## Getting Started

### Dependencies

- npm, node, postgress, prisma , typescript are needed before installing program.

### Installing

1.  Clone the repo
    ```sh
    git clone https://github.com/chingu-voyages/v43-tier3-team-36
    ```
2.  Install node packages
    ```sh
    yarn install
    ```
3.  Create a .env file `.env` and update with env variables (check the .env.sample)

### Executing program

1. `yarn dev`
   Runs the app in the development mode.\

The page will reload when you make changes.\
You may also see any lint errors in the console.

<!-- 2. `npm run seeddb`
   seeds the database with users data.\   -->

0## Help

Any advise for common problems or issues.

### Generating types

yarn generate or yarn prisma generate

### How do I add a new migration?

For context, a migration is basically a file that is run to make changes to the existing database structure or schema. For example, adding a new column, making a column required/optional/unique, dropping a column, inserting data and more.

To create a new migration. Kindly follow the steps outlined below:

1. Create a migration and name it to suit what the migration will be doing. This is done by running

```bash
yarn migrate --{migration-name}
```

**NB: Change `{migration-name}` to the actual name of the migration. The name should represent the change you're making so it is readable. See the existing names in the `migrations` folder**

2. A new migration file will be created.
3. The content of the migration to be added will depend mainly on the task being done. [Here is a guide](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/using-prisma-migrate-typescript-postgres) which shows how to define the migration based on the specific task in question.
4. After the migration is properly defined, starting the server should run the new migration and effect the corresponding changes in the database.
