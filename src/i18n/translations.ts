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
  'home.eyebrow': 'Odafe Amalega · DafeDeScribe',
  'home.title': 'I build systems for work that has outgrown manual handling.',
  'home.primaryCta': 'Discuss a Workflow',
  'home.secondaryCta': 'Explore Verified Work',
  'contact.eyebrow': 'Direct Engineering Consultation',
  'contact.title': 'Show me the workflow.',
  'contact.submit': 'Submit Workflow Details',
  'contact.trainingSubmit': 'Submit Training Inquiry',
  'contact.sending': 'Sending…',
  'contact.received': 'Inquiry Received.',
  'contact.whatsapp': 'Or message directly on WhatsApp (+2348148794458)',
  'common.englishFallback': 'English',
} as const;

type Catalog = Record<TranslationKey, string>;

const translations: Record<LanguageCode, Catalog> = {
  en: english,
  fr: {
    ...english,
    'nav.industry': 'INDUSTRIE', 'nav.automation': 'AUTOMATISATION', 'nav.work': 'PROJETS', 'nav.teaching': 'FORMATION', 'nav.notes': 'NOTES', 'nav.about': 'À PROPOS', 'nav.contact': 'CONTACT', 'nav.showWorkflow': 'Présentez-moi votre processus', 'nav.downloadCv': 'Télécharger le CV (PDF)', 'nav.language': 'Langue', 'footer.submit': 'Soumettre un processus', 'footer.directInquiry': 'Demande directe', 'home.title': 'Je conçois des systèmes pour les activités qui ont dépassé le traitement manuel.', 'home.primaryCta': 'Discuter d’un processus', 'home.secondaryCta': 'Voir les projets vérifiés', 'contact.title': 'Montrez-moi votre processus.', 'contact.submit': 'Envoyer les détails', 'contact.trainingSubmit': 'Envoyer la demande de formation', 'contact.sending': 'Envoi…', 'contact.received': 'Demande reçue.', 'contact.whatsapp': 'Ou écrivez directement sur WhatsApp (+2348148794458)',
  },
  pt: {
    ...english,
    'nav.industry': 'INDÚSTRIA', 'nav.automation': 'AUTOMAÇÃO', 'nav.work': 'PROJETOS', 'nav.teaching': 'FORMAÇÃO', 'nav.notes': 'NOTAS', 'nav.about': 'SOBRE', 'nav.contact': 'CONTACTO', 'nav.showWorkflow': 'Mostre-me o processo', 'nav.downloadCv': 'Baixar CV (PDF)', 'nav.language': 'Idioma', 'footer.submit': 'Enviar um processo', 'footer.directInquiry': 'Contacto direto', 'home.title': 'Construo sistemas para trabalhos que já ultrapassaram o processamento manual.', 'home.primaryCta': 'Falar sobre um processo', 'home.secondaryCta': 'Ver trabalho comprovado', 'contact.title': 'Mostre-me o seu processo.', 'contact.submit': 'Enviar detalhes do processo', 'contact.trainingSubmit': 'Enviar pedido de formação', 'contact.sending': 'A enviar…', 'contact.received': 'Pedido recebido.', 'contact.whatsapp': 'Ou envie uma mensagem pelo WhatsApp (+2348148794458)',
  },
  es: {
    ...english,
    'nav.industry': 'INDUSTRIA', 'nav.automation': 'AUTOMATIZACIÓN', 'nav.work': 'PROYECTOS', 'nav.teaching': 'FORMACIÓN', 'nav.notes': 'NOTAS', 'nav.about': 'SOBRE MÍ', 'nav.contact': 'CONTACTO', 'nav.showWorkflow': 'Muéstrame el proceso', 'nav.downloadCv': 'Descargar CV (PDF)', 'nav.language': 'Idioma', 'footer.submit': 'Enviar un proceso', 'footer.directInquiry': 'Consulta directa', 'home.title': 'Construyo sistemas para trabajos que han superado la gestión manual.', 'home.primaryCta': 'Hablar sobre un proceso', 'home.secondaryCta': 'Explorar trabajo verificado', 'contact.title': 'Muéstrame el proceso.', 'contact.submit': 'Enviar detalles del proceso', 'contact.trainingSubmit': 'Enviar consulta de formación', 'contact.sending': 'Enviando…', 'contact.received': 'Consulta recibida.', 'contact.whatsapp': 'O escribe directamente por WhatsApp (+2348148794458)',
  },
  de: {
    ...english,
    'nav.industry': 'INDUSTRIE', 'nav.automation': 'AUTOMATISIERUNG', 'nav.work': 'PROJEKTE', 'nav.teaching': 'SCHULUNG', 'nav.notes': 'NOTIZEN', 'nav.about': 'ÜBER MICH', 'nav.contact': 'KONTAKT', 'nav.showWorkflow': 'Zeigen Sie mir den Ablauf', 'nav.downloadCv': 'CV herunterladen (PDF)', 'nav.language': 'Sprache', 'footer.submit': 'Prozess einreichen', 'footer.directInquiry': 'Direkte Anfrage', 'home.title': 'Ich entwickle Systeme für Arbeit, die manuelle Abläufe überholt hat.', 'home.primaryCta': 'Über einen Ablauf sprechen', 'home.secondaryCta': 'Verifizierte Arbeit ansehen', 'contact.title': 'Zeigen Sie mir den Ablauf.', 'contact.submit': 'Prozessdetails senden', 'contact.trainingSubmit': 'Schulungsanfrage senden', 'contact.sending': 'Wird gesendet…', 'contact.received': 'Anfrage erhalten.', 'contact.whatsapp': 'Oder direkt über WhatsApp schreiben (+2348148794458)',
  },
  tr: {
    ...english,
    'nav.industry': 'SEKTÖR', 'nav.automation': 'OTOMASYON', 'nav.work': 'ÇALIŞMALAR', 'nav.teaching': 'EĞİTİM', 'nav.notes': 'NOTLAR', 'nav.about': 'HAKKIMDA', 'nav.contact': 'İLETİŞİM', 'nav.showWorkflow': 'İş akışınızı gösterin', 'nav.downloadCv': 'CV indir (PDF)', 'nav.language': 'Dil', 'footer.submit': 'İş akışı gönder', 'footer.directInquiry': 'Doğrudan iletişim', 'home.title': 'Manuel işlemleri aşmış işler için sistemler kuruyorum.', 'home.primaryCta': 'Bir iş akışını görüşün', 'home.secondaryCta': 'Doğrulanmış çalışmaları inceleyin', 'contact.title': 'İş akışınızı gösterin.', 'contact.submit': 'İş akışı detaylarını gönder', 'contact.trainingSubmit': 'Eğitim talebi gönder', 'contact.sending': 'Gönderiliyor…', 'contact.received': 'Talebiniz alındı.', 'contact.whatsapp': 'Veya WhatsApp üzerinden doğrudan mesaj gönderin (+2348148794458)',
  },
};

export function translate(language: LanguageCode, key: TranslationKey | string): string {
  return translations[language]?.[key as TranslationKey] || translations.en[key as TranslationKey] || key;
}
