import fs from "fs";
import path from "path";
import ts, { Statement } from "typescript";

const getExpose = (s: Statement) => {
  const t = s.getChildren();
  // console.log(t.map((v) => v.getText()));
  const t1 = t[1].getChildren();
  console.log(
    t[1].getText(),
    t1.map((v) => v.getText())
  );
};

export const getExposes = (from: string): Record<string, string> => {
  const data = fs.readFileSync(path.resolve(from, "index.ts"));
  // const exports = data
  // .toString()
  // .split("\n")
  // .filter((s) => s.startsWith("export "));
  const sc = ts.createSourceFile(
    "x.ts",
    data.toString(),
    ts.ScriptTarget.Latest,
    true
  );
  getExpose(sc.statements[0]);
  // console.log(sc.statements.map((s) => s.getChildren()));

  return {};
};

// const components = exports.map((v) => v.split("from")[1].split('"')[1]);
// // .map(key=>([key, uikitPath+key]));
// log(components);
// const exposes = Object.fromEntries();
