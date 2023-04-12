import fetch from "node-fetch";
import BaseCanvasAPIReciverService from "./BaseWeatherReciverService";


export default class AssignmentsAPIReciverService extends BaseCanvasAPIReciverService {
   
    apiRoute = (id: number) => `/api/v1/courses/${id.toString()}/assignments`;

    constructor(token: string) {
        super(token);
    }

    async GetStudnetAssignments(){
        const header = {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        };
    
        const options = {
          method: "GET",
          ...header,
        };
    
        try {
          const response = await fetch(this.url + this.apiRoute(12525), options);
          const data = await response.json();
          return data;
        } catch (error) {
          let message;
          if (error instanceof Error) message = error.message;
          else message = String(error);
          // we'll proceed, but let's report it
          console.error(message);
          return error;
        }
      }

}
