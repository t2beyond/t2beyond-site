const dimensions = {
  technical: { name: 'Technical Capital', fr: 'Capital technique' },
  business: { name: 'Business Acumen', fr: 'Compréhension business' },
  customer: { name: 'Customer & Value', fr: 'Client & création de valeur' },
  leadership: { name: 'Leadership & Influence', fr: 'Leadership & influence' },
  visibility: { name: 'Visibility & Network', fr: 'Visibilité & réseau' },
  strategy: { name: 'Strategic Thinking', fr: 'Vision stratégique' },
  career: { name: 'Career & Market Value', fr: 'Pilotage de carrière & valeur marché' }
};

const questions = [
  {id:1, d:'technical', text:"Je possède au moins une expertise pour laquelle je suis régulièrement identifié comme une personne de référence."},
  {id:2, d:'business', text:"Je pourrais expliquer simplement comment mon entreprise ou mon activité gagne de l'argent."},
  {id:3, d:'leadership', text:"Je parviens à faire avancer des sujets avec des personnes sur lesquelles je n'ai aucune autorité hiérarchique."},
  {id:4, d:'customer', text:"Je comprends les problèmes que nos clients ou utilisateurs cherchent réellement à résoudre."},
  {id:5, d:'visibility', text:"Des décideurs au-delà de mon responsable direct connaissent mes réalisations et ce que j'apporte."},
  {id:6, d:'career', text:"Je sais précisément quel type de responsabilités je souhaite viser dans les 2–3 prochaines années."},
  {id:7, d:'strategy', text:"Je comprends les principales priorités stratégiques de mon entreprise au-delà de mon propre périmètre."},
  {id:8, d:'technical', text:"Au cours des 12 derniers mois, j'ai été sollicité pour résoudre des problèmes complexes dépassant les tâches courantes de mon poste."},
  {id:9, d:'business', text:"Lorsque j'évalue une solution technique, je considère aussi son coût, sa valeur et son impact business."},
  {id:10, d:'customer', text:"Je suis capable de traduire une performance technique en bénéfice concret pour un client ou utilisateur."},
  {id:11, d:'leadership', inv:true, text:"Face à un sujet important impliquant plusieurs personnes, j'ai tendance à attendre que mon manager prenne l'initiative."},
  {id:12, d:'visibility', text:"Mes résultats sont suffisamment visibles pour que ma contribution personnelle soit identifiée au-delà de mon équipe immédiate."},
  {id:13, d:'career', text:"Je connais raisonnablement bien ma valeur actuelle sur le marché professionnel."},
  {id:14, d:'strategy', text:"Je suis capable d'identifier les conséquences à moyen ou long terme d'une décision prise aujourd'hui."},
  {id:15, d:'technical', text:"Je suis capable d'expliquer un sujet technique complexe à un décideur non spécialiste sans perdre le message essentiel."},
  {id:16, d:'business', text:"Je comprends les principaux éléments qui influencent les coûts, les marges et la rentabilité de mon activité."},
  {id:17, d:'customer', text:"J'ai suffisamment d'exposition aux clients, utilisateurs ou équipes commerciales pour comprendre leurs priorités."},
  {id:18, d:'leadership', text:"Au cours des 12 derniers mois, j'ai pris en charge au moins une responsabilité dépassant le périmètre strict de mon poste."},
  {id:19, d:'visibility', text:"Je développe volontairement des relations professionnelles avec des personnes appartenant à d'autres fonctions que la mienne."},
  {id:20, d:'career', inv:true, text:"Je ne confronte généralement mon profil au marché externe que lorsque j'envisage réellement de quitter mon entreprise."},
  {id:21, d:'strategy', text:"Lorsque plusieurs solutions sont possibles, je sais arbitrer en tenant compte de la technologie, du business, des ressources et des risques."},
  {id:22, d:'technical', text:"Je sais quelles compétences techniques risquent de devenir plus ou moins importantes dans mon métier au cours des prochaines années."},
  {id:23, d:'business', inv:true, text:"Les considérations économiques restent généralement du ressort du management ou des fonctions business plutôt que du mien."},
  {id:24, d:'customer', text:"Je pourrais expliquer pourquoi un client devrait choisir notre solution plutôt que celle d'un concurrent."},
  {id:25, d:'leadership', text:"Je suis à l'aise pour défendre une recommandation face à des personnes plus seniors que moi."},
  {id:26, d:'visibility', text:"Je développe volontairement mon réseau professionnel en dehors de mon entreprise, même lorsque je ne recherche pas un nouveau poste."},
  {id:27, d:'career', text:"Je sais expliquer clairement ce qui me différencie professionnellement et pourquoi cette différence a de la valeur."},
  {id:28, d:'strategy', inv:true, text:"J'ai tendance à me concentrer sur les objectifs de mon propre périmètre plutôt que sur les enjeux plus larges de l'entreprise."}
];

