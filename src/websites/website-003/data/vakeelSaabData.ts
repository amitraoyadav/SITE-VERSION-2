export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconSrc: string;
  features: string[];
  coreAreas: string[];
  faqs: { question: string; answer: string }[];
}

export const LEGAL_SERVICES_DATA: ServiceItem[] = [
  {
    id: 'property-lawyer',
    title: 'Property Lawyer',
    shortDesc: 'Real estate transactions, property disputes, land records, documentation, and title verification.',
    fullDesc: 'Connect anonymously with verified property and real estate lawyers across India for title verification, ancestral property partition, RERA complaints, builder delay disputes, sale deed drafting, and illegal possession recovery.',
    iconSrc: '/vakeelsaab/services-icon/real-estate_7238320 1.svg',
    features: ['Property Documentation', 'Title Verification', 'Real Estate Transactions', 'Land Disputes'],
    coreAreas: [
      'Property Title Verification & Due Diligence',
      'Ancestral Property & Family Partition Suits',
      'RERA Complaints & Builder Buyer Disputes',
      'Sale Deed, Gift Deed & Lease Agreement Drafting',
      'Landlord-Tenant Eviction & Rent Control Matters',
      'Illegal Possession & Injunction Suits',
      'Mutation, Registry & Revenue Record Disputes',
      'Commercial Real Estate & Industrial Land Allotment'
    ],
    faqs: [
      {
        question: 'How do I verify if a property has a clear and marketable title?',
        answer: 'A property lawyer conducts a 30-year title search at the Sub-Registrar office, verifies encumbrance certificates (EC), checks mutation and revenue records, and reviews RERA registration and municipal approvals before you sign an agreement to sell.'
      },
      {
        question: 'Can I claim my share in ancestral property without going to court immediately?',
        answer: 'Yes. You can begin with an anonymous legal consultation to understand your coparcenary rights under the Hindu Succession Act or applicable personal laws, issue a formal legal notice for partition, or negotiate a registered Family Settlement Deed.'
      },
      {
        question: 'What can I do if a builder delays possession of my flat?',
        answer: 'Under the Real Estate (Regulation and Development) Act (RERA), buyers can file a complaint seeking either a full refund with statutory interest or monthly interest for every month of delay until possession is handed over.'
      }
    ]
  },
  {
    id: 'criminal-defense-lawyer',
    title: 'Criminal Lawyer',
    shortDesc: 'Criminal defense, bail applications, FIR guidance, and representation in criminal proceedings.',
    fullDesc: 'Get urgent, 100% confidential legal counsel from experienced criminal defense advocates for Anticipatory Bail, Regular Bail, FIR Registration or Quashing (Section 482 CrPC / BNSS), cheque bounce (NI Act 138), and trial defense.',
    iconSrc: '/vakeelsaab/services-icon/crime_3839555 1.svg',
    features: ['Criminal Defense', 'Bail Applications', 'FIR Guidance', 'Court Representation'],
    coreAreas: [
      'Anticipatory Bail & Regular Bail Applications',
      'FIR Quashing before High Court (Sec 482 CrPC / Sec 528 BNSS)',
      'Police Station Representation & Notice Reply (Sec 41A / Sec 35 BNSS)',
      'Cheque Bounce Cases (Section 138 Negotiable Instruments Act)',
      'White Collar Crimes, Economic Offences & EOW Matters',
      'NDPS, Cyber Crime & Financial Fraud Defense',
      'Domestic Violence & 498A Defense Strategy',
      'Criminal Appeals, Revisions & Sessions Trials'
    ],
    faqs: [
      {
        question: 'What should I do if I fear a false FIR or arrest against me?',
        answer: 'Immediately consult a criminal defense lawyer to assess the allegations and file an Anticipatory Bail application before the Sessions Court or High Court, or respond strategically to a police notice.'
      },
      {
        question: 'Is my criminal law consultation on VakeelSaab completely confidential?',
        answer: 'Yes. Your identity and phone number are masked during your consultation, and all discussions with verified advocates are protected by strict confidentiality.'
      }
    ]
  },
  {
    id: 'civil-lawyer',
    title: 'Civil Lawyer',
    shortDesc: 'Civil disputes, contract matters, tort claims, and general civil litigation support.',
    fullDesc: 'Resolve civil litigation, money recovery suits, breach of contract claims, permanent and temporary injunctions, specific performance of agreements, and defamation matters with seasoned civil practitioners.',
    iconSrc: '/vakeelsaab/services-icon/justice_12022790 1.svg',
    features: ['Civil Disputes', 'Contract Matters', 'Tort Claims', 'Civil Litigation'],
    coreAreas: [
      'Summary Suits for Money Recovery (Order 37 CPC)',
      'Breach of Contract & Specific Performance Suits',
      'Temporary & Permanent Stay / Injunction Orders',
      'Partition, Declaration & Cancellation of Instruments',
      'Legal Notice Drafting & Strategic Replies',
      'Succession Certificate & Probate of Will',
      'Defamation, Damages & Tortious Liability Claims',
      'Execution Petitions & Decree Enforcement'
    ],
    faqs: [
      {
        question: 'How does a money recovery suit work in civil court?',
        answer: 'It begins with sending a formal Legal Notice demanding payment within 15 days. If unpaid, your lawyer can file a Summary Suit under Order 37 of the CPC for faster recovery based on invoices, cheques, or written contracts.'
      },
      {
        question: 'How quickly can I obtain a stay order or injunction?',
        answer: 'In urgent cases involving threat to property or irreparable harm, an ad-interim ex-parte injunction application under Order 39 Rules 1 & 2 CPC can be moved within days of filing the suit.'
      }
    ]
  },
  {
    id: 'family-lawyer',
    title: 'Family Lawyer',
    shortDesc: 'Divorce proceedings, child custody, domestic violence, alimony, and family disputes.',
    fullDesc: 'Discuss sensitive family and matrimonial matters privately without judgment. Our verified family lawyers handle marriage registration, restitution of conjugal rights, domestic violence protection, maintenance, adoption, and guardianship.',
    iconSrc: '/vakeelsaab/services-icon/family-law_15467419 1.svg',
    features: ['Divorce Proceedings', 'Child Custody', 'Domestic Violence', 'Alimony Cases'],
    coreAreas: [
      'Matrimonial Dispute Resolution & Mediation',
      'Child Custody, Visitation Rights & Guardianship',
      'Domestic Violence Act (PWDVA) Protection & Defense',
      'Interim & Permanent Maintenance (Sec 125 CrPC / Sec 144 BNSS)',
      'Restitution of Conjugal Rights (RCR)',
      'Family Settlement Deeds & Inheritance Rights',
      'Special Marriage Act & Court Marriage Guidance',
      'Senior Citizen Maintenance & Welfare Tribunal Cases'
    ],
    faqs: [
      {
        question: 'Can I consult a family lawyer anonymously before deciding on legal action?',
        answer: 'Yes, VakeelSaab was built specifically so you can discuss sensitive family or marital issues anonymously from home, understand your legal rights, and explore mediation or legal remedies without pressure.'
      },
      {
        question: 'How do Indian courts decide child custody?',
        answer: 'Courts prioritize the paramount welfare of the child above all else, considering emotional bond, educational continuity, safety, and financial stability while granting sole, joint, or visitation custody.'
      }
    ]
  },
  {
    id: 'divorce-lawyers',
    title: 'Divorce Lawyer',
    shortDesc: 'Specialized divorce legal services including mutual divorce, contested divorce, alimony, and custody matters.',
    fullDesc: 'Compassionate, strategic legal guidance for Mutual Consent Divorce, Contested Divorce, Alimony & Stridhan settlement, 498A defense/prosecution, and NRI matrimonial disputes across all Family Courts in India.',
    iconSrc: '/vakeelsaab/services-icon/divorce.png',
    features: ['Mutual Divorce Filing', 'Contested Divorce', 'Child Custody', 'Alimony & Maintenance'],
    coreAreas: [
      'Mutual Consent Divorce (First & Second Motion)',
      'Cooling-Off Period Waiver Applications',
      'Contested Divorce on Grounds of Cruelty, Desertion & Adultery',
      'Alimony, Permanent Maintenance & Stridhan Recovery',
      'MOU & Settlement Agreement Drafting',
      'NRI Divorce & Cross-Border Matrimonial Disputes',
      'Transfer Petitions before the Supreme Court',
      'Annulment of Marriage & Judicial Separation'
    ],
    faqs: [
      {
        question: 'How long does a Mutual Consent Divorce take in India?',
        answer: 'A mutual consent divorce typically takes 6 months between the First and Second Motion, though the Supreme Court allows Family Courts to waive the 6-month cooling-off period when settlement is complete.'
      },
      {
        question: 'How is alimony or maintenance calculated?',
        answer: 'Courts evaluate both spouses’ income, assets, liabilities, standard of living during marriage, duration of marriage, and child care responsibilities (typically ranging around 20%–30% of net income in monthly maintenance).'
      }
    ]
  },
  {
    id: 'corporate-lawyer-in-india',
    title: 'Corporate Lawyer',
    shortDesc: 'Business registration, compliance, mergers & acquisitions, and corporate governance.',
    fullDesc: 'End-to-end corporate legal counsel for Indian companies, SMEs, and multinationals covering ROC/MCA compliance, commercial contracts, board governance, M&A due diligence, joint ventures, and regulatory advisory.',
    iconSrc: '/vakeelsaab/services-icon/ethics_18724979 1.svg',
    features: ['Business Registration', 'Corporate Compliance', 'M&A Support', 'Governance'],
    coreAreas: [
      'Company Incorporation & Structuring (Pvt Ltd, LLP, Section 8)',
      'Commercial Contract Drafting & Negotiation',
      'Mergers, Acquisitions & Legal Due Diligence',
      'Corporate Governance & Companies Act 2013 Compliance',
      'Shareholders Agreements (SHA) & Joint Ventures',
      'FEMA, RBI & Cross-Border Foreign Direct Investment (FDI)',
      'Data Privacy (DPDP Act) & Technology Contracts',
      'Corporate Dispute Resolution & Commercial Arbitration'
    ],
    faqs: [
      {
        question: 'Why should our business engage a corporate lawyer through VakeelSaab?',
        answer: 'You get immediate access to vetted corporate attorneys for contract reviews, compliance audits, and negotiations with transparent stage-wise billing and zero retainer lock-in unless you choose one.'
      }
    ]
  },
  {
    id: 'cyber-crime-lawyer',
    title: 'Cyber Crime Lawyer',
    shortDesc: 'Online fraud protection, cybercrime investigation, data breach response, and IT Act compliance.',
    fullDesc: 'Immediate assistance for bank account freeze/lien removal, UPI & investment scam recovery, cyber cell FIR filing, social media impersonation, data theft, and Information Technology Act defense.',
    iconSrc: '/vakeelsaab/services-icon/vrQ5qtWGT4zK.svg',
    features: ['Cyber Crime Complaints', 'Online Fraud Defense', 'Data Protection', 'IT Act Compliance'],
    coreAreas: [
      'Bank Account Unfreezing & Cyber Lien Removal Orders',
      'Financial Fraud, UPI Scam & Crypto Dispute Representation',
      'National Cyber Crime Portal (1930) & Cyber Cell FIRs',
      'Online Defamation, Sextortion & Harassment Protection',
      'Corporate Data Breach, Source Code Theft & IT Act Sec 43/66',
      'DPDP Act 2023 Compliance & Privacy Frameworks',
      'Social Media Takedown Notices & Intermediary Liability',
      'Digital Evidence Admissibility (Sec 65B / Sec 63 BSA Certificates)'
    ],
    faqs: [
      {
        question: 'My bank account was frozen by the Cyber Cell. How can a lawyer help?',
        answer: 'A cyber crime lawyer files an application before the concerned Investigating Officer (IO) or Magistrate Court under CrPC/BNSS to lift the freeze or restrict the lien strictly to the disputed transaction amount.'
      }
    ]
  },
  {
    id: 'intellectual-property-lawyer',
    title: 'Intellectual Property Lawyer',
    shortDesc: 'Patent filing, trademark registration, copyright protection, and IP litigation.',
    fullDesc: 'Protect your brand name, logo, software, inventions, and creative works with specialized IP attorneys handling Trademark Registration, Examination Replies, Opposition, Copyrights, Patents, and Infringement Suits.',
    iconSrc: '/vakeelsaab/services-icon/intellectual property.svg',
    features: ['Patent Filing', 'Trademark Registration', 'Copyright Protection', 'IP Litigation'],
    coreAreas: [
      'Trademark Search, Filing, Objection Reply & Hearing',
      'Trademark Opposition, Rectification & Renewal',
      'Copyright Registration for Software, Content & Art',
      'Patent Prior Art Search, Drafting & Prosecution',
      'Industrial Design Registration & Trade Secret Protection',
      'IP Infringement & Passing-Off Injunction Suits',
      'IP Licensing, Assignment & Franchise Agreements',
      'Domain Name Disputes (INDRP / UDRP) & Brand Takedowns'
    ],
    faqs: [
      {
        question: 'What if my trademark application receives an Examination Report objection?',
        answer: 'An IP attorney drafts a comprehensive legal reply citing relevant precedents under Section 9 or Section 11 of the Trade Marks Act within 30 days and represents you at the show-cause hearing.'
      }
    ]
  },
  {
    id: 'labour-and-employment-lawyer',
    title: 'Labour and Employment Lawyer',
    shortDesc: 'Employment contracts, workplace disputes, labor compliance, and employee rights.',
    fullDesc: 'Expert representation for both employees and employers in wrongful termination, unpaid salary/full-and-final recovery, POSH compliance, EPF/ESI regulations, non-compete clauses, and Labour Court matters.',
    iconSrc: '/vakeelsaab/services-icon/labor&employ.svg',
    features: ['Employment Contracts', 'Workplace Disputes', 'Labor Compliance', 'Employee Rights'],
    coreAreas: [
      'Wrongful Termination & Severance Negotiation',
      'Unpaid Salary, Gratuity & Full-and-Final Settlement Recovery',
      'Employment Agreements, NDAs & Non-Compete Clauses',
      'POSH Act Compliance & Internal Committee (IC) Advisory',
      'Industrial Disputes Act & Labour Commissioner Proceedings',
      'EPF, ESI, Maternity Benefit & Payment of Bonus Compliance',
      'HR Policy Manuals & Disciplinary Inquiry Representation',
      'ESOP Structuring & Executive Compensation Contracts'
    ],
    faqs: [
      {
        question: 'My employer is withholding my relieving letter and F&F settlement. What can I do?',
        answer: 'Your employment lawyer can issue a strong legal notice demanding immediate release of your statutory dues and relieving documents, and escalate to the Labour Commissioner or civil court if required.'
      }
    ]
  },
  {
    id: 'administrative-lawyer',
    title: 'Administrative Lawyer',
    shortDesc: 'Government regulations, administrative appeals, licensing, and regulatory compliance.',
    fullDesc: 'Challenge arbitrary government actions, tender disqualifications, service matters (CAT/SAT), licensing cancellations, and file Writ Petitions or RTI appeals with experienced administrative law specialists.',
    iconSrc: '/vakeelsaab/services-icon/Administrative law.svg',
    features: ['Government Regulations', 'Administrative Appeals', 'Licensing', 'Compliance'],
    coreAreas: [
      'Judicial Review of Administrative Actions',
      'Right to Information (RTI) Applications & Appeals',
      'Government Licensing and Regulatory Compliance',
      'Public Service Employment Issues (CAT / SAT)',
      'Writ Petitions and Constitutional Remedies (Art. 226/32)',
      'Administrative Tribunals and Statutory Appeals',
      'Government Tender & Public Procurement Disputes',
      'Municipal, Show-Cause & Demolition Notice Replies'
    ],
    faqs: [
      {
        question: 'What is judicial review and when can I challenge a government decision?',
        answer: 'Judicial review allows High Courts and the Supreme Court to examine the legality of administrative actions that are arbitrary, ultra vires, or violate principles of natural justice via Writ Petitions.'
      }
    ]
  },
  {
    id: 'tax-lawyer',
    title: 'Tax Lawyer',
    shortDesc: 'Tax planning, GST compliance, income tax matters, and tax dispute resolution.',
    fullDesc: 'Navigate complex Income Tax scrutiny notices, GST registration cancellations, ITC blocking, tax raids/assessments, CIT(A) & ITAT appeals, and corporate tax structuring with veteran tax advocates.',
    iconSrc: '/vakeelsaab/services-icon/tax law.svg',
    features: ['Tax Planning', 'GST Compliance', 'Income Tax', 'Tax Disputes'],
    coreAreas: [
      'GST Show-Cause Notices, ITC Unblocking & Registration Restoration',
      'Income Tax Scrutiny Notices (Sec 143(2), 148, 131) & Replies',
      'Appeals before CIT(A), ITAT, GST Appellate Tribunal & High Court',
      'Corporate & Startup Tax Structuring',
      'NRI Taxation, DTAA & Cross-Border Remittance Advisory',
      'Capital Gains Tax Exemption & Property TDS Compliance',
      'Customs, Excise & Indirect Tax Litigation',
      'Compounding of Tax Offences & Prosecution Defense'
    ],
    faqs: [
      {
        question: 'How do I respond to a GST show-cause notice or blocked Electronic Credit Ledger?',
        answer: 'A tax lawyer drafts a para-wise legal reply supported by invoices, reconciliation statements, and High Court precedents under Rule 86A within the statutory deadline to unblock your ITC.'
      }
    ]
  },
  {
    id: 'consumer-protection-lawyer',
    title: 'Consumer Protection Lawyer',
    shortDesc: 'Consumer rights, product liability, service deficiency, and consumer court proceedings.',
    fullDesc: 'File impactful complaints before District, State, and National Consumer Disputes Redressal Commissions (NCDRC) for defective products, builder delays, medical negligence, banking fraud, and unfair trade practices.',
    iconSrc: '/vakeelsaab/services-icon/consumer protection law.svg',
    features: ['Consumer Rights', 'Product Liability', 'Service Deficiency', 'Consumer Courts'],
    coreAreas: [
      'District, State & National Consumer Commission Filings',
      'Real Estate & Builder Deficiency Consumer Complaints',
      'Banking, Credit Card & Insurance Claim Rejections',
      'E-Commerce, Airline & Telecom Service Deficiency',
      'Medical Negligence & Hospital Overcharging Claims',
      'Defective Automobile & Electronics Product Liability',
      'E-Daakhil Online Consumer Complaint Drafting',
      'Execution of Consumer Forum Orders & Compensation Recovery'
    ],
    faqs: [
      {
        question: 'Can I file a consumer complaint online without visiting court every time?',
        answer: 'Yes. Through the E-Daakhil portal and video conferencing hearings, your consumer lawyer can draft, file, and argue your complaint before the Consumer Commission seeking refund and mental harassment compensation.'
      }
    ]
  },
  {
    id: 'environmental-lawyer',
    title: 'Environmental Lawyer',
    shortDesc: 'Environmental compliance, pollution control, environmental clearances, and green regulations.',
    fullDesc: 'Specialized representation before the National Green Tribunal (NGT), Central & State Pollution Control Boards (CPCB/SPCB), and environmental clearance authorities for industries and citizens.',
    iconSrc: '/vakeelsaab/services-icon/environmental-law_9548340 1.svg',
    features: ['Environmental Compliance', 'Pollution Control', 'Clearances', 'Green Regulations'],
    coreAreas: [
      'National Green Tribunal (NGT) Petitions & Defense',
      'Pollution Control Board (CTE / CTO) Show-Cause Replies',
      'Environmental Impact Assessment (EIA) & Clearances',
      'Hazardous Waste, E-Waste & Plastic Waste Compliance',
      'Forest Conservation & Coastal Regulation Zone (CRZ) Matters',
      'Industrial Closure Order Appeals & Environmental Audits'
    ],
    faqs: [
      {
        question: 'How do I challenge an arbitrary closure notice from the Pollution Control Board?',
        answer: 'An environmental lawyer helps you file an urgent compliance representation or appeal before the Appellate Authority / National Green Tribunal (NGT) to stay the closure order.'
      }
    ]
  },
  {
    id: 'immigration-lawyer',
    title: 'Immigration Lawyer',
    shortDesc: 'Visa applications, work permits, citizenship matters, and immigration compliance.',
    fullDesc: 'Trusted immigration and nationality law assistance for OCI cards, FRRO registration, employment & business visas, visa refusal appeals, citizenship applications, and cross-border corporate mobility.',
    iconSrc: '/vakeelsaab/services-icon/immigration-law_18570414 1.svg',
    features: ['Visa Applications', 'Work Permits', 'Citizenship', 'Immigration Compliance'],
    coreAreas: [
      'OCI Card Applications, Renewals & Miscellaneous Services',
      'FRRO Registration, Visa Extension & Exit Permits in India',
      'Business, Employment & Project Visa Advisory',
      'Passport Impounding, Blacklist Removal & Writ Remedies',
      'Foreign Marriage Registration & Spouse Visa Documentation',
      'Corporate Expatriate Mobility & Compliance'
    ],
    faqs: [
      {
        question: 'Can an immigration lawyer help with FRRO overstay or passport issues in India?',
        answer: 'Yes, our lawyers assist foreign nationals, NRIs, and OCI holders with FRRO regularization, exit permits, and High Court representation for passport renewals or travel clearances.'
      }
    ]
  },
  {
    id: 'insurance-lawyer',
    title: 'Insurance Lawyer',
    shortDesc: 'Insurance claims, policy disputes, insurance fraud, and insurance regulatory matters.',
    fullDesc: 'Overturn wrongful health, life, motor, and commercial insurance claim rejections through Insurance Ombudsman representations, IRDAI grievances, Consumer Courts, and Motor Accident Claims Tribunals (MACT).',
    iconSrc: '/vakeelsaab/services-icon/insurance law.svg',
    features: ['Insurance Claims', 'Policy Disputes', 'Insurance Fraud', 'Regulatory Matters'],
    coreAreas: [
      'Health & Mediclaim Rejection Appeals',
      'Life Insurance & Term Policy Claim Recovery',
      'Motor Accident Claims Tribunal (MACT) Compensation',
      'Insurance Ombudsman & IRDAI Bima Bharosa Filings',
      'Commercial Fire, Marine & Industrial Loss Claims',
      'Surveyor Assessment Disputes & Arbitrary Deductions'
    ],
    faqs: [
      {
        question: 'My health insurance claim was rejected citing pre-existing disease. Can I challenge it?',
        answer: 'Yes. IRDAI regulations and Consumer Court rulings protect policyholders against arbitrary rejections, especially after the moratorium period or when conditions were unrelated. We help you recover the full claim with interest.'
      }
    ]
  },
  {
    id: 'startup-lawyer',
    title: 'Startup Lawyer',
    shortDesc: 'Startup registration, funding agreements, equity structuring, and startup compliance.',
    fullDesc: 'Dedicated startup legal partners for Co-Founders Agreements, DPIIT Startup India recognition, ESOP pools, Seed/Angel/VC Term Sheets, SHA/SSA negotiations, IP protection, and tech platform policies.',
    iconSrc: '/vakeelsaab/services-icon/startup law.svg',
    features: ['Startup Registration', 'Funding Agreements', 'Equity Structuring', 'Compliance'],
    coreAreas: [
      'Co-Founders Agreement & Equity Vesting Structuring',
      'DPIIT Startup India Registration & Tax Holiday Filings',
      'Angel, Seed & Series A Term Sheet, SHA & SSA Negotiation',
      'Employee Stock Option Plan (ESOP) Pool Design',
      'SaaS Contracts, Terms of Service & DPDP Privacy Policies',
      'Intellectual Property Assignment & Brand Protection'
    ],
    faqs: [
      {
        question: 'Do I need a Co-Founders Agreement before incorporating?',
        answer: 'A Co-Founders Agreement is crucial to define roles, equity splits, 4-year vesting with a 1-year cliff, IP ownership, and exit clauses so future co-founder departures do not paralyze the startup.'
      }
    ]
  },
  {
    id: 'business-lawyer',
    title: 'Business Lawyer',
    shortDesc: 'Business contracts, partnership agreements, commercial disputes, and business compliance.',
    fullDesc: 'Practical commercial legal support for MSMEs, traders, manufacturers, and enterprises covering vendor contracts, MSME Samadhaan payment recovery, partnership deeds, licensing, and commercial litigation.',
    iconSrc: '/vakeelsaab/services-icon/business law.svg',
    features: ['Business Contracts', 'Partnership Agreements', 'Commercial Disputes', 'Compliance'],
    coreAreas: [
      'MSME Samadhaan Delayed Payment Recovery (3x Bank Interest)',
      'Vendor, Distributor, Franchise & Master Service Agreements',
      'Partnership Deed Drafting, Reconstitution & Dissolution',
      'Commercial Courts Act Suits & Arbitration',
      'Negotiable Instruments Act Sec 138 Cheque Bounce Recovery',
      'Trade Licenses, FSSAI, Shop & Establishment Compliance'
    ],
    faqs: [
      {
        question: 'How can an MSME recover delayed payments from corporate buyers?',
        answer: 'Under the MSMED Act, registered MSMEs can file a claim on the MSME Samadhaan portal and Facilitation Council to recover principal plus compound interest at 3 times the RBI bank rate.'
      }
    ]
  },
  {
    id: 'nri-lawyer',
    title: 'NRI Lawyer',
    shortDesc: 'Specialized NRI legal services for property, family, business, and inheritance matters from abroad.',
    fullDesc: 'Manage your Indian legal matters seamlessly from the USA, UK, UAE, Canada, Australia, or Singapore without travelling to India. Specializing in NRI property protection, POA, inheritance, and matrimonial law.',
    iconSrc: '/vakeelsaab/services-icon/nri_lawyer.png',
    features: ['NRI Property Disputes', 'Family & Inheritance', 'Business Compliance', 'Documentation Support'],
    coreAreas: [
      'NRI Property Monitoring, Illegal Encroachment & Eviction',
      'Embassy-Attested Special & General Power of Attorney (POA)',
      'Ancestral Property Partition, Wills & Probate for NRIs',
      'NRI Mutual & Contested Divorce and Child Custody',
      'FEMA Repatriation of Property Sale Proceeds (NRO to NRE)',
      'NRI Tax Compliance, Lower TDS Certificates (Form 13)'
    ],
    faqs: [
      {
        question: 'Can I sell or manage property in India without flying back?',
        answer: 'Yes. Our NRI legal team drafts a specific Power of Attorney (POA) that you execute at the Indian Embassy/Consulate in your country of residence, enabling adjudicated representation and property management in India.'
      }
    ]
  }
];

