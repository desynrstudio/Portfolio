

import { Project, Service, Testimonial, ProcessStep, NavItem, PricingCategory } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Work', href: 'work' },
  { label: 'Services', href: 'services' },
  { label: 'Pricing', href: 'pricing' },
  { label: 'Process', href: 'process' },
  { label: 'About', href: 'about' },
  // Contact is accessible via the CTA button, but we can keep it here if desired. 
  // Given the design, we'll focus on the CTA for contact, but keeping it for mobile menu consistency.
  { label: 'Contact', href: 'contact' },
];

export const FAQS = [
  {
    question: "What is your typical project timeline?",
    answer: "Timelines depend on the scope. A standard branding project takes 4-6 weeks, while a full website build can take 6-10 weeks. We provide a detailed schedule during the strategy phase."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we offer monthly retainer packages for maintenance, content updates, and design iterations to ensure your digital presence stays fresh and functional."
  },
  {
    question: "What is your payment structure?",
    answer: "We require a 50% deposit to secure your slot in our calendar, with the remaining 50% due upon project completion and before the final delivery of source files."
  },
  {
    question: "Can you work with existing brand guidelines?",
    answer: "Absolutely. We can adapt to your existing visual language for specific assets, or help evolve your current brand identity for new platforms."
  },
  {
    question: "Do you handle copywriting and content?",
    answer: "We can provide creative direction for copy. For extensive copywriting needs, we partner with specialized copywriters who align with your brand voice."
  }
];

