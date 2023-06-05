// Define an array of results with text and image URLs
const results = [
  {
    text: 'Do it',
    image: 'image1.jpg' 
  },
  {
    text: 'feel it',
    image: 'image2.jpg'
  },
  {
    text: 'Little',
    image: 'image3.jpg'
  },
  {
    text: 'TODAY',
    image: 'image4.jpg'
  },
  {
    text: 'Always',
    image: 'image5.jpg'
  },
  {
    text: 'Go on my friend',
    image: 'image6.jpg'
  },
  {
    text: 'never give up',
    image: 'image7.jpg'
  },
  {
    text: 'Good man things',
    image: 'image8.jpg'
  }
];

// Get references to the button and result elements
const button = document.getElementById('myButton');
const resultText = document.getElementById('resultText');
const resultImage = document.getElementById('resultImage');
const resultContainer = document.getElementById('resultContainer');

// Add a click event listener to the button
button.addEventListener('click', function() {
  // Generate a random index to select a result
  const randomIndex = Math.floor(Math.random() * results.length);

  // Get the result object based on the random index
  const result = results[randomIndex];

  // Update the text and image elements with the result data
  resultText.textContent = result.text;
  resultImage.src = result.image;

  // Show the result container
  resultContainer.style.display = 'block';
});
