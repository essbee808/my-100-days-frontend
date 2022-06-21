window.addEventListener('DOMContentLoaded', (event) => {
    console.log('Dom fully loaded and parsed!')
    createEntry();
})

const base_url = "http://127.0.0.1:3000"

function createEntry() {
    let entryForm = document.getElementById("entry-form")

    entryForm.innerHTML += `
        <form>
            <h4>I am grateful for:</h4>
            <input type="text" id="gratitude"><br>

            <h4>I am grateful for:</h4>
            <input type="text" id="gratitude"><br>
            <input type="submit" value="Add Entry">
        </form>
    `
}