const contextSteps = [
  {key:'role', title:'Quelle est ta fonction actuelle ?', type:'single', options:['Ingénieur','Expert technique','Chef de projet','Manager','Directeur','Business / Sales','Entrepreneur','Autre']},
  {key:'experience', title:"Combien d'années d'expérience professionnelle as-tu ?", type:'single', options:['0–3 ans','4–7 ans','8–12 ans','13–20 ans','20+ ans']},
  {key:'target', title:'Quelle évolution professionnelle souhaites-tu principalement viser dans les 2–3 prochaines années ?', type:'single', options:['Approfondir mon expertise technique / devenir expert','Évoluer vers le management d’équipe','Accéder à des responsabilités de direction','Évoluer vers le commercial / Business Development','Évoluer vers une autre fonction de l’entreprise','Créer ou développer une entreprise','Je ne sais pas encore précisément','Autre']},
  {key:'priority', title:"Quel est aujourd'hui ton objectif professionnel prioritaire ?", type:'single', options:['Plus de responsabilités','Meilleure rémunération','Plus d’impact','Changer de métier / fonction','Entreprendre','Trouver un meilleur équilibre','Autre']},
  {key:'barriers', title:"Selon toi, qu'est-ce qui freine aujourd'hui le plus ta progression professionnelle ?", type:'multi', max:3, helper:'Choisis jusqu’à 3 réponses.', options:['Mes compétences techniques','Ma compréhension du business','Mon leadership / ma capacité à influencer','Ma visibilité dans mon entreprise','Mon réseau professionnel','Le manque d’opportunités dans mon entreprise','Ma connaissance de ma valeur sur le marché','Je ne sais pas clairement quelle direction prendre','Le manque de temps ou de disponibilité','Autre']}
];

const weights = {
  expertise:    {technical:5,business:2,customer:2,leadership:3,visibility:3,strategy:3,career:3},
  management:   {technical:4,business:3,customer:3,leadership:5,visibility:4,strategy:4,career:3},
  direction:    {technical:3,business:5,customer:4,leadership:5,visibility:4,strategy:5,career:4},
  business:     {technical:3,business:5,customer:5,leadership:4,visibility:4,strategy:4,career:4},
  cross:        {technical:3,business:4,customer:3,leadership:3,visibility:3,strategy:4,career:4},
  entrepreneur: {technical:3,business:5,customer:5,leadership:5,visibility:4,strategy:5,career:4}
};

const state = { context:{}, answers:{}, contextIndex:0, questionIndex:0 };
const screens = ['introScreen','contextScreen','questionScreen','resultScreen'];
function showScreen(id){screens.forEach(s=>document.getElementById(s).classList.toggle('is-active',s===id));window.scrollTo({top:0,behavior:'smooth'});}

