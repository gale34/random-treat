module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/random-treat'
        : '/',
    outputDir: 'docs'
}