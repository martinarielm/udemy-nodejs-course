const { BadRequestError } = require("../errors");

const testUser = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError(
      "Test user is not allowed to perform this action",
    );
  }

  next();
};

module.exports = testUser;
