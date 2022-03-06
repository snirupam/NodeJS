import fs from 'fs';

const DATA_FILE ='./data/employeeDetail.json';

const getEmpoyeeDetail = (okCallBack,errCallBack) => {
    fs.readFile(DATA_FILE, (err,data) => {
        if(err){
            console.log(err.message);
            errCallBack(new Error(`Error while fetching the data`));
        }else{
            okCallBack(JSON.parse(data).employee);
        }

    });
};

export default {getEmpoyeeDetail};