function isValidUserId(req, res, next) {
  const { id, usersId, info_id } = req.params;
  if (usersId) {
    checkId(usersId);
  }
  if (info_id) {
    checkId(info_id);
  }
  if (id) {
    checkId(id);
  }
  next();
}

// function isvalid(req, next) {
//   const { id, users_id } = req.body;

//   if (id) checkId(id);
//   else if (users_id) checkId(users_id);

//   next();
// }

function checkId(data) {
  if (isNaN(data)) throw new Error('id not a number');
  if (typeof data != 'number' && typeof data != 'string') throw new Error('type not valid');
  if (data < 0) throw new Error('id < 0');
}
module.exports = { isValidUserId };
