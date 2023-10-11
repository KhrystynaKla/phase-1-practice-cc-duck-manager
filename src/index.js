// write your code here!
const duckDisplay = document.getElementById('duck-display')
const duckNav = document.getElementById('duck-nav')
const duckDisplayName = document.getElementById('duck-display-name')
const duckDisplayImage = document.getElementById('duck-display-image')
const buttonLikes = document.getElementById('duck-display-likes')
let currentDuck;
let allDucksInfo;
let newId=1

fetch('http://localhost:3000/ducks')
.then(response => response.json())
.then(data => {
    allDucksInfo=data;
    allDucksInfo.forEach(item =>{
        addDuckImage(item)
    })
    displayImgOfDuck(allDucksInfo[0])
})
function addDuckImage(item){
    const duckImg = document.createElement('img');
    duckImg.src = item.img_url
    duckNav.appendChild(duckImg)
    duckImg.addEventListener('click', ()=>{
        displayImgOfDuck(item)
    })
    newId++
}

function displayImgOfDuck(item){
    currentDuck=item
    duckDisplayName.textContent=item.name
    duckDisplayImage.src= item.img_url
    buttonLikes.textContent=`${item.likes} likes`
}

buttonLikes.addEventListener('click', ()=>{
    let numberOfLikes= Number(buttonLikes.textContent.replace('likes',''))
    numberOfLikes++
    buttonLikes.textContent =`${numberOfLikes} likes`
    currentDuck.likes = numberOfLikes

    // allDucksInfo = allDucksInfo.map(duck =>{
    //     if(duck.id ===currentDuck.id){}
    // })
})