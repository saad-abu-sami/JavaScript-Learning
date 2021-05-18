const password = 'samiabulchowdhury_1234$%@&'

if(password.length >= 10 && password.includes('$','%','@','&')){
   console.log('It is the most strongest password');
}
if(password.length >= 8){
   console.log('It is a strong password');
}
else{
   console.log('It is too weak password');
}