function radioOptions(step, selected){
  return `<div class="cc-options">${step.options.map((o,i)=>`<label class="cc-option"><input type="radio" name="ctx" value="${i}" ${selected===o?'checked':''}><span>${o}</span></label>`).join('')}</div>`;
}
function multiOptions(step, selected=[]){
  return `<div class="cc-options">${step.options.map((o,i)=>`<label class="cc-option"><input type="checkbox" name="ctxmulti" value="${i}" ${selected.includes(o)?'checked':''}><span>${o}</span></label>`).join('')}</div>`;
}

function renderContext(){
  const step=contextSteps[state.contextIndex];
  document.getElementById('contextStepLabel').textContent=`${state.contextIndex+1} / ${contextSteps.length}`;
  document.getElementById('contextProgressBar').style.width=`${((state.contextIndex+1)/contextSteps.length)*100}%`;
  const selected=state.context[step.key];
  document.getElementById('contextQuestion').innerHTML=`<div class="cc-context-card"><p class="cc-question-number">Avant le Career Check</p><h2>${step.title}</h2>${step.helper?`<p class="cc-helper">${step.helper}</p>`:''}${step.type==='single'?radioOptions(step, selected):multiOptions(step, Array.isArray(selected)?selected:[])}<div id="dynamicContext"></div></div>`;
  attachContextListeners(step);
  updateContextNext(step);
  document.getElementById('contextBackBtn').style.visibility=state.contextIndex===0?'hidden':'visible';
}

function attachContextListeners(step){
  if(step.type==='single'){
    document.querySelectorAll('input[name="ctx"]').forEach(input=>input.addEventListener('change',e=>{
      const value=step.options[+e.target.value]; state.context[step.key]=value;
      if(step.key==='target') renderTargetSubquestion(value);
      updateContextNext(step);
    }));
    if(step.key==='target' && state.context.target) renderTargetSubquestion(state.context.target);
  }else{
    document.querySelectorAll('input[name="ctxmulti"]').forEach(input=>input.addEventListener('change',e=>{
      let current=Array.isArray(state.context[step.key])?[...state.context[step.key]]:[];
      const value=step.options[+e.target.value];
      if(e.target.checked){ if(current.length>=step.max){e.target.checked=false;return;} current.push(value); }
      else current=current.filter(v=>v!==value);
      state.context[step.key]=current;
      renderBarrierPrimary(); updateContextNext(step);
    }));
    renderBarrierPrimary();
  }
}

function renderTargetSubquestion(value){
  const host=document.getElementById('dynamicContext');
  if(value!=='Évoluer vers une autre fonction de l’entreprise'){host.innerHTML='';return;}
  const functions=['Marketing','Product / Product Management','Achats','Opérations / Supply Chain','Finance','Innovation','RH','Commercial / Business Development','Autre'];
  const selected=state.context.functions||[];
  host.innerHTML=`<div class="cc-subquestion"><h3>Quelles fonctions t’intéressent le plus ?</h3><p class="cc-helper">Sélectionne jusqu’à 3 réponses.</p><div class="cc-options">${functions.map((f,i)=>`<label class="cc-option"><input type="checkbox" name="functions" value="${i}" ${selected.includes(f)?'checked':''}><span>${f}</span></label>`).join('')}</div><div id="functionPrimary"></div></div>`;
  document.querySelectorAll('input[name="functions"]').forEach(input=>input.addEventListener('change',e=>{
    let arr=[...(state.context.functions||[])]; const v=functions[+e.target.value];
    if(e.target.checked){if(arr.length>=3){e.target.checked=false;return;}arr.push(v);}else arr=arr.filter(x=>x!==v);
    state.context.functions=arr; if(!arr.includes(state.context.functionPrimary)) state.context.functionPrimary=null; renderFunctionPrimary(); updateContextNext(contextSteps[state.contextIndex]);
  }));
  renderFunctionPrimary();
}
function renderFunctionPrimary(){
  const host=document.getElementById('functionPrimary'); if(!host)return;
  const arr=state.context.functions||[];
  if(arr.length<2){state.context.functionPrimary=arr[0]||null;host.innerHTML='';return;}
  host.innerHTML=`<div class="cc-subquestion"><h3>Parmi ces fonctions, laquelle t’attire le plus aujourd’hui ?</h3><div class="cc-options">${arr.map(f=>`<label class="cc-option"><input type="radio" name="functionPrimary" value="${f}" ${state.context.functionPrimary===f?'checked':''}><span>${f}</span></label>`).join('')}</div></div>`;
  document.querySelectorAll('input[name="functionPrimary"]').forEach(i=>i.addEventListener('change',e=>{state.context.functionPrimary=e.target.value;updateContextNext(contextSteps[state.contextIndex]);}));
}

