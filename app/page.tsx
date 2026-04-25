import Navbar from '../components/Navbar';
import Stats from '../components/Stats';
import CampaignCard from '../components/CampaignCard';
import Footer from '../components/Footer';
import PartnerMarquee from '../components/PartnerMarquee';
import TestimonialSlider from '../components/TestimonialSlider';
import Link from 'next/link';

const campaigns = [
  {
    title: "Clean Water Initiative",
    description: "Help us build sustainable water wells in remote villages, providing clean and safe drinking water to hundreds of families.",
    image: "https://loremflickr.com/800/600/water,well?lock=5",
    category: "Health & Water",
    raised: 45000,
    goal: 50000,
    slug: "clean-water-initiative"
  },
  {
    title: "Education for All",
    description: "Providing school supplies, uniforms, and scholarships to children who otherwise wouldn't have access to basic education.",
    image: "https://loremflickr.com/800/600/education,school?lock=6",
    category: "Education",
    raised: 28500,
    goal: 40000,
    slug: "education-for-all"
  },
  {
    title: "Disaster Relief Fund",
    description: "Emergency response fund to deliver immediate medical supplies, food, and shelter to communities affected by natural disasters.",
    image: "https://loremflickr.com/800/600/disaster,rescue?lock=7",
    category: "Emergency",
    raised: 85000,
    goal: 100000,
    slug: "disaster-relief"
  }
];

export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* Typography-Driven Hero Section */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', backgroundColor: 'var(--bg-color)', paddingTop: '160px' }}>
        
        {/* Massive Background Text Stroke */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0, textAlign: 'center', width: '100%' }}>
          <div className="text-stroke" style={{ fontSize: '18vw', opacity: 0.2 }}>HOPE</div>
          <div className="text-stroke" style={{ fontSize: '18vw', opacity: 0.2, transform: 'translateY(-20%)' }}>FRONT</div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          
          <div className="reveal-wrapper">
            <h1 className="reveal-text" style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', lineHeight: 1, marginBottom: 'var(--spacing-md)' }}>
              Humanity <br/>
              <span style={{ fontStyle: 'italic', color: 'var(--secondary-color)' }}>Restored.</span>
            </h1>
          </div>
          
          <div className="reveal-wrapper" style={{ animationDelay: '0.2s' }}>
            <p className="reveal-text" style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto var(--spacing-xl)' }}>
              We are a global collective building sustainable infrastructure, bringing clean water, and securing education for the world's most vulnerable.
            </p>
          </div>
          
          <div className="animate-fade-in-up interactive" style={{ animationDelay: '0.6s' }}>
             <Link href="/campaigns" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem' }}>
              See Our Impact
             </Link>
          </div>
          
          {/* Overlapping Hero Image */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.8s', width: '100%', maxWidth: '900px', height: '40vh', marginTop: 'var(--spacing-xl)', borderRadius: 'var(--border-radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', position: 'relative' }}>
             <img src="https://loremflickr.com/1200/600/village,children,smile?lock=31" alt="Global Charity Impact" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

        </div>
      </section>

      <PartnerMarquee />
      <Stats />
      
      {/* Bento Grid Impact Section */}
      <section className="section" id="about">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>The Power of Collective Action</h2>
          
          <div className="bento-grid">
            {/* Bento 1: Large Image */}
            <div className="bento-item col-span-2 row-span-2 interactive" style={{ padding: 0 }}>
              <img src="https://loremflickr.com/1000/1000/charity,impact?lock=9" alt="Impact" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', background: 'var(--surface-color)', padding: '1rem 2rem', borderRadius: 'var(--border-radius-md)' }}>
                <h4 style={{ margin: 0 }}>Est. 2010</h4>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>A decade of frontline action</p>
              </div>
            </div>
            
            {/* Bento 2: Text Block */}
            <div className="bento-item col-span-2" style={{ background: 'var(--primary-color)', color: 'var(--text-light)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ color: 'var(--text-light)' }}>Sustainable Solutions, Not Band-Aids.</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                We embed ourselves within communities to engineer long-term infrastructure. Clean water wells, earthquake-resistant schools, and medical hubs.
              </p>
            </div>
            
            {/* Bento 3: Stat Block */}
            <div className="bento-item" style={{ background: 'var(--secondary-color)', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontFamily: 'var(--font-playfair), serif', fontWeight: 600, lineHeight: 1 }}>100%</div>
              <p style={{ color: 'rgba(255,255,255,0.9)', margin: 0, marginTop: '0.5rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem' }}>Donations to the field</p>
            </div>
            
            {/* Bento 4: Action Block */}
            <div className="bento-item interactive" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', border: '1px solid rgba(0,0,0,0.1)' }}>
              <Link href="/about" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>→</div>
                <strong style={{ fontSize: '1.2rem', fontFamily: 'var(--font-playfair), serif' }}>Read Our Story</strong>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="campaigns">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--spacing-xl)', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ maxWidth: '600px' }}>
              <h2>Active Campaigns</h2>
              <p style={{ margin: 0 }}>
                Deploy your impact today. Every contribution moves the needle toward a more equitable world.
              </p>
            </div>
            <Link href="/campaigns" className="btn btn-outline interactive" style={{ padding: '0.75rem 2rem' }}>Explore All</Link>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: 'var(--spacing-lg)' 
          }}>
            {campaigns.map((campaign, index) => (
              <CampaignCard key={index} {...campaign} />
            ))}
          </div>
        </div>
      </section>

      <TestimonialSlider />

      <Footer />
    </main>
  );
}
