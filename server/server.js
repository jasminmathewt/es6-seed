import path from 'path';
import Express from 'express';

var app = Express();
var server;

const PATH_STYLES = path.resolve(__dirname, './public');
//const IMAGE_PATHS = path.resolve(__dirname, '../client/images');
const PATH_DIST = path.resolve(__dirname, './public');

app.use('/public/', Express.static(PATH_STYLES));
//app.use('/images', Express.static(IMAGE_PATHS));
app.use(Express.static(PATH_DIST));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

server = app.listen(process.env.PORT || 1337, () => {
  var port = server.address().port;

  console.log('Server is listening at %s', port);
});
