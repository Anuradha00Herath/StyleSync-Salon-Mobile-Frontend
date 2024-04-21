let beforeHour, middleHour, endHour, temp;
let beforeMin, middleMin, afterMin;

export function IncreaseHours(startBeforeHour, startMiddleHour, startAfterHour) {
    console.log("Before increment:", startBeforeHour, startMiddleHour, startAfterHour);

    let tempBeforeHour = startBeforeHour + 1;
    let tempMiddleHour = startMiddleHour + 1;
    let tempAfterHour = startAfterHour + 1;

    
    if (tempBeforeHour > 23) {
        tempBeforeHour = 0;
    }
    if (tempMiddleHour > 23) {
        tempMiddleHour = 0;
    }
    if (tempAfterHour > 23) {
        tempAfterHour = 0;
    }

    console.log("After increment:", tempBeforeHour, tempMiddleHour, tempAfterHour);

    return [tempBeforeHour, tempMiddleHour, tempAfterHour];
}

export function IncreaseMinutes(startBeforeMin, startMiddleMin, startAfterMin) {
    console.log("Before increment:", startBeforeMin, startMiddleMin, startAfterMin);

    let tempBeforeMin = startBeforeMin + 1;
    let tempMiddleMin = startMiddleMin + 1;
    let tempAfterMin = startAfterMin + 1;

    if (tempBeforeMin > 59) {
        tempBeforeMin = 0;
    }
    if (tempMiddleMin > 59) {
        tempMiddleMin = 0;
    }
    if (tempAfterMin > 59) {
        tempAfterMin = 0;
    }

    console.log("After increment:", tempBeforeMin, tempMiddleMin, tempAfterMin);

    return [tempBeforeMin, tempMiddleMin, tempAfterMin];
}

export function DecreaseHours(startBeforeHour, startMiddleHour, startAfterHour){
    console.log("Before increment:", startBeforeHour, startMiddleHour, startAfterHour);

    let tempBeforeHour = startBeforeHour - 1;
    let tempMiddleHour = startMiddleHour - 1;
    let tempAfterHour = startAfterHour - 1;


    if (tempBeforeHour < 0) {
        tempBeforeHour = 23;
    }
    if (tempMiddleHour < 0) {
        tempMiddleHour = 23;
    }
    if (tempAfterHour < 0) {
        tempAfterHour = 23;
    }

    console.log("After increment:", tempBeforeHour, tempMiddleHour, tempAfterHour);

    return [tempBeforeHour, tempMiddleHour, tempAfterHour];
}

export function DecreaseMinutes(startBeforeMin, startMiddleMin, startAfterMin) {
    console.log("Before increment:", startBeforeMin, startMiddleMin, startAfterMin);

    let tempBeforeMin = startBeforeMin - 1;
    let tempMiddleMin = startMiddleMin - 1;
    let tempAfterMin = startAfterMin - 1;

    if (tempBeforeMin < 0) {
        tempBeforeMin = 59;
    }
    if (tempMiddleMin < 0) {
        tempMiddleMin = 59;
    }
    if (tempAfterMin < 0) {
        tempAfterMin = 59;
    }

    console.log("After increment:", tempBeforeMin, tempMiddleMin, tempAfterMin);

    return [tempBeforeMin, tempMiddleMin, tempAfterMin];
}