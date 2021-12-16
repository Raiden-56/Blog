import * as mongoose from 'mongoose';

mongoose.connection.on('error', err => {
    logError(err);
});

mongoose.connection.on('connec')

const Initialise = () => {
    mongoose.connect(process.env.mongourl, {
        index
    })
}