module.exports = function getZerosCount(number, base) {
  // your implementation
  let Allzeros = number; 
  for (let i = 2; i <= base; i++){
      if (base % i === 0){
      	let countDividor = 0; 
        while (base % i === 0){
          countDividor++;
          base = base / i;
        }
        let zeros = 0;
        let OvNum = number;
        while (OvNum / i > 0){
          zeros += Math.floor(OvNum / i);
          OvNum = Math.floor(OvNum /i);
        }
        Allzeros = Math.min(Allzeros, Math.floor(zeros /countDividor));
      }
  }
  return Allzeros;
};