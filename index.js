const inputEl = document.querySelector('#input-el');
const btnEl = document.querySelector('#btn-el');
const length = document.querySelector('#length');
const vol = document.querySelector('#volume');
const mass = document.querySelector('#mass')



btnEl.addEventListener('click', function() {
    const valueInNumber = Number(inputEl.value);
    const mToFt = (valueInNumber * 3.281).toFixed(3);
    const ftToM = (valueInNumber/3.281).toFixed(3);
    const litToGal = (valueInNumber * 0.264).toFixed(3);
    const galToLit = (valueInNumber/0.264).toFixed(3);
    const kgToP = (valueInNumber * 2.204).toFixed(3);
    const pToKg = (valueInNumber/2.204).toFixed(3);
    length.innerHTML = `<p>
                            ${valueInNumber} meters = ${mToFt} feet | 
                            ${valueInNumber} feet = ${ftToM} meters 
                        </p>`
    
    vol.innerHTML = `<p>
                            ${valueInNumber} litres = ${litToGal} gallons | 
                            ${valueInNumber} gallons = ${galToLit} litres 
                        </p>`
                
    mass.innerHTML = `<p>
                            ${valueInNumber} kilos = ${kgToP} pounds | 
                            ${valueInNumber} pounds = ${pToKg} kilos 
                        </p>`
})

