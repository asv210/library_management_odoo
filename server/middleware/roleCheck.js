module.exports = (roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.role)) {
      return res
        .status(403)
        .json({ msg: "Access denied: insufficient permissions" });
    }
    next();
  };
};
