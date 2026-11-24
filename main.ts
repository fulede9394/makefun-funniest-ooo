import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Out-of-office: out of office and out of context.
const LINE =
  "I'm out of office and out of context. Your email is queued behind 4,000 others and will be forgotten in order.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
