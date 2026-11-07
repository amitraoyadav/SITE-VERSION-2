import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  ShieldCheck, 
  AlertTriangle, 
  Building2, 
  Award, 
  Languages, 
  Phone, 
  Video, 
  MapPin, 
  Lock, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { AdvocateRecord } from '../../types/legal';
import { INDIAN_STATES_AND_CITIES, POPULAR_LANGUAGES } from '../../data/statesCities';
import { POPULAR_LEGAL_SERVICES } from '../../data/legalServices';

interface AdvocateDirectoryProps {
  advocates: AdvocateRecord[];
  isEnabled: boolean;
  onToggleDirectoryStatus?: () => void;
  onSelectAdvocateForConsultation: (advocate: AdvocateRecord) => void;
}

export function AdvocateDirectory({
  advocates,
  isEnabled,
  onToggleDirectoryStatus,
  onSelectAdvocateForConsultation,
}: AdvocateDirectoryProps) {
  const [filterState, setFilterState] = useState<string>('all');
  const [filterCity, setFilterCity] = useState<string>('all');
  const [filterPractice, setFilterPractice] = useState<string>('all');
  const [filterLanguage, setFilterLanguage] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAdvocates = advocates.filter((adv) => {
    if (filterState !== 'all' && adv.state !== filterState) return false;
    if (filterCity !== 'all' && adv.city !== filterCity) return false;
    if (
      filterPractice !== 'all' &&
      !adv.practiceAreas.some((p) => p.toLowerCase().includes(filterPractice.toLowerCase()))
    )
      return false;
    if (
      filterLanguage !== 'all' &&
      !adv.languages.some((l) => l.toLowerCase().includes(filterLanguage.toLowerCase()))
    )
      return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        adv.fullName.toLowerCase().includes(q) ||
        adv.enrolmentNumber.toLowerCase().includes(q) ||
        adv.stateBarCouncil.toLowerCase().includes(q) ||
        adv.city.toLowerCase().includes(q) ||
        adv.practiceAreas.some((pa) => pa.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <section id="directory" className="py-20 bg-[#091526] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-400 mb-2 font-semibold">
              <Users className="w-3.5 h-3.5" />
              <span>Verified Institutional Registry</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif tracking-tight">
              Advocate Directory
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Institutional register of advocates enrolled with State Bar Councils across India. Strictly maintained without promotional rankings, paid priority, or solicitation.
            </p>
          </div>

          {/* Directory Module Status Indicator */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <span
              className={`text-xs font-mono px-3 py-1.5 rounded-lg border flex items-center gap-1.5 ${
                isEnabled
                  ? 'bg-emerald-950/60 border-emerald-800 text-emerald-300'
                  : 'bg-amber-950/40 border-amber-800 text-amber-300'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isEnabled ? 'Directory Active (Verified)' : 'Restricted (BCI Compliance Mode)'}</span>
            </span>
          </div>
        </div>

        {/* Mandatory Bar Council of India Rule 36 Compliance Notice */}
        <div className="mb-8 p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs text-slate-300 leading-relaxed space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-semibold font-mono text-[11px] uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>Bar Council of India Rule 36 Compliance Declaration</span>
          </div>
          <p className="text-slate-400 text-[11px] leading-relaxed">
            As per the Bar Council of India Rules (Rule 36, Section IV, Chapter II, Part VI of the Bar Council of India Rules framed under the Advocates Act, 1961), advocates are prohibited from soliciting work or advertising their practice directly or indirectly. The directory on Raoz Legal does not rank advocates, display subjective star ratings, publish unverified reviews, or offer paid search promotions. It functions strictly as an informational registry where verified advocates have submitted formal written consent to publish their official institutional enrolment details.
          </p>
        </div>

        {!isEnabled ? (
          /* Disabled State Screen per prompt instruction */
          <div className="p-8 sm:p-12 text-center rounded-xl border border-slate-800 bg-[#0c1c30]/60 max-w-2xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center mx-auto text-amber-400">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-serif">
              Directory Under Regulatory Compliance Audit
            </h3>
            <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">
              This module is currently preserved in a restricted compliance status while our advocate onboarding model and publication practices undergo independent review against Bar Council of India guidelines.
            </p>
            <p className="text-[11px] text-slate-400 font-mono">
              You can still request legal consultation or case assistance through our central coordination team.
            </p>
            <div className="pt-2">
              <button
                onClick={() =>
                  alert(
                    'To toggle Directory Mode, please use the Admin Dashboard portal with verified administrative authorization.'
                  )
                }
                className="text-xs text-amber-400 hover:text-amber-300 underline underline-offset-4 cursor-pointer"
              >
                Administrator Preview Toggle
              </button>
            </div>
          </div>
        ) : (
          /* Active Directory with Filters and Verified Records */
          <div className="space-y-6">
            {/* Search & Filter Strip */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">State</label>
                <select
                  value={filterState}
                  onChange={(e) => setFilterState(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                >
                  <option value="all">All States</option>
                  {INDIAN_STATES_AND_CITIES.map((s) => (
                    <option key={s.state} value={s.state}>
                      {s.state}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">City</label>
                <select
                  value={filterCity}
                  onChange={(e) => setFilterCity(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                >
                  <option value="all">All Cities</option>
                  {INDIAN_STATES_AND_CITIES.flatMap((s) => s.cities).map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">Practice Area</label>
                <select
                  value={filterPractice}
                  onChange={(e) => setFilterPractice(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                >
                  <option value="all">All Practice Areas</option>
                  {POPULAR_LEGAL_SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">Language</label>
                <select
                  value={filterLanguage}
                  onChange={(e) => setFilterLanguage(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                >
                  <option value="all">All Languages</option>
                  {POPULAR_LANGUAGES.map((l) => (
                    <option key={l} value={l.split(' ')[0]}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">Search Name / No.</label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Advocate or D/..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-8 pr-2.5 py-1.5 text-xs text-white placeholder-slate-500"
                  />
                  <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Advocate Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredAdvocates.map((adv) => (
                <div
                  key={adv.id}
                  className="p-5 rounded-xl border border-slate-800 bg-[#0e213b]/70 hover:bg-[#0e213b] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-bold text-white font-serif">
                            Adv. {adv.fullName}
                          </h3>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            <span>Verified</span>
                          </span>
                        </div>
                        <div className="text-xs text-slate-400 font-mono mt-0.5">
                          Enrolment: <strong className="text-slate-200">{adv.enrolmentNumber}</strong>
                        </div>
                        <div className="text-[11px] text-slate-500 font-sans">
                          {adv.stateBarCouncil} · {adv.experienceYears} Years at Bar
                        </div>
                      </div>

                      <div className="text-right text-xs text-slate-400 font-mono">
                        <div>{adv.city}</div>
                        <div className="text-[11px] text-slate-500">{adv.state}</div>
                      </div>
                    </div>

                    {/* Qualifications & Degrees */}
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      {adv.qualifications.map((q, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono text-slate-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800"
                        >
                          {q}
                        </span>
                      ))}
                    </div>

                    {/* Practice Areas */}
                    <div className="space-y-1 mb-4">
                      <div className="text-[11px] text-slate-400 uppercase font-mono tracking-wider">
                        Areas of Practice:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {adv.practiceAreas.map((pa, idx) => (
                          <span
                            key={idx}
                            className="text-xs text-slate-200 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800/60"
                          >
                            {pa}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Languages & Modes */}
                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span>Languages: {adv.languages.join(', ')}</span>
                      <span className="capitalize">{adv.modesOffered.join(', ')}</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">
                      BCI Written Consent on File
                    </span>
                    <button
                      onClick={() => onSelectAdvocateForConsultation(adv)}
                      className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Request Consultation</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredAdvocates.length === 0 && (
              <div className="p-8 text-center text-xs text-slate-400 border border-slate-800 rounded-xl">
                No verified advocate record matches the selected filters.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
