let roundCards = []

let firstPlayerScore, secondPlayerScore
let firstPlayerTime = true
let played = false
let finished = false


function main() {
    generateRandomNumbers()
}

function generateRandomNumbers() {
    for (let i = 0; i < 3; i++) {
        roundCards[i] = Math.trunc((Math.random() * 10) + 1)
        document.getElementById(`card--${i + 1}`).innerHTML = roundCards[i]
    }
}

function checkUserAndSumPoints(points, index) {
    if (!played && !finished) {
        document.getElementById(`card--${index}`).style.color = "#fff"
        played = true
        if (firstPlayerTime) {

            firstPlayerScore = parseInt(document.getElementById("current--0").innerHTML)
            firstPlayerScore = firstPlayerScore + points
            document.getElementById("current--0").innerHTML = firstPlayerScore
            if (firstPlayerScore == 21) {
                document.getElementById("player--0--Status").innerHTML = "Vencedor"
                document.getElementsByClassName("player--0")[0].style.backgroundColor = "#0FC2C0"
                document.getElementsByClassName("player--1")[0].style.backgroundColor = "#015958"
                finished = true

            }
            else if (firstPlayerScore > 21) {
                document.getElementById("player--1--Status").innerHTML = "Vencedor"
                document.getElementsByClassName("player--0")[0].style.backgroundColor = "#015958"
                document.getElementsByClassName("player--1")[0].style.backgroundColor = "#0FC2C0"
                finished = true
            }
        }
        else {
            secondPlayerScore = parseInt(document.getElementById("current--1").innerHTML)
            secondPlayerScore = secondPlayerScore + points
            document.getElementById("current--1").innerHTML = secondPlayerScore
            if (secondPlayerScore == 21) {
                document.getElementById("player--1--Status").innerHTML = "Vencedor"
                document.getElementsByClassName("player--0")[0].style.backgroundColor = "#015958"
                document.getElementsByClassName("player--1")[0].style.backgroundColor = "#0FC2C0"
                finished = true

            }
            else if (secondPlayerScore > 21) {
                document.getElementById("player--0--Status").innerHTML = "Vencedor"
                document.getElementsByClassName("player--0")[0].style.backgroundColor = "#0FC2C0"
                document.getElementsByClassName("player--1")[0].style.backgroundColor = "#015958"
                finished = true
            }
        }
    }
}

function continuePlaying() {
    if (!finished) {
        played = false
        document.getElementById(`card--1`).style.color = "#008F8C"
        document.getElementById(`card--2`).style.color = "#008F8C"
        document.getElementById(`card--3`).style.color = "#008F8C"
        generateRandomNumbers()
    }
}

function changePlayer() {
    if (!finished) {
        document.getElementById(`card--1`).style.color = "#008F8C"
        document.getElementById(`card--2`).style.color = "#008F8C"
        document.getElementById(`card--3`).style.color = "#008F8C"
        firstPlayerTime = !firstPlayerTime
        played = false
        generateRandomNumbers()
        if (firstPlayerTime) {
            document.getElementsByClassName("player--0")[0].style.backgroundColor = "#0FC2C0"
            document.getElementsByClassName("player--1")[0].style.backgroundColor = "#015958"
        }
        else {
            document.getElementsByClassName("player--0")[0].style.backgroundColor = "#015958"
            document.getElementsByClassName("player--1")[0].style.backgroundColor = "#0FC2C0"
        }
    }
}

function restartGame() {
    document.getElementById(`card--1`).style.color = "#008F8C"
    document.getElementById(`card--2`).style.color = "#008F8C"
    document.getElementById(`card--3`).style.color = "#008F8C"
    document.getElementById("current--0").innerHTML = 0
    document.getElementById("current--1").innerHTML = 0
    document.getElementById("player--0--Status").innerHTML = ""
    document.getElementById("player--1--Status").innerHTML = ""
    document.getElementsByClassName("player--0")[0].style.backgroundColor = "#0FC2C0"
    document.getElementsByClassName("player--1")[0].style.backgroundColor = "#015958"
    firstPlayerTime = true
    played = false
    finished = false
    generateRandomNumbers()
}

main()