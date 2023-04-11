const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginLink = document.getElementById('login-link');
const registerLink = document.getElementById('register-link');
// const linktodashboard=document.getElementById('link_dashboard')
// const linktannouncement=document.getElementById('link_announce')
// const linktonews=document.getElementById('link_news')
// const linktodetails=document.getElementById('link_details')
// const linktoevents=document.getElementById('link_events')
const dashboardcont=document.getElementById('dashboard')
const newscont=document.getElementById('news')
const eventscont=document.getElementById('events')
const detailscont=document.getElementById('details')
const annaouncecont=document.getElementById('annaouncement')
const chaptercont=document.getElementById('chapter')
const contactas=document.getElementById('contact')
loginLink.addEventListener('click', function() {
  loginForm.style.display = 'block';
  registerForm.style.display = 'none';
});

registerLink.addEventListener('click', function() {
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
});

function dashboard(){
  dashboardcont.style.display = 'flex';
   detailscont.style.display = 'none';
   eventscont.style.display = 'none';
   annaouncecont.style.display = 'none';
   newscont.style.display = 'none';
   contactas.style.display='none'
   chaptercont.style.display = 'none';
 };

 function events(){
  dashboardcont.style.display = 'none';
   detailscont.style.display = 'none';
   eventscont.style.display = 'block';
   annaouncecont.style.display = 'none';
   newscont.style.display = 'none';
   contactas.style.display='none'
   chaptercont.style.display = 'none';
 };
 function details(){
  dashboardcont.style.display = 'none';
   detailscont.style.display = 'block';
   eventscont.style.display = 'none';
   annaouncecont.style.display = 'none';
   newscont.style.display = 'none';
   contactas.style.display='none'
   chaptercont.style.display = 'none';
 };
 function chapter(){
  dashboardcont.style.display = 'none';
   detailscont.style.display = 'none';
   eventscont.style.display = 'none';
   annaouncecont.style.display = 'none';
   newscont.style.display = 'none';
 chaptercont.style.display = 'block';
 contactas.style.display='none'
 };
 function news(){
  dashboardcont.style.display = 'none';
   detailscont.style.display = 'none';
   eventscont.style.display = 'none';
   annaouncecont.style.display = 'none';
   newscont.style.display = 'block';
   contactas.style.display='none'
   chaptercont.style.display = 'none';
 };
 function contact(){
  dashboardcont.style.display = 'none';
   detailscont.style.display = 'none';
   eventscont.style.display = 'none';
   annaouncecont.style.display = 'none';
   newscont.style.display = 'none';
 contactas.style.display='flex'
 chaptercont.style.display = 'none';
 };
function login() {
  window.location.href = "./Hackathon.html.HTML";

}
 function logout() {
  window.location.href = "./index.html";
 }