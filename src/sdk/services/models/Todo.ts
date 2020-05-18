export class Todo {
  id: number;
  heading: string;
  body: string;
  colorCode: string;
  constructor(id: number, heading: string, body: string, colorCode: string) {
    this.id = id;
    this.heading = heading;
    this.body = body;
    this.colorCode = colorCode;
  }
}
