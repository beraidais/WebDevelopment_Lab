let HomeScore = document.getElementById('home-score')
let GuestScore = document.getElementById('guest-score')

function startGame(){
    HomeScoreValue = 0
    GuestScoreValue = 0
    HomeScore.textContent = HomeScoreValue
    GuestScore.textContent = GuestScoreValue

}

function add1PointToHome() {
    HomeScoreValue = HomeScoreValue + 1
    HomeScore.textContent = HomeScoreValue
}

function add2PointsToHome() {
    HomeScoreValue = HomeScoreValue + 2
    HomeScore.textContent = HomeScoreValue
}

function add3PointsToHome() {
    HomeScoreValue = HomeScoreValue + 3
    HomeScore.textContent = HomeScoreValue
}

function add1PointToGuest() {
    GuestScoreValue = GuestScoreValue + 1
    GuestScore.textContent = GuestScoreValue
}

function add2PointsToGuest() {
    GuestScoreValue = GuestScoreValue + 2
    GuestScore.textContent = GuestScoreValue
}

function add3PointsToGuest() {
    GuestScoreValue = GuestScoreValue + 3
    GuestScore.textContent = GuestScoreValue
}

startGame()