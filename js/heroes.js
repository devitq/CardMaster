const heroesData = [
    {
        name: "Lorem ipsum 1",
        class: "Lorem",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, eum? Omnis maiores est, quod suscipit fugit, harum blanditiis consequuntur, atque dolore totam natus accusantium impedit. Quibusdam, maxime. Earum, quia harum?",
    },
]

document.addEventListener("DOMContentLoaded", displayHeroes)

document.getElementById("sumbitButton").addEventListener("click", addHero)

function displayHeroes() {
    let cards_container = document.getElementById("cards_container")
    cards_container.innerHTML = ""
    for (hero_id in heroesData) {
        let hero = heroesData[hero_id]
        let card = document.createElement("div")
        card.className = "col"
        card.innerHTML = `
        <div
            class="card h-100 shadow-sm zoomable-card"
        >
            <div class="card-body">
                <h5 class="card-title">${hero["name"]}</h5>
                <p><span class="badge rounded-pill text-bg-warning">${hero["class"]}</span></p>
                <p class="card-text text-muted"
                    >${hero["description"]}</p
                >
            </div>
        </div>
        `
        cards_container.appendChild(card)
    }
}

function addHero() {
    const modal = bootstrap.Modal.getInstance(
        document.getElementById("createHeroModal")
    )
    const nameInput = document.getElementById("nameInput")
    const classInput = document.getElementById("classInput")
    const descriptionInput = document.getElementById("descriptionInput")

    const nameInputData = nameInput.value.trim()
    const classInputData = classInput.value.trim()
    const descriptionInputData = descriptionInput.value.trim()

    if (nameInputData && classInputData && descriptionInputData) {
        const newHero = {
            name: nameInputData,
            class: classInputData,
            description: descriptionInputData,
        }
        heroesData.push(newHero)

        displayHeroes()

        nameInput.value = ""
        classInput.value = ""
        descriptionInput.value = ""

        modal.hide()
    } else {
        const errorToast = new bootstrap.Toast(
            document.getElementById("errorToast")
        )
        errorToast.show()
    }
}
