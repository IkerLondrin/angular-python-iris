export class Iris {
    sepalLength: number = 5.0;
    sepalWidth: number = 7.5;
    petalLength: number = 2.5;
    petalWidth: number = 1.2;
}

export class ProbabilityPrediction {
    name: string;
    value: number;
}

export class SVCParameters {
    C: number = 2.0;
    kernel: string = "linear";
    degree: number = 3;
    gamma: string = 'auto';
    max_iter: number = -1;
    random_state: number = 10;
}


class idDesc {
    id: string;
    desc: string;
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
    early_stopping: string = "False";
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
        kernel: [
            idDesc
        ];
        degree: number;
        gamma: string[];
        max_iter: number;
        random_state: number
    }

    MLP: {
        hidden_layer_sizes: number;
        activation: [idDesc];
        solver: string[];
        alpha: number;
        batch_size: number;
        learning_rate: string[];
        max_iter: number;
        momentum: number;
        early_stopping: [idDesc];
    }
}


