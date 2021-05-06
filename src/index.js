console.log(data);
// We create individual components here
/*
In this exercise, we're going to create an app to show off our furry friends. 
This will also let us practice events and forms! This is a combo that you will find all the time out there

Instructions
- Use this template as a starting point (it won't work properly on Codesandbox, you have to download it to your laptop) => https://codesandbox.io/s/proud-dog-owners-app-template-g30wz?from-embed
- You'll find a variable called data in the console.log. That's your list of dogs
- Render the top list of dogs using the list item template you'll find on the HTML file
- Each list item should be clickable. When you click on an item, the selected dog should display on the main card
- The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
- There should be only one card at the time on the screen
- The card should have a button that toggles for the selected dog between good dog/ bad dog

Tips
- Take advantage of scope in JS to have access to the data you need
- Remember you can add event listeners to any element on the page

Challenge
You might have noticed there's a plus button at the beginning of the top row. Add the behaviour to it. When clicked, it should replace the main card with a form to add a new dog to the list. 
You'll find a template for the form on the HTML page. Once the form is submitted, add the new dog to the beginning of the list, right next to the plus button.
*/

//You'll find a variable called data in the console.log. That's your list of dogs
//Render the top list of dogs using the list item template you'll find on the HTML file

// QuerySelectors
const listOfDogs = document.querySelector('.dogs-list')
const dogSection = document.querySelector('.main__dog-section')
const dogNameh2El = document.querySelector('h2')

// Main Dog div
const dogDiv = document.createElement('div')
dogDiv.className = 'main__dog-section__desc'
const dogDivH3El = document.createElement('h3')
const dogDivPEl = document.createElement('p')
dogDiv.append(dogDivH3El,dogDivPEl)

// Dog Img 
const dogImg = document.createElement('img')

// Dog button
const dogDivButton = document.createElement('div')
dogDivButton.className = 'main__dog-section__btn'
const dogDivButtonPEl = document.createElement('p')
const dogDivButtonEmEl = document.createElement('em')
const dogDivButtonSpanEl = document.createElement('span')
// dogDivButtonPEl.innerHTML = `<em>Is Naughty?</em> ${badDog.goodBoi}`
dogDivButtonPEl.append(dogDivButtonEmEl, dogDivButtonSpanEl)
const dogDivButtonEl = document.createElement('button')
dogDivButton.append(dogDivButtonPEl,dogDivButtonEl)

 dogSection.append(dogNameh2El,dogImg, dogDiv, dogDivButton)



console.log(dogSection,)

function renderDogNav (dog) {
  let listItem = document.createElement("li");
  let dogName = dog.name
  listItem.className = 'dogs-list__button'
  listItem.innerText = dogName
  listOfDogs.append(listItem)

      listItem.addEventListener('click', function () {
   
  addDogToCard(dog)

  
 })
 
 }

 for (const dog of data) {
  renderDogNav(dog)
 }


let badDog = {
  goodBoi: true,
  goodDog: 'Good Dog',
  badDog: 'Bad Dog'
}
 function addDogToCard (dog) {
  dogNameh2El.innerText = dog.name
   dogImg.src = dog.image
   dogDivH3El.innerText = 'Bio'
   dogDivPEl.innerText = dog.bio
   dogDivButtonEmEl.innerText = 'Is it bad? '
  dogDivButtonSpanEl.innerText = ' No'
  dogDivButtonEl.innerText = 'Good Dog'
 }

 dogDivButtonEl.addEventListener('click', function(){
  if(dogDivButtonEl.innerText === 'Good Dog'){
    dogDivButtonEl.innerText = 'Bad Dog'
   dogDivButtonSpanEl.innerText = 'Yes'
  } else {
     dogDivButtonSpanEl.innerText = ' No'
  dogDivButtonEl.innerText = 'Good Dog'
  }
 
 })


  //   This is a template for the add dog form

  //   <section class="main__dog-section">
  //     <h2>Add a new Dog</h2>
  //     <form class="form">

  //       <label for="name">Dog's name</label>
  //       <input type="text" id="name" name="name">

  //       <label for="image">Dog's picture</label>
  //       <input type="url" id="image" name="image">

  //       <label for="bio">Dog's bio</label>
  //       <textarea rows="5" id="bio" name="bio"></textarea>

  //       <input type="submit" id="submit" name="submit" value="Let's add a dog!" class="form__button">
  //     </form>
  // </section>

  