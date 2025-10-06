interface DbConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: 'postgres' | 'mysql' | 'sqlite';
}

interface Config {
  development: DbConfig;
  test: DbConfig;
  production: DbConfig;
}

const config: Config = {
  development: {
    username: 'postgres',
    password: 'MYSQL382002',
    database: 'quiqflow_traning',
    host: 'localhost',
    dialect: 'postgres',
  },
  test: {
    username: 'postgres',
    password: 'MYSQL382002',
    database: 'quiqflow_traning',
    host: 'localhost',
    dialect: 'postgres',
  },
  production: {
   username: 'postgres',
    password: 'MYSQL382002',
    database: 'quiqflow_traning',
    host: 'localhost',
    dialect: 'postgres',
  },
};

export default config;
