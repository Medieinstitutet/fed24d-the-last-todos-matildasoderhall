export class Todo {
    public id: number;
    constructor(
        public content: string,
        public done: boolean = false,
    ){
        this.id = Date.now();
    }

    toggleDone() {
        this.done = !this.done;
    }
}