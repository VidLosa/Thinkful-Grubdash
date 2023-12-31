const path = require("path");

// Use the existing dishes data
const dishes = require(path.resolve("src/data/dishes-data"));

// Use this function to assign ID's when necessary
const nextId = require("../utils/nextId");

// TODO: Implement the /dishes handlers needed to make the tests pass

//LIST DISH
function list(req, res){
  res.json( { data: dishes});
}

// CREATE
function create(req, res) {
  const {
    data: { id, name, description, price, image_url },
  } = req.body;

  const newId = nextId();
  const newName = req.body.data.name;
  const newDescription = req.body.data.description;
  const newPrice = req.body.data.price;
  const newImageUrl = req.body.data.image_url;

  const newDish = {
    id: newId,
    name: newName,
    description: newDescription,
    price: newPrice,
    image_url: newImageUrl,
  };

  dishes.push(newDish);
  res.status(201).json({ data: newDish });
}

//BODY VALIDATION
function dishExists(req, res, next) {
  const { dishId } = req.params;
  const foundDish = dishes.find((dish) => dish.id === dishId);
  if (foundDish) {
    res.locals.dish = foundDish;
    return next();
  }
  next({
    status: 404,
    message: `Dish does not exist ${dishId}`,
  });
}

function checkIdMatch(req, res, next) {
  const { dishId } = req.params;
  const { data: { id } = {} } = req.body;

  if (id && id !== dishId) {
    return next({
      status: 400,
      message: `Dish id does not match route id. Dish: ${id}, Route: ${dishId}`,
    });
  }
  next();
}

function bodyDataHas(propertyName) {
  return function (req, res, next) {
    const { data = {} } = req.body;
    if (data[propertyName]) {
      return next();
    }
    next({ status: 400, message: `Dish must include a ${propertyName}` });
  };
}

//READ
function read(req, res, next) {
  res.json({ data: res.locals.dish });
}

//__________DISHS DATA VALIDATION START___________

//NAME VALIDATION
function isNameValid(req, res, next) {
  const { data: name } = req.body;
  if (
    !req.body.data.name ||
    req.body.data.name === "" 
   
  ) {
    next({ status: 400, message: "Dish must include a name." });
  }
  next();
}

//DESCRIPTION VALIDATION
function isDescriptionValid(req, res, next) {
  const { data: description } = req.body;
  if (
    req.body.data.description === null ||
    req.body.data.description === undefined ||
    req.body.data.description === ""
  ) {
    next({ status: 400, message: "Dish must include a description." });
  }
  next();
}

//PRICE VALIDATION
function isPriceValid(req, res, next) {
  const { data: price } = req.body;
  if (
    req.body.data.price === null ||
    req.body.data.price === undefined ||
    req.body.data.price === ""
  ) {
    next({ status: 400, message: "Dish must include a price." });
  }
  if (typeof req.body.data.price === "number" && req.body.data.price > 0) {
    return next();
  } else {
    next({
      status: 400,
      message: `The price must be a number greater than 0.`,
    });
  }
}


//IMAGE URL VALIDATION
function isUrlValid(req, res, next) {
  const { data: image_url } = req.body;
  if (
    req.body.data.image_url === null ||
    req.body.data.image_url === undefined ||
    req.body.data.image_url === ""
  ) {
    next({ 
      status: 400, 
      message: "Dish must include an image_url." 
    });
  }
  next();
}

//ID VALIDATION
function isIdValid(req, res, next) {
  let {data: { id },} = req.body;
  const dishId = req.params.dishId;
  if (req.body.data.id === null || req.body.data.id === undefined || req.body.data.id === "") {
    return next();
  }
  if (req.body.data.id !== dishId) {
    next({
      status: 400,
      message: `Dish id does not match route id. Dish: ${id}, Route: ${dishId}`,
    });
  } else {
    next();
  }
}

//_______DISH VALIDATION END_______

//UPDATE
function update(req, res) {
  const dish = res.locals.dish;
  const { data: { name, description, price, image_url } = {} } = req.body;

  dish.name = name;
  dish.description = description;
  dish.price = price;
  dish.image_url = image_url;

  res.json({ data: dish });
}





module.exports = {
  list,

  create: [isNameValid,
    isDescriptionValid,
    isPriceValid,
    isUrlValid,
    create],

  read: [dishExists, read],

  update: [
    dishExists,
    checkIdMatch,
    bodyDataHas("name"),
    bodyDataHas("description"),
    bodyDataHas("price"),
    bodyDataHas("image_url"),
    isDescriptionValid,
    isPriceValid,
    isUrlValid,
    isIdValid,
    update
  ],
}