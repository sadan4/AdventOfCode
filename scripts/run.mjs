import { createRequire } from "module";
import { join } from "path";
import { getTodaysDir } from "./common.mjs";

const require = createRequire(import.meta.url);

require(join("..", getTodaysDir(), "code.cjs"));
