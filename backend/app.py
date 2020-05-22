from flask import Flask, request, jsonify
from sklearn import svm
from sklearn import datasets
from sklearn.externals import joblib
from sklearn.neural_network import MLPClassifier

# declare constants
HOST = '0.0.0.0'
PORT = 8081

# initialize flask application
app = Flask(__name__)


@app.route('/api/train', methods=['POST'])
def train():
    # get parameters from request
    parameters = request.get_json()

    # read iris data set
    iris = datasets.load_iris()
    X, y = iris.data, iris.target

    # fit model
    clf = svm.SVC(C=float(parameters['C']),
                  probability=True,
                  random_state=1)
    clf.fit(X, y)

    # persist model
    joblib.dump(clf, 'model.pkl')

    return jsonify({'accuracy': round(clf.score(X, y) * 100, 2)})


@app.route('/api/predict', methods=['POST'])
def predict():
    # get iris object from request
    X = request.get_json()
    X = [[float(X['sepalLength']), float(X['sepalWidth']), float(X['petalLength']), float(X['petalWidth'])]]

    # read model
    clf = joblib.load('model.pkl')
    probabilities = clf.predict_proba(X)

    return jsonify([{'name': 'Iris-Setosa', 'value': round(probabilities[0, 0] * 100, 2)},
                    {'name': 'Iris-Versicolour', 'value': round(probabilities[0, 1] * 100, 2)},
                    {'name': 'Iris-Virginica', 'value': round(probabilities[0, 2] * 100, 2)}])



@app.route('/api/trainMLP', methods=['POST']):
    # read iris data set
    iris = datasets.load_iris()
    X, y = iris.data, iris.target
    # Train the model
    mlp.fit(X, y)

    # Outputs:
    MLPClassifier (activation='relu', alpha=0.0001, batch_size='auto', beta_1=0.9, 
    beta_2=0.999, early_stopping=False, epsilon=1e-08,       
    hidden_layer_sizes=10, learning_rate='constant',      
    learning_rate_init=0.01, max_iter=500, momentum=0.9,       
    nesterovs_momentum=True, power_t=0.5, random_state=None,       
    shuffle=True, solver='sgd', tol=0.0001, validation_fraction=0.1,       
    verbose=False, warm_start=False)

    # persist model
    joblib.dump(mlp, 'modelMLP.pkl')
    return jsonify({'accuracy': round(mlp.score(X, y) * 100, 2)})


@app.route('/api/predictMLP', methods = ['POST']):
    # get iris object from request
    X = request.get_json()
    X = [[float(X['sepalLength']), float(X['sepalWidth']), float(X['petalLength']), float(X['petalWidth'])]]
    
    mlp = joblib.load('modelMLP.pkl')
    probabilities = mlp.predict_proba(X)

    return jsonify([{'name': 'Iris-Setosa', 'value': round(probabilities[0, 0] * 100, 2)},
                    {'name': 'Iris-Versicolour', 'value': round(probabilities[0, 1] * 100, 2)},
                    {'name': 'Iris-Virginica', 'value': round(probabilities[0, 2] * 100, 2)}])



if __name__ == '__main__':
    # run web server
    app.run(host=HOST,
            debug=True,  # automatic reloading enabled
            port=PORT)
