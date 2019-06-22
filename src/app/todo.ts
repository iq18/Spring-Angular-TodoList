export class Todo {

  id: number;
  text: string;
  complete: boolean;
  dueDate: Date;

  constructor(id: number, text: string, complete: boolean, dueDate: Date) {
      this.id = id;
      this.text = text;
      this.complete = complete;
      this.dueDate = dueDate;
  }
}
