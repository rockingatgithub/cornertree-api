module.exports.jobSubmit = async function (req, res) {
  console.log(req.body);
  return res.status(200).json({
    message: "form message",
  });
};
