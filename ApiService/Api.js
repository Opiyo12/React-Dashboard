const apiClient= axios.create({
    baseUrl:"http://localhost:3000",
    timeout:1000, //this ensures api doesnt wait indefinately for a response
    headers: {'Content-Type': 'application/json'}

});
export default apiClient;