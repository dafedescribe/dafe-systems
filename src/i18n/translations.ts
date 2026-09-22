import type { LanguageCode } from './languages';

export type TranslationKey = keyof typeof english;

const english = {
  'nav.industry': 'INDUSTRY',
  'nav.automation': 'AUTOMATION',
  'nav.work': 'WORK',
  'nav.teaching': 'TEACHING',
  'nav.notes': 'NOTES',
  'nav.about': 'ABOUT',
  'nav.contact': 'CONTACT',
  'nav.showWorkflow': 'Show Me the Workflow',
  'nav.downloadCv': 'Download CV (PDF)',
  'nav.open': 'Open Navigation',
  'nav.close': 'Close Navigation',
  'nav.language': 'Language',
  'footer.submit': 'Submit a Workflow',
  'footer.directInquiry': 'Direct Inquiry',
  'home.eyebrow': 'Anthony Amalega · DafeDeScribe',
  'home.title': 'I build systems for work that has outgrown manual handling.',
  'home.primaryCta': 'Discuss a Workflow',
  'home.secondaryCta': 'Explore Documented Work',
  'home.location': 'Based in Ibadan, Nigeria · Working globally',
  'contact.eyebrow': 'Direct Engineering Consultation',
  'contact.title': 'Show me the workflow.',
  'contact.submit': 'Submit Workflow Details',
  'contact.trainingSubmit': 'Submit Training Inquiry',
  'contact.sending': 'Sending…',
  'contact.received': 'Inquiry Received.',
  'contact.whatsapp': 'Or message directly on WhatsApp (+234 913 248 0302)',
  'about.eyebrow': 'Founder & Systems Builder',
  'about.active': 'Active Inquiries Open',
  'about.cv': 'Download CV (PDF)',
  'about.capabilities': 'Core Technical Capabilities',
  'about.proof': 'Representative Work & Proof',
  'about.credentials': 'Education & Credentials',
  'tender.eyebrow': 'Procurement Monitoring & Opportunity Triage',
  'tender.title': 'Stop checking the same tender sources every morning.',
  'tender.governance': 'Operational Governance',
  'tender.principle': 'Automate discovery and summarization. Keep bidding decisions human.',
  'tender.related': 'Related Technical Articles',
  'tender.ctaEyebrow': 'Opportunity Pipeline Audit',
  'tender.ctaTitle': 'Show Me Your Tender Sources',
  'tender.ctaButton': 'Show Me Your Tender Sources',
  'common.englishFallback': 'English',
} as const;

type Catalog = Record<TranslationKey, string>;

