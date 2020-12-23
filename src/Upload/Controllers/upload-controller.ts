import  * as  Hapi from "hapi";
import * as Joi from "joi";
import { UploadService } from '../Services/upload-service'


export class UploadController {

    private uploadService: UploadService;

    constructor() {
        this.uploadService = new UploadService();
    }

    public uploadFile():Hapi.RouteOptions{
        return {
            handler: async (request: any, h: any) => {
                let file=request.payload["file"];
                let uploadedFile=await this.uploadService.uploadFile(file)
                return uploadedFile;
            },
            tags: ['Upload', 'POST', 'file'],
            description: 'To upload file',
            validate:{
                payload:{
                    file:Joi.any().description('file to upload')
                }
            },
            payload:{
                parse:true,
                output:'file',
                timeout:false,
                allow:'multipart/form-data',
                maxBytes:30485760
            },
            timeout:{
                socket:false
            }
        }
    }



   public getFile():Hapi.RouteOptions{
    return {
        handler: async (request: any, h: any) => {
            return h.file('./public/download.jpg');
        },
        tags: ['Upload', 'GET', 'file'],
        description: 'To get file',
    }
   }

}