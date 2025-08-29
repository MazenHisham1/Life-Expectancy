document.getElementById('predictForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const payload = {
    Status: document.getElementById('Status').value,
    Adult_Mortality: Number(document.getElementById('Adult_Mortality').value),
    infant_deaths: Number(document.getElementById('infant_deaths').value),
    Alcohol: Number(document.getElementById('Alcohol').value),
    Hepatitis_B: Number(document.getElementById('Hepatitis_B').value),
    Measles: Number(document.getElementById('Measles').value),
    BMI: Number(document.getElementById('BMI').value),
    Polio: Number(document.getElementById('Polio').value),
    Total_expenditure: Number(document.getElementById('Total_expenditure').value),
    Diphtheria: Number(document.getElementById('Diphtheria').value),
    HIV_AIDS: Number(document.getElementById('HIV_AIDS').value),
    GDP: Number(document.getElementById('GDP').value),
    Population: Number(document.getElementById('Population').value),
    thinness_10_to_19_years: Number(document.getElementById('thinness_10_to_19_years').value),
    Income_composition_of_resources: Number(document.getElementById('Income_composition_of_resources').value),
    Schooling: Number(document.getElementById('Schooling').value),
  };

  try {
    const response = await fetch('/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    document.getElementById('result').innerText = `Predicted value: ${data.prediction}`;
  } catch (error) {
    document.getElementById('result').innerText = `Error: ${error}`;
  }
});
