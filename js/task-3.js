const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

function textChanger() {
    const value = input.value.trim();

    if (value === "") {
        output.textContent = "Anonymus";
    } else {
        output.textContent = value;
    }
}

input.addEventListener("input", textChanger);