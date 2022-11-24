require('./config/mongoose.config');
require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const socket = require("socket.io");
const List = require("./models/zelda.model");

app.use(express.json());
app.use(cors({origin: ["http://localhost:3000", "https://the-master-list.onrender.com"]}));
// app.use(express.urlencoded({ extended: false }));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'), function(err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})

require('./routes/zelda.routes')(app);

const server = app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

const io = socket(server, {
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    console.log("New User:", socket.id);
    socket.on("deleteList", (payload) => {
        List.findOneAndDelete({_id: payload})
            .then((list) => io.emit("listDeleted", payload))
            .catch((err) => console.log("err", err));
    });
    socket.on("disconnect", (socket) => {
        console.log(`User: ${socket.id} left`);
    });
});