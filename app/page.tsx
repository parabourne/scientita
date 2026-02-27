"use client";

import { useState } from 'react';

export default function AdvancedSciencePortal() {
  const [activeTab, setActiveTab] = useState('haqqında');
  const [showAuth, setShowAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="min-h-screen bg-[#f5f5f7] font-sans text-[#1d1d1f] relative overflow-x-hidden">
      
      {/* Naviqasiya Paneli */}
      <nav className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-[52px] flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="font-bold tracking-tighter text-[22px] bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Scientia</span>
            <div className="hidden md:flex gap-6 text-[13px] font-medium text-gray-600">
              <button onClick={() => setActiveTab('haqqında')} className={activeTab === 'haqqında' ? "text-blue-600" : "hover:text-black transition"}>Akademiya</button>
              <button onClick={() => setActiveTab('məqalələr')} className={activeTab === 'məqalələr' ? "text-blue-600" : "hover:text-black transition"}>Arxiv</button>
              <button className="hover:text-black transition">Laboratoriya</button>
            </div>
          </div>
          <button 
            onClick={() => setShowAuth(true)}
            className="bg-[#0071e3] text-white px-5 py-1.5 rounded-full text-[13px] font-medium hover:bg-[#0077ed] transition shadow-md shadow-blue-200"
          >
            Giriş
          </button>
        </div>
      </nav>

      {/* Hero & Search */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-12 text-center">
        <h1 className="text-[52px] md:text-[64px] font-bold tracking-tight leading-[1.1] mb-6">
          Elmin rəqəmsal <br/> <span className="text-blue-600">ekosistemi.</span>
        </h1>
        
        <div className="relative max-w-2xl mx-auto mt-10">
          <input 
            type="text" 
            placeholder="Məqalə, alim və ya tədqiqat sahəsi axtar..."
            className="w-full h-[60px] pl-14 pr-6 rounded-2xl border-none bg-white shadow-2xl shadow-gray-200 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-[17px]"
          />
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        {activeTab === 'haqqında' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 animate-in fade-in zoom-in-95 duration-700">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-10 rounded-[32px] text-white shadow-xl">
              <h3 className="text-[28px] font-semibold mb-4">Alimlər üçün Platforma</h3>
              <p className="text-blue-100 text-[18px] leading-relaxed">
                Scientia sizə öz elmi işlərinizi dünyada tanıtmaya, həmyaşıdlarınızla əməkdaşlıq etməyə və qrant imkanlarını izləməyə imkan verir.
              </p>
              <button className="mt-8 bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition">Daha çox</button>
            </div>
            <div className="bg-white p-10 rounded-[32px] border border-gray-200 shadow-sm">
              <h3 className="text-[28px] font-semibold mb-4 text-gray-900">Açıq Nəşriyyat</h3>
              <p className="text-gray-500 text-[18px] leading-relaxed">
                Məqalələrinizi PDF formatında yükləyin, DOI nömrəsi alın və elmi icma tərəfindən rəy (peer-review) qazanma şansı əldə edin.
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-12 space-y-4 animate-in slide-in-from-right-10 duration-500">
            <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
              {['Hamısı', 'Fizika', 'Tibb', 'İqtisadiyyat', 'Sosiologiya'].map(cat => (
                <button key={cat} className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-[13px] whitespace-nowrap hover:bg-gray-100">{cat}</button>
              ))}
            </div>
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-lg transition-all group">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">Tədqiqat İşi</span>
                    <h4 className="text-[20px] font-semibold mt-1 group-hover:text-blue-600 transition">Azərbaycanda Bərpa olunan Enerji Mənbələri №{i}</h4>
                    <p className="text-gray-500 mt-2 text-sm italic">Dr. Elnur Vəliyev • Energetika İnstitutu</p>
                  </div>
                  <button className="p-2 hover:bg-blue-50 rounded-full text-blue-600 transition">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* AUTH MODAL (Giriş/Qeydiyyat Pəncərəsi) */}
      {showAuth && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-[420px] rounded-[30px] p-10 shadow-2xl relative animate-in zoom-in-95 duration-300">
            <button onClick={() => setShowAuth(false)} className="absolute top-6 right-6 text-gray-400 hover:text-black">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            
            <h2 className="text-[30px] font-bold text-center mb-2">{isLogin ? "Daxil ol" : "Hesab yarat"}</h2>
            <p className="text-center text-gray-500 mb-8">{isLogin ? "Elmi fəaliyyətinə davam et." : "Akademik şəbəkəyə qoşul."}</p>
            
            <form className="space-y-4">
              {!isLogin && (
                <div className="flex gap-4">
                  <input type="text" placeholder="Ad" className="w-1/2 h-[50px] px-4 rounded-xl border border-gray-200 focus:border-blue-500 outline-none"/>
                  <input type="text" placeholder="Soyad" className="w-1/2 h-[50px] px-4 rounded-xl border border-gray-200 focus:border-blue-500 outline-none"/>
                </div>
              )}
              <input type="email" placeholder="E-poçt" className="w-full h-[50px] px-4 rounded-xl border border-gray-200 focus:border-blue-500 outline-none"/>
              <input type="password" placeholder="Şifrə" className="w-full h-[50px] px-4 rounded-xl border border-gray-200 focus:border-blue-500 outline-none"/>
              <button className="w-full h-[54px] bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 transition">
                {isLogin ? "Giriş et" : "Qeydiyyatı tamamla"}
              </button>
            </form>
            
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="w-full text-center mt-6 text-sm text-blue-600 hover:underline font-medium"
            >
              {isLogin ? "Hesabınız yokdur? Yaradın" : "Artıq hesabınız var? Giriş edin"}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

