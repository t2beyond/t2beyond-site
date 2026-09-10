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


const questionnaireVersion = '1.0';
const SUPABASE_FUNCTION_URL = 'https://yfnkwraptkcqtrrwhhsv.supabase.co/functions/v1/submit-career-check';
const CAREER_REVIEW_API_URL = 'https://yfnkwraptkcqtrrwhhsv.supabase.co/functions/v1/submit-career-review';

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

const state = { context:{}, answers:{}, contextIndex:0, questionIndex:0, lead:{}, submissionId:null, reportToken:null };
const screens = ['introScreen','contextScreen','questionScreen','leadScreen','resultScreen','reportScreen'];
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
function renderRadar(scores){
  const host=document.getElementById('careerRadar');
  if(!host) return;
  const items=[
    ['Technical',scores.technical],['Business',scores.business],['Customer',scores.customer],
    ['Leadership',scores.leadership],['Visibility',scores.visibility],['Strategy',scores.strategy],['Career',scores.career]
  ];
  const W=620,H=430,cx=310,cy=210,R=145,n=items.length;
  const pt=(r,i)=>{const a=(-Math.PI/2)+(2*Math.PI*i/n);return [cx+r*Math.cos(a),cy+r*Math.sin(a)]};
  const rings=[20,40,60,80,100].map(p=>{
    const pts=items.map((_,i)=>pt(R*p/100,i).map(v=>v.toFixed(1)).join(',')).join(' ');
    return `<polygon points="${pts}" fill="none" stroke="rgba(17,24,39,.12)" stroke-width="1"/>`;
  }).join('');
  const axes=items.map((_,i)=>{const [x,y]=pt(R,i);return `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="rgba(17,24,39,.12)" stroke-width="1"/>`}).join('');
  const shape=items.map(([_,v],i)=>pt(R*v/100,i).map(v=>v.toFixed(1)).join(',')).join(' ');
  const points=items.map(([_,v],i)=>{const [x,y]=pt(R*v/100,i);return `<circle cx="${x}" cy="${y}" r="4" fill="#111827" stroke="#fff" stroke-width="2"/>`}).join('');
  const labels=items.map(([label,v],i)=>{
    const [x0,y0]=pt(R+34,i); let anchor='middle'; if(x0<cx-20) anchor='end'; if(x0>cx+20) anchor='start';
    return `<text x="${x0}" y="${y0}" text-anchor="${anchor}" dominant-baseline="middle" font-size="12" font-weight="700" fill="#111827">${label}</text><text x="${x0}" y="${y0+15}" text-anchor="${anchor}" dominant-baseline="middle" font-size="11" font-weight="700" fill="#8a6a1f">${v}/100</text>`;
  }).join('');
  host.innerHTML=`<svg viewBox="0 0 ${W} ${H}" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${rings}${axes}<polygon points="${shape}" fill="rgba(184,138,42,.16)" stroke="#b88a2a" stroke-width="3"/>${points}${labels}</svg>`;
}

function weightedStrengths(scores){
  const key=targetKey();
  const w=key?weights[key]:Object.fromEntries(Object.keys(scores).map(k=>[k,3]));
  return Object.keys(scores)
    .map(k=>[k, scores[k]*(0.5+w[k]/10)])
    .sort((a,b)=>b[1]-a[1])
    .slice(0,2)
    .map(([k])=>k);
}

function goalLabel(){
  return state.context.target || 'Objectif non précisé';
}

function perceptionText(primaryPriority){
  const declared=state.context.barrierPrimary;
  if(!declared) return 'Aucun frein principal n’a été renseigné.';
  const mapped=barrierDimensionMap[declared];
  if(mapped && mapped===primaryPriority){
    return `Ton intuition semble cohérente avec ton Career Check : « ${declared} » correspond directement à l’un des principaux leviers qui ressortent de tes réponses.`;
  }
  return `Tu identifies principalement « ${declared} ». Le Career Check attire davantage l’attention sur ${dimensions[primaryPriority].name}. Ces deux constats ne sont pas forcément contradictoires : ton intuition décrit ton contexte, tandis que le Career Check met en évidence un levier de développement complémentaire à explorer.`;
}

function buildActionPlan(priorities){
  const first=dimensionLibrary[priorities[0]].actions.slice(0,2);
  const second=dimensionLibrary[priorities[1]].actions.slice(0,1);
  return [...first,...second];
}

