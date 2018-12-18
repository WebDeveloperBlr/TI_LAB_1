const math = require('mathjs');

const initialData = [[1,1],[1,2],[1,3],[1,4],[2,4],[3,4],[4,4],[4,5],
    [4,6],[5,7],[6,7],[7,7],[8,7],[9,7],[10,6],[11,5],[12,4],[13,3],[13,2],
    [13,1], [12,1], [11,1], [10,1],[9,1],[8,1],[7,1],[6,1],[5,1],[4,1],[3,1],[2,1]];

const testArrX = [1,1,1,2,3,4,5,6,7,7,7,6,5,4,3,2];
const testArrY = [2,3,4,5,6,7,7,6,5,4,3,2,1,1,1,1];

const xArray = initialData.map(([x, y]) => x);
const yArray = initialData.map(([x, y]) => y);

function _gv(arr) {
    const N = arr.length;

    return arr.map((g, v) => {
        const newG = Array.from({ length: N })
            .reduce((acc, next, n) =>
                    acc += arr[n] * (Math.cos(2 * Math.PI * n * v / N) + Math.sin(2 * Math.PI * n * v / N))
                , 0);
        return +newG.toFixed(2);
    })
}

function _gn(arr, N) {

    return Array.from({ length: N }).map((g, n) => {
        const newG = Array.from({ length: arr.length })
            .reduce((acc, next, v) =>
                    acc += arr[v] * (Math.cos(2 * Math.PI * n * v / arr.length) + Math.sin(2 * Math.PI * n * v / arr.length))
                , 0);
        console.log(newG);

        return +(1/arr.length * newG).toFixed(2);
    })
}


const _gvX = _gv(testArrX);
const _gvY = _gv(yArray);
/*const _gnX = _gn(_gvX);
const _gnY = _gn(_gvY);*/
// const _gnX = _gn([205,-115.26,7.62,-11.05,-9.34,-37.93], _gvX.length);
const _gnX = _gn([64,-31.72,-13.14], _gvX.length);
console.log(`gnx [${_gnX}]`);

