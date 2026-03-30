// ==========================================
// 1. DATA SOURCE: SQCDMN_Checklists JSON
// ==========================================
const SQCDMN_Checklists = {
  "Daily": {
    "Safety": [
      { "id": 1, "question": "Respect des Standards de Sécurité (EPI, Portes shuntées et fermées...)?", "type": "single_choice", "options": ["100% objectif", "75%", "50%", "25%", "0%"] },
      { "id": 2, "question": "Nombre de dialogues sécurité ?", "type": "single_choice", "options": ["0", ">1"] },
      { "id": 3, "question": "Nombre de fiches de risques ?", "type": "single_choice", "options": ["0", ">1"] },
      { "id": 4, "question": "Nombre d'incidents de la veille ?", "type": "single_choice", "options": ["0", ">1"] },
      { "id": 5, "question": "Permis de travail (feu, électrique, hauteur, espace confiné) ?", "type": "single_choice", "options": ["Tous les permis requis sont valides", "Un ou plusieurs permis manquent"] }
    ],
    "Quality": [
      { "id": 6, "question": "Propreté des machines (zone food safety...)?", "type": "single_choice", "options": ["100% objectif", "Non conforme"] },
      { "id": 7, "question": "Enregistrements et suivis renseignés à l'heure ?", "type": "single_choice", "options": ["100%", "75%", "50%", "25%", "0%"] },
      { "id": 8, "question": "Suivi des réclamations qualité ?", "type": "single_choice", "options": ["100%", "75%", "50%", "25%", "0%"] },
      { "id": 9, "question": "Respect des règles d'hygiène chantier (tenue, propreté, protections...) ?", "type": "single_choice", "options": ["Conforme", "Non conforme"] }
    ],
    "Delivery": [
      { "id": 10, "question": "Respect des commandes et PSL ?", "type": "single_choice", "options": [">90%", "<90%"] },
      { "id": 11, "question": "Respect du planning maintenance / travaux ?", "type": "single_choice", "options": ["100%", "<100%"] }
    ],
    "Nature": [
      { "id": 12, "question": "Consommation électrique drinks et soufflage ?", "type": "single_choice", "options": ["En dessous de la cible", "Au dessus de la cible"] }
    ]
  },
  "Weekly": {
    "Safety": [
      { "id": 1, "question": "Taux global de conformité sécurité (EPI, portes shuntées, balisage...)", "type": "single_choice", "options": ["100% objectif", "75%", "50%", "25%", "0%"] },
      { "id": 2, "question": "Nombre total de dialogues sécurité réalisés cette semaine", "type": "single_choice", "options": ["0", "1-3", ">3"] },
      { "id": 3, "question": "Nombre total de fiches de risques ouvertes cette semaine", "type": "single_choice", "options": ["0", "1-2", ">2"] },
      { "id": 4, "question": "Nombre total d'incidents / quasi-accidents cette semaine", "type": "single_choice", "options": ["0", "1", ">1"] },
      { "id": 5, "question": "Conformité des permis de travail (feu, électrique, hauteur, espace confiné)", "type": "single_choice", "options": ["Tous les permis requis conformes", "Quelques écarts mineurs", "Non conforme"] },
      { "id": 6, "question": "Avancement de l'analyse des risques sécurité (Risk Assessment Safety)", "type": "single_choice", "options": ["100%", "75%", "50%", "25%", "0%"] },
      { "id": 7, "question": "Audit sécurité hebdomadaire réalisé ?", "type": "single_choice", "options": ["Oui", "Non"] }
    ],
    "Quality": [
      { "id": 8, "question": "Propreté globale des zones PET (machines, convoyeurs, zones sensibles)", "type": "single_choice", "options": ["Conforme", "Non conforme"] },
      { "id": 9, "question": "Respect des règles d'hygiène chantier (tenues, propreté, protections alimentaires)", "type": "single_choice", "options": ["Conforme", "Non conforme"] },
      { "id": 10, "question": "Taux d’enregistrements et suivis complétés dans les délais", "type": "single_choice", "options": ["100%", "75%", "50%", "<50%"] },
      { "id": 11, "question": "Progression du traitement des réclamations qualité chantier", "type": "single_choice", "options": ["100%", "75%", "50%", "<50%"] },
      { "id": 12, "question": "Conformité du matériel installé aux plans & standards du constructeur", "type": "single_choice", "options": ["Oui", "Non"] },
      { "id": 13, "question": "Avancement de l'analyse des risques qualité (Risk Assessment Quality)", "type": "single_choice", "options": ["100%", "75%", "50%", "25%", "0%"] }
    ],
    "Delivery": [
      { "id": 14, "question": "Avancement global vs planning (lookahead 3 semaines)", "type": "single_choice", "options": ["Conforme", "Légère dérive", "Forte dérive"] },
      { "id": 15, "question": "Activités critiques de la semaine réalisées", "type": "single_choice", "options": ["100%", "Partiellement", "Non réalisées"] },
      { "id": 16, "question": "Coactivité maîtrisée (méca, élec, automatisme, génie civil)", "type": "single_choice", "options": ["Oui", "Non"] },
      { "id": 17, "question": "Pré-requis disponibles pour les travaux de la semaine suivante", "type": "single_choice", "options": ["Oui", "Partiellement", "Non"] }
    ],
    "Nature": [
      { "id": 18, "question": "Zone de chantier propre et déchets triés", "type": "single_choice", "options": ["Conforme", "Non conforme"] },
      { "id": 19, "question": "Contrôle des nuisances (bruit, poussière, émissions)", "type": "single_choice", "options": ["Oui", "Non"] },
      { "id": 20, "question": "Consommation énergétique soufflage + utilités PET vs cible hebdomadaire", "type": "single_choice", "options": ["En dessous de la cible", "Au dessus de la cible"] }
    ]
  },
  "Monthly": {
    "Safety": [
      { "id": 1, "question": "Taux global de conformité sécurité du mois (EPI, balisage, portes, zones...)", "type": "single_choice", "options": ["100% objectif", "90%", "80%", "<80%"] },
      { "id": 2, "question": "Nombre total d'incidents / quasi-accidents du mois", "type": "single_choice", "options": ["0", "1", ">1"] },
      { "id": 3, "question": "Avancement de l'analyse des risques Sécurité (Risk Register Safety)", "type": "single_choice", "options": ["100%", "75%", "50%", "25%", "0%"] },
      { "id": 4, "question": "Audit Sécurité mensuel réalisé ?", "type": "single_choice", "options": ["Oui", "Non"] },
      { "id": 5, "question": "Conformité des permis de travail (feu, électrique, hauteur, espace confiné)", "type": "single_choice", "options": ["Conforme", "Partiellement conforme", "Non conforme"] }
    ],
    "Quality": [
      { "id": 6, "question": "Conformité hygiène & propreté zone PET (audit mensuel)", "type": "single_choice", "options": ["Conforme", "Non conforme"] },
      { "id": 7, "question": "Respect des règles d’hygiène chantier (tenue, flux, protections, barrières alimentaires)", "type": "single_choice", "options": ["Conforme", "Non conforme"] },
      { "id": 8, "question": "Taux d’enregistrements complétés dans les délais", "type": "single_choice", "options": ["100%", "75%", "50%", "<50%"] },
      { "id": 9, "question": "Avancement de l’analyse des risques Qualité (Risk Register Quality)", "type": "single_choice", "options": ["100%", "75%", "50%", "25%", "0%"] },
      { "id": 10, "question": "Taux de traitement des non-conformités et réclamations chantier", "type": "single_choice", "options": ["100%", "75%", "50%", "<50%"] },
      { "id": 11, "question": "Conformité de l'installation PET (plans, normes, documentation constructeur)", "type": "single_choice", "options": ["Conforme", "Non conforme"] }
    ],
    "Delivery": [
      { "id": 12, "question": "Avancement global du projet vs planning baseline", "type": "single_choice", "options": ["Conforme", "Légère dérive", "Forte dérive"] },
      { "id": 13, "question": "Avancement des jalons majeurs (milestones)", "type": "single_choice", "options": [">90%", "70-90%", "<70%"] },
      { "id": 14, "question": "Activités critiques du mois réalisées", "type": "single_choice", "options": ["100%", "Partiellement", "Non réalisées"] },
      { "id": 15, "question": "Coactivité maîtrisée au niveau macro (méca, élec, automatisme, génie civil)", "type": "single_choice", "options": ["Oui", "Non"] }
    ],
    "Nature": [
      { "id": 16, "question": "Gestion environnementale du chantier", "type": "single_choice", "options": ["Conforme", "Non conforme"] },
      { "id": 17, "question": "Tri des déchets et tenue environnementale", "type": "single_choice", "options": ["100%", "75%", "<75%"] },
      { "id": 18, "question": "Consommation énergétique (soufflage + utilités PET) vs cible mensuelle", "type": "single_choice", "options": ["En dessous de la cible", "Au dessus de la cible"] }
    ],
    "Leadership": [
      { "id": 19, "question": "Respect des rituels projet (réunions, escalades, reporting)", "type": "single_choice", "options": ["Oui", "Partiellement", "Non"] },
      { "id": 20, "question": "Alignement global des parties prenantes (usine, centrale, fournisseurs)", "type": "single_choice", "options": ["Très bon", "Moyen", "Faible"] },
      { "id": 21, "question": "Pilotage contractuel & gestion des risques", "type": "single_choice", "options": ["Maîtrisé", "Sous contrôle mais amélioration nécessaire", "Non maîtrisé"] }
    ]
  }
};

