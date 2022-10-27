import axios from "axios";
import { serverBaseURL } from "../config/config";

export const getUserData = async (auth) => {
  //const baseUrl = baseURL;
  const { id, token } = auth;
  const projects = `${serverBaseURL()}/api/users/${id}/projects`;
  const technologies = `${serverBaseURL()}/api/users/${id}/technologies`;
  const libraries = `${serverBaseURL()}/api/users/${id}/libraries`;
  const packages = `${serverBaseURL()}/api/users/${id}/packages`;
  const images = `${serverBaseURL()}/api/users/${id}/images`;
  const tools = `${serverBaseURL()}/api/users/${id}/tools`;
  const links = `${serverBaseURL()}/api/users/${id}/links`;
  //const texts = `${serverBaseURL()}/api/users/${id}/texts`;
  //const roadmaps = `${serverBaseURL()}/api/users/${id}/roadmaps`;

  const headers = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };

  const requestProjects = await axios.get(projects, headers);
  const requestTechnologies = await axios.get(technologies, headers);
  const requestLibraries = await axios.get(libraries, headers);
  const requestPackages = await axios.get(packages, headers);
  const requestImages = await axios.get(images, headers);
  const requestTools = await axios.get(tools, headers);
  const requestLinks = await axios.get(links, headers);
  //const requestTexts = await axios.get(texts, headers);
  //const requestRoadmaps = await axios.get(roadmaps, headers);

  try {
    return axios
      .all([
        requestProjects,
        requestTechnologies,
        requestLibraries,
        requestPackages,
        requestImages,
        requestTools,
        requestLinks,
        //requestTexts,
      ])
      .then(
        axios.spread((...responses) => {
          //console.log(...responses);
          return responses;
        })
      );
  } catch (errors) {
    return errors;
  }
};

export const getCollection = async (datatype) => {
  try {
    const response = await axios.get(`${serverBaseURL()}/api/${datatype}`);

    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    return error;
  }
};

export const getDocumentById = async (datatype, id) => {
  try {
    const response = await axios.get(
      `${serverBaseURL()}/api/${datatype}/${id}`
    );

    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    return error;
  }
};