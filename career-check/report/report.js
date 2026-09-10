const dimensions = {
  technical: { name: 'Technical Capital', fr: 'Capital technique' },
  business: { name: 'Business Acumen', fr: 'Compréhension business' },
  customer: { name: 'Customer & Value', fr: 'Client & création de valeur' },
  leadership: { name: 'Leadership & Influence', fr: 'Leadership & influence' },
  visibility: { name: 'Visibility & Network', fr: 'Visibilité & réseau' },
  strategy: { name: 'Strategic Thinking', fr: 'Vision stratégique' },
  career: { name: 'Career & Market Value', fr: 'Pilotage de carrière & valeur marché' }
};

const levelLabels = {
  develop: 'À développer',
  building: 'En construction',
  solid: 'Solide',
  strong: 'Fort'
};

function getLevel(score){
  if(score < 40) return 'develop';
  if(score < 60) return 'building';
  if(score < 75) return 'solid';
  return 'strong';
}

const dimensionLibrary = {
  technical: {
    definition:"Mesure à quel point ton expertise technique constitue aujourd’hui un actif professionnel différenciant : profondeur d’expertise, reconnaissance, résolution de problèmes complexes et capacité à rendre la technique compréhensible et utile.",
    texts:{
      develop:"Ton capital technique semble encore en construction. Tu ne sembles pas encore disposer d’une expertise suffisamment reconnue ou différenciante pour qu’elle constitue un levier fort dans ta trajectoire professionnelle.",
      building:"Tu disposes déjà de compétences techniques utiles, mais elles ne semblent pas encore constituer un avantage professionnel clairement différenciant ou reconnu.",
      solid:"Ton expertise technique constitue déjà une base professionnelle solide. Tu sembles capable de traiter des sujets complexes et de créer de la valeur grâce à tes compétences.",
      strong:"Ton capital technique constitue clairement l’un de tes principaux actifs professionnels. Tu sembles disposer d’une expertise reconnue, capable de résoudre des problèmes complexes et de créer de la crédibilité auprès de ton environnement."
    },
    strength:"Ton expertise technique constitue aujourd’hui un véritable actif professionnel. Tu disposes d’une base solide sur laquelle construire davantage de responsabilités et d’impact.",
    priority:"Renforcer ton capital technique pourrait aujourd’hui constituer une priorité. Consolider une expertise différenciante peut renforcer ta crédibilité et ta capacité d’impact.",
    actions:["Identifie 1 ou 2 domaines dans lesquels tu veux devenir une véritable référence.","Cherche des sujets plus complexes ou visibles qui te permettent de démontrer ta valeur.","Travaille ta capacité à expliquer simplement des sujets techniques à des non-spécialistes."]
  },
  business: {
    definition:"Mesure à quel point tu comprends les mécanismes économiques et business qui entourent ton activité : revenus, coûts, marges, marché, concurrence et impact économique des décisions.",
    texts:{
      develop:"Ta compréhension du business semble aujourd’hui limitée. Tu peux être performant dans ton rôle tout en restant relativement éloigné des mécanismes économiques qui déterminent pourquoi certaines décisions sont prises.",
      building:"Tu commences à intégrer les dimensions économiques et business dans ta manière de travailler, mais cette compréhension reste encore partielle ou peu systématique.",
      solid:"Tu disposes déjà d’une bonne compréhension des enjeux économiques et business de ton activité. Tu sembles capable de regarder au-delà de l’exécution technique et de relier tes décisions à la performance de l’entreprise.",
      strong:"Tu sembles avoir développé une lecture business solide de ton activité. Tu comprends les principaux leviers économiques et tu es capable d’intégrer la valeur, les coûts, le marché et la rentabilité dans tes décisions."
    },
    strength:"Ta compréhension du business constitue déjà un atout important. Tu sembles capable de relier ton activité aux enjeux économiques et aux priorités de l’entreprise.",
    priority:"Développer davantage ta compréhension du business pourrait aujourd’hui accélérer ta progression. Plus tu vises des responsabilités larges, plus il devient important de comprendre ce qui crée réellement de la valeur pour l’entreprise.",
    actions:["Relie tes décisions à des indicateurs concrets : coût, revenu, marge, délai, risque ou satisfaction client.","Approfondis ta compréhension du positionnement de ton entreprise et de ses concurrents.","Échange davantage avec les fonctions commerciales, marketing, finance ou achats."]
  },
  customer: {
    definition:"Mesure ta capacité à comprendre les besoins réels d’un client ou utilisateur, à distinguer performance technique et valeur créée, et à traduire une solution en bénéfices concrets.",
    texts:{
      develop:"Tu sembles encore relativement éloigné des besoins clients ou utilisateurs. Ton approche peut rester centrée sur la solution ou la technologie sans toujours la relier à la valeur réellement perçue.",
      building:"Tu commences à intégrer la perspective client dans ta manière de travailler, mais tu ne sembles pas encore l’utiliser de façon systématique pour orienter tes décisions ou communiquer la valeur d’une solution.",
      solid:"Tu sembles avoir une bonne compréhension des besoins clients et de la manière dont une solution crée de la valeur. Tu es capable de dépasser une lecture purement technique et de considérer l’impact concret de ton travail.",
      strong:"La compréhension du client et de la création de valeur semble constituer l’un de tes principaux atouts. Tu es capable de relier une solution technique à des bénéfices concrets et aux facteurs qui influencent une décision client."
    },
    strength:"Ta capacité à comprendre le client et à traduire une solution en valeur constitue un avantage important, particulièrement utile pour des responsabilités business, produit, innovation ou direction.",
    priority:"Développer davantage ta compréhension du client pourrait fortement augmenter ton impact. Il devient important de savoir non seulement comment construire une bonne solution, mais aussi pourquoi elle mérite d’être choisie.",
    actions:["Pars du problème client avant de parler de solution.","Traduis les performances techniques en impacts concrets : coût, temps, risque, qualité ou revenu.","Cherche davantage d’exposition aux clients, utilisateurs ou équipes commerciales."]
  },
  leadership: {
    definition:"Mesure ta capacité à faire avancer des sujets, mobiliser d’autres personnes, défendre des décisions et exercer de l’influence, avec ou sans autorité hiérarchique.",
    texts:{
      develop:"Tu sembles encore relativement dépendant de ton rôle formel ou de ton manager pour faire avancer certains sujets. Ta capacité à mobiliser, convaincre ou influencer au-delà de ton périmètre reste probablement à renforcer.",
      building:"Tu montres déjà des signes de leadership, mais cette capacité semble encore irrégulière selon les situations, les interlocuteurs ou le niveau d’enjeu.",
      solid:"Tu disposes déjà d’une bonne capacité à faire avancer des sujets et à influencer ton environnement. Tu sembles à l’aise dans des contextes transverses et capable de défendre tes recommandations.",
      strong:"Le leadership et l’influence constituent clairement l’un de tes points forts. Tu sembles capable de faire avancer des sujets complexes, mobiliser différents interlocuteurs et défendre des choix avec crédibilité."
    },
    strength:"Ta capacité à faire avancer les autres et à créer de l’adhésion constitue un atout important pour évoluer vers davantage de management, de direction ou de leadership transverse.",
    priority:"Renforcer ta capacité d’influence pourrait avoir un impact direct sur ta progression. À mesure que les responsabilités augmentent, la valeur vient aussi de ta capacité à faire avancer les autres.",
    actions:["Prends en charge des sujets transverses impliquant plusieurs équipes.","Structure tes recommandations pour les rendre claires et faciles à défendre.","Travaille ta capacité à obtenir l’adhésion sans t’appuyer sur l’autorité hiérarchique."]
  },
  visibility: {
    definition:"Mesure à quel point ton travail, tes résultats et ta valeur sont visibles au-delà de ton équipe immédiate, ainsi que ta capacité à construire des relations utiles à l’intérieur et à l’extérieur de ton organisation.",
    texts:{
      develop:"Tes compétences et tes résultats semblent aujourd’hui peu visibles au-delà de ton environnement direct. Tu peux être performant sans être suffisamment identifié lorsque des opportunités apparaissent.",
      building:"Tu disposes déjà d’une certaine visibilité et de quelques relations utiles, mais elles restent probablement concentrées autour de ton équipe ou de ton environnement habituel.",
      solid:"Ton travail bénéficie déjà d’une bonne visibilité et tu sembles avoir développé un réseau professionnel utile. Plusieurs personnes au-delà de ton équipe connaissent probablement ta contribution.",
      strong:"Ta visibilité et ton réseau constituent clairement un actif professionnel. Ton travail semble connu au-delà de ton périmètre direct et tu disposes de relations qui peuvent faciliter l’accès à des projets ou opportunités."
    },
    strength:"Ta visibilité et ton réseau constituent déjà un levier professionnel important. Tu sembles avoir réussi à faire reconnaître ta contribution au-delà de ton périmètre immédiat.",
    priority:"Tes compétences semblent peut-être aujourd’hui plus développées que la visibilité dont elles bénéficient. Renforcer ton exposition et ton réseau pourrait avoir davantage d’impact que l’acquisition de compétences supplémentaires.",
    actions:["Identifie les personnes qui devraient mieux connaître ton travail et ton impact.","Cherche des occasions de présenter tes résultats au-delà de ton équipe.","Entretiens ton réseau externe régulièrement, même sans recherche active de poste."]
  },
  strategy: {
    definition:"Mesure ta capacité à prendre de la hauteur, comprendre les priorités globales de l’organisation, anticiper les conséquences des décisions et arbitrer entre technologie, business, ressources et risques.",
    texts:{
      develop:"Tu sembles encore principalement concentré sur ton périmètre immédiat, avec une exposition limitée aux enjeux plus larges de l’entreprise ou aux décisions de moyen et long terme.",
      building:"Tu commences à prendre en compte les enjeux plus larges de ton organisation, mais ta lecture stratégique reste encore irrégulière ou dépendante du contexte.",
      solid:"Tu sembles déjà capable de prendre du recul, de comprendre les enjeux au-delà de ton périmètre et d’intégrer plusieurs dimensions dans tes recommandations.",
      strong:"La vision stratégique semble constituer l’un de tes atouts. Tu es capable de relier les décisions de court terme à des enjeux plus larges et d’intégrer plusieurs contraintes dans tes arbitrages."
    },
    strength:"Ta capacité à prendre de la hauteur et à relier les décisions à des enjeux plus larges constitue un atout important pour des responsabilités de direction, transformation ou pilotage stratégique.",
    priority:"Développer davantage ta vision stratégique pourrait aujourd’hui accélérer ta progression. Plus tu vises des responsabilités larges, plus il devient important de comprendre où aller, pourquoi, et avec quels arbitrages.",
    actions:["Cherche à comprendre les priorités stratégiques de ton entreprise au-delà de ton périmètre.","Analyse les décisions selon plusieurs angles : technologie, marché, coût, risque, ressources et timing.","Passe de l’analyse à la recommandation en formulant clairement options, compromis et impact attendu."]
  },
  career: {
    definition:"Mesure ta capacité à piloter activement ta trajectoire : clarté sur tes objectifs, connaissance de ta valeur sur le marché, capacité à te positionner et à expliquer ce qui te différencie.",
    texts:{
      develop:"Ta trajectoire professionnelle semble aujourd’hui peu structurée ou peu confrontée au marché. Tu peux avancer principalement en fonction des opportunités qui se présentent.",
      building:"Tu as déjà commencé à réfléchir à ta trajectoire et à ta valeur professionnelle, mais cette réflexion semble encore partielle ou peu structurée.",
      solid:"Tu sembles déjà piloter ta carrière de manière relativement active. Tu as une vision assez claire de tes prochaines étapes et une bonne compréhension de la manière dont ton profil peut être valorisé.",
      strong:"Tu sembles avoir une bonne maîtrise de ta trajectoire professionnelle et de ta valeur sur le marché. Tu sais ce que tu veux viser et comment te positionner."
    },
    strength:"Tu sembles déjà piloter activement ta trajectoire et comprendre la valeur de ton profil sur le marché. C’est un atout important pour prendre des décisions de carrière plus volontaires.",
    priority:"Mieux structurer ta trajectoire et confronter ton profil au marché pourrait aujourd’hui avoir un impact important. Une carrière progresse plus vite lorsqu’on sait clairement ce que l’on vise et comment ses compétences sont valorisées.",
    actions:["Clarifie le type de rôle ou de responsabilités que tu souhaites viser à moyen terme.","Confronte régulièrement ton profil à des offres, recruteurs ou professionnels de ton secteur.","Travaille une formulation simple de ta valeur professionnelle et de ce qui te différencie."]
  }
};