const ROLE_SETTINGS = {
  "factory": { title: "Responsable Usine", icon: "🏭", type: "Daily" },
  "central": { title: "Responsable Centrale", icon: "🏢", type: "Weekly" },
  "director": { title: "Directeur Projet", icon: "👔", type: "Monthly" }
};

// ==========================================
// STATE VARIABLES & LOGGING
// ==========================================
let currentRoleKey = null;
let currentChecklistType = null;
let currentSessionAnswers = {}; 
let currentSessionId = null;
let currentSessionStart = null;

let currentUser = { nom: null, email: null };
let editingChecklistId = null;

function logUserAction(actionType, checklistId, role) {
  const actions = JSON.parse(localStorage.getItem('User_Actions') || '[]');
  actions.push({
    email: currentUser.email,
    nom: currentUser.nom,
    action_type: actionType,
    checklist_id: checklistId,
    timestamp: new Date().toISOString(),
    role: role
  });
  localStorage.setItem('User_Actions', JSON.stringify(actions));
}

// DOM Elements
const views = document.querySelectorAll('.view');
const btnEnter = document.getElementById('btn-enter');
const roleButtons = document.querySelectorAll('.btn-role');
const btnBackMenu = document.getElementById('btn-back-menu');
const btnDashboardNav = document.getElementById('btn-dashboard-nav');
const btnBackFromDashboard = document.getElementById('btn-back-from-dashboard');
const btnBackToDashboard = document.getElementById('btn-back-to-dashboard');

const checklistTitle = document.getElementById('checklist-title');
const checklistContainer = document.getElementById('checklist-container');
const dashboardList = document.getElementById('dashboard-list');
const historyDetailContainer = document.getElementById('history-detail-container');
const historyDetailTitle = document.getElementById('history-detail-title');

// Initialize App
function init() {
  initUsersDB();
  generateQRCode();
  setupEventListeners();
}

