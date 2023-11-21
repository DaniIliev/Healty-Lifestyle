export const recipeType = (formValues) => {
  let type = "";
  if (formValues.recipeType == "breakfast") {
    type = "breakfast";
  } else if (formValues.recipeType == "snacks") {
    type = "snacks";
  } else if (formValues.recipeType == "lunchdinner") {
    type = "lunch&dinner";
  } else if (formValues.recipeType == "salats") {
    type = "salats";
  } else {
    type = "deserts";
  }

  return type;
};

export const responceDataStructure = (responce, type) => {
  // console.log(responce, type)
  // console.log(Object.values(responce))
  // console.log(Object.values(Object.values(responce)[1]))
  let result = [];
  let id;
  let recipe;
  if (type == "all") {
    for (let i = 0; i < Object.values(responce).length; i++) {
      for(let j = 0; j < Object.keys(Object.values(responce)[i]).length; j++ ){

        id = (Object.keys(Object.values(responce)[i])[j])
        recipe = (Object.values(Object.values(responce)[i])[j])

        result.push({ ...recipe, id: id });
      }
      // let recipe = Object.values(Object.values(responce)[i])[0];
      // console.log(Object.values(Object.values(responce)[i]))
      // let id = Object.keys(Object.values(responce)[i])[0];
    }
  } else {
    for (let i = 0; i < Object.values(responce).length; i++) {
      const id = Object.keys(responce)[0];

      const values = Object.values(responce)[0];

      result.push({
        id: Object.keys(responce)[i],
        ...Object.values(responce)[i],
      });
    }
  }
  console.log(result)
  return result;
};
