// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  reveals.forEach((el) => {
    if (el.getBoundingClientRect().top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
async function loadBuildInfo() {
  try {
    const response = await fetch("build-info.json", { cache: "no-store" });

    if (!response.ok) {
      throw new Error("Build info not found");
    }

    const data = await response.json();

    const shortCommit = data.commit || "unknown";
    const source = data.source || "unknown";

    document.getElementById("build-info").textContent =
      `Build ${shortCommit} • ${source}`;
  } catch (err) {
    document.getElementById("build-info").textContent =
      "Build info unavailable";
  }
}

loadBuildInfo();
