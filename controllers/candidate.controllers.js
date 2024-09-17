const Candidate = require('./../models/Candidate')


const uploadCandidate = async(req,res)=>{
    const Cv = req.file
    const {NombreCompleto,Telefono,Email} = req.body
    try{
        if(!Cv) {
            return res.status(400).json({
                ok: false,
                msg: 'Debe diligenciar todos los campos!!'
            })
        }

        const dbCandidateToSave = new Candidate ({
            NombreCompleto: NombreCompleto,
            Telefono: Telefono,
            Email: Email,
            Cv: Cv  
        })
        await dbCandidateToSave.save()
        return res.status(201).json({
            ok:true,
            msg: `Felicidades la tribuna te contactara pronto!!`
        })

    } catch(error){
        console.log(error)
        return res.status(500).json({
            ok:"false",
            msg:"error uploading file,please contact to support"
        })
    }
}

module.exports = {
    uploadCandidate
}