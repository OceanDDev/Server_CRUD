import * as clientService from "../services/clientService.js"

export const getClients = async(req,res) =>{ 
    try {
        const clients = await clientService.getClients()
        res.status(200).json(clients)
    } catch (error) {
        console.error("Error getting clients", error);
        res.status(500).json({ message: "Internal Server Error" });
        
    }
}
export const creatClients = async(req,res) =>{ 
    try {
        const clientData = req.body
        const newClients = await clientService.creatClients(clientData)
        res.status(200).json(newClients)
    } catch (error) {
        console.error("Error creating clients", error);
        res.status(500).json({ message: "Internal Server Error" });
        
    }
}

export const updateClients = async(req,res) =>{
    try {
      const clientId = req.params.id 
      const clientData = req.body
      const updateClient = await clientService.updateClients(clientId,clientData)
      if(!updateClient){
        return res.status(404).json({message: "Client not found"});
      }
      res.status(200).json(updateClient)
    } catch (error) {
        console.error("Error udpating clients", error);
        res.status(500).json({ message: "Internal Server Error" });
        
    }
}

export const deleteClients = async(req,res) =>{
    try {
        const clientId = req.params.id 
        const deletedClient = await clientService.deleteClients(clientId)
        if(!deletedClient){
            return res.status(404).json({message: "Client not found"});
        }
        res.status(200).json(deletedClient)
    } catch (error) {
        console.error("Error deleting clients",error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
