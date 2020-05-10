import { NowRequest, NowResponse } from "@now/node";

export default function (req: NowRequest, res: NowResponse) {
  res.setHeader("Location", "baidu.com");
  res.status(303).end();
}