export const GALLERY_ITEMS = [
  { 
    id: 'c1', 
    title: 'Clothing Edit I', 
    category: 'Clothing', 
    image: 'https://i.postimg.cc/vT8ZwkNv/5044c18e-b2b9-43be-a08c-b8c3ade5299a-copied-media-2.png'
  },
  { 
    id: 'c2', 
    title: 'Clothing Edit II', 
    category: 'Clothing', 
    image: 'https://i.postimg.cc/HnSsYzqF/63c2f74c-07fa-4e09-830a-a124acd7f3bc-copied-media-2.png'
  },
  { 
    id: 'c3', 
    title: 'Clothing Edit III', 
    category: 'Clothing', 
    image: 'https://i.postimg.cc/mkd2LVxf/7b5fbd47-5607-459c-899f-6df031f460e5-copied-media-2.png'
  },
  { 
    id: 'c4', 
    title: 'Clothing Edit IV', 
    category: 'Clothing', 
    image: 'https://i.postimg.cc/43VXjsBH/Linen-20260206-123017-0000.png'
  },
  { 
    id: 'c5', 
    title: 'Clothing Edit V', 
    category: 'Clothing', 
    image: 'https://i.postimg.cc/G2RbCVf1/Linen-20260206-123017-0003.png'
  },
  { 
    id: 'c6', 
    title: 'Clothing Edit VI', 
    category: 'Clothing', 
    image: 'https://i.postimg.cc/XJWnbmPS/Vyanmi-Insta-Post-Ad-Modified-20260206-123000-0000.png'
  },
  { 
    id: 'c7', 
    title: 'Clothing Edit VII', 
    category: 'Clothing', 
    image: 'https://i.postimg.cc/pTvPH46w/Vyanmi-Insta-Post-Ad-Modified-20260206-123000-0007.png'
  },
  {
    id: 'cafe1',
    title: 'Cafe Edit I',
    category: 'Cafe',
    image: 'https://i.postimg.cc/8CFytCkj/3a145e03-fd8b-4457-9439-77b455db8b56-copied-media-2.png'
  },
  {
    id: 'cafe2',
    title: 'Cafe Edit II',
    category: 'Cafe',
    image: 'https://i.postimg.cc/zfLd0fDf/46c11e98-f670-41f8-9870-b7ab17784fe1-copied-media-2.png'
  },
  {
    id: 'cafe3',
    title: 'Cafe Edit III',
    category: 'Cafe',
    image: 'https://i.postimg.cc/T3N7Vbxy/660d4976-df03-4171-91fe-f5e2a0a72f8c-copied-media-2.png'
  },
  {
    id: 'cafe4',
    title: 'Cafe Edit IV',
    category: 'Cafe',
    image: 'https://i.postimg.cc/XvZ2QvNq/829ede40-8521-44e6-8181-86700c3e60f0-copied-media-2.png'
  },
  {
    id: 'cafe5',
    title: 'Cafe Edit V',
    category: 'Cafe',
    image: 'https://i.postimg.cc/LsqyNs4X/a9c408b5-42a1-4636-8832-c5cc0269cc8a-copied-media-2.png'
  },
  {
    id: 'w1',
    title: 'Wildlife Edit I',
    category: 'Wildlife',
    image: 'https://i.postimg.cc/F15Y07BM/1-20251129-193538-0000.png'
  },
  {
    id: 'w2',
    title: 'Wildlife Edit II',
    category: 'Wildlife',
    image: 'https://i.postimg.cc/tR1DdwcP/1000208968.png'
  },
  {
    id: 'b1',
    title: 'Banner Edit I',
    category: 'Banners',
    image: 'https://i.postimg.cc/pVnmRMyN/2de2556c-cfaf-4485-a8e1-c52508298a5b-copied-media-2.png'
  },
  {
    id: 'b2',
    title: 'Banner Edit II',
    category: 'Banners',
    image: 'https://i.postimg.cc/QNWFhZCy/fa56a042-7510-42b1-a600-8aaec1dc4db0-copied-media-2.png'
  },
  {
    id: 'b3',
    title: 'Banner Edit III',
    category: 'Banners',
    image: 'https://i.postimg.cc/J7PMfTc9/Black-Elegant-Modern-Personal-Linked-In-Banner-20260206-122910-0000.png'
  },
  {
    id: 's1',
    title: 'Sample Edit I',
    category: 'Samples',
    image: 'https://i.postimg.cc/sDNHSSyk/241a0561-34b1-43d5-a220-49a9a7b2f77e-copied-media-2.png'
  },
  {
    id: 's2',
    title: 'Sample Edit II',
    category: 'Samples',
    image: 'https://i.postimg.cc/4NS2ttss/3aba363e-60be-4147-a99d-0816b272b366-copied-media-2.png'
  },
  {
    id: 's3',
    title: 'Sample Edit III',
    category: 'Samples',
    image: 'https://i.postimg.cc/Gh5gYYd3/567e6af0-5057-4456-9aef-2d8907e00710-copied-media-2.png'
  },
  {
    id: 's4',
    title: 'Sample Edit IV',
    category: 'Samples',
    image: 'https://i.postimg.cc/MKF3RRxL/610012ea-c713-4a46-96a8-7981b96d971b-copied-media-2.png'
  },
  {
    id: 's5',
    title: 'Sample Edit V',
    category: 'Samples',
    image: 'https://i.postimg.cc/DyMpssFt/7117ae73-c0bf-4d25-97a6-69cf45a3fe3a-copied-media-2.png'
  },
  {
    id: 's6',
    title: 'Sample Edit VI',
    category: 'Samples',
    image: 'https://i.postimg.cc/9FMNr152/be4106b5-a84d-4160-9bcf-53a0c23a8592-copied-media-2.png'
  },
  {
    id: 's7',
    title: 'Sample Edit VII',
    category: 'Samples',
    image: 'https://i.postimg.cc/TYwHpQ8n/e64c1a53-2a93-4b43-9087-59be273a6aca-copied-media-2.png'
  },
  {
    id: 's8',
    title: 'Sample Edit VIII',
    category: 'Samples',
    image: 'https://i.postimg.cc/bvj7Db9x/20260206-122938-0000.png'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Visual Identity System',
    category: 'Branding',
    image: 'https://i.postimg.cc/F15Y07BM/1-20251129-193538-0000.png',
    description: 'A comprehensive visual identity.',
    challenge: 'N/A',
    solution: 'N/A',
    outcome: 'N/A',
    stats: []
  },
  {
    id: '2',
    title: 'Modern Aesthetics',
    category: 'Art Direction',
    image: 'https://i.postimg.cc/Gh5gYYd3/567e6af0-5057-4456-9aef-2d8907e00710-copied-media-2.png',
    description: 'Exploration of modern aesthetics.',
    challenge: 'N/A',
    solution: 'N/A',
    outcome: 'N/A',
    stats: []
  },
  {
    id: '3',
    title: 'Editorial Design',
    category: 'Print',
    image: 'https://i.postimg.cc/MKF3RRxL/610012ea-c713-4a46-96a8-7981b96d971b-copied-media-2.png',
    description: 'Editorial layout design.',
    challenge: 'N/A',
    solution: 'N/A',
    outcome: 'N/A',
    stats: []
  }
];

