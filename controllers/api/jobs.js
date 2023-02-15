const Job = require('../../models/jobs')

module.exports = {
    create,
    index,
    delete: deletePost,
    edit
}
async function index(req, res){
    const jobs = await Job.find({})
    res.json(jobs)
    return 'Found Jobs'
}
async function deletePost(req,res, next){
    Job.findOneAndDelete(req.params._id)
    .then(job => res.json(job))
    .catch(next)
    console.log('Deleted')
}
async function edit(req,res){
const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {new:true})
if(updatedJob){
    res.json(updatedUser)
}else{
    res.sendStatus(404)

}
}
async function create( req, res, next){
    const { title, company, description, location, link, createdBy } = req.body
    Job.create({
        title: title,
        company: company,
        description: description,
        location: location,
        link: link,
        createdBy: createdBy
    })
    .then((job) => res.status(201).json(job))
    .catch(next)
    console.log('POST Job')
} 