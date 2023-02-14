const Job = require('../../models/jobs')

module.exports = {
    create,
    index,
}
async function index(req, res){
    const jobs = await Job.find({})
    res.json(jobs)
}

async function create( req, res, next){
    const { title, company, description, location, link } = req.body
    Job.create({
        title: title,
        company: company,
        description: description,
        location: location,
        link: link
    })
    .then((job) => res.status(201).json(job))
    .catch(next)
    console.log('POST Job')
} 