const translations: Record<LanguageCode, Catalog> = {
  en: english,
  fr: {
    ...english,
    'nav.industry': 'INDUSTRIE', 'nav.automation': 'AUTOMATISATION', 'nav.work': 'PROJETS', 'nav.teaching': 'FORMATION', 'nav.notes': 'NOTES', 'nav.about': 'À PROPOS', 'nav.contact': 'CONTACT', 'nav.showWorkflow': 'Présentez-moi votre processus', 'nav.downloadCv': 'Télécharger le CV (PDF)', 'nav.language': 'Langue', 'footer.submit': 'Soumettre un processus', 'footer.directInquiry': 'Demande directe', 'home.title': 'Je conçois des systèmes pour les activités qui ont dépassé le traitement manuel.', 'home.primaryCta': 'Discuter d’un processus', 'home.secondaryCta': 'Voir les projets vérifiés', 'home.location': 'Basé à Ibadan, au Nigeria · Travail à l’international', 'contact.title': 'Montrez-moi votre processus.', 'contact.submit': 'Envoyer les détails', 'contact.trainingSubmit': 'Envoyer la demande de formation', 'contact.sending': 'Envoi…', 'contact.received': 'Demande reçue.', 'contact.whatsapp': 'Ou écrivez directement sur WhatsApp (+234 913 248 0302)', 'about.eyebrow': 'Fondateur et constructeur de systèmes', 'about.active': 'Demandes ouvertes', 'about.cv': 'Télécharger le CV (PDF)', 'about.capabilities': 'Compétences techniques clés', 'about.proof': 'Réalisations et preuves', 'about.credentials': 'Formation et références', 'tender.eyebrow': 'Suivi des marchés et tri des opportunités', 'tender.title': 'Arrêtez de vérifier les mêmes sources chaque matin.', 'tender.governance': 'Gouvernance opérationnelle', 'tender.principle': 'Automatisez la découverte et le résumé. Gardez les décisions humaines.', 'tender.related': 'Articles techniques associés', 'tender.ctaEyebrow': 'Audit du pipeline d’opportunités', 'tender.ctaTitle': 'Montrez-moi vos sources de marchés', 'tender.ctaButton': 'Montrez-moi vos sources de marchés',
  },
  pt: {
    ...english,
    'nav.industry': 'INDÚSTRIA', 'nav.automation': 'AUTOMAÇÃO', 'nav.work': 'PROJETOS', 'nav.teaching': 'FORMAÇÃO', 'nav.notes': 'NOTAS', 'nav.about': 'SOBRE', 'nav.contact': 'CONTACTO', 'nav.showWorkflow': 'Mostre-me o processo', 'nav.downloadCv': 'Baixar CV (PDF)', 'nav.language': 'Idioma', 'footer.submit': 'Enviar um processo', 'footer.directInquiry': 'Contacto direto', 'home.title': 'Construo sistemas para trabalhos que já ultrapassaram o processamento manual.', 'home.primaryCta': 'Falar sobre um processo', 'home.secondaryCta': 'Ver trabalho comprovado', 'home.location': 'Baseado em Ibadan, Nigéria · Trabalho globalmente', 'contact.title': 'Mostre-me o seu processo.', 'contact.submit': 'Enviar detalhes do processo', 'contact.trainingSubmit': 'Enviar pedido de formação', 'contact.sending': 'A enviar…', 'contact.received': 'Pedido recebido.', 'contact.whatsapp': 'Ou envie uma mensagem pelo WhatsApp (+234 913 248 0302)', 'about.eyebrow': 'Fundador e construtor de sistemas', 'about.active': 'Pedidos abertos', 'about.cv': 'Baixar CV (PDF)', 'about.capabilities': 'Competências técnicas principais', 'about.proof': 'Trabalho representativo e provas', 'about.credentials': 'Formação e credenciais', 'tender.eyebrow': 'Monitorização de concursos e triagem de oportunidades', 'tender.title': 'Pare de verificar as mesmas fontes de concursos todas as manhãs.', 'tender.governance': 'Governança operacional', 'tender.principle': 'Automatize a descoberta e os resumos. Mantenha as decisões humanas.', 'tender.related': 'Artigos técnicos relacionados', 'tender.ctaEyebrow': 'Auditoria do pipeline de oportunidades', 'tender.ctaTitle': 'Mostre-me as suas fontes de concursos', 'tender.ctaButton': 'Mostre-me as suas fontes de concursos',
  },
  es: {
    ...english,
    'nav.industry': 'INDUSTRIA', 'nav.automation': 'AUTOMATIZACIÓN', 'nav.work': 'PROYECTOS', 'nav.teaching': 'FORMACIÓN', 'nav.notes': 'NOTAS', 'nav.about': 'SOBRE MÍ', 'nav.contact': 'CONTACTO', 'nav.showWorkflow': 'Muéstrame el proceso', 'nav.downloadCv': 'Descargar CV (PDF)', 'nav.language': 'Idioma', 'footer.submit': 'Enviar un proceso', 'footer.directInquiry': 'Consulta directa', 'home.title': 'Construyo sistemas para trabajos que han superado la gestión manual.', 'home.primaryCta': 'Hablar sobre un proceso', 'home.secondaryCta': 'Explorar trabajo verificado', 'home.location': 'Basado en Ibadan, Nigeria · Trabajo globalmente', 'contact.title': 'Muéstrame el proceso.', 'contact.submit': 'Enviar detalles del proceso', 'contact.trainingSubmit': 'Enviar consulta de formación', 'contact.sending': 'Enviando…', 'contact.received': 'Consulta recibida.', 'contact.whatsapp': 'O escribe directamente por WhatsApp (+234 913 248 0302)', 'about.eyebrow': 'Fundador y constructor de sistemas', 'about.active': 'Consultas abiertas', 'about.cv': 'Descargar CV (PDF)', 'about.capabilities': 'Capacidades técnicas principales', 'about.proof': 'Trabajo representativo y pruebas', 'about.credentials': 'Educación y credenciales', 'tender.eyebrow': 'Monitoreo de licitaciones y triaje de oportunidades', 'tender.title': 'Deja de revisar las mismas fuentes de licitaciones cada mañana.', 'tender.governance': 'Gobernanza operativa', 'tender.principle': 'Automatiza el descubrimiento y los resúmenes. Mantén humanas las decisiones.', 'tender.related': 'Artículos técnicos relacionados', 'tender.ctaEyebrow': 'Auditoría del pipeline de oportunidades', 'tender.ctaTitle': 'Muéstrame tus fuentes de licitación', 'tender.ctaButton': 'Muéstrame tus fuentes de licitación',
  },
  de: {
    ...english,
    'nav.industry': 'INDUSTRIE', 'nav.automation': 'AUTOMATISIERUNG', 'nav.work': 'PROJEKTE', 'nav.teaching': 'SCHULUNG', 'nav.notes': 'NOTIZEN', 'nav.about': 'ÜBER MICH', 'nav.contact': 'KONTAKT', 'nav.showWorkflow': 'Zeigen Sie mir den Ablauf', 'nav.downloadCv': 'CV herunterladen (PDF)', 'nav.language': 'Sprache', 'footer.submit': 'Prozess einreichen', 'footer.directInquiry': 'Direkte Anfrage', 'home.title': 'Ich entwickle Systeme für Arbeit, die manuelle Abläufe überholt hat.', 'home.primaryCta': 'Über einen Ablauf sprechen', 'home.secondaryCta': 'Verifizierte Arbeit ansehen', 'home.location': 'Sitz in Ibadan, Nigeria · Weltweit tätig', 'contact.title': 'Zeigen Sie mir den Ablauf.', 'contact.submit': 'Prozessdetails senden', 'contact.trainingSubmit': 'Schulungsanfrage senden', 'contact.sending': 'Wird gesendet…', 'contact.received': 'Anfrage erhalten.', 'contact.whatsapp': 'Oder direkt über WhatsApp schreiben (+234 913 248 0302)', 'about.eyebrow': 'Gründer und Systementwickler', 'about.active': 'Anfragen offen', 'about.cv': 'CV herunterladen (PDF)', 'about.capabilities': 'Zentrale technische Fähigkeiten', 'about.proof': 'Ausgewählte Arbeit und Nachweise', 'about.credentials': 'Ausbildung und Referenzen', 'tender.eyebrow': 'Ausschreibungsmonitoring und Chancentriage', 'tender.title': 'Prüfen Sie nicht jeden Morgen dieselben Ausschreibungsquellen.', 'tender.governance': 'Operative Governance', 'tender.principle': 'Automatisieren Sie Suche und Zusammenfassung. Behalten Sie Gebotsentscheidungen beim Menschen.', 'tender.related': 'Verwandte technische Artikel', 'tender.ctaEyebrow': 'Audit der Chancenpipeline', 'tender.ctaTitle': 'Zeigen Sie mir Ihre Ausschreibungsquellen', 'tender.ctaButton': 'Zeigen Sie mir Ihre Ausschreibungsquellen',
  },
  tr: {
    ...english,
    'nav.industry': 'SEKTÖR', 'nav.automation': 'OTOMASYON', 'nav.work': 'ÇALIŞMALAR', 'nav.teaching': 'EĞİTİM', 'nav.notes': 'NOTLAR', 'nav.about': 'HAKKIMDA', 'nav.contact': 'İLETİŞİM', 'nav.showWorkflow': 'İş akışınızı gösterin', 'nav.downloadCv': 'CV indir (PDF)', 'nav.language': 'Dil', 'footer.submit': 'İş akışı gönder', 'footer.directInquiry': 'Doğrudan iletişim', 'home.title': 'Manuel işlemleri aşmış işler için sistemler kuruyorum.', 'home.primaryCta': 'Bir iş akışını görüşün', 'home.secondaryCta': 'Doğrulanmış çalışmaları inceleyin', 'home.location': 'Ibadan, Nijerya merkezli · Küresel çalışır', 'contact.title': 'İş akışınızı gösterin.', 'contact.submit': 'İş akışı detaylarını gönder', 'contact.trainingSubmit': 'Eğitim talebi gönder', 'contact.sending': 'Gönderiliyor…', 'contact.received': 'Talebiniz alındı.', 'contact.whatsapp': 'Veya WhatsApp üzerinden doğrudan mesaj gönderin (+234 913 248 0302)', 'about.eyebrow': 'Kurucu ve sistem geliştirici', 'about.active': 'Başvurular açık', 'about.cv': 'CV indir (PDF)', 'about.capabilities': 'Temel teknik yetkinlikler', 'about.proof': 'Örnek çalışmalar ve kanıtlar', 'about.credentials': 'Eğitim ve yeterlilikler', 'tender.eyebrow': 'İhale izleme ve fırsat önceliklendirme', 'tender.title': 'Her sabah aynı ihale kaynaklarını kontrol etmeyi bırakın.', 'tender.governance': 'Operasyonel yönetişim', 'tender.principle': 'Keşfi ve özetlemeyi otomatikleştirin. Teklif kararlarını insanlarda tutun.', 'tender.related': 'İlgili teknik yazılar', 'tender.ctaEyebrow': 'Fırsat hattı denetimi', 'tender.ctaTitle': 'İhale kaynaklarınızı gösterin', 'tender.ctaButton': 'İhale kaynaklarınızı gösterin',
  },
};

export function translate(language: LanguageCode, key: TranslationKey | string): string {
  return translations[language]?.[key as TranslationKey] || translations.en[key as TranslationKey] || key;
}
