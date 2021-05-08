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
dogImg.setAttribute("style", "width:400px; height:300px")

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
   
       renderDogNav.innerHTML = ''
  addDogToCard(dog)

  
 })
 
 }

 for (const dog of data) {
  renderDogNav(dog)
 }



 function addDogToCard (dog) {
  dogSection.innerHTML = "";
  dogSection.append(dogNameh2El,dogImg,dogDivH3El,dogDivPEl,dogDivButtonEmEl,dogDivButtonSpanEl,dogDivButtonEl)

  dogNameh2El.innerText = dog.name
   dogImg.src = dog.image
   dogDivH3El.innerText = 'Bio'
   dogDivPEl.innerText = dog.bio
   dogDivButtonEmEl.innerText = "is naughty?"
  dogDivButtonSpanEl.innerText = ' No'
  dogDivButtonEl.innerText = 'Good Dog'
  
 }

 dogDivButtonEl.addEventListener('click', function(){
  if(dogDivButtonEl.innerText === 'Good Dog'){
    dogDivButtonEl.innerText = 'Bad Dog'
   dogDivButtonSpanEl.innerText = ' Yes'
  } else {
     dogDivButtonSpanEl.innerText = ' No'
  dogDivButtonEl.innerText = 'Good Dog'
  }
 
 })




 
  //  Dog Form section
  const dogFormSection = document.createElement('section')
  dogFormSection.setAttribute('class', 'main__dog-section')
 
// Dog form h1 
const dogFormH2El = document.createElement('h2')
dogFormH2El.innerText = "Add a new Dog"

// Dog Form 
const dogForm = document.createElement('form')
dogForm.setAttribute('class', 'form')

// Label for name
const dogLabelName = document.createElement('label')
dogLabelName.setAttribute("for", 'name')
dogLabelName.innerText = `Dog's name`

// Input name
const inputName = document.createElement('input')
inputName.setAttribute("type", 'text')
inputName.setAttribute('id', 'name')
inputName.setAttribute('name', 'name')


// Label for image
const dogLabelImg = document.createElement('label')
dogLabelImg.setAttribute("for", 'image')
dogLabelImg.innerText = `Dog's Picture`

// Input img
const inputImg = document.createElement('input')
inputImg.setAttribute("type", 'url')
inputImg.setAttribute('id', 'image')
inputImg.setAttribute('name', 'image')

// Label for bio
const dogLabelbio = document.createElement('label')
dogLabelbio.setAttribute("for", 'bio')
dogLabelbio.innerText = `Dog's bio`

// Input Textarea
const inputTextarea = document.createElement('textarea')
inputTextarea.setAttribute('rows',"7")
inputTextarea.setAttribute('id', 'bio')
inputTextarea.setAttribute('name', 'bio')

// Input Submit
const inputSubmit = document.createElement('input')
inputSubmit.setAttribute('type', 'submit')
inputSubmit.setAttribute('id', 'submit')
inputSubmit.setAttribute('name', 'submit')
inputSubmit.setAttribute('value', `Let's add a dog!`)
inputSubmit.setAttribute('class', 'form__button')

dogFormSection.append(dogFormH2El, dogForm)
dogForm.append(dogLabelName,inputName,dogLabelImg,inputImg,dogLabelbio,inputTextarea,inputSubmit)
  
  
// getting the add dog element
const addDogEl = document.querySelector('.dogs-list__button--add')

console.log(dogForm)
dogDiv
addDogEl.addEventListener('click', function(){
 
 dogSection.innerHTML = ""
 dogSection.append(dogFormSection)
 
})