function navigateTo(targetId) {
  if (targetId === 'entry') {
    document.getElementById('view-entry').classList.add('active');
    document.getElementById('app-layout').style.display = 'none';
  } else {
    document.getElementById('view-entry').classList.remove('active');
    document.getElementById('app-layout').style.display = 'flex';
    
    // De-activate all content sections and nav items
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    
    // Map legacy targetId to new sectionId
    let sectionId = targetId;
    if (targetId === 'menu' || targetId === 'dashboard') sectionId = 'content-history';
    if (targetId === 'kpi') sectionId = 'content-kpi';
    if (targetId === 'checklist') sectionId = 'content-checklist';
    if (targetId === 'change-password') sectionId = 'content-change-password';
    if (targetId === 'history-detail') sectionId = 'content-history-detail';
    
    const targetSection = document.getElementById(sectionId);
    if(targetSection) targetSection.classList.add('active');
    
    // Activate sidebar item
    const activeNavBtn = document.querySelector(`.nav-item[data-target="${sectionId}"]`);
    if(activeNavBtn) activeNavBtn.classList.add('active');
    
    applyRolePermissions();
    if(sectionId === 'content-history') loadDashboard();
  }
  window.scrollTo(0,0);
}

function applyRolePermissions() {
  const email = currentUser.email;
  if (!email) return;
  
  const spanName = document.getElementById('sidebar-user-name');
  if(spanName) spanName.textContent = currentUser.nom || email.split('@')[0];

  const btnFactory = document.querySelector('.nav-item[data-role="factory"]');
  const btnCentral = document.querySelector('.nav-item[data-role="central"]');
  const btnDirector = document.querySelector('.nav-item[data-role="director"]');

  if (btnFactory) btnFactory.style.display = 'flex';
  if (btnCentral) btnCentral.style.display = 'flex';
  if (btnDirector) btnDirector.style.display = 'flex';

  if (email === 'salihelyass@danone.com') {
    if (btnCentral) btnCentral.style.display = 'none';
    if (btnDirector) btnDirector.style.display = 'none';
  } else if (email === 'soufianejair@danone.com') {
    if (btnDirector) btnDirector.style.display = 'none';
  }
}

function updateProgress() {
  let totalQuestions = 0;
  if(!currentChecklistType) return;
  Object.values(SQCDMN_Checklists[currentChecklistType]).forEach(questionsList => {
    totalQuestions += questionsList.length;
  });

  const answeredCount = Object.keys(currentSessionAnswers).length;
  const percent = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;
  
  const progText = document.getElementById('checklist-progress-text');
  const progBar = document.getElementById('checklist-progress-bar');
  if(progText) progText.textContent = `${percent}% complété (${answeredCount}/${totalQuestions})`;
  if(progBar) progBar.style.width = `${percent}%`;
}

function generateQRCode() {
  const qrcodeContainer = document.getElementById("qrcode-container");
  if(!qrcodeContainer) return;
  qrcodeContainer.innerHTML = "";
  
  // Nettoyer l'URL des anciens paramètres
  let appUrl = window.location.href.split('?')[0]; 
  if (appUrl.startsWith("file://")) appUrl = "https://sherpa-field.demo/app";

  try {
    new QRCode(qrcodeContainer, {
      text: appUrl,
      width: 200, height: 200,
      colorDark : "#1d4ed8", colorLight : "#ffffff", // Blue QR Code
      correctLevel : QRCode.CorrectLevel.H
    });
  } catch(e) { console.error(e); }
}

// ==========================================
// DATA STORAGE ENGINE
// ==========================================
function initUsersDB() {
  const existingUsers = localStorage.getItem('SHERPA_Users');
  if (!existingUsers) {
    const defaultUsers = [
      { email: 'marwabasri@danone.com', password: 'Danone2026!', nom: 'Marwa Basri' },
      { email: 'soufianejair@danone.com', password: 'Danone2026!', nom: 'Soufiane Jair' },
      { email: 'salihelyass@danone.com', password: 'Danone2026!', nom: 'Salih Elyass' },
      { email: 'rahalsabir@danone.com', password: 'Danone2026!', nom: 'Rahal Sabir' }
    ];
    localStorage.setItem('SHERPA_Users', JSON.stringify(defaultUsers));
  }
}

function getUsers() {
  return JSON.parse(localStorage.getItem('SHERPA_Users') || '[]');
}

function updatePassword(email, newPwd) {
  const users = getUsers();
  const index = users.findIndex(u => u.email === email);
  if(index !== -1) {
    users[index].password = newPwd;
    localStorage.setItem('SHERPA_Users', JSON.stringify(users));
    return true;
  }
  return false;
}

function loadAllResponses() {
  const data = localStorage.getItem('SQCDMN_Responses');
  return data ? JSON.parse(data) : [];
}

function saveResponses(responsesArray) {
  const existing = loadAllResponses();
  const updated = existing.concat(responsesArray);
  localStorage.setItem('SQCDMN_Responses', JSON.stringify(updated));
}

function generateId() {
  return 'res_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

function generateSessionId() {
  return 'sess_' + Date.now().toString(36);
}

// ==========================================
// CHECKLIST UI LOGIC
// ==========================================
function openChecklist(roleKey) {
  currentRoleKey = roleKey;
  const settings = ROLE_SETTINGS[roleKey];
  currentChecklistType = settings.type;
  
  checklistTitle.textContent = `${settings.icon} ${settings.title} (${settings.type})`;
  currentSessionAnswers = {}; 
  currentSessionId = generateSessionId();
  currentSessionStart = new Date().toISOString();
  
  const checklistData = SQCDMN_Checklists[settings.type];
  renderChecklistItems(checklistData);
  
  navigateTo('checklist');
}

function renderChecklistItems(checklistData) {
  checklistContainer.innerHTML = '';
  
  Object.keys(checklistData).forEach(category => {
    const questions = checklistData[category];
    
    const catBlock = document.createElement("div");
    catBlock.className = "category-block";
    catBlock.innerHTML = `<h2 class="category-header">${category}</h2>`;
    
    questions.forEach(q => {
      const qCard = document.createElement("div");
      qCard.className = "question-card";
      
      const qTitle = document.createElement("div");
      qTitle.className = "question-title";
      qTitle.textContent = q.question;
      qCard.appendChild(qTitle);
      
      const optionsRow = document.createElement("div");
      optionsRow.className = "options-row";
      
      q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "btn-option";
        btn.textContent = opt;
        
        btn.addEventListener("click", () => {
          Array.from(optionsRow.children).forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          currentSessionAnswers[q.question] = opt;
          updateProgress();
        });
        optionsRow.appendChild(btn);
      });
      qCard.appendChild(optionsRow);
      catBlock.appendChild(qCard);
    });
    
    checklistContainer.appendChild(catBlock);
  });
  
  updateProgress();
}