function renderBarrierPrimary(){
  const host=document.getElementById('dynamicContext'); if(!host)return;
  const arr=state.context.barriers||[];
  if(arr.length<2){state.context.barrierPrimary=arr[0]||null;host.innerHTML='';return;}
  host.innerHTML=`<div class="cc-subquestion"><h3>Parmi ces éléments, lequel considères-tu comme ton frein principal ?</h3><div class="cc-options">${arr.map(v=>`<label class="cc-option"><input type="radio" name="barrierPrimary" value="${v}" ${state.context.barrierPrimary===v?'checked':''}><span>${v}</span></label>`).join('')}</div></div>`;
  document.querySelectorAll('input[name="barrierPrimary"]').forEach(i=>i.addEventListener('change',e=>{state.context.barrierPrimary=e.target.value;updateContextNext(contextSteps[state.contextIndex]);}));
}

function updateContextNext(step){
  let ok=false;
  if(step.type==='single') ok=!!state.context[step.key];
  else ok=Array.isArray(state.context[step.key])&&state.context[step.key].length>0&&!!state.context.barrierPrimary;
  if(step.key==='target' && state.context.target==='Évoluer vers une autre fonction de l’entreprise'){
    const funcs=state.context.functions||[]; ok=ok&&funcs.length>0&&!!state.context.functionPrimary;
  }
  document.getElementById('contextNextBtn').disabled=!ok;
}

function renderQuestion(){
  const q=questions[state.questionIndex];
  document.getElementById('questionStepLabel').textContent=`${state.questionIndex+1} / ${questions.length}`;
  document.getElementById('questionProgressBar').style.width=`${((state.questionIndex+1)/questions.length)*100}%`;
  document.getElementById('questionNumber').textContent=`Question ${state.questionIndex+1} sur ${questions.length}`;
  document.getElementById('questionText').textContent=q.text;
  const labels={1:'Pas du tout vrai',2:'Plutôt faux',3:'Partiellement vrai',4:'Plutôt vrai',5:'Tout à fait vrai'};
  document.getElementById('answerScale').innerHTML=[1,2,3,4,5].map(v=>`<button class="cc-scale-option ${state.answers[q.id]===v?'is-selected':''}" data-value="${v}"><span>${v}</span><small>${labels[v]}</small></button>`).join('');
  document.querySelectorAll('.cc-scale-option').forEach(b=>b.addEventListener('click',()=>{state.answers[q.id]=+b.dataset.value;renderQuestion();}));
  document.getElementById('questionNextBtn').disabled=!state.answers[q.id];
  document.getElementById('questionNextBtn').textContent=state.questionIndex===questions.length-1?'Voir mon résultat':'Continuer';
}

