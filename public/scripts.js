const modalOverlay = document.querySelector('.modalOverlay');
const cards = document.querySelectorAll('.cardRecipe');

for (let card of cards) {
  card.addEventListener('click', () => {
    const image = card.getAttribute('id')
    const title = card.querySelector('.recipe_title').getAttribute('id')
    const by = card.querySelector('.by_who').getAttribute('id')
    console.log(title)
    console.log(image)
    console.log(by)

    modalOverlay.querySelector('.recipe_image').src = image
    modalOverlay.querySelector('.recipeTitle').innerHTML = title
    modalOverlay.querySelector('.recipebyWho').innerHTML = by
    modalOverlay.classList.add('active')

  });
}

document.querySelector("#closeModal").addEventListener('click', () => {
  modalOverlay.classList.remove('active')
});