function submitChecklist() {
  // Calculer le nombre total de questions pour la checklist sélectionnée
  let totalQuestions = 0;
  Object.values(SQCDMN_Checklists[currentChecklistType]).forEach(questionsList => {
    totalQuestions += questionsList.length;
  });

  const answeredCount = Object.keys(currentSessionAnswers).length;
  if (answeredCount < totalQuestions) {
    alert(`Oups ! Veuillez répondre à toutes les questions avant de soumettre.\n(${answeredCount} / ${totalQuestions} complétées)`);
    return;
  }
  
  const timestampISO = new Date().toISOString();
  let existingData = loadAllResponses();
  
  if (editingChecklistId) {
    const index = existingData.findIndex(r => r.id === editingChecklistId);
    if (index !== -1) {
      existingData[index].answers = { ...currentSessionAnswers };
      existingData[index].updated_at = timestampISO;
    }
    if (typeof logUserAction === 'function') logUserAction("edit_checklist", editingChecklistId, ROLE_SETTINGS[currentRoleKey].title);
  } else {
    // Construct single record
    const sessionRecord = {
      id: currentSessionId || generateId(),
      email: currentUser.email,
      nom: currentUser.nom,
      role: ROLE_SETTINGS[currentRoleKey].title,
      type_checklist: currentChecklistType,
      start_time: currentSessionStart,
      end_time: timestampISO,
      updated_at: timestampISO,
      answers: { ...currentSessionAnswers }
    };
    existingData.push(sessionRecord);
    if (typeof logUserAction === 'function') logUserAction("submit_checklist", sessionRecord.id, ROLE_SETTINGS[currentRoleKey].title);
  }
  
  // Save directly, since saveResponses only appends arrays but here we might be strictly updating
  localStorage.setItem('SQCDMN_Responses', JSON.stringify(existingData));
  
  editingChecklistId = null; // Clear edit mode
  
  alert(`Soumission réussie ! Checklist enregistrée.`);
  navigateTo('menu');
}

// ==========================================
// DASHBOARD & EXPORT TO EXCEL
// ==========================================
function loadDashboard() {
  const responses = loadAllResponses().filter(r => !r.deleted && r.answers); // read horizontal
  dashboardList.innerHTML = '';
  
  if (responses.length === 0) {
    dashboardList.innerHTML = '<p style="text-align:center;color:#6b7280;">Aucune session enregistrée.</p>';
    return;
  }

  responses.slice().reverse().forEach(sess => {
    const card = document.createElement('div');
    card.className = 'history-card';
    const dateStr = new Date(sess.updated_at || sess.end_time || sess.start_time).toLocaleString();
    
    let canModify = false;
    if (sess.email === currentUser.email) canModify = true;
    else if (sess.type_checklist === 'Monthly') canModify = true;

    card.innerHTML = `
      <div class="history-card-header" onclick="openHistoryDetail('${sess.id}')" style="cursor:pointer;">
        <span class="history-role">${sess.role || 'Inconnu'} (${sess.type_checklist || 'N/A'})</span>
        <span class="history-date">${dateStr}</span>
      </div>
      <div class="history-prog" onclick="openHistoryDetail('${sess.id}')" style="cursor:pointer;">
        ${Object.keys(sess.answers || {}).length} réponses ✅<br>
        <small style="color:var(--color-primary);margin-top:5px;display:block;">🔎 Cliquez pour voir les détails</small>
      </div>
      <div class="action-buttons-row">
        <button class="btn-modify" onclick="editChecklist('${sess.id}')" ${!canModify ? 'disabled' : ''}>✏️ Modifier</button>
        <button class="btn-delete" onclick="deleteChecklist('${sess.id}')" ${!canModify ? 'disabled' : ''}>🗑️ Supprimer</button>
      </div>
    `;
    dashboardList.appendChild(card);
  });
}

function openHistoryDetail(id) {
  const sessObj = loadAllResponses().find(r => r.id === id);
  if (!sessObj) return;
  const dateStr = new Date(sessObj.updated_at || sessObj.end_time || sessObj.start_time).toLocaleString();
  historyDetailTitle.textContent = `${sessObj.role} (${dateStr})`;
  historyDetailContainer.innerHTML = '';
  
  Object.entries(sessObj.answers || {}).forEach(([q, a]) => {
    const div = document.createElement('div');
    div.className = 'detail-item';
    div.innerHTML = `<div class="detail-q">${q}</div><div class="detail-a">Réponse: ${a}</div>`;
    historyDetailContainer.appendChild(div);
  });
  navigateTo('history-detail');
}

