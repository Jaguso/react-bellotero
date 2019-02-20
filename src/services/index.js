import axios from 'axios';

const API_URL = "https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master";

const getPageOne = () => axios.get(`${API_URL}/page1.json`);

export { getPageOne };