export const HOME_FAQS = [
  {
    question: 'What is Online Lawyer Consultation?',
    answer: 'It’s a modern way to get professional help without the commute. Through VakeelSaab, you can connect with the best lawyers in India instantly, getting reliable legal advice online via video or phone from wherever you are.'
  },
  {
    question: 'How can I get an online lawyer consultation in India?',
    answer: 'Just dial 72848 72848, or visit the website. In a few clicks, you’re connected to a verified lawyer. VakeelSaab makes online advocate consultation super easy, private, and available across India.'
  },
  {
    question: 'Can I get legal advice without visiting a law office?',
    answer: 'Definitely. VakeelSaab brings legal counsel straight to your screen. You can share documents and discuss strategies with top legal minds through our secure platform, saving you the hassle of a physical visit.'
  },
  {
    question: 'What types of legal issues can be resolved via online lawyer consultation?',
    answer: 'Almost everything - divorce, family disputes, property matters, criminal cases, business issues, consumer problems, and more. Our best lawyers in India on VakeelSaab give practical legal advice online for most situations.'
  },
  {
    question: 'Can I choose the lawyer I want to consult online?',
    answer: 'Yes, you’re in control. You can review experience and specialties on VakeelSaab to pick the best online lawyer for your specific case. We believe you should feel completely comfortable with the expert handling your legal matters.'
  },
  {
    question: 'Are online legal consultations valid for court proceedings or documentation?',
    answer: 'Yes, they’re excellent for understanding your rights, planning next steps, and getting solid advice. Our lawyers will clearly guide you on what’s needed.'
  },
  {
    question: 'What are the benefits of consulting a lawyer online compared to in-person visits?',
    answer: 'It’s all about convenience and choice. VakeelSaab’s online advocate consultation saves you travel time and connects you with top-tier experts nationwide, often at much more affordable rates.'
  },
  {
    question: 'Does VakeelSaab provide 24/7 online legal consultation?',
    answer: 'Yes - day or night! Our helpline and app connect you to available lawyers round the clock. Whenever you’re stuck legally, just reach out for instant online advocate consultation.'
  },
  {
    question: 'Can I get legal advice in my preferred language?',
    answer: 'Absolutely. Law is complex enough without a language barrier. VakeelSaab connects you with the best online lawyer who speaks your native tongue, ensuring your online advocate consultation is clear, comfortable, and easy to understand.'
  }
];