function editChecklist(id) {
  const sessObj = loadAllResponses().find(r => r.id === id);
  if (!sessObj) return;
  
  editingChecklistId = id;
  currentRoleKey = Object.keys(ROLE_SETTINGS).find(key => ROLE_SETTINGS[key].title === sessObj.role) || 'factory';
  currentChecklistType = sessObj.type_checklist;
  currentSessionStart = sessObj.start_time;
  currentSessionAnswers = { ...sessObj.answers };
  
  const settings = ROLE_SETTINGS[currentRoleKey];
  checklistTitle.textContent = `${settings.icon} Édition ${settings.title} (${settings.type})`;
  
  const checklistData = SQCDMN_Checklists[settings.type];
  renderChecklistItems(checklistData);
  
  // Highlight previously selected options
  document.querySelectorAll('.question-card').forEach(card => {
    const qTitle = card.querySelector('.question-title').textContent;
    const ans = currentSessionAnswers[qTitle];
    if (ans) {
      card.querySelectorAll('.btn-option').forEach(btn => {
        if (btn.textContent === ans) btn.classList.add('selected');
      });
    }
  });

  navigateTo('checklist');
}

function deleteChecklist(id) {
  if (confirm("Voulez-vous vraiment supprimer cette checklist ? Cette action est irréversible.")) {
    let existingData = loadAllResponses();
    const index = existingData.findIndex(r => r.id === id);
    if(index !== -1) {
      existingData[index].deleted = true;
      existingData[index].updated_at = new Date().toISOString();
      localStorage.setItem('SQCDMN_Responses', JSON.stringify(existingData));
      if (typeof logUserAction === 'function') logUserAction("delete_checklist", id, existingData[index].role);
      loadDashboard();
      alert("Checklist supprimée.");
    }
  }
}

async function exportToXLSX() {
  const data = loadAllResponses().filter(r => !r.deleted && r.answers);
  if(data.length === 0) {
    alert("Aucune donnée à exporter.");
    return;
  }
  
  const sessionsByType = {
      "Daily": [],
      "Weekly": [],
      "Monthly": []
  };

  data.forEach(row => {
    if (sessionsByType[row.type_checklist]) {
        sessionsByType[row.type_checklist].push(row);
    }
  });

  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'Sherpa SQCDMN';
  workbook.created = new Date();

  // Charger le logo
  let imageId = null;
  try {
    const logoResponse = await fetch('./logo.png');
    const logoBuffer = await logoResponse.arrayBuffer();
    imageId = workbook.addImage({
      buffer: logoBuffer,
      extension: 'png',
    });
  } catch (e) {
    console.warn("Impossible de charger le logo pour l'export Excel.", e);
  }

  ['Daily', 'Weekly', 'Monthly'].forEach(type => {
      const typeSessions = sessionsByType[type];
      const schema = SQCDMN_Checklists[type];
      if (!schema || typeSessions.length === 0) return;

      const ws = workbook.addWorksheet(`Checklist_${type}`);

      // Ajouter le logo en haut à gauche
      if (imageId !== null) {
        ws.addImage(imageId, {
          tl: { col: 0, row: 0 },
          ext: { width: 140, height: 60 }
        });
      }
      
      // Ajouter le titre
      ws.getCell('C2').value = `Export Historique - Checklist ${type}`;
      ws.getCell('C2').font = { size: 16, bold: true, color: { argb: 'FF0B3C8C' } };

      const startRow = 6;

      const dynamicHeaders = [];
      Object.values(schema).forEach(catArray => {
          catArray.forEach(qObj => {
              dynamicHeaders.push(qObj.question);
          });
      });

      const sheetHeaders = [
          "ID Session",
          "Nom Prénom",
          "Email",
          "Date de début",
          "Date de soumission",
          "Dernière M.A.J",
          "Rôle"
      ].concat(dynamicHeaders);

      // Styliser les en-têtes
      const headerRow = ws.getRow(startRow);
      sheetHeaders.forEach((header, index) => {
        const cell = headerRow.getCell(index + 1);
        cell.value = header;
        // Fond bleu Danone
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FF0B3C8C' } 
        };
        // Texte blanc en gras
        cell.font = { color: { argb: 'FFFFFFFF' }, bold: true };
        cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
        
        // Ajuster la largeur de la colonne
        const colLength = Math.max(15, Math.min(header.length + 5, 45));
        ws.getColumn(index + 1).width = colLength;
      });
      headerRow.height = 30;

      // Ajouter les données
      typeSessions.forEach((sess, index) => {
          const dStart = sess.start_time ? new Date(sess.start_time).toLocaleString() : '';
          const dEnd = sess.end_time ? new Date(sess.end_time).toLocaleString() : '';
          const dUpdate = sess.updated_at ? new Date(sess.updated_at).toLocaleString() : '';
          
          const rowData = [
              sess.id || index + 1,
              sess.nom || '',
              sess.email || '',
              dStart,
              dEnd,
              dUpdate,
              sess.role
          ];

          dynamicHeaders.forEach(qStr => {
              rowData.push(sess.answers[qStr] || "");
          });

          const dataRow = ws.getRow(startRow + 1 + index);
          dataRow.values = rowData;
          dataRow.alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
      });
  });
  
  // Exporter le fichier
  const dateStr = new Date().toISOString().split('T')[0];
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(blob, `Export_SHERPA_${dateStr}.xlsx`);
}

