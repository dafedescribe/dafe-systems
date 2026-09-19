export interface Project {
  slug: string;
  title: string;
  label: 'CLIENT WORK' | 'INTERNAL BUILD' | 'PROTOTYPE' | 'EXPERIMENT' | 'TRAINING';
  tag: string;
  category: 'Industry' | 'Automation & Data' | 'Web' | 'AI & Media' | 'Teaching' | 'Experiments';
  oneLiner: string;
  situation: string;
  constraint: string;
  build: string;
  workflow: {
    input: string;
    processing: string[];
    output: string;
  };
  result: string;
  technicalNotes: {
    stack: string[];
    architecture: string;
    codeSnippet?: string;
  };
  whatThisProves: string[];
  relatedSlugs: string[];
  featuredOnHome?: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: 'million-row-pipeline',
    title: '1,000,000+ Rows Processed in Under 10 Minutes',
    label: 'INTERNAL BUILD',
    tag: 'DATA / PYTHON / AUTOMATION',
    category: 'Automation & Data',
    oneLiner: 'A chunked Python batch processing engine replacing manual spreadsheet work with deterministic transformations.',
    situation: 'Large tabular exports containing customer transaction histories, multi-currency ledger rows, and inventory movement logs needed repeated consolidation, deduplication, schema normalization, and validation for downstream reporting. Standard spreadsheet software repeatedly crashed, froze, or truncated rows when dealing with over 150,000 entries.',
    constraint: 'Memory limits on standard local hardware (16GB RAM) prevented loading the entire raw 1.2M+ row CSV/XLSX into memory at once. Furthermore, date strings used inconsistent formats (ISO-8601, DD/MM/YYYY, MM/DD/YYYY) and numeric columns had sporadic currency symbols and trailing spaces.',
    build: 'Designed a lightweight chunk-based data pipeline in Python using Polars and generator-based streaming routines. The engine ingests files in 50,000-row chunks, applies deterministic cleaning functions (regex normalization, vectorized date parsing, ISO currency conversion), performs hashing for duplicate detection, and writes compressed, queryable Parquet partitions along with a consolidated analytical summary.',
    workflow: {
      input: 'Unstructured multi-format CSV exports and legacy ledger dumps totaling 1,140,000+ rows.',
      processing: [
        'Stream raw byte chunks into memory buffer without heap explosion',
        'Normalize headers and strip non-numeric glyphs from currency columns',
        'Vectorized date parsing with fallback pattern recognition',
        'MurmurHash3 computation on primary key tuples for rapid deduplication',
        'Aggregate dimensional metrics (volume, revenue by category, daily velocity)'
      ],
      output: 'Cleaned partitioned Parquet datasets ready for BI/SQL ingestion, plus a 2-page executive summary spreadsheet generated in 8 minutes 42 seconds.'
    },
    result: 'Reduced a process that previously stalled spreadsheet applications and required several days of fragmented human wrangling into an 8.7-minute unattended script run with zero dropped rows.',
    technicalNotes: {
      stack: ['Python 3.11', 'Polars', 'PyArrow', 'DuckDB', 'Rich CLI'],
      architecture: 'Generator-based chunked streaming pipeline with multi-threaded vectorized transformations and columnar Parquet serialization.',
      codeSnippet: `import polars as pl

def process_chunk_stream(file_path: str, chunk_size: int = 50_000):
    schema_overrides = {"record_id": pl.Utf8, "amount": pl.Utf8, "event_ts": pl.Utf8}
    reader = pl.read_csv_batched(file_path, batch_size=chunk_size, schema_overrides=schema_overrides)
    
    total_processed = 0
    while (batches := reader.next_batches(5)):
        for batch in batches:
            cleaned = (
                batch.lazy()
                .filter(pl.col("record_id").is_not_null())
                .with_columns([
                    pl.col("amount").str.replace_all(r"[^0-9.-]", "").cast(pl.Float64, strict=False),
                    pl.col("event_ts").str.to_datetime("%Y-%m-%d %H:%M:%S", strict=False)
                ])
                .collect()
            )
            total_processed += len(cleaned)
    return total_processed`
    },
    whatThisProves: [
      'Engineered data extraction and batch performance beyond spreadsheet boundaries.',
      'Deterministic code execution beats manual cut-and-paste every time volume scales.'
    ],
    relatedSlugs: ['commercial-quotation-tracker', 'industrial-rfq-intake'],
    featuredOnHome: true
  },
  {
    slug: 'video-processing-pipeline',
    title: 'Long-Form Video Turned Into a Processing Pipeline',
    label: 'INTERNAL BUILD',
    tag: 'AI / PYTHON / MEDIA AUTOMATION',
    category: 'AI & Media',
    oneLiner: 'An automated pipeline handling audio extraction, high-accuracy transcription, semantic indexing, and targeted video clipping using Python and FFmpeg.',
    situation: 'Multi-hour recordings of technical lectures, client consultations, and workshop training sessions contained high-value demonstrations, but locating specific segments, extracting excerpts, and generating reference clips required hours of manual playback, logging timestamps, and video editor slicing.',
    constraint: 'Audio varied in acoustic quality, containing background noise and non-standard regional terminology. Off-the-shelf transcription tools lacked frame-accurate synchronization with the actual visual timeline, resulting in clipped speech in exported video fragments.',
    build: 'Built an unattended CLI and Python workflow orchestrating FFmpeg audio demuxing, local speech-to-text inference with word-level timestamps, automated sentence boundary clustering, and dynamic FFmpeg filtergraph rendering to produce indexed video chapters and short vertical clips automatically.',
    workflow: {
      input: '4K/1080p raw video recordings (MP4/MKV) spanning 90 to 180 minutes.',
      processing: [
        'FFmpeg streams 16kHz mono audio directly to STT inference worker',
        'Whisper model generates word-level timestamped token arrays',
        'Semantic clustering groups contiguous sentences into coherent topic chapters',
        'Silence-aware padding calculation (+200ms lead-in, -150ms release)',
        'FFmpeg headless sub-clip rendering with burned-in captions and audio normalization'
      ],
      output: 'Full searchable JSON transcript index with synchronized timestamps, plus automatically trimmed highlight video clips rendered to disk.'
    },
    result: 'Processed 2.5 hours of high-resolution video into timestamped, captioned clips and markdown searchable notes in under 18 minutes without opening an NLE editor.',
    technicalNotes: {
      stack: ['Python 3.11', 'FFmpeg', 'faster-whisper', 'Pydantic', 'NumPy'],
      architecture: 'Headless media processing loop linking ffmpeg demuxing, CTranslate2 model inference, and programmatic video timeline slicing.',
      codeSnippet: `import subprocess
from faster_whisper import WhisperModel

def extract_indexed_clips(video_path: str, segments: list[dict]):
    for i, seg in enumerate(segments):
        start = max(0.0, seg["start"] - 0.25)
        duration = (seg["end"] - seg["start"]) + 0.5
        out_name = f"clip_{i:03d}_{seg['topic_slug']}.mp4"
        cmd = [
            "ffmpeg", "-y", "-ss", f"{start:.3f}", "-i", video_path,
            "-t", f"{duration:.3f}", "-c:v", "libx264", "-crf", "22",
            "-c:a", "aac", "-b:a", "192k", out_name
        ]
        subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)`
    },
    whatThisProves: [
      'Pragmatic integration of open AI models with classic systems utilities (FFmpeg).',
      'End-to-end automation of complex multimedia workflows.'
    ],
    relatedSlugs: ['million-row-pipeline', 'appclick-training-curriculum'],
    featuredOnHome: true
  },
  {
    slug: 'industrial-rfq-intake',
    title: 'Industrial RFQ Intake & Specification Preparation Engine',
    label: 'PROTOTYPE',
    tag: 'INDUSTRY / RFQ / EXTRACTION',
    category: 'Industry',
    oneLiner: 'Automated extraction of customer line items, part specifications, and delivery terms from messy email bodies and PDF attachments into a verified review queue.',
    situation: 'Equipment distributors and precision fabricators receive RFQs via unstructured emails, attached scanned purchase orders, Excel sheets with custom column layouts, and multi-page technical PDFs. Estimating engineers spent 30-45% of their day manually re-typing part codes, quantities, and tolerance specs into quoting software.',
    constraint: 'Documents lack uniform templates. A single PDF might interleave billing addresses, technical drawings, general terms, and tabular item tables with nested sub-items.',
    build: 'Constructed an event-driven intake workflow using Python and n8n that monitors dedicated enquiry inboxes, decomposes attached documents into structured sections, extracts line items with exact part numbers, quantities, requested lead times, and flags incomplete data before an estimator reviews it.',
    workflow: {
      input: 'Inbound RFQ emails with attached multi-page PDF specifications or Excel requisition files.',
      processing: [
        'IMAP/Webhook listener triggers on inbound message to rfq@ mailbox',
        'PDF parser strips text layers and isolates line item tabular regions',
        'Structured LLM extraction maps part numbers, quantities, units, and delivery dates',
        'Validation check against catalog database flags unknown SKUs or missing specs',
        'Formatted RFQ dossier generated with side-by-side original attachment preview'
      ],
      output: 'Normalized internal RFQ draft in ERP/Airtable review queue with 95% of administrative re-keying completed.'
    },
    result: 'Cut estimator prep time from 25 minutes per complex request to under 3 minutes of focused human verification.',
    technicalNotes: {
      stack: ['Python', 'n8n', 'pdfplumber', 'FastAPI', 'Structured JSON Schema'],
      architecture: 'Inbox webhook trigger → Document pre-processor → Schema validator → CRM/ERP webhook queue.'
    },
    whatThisProves: [
      'Separation of administrative extraction from commercial/engineering judgement.',
      'Practical industrial data normalization without vendor lock-in.'
    ],
    relatedSlugs: ['tender-monitoring-engine', 'commercial-quotation-tracker'],
    featuredOnHome: true
  },
  {
    slug: 'tender-monitoring-engine',
    title: 'Multi-Portal Tender Discovery & Filter Queue',
    label: 'PROTOTYPE',
    tag: 'INDUSTRY / PROCUREMENT / MONITORING',
    category: 'Industry',
    oneLiner: 'Scheduled automated scrapers and API monitors tracking procurement notices across fragmented buyer portals and delivering filtered, scored summaries.',
    situation: 'Industrial contractors and commercial equipment suppliers had staff manually logging into 7 different state procurement websites, utility portals, and trade boards each morning to check for newly published tenders, frequently missing short-fuse opportunities due to human oversight.',
    constraint: 'Several target portals did not provide public RSS feeds or REST APIs, had sluggish page response times, and hid notice details behind multi-step pagination.',
    build: 'Developed a scheduled headless scraper and API collector running on containerized workers. The system navigates procurement listings, captures newly posted documents, strips boilerplate, matches notices against defined capability matrices, and pushes verified opportunities into a single triage dashboard.',
    workflow: {
      input: '7 external procurement portals and public tender gazette listings.',
      processing: [
        'Cron runner triggers headless browser checks every 4 hours during business days',
        'Change-detection algorithm identifies net-new tender IDs against Postgres cache',
        'Notice text, submission deadlines, bond requirements, and category codes scraped',
        'Keyword and negative-phrase filtering removes out-of-scope commodity requests',
        'Automated digest generated with direct deep-links to tender source files'
      ],
      output: 'Consolidated Slack/WhatsApp/Email morning brief and synchronized internal pipeline table of high-probability opportunities.'
    },
    result: 'Eliminated 10+ hours per week of manual website navigation while surfacing newly posted tenders within 4 hours of publication.',
    technicalNotes: {
      stack: ['Python', 'Playwright', 'PostgreSQL', 'n8n', 'Telegram/Slack API'],
      architecture: 'Distributed scheduled web crawlers writing to deduplicated relational store with instant webhook alerting.'
    },
    whatThisProves: [
      'Reliable web data extraction across legacy institutional portals.',
      'Information gathering automated while bidding decisions remain entirely human.'
    ],
    relatedSlugs: ['industrial-rfq-intake', 'million-row-pipeline'],
    featuredOnHome: false
  },
  {
    slug: 'commercial-quotation-tracker',
    title: 'Commercial Quotation Coordination & Follow-Up Pipeline',
    label: 'INTERNAL BUILD',
    tag: 'AUTOMATION / PIPELINE / REPORTING',
    category: 'Automation & Data',
    oneLiner: 'An automated quotation coordination workflow tracking proposal lifecycle, customer engagement, and scheduled follow-up cadence.',
    situation: 'In operational service and bespoke contracting firms, sales teams issued detailed quotations via email, but tracking which quotes were opened, which required clarification, and when to follow up was kept in fragmented personal notebooks or neglected inboxes.',
    constraint: 'Commercial managers rejected rigid, heavyweight enterprise CRM tools because data entry was too cumbersome, leading to 0% user adoption within 2 months.',
    build: 'Designed a lightweight, frictionless workflow connecting quote document generation, status tracking, automatic follow-up reminders, and stage transition alerts via Google Workspace and webhook automations.',
    workflow: {
      input: 'Approved quote PDF and customer contact details.',
      processing: [
        'Document sent with unique tracking link and logging webhook',
        'Status logged in lightweight operational database (Spreadsheet/Airtable backend)',
        'Automated timer schedules follow-up task prompts for sales reps at Day 3 and Day 7',
        'Flags customer interaction and escalates stagnant quotes to sales manager',
        'Syncs outcome back into rolling monthly revenue projection'
      ],
      output: 'Zero un-followed quotations; rolling monthly conversion reporting generated without manual entry.'
    },
    result: 'Recovered an estimated 18% of previously lost quotes caused solely by lack of timely follow-up, with zero change in sales rep overhead.',
    technicalNotes: {
      stack: ['n8n', 'Google Apps Script', 'PostgreSQL', 'SendGrid API', 'Airtable'],
      architecture: 'Event-driven state machine managing quotation lifecycles and timed triggers.'
    },
    whatThisProves: [
      'Simple, high-adoption operational systems outperform complex enterprise software.',
      'Tight coordination between quote issuance and commercial reporting.'
    ],
    relatedSlugs: ['million-row-pipeline', 'industrial-rfq-intake'],
    featuredOnHome: false
  },
  {
    slug: 'appclick-training-curriculum',
    title: 'Practical AI, Automation & API Workshop Curriculum',
    label: 'TRAINING',
    tag: 'TEACHING / WORKSHOP / APIS',
    category: 'Teaching',
    oneLiner: 'Hands-on training modules and interactive curricula teaching nontechnical professionals and builders how APIs and workflows actually function.',
    situation: 'Teams across operational departments wanted to leverage AI and automation, but were paralyzed by abstract terminology (endpoints, tokens, webhooks, JSON) or misled by hyped social media tutorials promising "one-click fully autonomous businesses."',
    constraint: 'Learners ranged from operational managers with zero coding experience to aspiring builders needing practical architectural fundamentals without getting bogged down in low-level syntax.',
    build: 'Created a modular, exercise-based training curriculum centered on first-principles understanding: inspecting raw HTTP requests, understanding data payloads, building visual workflows in n8n, and safely chaining AI models to structured spreadsheets and messaging tools.',
    workflow: {
      input: 'Nontechnical teams and modern digital professionals seeking systems literacy.',
      processing: [
        'Module 1: Mental models of computing—what actually happens when you click a button',
        'Module 2: The anatomy of an API call (Method, URL, Headers, Body, Status Codes)',
        'Module 3: Hands-on workflow building (connecting webhooks to spreadsheets in n8n)',
        'Module 4: Practical AI integration (structured outputs, prompt engineering, validation)',
        'Module 5: Error handling, edge cases, and knowing when NOT to automate'
      ],
      output: 'Over 120+ professionals trained with functional workflows built by learners on their own laptops during sessions.'
    },
    result: 'Participants consistently deployed production automations within 14 days of workshop completion without hiring external consultants for simple tasks.',
    technicalNotes: {
      stack: ['Interactive n8n sandboxes', 'Postman / Insomnia', 'Python examples', 'Visual slides'],
      architecture: 'Pedagogical progression from mental models to visual construction to real-world deployment.'
    },
    whatThisProves: [
      'Ability to de-jargonize technical systems for business stakeholders.',
      'Bridge between deep engineering practice and clear communication.'
    ],
    relatedSlugs: ['video-processing-pipeline', 'industrial-rfq-intake'],
    featuredOnHome: false
  }
];
