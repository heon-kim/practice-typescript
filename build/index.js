const hello = () => "hi";
class Block {
    constructor(code) {
        this.code = code;
    }
    hello() {
        console.log(this.code);
    }
}
