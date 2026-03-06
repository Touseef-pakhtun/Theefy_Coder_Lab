let container = document.querySelector('.imagesGallery');
container.innerHTML = `<section class="content">
                <h2>Photo Gallery</h2>
                <p>View our photo gallery.</p>
            </section>`;
async function fetchGallery() {
    let fetchData = await fetch('./backend/gallery.json');
    
    let data = await fetchData.json();

    Object.keys(data).forEach(key => {
        let section = GalleryHtmlGenerator(data[key],key);
        // container.innerHTML += section;
    });
    console.log(container);
}

fetchGallery();
let x = 1;

function GalleryHtmlGenerator(data,key){
    console.log(x);
    console.log(data);
    x++;
    container.innerHTML += `<section class="gallery-section gallery-section${key}"><h3>${key} Gallery</h3><div class="gallery-grid gallery-grid${key}"></div></section>`;
    gridImages = document.querySelector(`.gallery-grid${key}`);
    console.log(gridImages);
    // console.log(container);
    // console.log(key);
// if (key==='student'){
//     return '';
// }

        //  <section class="gallery-section">
            //     <h3>Project Gallery</h3>
            //     <div class="gallery-grid">
            //         <img src="./images/gallery/project/1.jpg" alt="Project 1">
            //         <img src="./images/gallery/project/2.jpg" alt="Project 2">
            //         <img src="./images/gallery/project/3.jpg" alt="Project 3">
            //         <img src="./images/gallery/project/4.jpg" alt="Project 4">
            //         <img src="./images/gallery/project/5.jpg" alt="Project 5">
            //         <img src="./images/gallery/project/6.jpg" alt="Project 6">
            //         <img src="./images/gallery/project/7.jpg" alt="Project 7">
            //         <img src="./images/gallery/project/8.jpg" alt="Project 8">
            //         <img src="./images/gallery/project/9.jpg" alt="Project 9">
            //         <img src="./images/gallery/project/10.jpg" alt="Project 10">
            //         <img src="./images/gallery/project/11.jpg" alt="Project 11">
            //         <img src="./images/gallery/project/12.jpg" alt="Project 12">
            //         <img src="./images/gallery/project/13.jpg" alt="Project 13">
            //         <img src="./images/gallery/project/14.jpg" alt="Project 14">
            //         <img src="./images/gallery/project/15.jpg" alt="Project 15">
            //         <img src="./images/gallery/project/16.jpg" alt="Project 16">
            //         <img src="./images/gallery/project/17.jpg" alt="Project 17">
            //         <img src="./images/gallery/project/18.jpg" alt="Project 18">
            //         <img src="./images/gallery/project/19.jpg" alt="Project 19">
            //         <img src="./images/gallery/project/20.jpg" alt="Project 20">
            //     </div>
            // </section>

    // let image = '';
    data.forEach(Element => {
        gridImages.innerHTML += `<img src="${Element.img}" alt="Project 19"></img>`;
    })
    
    // return image;
}
