const Projects = require('./projectModel')
const status = (res, data, status) => {
    return res.status(status).json(data);
  };

  const GetProject = async( req , res) => {
    const {id} = req.params
    try{
        const data = await Projects.get(id)
        status(res ,data, 200)
    }
    catch(err){
        status(res ,'Cannot Get Projects', 500)
    }
  }
  const GetProjectsActions = async(req , res) => {
      const {id} = req.params
      try{
          const data = await Projects.getProjectActions(id)
          data.length === 0? status(res, 'No Actions for this project', 404):status(res, data, 200)
      }
      catch(err){
          status(res, 'Cannont Get Actions', 500)
      }
  }

  const AddProject = async(req ,res) => {
      const {name , description} = req.body
      try{
          const data = await Projects.insert({name , description})
          status(res ,data , 200)
      }
      catch(err){
          status(res, 'Cannot Add Projects', 500)
      }
  }

  const UpdateProject = async(req, res) => {
      const {id} = req.params;
      const {name , description} = req.body

      try{
        const data = await Projects.update(id ,{name , description})
        status(res ,data , 200)
    }
    catch(err){
        status(res, 'Cannot Update Projects', 500)
    }
  }

  const DeleteProject = async(req, res) => {
      const {id} = req.params;
      try{
          await Projects.remove(id)
          status(res, "Project Deleted", 200)
      }
      catch(err){
          status(res , 'Cannot Delete Project' , 500)
      }
  }

  module.exports = ({
      GetProject,GetProjectsActions,AddProject,UpdateProject,DeleteProject
  })