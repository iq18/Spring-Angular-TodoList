import { CompileTemplateMetadata } from '@angular/compiler';

export class Todo {

  id: number;
  text: string;
  complete: boolean;
  dueDate: Date;
  done: string;

  constructor(id: number, text: string, complete: boolean, dueDate: Date) {
      this.id = id;
      this.text = text;
      this.complete = complete;
      this.dueDate = dueDate;
      this.done = this.complete ? 'True' : 'False';
  }
}
