class Hello {
    name: string;
    constructor(name?: string) {
        this.name = name;
    }
    showMessage() {
        return `Hello ${this.name}`;
    }
}
console.log(new Hello('world'));