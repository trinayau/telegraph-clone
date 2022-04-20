const db = require('../dbConfig/init');

module.exports = class Post { 
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.author = data.author;
        this.content = data.content;
    };

    static get all() {
        
    }
}
