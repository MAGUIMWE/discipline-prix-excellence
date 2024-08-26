
import * as dotenv from 'dotenv'
dotenv.config()
import { DataSource } from "typeorm"
import { entities } from './entities'

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () =>{
            const dataSource = new DataSource({
                type:'mysql',
                host:'localhost',
                port: 3306,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                entities:entities,
                synchronize:true
            });
            return dataSource.initialize()
        }
    }
]