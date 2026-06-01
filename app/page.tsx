'use client'
import Image from 'next/image'

const solutions = [
  { icon: '🏥', title: 'LTC Operations', desc: 'AI-powered resident documentation, incident reporting, care plans, and regulatory compliance — built for long-term care leadership.', tag: 'Long-Term Care' },
  { icon: '🏠', title: 'Home Health AI', desc: 'VDASR.ai™ — real-time AI documentation with OASIS-E1 integration, 9-panel clinical assessment, and visit frequency automation.', tag: 'Home Health' },
  { icon: '👥', title: 'Workforce Intelligence', desc: 'AI tools that reduce nurse burnout, streamline onboarding, and help healthcare organizations retain their best clinical talent.', tag: 'HR & Retention' },
  { icon: '📋', title: 'Compliance & QA', desc: 'Automated audit trails, survey-ready documentation, and regulatory reporting that keeps your organization protected.', tag: 'Compliance' },
  { icon: '📊', title: 'Clinical Analytics', desc: 'AI-generated insights across your patient population — identifying trends, gaps, and opportunities for better outcomes.', tag: 'Analytics' },
  { icon: '🎓', title: 'AI Education', desc: 'Training programs that help your clinical staff adopt and confidently use AI tools in their daily workflows.', tag: 'Education' },
]

const stats: [string, string][] = [
  ['27+', 'Years nursing experience'],
  ['3x',  'Faster documentation'],
  ['9',   'AI clinical panels'],
  ['100%','OASIS-E1 compliant'],
]

const navLinks = ['Solutions', 'About', 'Platforms', 'Contact']
const marqueeItems = ['AI Documentation','Workforce Transformation','LTC Solutions','Home Health AI','OASIS Automation','Clinical Intelligence','Care Plan AI','Compliance Tools']

