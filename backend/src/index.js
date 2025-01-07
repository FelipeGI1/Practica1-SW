const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { exec } = require('child_process');
const path = require('path');

async function setupServer() {
    const app = express();
    const port = 3000;
    
    app.use(cors());
    app.use(express.static('public'));
    
    
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
        
        const scriptPath = path.join(__dirname, 'model', 'codigo4.py');
        try {
            exec(`python ${scriptPath}`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                }
                console.log(`${stdout}`);
                console.log(`${stderr}`);
            });
        } catch (error) {
            console.log(error);
        }
    });
}

setupServer();