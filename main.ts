import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I don't actually read your documents. I skim the first page and confidently wing the rest.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote ${LINE.length}-char line to ${join(outDir, "entry.txt")}`);
