import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import Game from './models/Game.js';
import connectDB from './config/db.js';
import jsonData from './data/data.json';

dotenv.config();

connectDB();

const isNumeric = (str) => {
    const regex = /\d/g;
    return regex.test(str)
}

const createGameObjArr = (json) => {
    const withNum = json.filter(item => isNumeric(item) && isNumeric(item[0]));
    let withoutNewLine = withNum.map(item => item.split('\n'))
    withoutNewLine.pop();

    const gameObjects = withoutNewLine.map(item => {

        try {
            const rank = Number(item[0].split('.')[0]);
            const title = item[0].split('.')[1].trim();
            const composers = item[1];
            const info = item[2].split(',');
            const system = info[0].slice(1)
            
            let year = Number(info[1].slice(0, -1).trim());
          
            
            const entryObj = {
                rank,
                title,
                composers,
                system,
                year
            }
           
            return entryObj
        } catch (err) {
            console.log(err);
        }
    });

    return gameObjects;
}


const importData = async () => {
    

    const games = createGameObjArr(jsonData);
    
    try {

        await Game.insertMany(games);
        console.log(`Data imported`.green.inverse);

    } catch(err) {
        console.error(`${error}`.red.inverse)
        process.exit(1);
    }
}



importData();
