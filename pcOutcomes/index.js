class Data {
    constructor(target) {
        this.rounds = 100_000;
        this.targetPercentage = target;
        this.outcomePercentage = null;
        this.outcomeCounter = 0;
    }
}

const runTest = (info) => {
    for (let i = info.rounds; i > 0; i--) {
        const value = Math.floor(Math.random() * 99);
        //console.log(value);
        if (value < info.targetPercentage - 1) {
            info.outcomeCounter++;
        }
    }

    info.outcomePercentage = (info.outcomeCounter / info.rounds) * 100;

    console.log(`outcomeCounter: ${info.outcomeCounter}`);
    console.log(`targetPercentae: ${info.targetPercentage}`);
    console.log(`outcomePercentae: ${info.outcomePercentage}`);
}

const test1 = new Data(10);

runTest(test1);
