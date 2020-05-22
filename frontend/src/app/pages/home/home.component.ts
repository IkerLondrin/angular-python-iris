import { Component, OnInit } from '@angular/core';
// import {
//     Iris,
//     ProbabilityPrediction,
//     SVCParameters,
//     SVCResult
// } from "../../components/selector-modelo/types";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    accuracyModelo: any;

    // graph styling
    public colorScheme = {
        domain: ['#1a242c', '#e81746', '#e67303', '#f0f0f0']
    };

    modeloSeleccionado: string; 

    // Modelos disponiblees
    modelosDisponibles = [
        {
            model: 'Support Vector Machine',
            id: 'SVM'
        },
        { 
            model: 'Multi Layer Perceptron', 
            id: 'MLP'}
    ];


    constructor() {
    }

    ngOnInit() {
    }

    // Con esto recibimos la precisión del modelo del componente que
    // hace el entrenamiento. Ahora podemos propagar esta variable
    // a otros componentes
    AccuracyShare(event) {
        this.accuracyModelo = event;
    }




}
