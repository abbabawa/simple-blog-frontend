var User = (function() {
    var full_name = "";
    var id = ""
  
    var getName = function() {
        //Consider using cookie
      return sessionStorage.getItem("name");    // Or pull this from cookie/localStorage
    };

    var getId = ()=>{
        return sessionStorage.getItem("id")
    }
  
    var setName = function(name) {
      full_name = name;   
      sessionStorage.setItem("name", name)  
      // Also set this in cookie/localStorage
    };

    var setId = (id)=>{
        sessionStorage.setItem("id", id)
    }

    var setToken = (token)=>{
      sessionStorage.setItem("token", token)
    }

    var getToken = ()=>{
      return sessionStorage.getItem("token")
    }
  
    return {
      getName: getName,
      setName: setName,
      getId: getId,
      setId: setId,
      getToken: getToken,
      setToken: setToken
    }
  
  })();
  
  export default User;