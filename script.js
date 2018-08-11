var ideaList = document.querySelector('.idea-list');
var ideas = [];

document.querySelector('.save-btn').addEventListener('submit', addIdea);
// document.querySelector('.idea-body').addEventListener('keyup', enableBtn);
// ideaContainer.addEventListener('click', deleteCard);

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
    title: newTitle
    body: newBody
    quality: "swill"
    }

  ideas.push(idea);
  populateIdeas(ideas, ideaList);
  this.reset;
}







//   var content = `<article class="m-idea-card">
//       <div class="idea-header flex-row">
//         <h2 class="search-me card-title">${newTitle}</h2>
//         <button class="delete-card svg" alt="Delete"></button>
//       </div> 
//       <p class="search-me idea-description">${newBody}</p>
//       <div class="quality-buttons">
//         <button class="upvote svg" role="button" aria-label="Upvote Idea"></button>
//         <button class="downvote svg"></button>
//         <p class="quality">swill</p>
//       </div>
//       <hr>
//     </article>`
//   var newIdeaCard = document.createElement('div');
//   newIdeaCard.innerHTML = content;
//   ideaContainer.append(newIdeaCard);
//   clearInputs();
// }

// function clearInputs() {
//   document.querySelector('.idea-title').value = '';
//   document.querySelector('.idea-body').value = '';
// }

// function deleteCard(event) {
//   if (event.target.className === "delete-card svg") {
//     event.target.parentElement.parentElement.remove();
//   }
// }


//make an constructor object
//pull from object to make card
//put everything in local storage
//update local storage