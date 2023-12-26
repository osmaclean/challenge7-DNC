interface KnexConfig {
  client: string;
  connection: {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
  };
}

const knexConfig: KnexConfig = {
  client: "mysql2",
  connection: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "c4y0m4cl34n",
    database: "desafio_7",
  },
};

export default knexConfig;
