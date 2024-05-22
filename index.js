const http = require('http')
const httpProxy = require('http-proxy')

const proxy = httpProxy.createProxyServer()

const routes = {
  'penpot.9giga.local':{
    host: 'localhost',
    port: 9001
  },
  'supabase.9giga.local':{
    host: 'localhost',
    port: 8000
  }
}

console.log(`PROXY STARTED ${Date.now()}\n\n`)

http.createServer((req, res) => {
  const domain = req.headers.host;
  console.log(`${Date.now()} DOMAIN: ${domain}}`);
  if(domain) {
    proxy.web(req, res, {
      target: routes[domain]
    })
  }
}).listen(8080);

