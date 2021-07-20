function Validation()
{
    form = document.signUp.value;

    if( isNaN(form) )
    {
        user = {}

        user['username'] = document.getElementById("username").value;
        user['email'] = document.getElementById("email").value;
        user['date'] = document.getElementById("date").value;
        user['pass'] = document.getElementById("pass").value;
        user['passConf'] = document.getElementById("passconf").value;
   
        //alert(`${user['username']}, ${user['email']}, ${user['date']}, ${user['pass']}, ${user['passConf']}`)

        if(user['username'] == "")
        {
            alert("Username está vazio")
            location.replace("/createUser");
        }

        /*
            fetch('/', {
                method:'POST',
                headers: { 
                    'Content-Type' : 'Application/json' 
                        },
                body: JSON.stringify( user ) } 
                )
            }
        */
    }
}