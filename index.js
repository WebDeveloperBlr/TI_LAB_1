const initialData = [[1, 1], [1, 2], [2, 2], [2, 3], [2, 4], [3, 4], [4, 4], [5, 4],
  [6, 2], [7, 2], [7, 1], [6, 1], [5, 1], [4, 1], [3, 1], [2, 1]];

const testArrX = [1, 1, 1, 2, 3, 4, 5, 6, 7, 7, 7, 6, 5, 4, 3, 2];
const testArrY = [2, 3, 4, 5, 6, 7, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1];

const xArray = initialData.map(([x, y]) => x);
const yArray = initialData.map(([x, y]) => y);

function _gv(arr) {
  const N = arr.length;

  return arr.map((g, v) => {
    const newG = Array.from({length: N})
      .reduce((acc, next, n) =>
          acc += arr[n] * (Math.cos(2 * Math.PI * n * v / N) + Math.sin(2 * Math.PI * n * v / N))
        , 0);
    return +newG.toFixed(2);
  })
}

function _gn(arr, N) {
  const arrLength = arr.length;
  return Array.from({length: N}).map((g, n) => {
    return Array.from({length: arrLength})
      .reduce((acc, next, v) =>
          acc += arr[v] * (Math.cos(2 * Math.PI * n * v / arr.length) + Math.sin(2 * Math.PI * n * v / arr.length)) / N
        , 0).toFixed(2);

  })
}

function filterArray(array, endSize) {
  const filter = array.concat().sort((a, b) => Math.abs(b) - Math.abs(a)).slice(0, endSize);
  return array.map((item) => filter.find((f) => f === item ) ? item : 0);
}

const _gvX = _gv(xArray);
const _gvY = _gv(yArray);

console.log(`gvx [${_gvX}]`);
console.log(`gvY [${_gvY}]`);

// console.log(`sorted ${filterArray(_gvX, 3)}`);
/*const _gnX = _gn(_gvX);
const _gnY = _gn(_gvY);*/
// const _gnX = _gn([205,-115.26,7.62,-11.05,-9.34,-37.93], _gvX.length);
const res__1_X = _gn(filterArray(_gvX, 11), xArray.length);
const res__1_Y = _gn(filterArray(_gvY, 11), xArray.length);
const res__2_X = _gn(filterArray(_gvX, 6), xArray.length);
const res__2_Y = _gn(filterArray(_gvY, 6), xArray.length);
const res__3_X = _gn(filterArray(_gvX, 3), xArray.length);
const res__3_Y = _gn(filterArray(_gvY, 3), xArray.length);
// const res__1 = _gn([60, -30,315, 3,429, -2,119, -1,986, -1,113, 0,984, -1,928, -0,636, -3,367, -5,998,], _gvX.length);
// const _gnX = _gn([64,-31.72,-13.14], _gvX.length);
console.log(`Эксперимент 1 X [${res__1_X}]`);
console.log(`Эксперимент 1 Y [${res__1_Y}]`);
console.log(`Эксперимент 2 X [${res__2_X}]`);
console.log(`Эксперимент 2 Y [${res__2_Y}]`);
console.log(`Эксперимент 3 X [${res__3_X}]`);
console.log(`Эксперимент 3 Y [${res__3_Y}]`);

const pictures = [
  [res__1_X, res__1_Y],
  [res__2_X, res__2_Y],
  [res__3_X, res__3_Y]
];

const scale = 20;
const canvheight = 300;
const canvwidth = 300;

pictures.forEach(([xArray, yArray], idx) => {
  const canv = document.createElement('canvas');
  canv.setAttribute('id', `canv - ${idx}`);
  canv.style.height = `${canvheight}px`;
  canv.style.width = `${canvwidth}px`;
  canv.style.transform = `rotate(180deg) scale(-1, 1)`;
  document.body.appendChild(canv);

  const ctx = canv.getContext('2d');
  ctx.beginPath();

  ctx.moveTo(Math.round(xArray[0]) * scale, Math.round(yArray[0]) * scale);

  xArray.forEach((x, idx) => {
    ctx.lineTo(Math.round(xArray[idx]) * scale, Math.round(yArray[idx]) * scale)
  });

  ctx.lineTo(Math.round(xArray[0]) * scale, Math.round(yArray[0]) * scale);

  ctx.stroke();

});