function computeScores(){
  const raw={}; Object.keys(dimensions).forEach(d=>raw[d]=[]);
  questions.forEach(q=>{let v=state.answers[q.id]; if(q.inv) v=6-v; raw[q.d].push(v);});
  const scores={}; Object.keys(raw).forEach(d=>{const total=raw[d].reduce((a,b)=>a+b,0); scores[d]=Math.round(((total-4)/16)*100);});
  return scores;
}
function targetKey(){
  const t=state.context.target||'';
  if(t.startsWith('Approfondir'))return'expertise'; if(t.startsWith('Évoluer vers le management'))return'management'; if(t.startsWith('Accéder à'))return'direction'; if(t.startsWith('Évoluer vers le commercial'))return'business'; if(t.startsWith('Évoluer vers une autre'))return'cross'; if(t.startsWith('Créer'))return'entrepreneur'; return null;
}
function careerFit(scores){
  const key=targetKey(); if(!key)return null; const w=weights[key]; let n=0,d=0; Object.keys(w).forEach(k=>{n+=scores[k]*w[k];d+=w[k];});return Math.round(n/d);
}
function avg(arr){return arr.reduce((a,b)=>a+b,0)/arr.length;}
function classify(scores){
  const vals=Object.values(scores); const overall=avg(vals);
  if(scores.business>=70&&scores.leadership>=70&&scores.strategy>=70&&scores.visibility>=60&&scores.career>=65&&overall>=70) return ['Future Executive','Ton profil est déjà fortement transversal. Ton enjeu semble moins être d’acquérir les fondamentaux que de transformer ces compétences en responsabilités, exposition stratégique et impact à plus grande échelle.'];
  const others=avg(Object.entries(scores).filter(([k])=>k!=='visibility').map(([,v])=>v));
  if(others>=60&&scores.visibility<=others-15) return ['Invisible Performer','Tes compétences semblent globalement solides, mais leur visibilité est sensiblement en retrait. Ton prochain levier pourrait être de mieux faire reconnaître ce que tu sais déjà faire.'];
  const bcs=avg([scores.business,scores.customer,scores.strategy]);
  if(scores.technical>=75&&scores.technical>=bcs+15) return ['Technical Expert','Ton capital technique constitue clairement ton principal avantage. Ton prochain saut dépendra probablement davantage de la manière dont tu connectes cette expertise au business, à l’influence ou à ton objectif de carrière.'];
  const ranked=Object.values(scores).sort((a,b)=>b-a); const leadTop2=scores.leadership>=ranked[1];
  if(scores.leadership>=70&&leadTop2&&Math.min(scores.business,scores.strategy,scores.visibility)<65) return ['Emerging Leader','Tu disposes déjà de bases solides en leadership. Ton prochain niveau dépendra surtout de la consolidation de certaines dimensions complémentaires comme la stratégie, le business ou la visibilité.'];
  if(scores.technical>=65&&scores.business>=65&&scores.customer>=65&&scores.leadership>=60&&Math.min(...vals)>=45) return ['Tech-to-Business Professional','Ton profil est relativement équilibré entre expertise technique, compréhension business, client et capacité d’influence. Tu as déjà dépassé une logique exclusivement technique.'];
  if(scores.career<55||vals.filter(v=>v<50).length>=3) return ['Career Explorer','Ton profil montre plusieurs pistes de développement ou une trajectoire encore en construction. L’enjeu principal est probablement de clarifier où tu veux aller et quelles dimensions développer en priorité.'];
  return ['Balanced Professional','Ton profil est relativement équilibré, sans dominante unique. Tes priorités de développement dépendront surtout de l’objectif professionnel que tu vises.'];
}
function priorityGaps(scores){
  const key=targetKey();
  if(!key)return Object.entries(scores).sort((a,b)=>a[1]-b[1]).slice(0,2).map(([k])=>k);
  const w=weights[key]; return Object.keys(scores).map(k=>[k,w[k]*(100-scores[k])]).sort((a,b)=>b[1]-a[1]).slice(0,2).map(([k])=>k);
}

