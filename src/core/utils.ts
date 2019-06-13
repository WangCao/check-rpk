import * as path from "path";

export class Tester {
  public static readonly STATIC_VAR;

  constructor(private readonly f1: string, private readonly f2: number) {}

  public static testPath() {
    const curdir = "./";
    console.log(path.resolve(curdir));
  }
}