// ==========================================
// EVENTS Binding
// ==========================================
function setupEventListeners() {
  btnEnter.addEventListener('click', () => {
    const email = document.getElementById('user-email').value.trim().toLowerCase();
    const password = document.getElementById('user-password').value.trim();
    
    if (!email || !password) {
      document.getElementById('auth-error-msg').textContent = "Veuillez renseigner votre email et mot de passe.";
      document.getElementById('auth-error-msg').style.display = 'block';
      return;
    }
    
    const users = getUsers();
    const validUser = users.find(u => u.email === email && u.password === password);
    
    if (!validUser) {
      document.getElementById('auth-error-msg').textContent = "Email ou mot de passe incorrect.";
      document.getElementById('auth-error-msg').style.display = 'block';
      return;
    }

    document.getElementById('auth-error-msg').style.display = 'none';
    currentUser.nom = validUser.nom;
    currentUser.email = validUser.email;
    document.getElementById('user-password').value = ""; // Clear password field
    navigateTo('menu');
  });
  
  // Handle checklist clicks from sidebar
  document.querySelectorAll('.nav-item[data-role]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      openChecklist(e.currentTarget.dataset.role);
    });
  });
  
  // Submit inline logic (moved since html is static)
  const btnSubmit = document.getElementById('btn-submit-inline');
  if(btnSubmit) btnSubmit.addEventListener('click', submitChecklist);
  
  // Dashboard logic
  const btnExportCL = document.getElementById('btn-export-cl');
  if(btnExportCL) btnExportCL.onclick = exportToXLSX;

  const btnDashboardNav = document.getElementById('btn-dashboard-nav');
  if(btnDashboardNav) {
    btnDashboardNav.addEventListener('click', () => {
      navigateTo('dashboard');
    });
  }

  const btnKpiNav = document.getElementById('btn-kpi-nav');
  if(btnKpiNav) {
    btnKpiNav.addEventListener('click', () => {
      renderKPIAnalytics();
      navigateTo('kpi');
    });
  }
  
  const btnBackHistory = document.getElementById('btn-back-to-history');
  if(btnBackHistory) {
    btnBackHistory.addEventListener('click', () => {
      navigateTo('dashboard');
    });
  }

  // Changer mot de passe logic
  const btnChangePwdNav = document.getElementById('btn-change-pwd-nav');
  if(btnChangePwdNav) {
    btnChangePwdNav.addEventListener('click', () => navigateTo('change-password'));
  }
  
  const btnLogout = document.getElementById('btn-logout');
  if(btnLogout) {
    btnLogout.addEventListener('click', () => {
      currentUser.email = null;
      currentUser.nom = null;
      document.getElementById('user-email').value = '';
      document.getElementById('user-password').value = '';
      navigateTo('entry');
    });
  }
  
  const btnBackPwdToMenu = document.getElementById('btn-back-pwd-to-menu');
  if(btnBackPwdToMenu) {
    btnBackPwdToMenu.addEventListener('click', () => {
      document.getElementById('pwd-error-msg').style.display = 'none';
      document.getElementById('pwd-success-msg').style.display = 'none';
      document.getElementById('old-password').value = '';
      document.getElementById('new-password').value = '';
      document.getElementById('confirm-password').value = '';
      navigateTo('menu');
    });
  }

  const btnSavePwd = document.getElementById('btn-save-pwd');
  if(btnSavePwd) {
    btnSavePwd.addEventListener('click', () => {
      const oldPwd = document.getElementById('old-password').value;
      const newPwd = document.getElementById('new-password').value;
      const confirmPwd = document.getElementById('confirm-password').value;
      const errorMsg = document.getElementById('pwd-error-msg');
      const successMsg = document.getElementById('pwd-success-msg');
      
      errorMsg.style.display = 'none';
      successMsg.style.display = 'none';
      
      if(!oldPwd || !newPwd || !confirmPwd) {
        errorMsg.textContent = "Veuillez remplir tous les champs.";
        errorMsg.style.display = 'block';
        return;
      }
      
      const users = getUsers();
      const user = users.find(u => u.email === currentUser.email);
      
      if(user.password !== oldPwd) {
        errorMsg.textContent = "L'ancien mot de passe est incorrect.";
        errorMsg.style.display = 'block';
        return;
      }
      
      if(newPwd !== confirmPwd) {
        errorMsg.textContent = "Les nouveaux mots de passe ne correspondent pas.";
        errorMsg.style.display = 'block';
        return;
      }
      
      if(newPwd === oldPwd) {
        errorMsg.textContent = "Le nouveau mot de passe doit être différent de l'ancien.";
        errorMsg.style.display = 'block';
        return;
      }
      
      updatePassword(currentUser.email, newPwd);
      successMsg.style.display = 'block';
      document.getElementById('old-password').value = '';
      document.getElementById('new-password').value = '';
      document.getElementById('confirm-password').value = '';
      
      setTimeout(() => {
        successMsg.style.display = 'none';
        navigateTo('menu');
      }, 2000);
    });
  }
}

document.addEventListener('DOMContentLoaded', init);

