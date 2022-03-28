import React from 'react';

import Ima_1 from '../media/Article1.jpg';
import Ima_2 from '../media/Article2.jpg';

import Event_1 from '../media/Event1.png';
import Event_2 from '../media/Event2.jpg';

import Exp_1 from '../media/Exp1.jpg';
import Exp_2 from '../media/Exp2.jpg';

// Definicion de los prototipos de articulos, su implementacion en la pagina final dependera del
// metdo de almacenado que desee utilizar o si un microservicio se encargara del fetch

export const PostData = [{

    header: 'Articulo 1',
    subtitle: "Title for post 1, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim sit amet nisl vel sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra,",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim sit amet nisl vel sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus viverra luctus lacus id sagittis. Sed quis purus a elit egestas suscipit. Curabitur non erat ultrices, facilisis ante ac, consequat nisl. Praesent id quam felis. Pellentesque ultrices elementum nibh id sagittis. Cras vel rhoncus ante, sit amet finibus nibh. Cras euismod non velit commodo faucibus. Phasellus pulvinar nisl id magna scelerisque vehicula.",
    
    // El cuerpo de la sentencia dependera de la implementacion
    body: <div>
            <h1>Subtittle 1</h1>
            <p>paragraph_1. Vivamus lacinia ligula at turpis condimentum bibendum sodales eu nulla. Vivamus in pulvinar nibh, eu tincidunt leo. Aliquam erat volutpat. Curabitur turpis nisl, mollis sit amet mi id, posuere gravida enim. In nulla massa, suscipit id eros eget, suscipit porta lorem. Proin sodales nunc in felis rutrum vulputate. Sed imperdiet, lectus pretium tincidunt tristique, risus nulla molestie sapien, vel mollis felis elit eget orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris nisl felis, laoreet vulputate porta at, volutpat porttitor purus. Integer vitae ex in nunc congue pulvinar. Nunc pellentesque orci non neque consectetur, a elementum neque dapibus. Mauris eget nulla ut turpis eleifend consectetur. Aenean ut mi convallis velit rhoncus cursus quis at justo.</p>
        </div>,
    image: Ima_1,
    // Queda por definir el enrutamiento ed la pagina
    path: "Articulo1"
    },
    {
    header: 'Articulo 2',
    subtitle: "Title for post 1, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim sit amet nisl vel sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra,",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim sit amet nisl vel sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus viverra luctus lacus id sagittis. Sed quis purus a elit egestas suscipit. Curabitur non erat ultrices, facilisis ante ac, consequat nisl. Praesent id quam felis. Pellentesque ultrices elementum nibh id sagittis. Cras vel rhoncus ante, sit amet finibus nibh. Cras euismod non velit commodo faucibus. Phasellus pulvinar nisl id magna scelerisque vehicula.",
    body:<div>
            <h1>Subtittle 1</h1>
            <p>paragraph_1. Vivamus lacinia ligula at turpis condimentum bibendum sodales eu nulla. Vivamus in pulvinar nibh, eu tincidunt leo. Aliquam erat volutpat. Curabitur turpis nisl, mollis sit amet mi id, posuere gravida enim. In nulla massa, suscipit id eros eget, suscipit porta lorem. Proin sodales nunc in felis rutrum vulputate. Sed imperdiet, lectus pretium tincidunt tristique, risus nulla molestie sapien, vel mollis felis elit eget orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris nisl felis, laoreet vulputate porta at, volutpat porttitor purus. Integer vitae ex in nunc congue pulvinar. Nunc pellentesque orci non neque consectetur, a elementum neque dapibus. Mauris eget nulla ut turpis eleifend consectetur. Aenean ut mi convallis velit rhoncus cursus quis at justo.</p>
        </div>,
    image: Ima_2,
    path: "Articulo2"
    },

    {
    header: 'Evento 1',
    subtitle: "Title for evento 1, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim sit amet nisl vel sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra,",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim sit amet nisl vel sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus viverra luctus lacus id sagittis. Sed quis purus a elit egestas suscipit. Curabitur non erat ultrices, facilisis ante ac, consequat nisl. Praesent id quam felis. Pellentesque ultrices elementum nibh id sagittis. Cras vel rhoncus ante, sit amet finibus nibh. Cras euismod non velit commodo faucibus. Phasellus pulvinar nisl id magna scelerisque vehicula.",
    body:<div>
            <h1>Subtittle 1</h1>
            <p>paragraph_1. Vivamus lacinia ligula at turpis condimentum bibendum sodales eu nulla. Vivamus in pulvinar nibh, eu tincidunt leo. Aliquam erat volutpat. Curabitur turpis nisl, mollis sit amet mi id, posuere gravida enim. In nulla massa, suscipit id eros eget, suscipit porta lorem. Proin sodales nunc in felis rutrum vulputate. Sed imperdiet, lectus pretium tincidunt tristique, risus nulla molestie sapien, vel mollis felis elit eget orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris nisl felis, laoreet vulputate porta at, volutpat porttitor purus. Integer vitae ex in nunc congue pulvinar. Nunc pellentesque orci non neque consectetur, a elementum neque dapibus. Mauris eget nulla ut turpis eleifend consectetur. Aenean ut mi convallis velit rhoncus cursus quis at justo.</p>
        </div>,
    image: Event_1,
    path: "Evento1"
    },
    {
    header: 'Evento 2',
    subtitle: "Title for evento 2, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim sit amet nisl vel sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra,",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim sit amet nisl vel sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus viverra luctus lacus id sagittis. Sed quis purus a elit egestas suscipit. Curabitur non erat ultrices, facilisis ante ac, consequat nisl. Praesent id quam felis. Pellentesque ultrices elementum nibh id sagittis. Cras vel rhoncus ante, sit amet finibus nibh. Cras euismod non velit commodo faucibus. Phasellus pulvinar nisl id magna scelerisque vehicula.",
    body:<div>
            <h1>Subtittle 1</h1>
            <p>paragraph_1. Vivamus lacinia ligula at turpis condimentum bibendum sodales eu nulla. Vivamus in pulvinar nibh, eu tincidunt leo. Aliquam erat volutpat. Curabitur turpis nisl, mollis sit amet mi id, posuere gravida enim. In nulla massa, suscipit id eros eget, suscipit porta lorem. Proin sodales nunc in felis rutrum vulputate. Sed imperdiet, lectus pretium tincidunt tristique, risus nulla molestie sapien, vel mollis felis elit eget orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris nisl felis, laoreet vulputate porta at, volutpat porttitor purus. Integer vitae ex in nunc congue pulvinar. Nunc pellentesque orci non neque consectetur, a elementum neque dapibus. Mauris eget nulla ut turpis eleifend consectetur. Aenean ut mi convallis velit rhoncus cursus quis at justo.</p>
        </div>,
    image: Event_2,
    path: "Evento2"
    },
    
    {
    header: 'Experiencia 1',
    subtitle: "Title for evento 2, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim sit amet nisl vel sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra,",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim sit amet nisl vel sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus viverra luctus lacus id sagittis. Sed quis purus a elit egestas suscipit. Curabitur non erat ultrices, facilisis ante ac, consequat nisl. Praesent id quam felis. Pellentesque ultrices elementum nibh id sagittis. Cras vel rhoncus ante, sit amet finibus nibh. Cras euismod non velit commodo faucibus. Phasellus pulvinar nisl id magna scelerisque vehicula.",
    body:<div>
            <h1>Subtittle 1</h1>
            <p>paragraph_1. Vivamus lacinia ligula at turpis condimentum bibendum sodales eu nulla. Vivamus in pulvinar nibh, eu tincidunt leo. Aliquam erat volutpat. Curabitur turpis nisl, mollis sit amet mi id, posuere gravida enim. In nulla massa, suscipit id eros eget, suscipit porta lorem. Proin sodales nunc in felis rutrum vulputate. Sed imperdiet, lectus pretium tincidunt tristique, risus nulla molestie sapien, vel mollis felis elit eget orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris nisl felis, laoreet vulputate porta at, volutpat porttitor purus. Integer vitae ex in nunc congue pulvinar. Nunc pellentesque orci non neque consectetur, a elementum neque dapibus. Mauris eget nulla ut turpis eleifend consectetur. Aenean ut mi convallis velit rhoncus cursus quis at justo.</p>
        </div>,
    image: Exp_1,
    path: "Experiencia1",
    },
    {
    header: 'Experiencia 2',
    subtitle: "Title for evento 2, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim sit amet nisl vel sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra,",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim sit amet nisl vel sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus viverra luctus lacus id sagittis. Sed quis purus a elit egestas suscipit. Curabitur non erat ultrices, facilisis ante ac, consequat nisl. Praesent id quam felis. Pellentesque ultrices elementum nibh id sagittis. Cras vel rhoncus ante, sit amet finibus nibh. Cras euismod non velit commodo faucibus. Phasellus pulvinar nisl id magna scelerisque vehicula.",
    body:<div>
            <h1>Subtittle 1</h1>
            <p>paragraph_1. Vivamus lacinia ligula at turpis condimentum bibendum sodales eu nulla. Vivamus in pulvinar nibh, eu tincidunt leo. Aliquam erat volutpat. Curabitur turpis nisl, mollis sit amet mi id, posuere gravida enim. In nulla massa, suscipit id eros eget, suscipit porta lorem. Proin sodales nunc in felis rutrum vulputate. Sed imperdiet, lectus pretium tincidunt tristique, risus nulla molestie sapien, vel mollis felis elit eget orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris nisl felis, laoreet vulputate porta at, volutpat porttitor purus. Integer vitae ex in nunc congue pulvinar. Nunc pellentesque orci non neque consectetur, a elementum neque dapibus. Mauris eget nulla ut turpis eleifend consectetur. Aenean ut mi convallis velit rhoncus cursus quis at justo.</p>
        </div>,
    image: Exp_2,
    path: "Experiencia2"
    },
]