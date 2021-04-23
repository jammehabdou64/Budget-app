const mongose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDatabase = async () => {
  try {
    const connect = await mongose.connect(
      db,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      },
      (err) =>
        !err
          ? console.log("Database connected succesfully")
          : console.log(err.message)
    );
    return connect
      ? console.log(`Mongodb Connected : ${connect}`)
      : console.log("Mongodb connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDatabase;