const profileGoalLibrary = {
  'Technical Expert':{
    base:"Ton expertise technique constitue clairement l’un de tes principaux actifs. Ton prochain saut dépendra probablement moins d’une nouvelle compétence technique que de ta capacité à élargir ton impact au-delà de ton domaine d’expertise.",
    expertise:"Ton profil est cohérent avec une trajectoire d’expert senior. Les leviers les plus utiles concernent surtout la visibilité, l’influence et la capacité à faire reconnaître ton expertise à un niveau plus large.",
    management:"Pour évoluer vers le management, ton enjeu sera surtout de compléter ta crédibilité technique par davantage de leadership, d’influence et de compréhension transverse.",
    direction:"Pour viser la direction, ta base technique est solide, mais Business Acumen, Strategic Thinking et Visibility deviennent beaucoup plus déterminants.",
    business:"Ta crédibilité technique peut devenir un avantage important, à condition de la convertir en compréhension client, proposition de valeur et impact business.",
    cross:"Ta technique peut constituer une base différenciante pour une mobilité vers le produit, le marketing, les achats, l’innovation ou d’autres fonctions, à condition de développer les compétences propres à cette fonction.",
    entrepreneur:"Ton expertise peut devenir une base forte pour entreprendre, mais elle devra être complétée par une compréhension du marché, du client, du business model et de la capacité à convaincre."
  },
  'Invisible Performer':{
    base:"Tes compétences semblent plus développées que la visibilité dont elles bénéficient. Ton prochain levier peut donc être moins l’acquisition de nouvelles compétences que la capacité à mieux faire reconnaître ton impact.",
    expertise:"Devenir expert senior suppose aussi d’être identifié comme référence au-delà de son équipe.",
    management:"Pour être considéré pour un rôle de management, il est important que plusieurs personnes puissent témoigner de ta capacité à prendre des responsabilités et à faire avancer les autres.",
    direction:"Une trajectoire de direction nécessite généralement une visibilité plus large et une exposition aux décideurs, en plus de la performance.",
    business:"Dans une trajectoire business, le réseau et l’exposition externe deviennent particulièrement importants.",
    cross:"Une mobilité transverse devient plus probable lorsque les équipes cibles connaissent déjà ta valeur et tes compétences transférables.",
    entrepreneur:"Un réseau plus développé peut faciliter l’accès aux clients, partenaires, associés et opportunités."
  },
  'Emerging Leader':{
    base:"Tu montres déjà une capacité réelle à influencer, mobiliser et faire avancer des sujets. Ton prochain enjeu est de transformer cette influence en capacité de pilotage plus large.",
    expertise:"Même dans une trajectoire d’expert, ta capacité à embarquer les autres peut te permettre de devenir référent ou leader technique.",
    management:"Ton profil est naturellement compatible avec une évolution vers le management. La priorité est de renforcer les dimensions encore moins développées, souvent business, stratégie ou visibilité.",
    direction:"Pour viser plus haut, ton leadership doit progressivement s’accompagner d’une lecture plus forte du business et de la stratégie.",
    business:"Ton influence est un atout important pour le business, notamment dans les environnements où il faut convaincre sans autorité hiérarchique.",
    cross:"Cette capacité transverse peut faciliter une mobilité vers produit, innovation, marketing ou opérations.",
    entrepreneur:"Le leadership est utile, mais il doit être complété par marché, client, stratégie et capacité à construire une offre."
  },
  'Tech-to-Business Professional':{
    base:"Ton profil est relativement équilibré entre expertise technique, compréhension business, client et influence. Tu as déjà dépassé une logique exclusivement technique.",
    expertise:"Tu peux devenir un expert particulièrement différenciant en conservant ta profondeur technique tout en comprenant les enjeux business et clients.",
    management:"Ton profil constitue une bonne base pour manager des équipes techniques dans un environnement orienté résultats et business.",
    direction:"Pour passer au niveau direction, Strategy, Leadership et Visibility deviennent souvent les dimensions décisives.",
    business:"Ton profil est particulièrement cohérent avec une trajectoire business ou commerciale dans un environnement technologique complexe.",
    cross:"Tu disposes d’une base favorable pour évoluer vers produit, innovation, marketing, achats ou d’autres fonctions transverses.",
    entrepreneur:"Ton équilibre Tech + Business est une base intéressante. L’enjeu principal devient la validation marché et l’exécution."
  },
  'Future Executive':{
    base:"Ton profil est transversal et déjà solide sur plusieurs dimensions clés. Ton enjeu semble désormais moins être l’acquisition des fondamentaux que leur mise en pratique à une échelle plus large.",
    expertise:"Si tu choisis de rester dans l’expertise, ton profil peut t’orienter vers des rôles de référent, chief engineer ou leadership technique.",
    management:"Tu sembles potentiellement prêt pour des responsabilités managériales significatives, sous réserve d’une expérience réelle de gestion d’équipe et d’arbitrage.",
    direction:"Ton profil est cohérent avec une trajectoire de direction. Le principal enjeu devient désormais l’accès à des responsabilités réelles : périmètre, budget, équipe, stratégie et résultats.",
    business:"Tu peux potentiellement viser des responsabilités business plus larges si tu consolides encore ton exposition au marché et aux résultats commerciaux.",
    cross:"Ton profil transversal peut faciliter des mobilités vers des fonctions à fort impact, notamment produit, innovation, transformation ou stratégie.",
    entrepreneur:"Ton profil est potentiellement favorable, mais le véritable test devient le marché : capacité à créer une offre, gagner des clients et exécuter."
  },
  'Career Explorer':{
    base:"Ta priorité semble être de clarifier ta trajectoire avant de chercher à tout développer en même temps.",
    expertise:"Si l’expertise t’attire, commence par identifier le domaine dans lequel tu veux réellement devenir une référence.",
    management:"Avant de viser le management, vérifie que tu souhaites réellement développer des personnes et pas seulement obtenir davantage de responsabilités.",
    direction:"Une trajectoire de direction nécessite d’abord de clarifier les expériences et responsabilités que tu veux construire progressivement.",
    business:"Si tu envisages le business, cherche rapidement de l’exposition client et marché pour tester ton intérêt réel.",
    cross:"Les mobilités transverses sont justement une bonne manière d’explorer des trajectoires alternatives.",
    entrepreneur:"Avant de créer une structure, teste d’abord le problème, le marché et ton envie réelle d’entreprendre."
  },
  'Balanced Professional':{
    base:"Ton profil est relativement équilibré, sans dominante extrêmement forte ni faiblesse majeure. Cela te donne de la flexibilité, mais peut aussi rendre moins évident le prochain levier à privilégier.",
    expertise:"Ton enjeu est d’identifier si tu souhaites approfondir une expertise précise ou conserver un profil plus transverse.",
    management:"Ta base est équilibrée ; le leadership et la capacité à prendre des responsabilités doivent devenir les critères prioritaires.",
    direction:"Pour viser la direction, Business, Strategy, Leadership et Visibility doivent progressivement prendre davantage de poids.",
    business:"Le passage vers le business est possible, mais il faudra renforcer particulièrement Customer & Value et Business Acumen.",
    cross:"Ton équilibre facilite potentiellement les mobilités transverses ; la question clé devient la fonction qui correspond réellement à tes motivations.",
    entrepreneur:"Ton profil polyvalent est utile, mais entreprendre demandera de transformer cette polyvalence en proposition de valeur et en exécution."
  }
};

