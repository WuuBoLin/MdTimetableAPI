import MongoDB from "../_components/MongoDB/index.js";


export const update = () => {
    return new MongoDB().scheduleUpdate("00 00 * * *");
};