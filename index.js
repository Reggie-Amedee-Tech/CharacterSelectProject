let background = document.querySelector('.main-content');

const buttonList = document.querySelectorAll("div.button")

button1 = buttonList[0]
button2 = buttonList[1]
button3 = buttonList[2]
button4 = buttonList[3]



function selectGael () {
    background.style.backgroundImage = "url('./pictures/slave_knight.gif')"
    background.style.backgroundRepeat = "no-repeat"
    background.style.backgroundSize = "cover"
}

function selectArtorias () {
    background.style.backgroundImage = "url('./pictures/artorius.gif')"
    background.style.backgroundRepeat = "no-repeat"
    background.style.backgroundSize = "cover"
}

function selectAbyssWatcher () {
    background.style.backgroundImage = "url('./pictures/abyss_watchers.gif')"
    background.style.backgroundRepeat = "no-repeat"
    background.style.backgroundSize = "cover"
}

function selectGwyn () {
    background.style.backgroundImage = "url('./pictures/gwyn.gif')"
    background.style.backgroundRepeat = "no-repeat"
    background.style.backgroundSize = "cover"
}

button1.onclick = selectGael;
button2.onclick = selectArtorias
button3.onclick = selectAbyssWatcher
button4.onclick = selectGwyn