const barrierDimensionMap = {
  'Mes compétences techniques':'technical',
  'Ma compréhension du business':'business',
  'Mon leadership / ma capacité à influencer':'leadership',
  'Ma visibilité dans mon entreprise':'visibility',
  'Mon réseau professionnel':'visibility',
  'Ma connaissance de ma valeur sur le marché':'career',
  'Je ne sais pas clairement quelle direction prendre':'career'
};

const REPORT_API_URL = 'https://yfnkwraptkcqtrrwhhsv.supabase.co/functions/v1/get-career-report';

const GOAL_KEY_MAP = [
  ['Approfondir','expertise'],
  ['Évoluer vers le management','management'],
  ['Accéder à','direction'],
  ['Évoluer vers le commercial','business'],
  ['Évoluer vers une autre','cross'],
  ['Créer','entrepreneur']
];

function showState(id){
  document.querySelectorAll('.report-state').forEach(el=>el.classList.remove('is-active'));
  document.getElementById(id).classList.add('is-active');
}

function escapeHtml(value){
  return String(value ?? '')
    .replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')
    .replaceAll('"','&quot;').replaceAll("'",'&#039;');
}

function normalizeDimensionKey(value){
  if(!value) return null;
  if(dimensions[value]) return value;
  const s=String(value).trim().toLowerCase();
  for(const [k,d] of Object.entries(dimensions)){
    if(d.name.toLowerCase()===s || d.fr.toLowerCase()===s) return k;
  }
  return null;
}

