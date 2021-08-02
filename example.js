// This is an example of how you can use the cryptocurrency colors file to fetch the needed color
const cryptocurrencyColor = require("./cryptocurrency-colors");

//Get position of the Bitcoin values
let BtcPosition = cryptocurrencyColor.map((x) => {return x.symbol; }).indexOf("BTC");

//Print the color values of Bitcoin
console.log(cryptocurrencyColor[BtcPosition]);

//Get a specific color type, for example HEX
console.log(cryptocurrencyColor[BtcPosition].hex);
