import { readFile } from "node:fs/promises";
import { EOL } from "node:os";

// Noter le nom des fichiers du schema
const schemaFiles = ["query", "mutation"];

const promises = schemaFiles.map((file) => readFile(new URL(`./schemas/${file}.gql`, import.meta.url), "utf-8"));

const schemaFilesContent = await Promise.all(promises);

export default schemaFilesContent.join(EOL);
