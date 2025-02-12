import axios from 'axios';

const API_URL = "http://localhost:5000/tools"; // Backend API URL

// Get all tools
export const getTools = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching tools:", error);
        return [];
    }
};

// Add a new tool
export const addTool = async (toolData) => {
    try {
        const response = await axios.post(API_URL, toolData);
        return response.data;
    } catch (error) {
        console.error("Error adding tool:", error);
        return null;
    }
};

// Delete a tool by ID
export const deleteTool = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error("Error deleting tool:", error);
    }
};
