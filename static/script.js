document.getElementById('health-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const adultMortality = parseFloat(document.getElementById('adultMortality').value);
  const thinness = parseFloat(document.getElementById('thinness').value);
  const incomeComposition = parseFloat(document.getElementById('incomeComposition').value);
  const schooling = parseFloat(document.getElementById('schooling').value);

  const result = document.getElementById('predictionValue');
  result.innerText = 'Calculating...';

  // Dummy predictive calculation:
  setTimeout(() => {
    // Dummy formula just as an example
    const predictedValue = (adultMortality * 0.1) - (thinness * 0.2) + (incomeComposition * 50) + (schooling * 10);
    result.innerText = predictedValue.toFixed(2) + ' years';
  }, 1000); // Simulate network delay
});
