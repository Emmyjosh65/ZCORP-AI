const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function esc(x){return String(x).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function add(text,type='ai'){const m=$('#messages'),d=document.createElement('div');d.className='msg '+type;d.innerHTML=esc(text).replace(/\n/g,'<br>');m.appendChild(d);m.scrollTop=m.scrollHeight}
function send(){let p=$('#prompt'),t=p.value.trim();if(!t)return;$('#hero').style.display='none';$('#messages').style.display='block';add(t,'user');p.value='';setTimeout(()=>add('ZEUS received your request. This GitHub version is the frontend interface. For real Gemini AI, connect this page to a secure backend/serverless API so your private API key is never exposed.'),350)}
$('#send').onclick=send;$('#prompt').onkeydown=e=>{if(e.key==='Enter')send()};
$$('.quick button').forEach(b=>b.onclick=()=>{$('#prompt').value=b.dataset.prompt;send()});
$('#newChat').onclick=()=>{$('#messages').innerHTML='';$('#messages').style.display='none';$('#hero').style.display='block'};
$('#menu').onclick=()=>$('#sidebar').classList.toggle('open');
const names={chat:['ZEUS','AI assistant by ZCORP ORG'],research:['Research','Web research workspace'],files:['Files','Your files'],agent:['Agent','Automation workspace'],code:['Code','Coding workspace']};
$$('.nav').forEach(b=>b.onclick=()=>{let v=b.dataset.view;$$('.nav').forEach(x=>x.classList.remove('active'));b.classList.add('active');$('#title').textContent=names[v][0];$('#subtitle').textContent=names[v][1];if(v!=='chat'){ $('#hero').style.display='none';$('#messages').style.display='block';add(names[v][0]+' mode is ready. Connect the frontend to your backend to enable the full feature.')}})
$('#upgrade').onclick=()=>$('#modal').classList.remove('hidden');$('#close').onclick=()=>$('#modal').classList.add('hidden');
$('#attach').onclick=()=>$('#file').click();$('#file').onchange=e=>{if(e.target.files.length)add(e.target.files.length+' file(s) selected. A backend is required to process uploads.')};
$('#voice').onclick=()=>{const R=window.SpeechRecognition||window.webkitSpeechRecognition;if(!R)return alert('Voice input is not supported here.');let r=new R();r.lang='en-US';r.onresult=e=>$('#prompt').value=e.results[0][0].transcript;r.start()};