const Project = require('../projects/projectModel')
const Action = require('../actions/actionModel')

const validateProjectId = async (req, res, next) => {
    const { id } = req.params;
    try {
      const data = await Project.get(id);
      if (!data) {
        return res.status(400).json({ message: "invalid user id" });
      }
      req.user = data;
      next();
    } catch (err) {
      return res.status(500).json(err.toString());
    }
  };


const validateActionId = async (req, res, next) => {
    const { id } = req.params;
    try {
      const data = await Action.get(id);
      if (!data) {
        return res.status(400).json({ message: "invalid user id" });
      }
      req.user = data;
      next();
    } catch (err) {
      return res.status(500).json(err.toString());
    }
  };
  
  const validateProject = async (req, res, next) => {
  
    try {
      if (!req.body) {
        return res.status(400).json({ message: "missing Project data" });
      }
      if (!req.body.name) {
        return res.status(400).json({ message: "missing required name field" });
      }
      if (!req.body.description) {
        return res.status(400).json({ message: "missing required description field" });
      }
      next();
    } catch (err) {
      return res.status(500).json(err.toString());
    }
  };
  
  const validateAction = async (req, res, next) => {
    const { text } = req.body;
    try {
      if (!req.body) {
        return res.status(400).json({ message: "missing post data" });
      }
      if (!req.body.description) {
        return res.status(400).json({ message: "missing required description field" });
      }
      if (!req.body.notes) {
        return res.status(400).json({ message: "missing required notes field" });
      }
      next();
    } catch (err) {
      return res.status(500).json(err.toString());
    }
  };
  
  module.exports = ({
    validatePost,
    validateUser,
    validateUserId
  });