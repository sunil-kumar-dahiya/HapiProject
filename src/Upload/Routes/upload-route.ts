import * as Hapi from 'hapi';
import { UploadController } from '../Controllers/upload-controller'


export default function (server: Hapi.Server) {

    let uploadController = new UploadController();

    
    server.route({
        method: 'POST',
        path: '/upload',
        options: uploadController.uploadFile()
    }),

    server.route({
        method: 'GET',
        path: '/',
        options: uploadController.getFile()
    })
}
