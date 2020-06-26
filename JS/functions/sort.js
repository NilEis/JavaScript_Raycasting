function bubbleSort(arr) {
    var length = arr.length;
    for (var i = (length - 1); i >= 0; i--) {
        for (var j = (length - i); j > 0; j--) {
            setTimeout((arr, j) => {
                if (arr[j] < arr[j - 1]) {
                    var tmp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = tmp;
                }
                draw();
            }, 0, arr, j);
        }
    }
}

function bogoSort(arr) {
    let sorted = false;
    while (!sorted) {
        shuffle(arr);
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                sorted = false;
                break;
            }
            sorted = true;
        }
    }
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}