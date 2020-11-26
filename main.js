let gallery = document.querySelector("#dynamicGallery")

let seed = 1;
const loadImage = (num) => {
    if (gallery.childElementCount < num) {
        const img = document.createElement("img")
        img.src = `https://picsum.photos/seed/${seed++}/300/200`
        img.addEventListener("load", (e)=>{
            gallery.appendChild(img)
            loadImage(num);
        })
    }
}
loadImage(5)