const gallery = document.getElementById("gallery");
for (let index in data){
    let item = data[index];
    let ele = document.createElement("div");
    ele.innerHTML = `<h2>${item.name}</h2> <p>${item.desc}</p> <p>${item.author}</p>`;
    let p = document.createElement("p");
    p.innerText = item.name;
    gallery.appendChild(ele);
}