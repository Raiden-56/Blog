import * as functions from './functions';
import * as mongoose from 'mongoose';

mongoose.connection.on('error', err => {
    console.log('[Database]: Error');
    console.log(('[Failed]:'), 'Database');
});

mongoose.connection.on('connecting', (par) => {
    console.log('Connecting...');
});

mongoose.connection.on('connected', () => {
    console.log(('[Connected]:'), 'Database');
    functions.Role.init();
});

const Initialise = () => {
    mongoose.connect(process.env.mongourl, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }  as mongoose.ConnectOptions);
}

export default {
    Initialise,
    ...functions
}