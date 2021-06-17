const Koa = require("koa");
const app = new Koa();
const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");

console.log("serve start -----------");

app.on("error", (error, ctx) => {
  console.log("something error " + JSON.stringify(ctx.onerror));
});

// logger

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
});

// response

app.use(async (ctx) => {
  ctx.body = "Hello World";
});

//根据项目的路径导入生成的证书文件
const privateKey = fs.readFileSync(
  path.join(__dirname, "./certificate/server.key"),
  "utf8"
);
const certificate = fs.readFileSync(
  path.join(__dirname, "./certificate/server.crt"),
  "utf8"
);
const credentials = { key: privateKey, cert: certificate };
//可以分别设置http、https的访问端口号
const PORT = 4000;
const SSLPORT = 4001;
//创建http与HTTPS服务器
const httpServer = http.createServer(app.callback());
const httpsServer = https.createServer(credentials, app.callback());

//创建http服务器
httpServer.listen(PORT, function () {
  console.log("HTTP Server is running on: http://localhost:%s", PORT);
});

//创建https服务器
httpsServer.listen(SSLPORT, function () {
  console.log("HTTPS Server is running on: https://localhost:%s", SSLPORT);
});
