import logging
import warnings

# Para quitar los mensajes que no sean de error (antes de la carga de librerias!)
log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)
warnings.filterwarnings("ignore")
warnings.simplefilter(action='ignore', category=FutureWarning)

# Resto de librerías
from flask import Flask, request, jsonify
from sklearn import svm
from sklearn import datasets
from sklearn.externals import joblib
from sklearn.neural_network import MLPClassifier

# Establecemos las constantes del host y puerto
HOST = '0.0.0.0'
PORT = 8081

# Iniciamos la app
app = Flask(__name__)




@app.route('/api/visualizacionIris', methods=['GET'])
def visualizacion():
    iris = datasets.load_iris()
    X, y = iris.data, iris.target
    res = [{'Data': 'headers', 'value': [
        'sepal_length', 'sepal_width', 'petal_length', 'petal_width']},
    {'Data': 'sepal_length', 'value': X[:, 0].tolist()},
    {'Data': 'sepal_width', 'value': X[:, 1].tolist()},
    {'Data': 'petal_length', 'value': X[:, 2].tolist()},
    {'Data': 'petal_width', 'value': X[:, 3].tolist()},
    {'Data': 'target', 'value': y.tolist()}]

    return jsonify(res)


@app.route('/api/train', methods=['POST'])
def train():
    # Cogemos los parámetros del body del request
    parameters = request.get_json()

    # Cargamos el dataset de iris
    iris = datasets.load_iris()
    X, y = iris.data, iris.target
    # Ajustamos el modelo con los parámetros que le hemos pasado
    clf = svm.SVC(C=float(parameters['C']),
                  kernel=str(parameters['kernel']),
                  random_state=int(parameters['random_state']),
                  max_iter=int(parameters['max_iter']),
                  degree=int(parameters['degree']),
                  gamma=str(parameters['gamma']),
                  probability=True)
    clf.fit(X, y)

    # Para que el modelo tenga persistencia, hacemos un volcado
    joblib.dump(clf, 'model.pkl')

    return jsonify({'accuracy': round(clf.score(X, y) * 100, 2)})


@app.route('/api/predict', methods=['POST'])
def predict():
    # Cogemos el request de los datos y los transformamos al formato del modelo
    X = request.get_json()
    X = [[float(X['sepalLength']), float(X['sepalWidth']),
          float(X['petalLength']), float(X['petalWidth'])]]

    # Leemos el ultimo modelo que hemos entrenado y hacemos las predicciones
    clf = joblib.load('model.pkl')
    probabilities = clf.predict_proba(X)

    # pasamos el formato a jsonify
    json_prediction = jsonify([{'name': 'Iris-Setosa', 'value': round(probabilities[0, 0] * 100, 2)},
                               {'name': 'Iris-Versicolour',
                                   'value': round(probabilities[0, 1] * 100, 2)},
                               {'name': 'Iris-Virginica', 'value': round(probabilities[0, 2] * 100, 2)}])
    return json_prediction


@app.route('/api/trainMLP', methods=['POST'])
def trainMLP():
    # nos traemos los parametros
    parameters = request.get_json()
    # Cargamos el dataset
    iris = datasets.load_iris()
    X, y = iris.data, iris.target
    # Entrenamos el modelo
    mlp = MLPClassifier(hidden_layer_sizes=int(parameters['hidden_layer_sizes']),
                        activation=str(parameters['activation']),
                        solver=str(parameters['solver']),
                        alpha=float(parameters['alpha']),
                        batch_size=int(parameters['batch_size']),
                        learning_rate=str(parameters['learning_rate']),
                        max_iter=int(parameters['max_iter']),
                        momentum=float(parameters['momentum']),
                        early_stopping=bool(parameters['early_stopping'])
                        )
    mlp.fit(X, y)

    # Para la persistencia del modelo, hacemos un dump
    joblib.dump(mlp, 'modelMLP.pkl')
    return jsonify({'accuracy': round(mlp.score(X, y) * 100, 2)})


@app.route('/api/predictMLP', methods=['POST'])
def predictMLP():
    # traemos el request de los datos y lo transnformamos
    X = request.get_json()
    X = [[float(X['sepalLength']), float(X['sepalWidth']),
          float(X['petalLength']), float(X['petalWidth'])]]
    # Cargamos el modelo que hemos entrenado y hacemos la predicción
    mlp = joblib.load('modelMLP.pkl')
    probabilities = mlp.predict_proba(X)

    # volcamos las probabilidades para que angular no tenga trabajo extra:
    return jsonify([{'name': 'Iris-Setosa', 'value': round(probabilities[0, 0] * 100, 2)},
                    {'name': 'Iris-Versicolour',
                        'value': round(probabilities[0, 1] * 100, 2)},
                    {'name': 'Iris-Virginica', 'value': round(probabilities[0, 2] * 100, 2)}])


if __name__ == '__main__':
    # corremos el web service
    app.run(host=HOST,
            debug=True,
            port=PORT)
