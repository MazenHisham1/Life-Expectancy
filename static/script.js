document.addEventListener('DOMContentLoaded', () => {
  console.log('JS loaded');
  document.getElementById('predict-btn').addEventListener('click', async () => {
    const data = {
      Status: document.getElementById('Status').value,
      Adult_Mortality: parseFloat(document.getElementById('Adult_Mortality').value),
      infant_deaths: parseFloat(document.getElementById('infant_deaths').value),
      Alcohol: parseFloat(document.getElementById('Alcohol').value),
      Hepatitis_B: parseFloat(document.getElementById('Hepatitis_B').value),
      Measles: parseFloat(document.getElementById('Measles').value),
      BMI: parseFloat(document.getElementById('BMI').value),
      Polio: parseFloat(document.getElementById('Polio').value),
      Total_expenditure: parseFloat(document.getElementById('Total_expenditure').value),
      Diphtheria: parseFloat(document.getElementById('Diphtheria').value),
      HIV_AIDS: parseFloat(document.getElementById('HIV_AIDS').value),
      GDP: parseFloat(document.getElementById('GDP').value),
      Population: parseFloat(document.getElementById('Population').value),
      thinness_10_to_19_years: parseFloat(document.getElementById('thinness_10_to_19_years').value),
      Income_composition_of_resources: parseFloat(document.getElementById('Income_composition_of_resources').value),
      Schooling: parseFloat(document.getElementById('Schooling').value)
    };
    console.log('Data sent:', data);

    try {
      const response = await fetch('/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const result = await response.json();
        document.getElementById('prediction-output').textContent = result.prediction;
      } else {
        document.getElementById('prediction-output').textContent = 'Error';
        console.error('Server returned error:', response.statusText);
      }
    } catch (error) {
      document.getElementById('prediction-output').textContent = 'Error';
      console.error('Error:', error);
    }
  });
});
