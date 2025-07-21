
from flask import Flask, request, jsonify
import joblib

# Load model and encoders
model = joblib.load('severity_model.pkl')
le_drug1 = joblib.load('le_drug1.pkl')
le_drug2 = joblib.load('le_drug2.pkl')
le_severity = joblib.load('le_severity.pkl')

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict_interaction():
    data = request.get_json()
    drug1 = data.get('drug1')
    drug2 = data.get('drug2')
    age = data.get('age')
    weight = data.get('weight')
    
    # Encode drugs
    try:
        drug1_enc = le_drug1.transform([drug1])[0]
        drug2_enc = le_drug2.transform([drug2])[0]
    except ValueError as e:
        return jsonify({'error': str(e)}), 400
    
    # Predict
    features = [[drug1_enc, drug2_enc, age, weight]]
    pred = model.predict(features)[0]
    severity = le_severity.inverse_transform([pred])[0]
    
    return jsonify({'severity': severity})

if __name__ == '__main__':
    app.run(debug=True)
