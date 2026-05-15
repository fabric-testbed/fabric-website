import fs from "fs";
import path from "path";

let configJson: Record<string, string> = {};
try {
  const raw = fs.readFileSync(path.join(process.cwd(), "config.json"), "utf-8");
  configJson = JSON.parse(raw);
} catch {
  // config.json is optional; copy config.json.template → config.json to enable
}

export const CORE_API_URL: string =
  process.env.FABRIC_CORE_API_URL ?? configJson.fabricCoreApiUrl ?? "";

export const ORCHESTRATOR_API_URL: string =
  process.env.ORCHESTRATOR_API_URL ?? configJson.orchestratorApiUrl ?? "";

export const PUBLICATIONS_TRACKER_API_URL: string =
  process.env.PUBLICATIONS_TRACKER_API_URL ?? configJson.publicationsTrackerApiUrl ?? "";