export default function Page() {
  return (
    <main style={{ fontFamily: 'system-ui,sans-serif', background: 'var(--cream)' }}>
      <style>{`
        .sol-card { background:#fff; border-radius:14px; padding:24px; border:1.5px solid var(--border); transition:all .2s; cursor:default; }
        .sol-card:hover { border-color:var(--teal); transform:translateY(-3px); }
        .nav-link { font-size:13px; color:var(--text-muted); text-decoration:none; font-weight:500; }
        .nav-link:hover { color:var(--teal); }
      `}</style>

      <nav style={{ background:'#fff', borderBottom:'1px solid var(--border)', padding:'0 5%', height:'60px', display:'flex', alignItems:'center', justifyContent:'space-between', position:'sticky', top:0, zIndex:50 }}>
        <div style={{ fontFamily:'Georgia,serif', fontSize:'15px', fontWeight:700, color:'var(--navy)' }}>
          Limitless <span style={{ color:'var(--teal)' }}>Healthcare AI™</span>
        </div>
        <div style={{ display:'flex', gap:'24px' }}>
          {navLinks.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
          ))}
        </div>
        <button style={{ background:'var(--teal)', color:'#fff', border:'none', padding:'9px 20px', borderRadius:'6px', fontSize:'12px', fontWeight:600, cursor:'pointer' }}>
          Book a Demo
        </button>
      </nav>

      <section style={{ background:'linear-gradient(135deg,#0A2540 0%,#0F6E56 100%)', padding:'80px 5% 64px', color:'#fff' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'48px', alignItems:'center', maxWidth:'1100px', margin:'0 auto' }}>
          <div>
            <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'rgba(29,158,117,.25)', border:'1px solid rgba(29,158,117,.5)', borderRadius:'20px', padding:'5px 14px', fontSize:'11px', fontWeight:700, color:'#9FE1CB', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:'20px' }}>
              <span style={{ width:'7px', height:'7px', background:'#22C55E', borderRadius:'50%', display:'inline-block' }} />
              Healthcare AI Innovation
            </div>
            <h1 style={{ fontFamily:'Georgia,serif', fontSize:'clamp(28px,4.5vw,52px)', fontWeight:700, lineHeight:1.1, marginBottom:'16px' }}>
              AI That Transforms<br />
              <span style={{ color:'#9FE1CB', fontStyle:'italic' }}>Healthcare Operations</span>
            </h1>
            <p style={{ fontSize:'17px', color:'rgba(255,255,255,.75)', lineHeight:1.7, marginBottom:'32px', maxWidth:'500px' }}>
              Purpose-built AI solutions for long-term care, home health, and healthcare organizations. Reduce burden. Improve outcomes. Empower your workforce.
            </p>
            <div style={{ display:'flex', gap:'12px', flexWrap:'wrap' }}>
              <button style={{ background:'var(--teal-mid)', color:'#fff', border:'none', padding:'13px 28px', borderRadius:'8px', fontSize:'14px', fontWeight:600, cursor:'pointer' }}>Explore Solutions</button>
              <button style={{ background:'transparent', color:'#fff', border:'1.5px solid rgba(255,255,255,.35)', padding:'13px 28px', borderRadius:'8px', fontSize:'14px', fontWeight:500, cursor:'pointer' }}>Book a Demo</button>
            </div>
          </div>
          <div style={{ position:'relative' }}>
            <div style={{ borderRadius:'20px', overflow:'hidden', aspectRatio:'4/3', position:'relative', background:'rgba(255,255,255,.1)' }}>
              <Image src="/images/founder-working.jpg" alt="Leonilla Addeh, healthcare AI innovator" fill style={{ objectFit:'cover', objectPosition:'center 35%' }} />
            </div>
            <div style={{ position:'absolute', bottom:'-16px', left:'20px', background:'#fff', borderRadius:'12px', padding:'12px 18px', boxShadow:'0 8px 32px rgba(0,0,0,.15)' }}>
              <div style={{ fontSize:'11px', fontWeight:700, color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:'.06em', marginBottom:'4px' }}>Avg. Documentation Time Saved</div>
              <div style={{ fontFamily:'Georgia,serif', fontSize:'32px', fontWeight:700, color:'var(--teal)', lineHeight:1 }}>
                12+ hrs<span style={{ fontSize:'16px', color:'var(--text-muted)' }}>/week</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ background:'var(--teal)', padding:'12px 0', overflow:'hidden' }}>
        <div className="marquee-track" style={{ display:'flex', whiteSpace:'nowrap' }}>
          {[...marqueeItems, ...marqueeItems].map((t, i) => (
            <span key={i} style={{ fontSize:'12px', fontWeight:700, color:'#fff', letterSpacing:'.1em', textTransform:'uppercase', padding:'0 24px', opacity:.85 }}>
              {t} <span style={{ color:'rgba(255,255,255,.4)' }}>•</span>
            </span>
          ))}
        </div>
      </div>

      <section className="fade-up" style={{ padding:'64px 5%', background:'#fff' }}>
        <div style={{ textAlign:'center', marginBottom:'40px' }}>
          <p style={{ fontSize:'11px', fontWeight:700, color:'var(--teal)', textTransform:'uppercase', letterSpacing:'.18em', marginBottom:'8px' }}>The Impact</p>
          <h2 style={{ fontFamily:'Georgia,serif', fontSize:'clamp(24px,3vw,36px)', fontWeight:700, color:'var(--navy)' }}>Built from 27 years on the clinical front line</h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:'16px', maxWidth:'900px', margin:'0 auto' }}>
          {stats.map(([n, d]) => (
            <div key={n} style={{ textAlign:'center', padding:'28px 16px', background:'var(--teal-light)', borderRadius:'14px', border:'1px solid var(--border)' }}>
              <div style={{ fontFamily:'Georgia,serif', fontSize:'40px', fontWeight:700, color:'var(--teal)', lineHeight:1 }}>{n}</div>
              <div style={{ fontSize:'12px', color:'var(--text-muted)', marginTop:'6px', fontWeight:500 }}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="solutions" className="fade-up" style={{ padding:'64px 5%', background:'var(--cream)' }}>
        <p style={{ fontSize:'11px', fontWeight:700, color:'var(--teal)', textTransform:'uppercase', letterSpacing:'.18em', marginBottom:'8px' }}>Solutions</p>
        <h2 style={{ fontFamily:'Georgia,serif', fontSize:'clamp(24px,3.5vw,38px)', fontWeight:700, color:'var(--navy)', marginBottom:'12px' }}>
          AI built for how healthcare <span style={{ color:'var(--teal)', fontStyle:'italic' }}>actually works</span>
        </h2>
        <p style={{ fontSize:'15px', color:'var(--text-mid)', maxWidth:'520px', marginBottom:'40px', lineHeight:1.7 }}>
          Not generic AI retrofitted for healthcare. Purpose-built platforms by a nurse with 27 years of clinical experience.
        </p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'18px' }}>
          {solutions.map(c => (
            <div key={c.title} className="sol-card">
              <div style={{ fontSize:'24px', marginBottom:'12px' }}>{c.icon}</div>
              <h3 style={{ fontFamily:'Georgia,serif', fontSize:'17px', fontWeight:700, color:'var(--navy)', marginBottom:'8px' }}>{c.title}</h3>
              <p style={{ fontSize:'13px', color:'var(--text-mid)', lineHeight:1.6, marginBottom:'14px' }}>{c.desc}</p>
              <span style={{ fontSize:'11px', fontWeight:600, color:'var(--teal)', background:'var(--teal-light)', padding:'4px 10px', borderRadius:'10px' }}>{c.tag}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="fade-up" style={{ padding:'64px 5%', background:'#fff' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'56px', alignItems:'center', maxWidth:'1000px', margin:'0 auto' }}>
          <div style={{ position:'relative' }}>
            <div style={{ borderRadius:'18px', overflow:'hidden', aspectRatio:'3/4', position:'relative', background:'#e8f5f0' }}>
              <Image src="/images/founder.jpg" alt="Leonilla Addeh — healthcare AI founder" fill style={{ objectFit:'cover', objectPosition:'center top' }} />
            </div>
            <div style={{ position:'absolute', top:'20px', right:'-14px', background:'#fff', border:'1px solid var(--border)', borderRadius:'9px', padding:'8px 14px', fontSize:'12px', fontWeight:700, color:'var(--navy)' }}>
              RN, MSN-Ed <span style={{ color:'var(--teal)' }}>· 27 Yrs</span>
            </div>
          </div>
          <div>
            <p style={{ fontSize:'11px', fontWeight:700, color:'var(--teal)', textTransform:'uppercase', letterSpacing:'.18em', marginBottom:'8px' }}>The Founder</p>
            <h2 style={{ fontFamily:'Georgia,serif', fontSize:'clamp(24px,3vw,36px)', fontWeight:700, color:'var(--navy)', marginBottom:'16px' }}>
              Leonilla Addeh, RN MSN-Ed<br />
              <span style={{ color:'var(--teal)', fontStyle:'italic' }}>Nurse. Innovator. Builder.</span>
            </h2>
            <p style={{ fontSize:'15px', color:'var(--text-mid)', lineHeight:1.8, marginBottom:'16px' }}>
              With 27 years of nursing experience spanning field nursing, auditing, surveying, and healthcare leadership, Leonilla does not just understand healthcare — she built her AI tools inside it.
            </p>
            <p style={{ fontSize:'15px', color:'var(--text-mid)', lineHeight:1.8, marginBottom:'24px' }}>
              Every product at Limitless Healthcare AI is built against real clinical standards, corrected against real-world nursing practice, and validated by someone who has lived it.
            </p>
            <a href="https://limitlessintelligencesystems.com" style={{ display:'inline-flex', alignItems:'center', gap:'6px', fontSize:'13px', fontWeight:600, color:'var(--teal)', textDecoration:'none' }}>
              Learn more about the ecosystem →
            </a>
          </div>
        </div>
      </section>

      <section style={{ background:'linear-gradient(135deg,#0A2540,#0F6E56)', padding:'64px 5%', textAlign:'center', color:'#fff' }}>
        <h2 style={{ fontFamily:'Georgia,serif', fontSize:'clamp(24px,3.5vw,40px)', fontWeight:700, marginBottom:'12px' }}>
          Ready to transform your healthcare operations?
        </h2>
        <p style={{ fontSize:'16px', color:'rgba(255,255,255,.7)', maxWidth:'480px', margin:'0 auto 32px', lineHeight:1.7 }}>
          Book a demo and see how AI can reduce documentation burden, improve compliance, and empower your clinical team.
        </p>
        <button style={{ background:'var(--teal-mid)', color:'#fff', border:'none', padding:'14px 36px', borderRadius:'8px', fontSize:'15px', fontWeight:600, cursor:'pointer' }}>
          Book a Free Demo
        </button>
      </section>

      <footer style={{ background:'#0A2540', padding:'32px 5%', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'16px', borderTop:'1px solid rgba(255,255,255,.1)' }}>
        <div>
          <div style={{ fontFamily:'Georgia,serif', fontSize:'14px', fontWeight:700, color:'#fff', marginBottom:'4px' }}>Limitless Healthcare AI™</div>
          <div style={{ fontSize:'12px', color:'rgba(255,255,255,.4)' }}>A Limitless Intelligence Systems™ Platform</div>
        </div>
        <div style={{ fontSize:'11px', color:'rgba(255,255,255,.3)' }}>© 2026 Limitless Healthcare AI™. All rights reserved.</div>
      </footer>
    </main>
  )
}
