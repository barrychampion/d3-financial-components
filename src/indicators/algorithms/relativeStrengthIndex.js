(function(d3, fc) {
    'use strict';

    fc.indicators.algorithms.relativeStrengthIndex = function() {

        var rsi = fc.indicators.algorithms.calculators.relativeStrengthIndex();

        var mergedAlgorithm = fc.indicators.algorithms.merge()
                .algorithm(rsi)
                .merge(function(datum, rsi) { datum.rsi = rsi; });

        var relativeStrengthIndex = function(data) {
            return mergedAlgorithm(data);
        };

        d3.rebind(relativeStrengthIndex, mergedAlgorithm, 'merge');
        d3.rebind(relativeStrengthIndex, rsi, 'windowSize', 'openValue', 'closeValue');

        return relativeStrengthIndex;
    };
}(d3, fc));
