import { OpenAIClient, AzureKeyCredential, GetCompletionsOptions } from "@azure/openai";

class OpenAI {
    private static instance: OpenAI;
    private openAIClient!: OpenAIClient;
    constructor(private readonly openAIDetails: AzureOpenAIDetails) {
        this.initializeOpenAIClient();
    }

    private async initializeOpenAIClient(): Promise<void> {
        try {
            console.log("== Initializing OpenAI client ==");
            this.openAIClient = new OpenAIClient(this.openAIDetails.endpoint,
                new AzureKeyCredential(this.openAIDetails.azure_key));
        } catch (exception) {
            console.error("Error initializing OpenAI client:", exception);
            throw new Error("OpenAI client initialization failed");
        }
    }

    //The getInstance method is responsible for creating the instance if it doesn't exist or returning the existing instance
    public static getInstance(openAIDetails: AzureOpenAIDetails): OpenAI {
        if (!OpenAI.instance) {
            OpenAI.instance = new OpenAI(openAIDetails);
        }
        return OpenAI.instance;
    }

    public async sendMessage(prompt: string[]): Promise<string[]> {
        try {
            console.log("== Get completions Sample ==");
            console.log("Prompt: " + prompt);
            const options: GetCompletionsOptions = { maxTokens: 128 };
            const result = await this.openAIClient.getCompletions(this.openAIDetails.deployment, prompt, options);
            return result.choices.map((choice: { text: any; }) => choice.text);
        } catch (exception) {
            console.error("Error sending message to OpenAI:", exception);
            return ["Error sending message to OpenAI"];
        }
    }
}

export default interface AzureOpenAIDetails {
    endpoint: string,
    azure_key: string,
    deployment: string,
}

export { OpenAI };