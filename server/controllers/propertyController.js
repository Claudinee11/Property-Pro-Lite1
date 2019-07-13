import property from '../models/property';


class Property{
    static getAllProperties(req,res){
        res.status(200).send({status:'success', data: property});
    }
    static deleteProperty(req,res){
        const exists= property.find(p=>p.id == req.params.id);
        if(exists){
            const index = property.indexOf(exists);
            property.splice(index,1);
            res.status(200).send({status: 'success', message: "deleted"})
        }else{
            res.status(404).send({status: 404, error: "not found"})
        }
    }
    
}
export default Property;