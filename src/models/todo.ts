export class Todo {
    public id: number;
    public created: Date;
    constructor(
        public content: string,
        public done: boolean = false,
        public deadline?: string,
        id?: number,
        created?: Date,
    ){
        this.id = id ?? Date.now() + Math.floor(Math.random() * 10000);
        this.created = created ?? new Date();
    }
}