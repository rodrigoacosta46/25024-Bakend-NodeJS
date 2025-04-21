const precios = [2300, 14589, 900, 5000, 30000, 1500];
precios.push(35, 5000, 3429);
console.table(precios);
const preciosActualizados = precios.map((item) => item * 1.21);
console.table(preciosActualizados);
precios.forEach((item,index)=>{
    console.log(index,item);
    // console.log(item);
    
})
