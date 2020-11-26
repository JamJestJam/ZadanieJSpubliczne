const doc = document.querySelector("#Marek");
const src_s = ["", 
                "https://picsum.photos/id/236/200/300",
                "https://picsum.photos/id/235/200/300",
                "https://picsum.photos/id/234/200/300",
                "https://picsum.photos/id/233/200/300",
            ];

for (let index = 0; index < src_s.length; index++) {
    const element = src_s[index];
    
    const tmp = new Image();
    tmp.src = element;

    doc.appendChild(tmp);
}