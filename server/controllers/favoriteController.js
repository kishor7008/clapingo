const asyncHandler = require("express-async-handler");
const Favo = require("../models/favoriteModel")
// Add Teacher in student profile
const addFavo = asyncHandler(async (req, res) => {
  const { val } = req.body;
  const present = await Favo.findOne({ user: req.user._id });
  if (present) {
    const nameVal = present.favorite.filter((item) => item.name !== val);
    console.log(nameVal)
    const data = {
      user: req.user._id,
      favorite: [...present.favorite, req.body],
    }
    const length = await Favo.updateOne({ user: req.user._id }, { $set: data })
    res.json(data)
  } else {
    const response = new Favo({
      user: req.user._id,
      favorite: req.body
    })
    await response.save()
    res.json(response)

  }

});
// unfollow Teacher in student profile



const deleteItem = async (req, res) => {
  const response = await Favo.find({ user: req.user._id })
  let filData = response[0].favorite.filter((item) => item.name != req.body.name)
  const data = {
    user: req.user._id,
    favorite: filData
  }
  const length = await Favo.updateOne({ user: req.user._id }, { $set: data })
  res.json(data)
}

// get all teacher followd by student
const getData = async (req, res) => {
  const response = await Favo.find({ user: req.user._id })
  res.json(response)
}

module.exports = { addFavo, getData, deleteItem };
