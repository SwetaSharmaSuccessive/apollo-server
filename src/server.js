import Express from 'express';
import { ApolloServer } from 'apollo-server-express';

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
                healthCheck: () => new Promise((resolve) => {
                    resolve('I am OK !');
                }),
            });
            this.Server.applyMiddleware({ app });
            this.run();
        } catch (err) {
            console.log(err);
        }
    }
    run() {
        const { app, config: { port } } = this;
        app.listen(port, (err) => {
          if (err) {
            console.log(err);
          }
          console.log(`Server is up and running on port ${port}`);
        });
    }
}
export default Server;   