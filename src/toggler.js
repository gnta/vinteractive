const togglers = document.querySelectorAll('[data-role="toggler"]');

let activeTarget = null;
let activeToggler = null;

togglers.forEach((toggler) => {
  const targetId = toggler.getAttribute("data-target");
  const target = document.getElementById(targetId);
  target.setAttribute("hidden", "");

  toggler.addEventListener("click", (event) => {
    event.stopPropagation();

    const isActive = activeTarget === target;

    // Hide previous target
    if (activeTarget && !isActive) {
      activeTarget.setAttribute("hidden", "");
    }

    if (isActive) {
      target.setAttribute("hidden", "");
      activeTarget = null;
      activeToggler = null;
    } else {
      target.removeAttribute("hidden");
      activeTarget = target;
      activeToggler = toggler;
    }
  });
});

document.addEventListener("click", (event) => {
  if (activeTarget && !activeTarget.contains(event.target) && !activeToggler.contains(event.target)) {
    activeTarget.setAttribute("hidden", "");
    activeTarget = null;
    activeToggler = null;
  }
});
