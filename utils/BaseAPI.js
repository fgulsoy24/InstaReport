import request from 'superagent';


export default {
  getData(url, params){
    return new Promise((resolve, reject) => {
      request
        .get(url)
        .query(params)
        .end((err, response) => {
          if (err) reject(err);
          resolve(response.body);
        });
    });
  },
  
  postData(url, params) {
    return new Promise((resolve, reject) => {
        request
        .post(url)
        .send(params)
        .end((err, response) => {
            if (err) reject(err);
            resolve(response.body);
        });
    });
  },

  uploadData(url, file, params) {
    return new Promise((resolve, reject) => {
        request
        .post(url)
        .query(params)
        .attach(file.name, file)
        .end((err, response) => {
            if (err) reject(err);
            resolve(response.body);
        });
    });
  },
}