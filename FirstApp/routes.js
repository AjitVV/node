const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write(`
            <div>
                <form action="/messages" method="POST">
                    <input type="text" name="message"/>
                    <button type="submit">Send</button>
                </form>
            </div>
        `);
        return res.end();
    }
    if(url === '/messages' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);     
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt',message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();        
            });
        });
    }
    res.write("<div style='color: red;'>Response from node server</div>");
}

module.exports = {
    handler: requestHandler,
    testText: "Test to check multiple exports"
}