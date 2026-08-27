const menuBtn=document.querySelector('.menu-btn');const nav=document.querySelector('.nav-links');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
function sendMail(e){e.preventDefault();const n=document.getElementById('name').value;const em=document.getElementById('email').value;const m=document.getElementById('message').value;window.location.href=`mailto:yourmail@example.com?subject=Website%20message%20from%20${encodeURIComponent(n)}&body=${encodeURIComponent('Name: '+n+'\nEmail: '+em+'\n\n'+m)}`;}
