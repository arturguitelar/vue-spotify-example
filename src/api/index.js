// temporary
import fake from "./fakeData";

const getToken = () => {
  return "Token return here";
};

const getData = query => {
  console.log("Query recebida: ", query);
  return fake;
};

export default { getToken, getData };
