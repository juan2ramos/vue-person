import axios from 'axios';

const personService = {};

personService.all = function(){
  return axios.get('https://randomuser.me/api/?results=10').then(function (response) {
          return response.data.results;
  })
}

export default personService;
