// ==========================================
// 🌙 MOTOR GLOBAL DE MODO ESCURO
// ==========================================

const injetarEstilosGlobais = () => {
    if (!document.getElementById('bjj-global-styles')) {
        const style = document.createElement('style');
        style.id = 'bjj-global-styles';
        style.innerHTML = `
            /* MODO ESCURO GERAL */
            html.dark body, html.dark main, html.dark #interface-sistema { background-color: #020617 !important; }
            
            html.dark .bg-[#F4F7F8]:not(.ignorar-dark):not(.ignorar-dark *), 
            html.dark .bg-[#F8FAFC]:not(.ignorar-dark):not(.ignorar-dark *) { background-color: #020617 !important; }
            
            html.dark .bg-white:not(.ignorar-dark):not(.ignorar-dark *), 
            html.dark .card-premium:not(.ignorar-dark):not(.ignorar-dark *) { background-color: #0f172a !important; border-color: #1e293b !important; }
            
            html.dark .bg-slate-50:not(.ignorar-dark):not(.ignorar-dark *), 
            html.dark .bg-slate-100:not(.ignorar-dark):not(.ignorar-dark *),
            html.dark .bg-slate-200:not(.ignorar-dark):not(.ignorar-dark *) { 
                background-color: #1e293b !important; 
                border-color: #334155 !important; 
            }
            
            html.dark .text-slate-900:not(.ignorar-dark):not(.ignorar-dark *), 
            html.dark .text-slate-800:not(.ignorar-dark):not(.ignorar-dark *), 
            html.dark .text-slate-700:not(.ignorar-dark):not(.ignorar-dark *) { color: #f8fafc !important; }
            
            html.dark .text-slate-600:not(.ignorar-dark):not(.ignorar-dark *), 
            html.dark .text-slate-500:not(.ignorar-dark):not(.ignorar-dark *) { color: #94a3b8 !important; }
            
            html.dark .border-slate-200:not(.ignorar-dark):not(.ignorar-dark *), 
            html.dark .border-slate-100:not(.ignorar-dark):not(.ignorar-dark *) { border-color: #1e293b !important; }

            html.dark label:not(.ignorar-dark):not(.ignorar-dark *) { color: #cbd5e1 !important; }
            
            html.dark input:not(.ignorar-dark):not(.ignorar-dark *), 
            html.dark select:not(.ignorar-dark):not(.ignorar-dark *), 
            html.dark textarea:not(.ignorar-dark):not(.ignorar-dark *) { 
                background-color: #0f172a !important; 
                color: #f8fafc !important; 
                border-color: #334155 !important; 
            }
            
            html.dark input::placeholder, html.dark textarea::placeholder { color: #475569 !important; }

            html.dark .bg-emerald-50:not(.ignorar-dark) { background-color: rgba(6, 78, 59, 0.2) !important; }
            html.dark .bg-cyan-50:not(.ignorar-dark) { background-color: rgba(30, 58, 138, 0.2) !important; }
            html.dark .bg-amber-50:not(.ignorar-dark) { background-color: rgba(120, 53, 15, 0.2) !important; }
            html.dark .bg-rose-50:not(.ignorar-dark) { background-color: rgba(136, 19, 55, 0.2) !important; }

            html.dark tr:hover td { background-color: #1e293b !important; }

            .custom-scroll::-webkit-scrollbar { width: 5px; }
            .custom-scroll::-webkit-scrollbar-track { background: transparent; }
            .custom-scroll::-webkit-scrollbar-thumb { background-color: #334155; border-radius: 10px; }
            .custom-scroll::-webkit-scrollbar-thumb:hover { background-color: #475569; }
            .custom-scroll { scrollbar-width: thin; scrollbar-color: #334155 transparent; }
            
            /* IMPRESSÃO */
            @media print {
                #bjj-sidebar, #bjj-hamburger-btn, #bjj-menu-overlay, .no-print {
                    display: none !important;
                }
                main {
                    margin-left: 0 !important;
                    padding-left: 0 !important;
                }
            }
            
            /* MODAIS NO DARK MODE */
            html.dark .fixed.inset-0, html.dark [class*="modal"], html.dark [id*="modal"] {
                background-color: rgba(2, 6, 23, 0.95) !important;
            }
            html.dark .fixed.inset-0 > div, html.dark [class*="modal"] > div, html.dark [id*="modal"] > div {
                background-color: #0f172a !important;
                border-color: #1e293b !important;
                color: #f8fafc !important;
            }
        `;
        document.head.appendChild(style);
    }

    if (localStorage.getItem('bjj-theme') === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
};

// ==========================================
// 🌓 TOGGLE DARK MODE COM SVG
// ==========================================
window.toggleDarkMode = function() {
    const htmlTag = document.documentElement;
    const btn = window.event?.currentTarget;
    
    if (htmlTag.classList.contains('dark')) {
        htmlTag.classList.remove('dark');
        localStorage.setItem('bjj-theme', 'light');
        
        // Atualizar SVG para Sol (modo claro)
        if (btn) {
            const svg = btn.querySelector('svg');
            if (svg) {
                svg.innerHTML = `
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                `;
            }
        }
    } else {
        htmlTag.classList.add('dark');
        localStorage.setItem('bjj-theme', 'dark');
        
        // Atualizar SVG para Lua (modo escuro)
        if (btn) {
            const svg = btn.querySelector('svg');
            if (svg) {
                svg.innerHTML = `
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                `;
            }
        }
    }
};

// ==========================================
// 📋 MENU GAVETA UNIVERSAL
// ==========================================
function carregarMenu() {
    try {
        const paginaAtual = window.location.pathname.split("/").pop() || "dashboard.html";

        if (!window.funcionalidadesEquipe) {
            const cacheFeatures = sessionStorage.getItem('bjj_features');
            if (cacheFeatures && cacheFeatures !== "undefined" && cacheFeatures !== "null") {
                try { window.funcionalidadesEquipe = JSON.parse(cacheFeatures); } catch(e) { window.funcionalidadesEquipe = []; }
            }
        }

        const cacheNome = sessionStorage.getItem('bjj_equipe_nome') || 'SUA EQUIPE';
        const cacheLogoUrl = sessionStorage.getItem('bjj_equipe_logo');
        
        let cacheLogoHTML = cacheNome.charAt(0).toUpperCase();
        let cacheLogoBg = "";
        if (cacheLogoUrl && cacheLogoUrl !== "null" && cacheLogoUrl !== "") {
            cacheLogoHTML = `<img src="${cacheLogoUrl}" class="w-full h-full object-cover" alt="Logo" crossorigin="anonymous">`;
            cacheLogoBg = "background: transparent;";
        }

        const isDark = document.documentElement.classList.contains('dark');
        const svgTema = isDark ? `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
        ` : `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
        `;

        const classItem = (pagina, isBloqueado = false) => {
            if (isBloqueado) return "w-full text-left flex items-center justify-between px-6 py-3.5 text-[13px] font-semibold text-slate-600 border-l-4 border-transparent cursor-not-allowed opacity-60 bg-slate-900/30";
            return paginaAtual === pagina 
                ? "w-full text-left flex items-center justify-between px-6 py-3.5 text-[13px] font-black text-white bg-gradient-to-r from-cyan-500/10 to-transparent border-l-4 border-cyan-500 transition-all group cursor-pointer" 
                : "w-full text-left flex items-center justify-between px-6 py-3.5 text-[13px] font-semibold text-slate-400 border-l-4 border-transparent hover:border-slate-700 hover:text-white hover:bg-slate-800/50 transition-all group cursor-pointer";
        };

        const hasAccess = (palavraChave) => {
            if (!window.funcionalidadesEquipe) return true;
            return window.funcionalidadesEquipe.some(f => f.includes('✓') && f.toLowerCase().includes(palavraChave.toLowerCase()));
        };

        const blockIcon = `<span class="text-[10px]">🔒</span>`;
        const canFin = true; 
        const canLoja = hasAccess('Vitrine'); 
        const canCert = hasAccess('Certificados'); 
        const canTurmas = hasAccess('Turmas'); 
        const canExtra = hasAccess('Ilimitados') || hasAccess('Portal'); 

        const clickAcao = (url, hasAcc) => { return hasAcc ? `window.location.href='${url}'` : `mostrarAvisoUpgrade();`; };

        const svgSuporte = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75v1.5c0 1.657 1.343 3 3 3h1.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-1.5a6 6 0 1112 0h-1.5a.75.75 0 00-.75.75v4.5a.75.75 0 00.75.75h1.5c1.657 0 3-1.343 3-3v-1.5c0-5.385-4.365-9.75-9.75-9.75z" /><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 15v3.375c0 1.243-1.007 2.25-2.25 2.25h-2.25c-1.243 0-2.25-1.007-2.25-2.25v-1.5" /></svg>`;

        // --- HTML DO MENU LATERAL ---
        const menuSidebar = `
            <div id="bjj-menu-overlay" onclick="toggleBjjMenu()" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[50] hidden transition-all duration-300 opacity-0 pointer-events-none"></div>
            
            <aside id="bjj-sidebar" class="fixed inset-y-0 left-0 w-[260px] bg-slate-900 text-white flex-col h-full shadow-[5px_0_25px_rgba(0,0,0,0.5)] z-[60] border-r border-slate-800 transform -translate-x-full transition-transform duration-300 flex shrink-0">
                
                <button onclick="toggleBjjMenu()" class="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800/50 p-2 rounded-xl transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <div class="p-6 text-center border-b border-slate-800 flex flex-col items-center justify-center bg-slate-950/30 shrink-0">
                    <div id="container-logo" class="w-16 h-16 mb-3 rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-700 flex items-center justify-center shadow-lg text-slate-300 font-black text-2xl overflow-hidden ring-1 ring-slate-700" style="${cacheLogoBg}">
                        ${cacheLogoHTML}
                    </div>
                    <h1 class="text-xs font-black tracking-wider text-white uppercase truncate w-full px-2" id="nome-equipe">${cacheNome}</h1>
                    <p class="text-[9px] text-cyan-500 font-black uppercase tracking-[0.2em] mt-2 bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/20">BJJ MANAGER</p>
                </div>
                
                <nav class="flex-1 py-4 space-y-1 overflow-y-auto custom-scroll flex flex-col">
                    <button onclick="${clickAcao('dashboard.html', true)}" class="${classItem('dashboard.html', false)}">
                        <div class="flex items-center"><span class="mr-3 text-lg group-hover:scale-110 transition-transform ${paginaAtual === 'dashboard.html' ? 'drop-shadow-md' : 'opacity-70'}">📊</span> Visão Geral</div>
                    </button>
                    <button onclick="${clickAcao('financeiro.html', canFin)}" class="${classItem('financeiro.html', !canFin)}">
                        <div class="flex items-center"><span class="mr-3 text-lg group-hover:scale-110 transition-transform ${paginaAtual === 'financeiro.html' ? 'drop-shadow-md' : 'opacity-70'}">💰</span> Financeiro</div>
                        ${!canFin ? blockIcon : ''}
                    </button>
                    <button onclick="${clickAcao('alunos.html', true)}" class="${classItem('alunos.html', false)}">
                        <div class="flex items-center"><span class="mr-3 text-lg group-hover:scale-110 transition-transform ${paginaAtual === 'alunos.html' ? 'drop-shadow-md' : 'opacity-70'}">🥋</span> Alunos</div>
                    </button>
                    <button onclick="${clickAcao('turmas.html', canTurmas)}" class="${classItem('turmas.html', !canTurmas)}">
                        <div class="flex items-center"><span class="mr-3 text-lg group-hover:scale-110 transition-transform ${paginaAtual === 'turmas.html' ? 'drop-shadow-md' : 'opacity-70'}">🗓️</span> Turmas</div>
                        ${!canTurmas ? blockIcon : ''}
                    </button>
                    <button onclick="${clickAcao('loja.html', canLoja)}" class="${classItem('loja.html', !canLoja)}">
                        <div class="flex items-center"><span class="mr-3 text-lg group-hover:scale-110 transition-transform ${paginaAtual === 'loja.html' ? 'drop-shadow-md' : 'opacity-70'}">🛒</span> Vitrine Virtual</div>
                        ${!canLoja ? blockIcon : ''}
                    </button>
                    
                    <div class="px-6 pt-4 pb-2"><p class="text-[9px] font-black text-slate-500/80 uppercase tracking-widest">Acadêmico</p></div>
                    
                    <button onclick="${clickAcao('certificados.html', canCert)}" class="${classItem('certificados.html', !canCert)}">
                        <div class="flex items-center"><span class="mr-3 text-lg group-hover:scale-110 transition-transform ${paginaAtual === 'certificados.html' ? 'drop-shadow-md' : 'opacity-70'}">📜</span> Certificados</div>
                        ${!canCert ? blockIcon : ''}
                    </button>
                    <button onclick="${clickAcao('curriculo.html', canExtra)}" class="${classItem('curriculo.html', !canExtra)}">
                        <div class="flex items-center"><span class="mr-3 text-lg group-hover:scale-110 transition-transform ${paginaAtual === 'curriculo.html' ? 'drop-shadow-md' : 'opacity-70'}">📄</span> Currículo</div>
                        ${!canExtra ? blockIcon : ''}
                    </button>
                    
                    <div class="px-6 pt-4 pb-2"><p class="text-[9px] font-black text-slate-500/80 uppercase tracking-widest">Gestão Extra</p></div>
                    
                    <button onclick="${clickAcao('competicoes.html', canExtra)}" class="${classItem('competicoes.html', !canExtra)}">
                        <div class="flex items-center"><span class="mr-3 text-lg group-hover:scale-110 transition-transform ${paginaAtual === 'competicoes.html' ? 'drop-shadow-md' : 'opacity-70'}">🏆</span> Competições</div>
                        ${!canExtra ? blockIcon : ''}
                    </button>
                    <button onclick="${clickAcao('federacoes.html', canExtra)}" class="${classItem('federacoes.html', !canExtra)}">
                        <div class="flex items-center"><span class="mr-3 text-lg group-hover:scale-110 transition-transform ${paginaAtual === 'federacoes.html' ? 'drop-shadow-md' : 'opacity-70'}">🪪</span> Federações</div>
                        ${!canExtra ? blockIcon : ''}
                    </button>
                    <button onclick="${clickAcao('historico.html', canExtra)}" class="${classItem('historico.html', !canExtra)}">
                        <div class="flex items-center"><span class="mr-3 text-lg group-hover:scale-110 transition-transform ${paginaAtual === 'historico.html' ? 'drop-shadow-md' : 'opacity-70'}">🎓</span> Graduações</div>
                        ${!canExtra ? blockIcon : ''}
                    </button>
                </nav>
                
                <div class="p-3 border-t border-slate-800 bg-slate-900/80 backdrop-blur-sm z-30 flex flex-col gap-2 shrink-0">
                    <div class="flex gap-2">
                        <button onclick="${clickAcao('suporte.html', true)}" class="relative flex-1 flex items-center justify-center gap-1.5 bg-slate-800/50 hover:bg-slate-700 text-slate-400 hover:text-indigo-400 transition-colors text-[9px] font-bold uppercase tracking-widest py-2 rounded-lg group ${paginaAtual === 'suporte.html' ? 'text-indigo-400 bg-slate-800' : ''}">
                            <span class="opacity-70 group-hover:opacity-100 transition-opacity">${svgSuporte}</span> Sup.
                            <span id="badge-suporte" class="hidden absolute -top-1.5 -right-1.5 flex h-3 w-3">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-rose-500 border-2 border-slate-900"></span>
                            </span>
                        </button>

                        <button onclick="toggleDarkMode()" class="flex-1 flex items-center justify-center gap-1.5 bg-slate-800/50 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors text-[9px] font-bold uppercase tracking-widest py-2 rounded-lg group" title="Alternar Modo Escuro">
                            <span class="opacity-70 group-hover:opacity-100 transition-opacity">${svgTema}</span> Tema
                        </button>
                    </div>
                    <button onclick="sairDoSistema()" class="w-full py-2 bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white border border-rose-500/20 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center shadow-sm">
                        <span class="mr-2 text-sm leading-none opacity-70">🚪</span> Sair
                    </button>
                </div>
            </aside>
        `;

        const btnHamburguer = `
            <button id="bjj-hamburger-btn" onclick="toggleBjjMenu()" class="fixed top-4 left-4 z-[45] bg-slate-900/90 backdrop-blur-sm text-white p-2.5 rounded-xl shadow-lg border border-slate-700 flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            </button>
        `;

        const containerPrincipal = document.getElementById('interface-sistema');
        
        const oldMobile = document.querySelector('nav.md\\:hidden');
        if (oldMobile) oldMobile.remove();

        if (containerPrincipal) {
            const oldMenu = containerPrincipal.querySelector('aside');
            if (oldMenu) oldMenu.remove();
            
            const oldBtn = document.getElementById('bjj-hamburger-btn');
            if (oldBtn) oldBtn.remove();
            
            containerPrincipal.insertAdjacentHTML('afterbegin', menuSidebar);
        }

        if (document.body) {
            const existingBtn = document.getElementById('bjj-hamburger-btn');
            if (!existingBtn) {
                document.body.insertAdjacentHTML('beforeend', btnHamburguer);
            }
        }

        // INJETAR MARCA D'ÁGUA
        const mainContainer = document.querySelector('main');
        if (mainContainer && !document.getElementById('bjj-footer-powered')) {
            const poweredHTML = `
                <div id="bjj-footer-powered" class="w-full flex items-center justify-center gap-2 py-3 mt-auto cursor-default text-slate-500 hover:text-slate-400 transition-colors">
                    <span class="text-[7px] font-semibold uppercase tracking-[0.2em]">Um sistema BJJ Digital</span>
                    <a href="https://bjjdigital.com.br" target="_blank" title="BJJ Manager">
                        <img src="https://bjjdigital.com.br/logo_bjj_digital.png" alt="BJJ Manager" class="h-3.5 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                    </a>
                </div>
            `;
            mainContainer.insertAdjacentHTML('beforeend', poweredHTML);
        }

    } catch (error) {
        console.error("Erro interno ao renderizar o menu:", error);
    }
}

// ==========================================
// 📋 FUNÇÃO PARA ABRIR/FECHAR MENU
// ==========================================
window.toggleBjjMenu = function() {
    const sidebar = document.getElementById('bjj-sidebar');
    const overlay = document.getElementById('bjj-menu-overlay');

    if (!sidebar || !overlay) return;

    if (sidebar.classList.contains('-translate-x-full')) {
        // Abrir menu
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        overlay.classList.remove('pointer-events-none');
        setTimeout(() => overlay.classList.remove('opacity-0'), 10);
    } else {
        // Fechar menu
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('opacity-0');
        setTimeout(() => {
            overlay.classList.add('hidden');
            overlay.classList.add('pointer-events-none');
        }, 300);
    }
};

// ==========================================
// 📋 OUTRAS FUNÇÕES
// ==========================================
window.mostrarAvisoUpgrade = function() {
    if(typeof showToast === 'function') showToast("O seu plano atual não possui este recurso. Aceda a Visão Geral para Upgrade.", "info");
    else alert("🔒 Recurso Bloqueado! Faça o Upgrade do seu plano para liberar esta funcionalidade.");
};

window.atualizarMenuSeguro = function(funcionalidadesDoPlano) {
    window.funcionalidadesEquipe = funcionalidadesDoPlano;
    sessionStorage.setItem('bjj_features', JSON.stringify(funcionalidadesDoPlano));
    carregarMenu(); 
};

// ==========================================
// 🚀 INICIALIZAÇÃO
// ==========================================
injetarEstilosGlobais();

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', carregarMenu);
} else {
    carregarMenu();
}
window.sairDoSistema = async function () {
    try {
        sessionStorage.clear();
        localStorage.removeItem("bjj_features");
        localStorage.removeItem("bjj_equipe_nome");
        localStorage.removeItem("bjj_equipe_logo");

        window.location.href = "index.html";
    } catch (error) {
        console.error("Erro ao sair do sistema:", error);
        window.location.href = "index.html";
    }
};
