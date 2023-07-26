async function fetchData(url, method, bodyData) {
    try {
      const response = await fetch(url, {
        method: method,
        body: bodyData,
      });
  
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  
  export default { fetchData };