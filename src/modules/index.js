import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';
import * as user from './user/index';
import * as trainee from './trainee/index';

const dirname = path.resolve();
const typeArray = fileLoader(path.join(dirname, './**/*.graphql'));
const typeDefs = mergeTypes(typeArray, { all: true });

export default {
    resolvers: {
        Query: {
            ...user.getMyProfile,
            ...trainee.Query
        },
        Mutation: {
            ...trainee.Mutation
          }
    },
    typeDefs,
};