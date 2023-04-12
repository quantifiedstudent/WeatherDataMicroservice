
export class Day {

    public current_grade: string;
    public current_score: number;
    public final_grade: string;
    public final_score: number;
    public unposted_current_score: number;
    public unposted_current_grade: string;
    public unposted_final_score: number;
    public unposted_final_grade: string;


    constructor(
        current_grade: string,
        current_score: number,
        final_grade: string,
        final_score: number,
        unposted_current_score: number,
        unposted_current_grade: string,
        unposted_final_score: number,
        unposted_final_grade: string
    ) {
        this.current_grade = current_grade;
        this.current_score = current_score,
            this.final_grade = final_grade,
            this.final_score = final_score,
            this.unposted_current_score = unposted_current_score,
            this.unposted_current_grade = unposted_current_grade,
            this.unposted_final_score = unposted_final_score,
            this.unposted_final_grade = unposted_final_grade

    }

}