// ==========================================
// ANALYTICS & KPI ENGINE
// ==========================================
const KPI_PET = {
  "Daily": {
    "Safety": [
      {
        "id": "D-S1",
        "kpi_name": "Safety Compliance Rate",
        "description": "Taux de conformité sécurité basé sur EPI, portes, balisage.",
        "calculation": "Pourcentage de réponses '100% objectif' / total items sécurité",
        "thresholds": { "green": ">=80%", "orange": "50-79%", "red": "<50%" }
      },
      {
        "id": "D-S2",
        "kpi_name": "Daily Safety Dialogues Count",
        "description": "Nombre de dialogues sécurité réalisés ce jour.",
        "options_scoring": { "0": "red", ">1": "green" }
      },
      {
        "id": "D-S3",
        "kpi_name": "Daily Risk Cards",
        "description": "Nombre de fiches de risques du jour.",
        "options_scoring": { "0": "green", ">1": "orange" }
      },
      {
        "id": "D-S4",
        "kpi_name": "Incident-Free Days Indicator",
        "description": "Indicateur d'incident sur la veille.",
        "options_scoring": { "0": "green", ">1": "red" }
      }
    ],

    "Quality": [
      {
        "id": "D-Q1",
        "kpi_name": "Food Safety Cleanliness Score",
        "description": "État de propreté zone PET.",
        "options_scoring": { "100% objectif": "green", "Non conforme": "red" }
      },
      {
        "id": "D-Q2",
        "kpi_name": "On-time Documentation Rate",
        "description": "Respect des enregistrements du jour.",
        "thresholds": { "green": "100%", "orange": "75%", "red": "<50%" }
      },
      {
        "id": "D-Q3",
        "kpi_name": "Quality Claims Follow-up",
        "description": "Avancement du traitement des réclamations.",
        "thresholds": { "green": "100%", "orange": "75%", "red": "<50%" }
      },
      {
        "id": "D-Q4",
        "kpi_name": "Hygiene Compliance Score",
        "description": "Respect mesures d'hygiène chantier.",
        "options_scoring": { "Conforme": "green", "Non conforme": "red" }
      }
    ],

    "Delivery": [
      {
        "id": "D-D1",
        "kpi_name": "PSL Achievement Rate",
        "description": "Respect des commandes et PSL.",
        "options_scoring": { ">90%": "green", "<90%": "red" }
      },
      {
        "id": "D-D2",
        "kpi_name": "Maintenance Completion Rate",
        "description": "Réalisation du planning maintenance.",
        "options_scoring": { "100%": "green", "<100%": "orange" }
      }
    ],

    "Nature": [
      {
        "id": "D-N1",
        "kpi_name": "Energy Performance Indicator",
        "description": "Consommation énergétique vs cible.",
        "options_scoring": { "En dessous de la cible": "green", "Au dessus de la cible": "red" }
      }
    ]
  },

  "Weekly": {
    "Safety": [
      {
        "id": "W-S1",
        "kpi_name": "Weekly Safety Score",
        "description": "Moyenne de conformité sécurité hebdomadaire.",
        "thresholds": { "green": ">=80%", "orange": "50-79%", "red": "<50%" }
      },
      {
        "id": "W-S2",
        "kpi_name": "Safety Risk Assessment Progress",
        "description": "Avancement analyse des risques sécurité.",
        "thresholds": { "green": "100%", "orange": "50-99%", "red": "<50%" }
      }
    ],

    "Quality": [
      {
        "id": "W-Q1",
        "kpi_name": "Weekly Hygiene & Cleanliness Score",
        "description": "Conformité hygiène semaine.",
        "options_scoring": { "Conforme": "green", "Non conforme": "red" }
      },
      {
        "id": "W-Q2",
        "kpi_name": "Quality Risk Assessment Progress",
        "description": "Avancement analyse risques qualité.",
        "thresholds": { "green": "100%", "orange": "50-99%", "red": "<50%" }
      },
      {
        "id": "W-Q3",
        "kpi_name": "Installation Conformity Score",
        "description": "Conformité installation vs plans constructeur.",
        "options_scoring": { "Oui": "green", "Non": "red" }
      }
    ],

    "Delivery": [
      {
        "id": "W-D1",
        "kpi_name": "Lookahead Planning Compliance",
        "description": "% réalisation vs planning 3 semaines.",
        "options_scoring": { "Conforme": "green", "Légère dérive": "orange", "Forte dérive": "red" }
      },
      {
        "id": "W-D2",
        "kpi_name": "Critical Tasks Completion Rate",
        "description": "% activités critiques réalisées.",
        "options_scoring": { "100%": "green", "Partiellement": "orange", "Non réalisées": "red" }
      }
    ],

    "Nature": [
      {
        "id": "W-N1",
        "kpi_name": "Environment Compliance Score",
        "description": "Propreté chantier + tri déchets.",
        "options_scoring": { "Conforme": "green", "Non conforme": "red" }
      }
    ]
  },

  "Monthly": {
    "Safety": [
      {
        "id": "M-S1",
        "kpi_name": "Monthly Safety Index",
        "description": "Score global sécurité mensuel.",
        "thresholds": { "green": ">=80%", "orange": "50-79%", "red": "<50%" }
      },
      {
        "id": "M-S2",
        "kpi_name": "Monthly Incident Rate",
        "description": "Nombre incidents cumulés / mois.",
        "options_scoring": { "0": "green", "1": "orange", ">1": "red" }
      }
    ],

    "Quality": [
      {
        "id": "M-Q1",
        "kpi_name": "Monthly Hygiene Audit Score",
        "description": "Audit mensuel hygiène & propreté PET.",
        "options_scoring": { "Conforme": "green", "Non conforme": "red" }
      }
    ],

    "Delivery": [
      {
        "id": "M-D1",
        "kpi_name": "Baseline Schedule Adherence",
        "description": "% avancement vs planning baseline.",
        "options_scoring": { "Conforme": "green", "Légère dérive": "orange", "Forte dérive": "red" }
      }
    ],

    "Nature": [
      {
        "id": "M-N1",
        "kpi_name": "Monthly Energy Performance",
        "description": "Énergie vs cible mensuelle.",
        "options_scoring": { "En dessous de la cible": "green", "Au dessus de la cible": "red" }
      }
    ],

    "Leadership": [
      {
        "id": "M-L1",
        "kpi_name": "Governance Rituals Completion",
        "description": "Réalisation rituels projet.",
        "options_scoring": { "Oui": "green", "Partiellement": "orange", "Non": "red" }
      }
    ]
  }
};

