## Migrations

Histórico de tudos que está sendo feito no banco de dados.


## ETAPAS
- npm init -y: criar package.json
- npm install express typescript
- npm install @types/express ts-node-dev-D
- tsc --init: criar tsconfig.json
- "strict": false no tsconfig.json
- criar pasta src
- criar arquivo src > server.ts
- "dev": ts-node-dev src/index.ts no package.json
  ### DATABASE
- npm install typeorm reflect-metadata sqlite3 --save
- criar pastas src > database > migrations
- criar arquivo src > database > migrations > index.ts com: 
  
  ```ts 
  import { createConnection } from "typeorm";

  createConnection();
  ```

- criar arquivo ormconfig.json na raiz do projeto com:
  
  ```json 
  {
    "type": "sqlite",
    "database": "./src/database/database.sqlite",
    "migrations": ["./src/database//migrations/**.ts"],
    "cli": {
      "migrationsDir": "./src/database/migrations"
    }
  }
  ```
- dentro de package.json criar o script: 
  ```json
   "scripts": {
     "dev": "ts-node-dev src/server.ts",
     "typeorm": "ts-node-dev node_modules/typeorm/cli.js"
   }
  ```

Esse script não rodou, solução: **npx typeorm migration:create -n NomedaMigration**

- crie a tabela na migration criada
```ts 
  import {MigrationInterface, QueryRunner, Table} from "typeorm";

  export class createsettings1618963447759 implements MigrationInterface {

      public async up(queryRunner: QueryRunner): Promise<void> {
          await queryRunner.createTable(
              new Table({
                  name: "settings",
                  columns: [
                      {
                          name: "id",
                          type: "uuid",
                          isPrimary: true
                      },
                      {
                          name: "username",
                          type: "varchar"
                      },
                      {
                          name: "chat",
                          type: "boolean",
                          default: true
                      },
                      {
                          name: "updated_at",
                          type: "timestamp",
                          default: "now()"
                      },
                      {
                          name: "created_at",
                          type: "timestamp",
                          default: "now()"
                      }                       
                  ]
              })

          )
      }

      public async down(queryRunner: QueryRunner): Promise<void> {
          await queryRunner.dropTable("settings");
      }

  }
```

- rode *npm run typeorm migration:run*

