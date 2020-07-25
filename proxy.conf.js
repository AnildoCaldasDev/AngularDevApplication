const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: "http://localhost:8000/",
    secure: false,
    logLevel: "debug",
    pathRewrite: {
      "^/api": "",
    },
  },
];

module.exports = PROXY_CONFIG;
//configuração de proxy tirada do curso da Loiane Gronner:
//https://www.youtube.com/watch?v=D9oFe6rHjpY
