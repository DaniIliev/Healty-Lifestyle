export const register_loginFormValidation = (formData) => {
  const validationErrors = {};

  if (!formData.email.trim()) {
    validationErrors.email = "Email is required!";
  } else if (!/[A-z]+([0-9]+)?@[a-z]+.[a-z]+/.test(formData.email)) {
    validationErrors.email = "Email is not valid!";
  }

  if (!formData.password.trim()) {
    validationErrors.password = "Password is required!";
  } else if (formData.password.length < 5) {
    validationErrors.password = "Password should be at least 5 characters!";
  }

  if (formData.password != formData.rePassword) {
    console.log(formData.password);
    console.log(formData.rePassword);
    validationErrors.rePassword = "Password don't match!";
  }
  return validationErrors;
};

export const createRecipeFormValidation = (formData) => {
  const validationErrors = {};

  if (!formData.title.trim()) {
    validationErrors.title = "Title is required!";
  }

  if (!formData.calorien) {
    validationErrors.calorien = "Calorien is required!";
  } else if (Number(formData.calorien) == NaN) {
    validationErrors.calorien = "Type of calorien should be a Number!";
  }else if(formData.calorien < 1 || formData.calorien > 900){
    validationErrors.calorien = "Calorien should be in the range of 1 to 900!";
  }


  if (!formData.imageUrl.trim()) {
    validationErrors.imageUrl = "Image is required!";
  }
  if (!formData.cooking) {
    validationErrors.cooking = "Cooking is required!";
  }else if (Number(formData.cooking) == NaN) {
    validationErrors.cooking = "Type of cooking should be a Number!";
  }else if(formData.cooking < 0 || formData.cooking > 121){
    validationErrors.cooking = "Cooking should be in the range of 1 to 120!";
  }


  if (!formData.preparation.trim()) {
    validationErrors.preparation = "Preparation is required!";
  }


  if (formData.recipeType == "--") {
    validationErrors.recipeType = "Recipe Type is required!";
  }


  if (!formData.protein) {
    validationErrors.protein = "Protein is required!";
  }else if (Number(formData.protein) == NaN) {
    validationErrors.protein = "Type of protein should be a Number!";
  }else if(formData.protein < 0 || formData.protein > 100){
    validationErrors.protein = "Protein should be in the range of 1 to 99!";
  }


  if (!formData.carbs) {
    validationErrors.carbs = "Carbs is required!";
  }else if (Number(formData.carbs) == NaN) {
    validationErrors.carbs = "Type of carbs should be a Number!";
  }else if(formData.carbs < 0 || formData.carbs > 100){
    validationErrors.carbs = "Carbs should be in the range of 1 to 99!";
  }


  if (!formData.fat) {
    validationErrors.fat = "Fat is required!";
  }else if (Number(formData.fat) == NaN) {
    validationErrors.fat = "Type of fat should be a Number!";
  }else if(formData.fat < 0 || formData.fat > 100){
    validationErrors.fat = "Fat should be in the range of 1 to 99!";
  }


  if (!formData.sugar) {
    validationErrors.sugar = "Sugar is required!";
  }else if (Number(formData.sugar) == NaN) {
    validationErrors.sugar = "Type of sugar should be a Number!";
  }else if(formData.sugar < 0 || formData.sugar > 100){
    validationErrors.sugar = "Sugar should be in the range of 1 to 99!";
  }

  return validationErrors;
};

export const userInfoFormValidation = (formData) => {
  const validationErrors = {};

  console.log(formData.hight);
  if (!formData.username.trim()) {
    validationErrors.username = "Username is required!";
  }

  if (!formData.age) {
    validationErrors.age = "Age is required!";
  } else if (formData.age < 0 || formData.age > 100) {
    validationErrors.age = "Age should be in the range of 0 to 100!";
  } else if (Number(formData.age) == NaN) {
    validationErrors.age = "Type of age should be a Number!";
  }

  if (!formData.hight) {
    validationErrors.hight = "Height is required!";
  } else if (formData.hight < 100 || formData.hight > 220) {
    validationErrors.hight = "Height should be in the range of 100 to 220!";
  } else if (Number(formData.hight) == NaN) {
    validationErrors.hight = "Type of Height should be a Number!";
  }

  if (!formData.kilograms) {
    validationErrors.kilograms = "Kilograms is required!";
  } else if (
    Number(formData.kilograms) < 10 ||
    Number(formData.kilograms) > 220
  ) {
    validationErrors.kilograms =
      "Kilograms should be in the range of 10 to 220!";
  } else if (Number(formData.kilograms) == NaN) {
    validationErrors.kilograms = "Type of Height should be a Number!";
  }

  if (formData.activeness == "") {
    validationErrors.activeness = "Activeness is required!";
  }

  if (formData.man == "" && formData.women == "") {
    validationErrors.gender = "Gender is required!";
  }

  return validationErrors;
};
