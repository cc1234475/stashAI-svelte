import { waitForElm } from "./utils";
import MarkerButton from "./MarkerButton.svelte";
import TagButton from "./TagButton.svelte";

stash.addEventListener("stash:page:scene", function () {
  let elms = ".ml-auto .btn-group";
  waitForElm(elms).then(() => {
    if (!document.querySelector("#stashmarker")) {
      const e = new MarkerButton({ target: document.querySelector(elms) });
    }
  });
});


stash.addEventListener("stash:page:scene", function () {
  let elms = ".ml-auto .btn-group";
  waitForElm(elms).then(() => {
    if (!document.querySelector("#stashtag")) {
      const e = new TagButton({ target: document.querySelector(elms) });
    }
  });
});
