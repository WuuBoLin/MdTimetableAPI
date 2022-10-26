import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./router.js";
// import cors_config from "./cors_config.json" assert { type: "json" };

const corsConfig = {
  exposedHeaders: "Authorization",
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://test.haco.tw",
    "https://k1d1.haco.tw",
    "https://test.aaaaoncloud.eu.org",
    "https://newmd.aaaaoncloud.eu.org",
    "https://newmd.eu.org",
    "https://newmd.netlify.app",
  ],
};

const cloud = express();
cloud.use(cors(corsConfig));
cloud.use(bodyParser.urlencoded({ extended: true }));
cloud.use(bodyParser.json());
cloud.use("/", router);

const app = express();
app.use("/", cloud);

export default app;
