// One Line, Big Laugh — entry program.
// Writes a single funny one-liner to entry.txt, byte-identical, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function buildEntryLine(): string {
  return "My smartwatch congratulated me on a 3 a.m. workout — it was just me sleepwalking to the fridge for the third time.";
}

function resolveOutputPath(): string {
  const makefunDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (makefunDir && makefunDir.trim() !== "") return makefunDir;
  const outputPath = process.env.OUTPUT_PATH;
  if (outputPath && outputPath.trim() !== "") return outputPath;
  if (process.env.MAKEFUN_BOT_DIR) return "/output";
  return join(process.cwd(), "output");
}

const outDir = resolveOutputPath();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), buildEntryLine(), "utf8");
