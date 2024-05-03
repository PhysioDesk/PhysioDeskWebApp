export class RecordingModel {
    public date:string;
    public fisio:string;
    public duration:string;
    public link:any;
  
  
    constructor(date:string, fisio:string, duration:string, link:any){
      this.date = date;
      this.fisio = fisio;
      this.duration = duration;
      this.link = link;
    }
  }
  