// VARIABLE DECLARATIONS

/* STEP 1: Declare and initialize variables
- customName for the name field
- randomize for the button
- story for the paragraph that outputs the final story
*/
var customName = document.getElementById("customname"); /* GETS THE 'customname' INPUT FIELD ELEMENT */
var randomize = document.querySelector(".randomize"); /* GETS THE BUTTON ELEMENT WITH CLASS 'randomize' */
var story = document.querySelector(".story"); /* GETS THE PARAGRAPH ELEMENT WITH CLASS 'story' */

/* STEP 3: Create the variable that contains the story string that will be modified 
- use var storyText to contain the following:
'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'
*/
var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'; /* STORY TEMPLATE WITH PLACEHOLDERS */

// STEP 4: Create three arrays, insertX, insertY, and insertZ, assigning them the following array values respectively:
var insertX = ["Donald Trump", "Jackie Chan", "Santa Claus"]; /* NAMES TO BE RANDOMLY INSERTED INTO THE STORY */
var insertY = ["Area 51", "Death Valley", "Aruba"]; /* LOCATIONS TO BE RANDOMLY INSERTED INTO THE STORY */
var insertZ = ["spontaneously combusted", "rapidly sublimated", "evaporated instantly"]; /* ACTIONS TO BE RANDOMLY INSERTED INTO THE STORY */

// FUNCTIONS

/* STEP 2: Have a look at the following function - if you call this function and pass it an array, it will return one of the elements of that array randomly */
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)]; /* RETURNS A RANDOM ITEM FROM THE PASSED ARRAY */
}

/* STEP 6: Review the partially complete result() function below */
function result() {
    // STEP 7: Create a new variable called newStory and 
    // set it to the value of storyText - we don't want to overwrite the original story!
    var newStory = storyText; /* COPIES THE STORY TEMPLATE TO A NEW VARIABLE */

    /* STEP 8: Use the randomValueFromArray() function to generate a value for 
    each of three new variables - xItem, yItem, and zItem
    Call up the function and for each variable, pass it the array from 
    which to grab a random string */
    var xItem = randomValueFromArray(insertX); /* GETS A RANDOM NAME FROM insertX ARRAY */
    var yItem = randomValueFromArray(insertY); /* GETS A RANDOM LOCATION FROM insertY ARRAY */
    var zItem = randomValueFromArray(insertZ); /* GETS A RANDOM ACTION FROM insertZ ARRAY */

    /* STEP 9: Replace the three placeholders in the newStory 
    string — :insertx:, :inserty:, and :insertz: — with the strings stored in 
    xItem, yItem, and zItem. Each time, be sure to update the variable newStory 
    (with =). You might need to do one of the above replacements twice! */
    newStory = newStory.replace(/:insertx:/g, xItem); /* REPLACES ALL :insertx: WITH THE RANDOM NAME */
    newStory = newStory.replace(/:inserty:/, yItem); /* REPLACES :inserty: WITH THE RANDOM LOCATION */
    newStory = newStory.replace(/:insertz:/, zItem); /* REPLACES :insertz: WITH THE RANDOM ACTION */

    /* STEP 10: If the user has typed a name in the customName field, replace the name 'Bob' in the story with whatever they typed */
    if (customName.value !== "") { /* CHECKS IF THE USER HAS ENTERED A CUSTOM NAME */
        newStory = newStory.replace(/Bob/g, customName.value); /* REPLACES ALL OCCURRENCES OF 'Bob' WITH THE USER-ENTERED NAME */
    }

    /* STEP 11: If the metric radio button has been checked, we need to convert the temperature and mass numbers in the story */
    if (document.getElementById("metric").checked) { /* CHECKS IF THE 'metric' RADIO BUTTON IS SELECTED */
        // STEP 11a: Create a variable called weight and convert the 300lbs to kgs (1lb = 0.453592kg)
        var weight = Math.round(300 * 0.453592); /* CONVERTS 300 POUNDS TO KILOGRAMS AND ROUNDS THE RESULT */
        
        // STEP 11b: Replace the string 300 pounds with the updated weight in kg
        newStory = newStory.replace(/300 pounds/, weight + " kilograms"); /* REPLACES '300 pounds' WITH THE WEIGHT IN KILOGRAMS */

        // STEP 12a: Create a variable called temp and convert °F to °C ... the formula for conversion is °C = (°F - 32) x 5/9
        var temp = Math.round((94 - 32) * 5 / 9); /* CONVERTS 94 FAHRENHEIT TO CELSIUS AND ROUNDS THE RESULT */
        
        // STEP 12b: Replace the string '94 fahrenheit' with the updated temperature in °C
        newStory = newStory.replace(/94 fahrenheit/, temp + " degrees celsius"); /* REPLACES '94 fahrenheit' WITH THE CONVERTED TEMPERATURE */
    }

    /* STEP 13: Make the textContent property of the story variable (which references the paragraph) equal to newStory */
    story.textContent = newStory; /* SETS THE TEXT CONTENT OF THE STORY PARAGRAPH TO THE UPDATED STORY */

    // The following line makes the paragraph visible
    story.style.visibility = "visible"; /* MAKES THE STORY PARAGRAPH VISIBLE */
}

// EVENT LISTENERS
/* STEP 5: Add a click event listener to the randomize variable 
so that when the button it represents is clicked, the result() function is run. */
randomize.addEventListener("click", result); /* ADDS A CLICK EVENT LISTENER TO THE BUTTON TO TRIGGER THE 'result' FUNCTION */
