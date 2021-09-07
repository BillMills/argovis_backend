module.exports = {
  db: {
    production:  process.env.MONGODB_URI || 'mongodb://localhost/goship',
    development: 'mongodb://127.0.0.1:27017/goship',
    docker: 'mongodb://database/goship',
    test: 'mongodb://127.0.0.1:27017/goship-express-test',
    REMOTE_DB: 'mongodb+srv://testUser:xES57KuTWkYi3zb0@cluster0.nh95z.mongodb.net/goship-express-test', //atlas db
    jg: 'mongodb://127.0.0.1:27017/JG'
  },

  startDate: {
    production: 'yesterday',
    development: '2017-12-20',
    docker: 'yesterday',
    test: '2018-11-10',
    travis_test: '2018-11-10',
    jg: '2017-12-20',
  }
};
