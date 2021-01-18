import schema from './modules/index';
import Server from './server';
import configuration from './config/index';

const server = new Server(configuration);

server.bootstrap().setupApollo(schema);