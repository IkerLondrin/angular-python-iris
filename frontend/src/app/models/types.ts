export class Iris {
    sepalLength: number = 5.0;
    sepalWidth: number = 3.5;
    petalLength: number = 2.5;
    petalWidth: number = 1.2;
}

export class ProbabilityPrediction {
    name: string;
    value: number;
}

export class SVCParameters {
    C: number = 2.0;
}

export class SVCResult {
    accuracy: number;
}

export class MLPParameters {
    hidden_layer_sizes: number = 10;
    activation: string = 'relu';
    solver: string = 'adam';
    alpha: number = 0.0001;
    batch_size: number = 15;
    learning_rate: string = 'constant';
    max_iter: number = 200;
    momentum: number = 0.9;
    early_stopping: boolean = false;
}

export class MLPResult {
    accuracy: number;
}


export class MLPProbabilityPrediction {
    name: string;
    value: number;
}

export class modelsConfig {
    SVC: {
        C: number;
    }

    MLP: {
        hidden_layer_sizes: number;
        activation: string[];
        solver: string[];
        alpha: number;
        batch_size: number;
        learning_rate: string[];
        max_iter: number;
        momentum: number;
        early_stopping: string[];
    }
}


