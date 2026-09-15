"use client";

import { useState } from "react";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/site";

export function TermsContent() {
  const [language, setLanguage] = useState<"en" | "hi">("en");

  return (
    <section className="py-12 sm:py-16">
      <div className="container-page max-w-4xl">
        {/* Top Header Card */}
        <div className="rounded-md border border-line bg-white p-6 shadow-sm sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-navy/5 px-3 py-1 text-xs font-semibold text-gold-dark">
                <span className="h-2 w-2 rounded-full bg-gold" />
                <span>SS OIL AND FIBRES Brand Seal</span>
              </div>
              <p className="mt-2 text-xs font-semibold tracking-wider text-muted uppercase">
                Legal Information
              </p>
              <h1 className="mt-1 font-display text-3xl font-bold text-navy sm:text-4xl">
                Terms & Conditions
              </h1>
            </div>

            {/* Language Switcher Button Group */}
            <div className="flex items-center rounded-lg border border-line bg-paper p-1 shadow-xs">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`rounded-md px-3.5 py-1.5 text-xs font-bold transition-all ${
                  language === "en"
                    ? "bg-navy text-white shadow-xs"
                    : "text-muted hover:text-navy"
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguage("hi")}
                className={`rounded-md px-3.5 py-1.5 text-xs font-bold transition-all ${
                  language === "hi"
                    ? "bg-navy text-white shadow-xs"
                    : "text-muted hover:text-navy"
                }`}
              >
                हिंदी
              </button>
            </div>
          </div>

          {/* Intro Description */}
          <p className="mt-6 text-sm leading-relaxed text-ink/80 sm:text-base">
            {language === "en" ? (
              <>
                These terms and conditions outline the general commercial understanding for dealings with <strong>SS OIL AND FIBRES</strong>. By placing an order, confirming a bargain, or entering into a business arrangement with us, you agree to follow the terms stated below.
              </>
            ) : (
              <>
                ये नियम एवं शर्तें <strong>SS OIL AND FIBRES</strong> के साथ व्यावसायिक लेनदेन की सामान्य वाणिज्यिक समझ को रेखांकित करती हैं। कोई भी ऑर्डर देकर, सौदा पक्का करके, या हमारे साथ व्यावसायिक व्यवस्था में प्रवेश करके, आप नीचे दी गई शर्तों का पालन करने के लिए सहमत होते हैं।
              </>
            )}
          </p>

          {/* Key Summary Badges Grid */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-sm border border-line/80 bg-paper p-4 text-center">
              <span className="text-[0.68rem] font-bold tracking-wider text-muted uppercase">
                {language === "en" ? "Jurisdiction" : "अदालती क्षेत्राधिकार"}
              </span>
              <p className="mt-1 font-display text-lg font-bold text-navy">
                {language === "en" ? "Bhiwani, Haryana" : "भिवानी, हरियाणा"}
              </p>
            </div>

            <div className="rounded-sm border border-line/80 bg-paper p-4 text-center">
              <span className="text-[0.68rem] font-bold tracking-wider text-muted uppercase">
                {language === "en" ? "Payment" : "भुगतान"}
              </span>
              <p className="mt-1 font-display text-lg font-bold text-navy">
                {language === "en" ? "As per agreed terms" : "सहमत शर्तों के अनुसार"}
              </p>
            </div>

            <div className="rounded-sm border border-line/80 bg-paper p-4 text-center">
              <span className="text-[0.68rem] font-bold tracking-wider text-muted uppercase">
                {language === "en" ? "Dispatch" : "वाहन प्रेषण"}
              </span>
              <p className="mt-1 font-display text-lg font-bold text-navy">
                {language === "en" ? "After payment" : "भुगतान के उपरांत"}
              </p>
            </div>
          </div>

          {/* Clauses List */}
          <div className="mt-10 space-y-6">
            {/* Clause 01 */}
            <article className="rounded-md border border-line/70 bg-cream/30 p-5 transition-colors hover:border-gold/50 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="font-display text-xl font-bold text-gold">01</span>
                <h2 className="font-display text-lg font-bold text-navy sm:text-xl">
                  {language === "en" ? "1. Jurisdiction" : "1. अदालती क्षेत्राधिकार (Jurisdiction)"}
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink/80 sm:text-base">
                {language === "en" ? (
                  <>
                    All disputes arising out of or in connection with any transaction, supply, bargain or business arrangement with <strong>SS OIL AND FIBRES</strong> shall be subject to the exclusive jurisdiction of the courts at <strong>Bhiwani, Haryana</strong>.
                  </>
                ) : (
                  <>
                    <strong>SS OIL AND FIBRES</strong> के साथ किसी भी लेनदेन, आपूर्ति, सौदे या व्यावसायिक व्यवस्था से उत्पन्न या उससे संबंधित सभी विवाद केवल <strong>भिवानी, हरियाणा</strong> की अदालतों के अनन्य क्षेत्राधिकार के अधीन होंगे।
                  </>
                )}
              </p>
            </article>

            {/* Clause 02 */}
            <article className="rounded-md border border-line/70 bg-cream/30 p-5 transition-colors hover:border-gold/50 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="font-display text-xl font-bold text-gold">02</span>
                <h2 className="font-display text-lg font-bold text-navy sm:text-xl">
                  {language === "en" ? "2. Payment Terms" : "2. भुगतान की शर्तें (Payment Terms)"}
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink/80 sm:text-base">
                {language === "en" ? (
                  <>
                    All transactions shall be carried out strictly as per the agreed payment terms and payment conditions confirmed for each order or bargain. Payment must be completed according to the schedule and mode communicated by the company.
                  </>
                ) : (
                  <>
                    सभी लेनदेन प्रत्येक ऑर्डर या सौदे के लिए पुष्टि की गई सहमत भुगतान शर्तों और नियमों के अनुसार ही किए जाएंगे। भुगतान कंपनी द्वारा सूचित समय सारिणी और माध्यम के अनुसार पूरा किया जाना अनिवार्य है।
                  </>
                )}
              </p>
            </article>

            {/* Clause 03 */}
            <article className="rounded-md border border-line/70 bg-cream/30 p-5 transition-colors hover:border-gold/50 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="font-display text-xl font-bold text-gold">03</span>
                <h2 className="font-display text-lg font-bold text-navy sm:text-xl">
                  {language === "en" ? "3. Vehicle Dispatch" : "3. वाहन प्रेषण (Vehicle Dispatch)"}
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink/80 sm:text-base">
                {language === "en" ? (
                  <>
                    Vehicle dispatch from the company shall be arranged only after receipt of payment, as per the applicable payment terms. Dispatch will not be processed before payment confirmation, unless expressly agreed otherwise in writing by the company.
                  </>
                ) : (
                  <>
                    कंपनी से वाहन प्रेषण (डिस्पैच) केवल लागू भुगतान शर्तों के अनुसार भुगतान प्राप्त होने के बाद ही व्यवस्थित किया जाएगा। जब तक कंपनी द्वारा लिखित रूप में विशेष सहमति न दी गई हो, भुगतान की पुष्टि से पहले डिस्पैच की प्रक्रिया शुरू नहीं की जाएगी।
                  </>
                )}
              </p>
            </article>

            {/* Clause 04 */}
            <article className="rounded-md border border-line/70 bg-cream/30 p-5 transition-colors hover:border-gold/50 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="font-display text-xl font-bold text-gold">04</span>
                <h2 className="font-display text-lg font-bold text-navy sm:text-xl">
                  {language === "en"
                    ? "4. Bargains Through Brokers / Channel Partners"
                    : "4. दलालों / अधिकृत चैनल भागीदारों के माध्यम से सौदे"}
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink/80 sm:text-base">
                {language === "en" ? (
                  <>
                    Bargains and commercial deals shall be accepted only through authorised brokers or approved channel partners. Direct unauthorised bargains outside this channel may not be recognised by the company.
                  </>
                ) : (
                  <>
                    सौदे और वाणिज्यिक करार केवल अधिकृत दलालों (ब्रोकर्स) या स्वीकृत चैनल भागीदारों के माध्यम से ही स्वीकार किए जाएंगे। इस माध्यम के बाहर प्रत्यक्ष अनधिकृत सौदों को कंपनी द्वारा मान्यता नहीं दी जाएगी।
                  </>
                )}
              </p>
            </article>

            {/* Clause 05 */}
            <article className="rounded-md border border-line/70 bg-cream/30 p-5 transition-colors hover:border-gold/50 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="font-display text-xl font-bold text-gold">05</span>
                <h2 className="font-display text-lg font-bold text-navy sm:text-xl">
                  {language === "en" ? "5. General" : "5. सामान्य नियम (General)"}
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink/80 sm:text-base">
                {language === "en" ? (
                  <>
                    <strong>SS OIL AND FIBRES</strong> reserves the right to update these terms from time to time. Specific commercial terms for individual orders, supplies or partnerships may be confirmed separately in writing or through authorised communication.
                  </>
                ) : (
                  <>
                    <strong>SS OIL AND FIBRES</strong> समय-समय पर इन शर्तों को अपडेट करने का अधिकार सुरक्षित रखता है। व्यक्तिगत आदेशों, आपूर्तियों या साझेदारियों के लिए विशिष्ट व्यावसायिक शर्तें अलग से लिखित में या अधिकृत संचार के माध्यम से तय की जा सकती हैं।
                  </>
                )}
              </p>
            </article>
          </div>

          {/* Need Clarity Card */}
          <div className="mt-10 rounded-md border border-gold/40 bg-navy p-6 text-white sm:p-8">
            <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
              {language === "en" ? "Need clarity?" : "किसी स्पष्टीकरण की आवश्यकता है?"}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              {language === "en" ? (
                <>
                  For clarifications on payment, dispatch or authorised channel partners, please contact <strong>SS OIL AND FIBRES</strong> using the details on the Contact page.
                </>
              ) : (
                <>
                  भुगतान, वाहन प्रेषण या अधिकृत चैनल भागीदारों से संबंधित किसी भी स्पष्टीकरण के लिए कृपया संपर्क पृष्ठ (Contact page) पर दिए गए विवरण का उपयोग करके <strong>SS OIL AND FIBRES</strong> से संपर्क करें।
                </>
              )}
            </p>

            <div className="mt-4 rounded-sm border border-white/10 bg-white/5 p-3.5 text-xs text-gold-soft">
              <p className="font-semibold text-white">
                {language === "en" ? "Commercial Trading Address:" : "व्यावसायिक व्यापारिक पता:"}
              </p>
              <p className="mt-0.5 text-sm">Devsar, Bhiwani, Haryana – 127021, India</p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="btn btn-gold py-2 px-4 text-xs font-bold"
              >
                📞 Call {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-emerald-500 bg-emerald-600/90 py-2 px-4 text-xs text-white hover:bg-emerald-600"
              >
                💬 WhatsApp Desk
              </a>
              <Link
                href="/contact"
                className="btn btn-outline py-2 px-4 text-xs font-semibold"
              >
                Go to Contact Page →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
