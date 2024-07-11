const hello = () => "hi";

class Block {
  constructor(private code: string) {}
  hello() {
    console.log(this.code);
  }
}
