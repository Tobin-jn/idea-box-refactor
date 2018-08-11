var ideaList = document.querySelector('.idea-list');
var ideas = JSON.parse(localStorage.getItem('ideas')) || [];

document.querySelector('.save-btn').addEventListener('click', addIdea);
document.querySelector('.idea-body').addEventListener('keyup', enableBtn);
ideaList.addEventListener('click', deleteCard);

function enableBtn(e) {
  e.preventDefault();
  var saveBtn = document.querySelector('.save-btn')
  if (document.querySelector('.idea-body').value !== '' && document.querySelector('.idea-title').value !== '') {
    saveBtn.disabled = false;
  }
}

function addIdea(e) {
  e.preventDefault()
  var newTitle = document.querySelector('.idea-title').value
  var newBody = document.querySelector('.idea-body').value
  var idea = {
    title: newTitle,
    body: newBody,
    id: Date.now(),
    quality: "swill"
    }
  ideas.push(idea);
  populateIdea(idea);
  localStorage.setItem('ideas', JSON.stringify(ideas));
  document.querySelector('.idea-form').reset();

}

function populateIdea (object) {
var content = `
    <div data-index=${object.id} id = "idea${object.id}">
      <article class="m-idea-card">
        <div class="idea-header flex-row">
          <h2 class="search-me card-title">${object.title}</h2>
          <button class="delete-card svg" alt="Delete"></button>
        </div> 
        <p class="search-me idea-description">${object.body}</p>
        <div class="quality-buttons">
          <button class="upvote svg" role="button" aria-label="Upvote Idea"></button>
          <button class="downvote svg"></button>
          <p class="quality">swill</p>
        </div>
        <hr>
      </article>
    </div>
    `;
  var newIdeaCard = document.createElement('div');
  newIdeaCard.innerHTML = content;
  ideaList.append(newIdeaCard);
  // console.log(ideas)
}

function deleteCard(event) {
  if (event.target.className === "delete-card svg") {
    event.target.parentElement.parentElement.remove();
  }
}


function populateIdeas ( updateIdeas = [] ) {
  updateIdeas.forEach(function(i) {
      populateIdea(i)
  });
}

populateIdeas(ideas)


//make an constructor object
//pull from object to make card
//put everything in local storage
//update local storage