export const SERVICES: Service[] = [
  {
    id: '01',
    title: 'Branding & Identity',
    description: 'We shape how your brand is seen, felt, and remembered. From logo and favicon design to color palettes, typography systems, and brand guidelines, we build the foundation that defines your visual language and personality. Every element is crafted to keep your brand consistent, timeless, and instantly recognizable.',
  },
  {
    id: '02',
    title: 'Social Media Design',
    description: 'We create visuals that make people stop scrolling. From posts, reels, and carousels to complete social media templates and content direction, we design every piece to fit your tone and engage your audience across platforms like Instagram, LinkedIn, and more.',
  },
  {
    id: '03',
    title: 'Social Media Management',
    description: 'We take the wheel of your digital presence. From content calendar planning and scheduling to community engagement and trend monitoring, we ensure your brand stays consistent, active, and deeply connected with your audience.',
  },
  {
    id: '04',
    title: 'Performance Marketing',
    description: 'Data-driven growth that converts. We manage paid advertising campaigns across Meta, Google, and LinkedIn. Our focus is on maximizing ROI, optimizing ad spend, and generating qualified leads that impact your bottom line.',
  },
  {
    id: '05',
    title: 'Packaging Design',
    description: 'We turn products into experiences. Every label, box, and sleeve is designed to reflect your story, stand out on shelves, and connect with your audience the moment they see it.',
  },
  {
    id: '06',
    title: 'Print & Collateral',
    description: 'We bring your brand to life beyond the screen. From business cards and brochures to flyers, menus, and thank-you cards, every print piece is designed with precision, balance, and a strong sense of identity.',
  },
  {
    id: '07',
    title: 'Creative Direction & Consulting',
    description: 'For brands seeking clarity, we help define your visual strategy, refine your tone, and align your design decisions with long-term goals. Whether it’s launching or rebranding, we help you move with direction — not guesswork.',
  },
];

