import { School, ShieldCheck } from 'lucide-react';

export default function Achievements() {
  const timelineItems = [
    {
      id: 1,
      icon: <School size={24} className="text-primary shrink-0" />,
      title: 'BS CS: Cybersecurity',
      badge: 'Kean 2027',
      description: 'Pursuing a Bachelor of Science in Computer Science with a specialized focus on Cybersecurity.',
      hoverColor: 'bg-primary shadow-[0_0_10px_rgba(168,232,255,0.5)]',
      borderHover: 'group-hover:border-outline',
      accentColor: 'bg-primary',
      isCert: false,
      status: 'In Progress'
    },
    {
      id: 2,
      icon: <ShieldCheck size={24} className="text-secondary-fixed-dim shrink-0" />,
      title: 'CompTIA Security+',
      badge: <span className="font-code-sm text-secondary-fixed-dim bg-transparent px-sm py-xs border border-secondary-fixed-dim glow-green-badge whitespace-nowrap">In Progress</span>,
      description: 'Currently preparing for the CompTIA Security+ certification to strengthen foundational cybersecurity knowledge in threats, vulnerabilities, security architecture, security operations, and risk management.',
      hoverColor: 'bg-secondary-fixed-dim shadow-[0_0_10px_rgba(42,229,0,0.5)]',
      borderHover: 'group-hover:border-secondary-fixed-dim/50',
      accentColor: 'bg-secondary-fixed-dim',
      isCert: true,
      status: 'In Progress'
    },
    {
      id: 3,
      icon: <ShieldCheck size={24} className="text-primary shrink-0" />,
      title: 'Zero Trust Cyber Associate (ZTCA)',
      badge: <span className="font-code-sm text-primary bg-transparent px-sm py-xs border border-primary glow-blue-badge whitespace-nowrap">Completed</span>,
      description: 'Zscaler certification focused on zero trust cybersecurity concepts and secure access principles.',
      hoverColor: 'bg-primary shadow-[0_0_10px_rgba(168,232,255,0.5)]',
      borderHover: 'group-hover:border-outline',
      accentColor: 'bg-primary',
      isCert: true,
      status: 'Completed'
    },
    {
      id: 4,
      icon: <ShieldCheck size={24} className="text-primary shrink-0" />,
      title: 'Fundamentals of Cybersecurity',
      badge: <span className="font-code-sm text-primary bg-transparent px-sm py-xs border border-primary glow-blue-badge whitespace-nowrap">Completed</span>,
      description: 'Zscaler certification covering foundational cybersecurity concepts and security awareness.',
      hoverColor: 'bg-primary shadow-[0_0_10px_rgba(168,232,255,0.5)]',
      borderHover: 'group-hover:border-outline',
      accentColor: 'bg-primary',
      isCert: true,
      status: 'Completed'
    },
    {
      id: 5,
      icon: <ShieldCheck size={24} className="text-primary shrink-0" />,
      title: 'Introduction to Networking for Cyber Professionals',
      badge: <span className="font-code-sm text-primary bg-transparent px-sm py-xs border border-primary glow-blue-badge whitespace-nowrap">Completed</span>,
      description: 'Zscaler certification covering networking fundamentals for cybersecurity professionals.',
      hoverColor: 'bg-primary shadow-[0_0_10px_rgba(168,232,255,0.5)]',
      borderHover: 'group-hover:border-outline',
      accentColor: 'bg-primary',
      isCert: true,
      status: 'Completed'
    },
    {
      id: 6,
      icon: <ShieldCheck size={24} className="text-primary shrink-0" />,
      title: 'Fortinet Certified Associate Cybersecurity',
      badge: <span className="font-code-sm text-primary bg-transparent px-sm py-xs border border-primary glow-blue-badge whitespace-nowrap">Completed</span>,
      description: 'Fortinet certification validating associate-level cybersecurity knowledge and security fundamentals.',
      hoverColor: 'bg-primary shadow-[0_0_10px_rgba(168,232,255,0.5)]',
      borderHover: 'group-hover:border-outline',
      accentColor: 'bg-primary',
      isCert: true,
      status: 'Completed'
    },
    {
      id: 7,
      icon: <ShieldCheck size={24} className="text-primary shrink-0" />,
      title: 'Fortinet Certified Fundamentals Cybersecurity',
      badge: <span className="font-code-sm text-primary bg-transparent px-sm py-xs border border-primary glow-blue-badge whitespace-nowrap">Completed</span>,
      description: 'Fortinet certification validating foundational cybersecurity knowledge.',
      hoverColor: 'bg-primary shadow-[0_0_10px_rgba(168,232,255,0.5)]',
      borderHover: 'group-hover:border-outline',
      accentColor: 'bg-primary',
      isCert: true,
      status: 'Completed'
    },
    {
      id: 8,
      icon: <School size={24} className="text-primary shrink-0" />,
      title: 'Epsilon Epsilon Omega Honor Society',
      badge: <span className="font-code-sm text-primary bg-transparent px-sm py-xs border border-primary glow-blue-badge whitespace-nowrap">Completed</span>,
      description: 'Educational Opportunity Fund honor society.',
      hoverColor: 'bg-primary shadow-[0_0_10px_rgba(168,232,255,0.5)]',
      borderHover: 'group-hover:border-outline',
      accentColor: 'bg-primary',
      isCert: false,
      status: 'Completed'
    },
    {
      id: 9,
      icon: <School size={24} className="text-primary shrink-0" />,
      title: 'Alpha Alpha Alpha Honor Society',
      badge: <span className="font-code-sm text-primary bg-transparent px-sm py-xs border border-primary glow-blue-badge whitespace-nowrap">Completed</span>,
      description: 'First generation college student honor society - 2025.',
      hoverColor: 'bg-primary shadow-[0_0_10px_rgba(168,232,255,0.5)]',
      borderHover: 'group-hover:border-outline',
      accentColor: 'bg-primary',
      isCert: false,
      status: 'Completed'
    },
    {
      id: 10,
      icon: <School size={24} className="text-primary shrink-0" />,
      title: 'Photographer of the Year',
      badge: <span className="font-code-sm text-primary bg-transparent px-sm py-xs border border-primary glow-blue-badge whitespace-nowrap">Completed</span>,
      description: 'Frank J Cicarell Academy photographer of the year - 2023.',
      hoverColor: 'bg-primary shadow-[0_0_10px_rgba(168,232,255,0.5)]',
      borderHover: 'group-hover:border-outline',
      accentColor: 'bg-primary',
      isCert: false,
      status: 'Completed'
    }
  ];

  const completedCertsCount = timelineItems.filter(item => item.isCert && item.status === 'Completed').length;

  return (
    <>
      <div className="mb-lg border-l-2 border-primary pl-md">
        <h1 className="font-terminal-heading text-primary-container mb-sm">&gt; achievements --timeline</h1>
        <p className="font-code-sm text-outline mb-4">Loading career mission log... [STATUS: SECURE]</p>
        
        <div className="mb-sm flex items-center">
          <span className="font-code-sm text-code-sm text-primary bg-surface/50 px-2 py-1 rounded border border-primary glow-blue-badge">
            [ CERTIFICATIONS COMPLETED: {completedCertsCount} ]
          </span>
        </div>
        
        <div className="font-code-sm text-surface-variant">--- [ EOF ] ---</div>
      </div>

      <div className="relative border-l border-outline-variant ml-[12px] md:ml-[24px] pb-md">
        {timelineItems.map((item) => (
          <div key={item.id} className="relative pl-md md:pl-lg mb-lg group">
            <div className={`absolute -left-[6px] top-1 w-[12px] h-[12px] bg-background border border-${item.accentColor.replace('bg-', '')} rounded-full group-hover:${item.hoverColor} transition-all`}></div>
            <div className={`bg-surface-container-low border border-surface-variant p-md relative overflow-hidden ${item.borderHover} transition-colors`}>
              <div className={`absolute top-0 left-0 w-full h-1 bg-surface-variant group-hover:${item.accentColor} transition-colors`}></div>
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-sm gap-2">
                <div className="flex items-start gap-sm">
                  {item.icon}
                  <h3 className="font-terminal-heading text-on-surface break-words max-w-full">{item.title}</h3>
                </div>
                {item.badge && (
                  typeof item.badge === 'string' 
                    ? <span className="font-code-sm text-secondary-fixed-dim bg-secondary-fixed-dim/10 px-sm py-xs border border-secondary-fixed-dim/30 whitespace-nowrap self-start md:self-auto">{item.badge}</span>
                    : <div className="self-start md:self-auto">{item.badge}</div>
                )}
              </div>
              <p className={`font-body-md text-on-surface-variant ${item.tags || item.subTags ? 'mb-sm' : ''}`}>{item.description}</p>
              
              {item.tags && (
                <div className="flex gap-sm">
                  {item.tags.map(tag => (
                    <span key={tag} className="font-code-sm text-on-surface bg-surface-variant px-sm py-xs border border-outline-variant">{tag}</span>
                  ))}
                </div>
              )}

              {item.subTags && (
                <div className="grid grid-cols-3 gap-sm font-code-sm text-on-surface-variant opacity-70">
                  {item.subTags.map(subTag => (
                    <div key={subTag}>{subTag}</div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-lg font-code-sm text-outline-variant pl-md">
        &gt; _
      </div>
    </>
  );
}
