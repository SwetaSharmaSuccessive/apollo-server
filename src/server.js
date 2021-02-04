import Express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import { TraineeAPI, UserAPI } from './datasource/index';

class Server {
    constructor(config) {
        this.app = Express();
        this.config = config;
    }
    bootstrap() {
        this.setupRouts();
        return this;
    }
    setupRouts() {
        const { app } = this;
        app.get('/', (req, res) => {
          res.send('App is started...');
        });
        return this;
    }

    async setupApollo(schema) {
        try {
            const { app } = this;
            this.Server = new ApolloServer({
                ...schema,
                dataSources: () => ({
                    userAPI: new UserAPI(),
                    traineeAPI: new TraineeAPI(),
                  }),
                  context: ({ req }) => {
                    if (req) {
                      return { token: req.headers.authorization };
                    }
                    return {};
                  },
                healthCheck: () => new Promise((resolve) => {
                    resolve('I am OK !');
                }),
            });
            this.Server.applyMiddleware({ app });
            this.httpServer = createServer(app);
            this.Server.installSubscriptionHandlers(this.httpServer);
            this.run();
        } 
        catch (err) {
            console.log(err);
        }
    }
    run() {
        const { config: { port } } = this;
        this.httpServer.listen(port, (err) => {
          if (err) {
            console.log(err);
          }
          console.log(`Server is up and running on port ${port}`);
        });
    }
}
export default Server;   