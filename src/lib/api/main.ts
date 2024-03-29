import { fileSystem } from "./../fileSystem";
import type { ApiBridge } from ".";
import { createMain } from "../ipc";

const main = createMain<ApiBridge>();
main.on("writeText", (_, value) => fileSystem.appendText("data", "test.txt", `${value} - ${Math.random()}`));
