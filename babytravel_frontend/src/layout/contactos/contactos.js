const $inputList = document.querySelectorAll("input");
const $textAreaList = document.querySelectorAll("textarea");
const $overlay = document.querySelector("#overlay");

$inputList.forEach(($element) => {
  $element.addEventListener("focus", focus);
  $element.addEventListener("blur", blur);
});

$textAreaList.forEach(($element) => {
  $element.addEventListener("focus", focus);
  $element.addEventListener("blur", blur);
});

//aca lo que hacemos es que cuando hacemos click se vaya la sobre capa (overlay) y busco en donde esta el foco ahora
$overlay.addEventListener("click", (event) => {
  $overlay.classList.remove("is-active");
  //con clientX/Y recojo las coordenadas de click
  const maybeIsAnInput = document.elementFromPoint(
    event.clientX,
    event.clientY
  );

  //INPUT esta en mayusculas a proposito
  if (
    maybeIsAnInput.tagName === "INPUT" ||
    maybeIsAnInput.tagName === "TEXTAREA"
  ) {
    maybeIsAnInput.focus();
  }
});

function focus(params) {
  console.log("focus");
  params.target.classList.add("is-active");
  $overlay.classList.add("is-active");
}

function blur(params) {
  console.log("blur");
  params.target.classList.remove("is-active");
}
