import People from "../model/peopleModel.js";



export const create = async(req,res) =>{
try
    {
        const newPeople = new People(req.body);
        const { automatedNumber } = newPeople;
        const { nationalNumber } = newPeople;
        const peopleExist = await People.findOne({ automatedNumber });


        if (peopleExist && nationalNumber) {
            return res.status(400).json({ message: "People already exists." });
        } 
        else
         {

            const savedData = await newPeople.save();
            res.status(200).json({message:"Create Successfully."});
         }
    }
catch(error)
    {
        res.status(500).json({errorMessage:error.message});
    }

}

