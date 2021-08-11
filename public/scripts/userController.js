function validUsername(username)
{
    if("_@ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(username.toUpperCase()[0]))
    {
        if(!username.includes('.') && !username.includes(',') && !username.includes('*') && !username.includes('+') && !username.includes('-')
           && !username.includes('/') && !username.includes('\\') && !username.includes('~') && !username.includes('[') && !username.includes(']') && !username.includes(':') && !username.includes(';'))
        {
            return true;
        }
        else
        {
            alert(`Please don't use: '.', ',', '*', '+', '-', '/', '\\','~', '[', ']', ':' or ';' in username.`);    
            
            return false;
        }
    }
    else
    {
        alert(`The username must start with some letter, '_' or '@'. `);
        
        return false;
    }
}

function validEmail(email)
{
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(reg.test(email))
    {
        return true;
    }
    else
    {
        alert('Please enter a valid email address.');

        return false;
    }
}

function Validation()
{
    singUp = document.signUp.value;

    if(isNaN(singUp))
    {
        user = {}

        user['username'] = document.getElementById("username").value.trim();
        user['email'] = document.getElementById("email").value.trim();
        user['date'] = document.getElementById("date").value;
        user['pass'] = document.getElementById("pass").value;
        user['passConf'] = document.getElementById("passconf").value;
   
        //alert(`${user['username']}, ${user['email']}, ${user['date']}, ${user['pass']}, ${user['passConf']}`)

        if(validUsername(user['username']) && validEmail(username['email']))
        {
            fetch('/createUser', 
            {
                method:'POST',
                headers: { 
                    'Content-Type' : 'Application/json' 
                        },
                body: JSON.stringify( user ) 
            });
        }
        else
        {
            location.replace("/createUser"); 
        }
    }
}