var photoContainer = document.getElementById("photo-container");

let content = "";
for (let i = 0; i < 20; i++) {
    content += getPhotoElement(i + 1);
}

photoContainer.innerHTML = content;

function getPhotoElement(photo_id) {
    return `<a href="#" class="photo">
        <img loading="lazy" alt="Photo ${photo_id}" src="img/photo_${photo_id}.jpg" />
    </a>`;
}