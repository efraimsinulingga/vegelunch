import config from "../config/configApi";

export const getRecipes = async () => {
  const res = await fetch(`${config.apiUrl}filter.php?c=vegetarian`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Error in our server");
  }

  const data = await res.json();
  return data;
};

export const getDetailRecipes = async (id: string) => {
  const res = await fetch(`${config.apiUrl}lookup.php?i=${id}`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Error in our server");
  }

  const data = await res.json();
  return data;
};
