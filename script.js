//your code here
const images = document.querySelectorAll(".image");
let draggedImage = null;

images.forEach(image => {
    image.addEventListener("dragstart", function (e) {
        draggedImage = this;
        setTimeout(() => this.style.visibility = "hidden", 0);
    });

    image.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    image.addEventListener("drop", function (e) {
        e.preventDefault();
        if (this !== draggedImage) {
            let temp = this.style.backgroundImage;
            this.style.backgroundImage = draggedImage.style.backgroundImage;
            draggedImage.style.backgroundImage = temp;
        }
    });

    image.addEventListener("dragend", function (e) {
        this.style.visibility = "visible";
    });
});
