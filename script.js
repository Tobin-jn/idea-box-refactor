var ideaList = document.querySelector('.idea-list');
var ideas =  [];
// ||

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
      <article class="m-idea-card" data-index=${object.id}>
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
    `;
  var newIdeaCard = document.createElement('div');
  newIdeaCard.innerHTML = content;
  ideaList.append(newIdeaCard);
  // console.log(ideas)
}

function deleteCard(event) {
  if (event.target.className === "delete-card svg") {
    var el = event.target.parentElement.parentElement
    var identifier = el.dataset.index
    var parsedId = parseInt(identifier)
    ideas = ideas.filter(function(i) {
      return i.id !== parsedId
    })
    event.target.parentElement.parentElement.remove();
  }
  localStorage.setItem('ideas', JSON.stringify(ideas));
}

//previous versin working as long as storage wasn't empty
function populateIdeas ( updateIdeas = [] ) {
  updateIdeas.push(JSON.parse(localStorage.getItem('ideas')))
  updateIdeas.forEach(function(i) {
    populateIdea(i)
  console.log(ideas)
  });
}


populateIdeas(ideas);


//broke when the array was empty on page reload


// //Quality Buttons
// array with values 0-2
// default quality is set to 0
// when upvote is pressed increment
// downvote decrement
// save the counter as a var
// update the quality to whatever the var is
// make limits so cant go above 2, lower than 0
// can use the index value of array to associate with the quality vote
// the vote correlates to the index position
// tie an index position to word, swill, plas, genius....