let radarChart = null;
function renderRadar(scores){
  const canvas=document.getElementById('careerRadar');
  if(!canvas || typeof Chart==='undefined') return;
  if(radarChart) radarChart.destroy();
  const labels=['Technical','Business','Customer','Leadership','Visibility','Strategy','Career'];
  const data=[scores.technical,scores.business,scores.customer,scores.leadership,scores.visibility,scores.strategy,scores.career];
  radarChart=new Chart(canvas,{
    type:'radar',
    data:{
      labels,
      datasets:[{
        label:'Ton profil',
        data,
        borderColor:'#b88a2a',
        backgroundColor:'rgba(184,138,42,.16)',
        pointBackgroundColor:'#111827',
        pointBorderColor:'#ffffff',
        pointHoverBackgroundColor:'#b88a2a',
        pointHoverBorderColor:'#111827',
        borderWidth:2,
        pointRadius:3.5,
        pointHoverRadius:5
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      animation:{duration:550},
      plugins:{
        legend:{display:false},
        tooltip:{
          callbacks:{
            title:(items)=>items[0]?.label||'',
            label:(item)=>`${item.raw}/100`
          }
        }
      },
      scales:{
        r:{
          min:0,
          max:100,
          beginAtZero:true,
          ticks:{display:false,stepSize:20},
          grid:{color:'rgba(17,24,39,.12)'},
          angleLines:{color:'rgba(17,24,39,.12)'},
          pointLabels:{
            color:'#111827',
            font:{size:12,weight:'700'}
          }
        }
      }
    }
  });
}

function renderResult(){
  const scores=computeScores(); const fit=careerFit(scores); const [profile,summary]=classify(scores);
  document.getElementById('profileName').textContent=profile; document.getElementById('profileSummary').textContent=summary;
  document.getElementById('careerFitScore').textContent=fit===null?'—':`${fit}/100`; document.getElementById('careerFitLabel').textContent=fit===null?'objectif encore non modélisé':'alignement indicatif';
  document.getElementById('dimensionScores').innerHTML=Object.entries(dimensions).map(([k,d])=>`<div class="cc-dimension-row"><div><span class="cc-dimension-name">${d.name}</span><span class="cc-dimension-sub">${d.fr}</span></div><span class="cc-score">${scores[k]}</span><div class="cc-bar"><div style="width:${scores[k]}%"></div></div></div>`).join('');
  const strengths=Object.entries(scores).sort((a,b)=>b[1]-a[1]).slice(0,2).map(([k])=>dimensions[k].name);
  const priorities=priorityGaps(scores).map(k=>dimensions[k].name);
  document.getElementById('topStrengths').textContent=strengths.join(' + '); document.getElementById('topPriorities').textContent=priorities.join(' + ');
  document.getElementById('declaredBarrier').textContent=state.context.barrierPrimary||'Non renseigné';
  renderRadar(scores);
  state.result={scores,fit,profile,priorities};
}

document.getElementById('startBtn').addEventListener('click',()=>{showScreen('contextScreen');renderContext();});
document.getElementById('contextBackBtn').addEventListener('click',()=>{if(state.contextIndex>0){state.contextIndex--;renderContext();}});
document.getElementById('contextNextBtn').addEventListener('click',()=>{if(state.contextIndex<contextSteps.length-1){state.contextIndex++;renderContext();}else{showScreen('questionScreen');renderQuestion();}});
document.getElementById('questionBackBtn').addEventListener('click',()=>{if(state.questionIndex>0){state.questionIndex--;renderQuestion();}else{showScreen('contextScreen');state.contextIndex=contextSteps.length-1;renderContext();}});
document.getElementById('questionNextBtn').addEventListener('click',()=>{if(!state.answers[questions[state.questionIndex].id])return;if(state.questionIndex<questions.length-1){state.questionIndex++;renderQuestion();}else{renderResult();showScreen('resultScreen');}});
document.getElementById('restartBtn').addEventListener('click',()=>{if(radarChart){radarChart.destroy();radarChart=null;}state.context={};state.answers={};state.contextIndex=0;state.questionIndex=0;delete state.result;showScreen('introScreen');});