function goalKey(careerGoal){
  const t=String(careerGoal||'');
  const hit=GOAL_KEY_MAP.find(([prefix])=>t.startsWith(prefix));
  return hit?hit[1]:null;
}

function dimensionName(value){
  const k=normalizeDimensionKey(value);
  return k?dimensions[k].name:(value||'—');
}

function renderRadar(host,scores){
  const items=[
    ['Technical',scores.technical],['Business',scores.business],['Customer',scores.customer],
    ['Leadership',scores.leadership],['Visibility',scores.visibility],['Strategy',scores.strategy],['Career',scores.career]
  ];
  const W=620,H=430,cx=310,cy=210,R=145,n=items.length;
  const pt=(r,i)=>{const a=(-Math.PI/2)+(2*Math.PI*i/n);return [cx+r*Math.cos(a),cy+r*Math.sin(a)]};
  const rings=[20,40,60,80,100].map(p=>{const pts=items.map((_,i)=>pt(R*p/100,i).map(v=>v.toFixed(1)).join(',')).join(' ');return `<polygon points="${pts}" fill="none" stroke="rgba(17,24,39,.12)" stroke-width="1"/>`;}).join('');
  const axes=items.map((_,i)=>{const [x,y]=pt(R,i);return `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="rgba(17,24,39,.12)" stroke-width="1"/>`;}).join('');
  const shape=items.map(([_,v],i)=>pt(R*(Number(v)||0)/100,i).map(v=>v.toFixed(1)).join(',')).join(' ');
  const points=items.map(([_,v],i)=>{const [x,y]=pt(R*(Number(v)||0)/100,i);return `<circle cx="${x}" cy="${y}" r="4" fill="#111827" stroke="#fff" stroke-width="2"/>`;}).join('');
  const labels=items.map(([label,v],i)=>{const [x0,y0]=pt(R+34,i);let anchor='middle';if(x0<cx-20)anchor='end';if(x0>cx+20)anchor='start';return `<text x="${x0}" y="${y0}" text-anchor="${anchor}" dominant-baseline="middle" font-size="12" font-weight="700" fill="#111827">${label}</text><text x="${x0}" y="${y0+15}" text-anchor="${anchor}" dominant-baseline="middle" font-size="11" font-weight="700" fill="#8a6a1f">${v}/100</text>`;}).join('');
  host.innerHTML=`<svg viewBox="0 0 ${W} ${H}" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${rings}${axes}<polygon points="${shape}" fill="rgba(184,138,42,.16)" stroke="#b88a2a" stroke-width="3"/>${points}${labels}</svg>`;
}