function escapeHtml(value){
  return String(value ?? '')
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('\"','&quot;')
    .replaceAll("'",'&#039;');
}

function renderReport(){
  if(!state.result) return;
  const {scores,fit,profile,priorities,strengths}=state.result;
  const goalKey=targetKey();
  const pLib=profileGoalLibrary[profile]||profileGoalLibrary['Balanced Professional'];
  const goalText=goalKey&&pLib[goalKey]?pLib[goalKey]:'';
  const actions=buildActionPlan(priorities);
  const dimsHtml=Object.keys(dimensions).map(k=>{
    const level=getLevel(scores[k]);
    return `<section class="report-dimension"><div class="report-dimension-head"><div><h3>${dimensions[k].name}</h3><span>${dimensions[k].fr}</span></div><div class="report-score"><strong>${scores[k]}</strong><span>${levelLabels[level]}</span></div></div><p class="report-definition">${dimensionLibrary[k].definition}</p><p>${dimensionLibrary[k].texts[level]}</p></section>`;
  }).join('');
  const strengthHtml=strengths.map((k,i)=>`<section class="report-card"><span class="report-label">Force n°${i+1}</span><h3>${dimensions[k].name} · ${scores[k]}/100</h3><p>${dimensionLibrary[k].strength}</p></section>`).join('');
  const priorityHtml=priorities.map((k,i)=>`<section class="report-card report-priority"><span class="report-label">Priorité n°${i+1}</span><h3>${dimensions[k].name} · ${scores[k]}/100</h3><p>${dimensionLibrary[k].priority}</p><ul>${dimensionLibrary[k].actions.slice(0,2).map(a=>`<li>${a}</li>`).join('')}</ul></section>`).join('');
  const radarSvg=document.getElementById('careerRadar')?.innerHTML||'';
  document.getElementById('autoReport').innerHTML=`
    <header class="report-cover">
      <p class="eyebrow">T2BEYOND CAREER CHECK</p>
      ${state.lead.firstName?`<p class="report-person">Rapport personnel de <strong>${state.lead.firstName}</strong></p>`:''}
      <h1>${profile}</h1>
      <p class="report-goal">Objectif déclaré : <strong>${goalLabel()}</strong></p>
      <div class="report-summary-grid">
        <div><span>Career Fit</span><strong>${fit===null?'—':fit+'/100'}</strong></div>
        <div><span>Force principale</span><strong>${dimensions[strengths[0]].name}</strong></div>
        <div><span>Levier prioritaire</span><strong>${dimensions[priorities[0]].name}</strong></div>
      </div>
      <div class="report-intro"><p>${pLib.base}</p>${goalText?`<p>${goalText}</p>`:''}</div>
      <p class="report-version">Career Check V${questionnaireVersion}</p>
    </header>

    <section class="report-section">
      <h2>1. Ton profil à 7 dimensions</h2>
      <div class="report-radar">${radarSvg}</div>
      <div class="report-dimensions">${dimsHtml}</div>
    </section>

    <section class="report-section">
      <h2>2. Tes principaux atouts</h2>
      <div class="report-two-col">${strengthHtml}</div>
    </section>

    <section class="report-section">
      <h2>3. Ton profil face à ton objectif</h2>
      <p>${goalText || 'Ton objectif n’est pas encore modélisé dans le Career Fit. Le rapport se concentre donc sur la forme de ton profil et tes principaux écarts.'}</p>
      ${fit!==null?`<div class="report-fit-line"><span>Alignement indicatif</span><strong>${fit}/100</strong></div>`:''}
      <p>Les principaux leviers calculés pour ton objectif sont <strong>${dimensions[priorities[0]].name}</strong> et <strong>${dimensions[priorities[1]].name}</strong>.</p>
    </section>

    <section class="report-section">
      <h2>4. Tes deux leviers prioritaires</h2>
      <div class="report-two-col">${priorityHtml}</div>
    </section>

    <section class="report-section">
      <h2>5. Ta perception vs ton Career Check</h2>
      <div class="report-perception"><div><span>Frein déclaré</span><strong>${state.context.barrierPrimary||'Non renseigné'}</strong></div><div><span>Levier principal</span><strong>${dimensions[priorities[0]].name}</strong></div></div>
      <p>${perceptionText(priorities[0])}</p>
      <blockquote>Si une opportunité correspondant à ton objectif apparaissait demain, qu’est-ce qui pourrait concrètement empêcher ton profil d’être choisi ?</blockquote>
    </section>

    <section class="report-section">
      <h2>6. Ton plan d’action T2BEYOND</h2>
      <ol class="report-actions">${actions.map(a=>`<li>${a}</li>`).join('')}</ol>
    </section>

    <section class="report-section report-final">
      <h2>7. Aller plus loin</h2>
      <p>Le Career Check est un point de départ. Il identifie des tendances à partir de tes propres réponses, mais il ne connaît pas ton parcours détaillé, ton environnement, tes contraintes ou les opportunités qui s’offrent à toi.</p>
      <div class="report-review">
        <span>T2BEYOND CAREER REVIEW</span>
        <h3>Transformer le diagnostic en plan de progression personnalisé.</h3>
        <p>Une Career Review pourra partir de ton Career Check pour clarifier où tu en es, où tu veux aller, ce qui te sépare réellement de cet objectif et les actions les plus pertinentes.</p>
        <button class="review-button" id="inlineCareerReviewOpenBtn" type="button">DEMANDER MA CAREER REVIEW</button>
        <small>Entretien individuel · analyse personnalisée · plan d’action concret</small>
        <div class="career-review-form-wrap" id="inlineCareerReviewFormWrap" hidden>
          <form id="inlineCareerReviewForm" class="career-review-form" novalidate>
            <div class="career-review-form-head">
              <h4>Demande de Career Review</h4>
              <p>Laisse tes coordonnées. Nous te recontacterons pour convenir ensemble d’un créneau.</p>
            </div>
            <div class="career-review-grid">
              <label>Prénom<input id="inlineReviewFirstName" type="text" autocomplete="given-name" required value="${escapeHtml(state.lead.firstName || '')}"></label>
              <label>Nom<input id="inlineReviewLastName" type="text" autocomplete="family-name" required></label>
              <label>Email<input id="inlineReviewEmail" type="email" autocomplete="email" required value="${escapeHtml(state.lead.email || '')}"></label>
              <label>Téléphone <span class="optional">(optionnel si contact par email)</span><input id="inlineReviewPhone" type="tel" autocomplete="tel" placeholder="+33 …"></label>
              <label class="career-review-full">Je préfère être contacté par<select id="inlineReviewContactPreference" required><option value="email">Email</option><option value="phone">Téléphone</option></select></label>
            </div>
            <label class="career-review-consent"><input id="inlineReviewConsent" type="checkbox" required><span>J’accepte d’être contacté par T2BEYOND au sujet de ma demande de Career Review.</span></label>
            <p class="career-review-error" id="inlineCareerReviewError" role="alert" hidden></p>
            <button class="career-review-submit" id="inlineCareerReviewSubmitBtn" type="submit">ENVOYER MA DEMANDE</button>
          </form>
          <div class="career-review-success" id="inlineCareerReviewSuccess" hidden>
            <strong>Demande bien reçue.</strong>
            <p>Nous te recontacterons par email ou téléphone pour convenir d’un créneau.</p>
          </div>
        </div>
      </div>
      <p class="report-disclaimer">Le T2BEYOND Career Check est un outil de réflexion et de développement professionnel basé sur une auto-évaluation. Il ne constitue ni une évaluation psychométrique, ni une prédiction de carrière, ni une décision de recrutement.</p>
    </section>`;
  bindInlineCareerReview();
}

