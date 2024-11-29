from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
import numpy as np
from PIL import Image
import io

app = Flask(__name__)

# Load the trained model
model = load_model('clothing_classifier.h5')

# Categories for Fashion MNIST (you can update these based on your model's categories)
categories = ['T-shirt', 'Pants', 'Jacket', 'Dress', 'Shoes', 'Outerwear']

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400
    
    file = request.files['file']
    img = Image.open(io.BytesIO(file.read())).convert('RGB')  # Convert to RGB
    
    img = img.resize((224, 224))  # Resize image to match model input size
    img = np.array(img) / 255.0  # Normalize the image
    img = np.reshape(img, (1, 224, 224, 3))  # Reshape for CNN input

    # Predict using the model
    predictions = model.predict(img)
    predicted_class = np.argmax(predictions)

    return jsonify({'category': categories[predicted_class], 'confidence': str(predictions[0][predicted_class])})

if __name__ == '__main__':
    app.run(debug=True)
