export interface Hint {
    id: string;
    password: string;
    title: string;
    description: string;
    riddle: string;
    nextHintId: string | null;
    finalAnswer?: string;
}

export const hints: Record<string, Hint> = {
    'hint1': {
        id: 'hint1',
        password: 'treasure2024',
        title: 'First Hint',
        description: "You've found the first hint",
        riddle: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
        nextHintId: 'hint2'
    },
    'hint2': {
        id: 'hint2',
        password: 'echo', // Answer to the first riddle
        title: 'Second Hint',
        description: "Well done! Here's your second challenge",
        riddle: "The more you take, the more you leave behind. What am I?",
        nextHintId: 'hint3'
    },
    'hint3': {
        id: 'hint3',
        password: 'footsteps', // Answer to the second riddle
        title: 'Final Hint',
        description: "You're almost there!",
        riddle: "What has keys, but no locks; space, but no room; and you can enter, but not go in?",
        nextHintId: null, // This is the last hint
        finalAnswer: 'keyboard'
    }
}; 