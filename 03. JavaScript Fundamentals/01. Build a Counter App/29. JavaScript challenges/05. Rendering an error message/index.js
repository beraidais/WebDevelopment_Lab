// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorElement = document.getElementById('error')

let errorMessage = "Something went wrong, please try again"

function displayErrorMessage() {
    errorElement.textContent = errorMessage
}
