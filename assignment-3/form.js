      var isUserValid = false;
      var isPassValid = false;
      
      function checkPass(){
        let pass1 = document.getElementById("password").value;
        let pass2 = document.getElementById("confirmPassword").value;
        if(pass2!==pass1){
          alert('Confirm Password is not same as Password');
        }
        else{
          this.isPassValid = true;
          if(this.isUserValid==true)
            document.querySelector('button').disabled = false;
          else
            alert('Username empty');
        }   
      };

      function checkUser(){
        let user = document.getElementById("username").value;
        if(user==''){
          alert('Enter username');
        }
        else{
          this.isUserValid=true;
          if(this.isPassValid==true)
            document.querySelector('button').disabled = false;
          else
            alert('Password empty or does not match');
        }    
      };
