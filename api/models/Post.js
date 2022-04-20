const db = require('../dbConfig/init');
const Post = require('./Post');

module.exports = class Post { 
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.author = data.author;
        this.content = data.content;
    };

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                let 
            } catch(err) {

            }
        });
    };
}
