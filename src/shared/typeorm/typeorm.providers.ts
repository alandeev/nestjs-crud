import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '123456',
        database: 'nestjsproject',
        entities: [__dirname + '/../../modules/**/typeorm/entities/*.js'],
        migrations: [__dirname + '/migrations'],
        synchronize: true,
      }),
  },
];
