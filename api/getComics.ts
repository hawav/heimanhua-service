import { NowRequest, NowResponse } from "@now/node";

export default function (req: NowRequest, res: NowResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Location", "https://www.zymk.cn/nodeapi/comic/allComic");
  res.status(302).end();
}
