import userModel from "../models/userModel.js"


export const createUser = async (request, response) => {
    try {
        const { name, contact, email, message } = request.body;
      
        const fname = name.split(" ")[0]
       
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

       
        return response.status(201).json({ msg: `Hey ${fname} , thanks for your interest , i will get to you shortly`, success: true, result });
    } catch (error) {
       
        return response.status(500).json({ error: error.message });
    }
};
