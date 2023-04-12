
export class Week {

    id: number;
    mastery: boolean;
    score: number;
    possible: number;
    percent: number;
    hide_points: boolean;
    hidden: boolean;
    submitted_or_assessed_at: string;
    links: void;

    // What type are links ???

    constructor(
        id: number,
        mastery: boolean,
        score: number,
        possible: number,
        percent: number,
        hide_points: boolean,
        hidden: boolean,
        submitted_or_assessed_at: string,
        links: void,
    ) {
        this.id = id;
        this.mastery = mastery;
        this.score = score;
        this.possible = possible;
        this.percent = percent;
        this.hide_points = hide_points;
        this.hidden = hidden;
        this.submitted_or_assessed_at = submitted_or_assessed_at;
        this.links = links;


    }

}