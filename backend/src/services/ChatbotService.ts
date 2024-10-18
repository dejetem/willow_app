


export class ChatbotResponse {
    static async getChatbotResponse(message: string): Promise<string> {
        const lowerMessage = message.toLowerCase();

        if (this.containsKeyword(lowerMessage, ['idea'])) {
            return this.getIdeaResponse();
        } 
        
        if (this.containsKeyword(lowerMessage, ['hello', 'hi'])) {
            return this.getGreetingResponse();
        } 

        return this.getFallbackResponse();
    }

    private static containsKeyword(message: string, keywords: string[]): boolean {
        return keywords.some(keyword => message.includes(keyword));
    }

    private static getIdeaResponse(): string {
        // could add more ideas here and pick randomly to make it feel more dynamic
        const ideas = [
            "Create a mobile app that helps people track their daily water intake.",
            "How about building a platform for remote team collaboration?",
            "Here's an idea: A smart recipe generator based on available ingredients.",
            "Develop a platform that connects freelance designers with clients in need of custom logos.",
            "Build a website that curates and reviews the best online coding tutorials.",
            "Create an AI-powered tool to suggest new recipes based on ingredients users have at home.",
            "Design a habit-tracking app with built-in motivational rewards.",
            "Launch a social platform for people interested in sustainable living practices.",
            "Create a virtual mentor system for students in need of academic guidance.",
            "Develop a fitness app with personalized workout plans using AI."
        ];
        return ideas[Math.floor(Math.random() * ideas.length)];
    }

    private static getGreetingResponse(): string {
        // Dynamic responses
        const greetings = [
            "Hello! I'm here to help you brainstorm ideas. What topic would you like to explore?",
            "Hi there! Need some help with ideas? Just ask!",
            "Hey! Looking for inspiration? Let's brainstorm!"
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
    }

    private static getFallbackResponse(): string {
        // neutral fallback response
        return "I'm not sure how to respond to that. Can you try asking about ideas or saying hello?";
    }
}