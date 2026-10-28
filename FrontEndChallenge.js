
import $ from "jquery";

const varOcg = $("#button");
let varFiltersCg = true;
let varPcb;

// __define-ocg__ and __define-pcb__: Toggle the button state.
varOcg.on("click", function () {
  varFiltersCg = !varFiltersCg;
  varPcb = varFiltersCg ? "ON" : "OFF";
  varOcg.text(varPcb);
});