export const CALL_STEPS = [
  {
    step: 1,
    title: 'Call Our Helpline',
    description: 'Dial 72848 72848 to start your legal consultation journey',
    icon: 'Phone'
  },
  {
    step: 2,
    title: 'Confidential Discussion',
    description: 'Our executive will ask about your legal issue, preferred language, location & budget at no cost',
    icon: 'MessageCircle'
  },
  {
    step: 3,
    title: 'Lawyer Selection',
    description: "Based on your inputs, we'll select the most suitable lawyer for your case",
    icon: 'Users'
  },
  {
    step: 4,
    title: 'Secure Payment',
    description: 'Receive a payment link to recharge your wallet as per your selected budget',
    icon: 'CreditCard'
  },
  {
    step: 5,
    title: 'Connect with Lawyer',
    description: "Once payment is made, you'll be connected to the lawyer via call",
    icon: 'Phone'
  },
  {
    step: 6,
    title: '3-Minute Trial',
    description: 'If unsatisfied, you can end the call early. You only pay for the time you use.',
    icon: 'Clock'
  },
  {
    step: 7,
    title: 'Continue Consultation',
    description: 'If you choose to continue, minimum charge for 10 minutes will apply',
    icon: 'CheckCircle'
  }
];

export const APP_STEPS = [
  {
    step: 1,
    title: 'Download & Open App',
    description: 'Open the VakeelSaab customer app on your mobile device'
  },
  {
    step: 2,
    title: 'Select Your Preferences',
    description: 'Choose your legal issue, language, budget & location preferences'
  },
  {
    step: 3,
    title: 'Receive Payment Link',
    description: 'Once you provide matter details, you will receive payment link via SMS'
  },
  {
    step: 4,
    title: 'Auto-Match with Lawyer',
    description: "After payment, you'll be automatically matched with a lawyer who best fits your preferences"
  },
  {
    step: 5,
    title: 'Get Lawyer Profile',
    description: "After consultation, receive SMS with lawyer's profile link & Unique Lawyer Identity Code"
  },
  {
    step: 6,
    title: 'Reconnect Anytime',
    description: 'Use the Lawyer ID to reconnect with the same lawyer whenever needed'
  }
];

