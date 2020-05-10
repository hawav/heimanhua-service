import { NowRequest, NowResponse } from "@now/node";
// import fetch from 'node-fetch';
import https from "https";

export default async function (req: NowRequest, res: NowResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  https.get("https://www.zymk.cn/nodeapi/comic/allComic", (r) => {
    r.pipe(res);
  });
}
