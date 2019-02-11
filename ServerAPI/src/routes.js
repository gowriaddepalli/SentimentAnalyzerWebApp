import { sentimeter } from './sentimeterCalc';

export const routes = [
  {
    method: 'GET',
    path: '/',
    handler: function (request, h){
      return 'This is the homepage';
    }
  },
  {
    method: 'POST',
    path: '/sentimeter',
    handler: function(request, h){
      let payload = request.payload;
      if (typeof(payload) === 'string'){
        payload = JSON.parse(payload);
      }
      return sentimeter(payload.sentence);
    }
  }
];
