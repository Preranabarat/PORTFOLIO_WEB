const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
    Array.from(tablinks).forEach((tablink) => {
        tablink.classList.remove("active-link", "text-white");
        tablink.classList.add("text-slate-400");
        tablink.querySelector("::after")?.classList?.remove?.("w-full");
    });

    Array.from(tabcontents).forEach((tabcontent) => {
        tabcontent.classList.add("hidden");
        tabcontent.classList.remove("block");
    });

    event.currentTarget.classList.add("active-link", "text-white");
    event.currentTarget.classList.remove("text-slate-400");

    const activeTab = document.getElementById(tabname);
    if (activeTab) {
        activeTab.classList.remove("hidden");
        activeTab.classList.add("block");
    }
}