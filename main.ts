import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I don't actually read your documents. I skim the first page and confidently wing the rest.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE + "\n", "utf8");

// Read-back validation: the file must hold exactly the line plus one newline.
const back = readFileSync(outPath, "utf8");
if (back !== LINE + "\n") {
  console.error("validation failed: entry.txt does not match the line exactly");
  process.exit(1);
}
console.log(`wrote ${LINE.length}-char line to ${outPath} (read-back OK)`);
