# apollo-server

# what is GraphQL?
 GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing  data. Basically, it is a syntax that describes how to ask for data and it is used to load data from  a server to a client.
 It lets the client specify exactly what data it needs. It makes it easier to aggregate data from multiple sources. It uses a type system to describe data. With GraphQL, the user is able to make a single call to fetch the required information rather than to construct several REST requests to fetch the same.

 # Difference between GraphQL and Rest
  A REST API is an architectural concept for network-based software. It decrease the level of flexibility.
 GraphQL, on the other hand, is a query language, a specification, and a set of tools that operates over a single endpoint using HTTP. GraphQL has been to optimize for performance and flexibility.

  # What is GraphQl Schema?
 A GraphQL schema is at the core of any GraphQL server implementation. It describes the functionality available to the client applications that connect to it. We can use any programming language to create a GraphQL schema and build an interface around it.

  The GraphQL runtime defines a generic graph-based schema to publish the capabilities of the data service it represents. Client applications can query the schema within its capabilities. This approach decouples clients from servers and allows both to evolve and scale independently.

  For create a schema we need to follow following steps:- ** Step 1 ** − Download and Install Required Dependencies for the Project ** Step 2 ** − Create a Schema Add schema.graphql file in the project folder, schema-app and add the following code −
 https://user-images.githubusercontent.com/72736053/104285586-def27480-54d9-11eb-9f95-89b350c88409.png

 The root of the schema will be Query type. The query has two fields − greeting and Students that returns String and a list of students respectively. Student is declared as an Object type since it contains multiple fields. The ID field is declared as non-nullable.

 ** Step 3 ** − Create Resolver Create a file resolvers.js in the project folder and add the following code −

 https://user-images.githubusercontent.com/72736053/104285639-ed409080-54d9-11eb-9691-7446723e2415.png

 Here greeting and students are the resolvers that handle the query. students resolver function returns a list of students from the data access layer. To access resolver functions outside the module, Query object has to be exported using module.exports.

 ** Step 4 ** − Run the Application The server will be up and running on 9000 port. Here, we use GraphiQL as a client to test the application. Open browser and type the URL, http://localhost:9000/graphiql

 https://user-images.githubusercontent.com/72736053/104285642-edd92700-54d9-11eb-9ab2-5cb27e1f8520.png

 # GraphQL: Queries, Mutations, Subscriptions
 Each GraphQL schema has exactly three root types: query, mutation and subscription. Each request against the GraphQL endpoint of a GraphQL server (remember, always a ‘POST’) will need to have a payload starting with one of these, e.g.:

 As you can probably infer, the query above is asking for a product and will select just the id and name fields of it. Queries are used to request data from the server and they are the default GraphQL requests. Let’s take a look at the schema definition that fits this query:

 https://user-images.githubusercontent.com/72736053/104285638-ec0f6380-54d9-11eb-84fa-47689e58504f.png

 Mutations are used, whenever the server state is changed. Below is a mutation, that will signup a user (simplified), therefore create a new user object in a database (or similar):

 https://user-images.githubusercontent.com/72736053/104285631-eade3680-54d9-11eb-94f6-6ce6a5e5b163.png

 https://user-images.githubusercontent.com/72736053/104285634-eb76cd00-54d9-11eb-9bf3-7a4ecd792dd6.png

 A subscription is used to register for updates from the server. For example, we might want to be notified of new deals and could request these using this subscription:

 https://user-images.githubusercontent.com/72736053/104285646-ee71bd80-54d9-11eb-9e10-d7872c236aa2.png

 Our subscription is a pretty basic one – no input parameters and we’re just asking for the description field. Still: whenever a new deal arrives, we’ll now be notified. The exact implementation is up to the GraphQL Server, but typically websockets are used for this. This of course requires special support from the client side. Below is the schema that fits to our subscription:

 https://user-images.githubusercontent.com/72736053/104285647-ef0a5400-54d9-11eb-8c72-722fecd1000c.png

 
# MAP
	The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value may be used as either a key or a value.

# Objects vs Maps
	Object is similar to Map both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key.


# Map()
    Creates a new Map object.

# static properties
	get Map: The constructor function that is used to create derived objects.

# Instance properties
	Map.size: Returns the number of key/value pairs in the Map object.

# Instance Methods
	Map.clear(): Removes all key-value pairs from the Map object.
	Map.delete(key): Returns true if an element in the Map object existed and has been removed, or 		false if the element does not exist.
	Map.get(key): Returns the value associated to the key, or undefined if there is none.
	Map.set(key, value): Sets the value for the key in the Map object. Returns the Map object.

