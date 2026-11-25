// Worst Fix Ever: Funniest Commit Message — one original commit message
// for a bug fix that made everything worse. The "fix" worked: the bug is
// gone, because the feature it lived in is gone too.
// Writes the line to <MAKEFUN_OUTPUT_DIR or /output>/entry.txt (Node 22, stdlib only).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "fix: fixed the bug by removing the feature it lived in";

// Gate check (mirrors the sealed scorer): 1–100 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 100 || LINE.trim().length === 0) {
  throw new Error(`Invalid entry line: ${LINE.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
