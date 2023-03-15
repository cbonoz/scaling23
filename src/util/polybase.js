import { Polybase } from "@polybase/client";
import { APP_NAME } from "./constants";

const db = new Polybase({
  defaultNamespace: APP_NAME,
});