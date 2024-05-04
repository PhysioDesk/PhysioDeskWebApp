export class RecordingModel {
    public id:string;
    public date:string;
    public fisio:string;
    public duration:string;
    public link:any;


    constructor(id:string,date:string, fisio:string, duration:string, link:any){
      this.id=id;
      this.date = date;
      this.fisio = fisio;
      this.duration = duration;
      this.link = link;
    }
  }
