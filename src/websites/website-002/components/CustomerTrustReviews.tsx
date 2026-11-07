import React from 'react';
import { Star, ShieldCheck, CheckCircle2, Award, Users, FileCheck } from 'lucide-react';

export function CustomerTrustReviews() {
  const reviews = [
    {
      name: 'Aditya Kashyap',
      role: 'Co-founder, QuickRoute Logistics',
      city: 'Bengaluru, Karnataka',
      rating: 5,
      date: '3 days ago',
      title: 'Incorporated our Pvt Ltd & set up NDAs in 8 days',
      comment:
        'The SPICe+ MCA process through YOURADVOCATEE was seamless. Their team drafted our MOA and AOA cleanly, and we got our Certificate of Incorporation without back-and-forth rejections. Outstanding support.',
    },
    {
      name: 'Pooja Iyer',
      role: 'Independent Architect & Consultant',
      city: 'Chennai, Tamil Nadu',
      rating: 5,
      date: '1 week ago',
      title: 'AdvocateSign made client agreements hassle-free',
      comment:
        'I draft all my consultancy client retainers here. The dynamic questionnaire is clear, the document cites the Indian Contract Act correctly, and my clients can sign on their phones within minutes.',
    },
    {
      name: 'Manish Agarwal',
      role: 'Commercial Property Owner',
      city: 'Gurugram, Haryana',
      rating: 5,
      date: '2 weeks ago',
      title: 'Solid Rental Agreement vetted by Indian lawyers',
      comment:
        'Saved me ₹8,000 in upfront legal broker fees. The stamp duty guidelines and security deposit forfeiture terms were accurately customized for Haryana tenancy rules. Highly recommended!',
    },
  ];

  const stats = [
    { value: '500,000+', label: 'Indian Documents Created', icon: <FileCheck className="w-5 h-5 text-[#990000]" /> },
    { value: '35,000+', label: 'Businesses Incorporated', icon: <Award className="w-5 h-5 text-[#990000]" /> },
    { value: '1,200+', label: 'Verified Advocates in Network', icon: <Users className="w-5 h-5 text-[#990000]" /> },
    { value: '4.8 / 5', label: 'Average Client Trust Rating', icon: <Star className="w-5 h-5 text-amber-500 fill-amber-400" /> },
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E8E8E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Statistics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-[#FAF9F5] rounded-2xl border border-[#E8E8E3] mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-2 p-2 rounded-xl bg-white border border-[#E8E8E3] shadow-2xs">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-black text-[#1D1C1A] font-sans">
                {stat.value}
              </div>
              <div className="text-xs text-[#5D5B56] mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1D1C1A] font-sans tracking-tight">
            Trusted by Indian founders, landlords & professionals
          </h2>
          <p className="text-sm text-[#5D5B56] mt-2">
            Over 100,000 Indian businesses and individuals rely on YOURADVOCATEE for fast, accurate legal solutions.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-[#E8E8E3] bg-white hover:border-[#990000]/30 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-neutral-400 font-mono">{rev.date}</span>
                </div>

                <h3 className="text-sm font-bold text-[#1D1C1A] mb-2 leading-snug">
                  "{rev.title}"
                </h3>
                <p className="text-xs text-[#5D5B56] leading-relaxed mb-6">
                  {rev.comment}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E8E3] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#1D1C1A]">{rev.name}</div>
                  <div className="text-[11px] text-neutral-500">{rev.role}</div>
                  <div className="text-[10px] text-neutral-400 font-mono">{rev.city}</div>
                </div>
                <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
