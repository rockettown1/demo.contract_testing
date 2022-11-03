## Quick demo looking at Pact contract testing

This is a monorepo so start in the root directory with:

```
npm i
npm run bootstrap:local
```

Which will go through all 3 packages installing dependencies

### Packages Structure

```
services
    |- apiA (Fastify server)
    |- apiB (Fastify server)
    |- ui (React app)

```

Run all three services in parallel using:
`npm run start:all`

And all that happens is the React demo app calls apiA which calls apiB.

### Integration points

React app (consumer) - apiA (provider)  
apiA (consumer) - apiB (provider)

### Todo

- [ ] Add Pact contracts
- [ ] Implement contract testing between consumers and providers
