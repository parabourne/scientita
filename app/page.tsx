"use client";

import { useState, useEffect } from 'react';

export default function ScientiaGlobalPro() {
  const [activeTab, setActiveTab] = useState('haqqında');
  const [showAuth, setShowAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [currentTime, setCurrentTime] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Hamısı');

  // ABŞ Modeli: Məqalələr + İnvestisiya Statusu
  const allArticles = [
    { id: 1, title: "Azərbaycanda Bərpa olunan Enerji Mənbələri", author: "Dr. Elnur Vəliyev", category: "Fizika", inst: "Energetika İnstitutu", investReady: true },
    { id: 2, title: "Genetik Modifikasiya və Tibbi Etika", author: "Dr. Leyla Qasımova", category: "Tibb", inst: "ATU", investReady: false },
    { id: 3, title: "Rəqəmsal İqtisadiyyatda Vergi İslahatları", author: "Prof. Samir Əliyev", category: "İqtisadiyyat", inst: "UNEC", investReady: true },
    { id: 4, title: "Süni İntellekt və Sosioloji Davranışlar", author: "Dr. Murad Həsənov", category: "Sosiologiya", inst: "BDU", investReady: false },
    { id: 5, title: "Kvant Kompüterləri: Gələcəyin Fizikası", author: "Dr. Rauf İsmayılov", category: "Fizika", inst: "AMEA", investReady: true },
  ];

  const filteredArticles = selectedCategory === 'Hamısı' 
    ? allArticles 
    : allArticles.filter(art => art.category === selectedCategory);

  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString());
    const timer = setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#f5f5f7] font-sans text-[#1d1d1f] relative overflow-x-hidden">
      
      {/* NAVİQASİYA (Apple Style) */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-[56px] flex items-center justify-between">
          <div className="flex items-center gap-10">
            <span className="font-bold tracking-tighter text-[24px] bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent cursor-pointer" onClick={() => setActiveTab('haqqında')}>
              Scientia <span className="text-[10px] uppercase tracking-[0.3em] text-blue-600 align-top ml-1">Global</span>
            </span>
            <div className="hidden md:flex gap-8 text-[13px] font-semibold text-gray-500">
              {['haqqında', 'məqalələr', 'laboratoriya', 'qrantlar'].map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`${activeTab === tab ? "text-blue-600" : "hover:text-black"} capitalize transition-all`}>
                  {tab === 'haqqında' ? 'Akademiya' : tab}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:block text-[11px] font-mono text-gray-400">Node: US-EAST-1 // {currentTime}</div>
            <button onClick={() => setShowAuth(true)} className="bg-black text-white px-5 py-1.5 rounded-full text-[13px] font-medium hover:bg-gray-800 transition shadow-lg">Giriş</button>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 pb-24 pt-12">
        
        {/* TAB: AKADEMİYA (HAQQINDA) */}
        {activeTab === 'haqqında' && (
          <div className="space-y-16 animate-in fade-in duration-700">
            {/* İnteraktiv Bilgi Xəritəsi (Simulyasiya) */}
            <div className="relative h-[300px] bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden flex items-center justify-center group">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0071e3_1px,transparent_1px)] [background-size:20px_20px]"></div>
               <div className="relative flex flex-col items-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-2xl z-10 animate-pulse">ELM</div>
                  {/* Elm xətləri */}
                  <div className="absolute w-[250px] h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent rotate-45"></div>
                  <div className="absolute w-[250px] h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent -rotate-45"></div>
                  <div className="absolute -top-10 left-40 px-4 py-2 bg-white border rounded-full text-[10px] font-bold shadow-sm">KVANT FİZİKASI</div>
                  <div className="absolute top-20 -left-40 px-4 py-2 bg-white border rounded-full text-[10px] font-bold shadow-sm">BİOTEXNOLOGİYA</div>
               </div>
               <div className="absolute bottom-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">İnteraktiv Bilgi Xəritəsi</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-blue-600 p-10 rounded-[32px] text-white shadow-xl relative overflow-hidden group">
                  <h3 className="text-3xl font-bold mb-4">ABŞ-Azərbaycan <br/> Elm Körpüsü</h3>
                  <p className="text-blue-100 text-lg opacity-90 leading-relaxed">Dünya səviyyəli laboratoriyalara çıxış, birgə qrantlar və beynəlxalq patentləşmə dəstəyi.</p>
                  <button className="mt-8 bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:scale-105 transition">Əməkdaşlığa başla</button>
               </div>
               <div className="bg-white p-10 rounded-[32px] border border-gray-200 shadow-sm flex flex-col justify-between">
                  <h3 className="text-3xl font-bold text-gray-900">İnvestisiya Paneli</h3>
                  <p className="text-gray-500 text-lg leading-relaxed">Elmi tədqiqatlarınızı kommersiya məhsuluna çevirin. 500+ qlobal investor burada sizi gözləyir.</p>
                  <div className="flex gap-2 mt-6">
                    <span className="w-3 h-3 bg-emerald-500 rounded-full animate-ping"></span>
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-tighter italic">12 layihə hazırda maliyyələşir</span>
                  </div>
               </div>
            </div>
          </div>
        )}

        {/* TAB: QRANTLAR (NEW ABŞ MODEL) */}
        {activeTab === 'qrantlar' && (
          <div className="mt-8 space-y-8 animate-in slide-in-from-bottom-8 duration-500">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <h2 className="text-3xl font-bold tracking-tight">Maliyyələşmə Portal</h2>
              <div className="flex gap-2">
                <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-bold border border-blue-100">Cəmi: ₼ 2.4M</span>
                <span className="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold border border-emerald-100">Global: $ 450k</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Süni İntellektlə Xərçəng Analizi", fund: "₼ 75,000", donor: "Səhiyyə Nazirliyi", type: "Tibb", time: "12 gün qalıb" },
                { title: "Deep-Sea Exploration Node", fund: "$ 120,000", donor: "NASA / NSF", type: "Okeanologiya", time: "24 gün qalıb" },
                { title: "Smart City Grid Automation", fund: "₼ 40,000", donor: "Rəqəmsal İnkişaf", type: "Texnologiya", time: "2 gün qalıb" },
                { title: "Kvant Kriptoqrafiyası", fund: "$ 50,000", donor: "CERN Partner", type: "Təhlükəsizlik", time: "6 gün qalıb" }
              ].map((grant, i) => (
                <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 hover:border-blue-500 transition-all group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1">{grant.type}</span>
                      <h4 className="text-xl font-bold group-hover:text-blue-600 transition">{grant.title}</h4>
                    </div>
                    <div className="text-right">
                      <span className="block text-xl font-black text-gray-900">{grant.fund}</span>
                      <span className="text-[10px] font-bold text-red-500 uppercase">{grant.time}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-6 font-medium">Donor: {grant.donor}</p>
                  <button className="w-full py-3 bg-gray-50 group-hover:bg-black group-hover:text-white rounded-2xl font-bold transition-all">Müraciət et</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: ARXİV (With Investor Status) */}
        {activeTab === 'məqalələr' && (
          <div className="mt-8 space-y-4 animate-in slide-in-from-right-10 duration-500">
            <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
              {['Hamısı', 'Fizika', 'Tibb', 'İqtisadiyyat', 'Sosiologiya'].map(cat => (
                <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-5 py-2 rounded-full text-[13px] font-medium transition-all border ${selectedCategory === cat ? "bg-blue-600 text-white border-blue-600 shadow-lg" : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"}`}>{cat}</button>
              ))}
            </div>

            <div className="grid gap-4">
              {filteredArticles.map(article => (
                <div key={article.id} className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all group relative overflow-hidden">
                  {article.investReady && (
                    <div className="absolute top-0 right-0 px-4 py-1 bg-emerald-500 text-white text-[9px] font-bold uppercase tracking-widest rounded-bl-xl shadow-md">İnvestisiya üçün hazır</div>
                  )}
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded-md uppercase tracking-widest">{article.category}</span>
                      <h4 className="text-[20px] font-semibold text-gray-900 group-hover:text-blue-600 transition">{article.title}</h4>
                      <p className="text-gray-500 text-sm italic">{article.author} • <span className="text-gray-400">{article.inst}</span></p>
                    </div>
                    <button className="p-3 bg-gray-50 group-hover:bg-blue-600 group-hover:text-white rounded-xl transition-all shadow-sm">
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: LABORATORİYA (Canlı Analiz) */}
        {activeTab === 'laboratoriya' && (
          <div className="mt-8 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm relative">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-xl font-bold">Spektro-Analiz Paneli</h3>
                    <p className="text-sm text-gray-400">Canlı sensor axını // Real-time processing</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 bg-gray-50 border rounded-lg text-[10px] font-black uppercase hover:bg-gray-100 transition">EXPORT RAW DATA</button>
                  </div>
                </div>
                <div className="h-[200px] flex items-end gap-3 px-2">
                  {[55, 30, 80, 45, 90, 70, 40, 60, 85, 50, 75, 65].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-blue-700 to-blue-400 rounded-t-lg transition-all duration-500 hover:scale-x-110 relative group" style={{ height: `${h}%` }}>
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[9px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition z-20 font-mono">VAL:{h}.2</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#1d1d1f] text-white p-8 rounded-[32px] shadow-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-4">AI Simulyator</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="text-[10px] text-gray-500 font-bold uppercase block mb-2 tracking-[0.2em]">Neural Load</label>
                      <input type="range" className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                    </div>
                    <button className="w-full py-4 bg-blue-600 rounded-2xl font-bold hover:bg-blue-700 transition active:scale-95 shadow-lg shadow-blue-500/20">Modeli Başlat</button>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/10">
                   <p className="text-[10px] font-mono text-emerald-400 uppercase tracking-tighter animate-pulse">● System: Online</p>
                   <p className="text-[9px] font-mono text-gray-500 mt-1">Uptime: 452:12:08</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <footer className="py-12 border-t border-gray-200 text-center bg-white">
        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.4em]">Scientia Global Research Platform © 2026 // Silicon Valley - Baku Network</p>
      </footer>
    </main>
  );
}