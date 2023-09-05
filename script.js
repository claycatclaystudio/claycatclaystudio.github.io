let displayed = 0
//Format: ["filename", price, "description", "link"]
//Note: all images should be .jpg
//Note last [] can not have a , but the other should
let toppers = [
    [],
    []
]

let dragons = [
    ["PurpleAndGreenDragons", 7, "A purple dragon is sleeping with her green dragonets.", "https://pay.claycatclaystudio.com"],
    
]

let cats = [
    [],vzz
]

let scenes = [
    [],
    []
]

let pictures = [
    [],
    []
]

let weapons = [
    [],
    []
]

let sculptures = [
    [],
    []
]

let others = [
    ["REALLYCOOLMOOSE", 17, "Big, moose, resting in some grass", "https://pay.claycatclaystudio.com"],
]

function fillImages(imageType) {
    //Do stuff
    let data = getImages(imageType)
    let container = document.getElementById("PCSTable")
    if (displayed >= data.length) {
        noMoreToDisplay()
        return
    }
    for (j = 0; j < 2; j++) {
        let rowElement = document.createElement("tr")
        for (i = displayed; i < displayed + 4; i++) {
            let dataCell = document.createElement("td")
            dataCell.className = "PCS-Cell"

            if (i < data.length) {
                let previewImg = document.createElement("img")
                previewImg.className = "PCS"
                previewImg.src = imageType + "/" + data[i][0] + ".jpg"
                dataCell.appendChild(previewImg)

                let priceBox = document.createElement("p")
                priceBox.className = "PCSBox-text"
                priceBox.innerHTML = "Cost: $" + data[i][1]
                dataCell.appendChild(priceBox)

                let descBox = document.createElement("p")
                descBox.className = "PCSBox-description"
                descBox.innerHTML = "Description: " + data[i][2]
                dataCell.appendChild(descBox)

                let buyButton = document.createElement("button")
                buyButton.className = "PCSBox-btn"
                buyButton.innerHTML = "Buy"

                let buyLink = document.createElement("a")
                buyLink.href = data[i][3]
                buyLink.appendChild(buyButton)
                dataCell.appendChild(buyLink)
            } else {
                blankImg = document.createElement("img")
                blankImg.className = "PCS"
                blankImg.src = "https://i.stack.imgur.com/mwFzF.png"
                blankImg.style.opacity = "0"
                dataCell.appendChild(blankImg)
            }

            rowElement.appendChild(dataCell)
        }
        container.appendChild(rowElement)
        displayed += 4
    }
}

function noMoreToDisplay() {

}

function getImages(type) {
    if (type == "toppers") {
        return toppers
    }
    if (type == "dragons") {
        return dragons
    }
    if (type == "cats") {
        return cats
    }
    if (type == "scenes") {
        return scenes
    }
    if (type == "pictures") {
        return pictures
    }
    if (type == "weapons") {
        return weapons
    }
    if (type == "sculptures") {
        return sculptures
    }
    if (type == "others") {
        return others
    }
}