export const CLIENT_TESTIMONIALS = [
  {
    text: 'VakeelSaab provided me with excellent legal advice for my property dispute. The lawyer was knowledgeable and helped me understand my rights clearly. The anonymous consultation gave me confidence to seek help.',
    author: 'Rajesh Kumar',
    location: 'Mumbai',
    rating: 5,
    case: 'Property Law',
    clientId: 'VS-CL-8941'
  },
  {
    text: "I was facing a family law issue and was hesitant to approach a lawyer. VakeelSaab's anonymous service was perfect for me. The consultation was professional and affordable. Highly recommended!",
    author: 'Priya Sharma',
    location: 'Delhi',
    rating: 5,
    case: 'Family Law',
    clientId: 'VS-CL-7312'
  },
  {
    text: 'The criminal law consultation I received was outstanding. The lawyer explained the entire process and guided me through each step. The 3-minute trial period gave me confidence in their service.',
    author: 'Amit Singh',
    location: 'Bangalore',
    rating: 5,
    case: 'Criminal Law',
    clientId: 'VS-CL-6409'
  },
  {
    text: 'As a startup founder, I needed quick legal advice for business registration. VakeelSaab connected me with an expert who provided clear guidance. The service is truly accessible and affordable.',
    author: 'Sneha Patel',
    location: 'Pune',
    rating: 5,
    case: 'Business Law',
    clientId: 'VS-CL-9104'
  },
  {
    text: "I had a consumer dispute and didn't know where to start. The lawyer I consulted through VakeelSaab was very helpful and professional. The entire process was smooth and confidential.",
    author: 'Vikram Reddy',
    location: 'Hyderabad',
    rating: 5,
    case: 'Consumer Law',
    clientId: 'VS-CL-5820'
  }
];

