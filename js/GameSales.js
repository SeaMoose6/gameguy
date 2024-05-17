const header = document.querySelector('.header')
const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const icon = document.querySelector('.HomeIcon')

hamburger.addEventListener('click', ()=>{
    console.log("clicked")
    if (menu.style.display == "none"){
        menu.style.display = "block"
    }else{
        menu.style.display = "none"
    }
})


// fetch("https://steamdb.info/sales/?min_reviews=500&min_rating=60&min_discount=50", {
//     mode: 'no-cors'
// })
//     .then(responce => responce.text())
//     .then(data => {
//         console.log(data)
//         const parser = new DOMParser();
//         const htmlDoc = parser.parseFromString(data, 'text/html');

//         const scrapedContent = htmlDoc.querySelector('tr.app'.innerHTMl);
//         console.lod(scrapedContent)
//         document.getElementById('scrapedContent').innerHTML = scrapedContent;

//     })
//     .catch(error => console.error('Error', error));