import { NowRequest, NowResponse } from "@now/node";

export default function (req: NowRequest, res: NowResponse) {
  res.setHeader("Location", "https://www.zymk.cn/nodeapi/comic/allComic");
  res.status(303).end();
}
