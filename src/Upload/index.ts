import * as Hapi from 'hapi'
import Route from './Routes/upload-route';

exports.plugin = {

    register: async (server: Hapi.Server, options: any) => {
        try {
            Route(server);
            console.log(`Upload plugin registered successfully.`);
        } catch(error){
            console.log(`Error occurred while register plugin`)
        }
    },
    name: 'Upload plugin',
    version: '1.0.0'
};