function fitLabel(score){
  const n=Number(score);
  if(!Number.isFinite(n)) return 'Non calculé';
  if(n < 50) return 'Écart important';
  if(n < 65) return 'En transition';
  if(n < 80) return 'Bon alignement';
  return 'Fort alignement';
}

function levelSentence(score){
  return levelLabels[getLevel(Number(score)||0)];
}

function perceptionText(report, primaryKey){
  const declared=report.main_barrier;
  if(!declared) return 'Tu n’as pas identifié de frein principal. Le Career Check te propose donc de partir du levier qui ressort le plus fortement de ton profil.';
  const mapped=barrierDimensionMap[declared];
  if(mapped && mapped===primaryKey) return `Ton intuition semble cohérente avec ton Career Check. Tu avais identifié « ${escapeHtml(declared)} » comme frein, et cette dimension apparaît effectivement parmi les principaux leviers à travailler. Tu as probablement déjà une bonne lecture de ta situation : l’enjeu est maintenant de transformer cette prise de conscience en actions concrètes.`;
  return `Tu avais identifié « ${escapeHtml(declared)} » comme principal obstacle. Le Career Check fait davantage ressortir ${dimensions[primaryKey]?.name || 'un autre levier'}. Cela ne signifie pas que ton ressenti est faux : il est possible que le meilleur retour sur effort ne soit simplement pas là où tu pensais.`;
}

