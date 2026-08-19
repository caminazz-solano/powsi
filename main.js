const times = document.querySelectorAll(".time");
const form = document.getElementById("form");
const done = document.getElementById("done");
let selected = "10:30";
times.forEach((t) =>
  t.addEventListener("click", () => {
    times.forEach((x) => x.classList.remove("sel"));
    t.classList.add("sel");
    selected = t.textContent.trim();
  }),
);
if (form && done) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("cPet").textContent =
      document.getElementById("pet").value;
    document.getElementById("cService").textContent =
      document.getElementById("service").value;
    document.getElementById("cDate").textContent =
      document.getElementById("date").value;
    document.getElementById("cTime").textContent = selected;
    done.classList.add("show");
    done.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}
