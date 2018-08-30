function create() {
    var result = [];
    for (let i = 0; i < 10; i++) {
        result[i] = function () {
            return i;
        }
    }
    return result;
}

var arr = create();
for(let i = 0; i<arr.length;i++){
    console.log(arr[i]())
}