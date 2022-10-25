//Complete variable and function defintions
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

//functions takes an array, and returns one of the items stored inside the array at random.
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//Strings that will act as input into our program.
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin','Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

//Event listerner and partial function definition
randomize.addEventListener('click', result);

//adds a click event listener to the randomize variable so that when the button it represents is clickes, the result() function is run
function result() {
//this variable is needed so we can create a new random story each time the button is pressed and the function is run.
  let newStory = storyText

//These will create a random out of each array it is called on
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replaceAll(':inserty:', yItem);
  newStory = newStory.replaceAll(':insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature = `${Math.round(94-32)*5/9} centrigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}