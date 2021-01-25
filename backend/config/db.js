import mongoose from 'mongoose';

const connectDB = async () => {

    const mongoURI = process.env.MONGO_URI || 'mongodb+srv://tristan:tristan@cluster0.w1rfu.mongodb.net/videogames?retryWrites=true&w=majority';
    try {
        const conn = await mongoose.connect(mongoURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: true,
            useCreateIndex: true
        });

        console.log(`Mongo DB connected: ${conn.connection.host}`.cyan.underline);
    } catch (err) {
        console.error(`Error: ${err.message}`.red);
        process.exit(1);
    }
}

export default connectDB;