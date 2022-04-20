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
                let postData = await db.query('SELECT * FROM posts');
                let posts = postData.rows.map(p => new Post(p));
                resolve (posts);
            } catch(err) {

            }
        });
    };
  
    static findById(id) {
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`SELECT * FROM posts WHERE posts.id = $1;`, [ id ]);
            let post = new Post(postData.rows[0]);
            resolve (post);
            } catch(err) {
                reject('Post not found');
            }
        });
    };

    static async create(bookData) {
        return new Promise(async (resolve, reject) => {
            try {
         

            } catch(err) {

            }
        });
    };
}
