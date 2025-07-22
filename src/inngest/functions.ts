import {Sandbox} from "@e2b/code-interpreter";
import { openai, gemini, createAgent } from "@inngest/agent-kit";
import { inngest } from "./client";
import { getSandbox } from "./utils";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    const sandboxId = await step.run("get-sandbox-id", async () => {
        const sandbox = await Sandbox.create("wavv-nextjs-text-3");
        return sandbox.sandboxId;
    });
    const codeAGent = createAgent({
      name: "code-agent",
      system: "You are an expert Next.js developer. You write readable, maintable code. You write simple Next.js and Reaxt.js code snippets.",
      model: gemini({ model: "gemini-2.0-flash" }),
    });

    const { output } = await codeAGent.run(
      `Write the following snippet: ${event.data.value}`,
    );
    
    const sandboxUrl = await step.run("get-sandbox-url", async () => {
      const sandbox = await getSandbox(sandboxId); 
      const host = sandbox.getHost(3000);
      return `http://${host}`;
    });

    return { output, sandboxUrl };
  }
);
