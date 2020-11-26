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