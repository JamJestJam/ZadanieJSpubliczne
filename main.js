const obj = document.querySelector("#marek");

function setImage(i){
    if (i < 50) {
        const img = new Image();
        img.src = "https://picsum.photos/id/" + i + "/200/300";
        console.log(obj);
        obj.appendChild(img);
        img.addEventListener("load", () => setImage(i + 1));
    }

}

setImage(0);

let jGallery = document.querySelector("#dynamicGallery")

let seed = 1;
const loadImage = (num) => {
    if (jGallery.childElementCount < num) {
        const img = document.createElement("img")
        img.src = `https://picsum.photos/seed/${seed++}/300/200`
        img.addEventListener("load", (e)=>{
            jGallery.appendChild(img)
            loadImage(num);
        })
    }
}
loadImage(6)
