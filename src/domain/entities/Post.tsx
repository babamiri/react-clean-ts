export class Post {

  id: number;
  name:string;
  userId: number;
  title: string;
  body: string;

  constructor(id: number, userId: number, name: string, title: string, body:string) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
    this.name = name;

  }
}
