import { DocumentTemplate } from '../types';

export const DOCUMENTS_CATALOG: DocumentTemplate[] = [
  {
    id: 'mutual-nda',
    title: 'Mutual Non-Disclosure Agreement (NDA)',
    category: 'business',
    shortDesc: 'Protect proprietary business concepts, trade secrets, algorithms, and financial data shared between two parties.',
    estimatedTime: '5 mins',
    popular: true,
    governingLaw: 'Indian Contract Act, 1872',
    fields: [
      { id: 'disclosingParty', label: 'First Party (Company / Individual Name)', type: 'text', placeholder: 'e.g. Apex Tech Private Limited' },
      { id: 'firstPartyCity', label: 'First Party Registered City & State', type: 'text', placeholder: 'e.g. Bengaluru, Karnataka' },
      { id: 'receivingParty', label: 'Second Party (Company / Individual Name)', type: 'text', placeholder: 'e.g. Rahul Verma' },
      { id: 'secondPartyCity', label: 'Second Party City & State', type: 'text', placeholder: 'e.g. Mumbai, Maharashtra' },
      { id: 'effectiveDate', label: 'Effective Date', type: 'date' },
      { id: 'purpose', label: 'Purpose of Confidential Discussion', type: 'textarea', placeholder: 'e.g. Evaluating potential commercial partnership and software co-development' },
      { id: 'confidentialityPeriodYears', label: 'Confidentiality Duration (Years)', type: 'select', options: ['1 Year', '2 Years', '3 Years', '5 Years'], defaultValue: '3 Years' },
      { id: 'governingJurisdiction', label: 'Dispute Resolution Jurisdiction City', type: 'text', placeholder: 'e.g. Courts of New Delhi' },
    ],
    templateGenerator: (v) => `MUTUAL NON-DISCLOSURE AND CONFIDENTIALITY AGREEMENT

THIS MUTUAL NON-DISCLOSURE AGREEMENT (the "Agreement") is entered into on this ${v.effectiveDate || '[DATE]'}, by and between:

1. ${v.disclosingParty || '[FIRST PARTY NAME]'}, having its principal place of business/residence at ${v.firstPartyCity || '[CITY, STATE]'} (hereinafter referred to as the "First Party"); and

2. ${v.receivingParty || '[SECOND PARTY NAME]'}, having its principal place of business/residence at ${v.secondPartyCity || '[CITY, STATE]'} (hereinafter referred to as the "Second Party").

WHEREAS, the Parties wish to explore and engage in discussions concerning: ${v.purpose || 'evaluating prospective commercial collaborations'} (the "Authorized Purpose"); and

WHEREAS, in the course of such discussions, each Party may disclose to the other Party certain non-public, proprietary, and confidential business, technical, or financial information.

NOW, THEREFORE, pursuant to the provisions of the Indian Contract Act, 1872, the Parties agree as follows:

1. DEFINITION OF CONFIDENTIAL INFORMATION:
"Confidential Information" refers to any non-public data, trade secrets, software architecture, technical schematics, customer lists, pricing metrics, and intellectual property disclosed orally, electronically, or in writing.

2. OBLIGATIONS OF NON-DISCLOSURE:
Each Party agrees to hold the other Party's Confidential Information in strict confidence, exercising at least the same degree of care as it uses to protect its own sensitive trade secrets, but not less than reasonable care. Neither Party shall disclose, publish, or disseminate the Confidential Information to any third party without prior written consent.

3. TERM AND DURATION:
This Agreement and the duty of confidentiality shall remain binding for a period of ${v.confidentialityPeriodYears || '3 Years'} from the Effective Date.

4. DISPUTE RESOLUTION & JURISDICTION:
Any dispute or claim arising out of this Agreement shall be governed by the laws of the Republic of India and subject to the exclusive jurisdiction of the competent civil courts at ${v.governingJurisdiction || 'New Delhi'}, India.

IN WITNESS WHEREOF, the Parties have executed this Mutual Non-Disclosure Agreement on the date first written above.

_____________________________                _____________________________
For: ${v.disclosingParty || 'First Party'}                       For: ${v.receivingParty || 'Second Party'}
Authorized Signatory                         Authorized Signatory`,
  },
  {
    id: 'residential-rental-agreement',
    title: 'Residential Rental / Lease Agreement',
    category: 'real-estate',
    shortDesc: 'Legally vetted residential tenancy agreement specifying monthly rent, security deposit, maintenance, and notice period.',
    estimatedTime: '7 mins',
    popular: true,
    governingLaw: 'Transfer of Property Act, 1882 & State Rent Control Acts',
    fields: [
      { id: 'landlordName', label: 'Landlord (Owner) Full Name', type: 'text', placeholder: 'e.g. Suresh Kumar' },
      { id: 'tenantName', label: 'Tenant Full Name', type: 'text', placeholder: 'e.g. Amit Patel' },
      { id: 'propertyAddress', label: 'Complete Property Address', type: 'textarea', placeholder: 'Flat No. 402, Tower B, Green Valley Apartments, Sector 62, Gurugram' },
      { id: 'monthlyRent', label: 'Monthly Rent (in INR ₹)', type: 'number', placeholder: 'e.g. 25000' },
      { id: 'securityDeposit', label: 'Refundable Security Deposit (INR ₹)', type: 'number', placeholder: 'e.g. 50000' },
      { id: 'leaseTenureMonths', label: 'Tenancy Tenure (Months)', type: 'select', options: ['11 Months', '22 Months', '36 Months'], defaultValue: '11 Months' },
      { id: 'noticePeriodDays', label: 'Notice Period for Eviction / Vacating', type: 'select', options: ['30 Days', '60 Days', '90 Days'], defaultValue: '30 Days' },
      { id: 'agreementDate', label: 'Agreement Start Date', type: 'date' },
    ],
    templateGenerator: (v) => `RESIDENTIAL LEASE AND TENANCY AGREEMENT

THIS LEASE AGREEMENT is made and executed on this ${v.agreementDate || '[DATE]'}, by and between:

LANDLORD / LESSOR:
${v.landlordName || '[LANDLORD NAME]'}, residing at [LANDLORD ADDRESS] (hereinafter called the "LESSOR");

AND

TENANT / LESSEE:
${v.tenantName || '[TENANT NAME]'}, residing at [PERMANENT ADDRESS] (hereinafter called the "LESSEE").

WHEREAS the Lessor is the absolute legal owner of the residential property situated at:
${v.propertyAddress || '[COMPLETE PROPERTY ADDRESS]'} (hereinafter referred to as the "Demised Premises").

NOW THIS AGREEMENT WITNESSETH AS FOLLOWS:

1. TENURE:
The tenancy shall be for a fixed term of ${v.leaseTenureMonths || '11 Months'} commencing from ${v.agreementDate || '[START DATE]'}.

2. MONTHLY RENT:
The Lessee agrees to pay a monthly rent of INR ₹${v.monthlyRent || '25,000'}/- (Rupees only) payable in advance on or before the 7th day of each English calendar month.

3. SECURITY DEPOSIT:
The Lessee has deposited with the Lessor an interest-free refundable security deposit of INR ₹${v.securityDeposit || '50,000'}/-, returnable at the time of vacating the premises after adjusting any unpaid utility dues or structural damages.

4. NOTICE PERIOD:
Either party may terminate this agreement by serving a written advance notice of ${v.noticePeriodDays || '30 Days'} to the other party.

5. RESTRICTIONS:
The premises shall be used exclusively for peaceful residential purposes and not for any commercial or unlawful trade.

IN WITNESS WHEREOF, the Lessor and Lessee have signed this Agreement in the presence of witnesses.

_____________________________                _____________________________
LESSOR (Owner)                               LESSEE (Tenant)`,
  },
  {
    id: 'consultancy-services-agreement',
    title: 'Consultant & Service Provider Agreement',
    category: 'business',
    shortDesc: 'Professional contract for independent consultants, freelance software engineers, designers, and marketing professionals.',
    estimatedTime: '6 mins',
    popular: true,
    governingLaw: 'Indian Contract Act, 1872',
    fields: [
      { id: 'clientCompany', label: 'Client Company Name', type: 'text', placeholder: 'e.g. ZenScale India Pvt Ltd' },
      { id: 'consultantName', label: 'Consultant / Agency Name', type: 'text', placeholder: 'e.g. Vikramaditya Rao' },
      { id: 'scopeOfWork', label: 'Scope of Services / Deliverables', type: 'textarea', placeholder: 'e.g. Full-stack web application development, cloud deployment, and system maintenance' },
      { id: 'consultingFee', label: 'Professional Consulting Fee (INR ₹)', type: 'text', placeholder: 'e.g. ₹75,000 per month (exclusive of GST)' },
      { id: 'paymentTerms', label: 'Payment Terms / Milestone', type: 'select', options: ['Monthly Retainer', 'Milestone-Based Upon Delivery', 'Hourly Time & Material'], defaultValue: 'Monthly Retainer' },
      { id: 'ipAssignment', label: 'IP Ownership Clause', type: 'select', options: ['All Deliverables Owned by Client (Work for Hire)', 'Consultant Retains Pre-Existing IP'], defaultValue: 'All Deliverables Owned by Client (Work for Hire)' },
    ],
    templateGenerator: (v) => `INDEPENDENT CONSULTING SERVICES AGREEMENT

This Agreement is made on [DATE] between:
CLIENT: ${v.clientCompany || '[CLIENT COMPANY NAME]'}
AND
CONSULTANT: ${v.consultantName || '[CONSULTANT NAME]'}

1. SERVICES:
The Consultant shall perform the following scope of work:
${v.scopeOfWork || 'Professional advisory and software engineering services.'}

2. COMPENSATION:
The Client shall pay compensation of ${v.consultingFee || 'INR ₹75,000 per month'} following the ${v.paymentTerms || 'Monthly Retainer'} terms. TDS shall be deducted as per the Income Tax Act, 1961.

3. INTELLECTUAL PROPERTY:
${v.ipAssignment || 'All deliverables, source code, and assets created under this agreement shall be deemed Work for Hire and the exclusive property of the Client upon payment.'}

4. INDEPENDENT CONTRACTOR STATUS:
Nothing in this agreement shall establish an employer-employee relationship.

_____________________________                _____________________________
Client Signatory                             Consultant Signatory`,
  },
  {
    id: 'last-will-testament',
    title: 'Last Will and Testament',
    category: 'personal-family',
    shortDesc: 'Clearly designate distribution of real estate, bank deposits, mutual funds, and personal assets under the Indian Succession Act.',
    estimatedTime: '8 mins',
    popular: true,
    governingLaw: 'Indian Succession Act, 1925',
    fields: [
      { id: 'testatorName', label: 'Testator (Your Full Legal Name)', type: 'text', placeholder: 'e.g. Ramesh Chandra Sen' },
      { id: 'testatorAge', label: 'Your Age (Years)', type: 'number', placeholder: 'e.g. 58' },
      { id: 'residenceCity', label: 'City of Residence', type: 'text', placeholder: 'e.g. Kolkata, West Bengal' },
      { id: 'executorName', label: 'Executor Name (Trusted Person)', type: 'text', placeholder: 'e.g. Anita Sen' },
      { id: 'beneficiaryDetails', label: 'Primary Beneficiaries & Asset Allocations', type: 'textarea', placeholder: 'e.g. Residential flat to spouse Anita Sen; fixed deposits divided equally between children' },
    ],
    templateGenerator: (v) => `LAST WILL AND TESTAMENT

I, ${v.testatorName || '[TESTATOR NAME]'}, aged about ${v.testatorAge || '55'} years, residing at ${v.residenceCity || '[CITY]'}, India, being of sound mind, memory, and understanding, do hereby revoke all previous Wills and declare this to be my Last Will and Testament.

1. EXECUTOR APPOINTMENT:
I appoint ${v.executorName || '[EXECUTOR NAME]'} as the Sole Executor of this my Last Will.

2. ASSET DISTRIBUTION:
I bequeath my movable and immovable assets, bank balances, investments, and properties as follows:
${v.beneficiaryDetails || 'All my estate to my designated legal beneficiaries as described herein.'}

3. ABSOLUTE OWNERSHIP:
The beneficiaries named herein shall become absolute owners of their allocated shares free from all encumbrances.

Signed by the Testator in the presence of two independent witnesses:

_____________________________
TESTATOR SIGNATURE

WITNESS 1: ___________________               WITNESS 2: ___________________`,
  },
  {
    id: 'employment-offer-letter',
    title: 'Employment Offer & Appointment Letter',
    category: 'employment',
    shortDesc: 'Comprehensive Indian employment contract with CTC breakdown, probation, confidentiality, and termination covenants.',
    estimatedTime: '5 mins',
    popular: true,
    governingLaw: 'Industrial Employment & Indian Contract Act',
    fields: [
      { id: 'companyName', label: 'Company Name', type: 'text', placeholder: 'e.g. Veloce Technologies Pvt Ltd' },
      { id: 'employeeName', label: 'Employee Full Name', type: 'text', placeholder: 'e.g. Sneha Roy' },
      { id: 'designation', label: 'Job Designation / Title', type: 'text', placeholder: 'e.g. Senior Software Engineer' },
      { id: 'annualCtc', label: 'Annual CTC (in INR Lakhs / Rupees)', type: 'text', placeholder: 'e.g. INR ₹14,00,000 per annum' },
      { id: 'probationMonths', label: 'Probationary Period', type: 'select', options: ['3 Months', '6 Months'], defaultValue: '3 Months' },
      { id: 'joiningDate', label: 'Date of Joining', type: 'date' },
    ],
    templateGenerator: (v) => `EMPLOYMENT OFFER AND APPOINTMENT LETTER

Date: [DATE]
To: ${v.employeeName || '[CANDIDATE NAME]'}

Dear ${v.employeeName || 'Candidate'},

On behalf of ${v.companyName || '[COMPANY NAME]'}, we are pleased to offer you the position of ${v.designation || '[DESIGNATION]'}.

1. COMMENCEMENT & COMPENSATION:
Your employment commences on ${v.joiningDate || '[JOINING DATE]'}. Your Cost to Company (CTC) will be ${v.annualCtc || 'INR ₹12,00,000 per annum'}, subject to statutory deductions (PF, Professional Tax, TDS).

2. PROBATION:
You shall be on probation for a period of ${v.probationMonths || '3 Months'}, after which your performance will be evaluated for formal confirmation.

3. CONFIDENTIALITY:
You agree to maintain complete confidentiality regarding all company trade secrets, source codes, and business methodologies.

Sincerely,
For ${v.companyName || '[COMPANY NAME]'}
Authorized Signatory`,
  },
];