function renderKPIAnalytics() {
  const kpiContainer = document.getElementById('kpi-container');
  if(!kpiContainer) return;
  kpiContainer.innerHTML = '';
  
  const data = loadAllResponses().filter(r => !r.deleted && r.answers);
  const sessions = {};
  data.forEach(r => {
    const sId = r.id;
    sessions[sId] = { type: r.type_checklist, date: new Date(r.updated_at || r.end_time || r.start_time || Date.now()), answers: r.answers };
  });
  
  // Chercher la session la plus récente pour chaque rôle
  const latestSessions = { "Daily": null, "Weekly": null, "Monthly": null };
  Object.values(sessions).forEach(sess => {
     if (!latestSessions[sess.type] || sess.date > latestSessions[sess.type].date) {
         latestSessions[sess.type] = sess;
     }
  });

  const scores = { "Daily": [], "Weekly": [], "Monthly": [] };

  Object.keys(KPI_PET).forEach(type => {
    const activeSession = latestSessions[type];
    
    if (!activeSession) {
      const emptyBox = document.createElement('div');
      emptyBox.className = 'kpi-cat-block';
      emptyBox.innerHTML = `
        <div class="kpi-cat-header" style="background:#6b7280;">🎯 ${type.toUpperCase()} CHECKLIST</div>
        <div style="padding:20px; text-align:center; color:#9ca3af;"><i>Aucune checklist validée pour le moment.</i></div>
      `;
      kpiContainer.appendChild(emptyBox);
      return; 
    }

    const block = document.createElement('div');
    block.className = 'kpi-cat-block';
    
    const header = document.createElement('div');
    header.className = 'kpi-cat-header';
    header.textContent = `🎯 ${type.toUpperCase()} CHECKLIST`;
    block.appendChild(header);

    const cats = KPI_PET[type];
    Object.keys(cats).forEach(cat => {
      const catTitle = document.createElement('div');
      catTitle.style.padding = '8px 15px';
      catTitle.style.fontWeight = '800';
      catTitle.style.backgroundColor = '#f3f4f6';
      catTitle.style.color = '#374151';
      catTitle.style.borderBottom = '1px solid #e5e7eb';
      catTitle.style.borderTop = '1px solid #e5e7eb';
      catTitle.textContent = `▶ Volet : ${cat}`;
      block.appendChild(catTitle);

      const kpiList = cats[cat];
      const checklistQuestions = SQCDMN_Checklists[type][cat];

      kpiList.forEach((kpi, index) => {
         const matchedQuestionStr = checklistQuestions && checklistQuestions[index] ? checklistQuestions[index].question : null;
         let answer = matchedQuestionStr ? activeSession.answers[matchedQuestionStr] : null;

         // Cas exceptionnel: Si c'est un KPI calculé aggrégé sans réponse directe, on traite différemment ?
         // Mais pour votre cas d'usage, l'utilisateur a rentré les questions directement.
         
         const colorStr = evaluateKPIValue(answer, kpi);
         
         let numScore = 0;
         if (colorStr === 'green') numScore = 100;
         else if (colorStr === 'orange') numScore = 50;
         else if (colorStr === 'red') numScore = 0;
         
         if (colorStr !== 'gray') scores[type].push(numScore);

         const item = document.createElement('div');
         item.className = 'kpi-item';

         const badgeClass = colorStr === 'gray' ? 'kpi-badge-none' : `kpi-badge-${colorStr}`;
         let badgeText = 'N/A';
         if (colorStr === 'green') badgeText = 'VERT';
         else if (colorStr === 'orange') badgeText = 'ORANGE';
         else if (colorStr === 'red') badgeText = 'ROUGE';

         let ansDisplay = '';
         if (answer) {
             ansDisplay = `<div style="font-size:0.8rem; color:#1d4ed8; margin-top:6px;">➤ Réponse terrain : <b>${answer}</b></div>`;
         } else {
             ansDisplay = `<div style="font-size:0.8rem; color:#ef4444; margin-top:6px;"><i>Question non répondue</i></div>`;
         }

         item.innerHTML = `
           <div style="flex:1; padding-right:15px;">
             <div class="kpi-name">${kpi.kpi_name}</div>
             <div class="kpi-desc">${kpi.description}</div>
             ${ansDisplay}
           </div>
           <div class="kpi-status-badge ${badgeClass}">${badgeText}</div>
         `;
         block.appendChild(item);
      });
    });
    
    kpiContainer.appendChild(block);
  });

  // Calculate and apply average global scores
  const calcAvg = (arr) => {
     if (!arr || arr.length === 0) return { avg: '-', color: 'gray' };
     const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
     let color = 'red';
     if (mean >= 80) color = 'green';
     else if (mean >= 50) color = 'orange';
     return { avg: Math.round(mean) + '%', color: color };
  };

  ['Daily', 'Weekly', 'Monthly'].forEach(t => {
     const res = calcAvg(scores[t]);
     const el = document.getElementById(`kpi-${t.toLowerCase()}-score`);
     if (el) {
       el.textContent = res.avg;
       el.className = `kpi-score-val kpi-color-${res.color}`;
     }
  });
}

function evaluateKPIValue(answer, rule) {
  if (!answer) return "gray";
  const strAns = answer.toString().trim();
  const numAnswer = parseFloat(strAns.replace(/[^0-9.-]/g, ''));
  
  // 1. Strict exact match for options
  if (rule.options_scoring && rule.options_scoring[strAns]) {
    return rule.options_scoring[strAns];
  }
  
  // 2. Contains match or mathematical string match (">1")
  if (rule.options_scoring) {
      for (const [key, color] of Object.entries(rule.options_scoring)) {
          if (key === ">0" && numAnswer > 0) return color;
          if (key === ">1" && numAnswer > 1) return color;
          if (key === ">3" && numAnswer > 3) return color;
          if (strAns.includes(key)) return color;
      }
  }

  // 3. Threshold mathematical logic
  if (rule.thresholds && !isNaN(numAnswer)) {
      const checkTh = (thStr, num) => {
          if (thStr.includes('>=')) return num >= parseFloat(thStr.replace('>=',''));
          if (thStr.includes('<=')) return num <= parseFloat(thStr.replace('<=',''));
          if (thStr.includes('>')) return num > parseFloat(thStr.replace('>',''));
          if (thStr.includes('<')) return num < parseFloat(thStr.replace('<',''));
          if (thStr.includes('-')) {
             const p = thStr.split('-');
             return num >= parseFloat(p[0]) && num <= parseFloat(p[1]);
          }
          return num === parseFloat(thStr);
      };
      
      // Order of checks matters: ensure stricter red vs green evaluate properly
      if (rule.thresholds.red && checkTh(rule.thresholds.red, numAnswer)) return "red";
      if (rule.thresholds.orange && checkTh(rule.thresholds.orange, numAnswer)) return "orange";
      if (rule.thresholds.green && checkTh(rule.thresholds.green, numAnswer)) return "green";
  }
  
  return "gray";
}
