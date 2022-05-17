
function f() {
    const aflpha =  ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
    let count = 0;
    let pass = document.getElementById('passs').value;
    let users = document.getElementById('users').value;
    let hashed = 0;
    // for (let i = 0; i < aflpha.length; i++){
    //     console.log(aflpha[i]);
    // }
    if (pass === 'brain' && users === 'f2000'){
        window.location.href = 'https://app.netlify.com/sites/project-orange-peel/overview';
    }
    else {
        // console.log(hashed)
        alert('no')
    }
}