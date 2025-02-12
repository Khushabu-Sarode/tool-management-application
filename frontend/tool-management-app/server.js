const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/toolDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Tool Schema
const toolSchema = new mongoose.Schema({
    designation: String,
    serialNumber: String,
    partNumber: String,
    assetNumber: String,
    supplier: String,
    manufacturer: String,
    dateOfManufacturing: String,
});

const Tool = mongoose.model('Tool', toolSchema);

// Routes
// Get all tools
app.get('/tools', async (req, res) => {
    try {
        const tools = await Tool.find();
        res.json(tools);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single tool by ID
app.get('/tools/:id', async (req, res) => {
    try {
        const tool = await Tool.findById(req.params.id);
        if (!tool) return res.status(404).json({ message: 'Tool not found' });
        res.json(tool);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new tool
app.post('/tools', async (req, res) => {
    const tool = new Tool(req.body);
    try {
        const newTool = await tool.save();
        res.status(201).json(newTool);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a tool by ID
app.delete('/tools/:id', async (req, res) => {
    try {
        const tool = await Tool.findByIdAndDelete(req.params.id);
        if (!tool) return res.status(404).json({ message: 'Tool not found' });
        res.json({ message: 'Tool deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});