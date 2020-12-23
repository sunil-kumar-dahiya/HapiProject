const fs=require("fs")
import * as Path from "path";
const Temp_path=Path.join(__dirname,'../../../public')
export class UploadService {

    public async uploadFile(file:any): Promise<any> {
        try {
    let fileData=[];
        fileData.push(file);  
        console.log(`Attempting to upload file`,file);
        await fs.writeFileSync(Path.join(Temp_path,`${file.filename}`),file)
        return fileData;
} catch (error) {
     console.log('Error occured while uploading file',error);
    }
  }

  
}