function bindInlineCareerReview(){
  const openBtn=document.getElementById('inlineCareerReviewOpenBtn');
  const wrap=document.getElementById('inlineCareerReviewFormWrap');
  const form=document.getElementById('inlineCareerReviewForm');
  if(!openBtn || !wrap || !form) return;

  openBtn.addEventListener('click',()=>{
    wrap.hidden=false;
    openBtn.hidden=true;
    setTimeout(()=>document.getElementById('inlineReviewLastName')?.focus(),50);
  });

  form.addEventListener('submit',async e=>{
    e.preventDefault();
    const errorBox=document.getElementById('inlineCareerReviewError');
    const submitBtn=document.getElementById('inlineCareerReviewSubmitBtn');
    const firstName=document.getElementById('inlineReviewFirstName').value.trim();
    const lastName=document.getElementById('inlineReviewLastName').value.trim();
    const email=document.getElementById('inlineReviewEmail').value.trim();
    const phone=document.getElementById('inlineReviewPhone').value.trim();
    const contactPreference=document.getElementById('inlineReviewContactPreference').value;
    const consent=document.getElementById('inlineReviewConsent').checked;

    errorBox.hidden=true;
    errorBox.textContent='';
    if(!firstName || !lastName || !isValidEmail(email)){
      errorBox.textContent='Renseigne ton prénom, ton nom et une adresse email valide.';
      errorBox.hidden=false;
      return;
    }
    if(contactPreference==='phone' && !phone){
      errorBox.textContent='Renseigne un numéro de téléphone si tu préfères être contacté par téléphone.';
      errorBox.hidden=false;
      return;
    }
    if(!consent){
      errorBox.textContent='Ton accord est nécessaire pour que T2BEYOND puisse te recontacter.';
      errorBox.hidden=false;
      return;
    }
    if(!state.reportToken){
      errorBox.textContent='Le lien sécurisé vers ton Career Check est indisponible. Recharge ton résultat ou utilise le rapport reçu par email.';
      errorBox.hidden=false;
      return;
    }

    submitBtn.disabled=true;
    submitBtn.textContent='ENVOI…';
    try{
      const response=await fetch(CAREER_REVIEW_API_URL,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          report_token:state.reportToken,
          first_name:firstName,
          last_name:lastName,
          email,
          phone,
          contact_preference:contactPreference,
          consent_to_contact:true
        })
      });
      let data={};
      try{data=await response.json();}catch(_e){}
      if(!response.ok || !data.success) throw new Error(data.error || `Erreur ${response.status}`);
      form.hidden=true;
      document.getElementById('inlineCareerReviewSuccess').hidden=false;
    }catch(error){
      console.error('Career Review submission failed',error);
      errorBox.textContent='Impossible d’envoyer ta demande pour le moment. Réessaie dans quelques instants.';
      errorBox.hidden=false;
    }finally{
      submitBtn.disabled=false;
      submitBtn.textContent='ENVOYER MA DEMANDE';
    }
  });
}

