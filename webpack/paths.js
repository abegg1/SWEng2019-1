const path = require('path');

const paths = {
    asset: 'dist/asset',
    dist: 'dist',
    src: 'src'
};

module.exports = {
    cssFolder: path.resolve(__dirname, '../', `${paths.asset}/css`),
    entryPath: path.resolve(__dirname, '../', `${paths.src}/index.jsx`),
    fontsFolder: path.resolve(__dirname, '../', `${paths.asset}/font`),
    imagesFolder: path.resolve(__dirname, '../', `${paths.asset}/image`),
    jsFolder: path.resolve(__dirname, '../', `${paths.asset}/js`),
    outputPath: path.resolve(__dirname, '../', paths.dist),
    root: path.resolve(__dirname, '../'),
    templatePath: path.resolve(__dirname, '../', `${paths.dist}/index.html`)
};
