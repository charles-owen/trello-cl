const path = require('path');

module.exports = {
	entry: {
		Trello: {
			import: path.resolve(__dirname, 'index.js'),
			dependOn: ['Course', 'Users', 'Site']
		}
	}
}
