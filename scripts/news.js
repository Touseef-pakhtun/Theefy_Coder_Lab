let news_container = document.querySelector('.news');
async function fetchData() {
    const reponse = await fetch('./backend/news.json');
    let data = await reponse.json();
    htmlGenerator(data);
}
function htmlGenerator(data){
    data.forEach((element, index) => {
        let child_div = document.createElement("div");
        child_div.className = "news-item";
        child_div.innerHTML=`
        <div class="news-number">${index + 1}</div>
        <h3>${element.title}</h3>
        <h4><i class="fas fa-calendar-alt"></i> ${element.date}</h4>
        <p>${element.summary}</p>
        `;
        news_container.appendChild(child_div);
    });
    // news_container.appendChild(newsChild);
}
fetchData();
