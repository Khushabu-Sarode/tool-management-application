import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
    const [tools, setTools] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Fetch all tools
    useEffect(() => {
        axios.get('http://localhost:5000/tools')
            .then(response => setTools(response.data))
            .catch(error => console.error(error));
    }, []);

    // Add a new tool
    const addTool = (tool) => {
        axios.post('http://localhost:5000/tools', tool)
            .then(response => setTools([...tools, response.data]))
            .catch(error => console.error(error));
    };

    // Delete a tool
    const deleteTool = (id) => {
        axios.delete(`http://localhost:5000/tools/${id}`)
            .then(() => setTools(tools.filter(tool => tool._id !== id)))
            .catch(error => console.error(error));
    };

    // Search tools
    const filteredTools = tools.filter(tool =>
        tool.designation.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="App">
            <h1 className='head'>Tool Management Application</h1>
            <input
                type="text"
                placeholder="Search by designation"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <ToolForm addTool={addTool} />
            <ToolTable tools={filteredTools} deleteTool={deleteTool} />
        </div>
    );
};

const ToolForm = ({ addTool }) => {
    const [tool, setTool] = useState({
        designation: '',
        serialNumber: '',
        partNumber: '',
        assetNumber: '',
        supplier: '',
        manufacturer: '',
        dateOfManufacturing: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addTool(tool);
        setTool({
            designation: '',
            serialNumber: '',
            partNumber: '',
            assetNumber: '',
            supplier: '',
            manufacturer: '',
            dateOfManufacturing: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Designation"
                value={tool.designation}
                onChange={(e) => setTool({ ...tool, designation: e.target.value })}
            />
            <input
                type="text"
                placeholder="Serial Number"
                value={tool.serialNumber}
                onChange={(e) => setTool({ ...tool, serialNumber: e.target.value })}
            />
            <input
                type="text"
                placeholder="Part Number"
                value={tool.partNumber}
                onChange={(e) => setTool({ ...tool, partNumber: e.target.value })}
            />
            <input
                type="text"
                placeholder="Asset Number"
                value={tool.assetNumber}
                onChange={(e) => setTool({ ...tool, assetNumber: e.target.value })}
            />
            <input
                type="text"
                placeholder="Supplier"
                value={tool.supplier}
                onChange={(e) => setTool({ ...tool, supplier: e.target.value })}
            />
            <input
                type="text"
                placeholder="Manufacturer"
                value={tool.manufacturer}
                onChange={(e) => setTool({ ...tool, manufacturer: e.target.value })}
            />
            <input
                type="text"
                placeholder="Date of Manufacturing"
                value={tool.dateOfManufacturing}
                onChange={(e) => setTool({ ...tool, dateOfManufacturing: e.target.value })}
            />
            <button type="submit">Add Tool</button>
        </form>
    );
};

const ToolTable = ({ tools, deleteTool }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Designation</th>
                    <th>Serial Number</th>
                    <th>Part Number</th>
                    <th>Asset Number</th>
                    <th>Supplier</th>
                    <th>Manufacturer</th>
                    <th>Date of Manufacturing</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {tools.map(tool => (
                    <tr key={tool._id}>
                        <td>{tool.designation}</td>
                        <td>{tool.serialNumber}</td>
                        <td>{tool.partNumber}</td>
                        <td>{tool.assetNumber}</td>
                        <td>{tool.supplier}</td>
                        <td>{tool.manufacturer}</td>
                        <td>{tool.dateOfManufacturing}</td>
                        <td>
                            <button className="delete-button" onClick={() => deleteTool(tool._id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default App;