function actionTitle(key,index){
  const titles={
    technical:['Renforce une expertise différenciante','Rends ton expertise plus visible'],
    business:['Traduis une décision en impact business','Expose-toi davantage aux fonctions business'],
    customer:['Pars du problème client','Traduis la technique en valeur'],
    leadership:['Prends le lead sur un sujet transverse','Structure une recommandation qui embarque'],
    visibility:['Rends un résultat visible au bon niveau','Élargis ton réseau utile'],
    strategy:['Construis plusieurs scénarios','Formule une recommandation stratégique'],
    career:['Clarifie ton prochain mouvement','Benchmarke ta valeur marché']
  };
  return (titles[key]||['Passe à l’action','Teste un nouveau comportement'])[index] || 'Passe à l’action';
}

function renderReport(report){
  const scores={
    technical:report.technical_score,business:report.business_score,customer:report.customer_score,
    leadership:report.leadership_score,visibility:report.visibility_score,strategy:report.strategy_score,career:report.career_score
  };
  const profile=report.profile || 'Profil T2BEYOND';
  const fit=report.career_fit;
  const strengthKeys=[normalizeDimensionKey(report.strength_1),normalizeDimensionKey(report.strength_2)].filter(Boolean);
  const priorityKeys=[normalizeDimensionKey(report.priority_1),normalizeDimensionKey(report.priority_2)].filter(Boolean);
  if(!strengthKeys.length) strengthKeys.push(...Object.entries(scores).sort((a,b)=>(b[1]||0)-(a[1]||0)).slice(0,2).map(([k])=>k));
  if(!priorityKeys.length) priorityKeys.push(...Object.entries(scores).sort((a,b)=>(a[1]||0)-(b[1]||0)).slice(0,2).map(([k])=>k));
  while(strengthKeys.length<2) strengthKeys.push(strengthKeys[0]||'technical');
  while(priorityKeys.length<2) priorityKeys.push(priorityKeys[0]||'career');

  const pLib=profileGoalLibrary[profile] || profileGoalLibrary['Balanced Professional'];
  const gKey=goalKey(report.career_goal);
  const goalText=gKey && pLib[gKey] ? pLib[gKey] : '';
  const date=report.created_at ? new Date(report.created_at).toLocaleDateString('fr-FR') : '';
  const fitBand=fitLabel(fit);

  const dimsHtml=Object.keys(dimensions).map(k=>{
    const score=Number(scores[k]??0); const level=getLevel(score);
    return `<section class="report-dimension"><div class="report-dimension-head"><div><h3>${dimensions[k].name}</h3><span>${dimensions[k].fr}</span></div><div class="report-score"><strong>${score}</strong><span>${levelLabels[level]}</span></div></div><p>${dimensionLibrary[k].texts[level]}</p></section>`;
  }).join('');

  const strengthHtml=strengthKeys.slice(0,2).map((k,i)=>`<section class="report-card report-strength"><span class="report-label">Force n°${i+1}</span><h3>${dimensions[k].name} · ${scores[k]}/100 · ${levelSentence(scores[k])}</h3><p>${dimensionLibrary[k].strength}</p><div class="mini-callout"><strong>Comment mieux exploiter cette force</strong><ul>${dimensionLibrary[k].actions.map(a=>`<li>${a}</li>`).join('')}</ul></div></section>`).join('');

  const priorityHtml=priorityKeys.slice(0,2).map((k,i)=>`<section class="report-card report-priority"><span class="report-label">Levier n°${i+1}</span><h3>${dimensions[k].name} · ${scores[k]}/100 · ${levelSentence(scores[k])}</h3><p>${dimensionLibrary[k].priority}</p><div class="priority-objective"><strong>Objectif :</strong> ${i===0?'faire évoluer cette dimension pour augmenter directement ton impact sur la trajectoire visée.':'faire en sorte que ce progrès soit visible et durable dans ton environnement professionnel.'}</div></section>`).join('');

  const actionPairs=[
    {key:priorityKeys[0], action:dimensionLibrary[priorityKeys[0]].actions[0], title:actionTitle(priorityKeys[0],0)},
    {key:priorityKeys[0], action:dimensionLibrary[priorityKeys[0]].actions[1], title:actionTitle(priorityKeys[0],1)},
    {key:priorityKeys[1], action:dimensionLibrary[priorityKeys[1]].actions[0], title:actionTitle(priorityKeys[1],0)}
  ];
  const actionsHtml=actionPairs.map((a,i)=>`<li><div><strong>${a.title}</strong><p>${a.action}</p><span>Objectif : tester ce comportement dans les 30 prochains jours.</span></div></li>`).join('');

  const summaryText=`${pLib.base}${goalText?` ${goalText}`:''}`;
  const goalLabel=escapeHtml(report.career_goal || 'Non précisé');
  const p1=dimensions[priorityKeys[0]].name;
  const p2=dimensions[priorityKeys[1]].name;
  const s1=dimensions[strengthKeys[0]].name;
  const s2=dimensions[strengthKeys[1]].name;

  const html=`
    <header class="report-cover report-page-break">
      <p class="eyebrow">T2BEYOND CAREER CHECK</p>
      ${report.first_name?`<p class="report-person">Rapport personnel de <strong>${escapeHtml(report.first_name)}</strong></p>`:''}
      <h1>Ton profil : ${escapeHtml(profile)}</h1>
      <p class="report-goal">Objectif déclaré : <strong>${goalLabel}</strong></p>
      <div class="report-summary-grid">
        <div><span>Career Fit</span><strong>${fit==null?'—':fit+'/100'}</strong><small>${fitBand}</small></div>
        <div><span>Force principale</span><strong>${s1}</strong><small>Ton actif le plus solide</small></div>
        <div><span>Levier prioritaire</span><strong>${p1}</strong><small>Le meilleur retour sur effort</small></div>
      </div>
      <div class="executive-summary"><h2>Synthèse exécutive</h2><p>${summaryText}</p><p><strong>Ton prochain saut de carrière dépend probablement moins d’une amélioration uniforme de toutes tes compétences que de ta capacité à transformer tes forces actuelles en influence, stratégie et impact.</strong></p></div>
      <div class="key-takeaway"><span>À RETENIR</span><strong>Tu n’as pas besoin de tout améliorer. Tu dois surtout renforcer les dimensions qui comptent le plus pour ton prochain niveau de responsabilité.</strong></div>
      <div class="reflection-question"><span>QUESTION CLÉ</span><p>Si ton expertise actuelle n’était plus ton principal facteur différenciant demain, quelles autres compétences feraient que l’on te confierait davantage de responsabilités ?</p></div>
      <p class="report-version">Career Check V${escapeHtml(report.questionnaire_version || '1.0')}${date?' · '+date:''}</p>
    </header>

    <section class="report-section report-page-break"><p class="section-kicker">PAGE 2 · PROFIL</p><h2>Ton profil T2BEYOND en un coup d’œil</h2><p class="section-intro">Le radar montre comment tes compétences se répartissent aujourd’hui entre expertise technique, business, client, leadership, visibilité, stratégie et pilotage de carrière.</p><div id="radarHost" class="report-radar"></div><div class="report-dimensions">${dimsHtml}</div><div class="insight-box"><span>CE QUE MONTRE TON PROFIL</span><p>Ton enjeu n’est pas de “tout améliorer”. Il est de <strong>rééquilibrer ton profil vers les dimensions les plus décisives pour ton objectif</strong>.</p><p><strong>Écarts prioritaires :</strong> ${p1}, ${p2}${priorityKeys[2]?`, ${dimensions[priorityKeys[2]].name}`:''}.</p></div></section>

    <section class="report-section report-page-break"><p class="section-kicker">PAGE 3 · FORCES</p><h2>Tes forces à exploiter davantage</h2><p class="section-intro">Tes meilleurs scores ne sont pas seulement des points forts. Ce sont des actifs que tu peux utiliser pour accélérer ta progression.</p><div class="report-two-col">${strengthHtml}</div><div class="advantage-box"><span>TON AVANTAGE DIFFÉRENCIANT</span><p>La combinaison <strong>${s1} + ${s2}</strong> constitue la base de ton avantage professionnel. Le prochain enjeu est de mieux convertir ces forces en impact reconnu sur la trajectoire que tu vises.</p></div><blockquote>Ne cherche pas seulement à corriger tes faiblesses. Apprends à mieux exploiter tes forces.</blockquote></section>

    <section class="report-section report-page-break"><p class="section-kicker">PAGE 4 · CAREER FIT</p><h2>Ton alignement avec ton objectif</h2><p class="section-intro">Le Career Fit mesure à quel point ton profil actuel est aligné avec les dimensions les plus importantes pour l’évolution professionnelle que tu vises.</p>${fit!=null?`<div class="career-fit-hero"><span>CAREER FIT</span><strong>${fit}/100</strong><em>${fitBand}</em><div class="fit-meter"><i style="width:${Math.max(0,Math.min(100,Number(fit)||0))}%"></i></div><div class="fit-scale"><span>Écart important</span><span>En transition</span><span>Bon alignement</span><span>Fort alignement</span></div></div>`:''}<div class="method-box"><h3>Comment lire ce score</h3><p>Toutes les dimensions ne comptent pas de la même manière selon ton objectif. Le Career Fit ne mesure donc pas ton “niveau professionnel global”. Il mesure <strong>l’adéquation entre ton profil actuel et la trajectoire que tu vises</strong>.</p></div><div class="report-two-col"><div class="report-card"><span class="report-label">Ce qui joue en ta faveur</span><h3>${s1} & ${s2}</h3><p>Ces forces te donnent déjà une base solide pour progresser vers ton objectif.</p></div><div class="report-card report-priority"><span class="report-label">Ce qui limite encore l’alignement</span><h3>${p1} & ${p2}</h3><p>Ce sont les dimensions où un progrès ciblé peut produire le meilleur retour sur effort.</p></div></div><blockquote>Ton écart à l’objectif vient surtout d’un décalage entre tes forces actuelles et les compétences qui deviennent les plus décisives au niveau suivant.</blockquote></section>

    <section class="report-section report-page-break"><p class="section-kicker">PAGE 5 · PRIORITÉS</p><h2>Les deux leviers qui peuvent le plus accélérer ta progression</h2><p class="section-intro">Le Career Check ne cherche pas à tout améliorer en même temps. Il identifie les dimensions où un progrès ciblé peut avoir le plus d’impact sur ton objectif.</p><div class="report-two-col">${priorityHtml}</div><div class="dual-lever"><h3>Pourquoi ces deux leviers ensemble ?</h3><p><strong>${p1}</strong> augmente la qualité et la portée de ton impact. <strong>${p2}</strong> renforce la capacité à faire reconnaître et utiliser cette valeur dans ton environnement.</p><strong>L’un augmente ton impact. L’autre augmente sa portée.</strong></div><div class="ninety-days"><span>PRIORITÉ DES 90 PROCHAINS JOURS</span><p>Développer ${p1} tout en créant des occasions concrètes de démontrer cette progression au-delà de ton périmètre habituel.</p></div></section>

    <section class="report-section report-page-break"><p class="section-kicker">PAGE 6 · ACTION</p><h2>Ce que tu perçois vs ce que montre ton Career Check</h2><div class="report-perception"><div><span>Frein déclaré</span><strong>${escapeHtml(report.main_barrier || 'Non renseigné')}</strong></div><div><span>Levier principal</span><strong>${p1}</strong></div></div><p>${perceptionText(report,priorityKeys[0])}</p><h2 class="subsection-title">Ton plan d’action pour les 30 prochains jours</h2><p class="section-intro">L’objectif n’est pas de tout changer. Il est de tester trois comportements concrets qui peuvent faire évoluer ton profil.</p><ol class="report-actions">${actionsHtml}</ol><div class="commitment-box"><span>DANS 30 JOURS, POSE-TOI CETTE QUESTION</span><p>Est-ce que davantage de personnes comprennent aujourd’hui la valeur que je crée et la direction dans laquelle je peux contribuer ?</p></div><blockquote>Ton Career Check n’est pas une fin. C’est un point de départ.</blockquote></section>

    <section class="report-section report-final"><p class="section-kicker">PAGE 7 · CAREER REVIEW</p><h2>Tu veux transformer ce diagnostic en plan de progression concret ?</h2><p class="section-intro">Le Career Check t’aide à identifier tes forces et tes leviers prioritaires. La Career Review va plus loin : elle relie ton profil à ta situation réelle, ton objectif, ton marché et tes prochaines décisions de carrière.</p><div class="review-deliverables"><div>Analyse approfondie de ton profil et de ton objectif</div><div>2 à 3 scénarios de progression réalistes</div><div>Clarification de ton positionnement professionnel</div><div>Lecture des écarts par rapport au rôle visé</div><div>Plan d’action personnalisé sur 90 jours</div><div>Recommandations sur visibilité, leadership, business ou repositionnement</div></div><div class="report-review"><span>T2BEYOND CAREER REVIEW</span><h3>Passer de “je sais où sont mes écarts” à “je sais quoi travailler, dans quel ordre et comment le traduire dans ma carrière”.</h3><p>Pour les ingénieurs, experts et managers techniques qui veulent évoluer vers davantage de responsabilités, une fonction business, une direction ou l’entrepreneuriat.</p><a class="review-button" href="mailto:career-check@t2beyond.com?subject=${encodeURIComponent('T2BEYOND Career Review')}">Réserver ma Career Review</a><small>Entretien individuel · analyse personnalisée · plan d’action concret</small></div><p class="report-disclaimer">La Career Review n’est pas une évaluation RH et ne donne pas de “verdict”. Le T2BEYOND Career Check est un outil de réflexion et de développement professionnel basé sur une auto-évaluation. Il ne constitue ni une évaluation psychométrique, ni une prédiction de carrière, ni une décision de recrutement.</p></section>`;

  const host=document.getElementById('reportContent');
  host.innerHTML=html;
  renderRadar(document.getElementById('radarHost'),scores);
  document.title=`${profile} — T2BEYOND Career Check`;
}

async function loadReport(){
  const token=new URLSearchParams(window.location.search).get('token');
  if(!token){
    document.getElementById('errorMessage').textContent='Le lien ne contient pas de token de rapport.';
    showState('errorState'); return;
  }
  try{
    const controller=new AbortController();
    const timeout=setTimeout(()=>controller.abort(),12000);
    const response=await fetch(REPORT_API_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({token}),signal:controller.signal});
    clearTimeout(timeout);
    const data=await response.json().catch(()=>({}));
    if(!response.ok || !data.success || !data.report) throw new Error(data.error || `Erreur ${response.status}`);
    renderReport(data.report);
    showState('reportState');
  }catch(error){
    console.error('Report load failed',error);
    document.getElementById('errorMessage').textContent=error?.name==='AbortError'?'La connexion prend trop de temps. Réessaie dans quelques instants.':'Le lien est invalide ou le rapport n’est pas disponible.';
    showState('errorState');
  }
}

document.getElementById('printReportBtn').addEventListener('click',()=>window.print());
loadReport();
