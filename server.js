import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();
const app = express();
const PORT = Number(process.env.PORT || 10000);
const FRONTEND_URL = process.env.FRONTEND_URL || '*';
const ai = process.env.GEMINI_API_KEY ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }) : null;

app.use(cors({ origin: FRONTEND_URL === '*' ? true : FRONTEND_URL, methods: ['GET','POST','OPTIONS'], allowedHeaders: ['Content-Type'] }));
app.use(express.json({ limit: '1mb' }));

const BANK = {provider:'Opay',accountNumber:'9066760078',accountName:'CHRISTANA Godwin okon',whatsapp:'2349066760078',email:'zcorporg40@gmail.com'};
const PLANS = {
  PLUS: 500000,
  PRO: 1200000,
  ULTRA: 2500000
};
const CODES = {
  'ZCORP-PRO-7K4M-2026':'PRO','ZCORP-PRO-9Q2X-2026':'PRO','ZCORP-PRO-X8L5-2026':'PRO','ZCORP-PRO-M3T7-2026':'PRO','ZCORP-PRO-V6N1-2026':'PRO',
  'ZCORP-ULTRA-A9K2-2026':'ULTRA','ZCORP-ULTRA-F4Q8-2026':'ULTRA','ZCORP-ULTRA-H7M3-2026':'ULTRA','ZCORP-ULTRA-R5X9-2026':'ULTRA','ZCORP-ULTRA-Y2P6-2026':'ULTRA'
};
const rate = new Map();
function limited(ip){
  const now=Date.now(), r=rate.get(ip)||{n:0,t:now};
  if(now-r.t>60000){r.n=0;r.t=now;}
  r.n++; rate.set(ip,r); return r.n<=30;
}
function clean(s,max=12000){return String(s||'').slice(0,max).trim();}
function modelFor(mode){return 'gemini-3.7-flash';}

app.get('/api/health',(req,res)=>res.json({ok:true,service:'ZCORP AI 👑 ZEUS',gemini:!!ai,bankPayment:true}));

app.post('/api/chat', async (req,res)=>{
  if(!limited(req.ip)) return res.status(429).json({error:'Too many requests. Try again shortly.'});
  const prompt=clean(req.body?.prompt);
  const mode=clean(req.body?.mode||'fast',30).toLowerCase();
  const context=clean(req.body?.context,14000);
  if(!prompt) return res.status(400).json({error:'Prompt is required.'});
  if(!ai) return res.status(503).json({error:'Gemini is not connected yet. Add GEMINI_API_KEY to the Render backend environment.'});
  try{
    const system=`You are ZEUS, the premium AI assistant of ZCORP ORG. Be useful, direct and polished. Mode: ${mode}. If mode is research, clearly separate facts, uncertainty and sources when available. If mode is agent, produce a practical step-by-step execution plan and ask for confirmation before risky external actions. If mode is code, provide production-quality code and explain key choices. Never claim an action was executed if it was only planned. User context: ${context}`;
    const config={systemInstruction:system, temperature: mode==='think'?0.35:0.6};
    if(mode==='research') config.tools=[{googleSearch:{}}];
    const response=await ai.models.generateContent({model:modelFor(mode),contents:prompt,config});
    res.json({ok:true,text:response.text||'No response returned.',mode});
  }catch(err){console.error(err);res.status(500).json({error:'Gemini request failed.',detail:process.env.NODE_ENV==='development'?String(err):undefined});}
});

app.get('/api/payment-info',(req,res)=>res.json({ok:true,bank:BANK,plans:PLANS}));

app.post('/api/payments/submit',(req,res)=>{
  const name=clean(req.body?.name,120), email=clean(req.body?.email,200), plan=clean(req.body?.plan,20).toUpperCase(), reference=clean(req.body?.reference,120), amount=clean(req.body?.amount,40);
  if(!name||!email||!PLANS[plan]||!reference||!amount) return res.status(400).json({error:'Name, email, plan, reference and amount are required.'});
  const message=`ZCORP AI payment submission\nName: ${name}\nEmail: ${email}\nPlan: ${plan}\nAmount: NGN ${amount}\nReference: ${reference}`;
  console.log(message);
  res.json({ok:true,status:'submitted',message:'Payment submitted for manual verification.',whatsapp:`https://wa.me/${BANK.whatsapp}?text=${encodeURIComponent(message)}`});
});

app.post('/api/redeem', async (req,res)=>{
  const code=clean(req.body?.code,80).toUpperCase();
  const plan=CODES[code];
  if(!plan) return res.status(400).json({ok:false,error:'Invalid ZCORP premium code.'});
  res.json({ok:true,plan,message:`${plan} code accepted.`});
});

app.listen(PORT,()=>console.log(`👑 ZEUS backend listening on ${PORT}`));
