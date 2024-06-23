import userModel from "../models/userModel.js"


export const createUser = async (request, response) => {
    try {
        const { name, contact, email, message } = request.body;

       
        if (!name || !contact) {
            return response.status(400).json({ error: 'Name or contact not provided' });
        }

      
        const newUser = new userModel({
            name,
            contact,
            email,
            message
        });

      
        const result = await newUser.save();

       
        return response.status(201).json({ msg: 'Response sent successfully!', success: true, result });
    } catch (error) {
       
        return response.status(500).json({ error: error.message });
    }
};
