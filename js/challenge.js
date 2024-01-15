
// See the timer increment every second once the page has loaded.

// Manually increment and decrement the counter using the plus and minus buttons.
// "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.

// Pause the counter, which should:
// pause the counter
// disable all buttons except the pause button
// switch the label on the button from "pause" to "resume"
// Click the "resume" button to restart the counter and re-enable the buttons.

// Leave comments on my gameplay, such as: "Wow, what a fun game this is."


document.addEventListener("DOMContentLoaded", function () {
  var timerElement = document.getElementById("counter");
  var seconds = 0;

  function updateTimer() {
      seconds++;
      timerElement.textContent = seconds;
  }

  
  var intervalId = setInterval(updateTimer, 1000); // ??


//Manually increment and decrement the counter using the plus and minus buttons.
    
    //counter = timerElement
    var plusButton = document.getElementById("plus");
    var minusButton = document.getElementById("minus");

function changeCounter(value){

seconds+= value
timerElement.textContent = seconds

}
plusButton.addEventListener("click", function () {
  changeCounter(1);
});

minusButton.addEventListener("click", function () {
  changeCounter(-1);

});

// "Like" an individual number of the counter. 
// I should see the count of the number of "likes" associated with that number displayed.

 const counterElement = document.getElementById("counter")
 const heartButton = document.getElementById('heart');
 const likesList = document.querySelector('.likes');

 let count = 0;
 const likes = {};

 heartButton.addEventListener('click', function () {
   
   count++;

   // Update the counter display

   // Check if the count is already in the likes object
   if (likes[counterElement.textContent]) {
     // Increment the like count
     likes[counterElement.textContent]++;
     // Update the like count display for this number
     updateLikesDisplay(counterElement.textContent, likes[counterElement.textContent]); 
   } else {
     // Initialize the like count for this number
     likes[counterElement.textContent] = 1;
     // Add a new list item to display the like count
     addLikesListItem(counterElement.textContent, likes[counterElement.textContent]);
   }
 });

// Function to update the like count display
function updateLikesDisplay(number, likeCount) {
  const listItem = document.getElementById(`like_${number}`); //
  listItem.textContent = `${number} has been liked ${likeCount} times`;
}

// Function to add a new list item for the like count
function addLikesListItem(number, likeCount) {
  const listItem = document.createElement('li');
  listItem.id = `like_${number}`;
  listItem.textContent = `${number} has been liked ${likeCount} times`;
  likesList.appendChild(listItem);
}


// Pause the counter, which should:
// pause the counter
// disable all buttons except the pause button
// switch the label on the button from "pause" to "resume"
// Click the "resume" button to restart the counter and re-enable the buttons.

// pause method
// method to disable all the buttons


// let counterValue = 0;

let pause = false;

const pauseButton = document.getElementById('pause')

pauseButton.addEventListener('click', function () {

console.log("I have been clicked")

document.getElementById('counter') // add more code?
document.getElementById('pause')
document.getElementById('heart')
document.getElementById('minus')
document.getElementById('plus')
document.getElementById('submit')
  
  function togglePauseResume() {
    pause = !pause;
  
    if (pause) {
      //unpause
      clearInterval(intervalId)

      document.getElementById('heart').disabled = true
      document.getElementById('minus').disabled = true
      document.getElementById('plus').disabled = true
      document.getElementById('submit').disabled = true

      pauseButton.innerText = 'resume';


    } else {
      //pause
      intervalId = setInterval(function() {
        
          updateTimer();
 
      }, 1000); //do I need this?
      
      pauseButton.innerText = 'pause';

      document.getElementById('heart').disabled = false
          document.getElementById('minus').disabled = false
          document.getElementById('plus').disabled = false
          document.getElementById('submit').disabled = false

    }
  }
  togglePauseResume();

  })

//Leave comments on my gameplay, such as: "Wow, what a fun game this is."

function submitComment() {
  // Get the comment input value
  var commentInput = document.getElementById('comment-input').value;



  // Create a new paragraph element to display the comment
  var newComment = document.createElement('p');
  newComment.textContent = commentInput;

  // Append the new comment to the comments list
  document.getElementById('list').appendChild(newComment);
  


  // Clear the input field after submitting
  document.getElementById('comment-input').value = '';
}

})


    











  

  
