import { APIGatewayProxyHandler } from "aws-lambda";
import "dotenv/config";
import "source-map-support/register";
import "v8-compile-cache";
import target, {
  TargetType,
} from "~backend/source/shared/constants/target-type/target-type";

let handler: APIGatewayProxyHandler | undefined;

if (target === TargetType.Server) {
} else if (target === TargetType.Serverless) {
  handler = (await import("~backend/source/server/lambdas/index")).default;
}

export default handler;
