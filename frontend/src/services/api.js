const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const fetchData = async () => {
  const response = await fetch(`${API_URL}/api/data`);
  const data = await response.json();
  return data;
};
