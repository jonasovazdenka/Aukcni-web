console.log('hello');
const galleryElem = document.getElementById("gallery");
const detailElem = document.getElementById|("detail");
for (let index in data){
    let itemData = data[index];
    let itemElement = document.createElement("div");
    itemElement.innerHTML = `<figure><img src="./data/${itemData.images[0]}"></figure>
    <div><h2>${itemData.name}</h2>
    <p class="desc">${itemData.desc}</p>
    <p class="author">${itemData.author}</p></div>`;
    galleryElem.appendChild(itemElement);
    itemElement.onclick = () => {
        detailElem.innerHTML = `<div class ="detail-item">
        <figure><img src="./data/${itemData.images[0]}></figure>
        <div><h2>${itemData.name}</h2>
        <p class="desc">${itemData.desc}</p>
        <p class="author">${itemData.author}</p></div>
        </div>`;
            detailElem.style.display = "flex";
    };
    detailElem.onclick = () => {
        detailElem.style.display = "none";
    };
}
