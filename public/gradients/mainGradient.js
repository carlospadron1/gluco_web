var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    stateTransitionSpeed:10000,
    states : {
        "default-state": {
            gradients: [
                ['#43c6ac', '#f8ffae'],
                ['#67b26f', '#4ca2cd'],
                ['#53b4d3', '#348f50']
            ]
        }
    }
});