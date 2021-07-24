const ftoc = function(fahr) {
const round = (value, decimals) => {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

return round((fahr - 32) * (5 / 9), 1); 
}

const ctof = function(celsius) {
  const round = (value, decimals) => {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

return round((celsius * (9 / 5)) + 32, 1);
}

module.exports = {
  ftoc,
  ctof
}