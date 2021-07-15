function fetchUserProfile(accessToken, context, callback) {
    request.get({
      url: 'https://broker.netid.de/userinfo',
      
      headers: {
        'Authorization': 'Bearer ' + accessToken,
      }
    },
    (err, resp, body) => {
      if (err) {
        return callback(err);
      }
  
      if (resp.statusCode !== 200) {
        return callback(new Error(`[Response code: ${resp.statusCode}] ${body}`));
      }
  
      let bodyParsed;
      try {
        bodyParsed = JSON.parse(body);
      } catch (jsonError) {
        return callback(new Error(body));
      }
      
      // Use the Real-time Webtask Logs extension
      console.log(bodyParsed);
  
      // TODO: Update this to map the incoming user identity to the Auth0 profile:
      // https://auth0.com/docs/users/user-profile-structure
      bodyParsed.user_id = bodyParsed.sub;
      bodyParsed.name =  bodyParsed.given_name + ' ' + bodyParsed.family_name;
      
      return callback(null, bodyParsed);
    });
  }