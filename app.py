from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load model and columns
Input_columns = joblib.load('Columns.pkl')
Model = joblib.load('Life expectancy.pkl')

# Route for your home page
@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')

# Route for prediction
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    test_df = pd.DataFrame(columns=Input_columns)

    # Fill columns
    test_df.at[0, "Status"] = data.get('Status')
    test_df.at[0, "Adult_Mortality"] = data.get('Adult_Mortality')
    test_df.at[0, "infant_deaths"] = data.get('infant_deaths')
    test_df.at[0, "Alcohol"] = data.get('Alcohol')
    test_df.at[0, "Hepatitis_B"] = data.get('Hepatitis_B')
    test_df.at[0, "Measles"] = data.get('Measles')
    test_df.at[0, "BMI"] = data.get('BMI')
    test_df.at[0, "Polio"] = data.get('Polio')
    test_df.at[0, "Total_expenditure"] = data.get('Total_expenditure')
    test_df.at[0, "Diphtheria"] = data.get('Diphtheria')
    test_df.at[0, "HIV_AIDS"] = data.get('HIV_AIDS')
    test_df.at[0, "GDP"] = data.get('GDP')
    test_df.at[0, "Population"] = data.get('Population')
    test_df.at[0, "thinness_10_to_19_years"] = data.get('thinness_10_to_19_years')
    test_df.at[0, "Income_composition_of_resources"] = data.get('Income_composition_of_resources')
    test_df.at[0, "Schooling"] = data.get('Schooling')

    prediction = Model.predict(test_df)[0]
    return jsonify({"prediction": float(prediction)})

if __name__ == "__main__":
    app.run(debug=True)
