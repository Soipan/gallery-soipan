var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://soipan:<password>@project1.mszv13b.mongodb.net/?retryWrites=true',
    development: 'mongodb+srv://soipan:<password>@project1.mszv13b.mongodb.net/?retryWrites=true',
    test: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
