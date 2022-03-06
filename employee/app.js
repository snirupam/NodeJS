import http from 'http';
import url from 'url';
import employeeController from './controller/employeeController.js'; 

const reqHandler = (req,res) => {

    const baseURL = 'http://' + req.headers.host + '/';
    const reqUrl = new url.URL(req.url,baseURL);
    const query = new url.URLSearchParams(reqUrl.search);

    if(reqUrl.pathname === '/' || reqUrl.pathname === '/index.htm'){
        employeeController.generateEmployeeDetailPage(req,res);
    }else{
        res.write('<h3>Sorry! Requested resource is not availabel in the server</h3>');
        res.end();
    }
    
}

const server = http.createServer(reqHandler);

server.listen(9999, () => {
    console.log(`Server got sucessully started on port 9999`);
});