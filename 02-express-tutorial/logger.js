const logger = (req, res, next) => {
  const { method, url } = req;
  const time = new Date().toLocaleTimeString();

  console.log("👨‍🎤 -> url:", url);
  console.log("👨‍🎤 -> method:", method);
  console.log("👨‍🎤 -> time:", time);

  next();
};

export default logger;
