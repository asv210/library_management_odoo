module.exports = (roles) => {
  return (req, res, next) => {
    if ( !roles.includes(req.role)) {
      return res
        .status(403)
        .json({ msg: "Access denied: insufficient permissions" });
        console.log("hello world3")
      }
      next();
  };
};
