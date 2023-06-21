import express from "express";
import http from "http";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import authRouter from "./routes/authRouter";

const app = express();

app.use(cors({
	credentials: true,
}));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use("/auth", authRouter);

const server = http.createServer(app);

server.listen(3000, () => {
	console.log("Server listening on port 3000");
});

