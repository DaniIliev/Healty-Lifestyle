export const recipeType = (formValues) => {
  let type = "";
  if (formValues.recipeType == "breakfast") {
    console.log(formValues.breakfast);
    type = "Breakfast";
  } else if (formValues.recipeType == "snacks") {
    type = "Snacks";
  } else if (formValues.recipeType == "lunchdinner") {
    type = "Lunch & Dinner";
  } else if (formValues.recipeType == "salats") {
    type = "Salats";
  } else {
    type = "deserts";
  }

  return type;
};

export const responceDataStructure = (responce, type) => {
  let result = [];
  if (type == "all") {
    for (let i = 0; i < Object.values(responce).length; i++) {
      let recipe = Object.values(Object.values(responce)[i])[0];

      let id = Object.keys(Object.values(responce)[i])[0];

      result.push({ ...recipe, id: id });
    }
  } else {
    for (let i = 0; i < Object.values(responce).length; i++) {
      const id = Object.keys(responce)[0];

      const values = Object.values(responce)[0];

      result.push({
        id: Object.keys(responce)[0],
        ...Object.values(responce)[0],
      });
    }
  }

  return result;
};
