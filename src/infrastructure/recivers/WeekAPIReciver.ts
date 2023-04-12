import fetch from "node-fetch";
import BaseCanvasAPIReciverService from "./BaseWeatherReciverService";
import CourseDTO from "../dto/DayDTO";

export default class CourseAPIReciverService extends BaseCanvasAPIReciverService {
    apiRoute = "/api/v1/courses";

    constructor(token: string) {
        super(token);
    }

    async GetStudnetCourses(): Promise<CourseDTO> {
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
          const response = await fetch(this.url + this.apiRoute, options);
          const data = await response.json();
          return <CourseDTO>data;
        } catch (error) {
          let message;
          if (error instanceof Error) message = error.message;
          else message = String(error);
          // we'll proceed, but let's report it
          console.error(message);
          return Promise.reject(error);
        }
      }

}