export const COVERED_BY_LOGOS = [
  { src: '/vakeelsaab/images/VoHNvhwyuP87.jpg', alt: 'DPIIT Startup India Recognition' },
  { src: '/vakeelsaab/images/81vLPCnWhMBE.jpg', alt: 'MSME Registered', width: 100 },
  { src: '/vakeelsaab/images/e5QkHAzZa8nh.jpg', alt: 'Jindal Global Law School Debate', width: 80 },
  { src: '/vakeelsaab/images/1ZOjqt558T1d.png', alt: 'Indo-American Chamber of Commerce' },
  { src: '/vakeelsaab/images/bar&bench_logo.avif', alt: 'Bar & Bench Legal Media' },
  { src: '/vakeelsaab/images/UPef3QWxRMAj.png', alt: 'CXO Today' },
  { src: '/vakeelsaab/images/4AoQxpJFobD4.jpeg', alt: 'India News 24' },
  { src: '/vakeelsaab/images/sSrIhQ9nPLVl.png', alt: 'Business News This Week' }
];

export const DOCUMENT_STORE_CATALOG = [
  {
    id: 'rent-agreement',
    title: 'Residential Rent / Lease Agreement (11 Months)',
    category: 'Property & Real Estate',
    price: '₹299',
    pages: '6 Pages',
    description: 'Standard 11-month residential leave and license / rental agreement with security deposit, lock-in period, maintenance, and eviction clauses.'
  },
  {
    id: 'legal-notice-recovery',
    title: 'Legal Notice for Money Recovery / Dues',
    category: 'Civil & Commercial',
    price: '₹499',
    pages: '4 Pages',
    description: 'Formal statutory demand notice for recovery of unpaid invoices, friendly loans, or contractual dues with 15-day notice period.'
  },
  {
    id: 'mutual-nda',
    title: 'Mutual Non-Disclosure Agreement (NDA)',
    category: 'Startup & Corporate',
    price: '₹399',
    pages: '5 Pages',
    description: 'Bilateral confidentiality agreement protecting trade secrets, source code, pitch decks, and proprietary business discussions under Indian contract law.'
  },
  {
    id: 'general-affidavit',
    title: 'Name Change / Address Proof / General Affidavit',
    category: 'Personal & Statutory',
    price: '₹199',
    pages: '2 Pages',
    description: 'Ready-to-notarize sworn affidavit template compliant with Indian Oaths Act requirements for passport, banking, and government filings.'
  },
  {
    id: 'cofounders-agreement',
    title: 'Startup Co-Founders & Equity Vesting Agreement',
    category: 'Startup & Corporate',
    price: '₹999',
    pages: '12 Pages',
    description: 'Comprehensive founder agreement covering equity split, 4-year vesting with 1-year cliff, IP assignment, decision matrix, and exit clauses.'
  },
  {
    id: 'special-poa',
    title: 'NRI Special Power of Attorney (Property Management)',
    category: 'Property & NRI',
    price: '₹699',
    pages: '7 Pages',
    description: 'Embassy-adjudication ready Special Power of Attorney authorizing a trusted family member in India to manage, lease, or represent property.'
  }
];
