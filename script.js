import init, { greet } from "../pkg/rd_wasm.js";
init().then(() => {
  greet("WebAssembly");
});
