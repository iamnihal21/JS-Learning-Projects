let url = "https://kontests.net/api/v1/all";
let response = fetch(url);

response.then((v) => {
    return v.json();
}).then((contest) => {
    console.time("contest");
    let images = [
        "images/1.png",
        "images/2.jpg",
        "images/3.jpg",
        "images/4.png"
    ];
    let iHTML = "";
    for (let index = 0; index < contest.length; index++) {
        // Get the current image index
        let imageIndex = index % images.length;
        if (imageIndex == 4){imageIndex = 2}
        iHTML += `
        <div class="card" style="width: 18rem;">
        <img src="${images[imageIndex]}" class="card-img-top" alt="">
        <div class="card-body">
        <h5 class="card-title">${contest[index].name}</h5>
        <p class="card-text">Start : ${contest[index].start_time}</p>
        <p class="card-text">End : ${contest[index].end_time}</p>
        <a href="${contest[index].url}" class="btn btn-primary">Visit Contest</a>
        </div>
        </div>
        `;
    }
    cardContainer.innerHTML = iHTML;
    console.timeEnd("contest");
});
