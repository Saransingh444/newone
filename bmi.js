// /function call
bmiCompare();

function bmi(mass, height)
//function to calculate bmi

{
var BMIVal;

//bmi formula
BMIVal = (mass) / (height * height);

return BMIVal;
}

function bmiCompare(){
//function to compare bmi values

//storing mass and height values
let markMass = 78;
let johnMass = 92;
let markHt = 1.69;
let johnHt= 1.95;

//declaring bmi result values of mark and john
let markbmi ;
let johnbmi ;

//bmi calculation function call
markbmi = bmi(markMass , markHt );
johnbmi = bmi(johnMass , johnHt);

//comparing the greater bmi value
if(markbmi < johnbmi ){
console.log("John's BMI ("+ johnbmi +") is greater than Mark’s BMI ( "+ markbmi + ")");
}if(johnbmi < markbmi ){
console.log("John’s BMI ("+ johnbmi +") is less than Mark’s BMI ( "+ markbmi + ")");
}
if(markbmi == johnbmi ){
console.log("John’s BMI ("+ johnbmi +") is equal to Mark’s BMI ( "+ markbmi +")");
}
}