function isValidEmail(value){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value||'').trim());
}

function buildSubmissionPayload(){
  if(!state.result) throw new Error('Résultat indisponible');
  const {scores,fit,profile,priorities,strengths}=state.result;
  return {
    questionnaire_version: questionnaireVersion,
    first_name: (state.lead.firstName||'').trim(),
    email: (state.lead.email||'').trim().toLowerCase(),
    current_job_role: state.context.role || null,
    experience: state.context.experience || null,
    career_goal: state.context.target || null,
    priority_goal: state.context.priority || null,
    target_functions: state.context.functions || [],
    main_target_function: state.context.functionPrimary || null,
    perceived_barriers: state.context.barriers || [],
    main_barrier: state.context.barrierPrimary || null,
    answers: state.answers,
    technical_score: scores.technical,
    business_score: scores.business,
    customer_score: scores.customer,
    leadership_score: scores.leadership,
    visibility_score: scores.visibility,
    strategy_score: scores.strategy,
    career_score: scores.career,
    profile,
    career_fit: fit,
    strength_1: strengths[0] || null,
    strength_2: strengths[1] || null,
    priority_1: priorities[0] || null,
    priority_2: priorities[1] || null,
    career_review_interest: false
  };
}

async function submitCareerCheck(){
  const firstName=(document.getElementById('firstNameInput').value||'').trim();
  const email=(document.getElementById('emailInput').value||'').trim();
  const status=document.getElementById('leadStatus');
  const button=document.getElementById('submitCareerCheckBtn');

  status.className='cc-submit-status';
  status.textContent='';

  if(!firstName){
    status.classList.add('is-error');
    status.textContent='Indique ton prénom pour continuer.';
    return;
  }
  if(!isValidEmail(email)){
    status.classList.add('is-error');
    status.textContent='Indique une adresse email valide.';
    return;
  }

  state.lead={firstName,email};
  button.disabled=true;
  button.textContent='Enregistrement…';
  status.classList.add('is-loading');
  status.textContent='Enregistrement sécurisé de ton Career Check…';

  try{
    const controller=new AbortController();
    const timeout=setTimeout(()=>controller.abort(),12000);
    const response=await fetch(SUPABASE_FUNCTION_URL,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(buildSubmissionPayload()),
      signal:controller.signal
    });
    clearTimeout(timeout);

    let data={};
    try{ data=await response.json(); }catch(_e){}
    if(!response.ok || !data.success){
      throw new Error(data.error || `Erreur ${response.status}`);
    }

    state.submissionId=data.id || null;
    state.reportToken=data.report_token || null;
    if(!state.reportToken && data.report_url){
      try{state.reportToken=new URL(data.report_url).searchParams.get('token');}catch(_e){}
    }
    status.className='cc-submit-status is-success';
    status.textContent='Career Check enregistré. Ton résultat est prêt.';
    setTimeout(()=>showScreen('resultScreen'),350);
  }catch(error){
    console.error('Career Check submission failed',error);
    status.className='cc-submit-status is-error';
    status.textContent=error && error.name==='AbortError'
      ? 'La connexion prend trop de temps. Réessaie dans quelques instants.'
      : 'Impossible d’enregistrer ton Career Check pour le moment. Réessaie sans fermer la page.';
  }finally{
    button.disabled=false;
    button.textContent='Découvrir mon résultat';
  }
}

