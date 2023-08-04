const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/mydb';

/** Mongo DB Connection */
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected successfully to server');
        // perform database operations here
    })
    .catch(err => {
        console.error(err);
    });


/** Create a Collection */

/** First step Schema Creation */
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

/** Second Step. Installation that schema our creation Model */
const User = mongoose.model('User', userSchema);


/** Get all Data */


User.find()
    .then(docs => {
        console.log(docs);
    })
    .catch(err => {
        console.error(err);
    });


// Create a document for your data
const user = new User({
    name: 'Alice',
    age: 25,
    email: 'alice@example.com'
});

user.save()
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error(err);
    });

/** Insert Single Documents into Column */

const user = {
    name: 'test',
    age: 70,
    email: 'test@gmail.com'
};

User.create(user).then((docs) =>{
    console.log(docs);
}).catch((err) => {
    console.error(err);
});


/** Multiple Data insert the Column */
const multipleUser = [
    {
        name: "Alice",
        age: 25,
        email: 'alice@example.com'
    },
    {
        name: "Bob",
        age: 30,
        email: 'bob@example.com'
    },
    {
        name: "Charlie",
        age: 35,
        email: 'charlie@example.com'
    },
    {
        name: "datainsert",
        age: 49,
        email: 'datainsert@example.com'
    },
];

User.insertMany(multipleUser).then((docs) => {
    console.log(docs);
}).catch((err) => {
    console.log(err);
});


/** Update One. Single Documents Update */

const filter = { name: 'test' };
const update = { age: 71 };

User.updateOne(filter, update)
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error(err);
    });


/** Update Many Documents */

const filter = { age: 25 };
const update = { name: "changesonce" };

User.updateMany(filter, update)
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error(err);
    })

/** Delete Document */

const filter = { age: 71 };

User.deleteOne(filter)
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.error(err);
    })

/** Delete Many Document */

User.deleteMany(filter)
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error(err);
    });


/** Find the Document */

/** Find Method */

User.find(filter)
    .then(docs => {
        console.log(docs);
    })
    .catch(err => {
        console.error(err);
    })

/** Findonce Method */

User.findOne(filter)
    .then(docs => {
        console.log(docs);
    })
    .catch(err => {
        console.log(err);
    })

/** FindbyId method */

const filterid = { _id : "64cc9fb2b7b1dad2def48577" }

User.findById(filterid)
    .then(docs => {
        console.log(docs);
    })
    .catch(err => {
        console.error(err);
    });


/** Find Id Delete */

User.findByIdAndDelete("64cca7600ddce1000830e8e7")
    .then(docs => {
        console.log(docs);
    })
    .catch(err => {
        console.error(err);
    })


/** Find Id Remove */

User.findByIdAndRemove("64cca7600ddce1000830e8e6")
    .then(docs => {
        console.log(docs);
    })
    .catch(err => {
        console.error(err);
    })

/** Find id using Update data */

User.findByIdAndUpdate("64cca7600ddce1000830e8e5", { age : 31 },{ new: true })
    .then(docs => {
        console.log(docs);
    })
    .catch(err => {
        console.error(err);
    })

