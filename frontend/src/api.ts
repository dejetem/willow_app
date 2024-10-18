const API_URL = process.env.REACT_APP_API_BASE_URL


export const fetchIdeas = async (page: number) => {
    const response = await fetch(`${API_URL}ideas?page=${page}`);
    return response.json();
};

export const postIdea = async (content: string) => {
    const response = await fetch(`${API_URL}ideas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
    });
    return response.json();
};

export const getBotResponse = async (message: string) => {
    const response = await fetch(`${API_URL}chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
    });
    return response.json();
};

export const resetIdeas = async () => {
    const response = await fetch(`${API_URL}ideas/reset`, {
        method: 'POST',
    });
    return response.json();
};
