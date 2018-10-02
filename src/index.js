module.exports = function solveSudoku(matrix) {
  
 
  function matrixCopy(){
  var tempTemp = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];;
  for (a=0; a<9; a++){
  for (b=0; b<9; b++){
  tempTemp[a][b] = matrix[a][b];
  };
  };
  return tempTemp;
  };
  
  function reverse(array){
  
  var exemple = [1,2,3,4,5,6,7,8,9];
  var temp5 =[];
  for (var i=0; i <exemple.length; i++) {
     for (var j = 0; j <array.length; j++){
  if (exemple[i] === array[j]) {
  exemple[i] = 0;
  };
  };
  if (exemple[i] != 0){
  temp5.push(exemple[i]);
  };
  };
  return temp5;
  };
  
  function getUnic(array) {
  tempArray = [];
  
  for (var i = 1; i<=9; i++){
  var count = 0;
  
  for (var j = 0; j<array.length; j++){
  if (array[j] === i){
  count++;
  };
  };
  if (count=== 1){
  tempArray.push(i);
  };
  };
  return tempArray;
  };
  //
  var chapter =0;
  while (chapter<=1620) {
  
  //
  var temp1 = matrixCopy();
  
  for (var eee = 0; eee<9; eee+=3){
  for (var ggg = 0; ggg<9; ggg+=3){
  
  var tempA = [];
  
  for (var i=eee; i<eee+3; i++){
  for (var j=ggg; j<ggg+3; j++){
  
  if (matrix[i][j] != 0){
  tempA.push(matrix[i][j]);
  }; 
  };
  };
  
  
  for (var i=eee; i<eee+3; i++){
  for (var j=ggg; j<ggg+3; j++){
  
  if (matrix[i][j] === 0){
  temp1[i][j]=tempA;
  }; 
  };
  };
  
  };
  };
  
  //
  var temp2 = matrixCopy();
  for (a=0; a<9; a++){
  for (b=0; b<9; b++){
  temp2[a][b] = matrix[a][b];
  };
  };
  
  for (var i = 0; i<9; i++){
  var tempB = [];
  
  for (var j = 0; j<9; j++){
  if (matrix[i][j] != 0){
  tempB.push(matrix[i][j]);
  };
  };
  
  for (var jj = 0; jj<9; jj++){
  if (matrix[i][jj] === 0){
  temp2[i][jj] = (tempB);
  };
  };
  
  };
  
  //
  var temp3 = matrixCopy();
  for (a=0; a<9; a++){
  for (b=0; b<9; b++){
  temp3[a][b] = matrix[a][b];
  };
  };
  
  for (var i = 0; i<9; i++){
  var tempB = [];
  
  for (var j = 0; j<9; j++){
  if (matrix[j][i] != 0){
  tempB.push(matrix[j][i]);
  };
  };
  
  for (var jj = 0; jj<9; jj++){
  if (matrix[jj][i] === 0){
  temp3[jj][i] = (tempB);
  };
  };
  
  };
  
  //
  var temp4 = matrixCopy();
  for (a=0; a<9; a++){
  for (b=0; b<9; b++){
  
  if (temp4[a][b] === 0 ){
  temp4[a][b] = reverse(temp1[a][b].concat(temp2[a][b]).concat(temp3[a][b]));
  
  
  
  };
  
  };
  };
  
  ///
  
  
  
  //
  //
  //
  for (var a1 = 0; a1<9; a1++){
  
  var tempG1 = [];
  for (var b1 = 0; b1<9; b1++){
  if (matrix[b1][a1]===0){
  tempG1 = tempG1.concat(temp4[b1][a1]);
  };
  };
  // 
  if (tempG1 != []){
  var tempE1 =getUnic(tempG1);
  if (tempE1.length >= 1){
  //
  for (var c1 =0; c1<9; c1++){
  if (matrix[c1][a1]===0){
  //
  for (var z1=0; z1<temp4[c1][a1].length; z1++){
  if (temp4[c1][a1][z1]===tempE1[0]){
  temp4[c1][a1] = tempE1[0];
  matrix[c1][a1] = tempE1[0];
  //chistim temp4 v etoy stroke
  
  for (var a5 = 0; a5<9; a5++){
  for (var z5=0; z5<temp4[c1][a5].length; z5++){
  if (temp4[c1][a5][z5]===tempE1[0]){
  temp4[c1][a5].splice(z5,1);
  };
  };
  };
  // chistim blok
  for (var a6 = 0; a6<9; a6+=3){
  for (var b6 = 0; b6<9; b6+=3){
  if (c1 >= a6 && c1 < (a6+3) && a1 >= b6 && a1 < (b6+3)){
  for (var i6 = a6; i6< (a6+3); i6++){
  for (var j6 = b6; j6< (b6+3); j6++){
  for (var z6 = 0; z6 < temp4[i6][j6].length; z6++){
  if (temp4[i6][j6][z6] === tempE1[0]){
  temp4[i6][j6].splice(z6,1);
  };
  };
  };
  };
  };
  };
  };
  
  
  //
  };
  };
  };
  };
  };
  };
  };
  //
  //
  //
  for (var a2 = 0; a2<9; a2++){
  
  var tempG2 = [];
  for (var b2 = 0; b2<9; b2++){
  if (matrix[a2][b2]===0){
  tempG2 = tempG2.concat(temp4[a2][b2]);
  };
  };
  // tempG -massiv iz vseh variantov
  if (tempG2 != []){
  var tempE2 =getUnic(tempG2);
  if (tempE2.length >= 1){
  //tempE -massiv iz unikalnyh veriantov
  for (var c2 =0; c2<9; c2++){
  if (matrix[a2][c2]===0){
  //ischem v stroke a gde eti unikumy
  for (var z2=0; z2<temp4[a2][c2].length; z2++){
  if (temp4[a2][c2][z2]===tempE2[0]){
  temp4[a2][c2] = tempE2[0];
  matrix[a2][c2] = tempE2[0];
  //chistim temp4 
  
  for (var b5 = 0; b5<9; b5++){
  for (var z4=0; z4<temp4[b5][c2].length; z4++){
  if (temp4[b5][c2][z4]===tempE2[0]){
  temp4[b5][c2].splice(z4,1);
  };
  };
  };
  // chistim blok
  for (var a6 = 0; a6<9; a6+=3){
  for (var b6 = 0; b6<9; b6+=3){
  if (a2 >= a6 && a2 < (a6+3) && c2 >= b6 && c2 < (b6+3)){
  for (var i6 = a6; i6< (a6+3); i6++){
  for (var j6 = b6; j6< (b6+3); j6++){
  for (var z6 = 0; z6 < temp4[i6][j6].length; z6++){
  if (temp4[i6][j6][z6] === tempE2[0]){
  temp4[i6][j6].splice(z6,1);
  };
  };
  };
  };
  };
  };
  };
  
  
  //
  };
  };
  };
  };
  };
  };
  };
  // 
  // 
  //
  
  for (var eee = 0; eee<9; eee+=3){
  for (var ggg = 0; ggg<9; ggg+=3){
  var tempG = [];
  
  for (var i=eee; i<eee+3; i++){
  for (var j=ggg; j<ggg+3; j++){
  
  if (matrix[i][j]===0){
  tempG = tempG.concat(temp4[i][j]);
  };
  };
  };
  
  //
  if (tempG != []){
  var tempE =getUnic(tempG);
  
  if (tempE.length >= 1){
  //
  
  for (var a=eee; a<eee+3; a++){
  for (var b=ggg; b<ggg+3; b++){
  for (var z = 0; z<temp4[a][b][z]; z++){
  if (temp4[a][b][z]===tempE[0]){
  temp4[a][b] = tempE[0];
  matrix[a][b] = tempE[0];
  
  //chistim temp4 
  
  for (var a15 = 0; a15<9; a15++){
  for (var z15=0; z15<temp4[a15][b].length; z15++){
  if (temp4[a15][b][z15]===tempE[0]){
  temp4[a15][b].splice(z15,1);
  };
  };
  };
  //chistim temp4 
  
  for (var b15 = 0; b15<9; b15++){
  for (var z14=0; z14<temp4[a][b15].length; z14++){
  if (temp4[a][b15][z14]===tempE[0]){
  temp4[a][b15].splice(z14,1);
  };
  };
  };
  };
  //
  
  
  
  };
  };
  };
  
  
  };
  };
  
  };
  };
  
  for (var i8 = 0; i8<9; i8++){
  for (var j8=0; j8<9; j8++){
  if (temp4[i8][j8].length === 1){
  temp4[i8][j8] = temp4[i8][j8][0];
  matrix[i8][j8] = temp4[i8][j8];
  };
  };
  };
  
  var zeroCount = 0;
  for (var a100 = 0; a100<9; a100++){
  for (var b100 = 0; b100<9; b100++){
  if (matrix[a100][b100]===0){
  zeroCount++;
  };
  };
  };
  
  
  if (chapter !=0 && (chapter/81) === Math.floor(chapter/81) && zeroCount > 0){
  top:
  for (var a200 = 0; a200<9; a200++){
  for (var b200 = 0; b200<9; b200++){
  if (matrix[a200][b200]===0){
  matrix[a200][b200] = temp4[a200][b200][0];
  break top;
  };
  }; 
  };
  };
  
  
  chapter++;
  };
 
  return matrix;
}
