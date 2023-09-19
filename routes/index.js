const controller = require('./controller/index');

module.exports = function (app) {
	// app.use("/", (req, res) => res.send("Search"));
	// app.use('/', (req, res) => res.send({ aaa: 'bb' }));
	app.use('/', controller);
};
