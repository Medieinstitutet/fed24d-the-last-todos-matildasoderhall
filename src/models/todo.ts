export class Todo {
    public id: number;
    constructor(
        public content: string,
        public done: boolean = false,
        id?: number
    ){
        this.id = id ?? Date.now() + Math.floor(Math.random() * 10000);
    }
}