export class Todo {

  id: number;
  // username: string;
  text: string;
  complete: boolean;
  dueDate: Date;
  done: string;

  constructor(text: string, dueDate: Date) {
      // this.id = id;
      // this.username = username;
      this.text = text;
      this.complete = false;
      this.dueDate = dueDate;
      this.done = '';
      // this.done = this.complete ? 'True' : 'False';
  }
}
