export class Todo {
    public id: number;
    constructor(
        public content: string,
        public done: boolean = false,
    ){
        this.id = Date.now() + Math.floor(Math.random() * 10000);
    }

    toggleDone() {
        this.done = !this.done;
    }
}