export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    id: '01',
    title: 'Social Media Design',
    purpose: 'Build brand consistency and engagement across all social platforms.',
    items: [
      { name: 'Static visual post', price: '149' },
      { name: 'Carousel Multi-slide creative post', price: '599' },
      { name: 'Instagram Story 1080×1920 engaging visual', price: '129' },
      { name: 'Professional page banner', price: '249' },
      { name: 'Highlight Icons (set of 5)', price: '99', description: 'Minimal icons for story highlights' },
    ]
  },
  {
    id: '02',
    title: 'Motion & Video Design',
    purpose: 'Add movement and emotion through dynamic visuals.',
    items: [
      { name: 'Reel Design / Edit Vertical format', price: '299' },
      { name: 'Short Video (up to 5 mins)', price: '599', description: 'Edited, branded' },
      { name: 'Thumbnail Design', price: '149', description: 'Custom video thumbnail' },
      { name: 'Long Video (10–15 mins)', price: '1999', description: 'Extended YouTube or brand video' },
    ],
    addons: [
      'Animation Layer / Text Motion → +₹10 per slide',
      'Subtitles / Captions → +₹50 per video',
      'Rush Delivery (24 hrs) → +₹199'
    ]
  },
  {
    id: '03',
    title: 'Branding & Identity',
    purpose: 'Define and express your brand’s core identity.',
    items: [
      { name: 'Logo Design + Variants', price: '1999' },
      { name: 'Business Card Design', price: '299', description: 'Front and back layout' },
      { name: 'Packaging Design', price: '799', description: 'Box, label, or product design' },
      { name: 'Brand Kit', price: '2499', description: 'Logo, color palette, typography' },
      { name: 'Brand Mockups', price: '499', description: 'Visual brand presentation' },
    ],
    addons: [
      'Alternate Logo Versions → +₹299',
      'Full Brand Style Guide → +₹499'
    ]
  },
  {
    id: '04',
    title: 'Business Collateral',
    purpose: 'Ensure consistent visuals across all professional touchpoints.',
    items: [
      { name: 'Letterhead', price: '249', description: 'Digital or print-ready format' },
      { name: 'Invoice Template', price: '199', description: 'Editable format' },
      { name: 'Presentation Template', price: '599', description: 'Slide deck for client use' },
      { name: 'Email Signature', price: '149', description: 'Branded signature design' },
    ]
  },
  {
    id: '05',
    title: 'Marketing Assets',
    purpose: 'Promote and amplify campaigns through attractive designs.',
    items: [
      { name: 'Poster (Digital/Print)', price: '249', description: 'Event or campaign poster' },
      { name: 'Flyer / Pamphlet', price: '299', description: 'Single or double-sided' },
      { name: 'Sale Banner / Ad', price: '199', description: 'Seasonal or promotional banner' },
      { name: 'Event Announcement', price: '199', description: 'Digital announcement layout' },
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Discovery',
    description: 'We dive deep into your brand DNA, researching competitors and identifying your unique voice.',
  },
  {
    id: 2,
    title: 'Strategy',
    description: 'We build a roadmap. No guessing. Just clear objectives, user personas, and visual direction.',
  },
  {
    id: 3,
    title: 'Design',
    description: 'The magic happens. We craft high-fidelity visuals, iterating until perfection is achieved.',
  },
  {
    id: 4,
    title: 'Development',
    description: 'We bring designs to life with clean code, smooth animations, and pixel-perfect implementation.',
  },
  {
    id: 5,
    title: 'Launch',
    description: 'We push to production, monitor performance, and ensure your brand lands with maximum impact.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CMO',
    company: 'TechFlow',
    quote: "Desynr transformed our outdated image into something visionary. The team's attention to detail is unmatched.",
    image: 'https://picsum.photos/100/100?random=10',
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Founder',
    company: 'Velvet Fintech',
    quote: "Professional, fast, and incredibly creative. They didn't just design a website; they designed a feeling.",
    image: 'https://picsum.photos/100/100?random=11',
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Director',
    company: 'ArtSpace',
    quote: "The ROI we saw after the rebrand was immediate. Desynr understands how to mix art with business goals.",
    image: 'https://picsum.photos/100/100?random=12',
  },
];

