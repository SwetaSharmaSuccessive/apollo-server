import Express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import { UserAPI } from './datasource/index';

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
                  }),
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
        const { config: { PORT } } = this;
        this.httpServer.listen(PORT, (err) => {
          if (err) {
            console.log(err);
          }
          console.log(`Server is up and running on port ${PORT}`);
        });
    }
}
export default Server;   