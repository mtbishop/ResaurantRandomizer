var inputText = document.querySelector ('#textInput');
var forumID = document.querySelector ('#questionEat');
var restList = document.querySelector ('#restaurantList');
var restCount = document.querySelector ('#restaurantCount');

var foodList = ["Mc Donalds", "Burger King"];

function renderFood() {
  restList.innerHTML = '';
  restCount = foodList.length;

  for (let i = 0; i < foodList.length; i++) {
    var foodList = foodList[i];

    var foodItem = document.createElement('li');

    li.textContent = foodList;
    li.setAttribute = ('data-index', i);

    var removeButton = document.createElement('button');
    button.textContent = 'X';

    li.appendChild(removeButton);
    restList.appendChild(foodItem);
  }
}

forumID.addEventListener('submit', function (event) {
  event.preventDefault();
  var foodText = inputText.value.trim();

  if (foodText === '') {
    return;
  }

  foodList.push(foodText);
  inputText.value = '';

  renderFood();
});

restList.addEventListener('click', function (event) {
  var element = event.target;

  if (element.matches('button') === true) {
    var index = element.parentElement.getAttribute('data=index');
    foodList.splice(index, 1);

    renderFood();
  }
});
