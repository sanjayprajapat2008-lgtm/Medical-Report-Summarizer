(function() {
  const translations = {
    en: {
      pageTitle: 'Medical Report Summarizer - AI-Powered Report Analysis',
      navHome: 'Home',
      navAnalyzer: 'Analyzer',
      navAbout: 'About',
      navContact: 'Contact',
      heroTitle: 'Medical Report Summarizer',
      heroSubtitle: 'Get plain-English summaries of complex medical reports in seconds',
      heroCta: 'Get Started',
      featureUploadTitle: 'Upload or Paste',
      featureUploadDesc: 'Easily upload PDF/text files or paste report content directly',
      featureAiTitle: 'AI Analysis',
      featureAiDesc: 'Advanced AI breaks down complex medical terminology',
      featureResultsTitle: 'Clear Results',
      featureResultsDesc: 'Get organized findings, conditions, and next steps',
      featureSpeedTitle: 'Instant Summary',
      featureSpeedDesc: 'Get results in seconds, not minutes',
      featurePrivacyTitle: 'Private & Secure',
      featurePrivacyDesc: 'Your data is never stored or shared',
      featureEasyTitle: 'Easy to Understand',
      featureEasyDesc: 'Plain English explanations of all findings',
      ctaTitle: 'Ready to understand your medical reports better?',
      ctaButton: 'Start Analyzing Now',
      footerTitle: 'MedReport',
      footerText: 'Making medical reports understandable for everyone.',
      footerLinksTitle: 'Quick Links',
      footerLegalTitle: 'Legal',
      linkDisclaimer: 'Disclaimer',
      linkPrivacy: 'Privacy Policy',
      linkTerms: 'Terms of Service',
      aboutPageTitle: 'About MedReport',
      aboutPageSubtitle: 'Empowering patients through clear, understandable health information',
      missionTitle: 'Our Mission',
      missionText: 'MedReport is dedicated to bridging the gap between complex medical terminology and patient understanding.',
      howTitle: 'How It Works',
      card1Title: 'Upload or Paste',
      card1Text: 'Simply upload your medical report as a file or paste the text directly into our analyzer.',
      card2Title: 'AI Analysis',
      card2Text: 'Our advanced AI system analyzes your report and identifies key findings, conditions, and metrics.',
      card3Title: 'Plain English',
      card3Text: 'We convert complex medical jargon into clear, easy-to-understand explanations.',
      card4Title: 'Next Steps',
      card4Text: 'Receive personalized recommendations on what to do next with your health information.',
      privacyTitle: 'Privacy & Security',
      privacyText: 'Your health information is extremely sensitive. We take strong measures to protect your data.',
      disclaimerTitle: 'Disclaimer',
      disclaimerText: '<strong>⚠️ IMPORTANT:</strong> MedReport is an educational tool designed to help patients understand medical reports. It is NOT a substitute for professional medical advice, diagnosis, or treatment.',
      contactInfoTitle: 'Contact & Support',
      contactInfoText: 'Have questions or feedback? We would love to hear from you. <a href="contact.html">Get in touch</a> with our team.',
      contactPageTitle: 'Contact Us - MedReport',
      contactHeaderTitle: 'Get in Touch',
      contactHeaderSubtitle: 'Have questions? We would love to hear from you.',
      contactFormTitle: 'Send us a Message',
      labelName: 'Name',
      labelEmail: 'Email',
      labelSubject: 'Subject',
      labelMessage: 'Message',
      sendButton: 'Send Message',
      otherWaysTitle: 'Other Ways to Reach Us',
      emailTitle: 'Email',
      socialTitle: 'Social Media',
      faqTitle: 'FAQ',
      analyzerPageTitle: 'Medical Report Analyzer - MedReport',
      analyzerTitle: 'Medical Report Analyzer',
      analyzerSubtitle: 'Upload or paste your report — get a plain-English summary with key findings',
      uploadText: 'Drop PDF or text file here',
      uploadHint: 'or click to browse',
      orDivider: 'or paste report text',
      textAreaPlaceholder: 'Paste medical report text here...',
      analyzeButtonLabel: 'Analyze Report ↗',
      loadSampleLabel: 'Load sample report',
      clearLabel: 'Clear',
      supportTitle: 'Support',
      supportText: 'Questions? <a href="contact.html">Contact us</a>'
    },
    hi: {
      pageTitle: 'मेडिकल रिपोर्ट सारांश - AI संचालित रिपोर्ट विश्लेषण',
      navHome: 'होम',
      navAnalyzer: 'विश्लेषक',
      navAbout: 'हमारे बारे में',
      navContact: 'संपर्क',
      heroTitle: 'मेडिकल रिपोर्ट सारांश',
      heroSubtitle: 'जटिल चिकित्सा रिपोर्ट का सरल हिंदी सारांश सेकंडों में प्राप्त करें',
      heroCta: 'शुरू करें',
      featureUploadTitle: 'अपलोड करें या पेस्ट करें',
      featureUploadDesc: 'PDF/टेक्स्ट फ़ाइलें आसानी से अपलोड करें या सीधे रिपोर्ट पेस्ट करें',
      featureAiTitle: 'AI विश्लेषण',
      featureAiDesc: 'उन्नत AI आपके रिपोर्ट की जटिल चिकित्सा भाषा को तोड़ता है',
      featureResultsTitle: 'स्पष्ट परिणाम',
      featureResultsDesc: 'मुख्य निष्कर्ष, स्थिति, और अगले कदम प्राप्त करें',
      featureSpeedTitle: 'त्वरित सारांश',
      featureSpeedDesc: 'परिणाम कुछ ही सेकंड में पाएं',
      featurePrivacyTitle: 'गोपनीय और सुरक्षित',
      featurePrivacyDesc: 'आपका डेटा कभी संग्रहीत या साझा नहीं किया जाता',
      featureEasyTitle: 'आसान समझ',
      featureEasyDesc: 'सभी निष्कर्षों की सरल व्याख्या',
      ctaTitle: 'क्या आप अपनी मेडिकल रिपोर्ट बेहतर समझने के लिए तैयार हैं?',
      ctaButton: 'अब विश्लेषण शुरू करें',
      footerTitle: 'MedReport',
      footerText: 'हर किसी के लिए मेडिकल रिपोर्ट को समझने योग्य बनाना।',
      footerLinksTitle: 'त्वरित लिंक',
      footerLegalTitle: 'कानूनी',
      linkDisclaimer: 'अस्वीकरण',
      linkPrivacy: 'गोपनीयता नीति',
      linkTerms: 'सेवा की शर्तें',
      aboutPageTitle: 'MedReport के बारे में',
      aboutPageSubtitle: 'स्पष्ट, समझने योग्य स्वास्थ्य जानकारी के माध्यम से मरीजों को सशक्त बनाना',
      missionTitle: 'हमारा मिशन',
      missionText: 'MedReport जटिल चिकित्सा शब्दावली और मरीज की समझ के बीच की खाई को पाटने के लिए समर्पित है।',
      howTitle: 'यह कैसे काम करता है',
      card1Title: 'अपलोड करें या पेस्ट करें',
      card1Text: 'अपनी चिकित्सा रिपोर्ट फ़ाइल के रूप में अपलोड करें या इसे सीधे हमारे विश्लेषक में पेस्ट करें।',
      card2Title: 'AI विश्लेषण',
      card2Text: 'हमारी उन्नत AI आपकी रिपोर्ट का विश्लेषण करती है और मुख्य निष्कर्ष निकालती है।',
      card3Title: 'सरल हिंदी',
      card3Text: 'हम जटिल चिकित्सा शब्दों को स्पष्ट, आसान भाषा में बदलते हैं।',
      card4Title: 'अगले कदम',
      card4Text: 'अपने स्वास्थ्य जानकारी के साथ आगे क्या करें, इसकी व्यक्तिगत सिफारिशें प्राप्त करें।',
      privacyTitle: 'गोपनीयता और सुरक्षा',
      privacyText: 'आपकी स्वास्थ्य जानकारी बेहद संवेदनशील है। हम आपके डेटा की रक्षा के लिए कड़े उपाय करते हैं।',
      disclaimerTitle: 'अस्वीकरण',
      disclaimerText: '<strong>⚠️ IMPORTANT:</strong> MedReport एक शैक्षिक उपकरण है और पेशेवर चिकित्सा सलाह का विकल्प नहीं है।',
      contactInfoTitle: 'संपर्क और समर्थन',
      contactInfoText: 'क्या आपके पास सवाल या प्रतिक्रिया है? <a href="contact.html">हमसे संपर्क करें</a>।',
      contactPageTitle: 'संपर्क करें - MedReport',
      contactHeaderTitle: 'हमसे संपर्क करें',
      contactHeaderSubtitle: 'क्या आपके पास प्रश्न हैं? हम आपकी सहायता करना चाहते हैं।',
      contactFormTitle: 'हमें संदेश भेजें',
      labelName: 'नाम',
      labelEmail: 'ईमेल',
      labelSubject: 'विषय',
      labelMessage: 'संदेश',
      sendButton: 'संदेश भेजें',
      otherWaysTitle: 'हमें पहुंचने के अन्य तरीके',
      emailTitle: 'ईमेल',
      socialTitle: 'सोशल मीडिया',
      faqTitle: 'प्रश्नोत्तरी',
      analyzerPageTitle: 'मेडिकल रिपोर्ट विश्लेषक - MedReport',
      analyzerTitle: 'मेडिकल रिपोर्ट विश्लेषक',
      analyzerSubtitle: 'अपनी रिपोर्ट अपलोड करें या पेस्ट करें — मुख्य निष्कर्षों के साथ सरल हिंदी सारांश प्राप्त करें',
      uploadText: 'यहाँ PDF या टेक्स्ट फ़ाइल छोड़ें',
      uploadHint: 'या ब्राउज़ करने के लिए क्लिक करें',
      orDivider: 'या रिपोर्ट टेक्स्ट पेस्ट करें',
      textAreaPlaceholder: 'यहाँ मेडिकल रिपोर्ट टेक्स्ट पेस्ट करें...',
      analyzeButtonLabel: 'रिपोर्ट विश्लेषण करें ↗',
      loadSampleLabel: 'नमूना रिपोर्ट लोड करें',
      clearLabel: 'साफ़ करें',
      supportTitle: 'समर्थन',
      supportText: 'सवाल? <a href="contact.html">हमसे संपर्क करें</a>'
    }
  };

  function getPreferredLanguage() {
    return localStorage.getItem('siteLanguage') || 'en';
  }

  function setPreferredLanguage(lang) {
    localStorage.setItem('siteLanguage', lang);
    translatePage(lang);
  }

  function translatePage(lang) {
    const dictionary = translations[lang] || translations.en;
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dictionary[key]) {
        el.textContent = dictionary[key];
      }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (dictionary[key]) {
        el.innerHTML = dictionary[key];
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dictionary[key]) {
        el.placeholder = dictionary[key];
      }
    });
    const select = document.getElementById('language-select');
    if (select) {
      select.value = lang;
    }
  }

  function initLanguageSwitcher() {
    const select = document.getElementById('language-select');
    if (select) {
      select.addEventListener('change', function() {
        setPreferredLanguage(this.value);
      });
    }
    translatePage(getPreferredLanguage());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
  } else {
    initLanguageSwitcher();
  }
})();
