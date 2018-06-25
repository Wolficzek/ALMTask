import {Client} from 'pg';

const client = new Client({
    user: 'wilq',
    host: 'localhost',
    database: 'zadanie',
    password: '',
    port: 5432,
});
client.connect();

export default {
    query: (text, params) => client.query(text, params)
};
