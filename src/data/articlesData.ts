export interface Article {
  slug: string;
  title: string;
  cluster: 'Industrial / RFQ' | 'Tender Monitoring' | 'Automation Architecture' | 'Data & Python' | 'Teaching & Systems Literacy';
  date: string;
  readTime: string;
  summary: string;
  targetServiceUrl: string;
  targetServiceLabel: string;
  content: string[];
}

export const ARTICLES: Article[] = [
  {
    slug: 'rfq-automation-for-manufacturers',
    title: 'RFQ Automation for Manufacturers: What Should Actually Be Automated?',
    cluster: 'Industrial / RFQ',
    date: 'March 2026',
    readTime: '6 min read',
    summary: 'Why letting an AI calculate pricing unsupervised is a mistake, and how to automate the heavy information preparation layer instead.',
    targetServiceUrl: '/industry/rfq-automation',
    targetServiceLabel: 'RFQ automation for industrial suppliers',
    content: [
      'When software vendors pitch "AI-powered sales automation" to manufacturers, the demo usually looks deceptively clean: a buyer emails a request, an algorithm parses it, prices it automatically against a database, and sends a binding quote back within seconds.',
      'In real manufacturing and industrial distribution, running an autonomous quotation loop like this is a quick way to lose customer trust or blow out operating margins.',
      'Industrial products are rarely interchangeable widgets. Custom tolerances, material grades, regional lead times, order volume discounts, inventory availability, and customer credit terms require experienced human judgement. If your quoting algorithm misinterprets a metallurgical specification or quotes stale steel prices, your company pays the bill.',
      'The real operational bottleneck is almost never the moment an experienced commercial estimator makes the pricing decision. The bottleneck is everything that has to happen before that decision can be made.',
      'In a typical manufacturing office, an RFQ arrives as an email body with three PDF drawings attached and an Excel spreadsheet containing 40 line items with inconsistent part descriptions. A technical salesperson or estimating engineer must then open each attachment, cross-reference customer codes against the ERP catalog, check which items are standard versus custom, check if material certifications are required, and re-type the request into the internal quoting system.',
      'That administrative preparation layer is what should actually be automated. The goal is simple: automate the retrieval, extraction, normalization, and verification of information so that when your commercial engineer opens the RFQ, 90% of the clerical work is already finished.',
      'When your team can evaluate five pre-structured RFQs in the time it used to take to unpack one messy email thread, quote velocity doubles without sacrificing human control over pricing and commitments.'
    ]
  },
  {
    slug: 'how-to-process-rfqs-email-pdf-excel',
    title: 'How to Process RFQs From Email, PDF and Excel',
    cluster: 'Industrial / RFQ',
    date: 'February 2026',
    readTime: '8 min read',
    summary: 'A step-by-step breakdown of an automated pipeline turning messy incoming attachments into structured quotation line items.',
    targetServiceUrl: '/industry/rfq-automation',
    targetServiceLabel: 'Explore our RFQ preparation engine',
    content: [
      'Industrial buyers send quote requests in whatever format is convenient for them. One client types a 10-line bulleted list into an email from an iPad on a job site. Another sends a 28-page PDF purchase specification with terms buried on page 14. A third sends an Excel spreadsheet with merged cells and missing column headers.',
      'Attempting to force every client into a rigid web portal form fails because busy purchasing managers will simply send the request to a competitor who accepts email attachments. The solution is not to change customer behavior; it is to build an adaptable intake pipeline on your side.',
      'Here is the architecture of an intake workflow that handles multi-format RFQ documents reliably:',
      'Step 1: Mailbox Listener and Attachment Classification. A dedicated inbox (e.g., rfq@company.com) receives the message. An automated webhook listener triggers on new mail, inspects sender domains against existing CRM records, and categorizes incoming attachments by MIME type (PDF, XLSX, CSV, image scans).',
      'Step 2: Tabular Extraction vs. Text Parsing. For Excel files, Python scripts using libraries like openpyxl extract row blocks while ignoring formatting artifacts like merged headers. For digital PDFs, coordinate-aware parsers extract table bounding boxes. For scanned paper documents, OCR extracts raw text coordinates.',
      'Step 3: Schema Normalization with Constrained Models. The raw extracted text is passed to an AI parser governed by strict JSON Schema definitions. The prompt does not ask the model to "think creatively"; it asks it to map detected fields into explicit keys: part_number, description, quantity, unit_of_measure, target_delivery_date, and raw_drawing_reference.',
      'Step 4: Catalog Matching and Missing Field Detection. The normalized output is cross-referenced against your master inventory or parts catalog. If a customer part number is recognized, internal SKU and standard cost baseline are attached. If a required field is missing (such as material grade or delivery zip code), the system flags it as an attention item.',
      'Step 5: Review Queue Injection. Rather than generating an automated customer response, the system injects a pre-populated draft quotation into your review queue, displaying original attachments side-by-side with parsed fields.',
      'By isolating document normalization from quoting decisions, your team gets clean structured data without exposing the business to automated quotation errors.'
    ]
  },
  {
    slug: 'automate-tender-monitoring',
    title: 'How to Automate Tender Monitoring Across Multiple Procurement Portals',
    cluster: 'Tender Monitoring',
    date: 'February 2026',
    readTime: '7 min read',
    summary: 'Why basic keyword alerts produce overwhelming noise and how to design a structured opportunity review queue.',
    targetServiceUrl: '/industry/tender-monitoring',
    targetServiceLabel: 'Tender monitoring systems for industrial contractors',
    content: [
      'Every industrial supplier and specialist contractor knows the pain of tender tracking. High-value opportunities are published across a dozen different public portals, municipal procurement boards, utility sites, and international donor databases.',
      'Most companies handle this in one of two ways: either an administrative employee spends an hour every morning logging into six websites manually, or the company subscribes to generic tender alert services that blast them with hundreds of irrelevant email notifications every week.',
      'The reason generic alerts fail is keyword collision. If you manufacture electrical transformers and set an alert for "transformer", you will receive notifications for software transformation consultancies, electrical utility substations, and school science lab supplies. The signal-to-noise ratio is so low that teams quickly stop opening the alert emails entirely.',
      'To build an effective tender monitoring system, the workflow must do more than match raw keywords. It needs a structured multi-stage filter:',
      '1. Headless Detection: A scheduled worker checks target portals at defined intervals (e.g., every 4 hours). It compares page hashes and listing IDs against a database of previously seen notices to isolate net-new tenders immediately.',
      '2. Document Extraction: For each new notice, the system downloads the notice text, scope summary, closing date, submission guidelines, and required certifications.',
      '3. Multi-Criteria Triage: Instead of naive keyword matching, notices are evaluated against three distinct criteria: technical scope (does this match our manufacturing/supply capabilities?), geographic feasibility (is the delivery location within our operational footprint?), and commercial prerequisites (does it require certifications we possess?).',
      '4. Unified Queue and Morning Digest: Qualified opportunities are collected into a single dashboard and summarized in a concise morning brief. Each item includes the tender title, issuing entity, submission deadline, estimated scope, and direct download links for the tender package.',
      'The system finds. Your team decides. Your commercial team stops wasting hours digging through portals and spends that time evaluating genuinely relevant opportunities.'
    ]
  },
  {
    slug: 'n8n-vs-python',
    title: 'n8n vs Python: Which Should Handle the Workflow?',
    cluster: 'Automation Architecture',
    date: 'January 2026',
    readTime: '9 min read',
    summary: 'A pragmatic framework for choosing between low-code visual automation and custom code in business workflows.',
    targetServiceUrl: '/automation',
    targetServiceLabel: 'Explore custom automation workflows',
    content: [
      'One of the most persistent debates in workflow engineering is whether to use visual workflow platforms like n8n or write custom Python scripts.',
      'Dogmatic visual builders claim code is obsolete. Dogmatic software engineers claim low-code tools are toys that do not scale. Both views miss the operational reality of running business systems.',
      'The truth is that n8n and Python excel at completely different parts of the systems stack, and the most robust business architectures often use both in tandem.',
      'When n8n is the right choice: n8n is exceptional as an orchestration and routing bus. It provides pre-built authentication, webhook endpoints, scheduled triggers, retry loops, credential management, and execution logging out of the box. If a workflow involves listening for an incoming webhook, querying an API, sending a Slack alert, and updating an Airtable or Postgres row, building that in n8n takes hours instead of days and provides a visual execution log that makes troubleshooting straightforward.',
      'When Python is mandatory: Python is superior when the work involves heavy data transformation, complex branching logic, proprietary algorithms, document manipulation, or high-volume processing. If you need to clean 500,000 spreadsheet rows, extract tabular data from non-standard PDFs, manipulate video via FFmpeg, or interface with specialized machine learning libraries, visual nodes become unwieldy and slow.',
      'The Hybrid Architecture: In production systems, we frequently use n8n as the orchestration front-end and trigger containerized Python scripts for heavy computation. n8n catches the inbound webhook, verifies the payload, passes execution to a Python microservice via HTTP, and takes the structured output to distribute notifications and update business databases.',
      'Choose the tool that minimizes operational friction and makes failure states obvious.'
    ]
  },
  {
    slug: 'api-vs-browser-automation',
    title: 'API vs Browser Automation: What Happens When the Software Has No API?',
    cluster: 'Automation Architecture',
    date: 'January 2026',
    readTime: '6 min read',
    summary: 'Navigating legacy industrial software, ERP portals, and government databases that refuse to talk to modern tools.',
    targetServiceUrl: '/automation',
    targetServiceLabel: 'Workflow integration and automation',
    content: [
      'In a modern tech startup, every tool has a clean REST or GraphQL API with webhook support. In the industrial and operational world, businesses rely on legacy ERPs from 2004, state regulatory portals, and proprietary supplier platforms with zero programmatic interfaces.',
      'When a crucial workflow touches one of these systems, traditional software consultants throw up their hands and demand a six-figure ERP replacement project. But replacing core business software that has run factory operations for twenty years is risky, disruptive, and expensive.',
      'The practical alternative is understanding when to use APIs and when to deploy controlled browser automation.',
      'APIs are always the first choice: they are deterministic, fast, consume minimal resources, and do not break when a button moves three pixels to the left. If a private API or undocumented network endpoint exists behind the browser UI, reverse-engineering that network request is far more reliable than clicking visual buttons.',
      'However, when a portal enforces complex session authentication, client-side cryptographic tokens, or active JavaScript challenges, headless browser automation (using modern engines like Playwright) becomes a legitimate operational tool.',
      'To build durable browser automation that does not break every week, follow three engineering rules: first, select elements by immutable semantic attributes or data roles rather than fragile CSS classes; second, implement explicit state-waiting instead of arbitrary sleep timers; and third, wrap every browser task in clear failure alerts so staff are notified immediately if a portal changes its layout.',
      'You do not have to wait for legacy vendors to modernize their software before removing manual data entry from your daily operations.'
    ]
  },
  {
    slug: 'million-rows-python',
    title: 'How I Processed More Than One Million Rows in Under Ten Minutes',
    cluster: 'Data & Python',
    date: 'December 2025',
    readTime: '7 min read',
    summary: 'Engineering techniques for chunking, vectorized cleaning, and memory management when Excel breaks down.',
    targetServiceUrl: '/work/million-row-pipeline',
    targetServiceLabel: 'View the 1M+ row project case study',
    content: [
      'Most business data processing tasks do not require distributed Spark clusters or massive cloud data warehouses. What they require is clean, single-node systems programming that respects memory limits and hardware vectorization.',
      'A common scenario across operational companies: multi-year transactional logs or multi-depot inventory exports grow beyond 1,000,000 rows. A business analyst tries to open the CSV in Excel, waits four minutes for the application to respond, and is greeted by an error message informing them that the file exceeds the 1,048,576-row spreadsheet limit.',
      'Even when split into multiple workbooks, running VLOOKUPs or cleaning dates across these files leads to frozen screens, memory thrashing, and corrupted files.',
      'Here is how we architected a Python workflow that parsed, cleaned, deduplicated, and aggregated 1,140,000+ records in 8 minutes and 42 seconds on a standard 16GB laptop:',
      '1. Avoid Loading Everything into RAM: Loading raw multi-gigabyte CSV text files directly into unconstrained memory generates massive heap overhead. We used Polars batched streaming readers (`read_csv_batched`) to ingest fixed chunks of 50,000 rows at a time.',
      '2. Vectorized Regex and Type Casting: Rather than iterating row-by-row with slow Python loops, transformations were applied across entire column vectors in Rust-backed memory. Currency strings with mixed symbols ($ , € , N) were stripped using compiled regular expressions and cast to 64-bit floating-point arrays.',
      '3. High-Speed In-Memory Hashing: To detect duplicate transaction rows across disparate files without quadratic comparison cost, primary key tuples were hashed with 64-bit integer hashes and checked against a fast bit-set filter.',
      '4. Columnar Storage: Cleaned outputs were serialized directly into compressed Apache Parquet files. Parquet files take up a fraction of the disk space of raw CSVs and can be queried in milliseconds using SQL engines like DuckDB.',
      'The result is a reliable script that turns an agonizing multi-day manual chore into an automated command-line job that finishes before your coffee gets cold.'
    ]
  },
  {
    slug: 'explaining-apis-to-nontechnical-learners',
    title: 'How I Explain APIs to Nontechnical Learners',
    cluster: 'Teaching & Systems Literacy',
    date: 'December 2025',
    readTime: '6 min read',
    summary: 'The mental models that help operational teams and students understand how software talks to software.',
    targetServiceUrl: '/teaching',
    targetServiceLabel: 'Practical AI and systems training',
    content: [
      'When most technical guides introduce APIs, they immediately throw acronyms at the reader: REST, JSON, endpoints, payloads, HTTP verbs, authentication tokens, and headers. Within five minutes, nontechnical professionals and business operators mentally check out.',
      'Yet understanding APIs is the single most valuable foundational concept for anyone who wants to automate a process, build with AI, or lead digital teams.',
      'Over dozens of training sessions at AppClick and workshops with operational teams, I have found that technical jargon is unnecessary. All you need is the right physical mental model.',
      'The Restaurant Order Slip: When you go to a restaurant, you do not walk into the kitchen, open the walk-in refrigerator, slice vegetables, and turn on the stove. That would be chaotic and dangerous. Instead, there is a designated menu (the documentation), a waiter who takes your order in a specific format (the request), passes it to the kitchen (the server), and brings back your meal on a plate (the response).',
      'An API is simply the kitchen pass. It is a defined set of rules that lets one computer ask another computer for specific data or actions without needing access to the other computer internal database.',
      'When students realize that an API call is just a structured message with four simple parts—Where is it going? (URL), What action do you want? (GET, POST), What secret pass proves who you are? (Authorization Header), and What information are you sending? (Body)—the fear evaporates.',
      'Once an operational manager understands that an API is just an electronic order form, they stop viewing automation as black magic and start identifying exactly which manual tasks between their software systems can be connected.'
    ]
  }
];
