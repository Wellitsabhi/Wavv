import { openai, gemini, createAgent } from "@inngest/agent-kit";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const codeAGent = createAgent({
      name: "code-agent",
      system: "You are an expert Next.js developer. You write readable, maintable code. You write simple Next.js and Reaxt.js code snippets.",
      model: gemini({ model: "gemini-2.0-flash" }),
    });

    const { output } = await codeAGent.run(
      `Write the following snippet: ${event.data.value}`,
    );
    // console.log(output);

    return { output };
  }
);
