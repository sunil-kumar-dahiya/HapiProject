import  * as  Hapi from "hapi";
import inert from 'inert'



const server=new Hapi.Server({
port: 3000,
host:'localhost'
});

async function startTheServer() {
    await registerPlugin()
    await server.start();
    console.log(`Server is running at ${server.info.uri}`)
}

async function registerPlugin() {
    server.register({
        plugin: require('./Upload')
    });
    server.register(inert)
}

startTheServer();