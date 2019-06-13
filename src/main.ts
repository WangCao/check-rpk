import { Tester } from "./core/utils";

function main() {
  const tester = new Tester("s1", 1);
  console.log(Tester.STATIC_VAR);

  console.log(Tester.testPath());
}
main();
