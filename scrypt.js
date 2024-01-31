const containerNodes = document.querySelectorAll(".artwork-item");
containerNodes.forEach((containerNode) => {
    containerNode.addEventListener("click", () => {
        containerNode.classList.toggle("clicked");
    });
});

