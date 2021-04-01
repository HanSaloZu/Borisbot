const https = require("https");

const requestOptions = {
  method: "GET",
  headers: { "User-Agent": "Borisbot" }
};

function GET(options, onEnd) {
  requestOptions.host = options.host;
  requestOptions.path = options.path;

  https
    .request(requestOptions, (res) => {
      let data = "";

      res.setEncoding("utf8");
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        onEnd(JSON.parse(data));
      });
    })
    .end();
}

module.exports = {
  GET
};
