export const recipeType = (formValues) => {
  let type = "";
  if (formValues.recipeType == "breakfast") {
    type = "breakfast";
  } else if (formValues.recipeType == "snacks") {
    type = "snacks";
  } else if (formValues.recipeType == "lunch&dinner") {
    type = "lunch&dinner";
  } else if (formValues.recipeType == "salats") {
    type = "salats";
  } else {
    type = "deserts";
  }

  return type;
};

export const responceDataStructure = (responce, type) => {

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

  return result;
};
