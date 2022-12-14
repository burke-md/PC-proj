class Data {
    constructor(target, pitty) {
        this.rounds = 1_000_000;
        this.targetPercentage = target;
        this.pittyRound = pitty;

        this.outcomeCounter = 0;
        this.pittyCounter = 0;
        this.sequentialLossCounter = 0;
        this.outcomePercentage = null;
        this.adjustedOutcomePercentage = null;
    }

    displayOutput() {
        console.log(`
            TEST OUTPUT:
            ===========
            outcomeCounter: ${this.outcomeCounter} 
            consecuitive losses before guarenteed win: ${this.pittyRound}
            targetPercentae: ${this.targetPercentage}
            outcomePercentae: ${this.outcomePercentage}
            adjustedOutcomePercentae: ${this.adjustedOutcomePercentage}
            `);
    }
}

const runTest = (info) => {
    for (let i = info.rounds; i > 0; i--) {
        const value = Math.floor(Math.random() * 99);

        // Count wins, count number of large sequential losses (2nd arg in def)
        if (value < info.targetPercentage - 1) {
            info.outcomeCounter++;
            info.sequentialLossCounter = 0;
        } else {
            info.sequentialLossCounter++;
            if (info.sequentialLossCounter == info.pittyRound) {
                info.sequentialLossCounter = 0;
                info.pittyCounter++;
            }
        }
    }

    info.outcomePercentage = info.outcomeCounter / info.rounds * 100;
    info.adjustedOutcomePercentage = 
                (info.outcomeCounter + info.pittyCounter) / info.rounds * 100;

    info.displayOutput();
}

const test1 = new Data(10, 11);

runTest(test1);
