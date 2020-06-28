import axios from "axios";

const urlApiPaciente = process.env.REACT_APP_API_ENDPOINT_PATIENT;
const urlApiMedico = process.env.REACT_APP_API_ENDPOINT_DOCTOR;

const UseGetApi = (url, endpoint) => {
  try {
<<<<<<< HEAD
    const urlComplete = (url == 'P' ? urlApiPaciente : urlApiMedico) + endpoint;
    return axios
      .get(urlComplete)
      .then((result) => {
        var newResult = {
          status: result.status,
          data: result.data,
          headers: result.headers,
=======
    const urlComplete = (url == "P" ? urlApiPaciente : urlApiMedico) + endpoint;
    return axios
      .get(urlComplete)
      .then(result => {
        var newResult = {
          status: result.status,
          data: result.data,
          headers: result.headers
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
        };
        return newResult;
      })
      .catch(function(error) {
        if (error.response) {
<<<<<<< HEAD
          var message = '';
          if (error.response.data.message)
            message = error.response.data.message;
          else message = 'Erro inesperado';

          var newError = {
            status: error.response.data.status,
            message: message,
=======
          var message = "";
          if (error.response.data.message)
            message = error.response.data.message;
          else message = "Erro inesperado";

          var newError = {
            status: error.response.data.status,
            message: message
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
          };
          return newError;
        } else {
          var result = {
            status: 500,
<<<<<<< HEAD
            message: 'Erro ao conectar com api.',
=======
            message: "Erro ao conectar com api."
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
          };
          return result;
        }
      });
  } catch (error) {
    var result = {
      status: 500,
<<<<<<< HEAD
      message: 'Erro.',
=======
      message: "Erro."
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
    };
    return result;
  }
};

const UsePostApi = (url, endpoint, obj) => {
  try {
<<<<<<< HEAD
    const urlComplete = (url == 'P' ? urlApiPaciente : urlApiMedico) + endpoint;
    const headers = { headers: { 'Content-Type': 'application/json' } };
    return axios
      .post(urlComplete, obj, headers)
      .then((result) => {
=======
    const urlComplete = (url == "P" ? urlApiPaciente : urlApiMedico) + endpoint;
    const headers = { headers: { "Content-Type": "application/json" } };
    return axios
      .post(urlComplete, obj, headers)
      .then(result => {
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
        var newResult = {
          status: result.status,
          message: 'Cadastro realizado com sucesso!',
          data: result.data,
<<<<<<< HEAD
          headers: result.headers,
=======
          headers: result.headers
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
        };
        return newResult;
      })
      .catch(function(error) {
        if (error.response) {
<<<<<<< HEAD
          var message = '';
          if (error.response.data.message)
            message = error.response.data.message;
          else message = 'Erro inesperado';

          var newError = {
            status: error.response.data.status,
            message: message,
=======
          var message = "";
          if (error.response.data.message)
            message = error.response.data.message;
          else message = "Erro inesperado";

          var newError = {
            status: error.response.data.status,
            message: message
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
          };
          return newError;
        } else {
          var result = {
            status: 500,
<<<<<<< HEAD
            message: 'Erro ao conectar com api.',
=======
            message: "Erro ao conectar com api."
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
          };
          return result;
        }
      });
  } catch (error) {
    var result = {
      status: 500,
<<<<<<< HEAD
      message: 'Erro.',
=======
      message: "Erro."
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
    };
    return result;
  }
};

const UsePutApi = (url, endpoint, id, obj) => {
  try {
    const urlComplete =
<<<<<<< HEAD
      (url == 'P' ? urlApiPaciente : urlApiMedico) + endpoint + id;
    const headers = { headers: { 'Content-Type': 'application/json' } };
    return axios
      .put(urlComplete, obj, headers)
      .then((result) => {
        if (result.data.status) {
          let newResult = {
            status: result.data.status,
            message: result.data.message,
=======
      (url == "P" ? urlApiPaciente : urlApiMedico) + endpoint + id;
    const headers = { headers: { "Content-Type": "application/json" } };
    return axios
      .put(urlComplete, obj, headers)
      .then(result => {
        if (result.data.status) {
          let newResult = {
            status: result.data.status,
            message: result.data.message
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
          };
          return newResult;
        } else {
          let newResult = {
            status: result.status,
<<<<<<< HEAD
            message: 'Dados atualizados com sucesso!',
            data: result.data,
=======
            message: "Dados atualizados com sucesso!",
            data: result.data
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
          };
          return newResult;
        }
      })
      .catch(function(error) {
        if (error.response) {
<<<<<<< HEAD
          var messageError = '';
=======
          var messageError = "";
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
          if (error.response.data.message)
            messageError = error.response.data.message;
          else if (error.response.data.title)
            messageError = error.response.data.title;

          var newError = {
            status: error.response.data.status,
<<<<<<< HEAD
            message: messageError,
=======
            message: messageError
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
          };
          return newError;
        }
      });
  } catch (error) {
    var result = {
      status: 500,
<<<<<<< HEAD
      message: 'Erro.',
=======
      message: "Erro."
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
    };
    return result;
  }
};

const UseDeleteApi = (url, endpoint, id) => {
  try {
    const urlComplete =
<<<<<<< HEAD
      (url == 'P' ? urlApiPaciente : urlApiMedico) + endpoint + id;
    const headers = { headers: { 'Content-Type': 'application/json' } };
    return axios
      .delete(urlComplete, headers)
      .then((result) => {
        var newResult = {
          status: result.status,
          message: 'Registro removido com sucesso!',
          data: result.data,
=======
      (url == "P" ? urlApiPaciente : urlApiMedico) + endpoint + id;
    const headers = { headers: { "Content-Type": "application/json" } };
    return axios
      .delete(urlComplete, headers)
      .then(result => {
        var newResult = {
          status: result.status,
          message: "Registro removido com sucesso!",
          data: result.data
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
        };
        return newResult;
      })
      .catch(function(error) {
        if (error.response) {
          var newError = {
            status: error.response.data.status,
<<<<<<< HEAD
            message: error.response.data.message,
=======
            message: error.response.data.message
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
          };
          return newError;
        }
      });
  } catch (error) {
    var result = {
      status: 500,
<<<<<<< HEAD
      message: 'Erro.',
=======
      message: "Erro."
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
    };
    return result;
  }
};

<<<<<<< HEAD
const UseGetApiCEP = (cep) => {
  try {
    const urlComplete =
      'https://cors-anywhere.herokuapp.com/https://www.cepaberto.com/api/v3/cep?cep=' +
=======
const UseGetApiCEP = cep => {
  try {
    const urlComplete =
      "https://cors-anywhere.herokuapp.com/https://www.cepaberto.com/api/v3/cep?cep=" +
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
      cep;
    //return axios.get(urlComplete)
    return axios
      .get(urlComplete, {
        headers: {
<<<<<<< HEAD
          Authorization: `Token token=ed3c65f56f6e7ff359d039cd7118de57`,
        },
      })
      .then((result) => {
        var newResult = {
          status: result.status,
          data: result.data,
          headers: result.headers,
=======
          Authorization: `Token token=ed3c65f56f6e7ff359d039cd7118de57`
        }
      })
      .then(result => {
        var newResult = {
          status: result.status,
          data: result.data,
          headers: result.headers
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
        };
        return newResult;
      })
      .catch(function(error) {
        if (error.response) {
<<<<<<< HEAD
          var message = '';
          if (error.response.data.message)
            message = error.response.data.message;
          else message = 'Erro inesperado';

          var newError = {
            status: error.response.data.status,
            message: message,
=======
          var message = "";
          if (error.response.data.message)
            message = error.response.data.message;
          else message = "Erro inesperado";

          var newError = {
            status: error.response.data.status,
            message: message
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
          };
          return newError;
        } else {
          var result = {
            status: 500,
<<<<<<< HEAD
            message: 'Erro ao conectar com api.',
=======
            message: "Erro ao conectar com api."
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
          };
          return result;
        }
      });
  } catch (error) {
    var result = {
      status: 500,
<<<<<<< HEAD
      message: 'Erro.',
=======
      message: "Erro."
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
    };
    return result;
  }
};

<<<<<<< HEAD
const UseGetApiURL = (endpointComplete) => {
  try {
    return axios
      .get(endpointComplete)
      .then((result) => {
        var newResult = {
          status: result.status,
          data: result.data,
          headers: result.headers,
=======
const UseGetApiURL = endpointComplete => {
  try {
    return axios
      .get(endpointComplete)
      .then(result => {
        var newResult = {
          status: result.status,
          data: result.data,
          headers: result.headers
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
        };
        return newResult;
      })
      .catch(function(error) {
        if (error.response) {
<<<<<<< HEAD
          var message = '';
          if (error.response.data.message)
            message = error.response.data.message;
          else message = 'Erro inesperado';

          var newError = {
            status: error.response.data.status,
            message: message,
          };
          return newError;
        } else {
          var result = {
            status: 500,
            message: 'Erro ao conectar com api.',
          };
          return result;
        }
      });
  } catch (error) {
    var result = {
      status: 500,
      message: 'Erro.',
    };
    return result;
  }
};

const UsePostApiURL = (endpointComplete, obj) => {
  try {
    const headers = {
      headers: { 'Content-Type': 'application/json', JSON: 'true' },
    };
    console.log(headers);
    return axios
      .post(endpointComplete, obj, headers)
      .then((result) => {
        var newResult = {
          status: result.status,
          message: 'Cadastro realizado com sucesso!',
          data: result.data,
          headers: result.headers,
        };
        return newResult;
      })
      .catch(function(error) {
        if (error.response) {
          var message = '';
          if (error.response.data.message)
            message = error.response.data.message;
          else message = 'Erro inesperado';

          var newError = {
            status: error.response.data.status,
            message: message,
          };
          return newError;
        } else {
          var result = {
            status: 500,
            message: 'Erro ao conectar com api.',
=======
          var message = "";
          if (error.response.data.message)
            message = error.response.data.message;
          else message = "Erro inesperado";

          var newError = {
            status: error.response.data.status,
            message: message
          };
          return newError;
        } else {
          var result = {
            status: 500,
            message: "Erro ao conectar com api."
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
          };
          return result;
        }
      });
  } catch (error) {
    var result = {
      status: 500,
<<<<<<< HEAD
      message: 'Erro.',
=======
      message: "Erro."
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
    };
    return result;
  }
};

<<<<<<< HEAD
const UseGetApiParams = (url, endpoint, params) => {
  try {
    const urlComplete = (url == 'P' ? urlApiPaciente : urlApiMedico) + endpoint;
    return axios
      .get(urlComplete, {
        params,
      })
      .then((result) => {
        var newResult = {
          status: result.status,
          data: result.data,
          headers: result.headers,
=======
const UsePostApiURL = (endpointComplete, obj) => {
  try {
    const headers = {
      headers: { "Content-Type": "application/json", JSON: "true" }
    };
    console.log(headers);
    return axios
      .post(endpointComplete, obj, headers)
      .then(result => {
        var newResult = {
          status: result.status,
          message: "Cadastro realizado com sucesso!",
          data: result.data,
          headers: result.headers
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
        };
        return newResult;
      })
      .catch(function(error) {
        if (error.response) {
<<<<<<< HEAD
          var message = '';
          if (error.response.data.message)
            message = error.response.data.message;
          else message = 'Erro inesperado';

          var newError = {
            status: error.response.data.status,
            message: message,
=======
          var message = "";
          if (error.response.data.message)
            message = error.response.data.message;
          else message = "Erro inesperado";

          var newError = {
            status: error.response.data.status,
            message: message
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
          };
          return newError;
        } else {
          var result = {
            status: 500,
<<<<<<< HEAD
            message: 'Erro ao conectar com api.',
=======
            message: "Erro ao conectar com api."
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
          };
          return result;
        }
      });
  } catch (error) {
    var result = {
      status: 500,
<<<<<<< HEAD
      message: 'Erro.',
=======
      message: "Erro."
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
    };
    return result;
  }
};

export {
  UseGetApi,
  UsePostApi,
  UsePutApi,
  UseDeleteApi,
  UseGetApiCEP,
  UseGetApiURL,
<<<<<<< HEAD
  UsePostApiURL,
  UseGetApiParams,
=======
  UsePostApiURL
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
};