function renderResult(){
  const scores=computeScores(); const fit=careerFit(scores); const [profile,summary]=classify(scores);
  document.getElementById('profileName').textContent=profile; document.getElementById('profileSummary').textContent=summary;
  document.getElementById('careerFitScore').textContent=fit===null?'—':`${fit}/100`; document.getElementById('careerFitLabel').textContent=fit===null?'objectif encore non modélisé':'alignement indicatif';
  document.getElementById('dimensionScores').innerHTML=Object.entries(dimensions).map(([k,d])=>`<div class="cc-dimension-row"><div><span class="cc-dimension-name">${d.name}</span><span class="cc-dimension-sub">${d.fr}</span></div><span class="cc-score">${scores[k]}</span><div class="cc-bar"><div style="width:${scores[k]}%"></div></div></div>`).join('');
  const strengths=weightedStrengths(scores);
  const priorities=priorityGaps(scores);
  document.getElementById('topStrengths').textContent=strengths.map(k=>dimensions[k].name).join(' + '); document.getElementById('topPriorities').textContent=priorities.map(k=>dimensions[k].name).join(' + ');
  document.getElementById('declaredBarrier').textContent=state.context.barrierPrimary||'Non renseigné';
  renderRadar(scores);
  state.result={scores,fit,profile,priorities,strengths};
}

document.getElementById('startBtn').addEventListener('click',()=>{showScreen('contextScreen');renderContext();});
document.getElementById('contextBackBtn').addEventListener('click',()=>{if(state.contextIndex>0){state.contextIndex--;renderContext();}});
document.getElementById('contextNextBtn').addEventListener('click',()=>{if(state.contextIndex<contextSteps.length-1){state.contextIndex++;renderContext();}else{showScreen('questionScreen');renderQuestion();}});
document.getElementById('questionBackBtn').addEventListener('click',()=>{if(state.questionIndex>0){state.questionIndex--;renderQuestion();}else{showScreen('contextScreen');state.contextIndex=contextSteps.length-1;renderContext();}});
document.getElementById('questionNextBtn').addEventListener('click',()=>{if(!state.answers[questions[state.questionIndex].id])return;if(state.questionIndex<questions.length-1){state.questionIndex++;renderQuestion();}else{renderResult();showScreen('leadScreen');}});
document.getElementById('restartBtn').addEventListener('click',()=>{state.context={};state.answers={};state.contextIndex=0;state.questionIndex=0;state.lead={};state.submissionId=null;state.reportToken=null;delete state.result;document.getElementById('leadForm').reset();document.getElementById('leadStatus').textContent='';showScreen('introScreen');});


document.getElementById('leadBackBtn').addEventListener('click',()=>{state.questionIndex=questions.length-1;renderQuestion();showScreen('questionScreen');});
document.getElementById('leadForm').addEventListener('submit',async e=>{e.preventDefault();await submitCareerCheck();});
document.getElementById('openReportBtn').addEventListener('click',()=>{renderReport();showScreen('reportScreen');});
document.getElementById('backToResultBtn').addEventListener('click',()=>showScreen('resultScreen'));
document.getElementById('printReportBtn').addEventListener('click',()=>window.print());
