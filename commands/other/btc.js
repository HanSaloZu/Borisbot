const { http, createCommonMessage } = require("../../utils");

module.exports = {
  name: "btc",
  description: "Provides the current bitcoin price",
  execute(message) {
    const requestOptions = {
      host: "api.coindesk.com",
      path: "/v1/bpi/currentprice.json"
    };

    http.GET(requestOptions, (data) => {
      const price = data.bpi.USD.rate;

      message.channel.send(
        createCommonMessage(`Current Bitcoin price is: $${price}`)
          .setTitle("Powered by CoinDesk")
          .setURL("https://www.coindesk.com/price/bitcoin")
      );
    });
  }
};
