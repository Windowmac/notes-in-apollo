const { connection, Note } = require('./db/connection');

const seed = async () => {
    await connection;
    const notes = [
        new Note({title: 'something', body: 'something else'}),
        new Note({title: 'downtown', body: 'hot'}),
        new Note({title: 'uptown', body: 'cool'})
    ];
    await Note.deleteMany({}).then(Note.insertMany(notes, (err) => console.log));

    const insertedNotes = Note.find({});
    console.log('inserted notes are: ', await insertedNotes);
    process.exit(1);
};

seed();