export const TERMS_AND_CONDITIONS = [
    {
        title: "1. Introduction & Acceptance",
        content: `By engaging Desynr ("we," "our," or "us") for any creative service, the client ("you," "your") agrees to these Terms and Conditions. Please read them carefully before entering into any project or collaboration. These terms govern all projects, deliverables, communications, and relationships between Desynr and the client. Engaging Desynr's services constitutes a full understanding and acceptance of these Terms and Conditions. Clients are responsible for reviewing these terms prior to project initiation.`
    },
    {
        title: "2. Services Provided",
        content: `Desynr offers design and creative services, including but not limited to branding, logo design, social media graphics, promotional creatives, packaging, and website graphics. Any additional service or request outside the agreed-upon scope will be quoted and billed separately.`
    },
    {
        title: "3. Project Scope & Deliverables",
        content: `All project details, deliverables, and timelines will be defined, discussed, and confirmed before work begins. Any additions, changes, or major revisions outside the agreed may result in extra charges and will be billed separately. Final deliverables and files will be released only after full and final payment is received.`
    },
    {
        title: "4. Payments, Fees & Refund",
        content: `Advance Payment: A 50% advance payment is required to begin any project. The remaining 50% is due upon completion, before the final delivery of files.\n\nPricing & Quotes: All fees and prices are exclusive of applicable taxes. Quotes provided by Desynr are valid for 10 business days.\n\nPayment Methods: Accepted payment methods include UPI, bank transfer, or other methods approved by Desynr. Clients must share payment receipts or confirmations for record-keeping purposes.\n\nLate Payments: Late payments will attract a 2% monthly interest charge.\n\nRefunds: Refunds are not applicable once the design process has begun. If a project is cancelled before work begins, the advance payment may be refunded partially, based on administrative effort.\n\nRight to Withhold & Recall Services: Desynr reserves the right to withhold all deliverables, source files, and any related materials until all outstanding dues are cleared. For ongoing services (e.g., website hosting), Desynr reserves the right to suspend or recall the service (including taking a website offline) until the full outstanding balance, including any late fees, is paid.`
    },
    {
        title: "5. Revisions & Proofreading Policy",
        content: `Each project includes a defined number of revisions as per the proposal offer. Additional revisions beyond this limit will be charged separately. Minor edits (like text changes or color adjustments) are included; major redesigns or concept changes count as new revisions.\n\nFinal Proofreading & Approval: Desynr will make every effort to ensure all deliverables are free of errors. However, the client is solely responsible for the final proofreading and approval of all content, including spelling, grammar, and technical details, before any work is published or sent to print. The client's written approval of a final deliverable (e.g., via email message) constitutes acceptance of all content as correct, and Desynr is not liable for any errors or omissions discovered after this approval.`
    },
    {
        title: "6. Client Representative & Responsibilities",
        content: `Client Representative: The client agrees to designate a single person ("Client Representative") with full authority to provide instructions, feedback, and approvals to Desynr. All approvals and feedback received from the Client Representative are final and binding. The client is responsible for ensuring this representative is available to provide timely feedback to maintain the project schedule.\n\nClient-Provided Materials: The client agrees to provide all necessary content, materials, and information (such as logos, brand guidelines, images, and text) required for the project in a timely manner. Delays in providing these materials may extend the project timeline.\n\nIndemnity for Client-Provided Materials: The client guarantees that all elements of text, graphics, photos, designs, trademarks, or other artwork furnished to Desynr for inclusion in the project are either owned by the client, or that the client has permission from the rightful owner to use each of these elements. The client agrees to indemnify and hold harmless Desynr from any and all claims, damages, liabilities, and costs (including legal fees) arising from any claim of infringement, defamation, or breach of copyright/trademark related materials provided by the client.`
    },
    {
        title: "7. Ownership & Intellectual Property (IP)",
        content: `Ownership Transfer: Ownership of final, approved designs transfers to the client only after full and final payment has been received.\n\nOwnership Retention: Until full payment is received, Desynr retains ownership of all work and deliverables. Clients may not use, publish, resell, or distribute any unpaid or in-progress work.\n\nRejected Concepts: All unused or rejected design concepts, mockups, and preliminary work remain the full and exclusive intellectual property of Desynr. The client is strictly prohibited from using, replicating, or sharing any rejected concepts. Any unauthorized use of rejected concepts will be considered a breach of this agreement and will be invoiced at 200% of the total project value.\n\nPortfolio Rights: Desynr retains the right to display completed works in our portfolio, website, or social media, unless otherwise requested in writing by the client.\n\nThird-Party Assets: If third-party assets (e.g., stock photos, fonts) are used, Desynr will ensure they are properly licensed. However, clients are responsible for obtaining any extended or commercial licenses required for their specific use cases.`
    },
    {
        title: "8. Timelines, Communication & Delivery",
        content: `Project timelines may shift and be extended due to delays in client responses, feedback, or provision of materials.\n\nWorking Hours: Desynr's official working hours are Monday - Saturday, 2:00 PM - 10:00 PM (IST).\n\nCommunication: Official communication will primarily take place via email or approved messaging channels.\n\nFile Formats & Storage: Final files will be delivered in commonly used formats (e.g., PNG, JPG, PDF). Editable source files (e.g., PSD, AI) will only be provided if explicitly included in the project package. Desynr will retain project files for 30 days after final delivery; retrieval after this period may incur a fee. Desynr is not responsible for maintaining backup copy after this 30-day period.`
    },
    {
        title: "9. Termination, Cancellation & Dormancy",
        content: `Project Dormancy: A project will be considered dormant or abandoned if there is no communication from the client for 30 consecutive days. In such cases, Desynr reserves the right to close the project. The advance payment will be retained, and any completed work will be invoiced. Reactivation may require a re-initiation fee.\n\nTermination by Desynr: Desynr reserves the right to terminate this agreement for reasons including, but not limited to: repeated late payments, a serious breach of these terms, unprofessional or abusive conduct. Upon termination, a final invoice for all work completed to date will be issued.\n\nTermination by Client & "Kill Fee": The client may terminate this agreement at any time by providing written notice. In the event of termination by the client, Desynr shall be compensated for all work completed up to the date of termination. If canceled mid-project, payment for completed work will be retained, and no refunds will apply. Furthermore, a "kill fee" of 25% of the total project value will be invoiced to the client to compensate for the loss of project booking.`
    },
    {
        title: "10. Legal Clauses & Disclaimer",
        content: `Confidentiality: Both parties agree to maintain confidentiality regarding any proprietary or sensitive information shared during the project, and for a period of two (2) years post-completion.\n\nLimitation of Liability: Desynr shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our designs. Desynr's total liability for any claim shall be capped at the total project fees paid by the client for that specific project.\n\nDisclaimer of Warranty: Desynr provides creative services and does not guarantee any specific business outcome, increase in sales, or market results. The client acknowledges that service is creative and subjective, and that Desynr is not responsible for the commercial success or failure of the client's project.\n\nNon-Disparagement: Clients agree not to post defamatory or misleading statements about Desynr. Disputes must be handled privately through the channels outlined in the Dispute resolution clause.\n\nAI & Automation: Desynr may use AI tools to improve efficiency. All outputs are reviewed, and the use of AI tools does not reduce originality.\n\nForce Majeure: Desynr shall not be held responsible for delays or failure to deliver services due to events beyond our reasonable control, including natural disasters, technical failures, illness, or internet disruptions.\n\nSubcontracting: Desynr reserves the right to engage other professional designers or agencies/subcontractors to perform any or all of the services under this agreement, while remaining the client's sole point of contact.\n\nDispute Resolution & Governing Law: In the event of any dispute, the parties agree to first attempt to resolve it amicably through direct negotiation. If unresolved within 14 days, the parties agree to attempt to resolve it through mediation. This agreement shall be governed by Indian law. Any legal action or proceeding shall be brought exclusively in the courts of Mumbai, India.`
    },
    {
        title: "11. General Clauses",
        content: `No Partnership: This agreement does not create a partnership, joint venture, or employment relationship.\n\nAssignment: Clients may not assign rights or obligations under this agreement without Desynr's written consent.\n\nSeverability: If any provision of these terms is found to be invalid, the rest of the provisions remain in full force and effect.\n\nUpdates to Terms: Desynr reserves the right to update or modify these terms at any time. Updated versions apply to future engagements.`
    },
    {
        title: "12. Contact Information",
        content: `For any questions, concerns, or inquiries, please contact us:\nEmail: desynrstudio@gmail.com\nInstagram: @de_synr\nPhone: PLEASE REQUEST ON MAIL OR INSTA DM\n\nEngaging Desynr's services constitutes full understanding and acceptance of these Terms and Conditions. Clients are responsible for reviewing these terms prior to project initiation.`
    }
];