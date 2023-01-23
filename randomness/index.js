const FREE_SOUNDS = [
    {
        url:'https://www.shockwave-sound.com/sound-effects/wild-animal-sounds/Monkey%20sounds,%20chatter.wav',
        name: 'Monkey noises'
    },
    {
        url:'https://www.shockwave-sound.com/sound-effects/wild-animal-sounds/Jungle%20ambience,%20wild%20jungle%20sounds.wav',
        name: 'Jungle'
    },
    {
        url:'https://www.shockwave-sound.com/sound-effects/wind-sounds/blustery%20wind.wav',
        name: 'Wind'
    }, 
    {
        url:'https://www.shockwave-sound.com/sound-effects/water-sounds/waterff.wav',
        name: 'Splash of water'
    },
    {
        url:'https://www.shockwave-sound.com/sound-effects/car-sounds/old%20cadillac%20engine.wav',
        name: 'Old vehicle engine'
    },
    {
        url:'https://www.shockwave-sound.com/sound-effects/scream-sounds/aaaah.wav',
        name: 'Ahhh noise'
    }, 
    {
        url:'https://www.shockwave-sound.com/sound-effects/human-sounds/accessdeniedmale.wav',
        name: 'Access denied'
    },
    {
        url:'https://www.shockwave-sound.com/sound-effects/human-sounds/whistleshort.wav',
        name: 'Whistle'
    },              
]

function produceRandomNumber () {
    // This will produce a random number between 0 and 1
    return Math.random()
}

function produceRandomNumberInRange (min, max) {
    // This will produce a random number between min and max
    return min + (   /*something goes here - What function would we call to produce a random number */   * (max - min) )
}

function produceRandomColour () {
    red = produceRandomNumberInRange(    /*something goes here*/    )
    green = produceRandomNumberInRange(    /*something goes here*/   )
    blue = produceRandomNumberInRange(    /*something goes here*/  )
    return `rgb(${ /*the first colour*/ }, ${ /*the second colour*/ }, ${/*the third colour*/}, 0.5)`
}

// When you give this function a html component, it will change its colour to a random one
function setElementColour (element) {
    element.style.backgroundColor =  //something goes here
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
}

function changeStyleOfBlock (element) {
    element.style.backgroundColor = //something goes here
    const radius = produceRandomNumberInRange(0, 10);
    element.style.borderRadius = `${radius}px`
}

function changeBodyColour (chosen) {
    document.body.style.backgroundColor =  /*something goes here*/
}

function manageOperationForElement (box) {
    // get a random number between 0 and 4, i.e 1.134324324324
    let functionOption = produceRandomNumberInRange(0, 4)
    // get another random number between 1 and 10
    // Math.floor will change the number into an integer, i.e 1.32434 -> 1
    let iteractOption = Math.floor(produceRandomNumberInRange(1, 100))
    
    // create a new variable called message, without a value
    let message;

    /** Question, what happens when functionOption is greater than 4? */

    if (functionOption < 1) {
        
        /** @iteractOption % 2 == 0 will see if the number is even or not */
        // because we are working with random numbers,
        // there is a 50% chance that we will pick the first option and
        // a 50% chance we will pick the second option

        // choose a random number between 0 and the number of sounds we have,
        // in our case this is going to be 6
        let randomNumber = produceRandomNumberInRange(0, /*something goes here*/)

        // random number can be a decimal with floating points like 3.43432432
        // this isn't appropiate for indexing, so floor the number
        // i.e /* SOMETHING GOES HERE - if math.floor took an input of 3.43432432, what would the output be?  */
        let selectedIndex = Math.floor(randomNumber)
        // we can now use the sound class to play a sound
        // notice how we pass in the sound we want
        /**  @FREE_SOUNDS is our array of sounds */
        /**  @selectedIndex is the variable we created above, this helps us know which sound to play */
        /**  @url Every sound in our list is described by two properties, url and name. We want the url because that will get the sound itself  */
        
        /* Question: Which attribute in a FREE_SOUNDS element links to the url of the sound, 
                     and how would we access it  */
        
        let audio = new sound(FREE_SOUNDS[selectedIndex] /*SOMETHING GOES HERE*/ )

        /* Question: Which attribute in a FREE_SOUNDS element links to the name of a sound, 
                     and how would we access it  */

        /* Question: What does iteractOption % 2 == 0 mean? */                     

        if (iteractOption % 2 == 0){
            message = `Click me to play ${FREE_SOUNDS[selectedIndex] /*SOMETHING GOES HERE*/}`

            // On click: this is the event when the box is clicked
            box.onclick = function () { 
                // Now play the sound
                /*SOMETHING GOES HERE - What function would you run to play the audio? */
            }
        }else {
            message = `Put your mouse over me to play ${FREE_SOUNDS[selectedIndex].name}`

            // On mouse over: this is the event when you hover over the box
            box.onmouseover = function () { 
                // Now play the sound
                /*SOMETHING GOES HERE - What function would you run to play the audio? */
            }
        }
    } else if (functionOption < 2){
        if (iteractOption % 2 == 0){
            message = "Click me to change the style of this block"
            box.onclick = function () {changeStyleOfBlock(box)}
        }else {
            message = "Put your mouse over me to change the style of this block"
            box.onmouseover = function () {changeStyleOfBlock(box)}
        }
    }
    else{
        let audio = new sound(FREE_SOUNDS[FREE_SOUNDS.length-1] /*SOMETHING GOES HERE - How would you access the link to the sound? */)
        let chosenColour = /*SOMETHING GOES HERE - We already have a function which produces a colour for us, how would we call it? */
        
        if (iteractOption % 2 == 0){
            
            /* Set the message here so it tells the user that clicking will change the background  */
            box.onclick = function () {
                changeBodyColour(chosenColour);
                /*SOMETHING GOES HERE - What function would you run to play the audio? */
            }
            

        }else {
            /* Set the message here so it tells the user that hovering will change the background  */
            message = `Hover for background change`
            box.onmouseover = function () {
                changeBodyColour(chosenColour);  
                /*SOMETHING GOES HERE - What function would you run to play the audio? */
            }
           
        }
    }

    // create a new paragraph component, html equivalent is: <p></p>
    let p = document.createElement(/*Something goes here - What would we put in here to make a paragraph component?*/)

    // set the text to be whatever message is
    p.innerText = message

    // add this to the box
    box.appendChild(p)
}


function setColoursForEachItem (id) {
    let container = document.getElementById(id)
    let children = container.children;

    /* pass the setElementColour and the manageOperationForElement function for each child in children */
}

function addAMysteryBox (parentId) {
    // Create a new div element, similar to <div></div>
    let box = document.createElement('div')

    // Give it a class name, equivalent html looks like <div class="inner-container"></div>
    box.className = /* Something goes here */

    // Get the parent by its id parentId and call it 'container'
    let container = document.getElementById(parentId)
    
    // Put the BOX inside the parent div ->  <div id="main-container">...</div>    
    container.appendChild(box);

    // give the box a special colour
    setElementColour(box)

    // give the box a special function
    manageOperationForElement(box)
}