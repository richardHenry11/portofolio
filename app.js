/**
 * Portfolio Application Scripts
 * Features: Bilingual Dictionary (ID/EN), Dark/Light Mode, Interactive Canvas,
 * Project Filters, Project Modals, Form Toast, Animated Metrics
 */

// --- 1. Multilingual Content Dictionary ---
const translations = {
  id: {
    // Nav
    navHome: "Beranda",
    navSkills: "Keahlian",
    navProjects: "Proyek",
    navArchitecture: "Arsitektur",
    navExperience: "Pengalaman",
    navContact: "Kontak",

    // Hero
    heroBadge: "Tersedia untuk Proyek & Kolaborasi",
    heroRolePre: "Halo, saya Richard",
    heroRolePost: "Mobile & IoT Software Engineer",
    heroDesc: "Mobile Software Engineer di PT. Cakrawala Bima Instrument. Membangun aplikasi Flutter untuk sistem IoT, Bluetooth, geofencing, dan enterprise dengan fokus pada performa dan skalabilitas.",
    heroCtaProjects: "Lihat Karya Saya",
    heroCtaContact: "Hubungi Saya",
    heroCtaCv: "Unduh CV",
    metric1Val: "3+",
    metric1Label: "Tahun Pengalaman Mobile Dev",
    metric2Val: "3+",
    metric2Label: "Aplikasi Terpublikasi di Play Store",
    metric3Val: "99.8%",
    metric3Label: "Crash-Free Users Session Rate",

    // Skills
    skillsTag: "Keahlian Teknis",
    skillsTitle: "Tech Stack & Spesialisasi",
    skillsSubtitle: "Fokus pada performa tinggi, stabilitas, clean architecture, dan komunikasi hardware/IoT.",
    skillCard1Title: "Flutter & Dart Mobile Development",
    skillCard1Desc: "Pengembangan aplikasi multi-platform modern menggunakan Flutter & Dart, animasi 60fps, responsive layout, dan custom platform channels.",
    skillCard2Title: "IoT Telemetry & Protocols",
    skillCard2Desc: "Integrasi protokol telemetri industri berkecepatan tinggi: MQTT dengan server broker (lossless sync), WebSocket real-time, Bluetooth Serial, dan BLE.",
    skillCard3Title: "Location, Security & Hardware Bridge",
    skillCard3Desc: "Validasi geolocator & geofencing radius kantor, integrasi live security camera stream, smartwatch bridge BLE, serta pembacaan sensor lingkungan.",
    skillCard4Title: "Enterprise Systems & CI/CD",
    skillCard4Desc: "Arsitektur modular skala enterprise (Menu Planning, Purchasing, Production, Distribution), REST API Dio, SQLite/Hive DB, serta rilis Google Play Store.",

    // Projects
    projectsTag: "Portofolio Unggulan",
    projectsTitle: "Karya Nyata & Sistem Produksi",
    projectsSubtitle: "Setiap aplikasi dibangun dan diuji langsung untuk kebutuhan industri, sensor lingkungan, dan otomasi enterprise.",
    filterAll: "Semua Proyek",
    filterIoT: "IoT & Telemetry",
    filterEnterprise: "Enterprise & HR",
    filterWearable: "Wearables & BLE",
    projectDetailBtn: "Detail Proyek",
    projectLivePreview: "Preview Cepat",

    // Architecture Philosophy
    archTag: "Pendekatan Rekayasa",
    archTitle: "Arsitektur & Standar Kualitas Kode",
    archSubtitle: "Standar industri yang saya terapkan untuk memastikan aplikasi cepat, mudah dites, dan siap skala jutaan pengguna.",
    arch1Title: "Clean Architecture & BLoC/Riverpod",
    arch1Desc: "Pemisahan lapisan Presentation, Domain, dan Data yang ketat dengan Unidirectional Data Flow (UDF) untuk UI yang prediktif dan anti-bug.",
    arch1Item1: "State management reaktif terpusat dengan BLoC & Riverpod",
    arch1Item2: "UseCases murni tanpa dependensi langsung ke framework UI",
    arch1Item3: "Repository pattern dengan single source of truth (SSOT)",

    arch2Title: "Performa & Battery Efficiency",
    arch2Desc: "Penghematan daya perangkat melalui optimalisasi background processing, lazy list rendering, dan alokasi memori yang ketat.",
    arch2Item1: "DevTools-driven memory leak detection & frame render inspection",
    arch2Item2: "Tree-shaking, code splitting & optimasi aset ukuran APK/IPA",
    arch2Item3: "Efficient local caching (Hive/Isar/SQLite) & offline-first sync",

    arch3Title: "Automated Testing & CI/CD",
    arch3Desc: "Keandalan tinggi melalui pipeline otomatisasi pengujian, build sign verification, dan deployment aman ke Play Store & App Store.",
    arch3Item1: "Unit testing untuk Domain & Business Logic (Mocktail, Test)",
    arch3Item2: "Golden widget testing & Flutter integration UI tests",
    arch3Item3: "Fastlane & GitHub Actions deployment pipeline",

    // Experience
    expTag: "Perjalanan Karir",
    expTitle: "Pengalaman & Riwayat Kerja",
    expSubtitle: "Rekam jejak rekayasa mobile & IoT di PT. Cakrawala Bima Instrument (2024 - Sekarang).",
    exp1Date: "Pertengahan 2026 - Sekarang",
    exp1Role: "Lead Mobile IoT Engineer",
    exp1Company: "PT. Cakrawala Bima Instrument",
    exp1Desc: "Mengembangkan aplikasi SmartShelter yang berkomunikasi dengan kontroller dan sensor industri via protokol MQTT dengan broker terpusat di server untuk menjamin zero data loss (tanpa data terlewat/terloncat) serta endpoint URL yang dapat diakses secara publik.",

    exp2Date: "Awal - Pertengahan 2026",
    exp2Role: "Mobile IoT Engineer",
    exp2Company: "PT. Cakrawala Bima Instrument",
    exp2Desc: "Membangun sistem IoT monitoring IPAL berbasis komunikasi WebSocket dengan integrasi camera security, linechart visual 24 data historis ke belakang, download export data, dan alarm min/max threshold. Berkolaborasi dengan tim hardware & firmware memodernisasi komunikasi aplikasi HVAS ke BLE.",

    exp3Date: "Akhir 2025 - Awal 2026",
    exp3Role: "Frontend Mobile Engineer",
    exp3Company: "PT. Cakrawala Bima Instrument",
    exp3Desc: "Merancang dan membangun frontend kompleks dari sistem SPPG terpadu yang mengintegrasikan 4 modul operasional dalam 1 aplikasi: Menu Planning (Ahli Gizi), Accounting (Purchasing), Production (Produksi), dan Distribution (Logistik).",

    exp4Date: "Awal - Pertengahan 2025",
    exp4Role: "Mobile Application Developer",
    exp4Company: "PT. Cakrawala Bima Instrument",
    exp4Desc: "Merilis aplikasi presensi CAIS ke Google Play Store berbasis REST API dengan fitur geolocator & geofencing radius akurat, rekap absensi, cuti, dan WFH. Mengembangkan aplikasi smartwatch via BLE yang terintegrasi sebagai bridge system dengan ekosistem GloryFitPro di Play Store.",

    exp5Date: "Awal 2024 - Akhir 2024",
    exp5Role: "Mobile Developer (Flutter & IoT)",
    exp5Company: "PT. Cakrawala Bima Instrument",
    exp5Desc: "Mengawali karir di PT. Cakrawala Bima Instrument dengan mengembangkan aplikasi telemetri lingkungan HVAS (High Volume Air Sampler) berbasis Bluetooth Serial untuk sampling kualitas udara yang sukses dipublikasikan di Google Play Store.",

    // Contact
    contactTag: "Hubungi Saya",
    contactTitle: "Mari Berkolaborasi",
    contactSubtitle: "Apakah Anda memiliki proyek baru, butuh konsultasi teknis mobile, atau ingin merekrut? Jangan ragu mengirim pesan.",
    contactInfoHeading: "Informasi Kontak",
    contactInfoDesc: "Saya terbuka untuk posisi full-time, freelance, maupun konsultasi arsitektur mobile Android & Flutter.",
    contactLabelEmail: "Email",
    contactLabelLocation: "Lokasi",
    contactLabelLocationVal: "Indonesia (WIB / GMT+7)",
    contactLabelAvailability: "Status Kerja",
    contactLabelAvailabilityVal: "Tersedia untuk Peluang Baru",
    btnCopy: "Salin",
    formNameLabel: "Nama Lengkap",
    formNamePlaceholder: "Masukkan nama Anda",
    formEmailLabel: "Alamat Email",
    formEmailPlaceholder: "nama@example.com",
    formSubjectLabel: "Topik Pembahasan",
    formSubjectPlaceholder: "Misal: Proyek Aplikasi Mobile / Konsultasi IoT",
    formMessageLabel: "Pesan Anda",
    formMessagePlaceholder: "Ceritakan rencana proyek atau kebutuhan Anda di sini...",
    formSubmitBtn: "Kirim Pesan",
    formSending: "Mengirim...",

    // Modal & Toast
    modalClose: "Tutup",
    modalTechStack: "Teknologi yang Digunakan:",
    modalKeyFeatures: "Fitur Utama & Tantangan Teknis:",
    caseStudyTitle: "Studi Kasus Rekayasa (Engineering Case Study):",
    caseProblem: "Problem / Tantangan",
    caseSolution: "Solusi Rekayasa",
    caseArchitecture: "Arsitektur & Protokol",
    caseResult: "Hasil & Dampak",
    toastCopied: "Disalin ke papan klip!",
    toastSentSuccess: "Pesan berhasil terkirim ke richardkumbang04@gmail.com!",
    toastSentActivation: "Formulir baru: Tautan konfirmasi aktivasi telah dikirim ke email Anda. Cukup konfirmasi sekali!",
    toastSentError: "Gagal terkirim otomatis. Mengalihkan ke aplikasi email...",

    // Footer
    footerRights: "Hak Cipta Dilindungi Undang-Undang. Dibuat dengan cinta untuk performa mobile optimal."
  },
  en: {
    // Nav
    navHome: "Home",
    navSkills: "Skills",
    navProjects: "Projects",
    navArchitecture: "Architecture",
    navExperience: "Experience",
    navContact: "Contact",

    // Hero
    heroBadge: "Available for Projects & Collaboration",
    heroRolePre: "Hello, I am Richard",
    heroRolePost: "Mobile & IoT Software Engineer",
    heroDesc: "Mobile Software Engineer at PT. Cakrawala Bima Instrument. Engineering high-performance Flutter applications for IoT telemetry, Bluetooth, geofencing, and scalable enterprise systems.",
    heroCtaProjects: "View My Work",
    heroCtaContact: "Get in Touch",
    heroCtaCv: "Download CV",
    metric1Val: "3+",
    metric1Label: "Years of Mobile Development",
    metric2Val: "3+",
    metric2Label: "Apps Published on Play Store",
    metric3Val: "99.8%",
    metric3Label: "Crash-Free Session Rate",

    // Skills
    skillsTag: "Technical Expertise",
    skillsTitle: "Tech Stack & Capabilities",
    skillsSubtitle: "Engineered for speed, rock-solid reliability, clean code, and robust hardware/IoT integration.",
    skillCard1Title: "Flutter & Dart Mobile Development",
    skillCard1Desc: "Modern multi-platform engineering using Flutter & Dart, 60fps fluid animations, responsive layouts, and custom platform channels.",
    skillCard2Title: "IoT Telemetry & Protocols",
    skillCard2Desc: "High-speed industrial telemetry: MQTT with dedicated server brokers (zero packet loss), real-time WebSockets, Bluetooth Serial, and BLE.",
    skillCard3Title: "Location, Security & Hardware Bridge",
    skillCard3Desc: "High-precision geolocator & geofencing validation, live security camera stream embeds, smartwatch BLE bridge, and environmental sensors.",
    skillCard4Title: "Enterprise Systems & CI/CD",
    skillCard4Desc: "Modular enterprise architectures (Menu Planning, Purchasing, Production, Distribution), REST API Dio, SQLite/Hive DB, and Google Play Store distribution.",

    // Projects
    projectsTag: "Featured Portfolio",
    projectsTitle: "Production Projects & Field Systems",
    projectsSubtitle: "Engineered and field-tested for industrial monitoring, environmental sensing, and enterprise automation.",
    filterAll: "All Projects",
    filterIoT: "IoT & Telemetry",
    filterEnterprise: "Enterprise & HR",
    filterWearable: "Wearables & BLE",
    projectDetailBtn: "Project Details",
    projectLivePreview: "Quick Preview",

    // Architecture Philosophy
    archTag: "Engineering Principles",
    archTitle: "Architecture & Code Quality Standards",
    archSubtitle: "Production-grade standards used to ensure apps are ultra-fast, thoroughly testable, and ready for millions of users.",
    arch1Title: "Clean Architecture & BLoC/Riverpod",
    arch1Desc: "Strict layer segregation across Presentation, Domain, and Data with Unidirectional Data Flow (UDF) for predictable, bug-free UI state.",
    arch1Item1: "Centralized reactive state management with BLoC & Riverpod",
    arch1Item2: "Pure domain UseCases independent of UI framework APIs",
    arch1Item3: "Repository pattern ensuring Single Source of Truth (SSOT)",

    arch2Title: "Performance & Battery Efficiency",
    arch2Desc: "Conserving device battery through optimized background scheduling, lazy list rendering, and zero memory leaks.",
    arch2Item1: "DevTools-driven memory leak detection & frame render inspection",
    arch2Item2: "Tree-shaking, code splitting & asset optimization for minimal APK/IPA size",
    arch2Item3: "Efficient local caching (Hive/Isar/SQLite) & offline-first data caching",

    arch3Title: "Automated Testing & CI/CD",
    arch3Desc: "Uncompromising stability with automated test pipelines, APK/AAB signing checks, and streamlined Play Store release workflows.",
    arch3Item1: "Unit testing domain & business logic with Mocktail & Test",
    arch3Item2: "Golden widget validation & Flutter UI interaction tests",
    arch3Item3: "Fastlane & GitHub Actions automated delivery pipelines",

    // Experience
    expTag: "Career Timeline",
    expTitle: "Work History & Milestones",
    expSubtitle: "Milestones in mobile & IoT engineering at PT. Cakrawala Bima Instrument (2024 - Present).",
    exp1Date: "Mid 2026 - Present",
    exp1Role: "Lead Mobile IoT Engineer",
    exp1Company: "PT. Cakrawala Bima Instrument",
    exp1Desc: "Leading the architecture of the SmartShelter IoT application communicating with controllers and sensors via MQTT protocol with a centralized server broker to ensure zero data loss, accessible via public URLs.",

    exp2Date: "Early - Mid 2026",
    exp2Role: "Mobile IoT Engineer",
    exp2Company: "PT. Cakrawala Bima Instrument",
    exp2Desc: "Built the IPAL wastewater IoT monitoring system via real-time WebSockets with live camera security feeds, 24-point historical line charts, custom data exports, and threshold alarms. Collaborated with firmware/hardware teams to modernize HVAS to BLE.",

    exp3Date: "Late 2025 - Early 2026",
    exp3Role: "Frontend Mobile Engineer",
    exp3Company: "PT. Cakrawala Bima Instrument",
    exp3Desc: "Architected a complex enterprise frontend for the integrated SPPG system in a single Flutter application, uniting Menu Planning (Nutritionists), Accounting (Purchasing), Production, and Logistics Distribution.",

    exp4Date: "Early - Mid 2025",
    exp4Role: "Mobile Application Developer",
    exp4Company: "PT. Cakrawala Bima Instrument",
    exp4Desc: "Shipped the CAIS attendance app to Google Play Store featuring high-precision REST API geofencing validation, leave quotas, and WFH tracking. Built an Android smartwatch BLE bridge connecting with the GloryFitPro platform on Play Store.",

    exp5Date: "Early 2024 - Late 2024",
    exp5Role: "Mobile Developer (Flutter & IoT)",
    exp5Company: "PT. Cakrawala Bima Instrument",
    exp5Desc: "Started career at PT. Cakrawala Bima Instrument developing the HVAS (High Volume Air Sampler) telemetry application via Bluetooth Serial for environmental air quality monitoring, successfully published on Google Play Store.",

    // Contact
    contactTag: "Get In Touch",
    contactTitle: "Let's Build Something Great",
    contactSubtitle: "Have an exciting project in mind, need mobile architecture advice, or exploring hiring opportunities? Drop me a message.",
    contactInfoHeading: "Contact Details",
    contactInfoDesc: "Available for full-time roles, strategic contract engineering, and mobile architecture consulting.",
    contactLabelEmail: "Email",
    contactLabelLocation: "Location",
    contactLabelLocationVal: "Indonesia (WIB / GMT+7)",
    contactLabelAvailability: "Status",
    contactLabelAvailabilityVal: "Available for New Opportunities",
    btnCopy: "Copy",
    formNameLabel: "Your Name",
    formNamePlaceholder: "Enter your full name",
    formEmailLabel: "Email Address",
    formEmailPlaceholder: "name@example.com",
    formSubjectLabel: "Subject",
    formSubjectPlaceholder: "e.g., Mobile App Development / IoT Project",
    formMessageLabel: "Message",
    formMessagePlaceholder: "Tell me about your project, timeline, or requirements...",
    formSubmitBtn: "Send Message",
    formSending: "Sending...",

    // Modal & Toast
    modalClose: "Close",
    modalTechStack: "Technology Stack:",
    modalKeyFeatures: "Key Highlights & Technical Feats:",
    caseStudyTitle: "Engineering Case Study:",
    caseProblem: "Problem & Challenge",
    caseSolution: "Engineering Solution",
    caseArchitecture: "Architecture & Protocols",
    caseResult: "Result & Impact",
    toastCopied: "Copied to clipboard!",
    toastSentSuccess: "Message successfully sent to richardkumbang04@gmail.com!",
    toastSentActivation: "New form setup: An activation confirmation link was sent to your email. Click it once to activate!",
    toastSentError: "Could not send automatically. Opening your email app...",

    // Footer
    footerRights: "All rights reserved. Engineered for peak mobile performance & clean design."
  }
};

// --- 2. Project Data Catalog (Field-Tested Real Projects at PT. CBI) ---
const projectsData = [
  {
    id: "smartshelter",
    category: "iot",
    categoryLabel: { id: "IoT / MQTT Telemetry", en: "IoT / MQTT Telemetry" },
    title: { id: "SmartShelter IoT Telemetry (PT. CBI)", en: "SmartShelter IoT Telemetry (PT. CBI)" },
    desc: {
      id: "Aplikasi monitoring shelter industri berbasis Flutter yang berkomunikasi langsung dengan kontroller dan sensor via protokol MQTT. Dilengkapi broker server untuk proteksi data lossless dan akses monitoring URL publik.",
      en: "Industrial shelter telemetry mobile app built with Flutter, communicating with controllers and sensors via MQTT protocol with server broker for lossless data integrity and public URL access."
    },
    image: "assets/images/SmartShelter.png",
    tags: ["Flutter", "MQTT Protocol", "Broker Server", "Zero-Loss Telemetry", "Real-Time Alarm", "Clean Arch"],
    caseStudy: {
      id: {
        problem: "Kondisi jaringan industri di remote area sering fluktuatif, memicu paket data sensor lingkungan & gas berbahaya terputus atau loncat (data loss).",
        solution: "Mengintegrasikan protokol MQTT dengan broker server terpusat, jaminan QoS tinggi, dan auto-reconnect fallback mechanism.",
        architecture: "Clean Architecture (UDF) + BLoC State Management + MQTT Client Service + Public Endpoint Gateway.",
        result: "Zero packet loss pada telemetri kritis, alarm gas (NH4, O2) bereaksi instan, serta pemantauan remote multi-device aman."
      },
      en: {
        problem: "Unstable industrial network conditions in remote facilities frequently caused telemetry packets for hazardous gases to drop or skip.",
        solution: "Engineered MQTT protocol integration backed by a dedicated broker server, robust QoS guarantee, and automated connection fallback.",
        architecture: "Clean Architecture (UDF) + BLoC State Management + MQTT Client Service + Public Endpoint Gateway.",
        result: "100% data integrity with zero packet loss, instant hazardous gas alert triggers (NH4, O2), and secure multi-device remote telemetry."
      }
    },
    features: {
      id: [
        "Komunikasi protokol MQTT dengan broker server terpusat menjamin seluruh data telemetri terkirim tanpa ada data yang terlewat atau loncat.",
        "Panel sensor primer (NH4, O2, Suhu, Kelembaban) dengan deteksi instan status Out-of-Range dan alarm visual otomatis.",
        "Dukungan URL publik untuk pemantauan remote multi-device di mana saja secara aman.",
        "Kontrol panel interaktif untuk manajemen shelter multi-node (Shelter-01) dengan visual status real-time."
      ],
      en: [
        "MQTT protocol sync with dedicated broker server ensuring 100% data transmission with zero packet skipping or loss.",
        "Primary sensor monitoring (NH4, O2, Temp, Humidity) with instant out-of-range hazard warning alerts.",
        "Secure public URL routing for seamless remote telemetry monitoring across devices.",
        "Interactive control panel for multi-node industrial shelters with live state indicators."
      ]
    },
    github: "https://github.com/richardHenry11/portofolio",
    demo: "#"
  },
  {
    id: "ipal",
    category: "iot",
    categoryLabel: { id: "IoT / Environmental", en: "IoT / Environmental" },
    title: { id: "Pemantauan IPAL IoT & Security Camera", en: "IPAL Wastewater IoT & Security Monitoring" },
    desc: {
      id: "Sistem IoT monitoring Instalasi Pengolahan Air Limbah berbasis Android via WebSocket real-time. Dilengkapi fitur live camera security, visualisasi line chart 24 data historis ke belakang, download export data, dan alarm min/max threshold.",
      en: "Real-time industrial wastewater IoT monitoring system communicating over WebSockets, featuring live security camera feeds, 24-point historical line charts, custom data export, and min/max threshold alarms."
    },
    image: "assets/images/IPAL.png",
    tags: ["Flutter", "WebSocket", "Camera Security", "24-Point LineChart", "Data Export", "Threshold Alarms"],
    caseStudy: {
      id: {
        problem: "Monitoring pengolahan air limbah memerlukan pembacaan parameter fisik-kimia kontinu dan inspeksi visual kolam secara simultan tanpa delay.",
        solution: "Mengintegrasikan stream WebSocket dua arah untuk telemetri instan bersama embedded live RTSP/HLS camera stream dan chart visualisasi 24 titik.",
        architecture: "Event-driven WebSocket Client + Video Player Platform Channel + Custom Chart Rendering + CSV/PDF Exporter.",
        result: "Operator pabrik dapat mengawasi parameter baku mutu limbah (pH, BOD, COD, TSS) sekaligus keamanan fisik fasilitas dalam 1 aplikasi."
      },
      en: {
        problem: "Wastewater compliance monitoring required simultaneous, zero-lag visualization of physical-chemical telemetry alongside visual pond camera inspection.",
        solution: "Integrated bi-directional WebSocket streams for instantaneous telemetry alongside an embedded RTSP camera feed and 24-point dynamic line charts.",
        architecture: "Event-driven WebSocket Client + Video Player Platform Channel + Custom Chart Rendering + CSV/PDF Exporter.",
        result: "Plant operators supervise environmental effluent compliance (pH, BOD, COD, TSS) and physical site security simultaneously from a single pane."
      }
    },
    features: {
      id: [
        "Koneksi WebSocket real-time untuk pembacaan parameter limbah: pH, Suhu, TDS, DO, Daya, dan Temp Panel.",
        "Integrasi camera security streaming langsung di dalam aplikasi untuk pengawasan visual kolam pengolahan limbah.",
        "Visualisasi line chart dinamis menampilkan riwayat 24 data terakhir (BOD, COD, TSS, pH, Temp).",
        "Fitur download dan export data telemetri sesuai rentang tanggal input pengguna, serta alarm nilai ambang batas min dan max."
      ],
      en: [
        "Real-time WebSocket connection streaming wastewater parameters: pH, Temp, TDS, DO, Power, and Panel Temp.",
        "Embedded live security camera feed for remote visual inspection of treatment facilities.",
        "Dynamic line chart visualizing the latest 24 historical data points across BOD, COD, TSS, and pH metrics.",
        "On-demand data download/export according to user date range, complete with min/max safety threshold alarms."
      ]
    },
    github: "https://github.com/richardHenry11/portofolio",
    demo: "#"
  },
  {
    id: "hvas",
    category: "iot",
    categoryLabel: { id: "IoT / Play Store", en: "IoT / Play Store" },
    title: { id: "HVAS (High Volume Air Sampler) Telemetry", en: "HVAS Sampler - Air Telemetry (Play Store)" },
    desc: {
      id: "Aplikasi telemetri sampling kualitas udara lingkungan yang telah terbit di Google Play Store. Berawal dari Bluetooth Classic Serial lalu dimodernisasi menjadi Bluetooth Low Energy (BLE) berkolaborasi dengan tim hardware & firmware.",
      en: "Environmental air quality sampling telemetry app published on Google Play Store. Migrated from Bluetooth Classic Serial to Bluetooth Low Energy (BLE) in close cross-team collaboration with hardware and firmware engineers."
    },
    image: "assets/images/HVAS.jpg",
    tags: ["Flutter", "Play Store", "BLE & Serial", "BME280 Sensor", "GPS Sync", "Hardware Collab"],
    caseStudy: {
      id: {
        problem: "Versi awal instrumen memakai Bluetooth Classic Serial yang memboroskan baterai instrumen dan rentan terputus saat inspeksi sampling berjam-jam.",
        solution: "Merombak arsitektur komunikasi ke Bluetooth Low Energy (BLE) dengan custom GATT protocol dan auto-handshake berkolaborasi erat dengan tim firmware.",
        architecture: "Reactive BLE Stream Subscription + Byte Packet Parser + BME280 Sensor Normalization + Background GPS Tagging.",
        result: "Penghematan baterai hingga 40%, sukses terpublikasi di Play Store, dan menjadi instrumen andalan sampling kualitas udara di Indonesia."
      },
      en: {
        problem: "Initial hardware iteration used legacy Bluetooth Classic Serial, causing rapid battery drain and disconnection during multi-hour ambient air sampling.",
        solution: "Re-engineered communication layer to Bluetooth Low Energy (BLE) with custom GATT services and robust handshaking in tight synergy with firmware engineers.",
        architecture: "Reactive BLE Stream Subscription + Byte Packet Parser + BME280 Sensor Normalization + Background GPS Tagging.",
        result: "Cut instrument power consumption by 40%, published officially on Google Play Store, and actively trusted by environmental technicians nationwide."
      }
    },
    features: {
      id: [
        "Tersedia dan terpublikasi secara resmi di Google Play Store untuk perangkat Android instrumen industri.",
        "Telemetri live sensor BME280: Suhu udara, Kelembaban (%RH), Tekanan udara (hPa), dan Air Flow (L/min).",
        "Kontrol operasi perangkat: Sampling Duration (menit), Start/Stop/Pause/Save Log, Sync Time, dan GPS Coordinate tag.",
        "Evolusi protokol komunikasi dari Bluetooth Serial (2024) ke BLE (2026) untuk efisiensi daya baterai maksimal."
      ],
      en: [
        "Officially published and distributed on Google Play Store for field environmental technicians.",
        "Live BME280 sensor telemetry: Ambient Temperature, Humidity (%RH), Barometric Pressure (hPa), and Air Flow (L/min).",
        "Device operational controls: Sampling duration scheduler, Start/Stop/Pause/Save Log, Time Sync, and GPS geo-tagging.",
        "Upgraded communication pipeline from Bluetooth Classic Serial (2024) to BLE (2026) for optimal battery runtime."
      ]
    },
    github: "https://github.com/richardHenry11/portofolio",
    demo: "#"
  },
  {
    id: "cais",
    category: "enterprise",
    categoryLabel: { id: "Enterprise / Play Store", en: "Enterprise / Play Store" },
    title: { id: "CAIS - Geolocation Presence & HR System", en: "CAIS - Geolocation Presence & HR (Play Store)" },
    desc: {
      id: "Aplikasi presensi karyawan dan manajemen HR berbasis REST API yang dipublikasikan di Google Play Store. Memvalidasi lokasi device secara presisi (geofencing) agar user hanya bisa absen di dalam radius kantor, dilengkapi modul cuti, WFH, dan rekap harian.",
      en: "Corporate attendance and HR management app published on Google Play Store. Implements high-precision geofencing validation to ensure attendance within authorized radius, featuring leave allowances, WFH workflows, and daily recaps."
    },
    image: "assets/images/CAIS.png",
    tags: ["Flutter", "Play Store", "REST API", "Geolocator", "Geofencing", "HR Workflow"],
    caseStudy: {
      id: {
        problem: "Absensi mobile rentan disalahgunakan dengan fake GPS/mock location, serta integrasi cuti & log harian yang sebelumnya terpisah manual.",
        solution: "Membangun sistem presensi geofencing ketat dengan validasi Haversine distance, deteksi fake GPS, dan modul approval perizinan terintegrasi.",
        architecture: "Geolocator Platform Channel + Haversine Formula + JWT Auth Interceptor + Dio REST Client + Hive Local State.",
        result: "Terpublikasi di Google Play Store, meniadakan manipulasi absensi, dan memproses kehadiran harian ratusan karyawan secara transparan."
      },
      en: {
        problem: "Mobile attendance was vulnerable to fake GPS spoofing and lacked a unified workflow for leave quotas and daily activity logging.",
        solution: "Developed an enterprise presence app featuring strict geofencing validation, mock location heuristics, and comprehensive leave approval pipelines.",
        architecture: "Geolocator Platform Channel + Haversine Formula + JWT Auth Interceptor + Dio REST Client + Hive Local State.",
        result: "Live on Google Play Store, completely eliminating location spoofing and managing daily attendance records for the entire company."
      }
    },
    features: {
      id: [
        "Tersedia di Google Play Store sebagai sistem absensi resmi PT. Cakrawala Bima Instrument.",
        "Validasi geolocator presisi tinggi: mencegah absen palsu apabila jarak pengguna berada di luar radius kantor yang ditentukan.",
        "Modul presensi lengkap: Presensi Kantor, Mode Dinas Luar, dan Mode WFH (Work From Home).",
        "Laporan Harian, Pengajuan & Kuota Jatah Cuti, Riwayat Log Masuk/Pulang, serta modul Input Barang Masuk."
      ],
      en: [
        "Live on Google Play Store as the central attendance and HR platform for PT. Cakrawala Bima Instrument.",
        "High-precision geolocator validation: strict geofence verification blocking attendance when outside designated company radius.",
        "Comprehensive attendance modes: In-Office Check-in, Official Duty/Field Work, and Work From Home (WFH).",
        "Daily activity logs, leave allowance approvals, detailed check-in/out records, and material receipt logging."
      ]
    },
    github: "https://github.com/richardHenry11/portofolio",
    demo: "#"
  },
  {
    id: "smartwatch",
    category: "wearable",
    categoryLabel: { id: "Wearables / BLE Bridge", en: "Wearables / BLE Bridge" },
    title: { id: "CBI SmartWatch BLE Bridge System", en: "CBI SmartWatch BLE Bridge System" },
    desc: {
      id: "Aplikasi telemetri smartwatch berbasis Bluetooth Low Energy (BLE) yang berfungsi sebagai bridge system antara jam tangan pintar Android dengan ekosistem aplikasi original GloryFitPro yang tersedia di Google Play Store.",
      en: "Bluetooth Low Energy (BLE) smartwatch telemetry system operating as a bridge between custom Android smartwatches and the original GloryFitPro ecosystem available on Google Play Store."
    },
    image: "assets/images/SmartWatch.png",
    tags: ["Flutter", "BLE (Bluetooth LE)", "GloryFitPro", "Biometrics", "Wearable Bridge", "GATT Services"],
    caseStudy: {
      id: {
        problem: "Jam tangan pintar Android memerlukan integrasi bridge dua arah dengan ekosistem aplikasi kesehatan GloryFitPro yang sudah ada di Play Store.",
        solution: "Merancang BLE Bridge System yang membaca GATT characteristics sensor biometrik dan menyinkronkan data langkah, denyut jantung, serta SpO2.",
        architecture: "Custom GATT Protocol Parser + Background BLE Scanner + Local SQLite/Hive Cache + Event Bus Publisher.",
        result: "Sinkronisasi data biometrik real-time mulus dan fitur interaktif 'Cari Jam' merespons instan dalam hitungan milidetik."
      },
      en: {
        problem: "Custom Android smartwatches required a reliable two-way telemetry bridge with the established GloryFitPro health platform on Google Play Store.",
        solution: "Designed a BLE Bridge System subscribing to biometric GATT characteristics, synchronizing steps, heart rate (BPM), and blood oxygen (SpO2).",
        architecture: "Custom GATT Protocol Parser + Background BLE Scanner + Local SQLite/Hive Cache + Event Bus Publisher.",
        result: "Seamless real-time vital synchronization and interactive 'Find Watch' device discovery responding instantaneously in milliseconds."
      }
    },
    features: {
      id: [
        "Sistem bridge komunikasi BLE menghubungkan jam tangan pintar dengan ekosistem original GloryFitPro di Google Play Store.",
        "Sinkronisasi aktivitas harian: Pedometer Langkah (Target 10.000), Jarak Tempuh (km), dan Durasi Latihan.",
        "Monitoring biometrik real-time: Kalori Terbakar, Detak Jantung (BPM), Oksigen Darah (SpO2), Tekanan Darah, dan Suhu Tubuh.",
        "Perekaman kualitas tidur (Deep Sleep / Nyenyak) dan fitur interaktif 'Cari Jam' via BLE GATT command."
      ],
      en: [
        "BLE communication bridge integrating Android smartwatches with the original GloryFitPro platform on Google Play Store.",
        "Daily activity synchronization: Pedometer step ring (10,000 goal), distance traveled, and workout duration.",
        "Real-time vital tracking: Burned Calories, Heart Rate (BPM), Blood Oxygen (SpO2), Blood Pressure, and Body Temp.",
        "Sleep quality staging (Deep Sleep analysis) and interactive 'Find Watch' device discovery via BLE GATT."
      ]
    },
    github: "https://github.com/richardHenry11/portofolio",
    demo: "#"
  },
  {
    id: "sppg",
    category: "enterprise",
    categoryLabel: { id: "Enterprise / Multi-Module", en: "Enterprise / Multi-Module" },
    title: { id: "Sistem Terpadu SPPG Enterprise", en: "SPPG Integrated Enterprise Procurement" },
    desc: {
      id: "Pengembangan frontend kompleks sistem SPPG terpadu berbasis Flutter yang menyatukan 4 departemen inti dalam 1 aplikasi: Menu Planning (Ahli Gizi), Accounting (Purchasing/Pengadaan), Production (Produksi), dan Distribution (Logistik).",
      en: "Complex enterprise Flutter frontend uniting 4 mission-critical divisions in a single application: Nutrition Menu Planning, Accounting & Purchasing, Production, and Logistics Distribution."
    },
    image: "assets/images/SmartSppg.png",
    tags: ["Flutter", "Clean Architecture", "Menu Planning (Gizi)", "Purchasing", "Production", "Distribution"],
    caseStudy: {
      id: {
        problem: "Proses operasional 4 divisi (Gizi, Akunting, Dapur, Logistik) berjalan terpisah-pisah sehingga rawan miskomunikasi stok dan kalkulasi menu.",
        solution: "Merancang satu aplikasi frontend enterprise modular yang menggabungkan seluruh pipeline dari Menu Planning hingga Distribusi.",
        architecture: "Feature-first Multi-Module Architecture + BLoC State Management + Dio Interceptor + Repository Pattern.",
        result: "Efisiensi koordinasi lintas divisi meningkat drastis, kalkulasi gizi presisi, dan siklus procurement dari PO hingga serah terima barang terdata rapi."
      },
      en: {
        problem: "Operational flows across 4 departments (Nutrition, Accounting, Production, Logistics) were siloed, causing inventory mismatch and portion discrepancies.",
        solution: "Built an enterprise multi-module Flutter frontend uniting the full operational lifecycle from Menu Planning to final Logistics Distribution.",
        architecture: "Feature-first Multi-Module Architecture + BLoC State Management + Dio Interceptor + Repository Pattern.",
        result: "Drastically accelerated cross-division coordination, ensured exact nutrition calculations, and established a unified procurement audit trail."
      }
    },
    features: {
      id: [
        "Arsitektur frontend modular berskala besar: menyatukan alur kerja 4 divisi operasional dalam satu aplikasi Flutter terpadu.",
        "Modul Menu Planning (Ahli Gizi): perhitungan komposisi gizi, porsi menu terstandar, dan jadwal menu berkala.",
        "Modul Accounting & Purchasing: procurement barang, ringkasan pesanan, manajemen supplier, dan tracking invoice.",
        "Modul Production & Distribution: penjadwalan batch produksi dapur hingga pemantauan distribusi ke titik penerima."
      ],
      en: [
        "Large-scale modular frontend architecture: seamlessly orchestrating workflows across 4 distinct operational departments.",
        "Nutritionist Menu Planning module: nutritional composition formulas, portion sizing, and scheduled dietary menus.",
        "Accounting & Procurement module: order summaries, supplier catalogs, purchasing orders, and billing verification.",
        "Production & Distribution module: kitchen batch workflow tracking and real-time distribution hand-off logistics."
      ]
    },
    github: "https://github.com/richardHenry11/portofolio",
    demo: "#"
  }
];

// --- 3. App Controller State ---
let currentLang = localStorage.getItem("portfolio_lang") || "id";
let currentTheme = localStorage.getItem("color-scheme") || "dark";
let activeFilter = "all";

// --- 4. DOM Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  renderProjects();
  initFilterButtons();
  initModal();
  initAmbientCanvas();
  initMetricCounter();
  initContactForm();
  initMobileMenu();
  initCopyButtons();
  initScrollReveal();
  initScrollActiveNav();
  initCvDownload();
});

// --- Theme Management with Diagonal Swipe Animation ---
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  applyTheme(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      toggleThemeWithSwipe();
    });
  }

  // React to OS preference changes if user hasn't explicitly set
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("color-scheme")) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });
}

function toggleThemeWithSwipe() {
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  const transitionType = nextTheme === "light" ? "swipe-to-bottom-right" : "swipe-to-top-left";

  if (document.startViewTransition) {
    document.documentElement.setAttribute("data-theme-transition", transitionType);
    const transition = document.startViewTransition(() => {
      currentTheme = nextTheme;
      applyTheme(currentTheme);
      localStorage.setItem("color-scheme", currentTheme);
    });

    transition.finished.finally(() => {
      document.documentElement.removeAttribute("data-theme-transition");
    });
  } else {
    // Fallback animation using animated overlay
    const overlay = document.getElementById("theme-swipe-overlay");
    if (overlay) {
      const isLight = nextTheme === "light";
      overlay.style.backgroundColor = isLight ? "#f8fafc" : "#07090e";
      const animClass = isLight ? "active-to-bottom-right" : "active-to-top-left";
      overlay.className = animClass;

      setTimeout(() => {
        currentTheme = nextTheme;
        applyTheme(currentTheme);
        localStorage.setItem("color-scheme", currentTheme);
      }, 350);

      setTimeout(() => {
        overlay.className = "";
      }, 850);
    } else {
      currentTheme = nextTheme;
      applyTheme(currentTheme);
      localStorage.setItem("color-scheme", currentTheme);
    }
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
  if (metaColorScheme) {
    metaColorScheme.content = theme;
  }

  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (toggleBtn) {
    toggleBtn.innerHTML = theme === "dark"
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    toggleBtn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }
}

// --- Language Management ---
function initLanguage() {
  const langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-lang");
      if (selected && selected !== currentLang) {
        currentLang = selected;
        localStorage.setItem("portfolio_lang", currentLang);
        updateLanguageUI();
      }
    });
  });

  updateLanguageUI();
}

function updateLanguageUI() {
  // Update toggle buttons active class
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
  });

  // Apply translations to all elements with data-i18n attribute
  const dict = translations[currentLang] || translations.id;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Re-render project cards to update titles & descriptions
  renderProjects();
}

// --- Projects Rendering & Filtering ---
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  const filtered = activeFilter === "all"
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  const dict = translations[currentLang] || translations.id;

  container.innerHTML = filtered.map((project) => `
    <article class="project-card" data-category="${project.category}">
      <div class="project-media">
        <img src="${project.image}" alt="${project.title[currentLang]}" loading="lazy">
        <div class="project-overlay">
          <button class="project-quick-btn" onclick="openProjectModal('${project.id}')">
            ${dict.projectLivePreview}
          </button>
        </div>
      </div>
      <div class="project-content">
        <div class="project-meta-row">
          <span class="project-category">${project.categoryLabel[currentLang]}</span>
          <span class="project-status">
            <span class="pulse-dot"></span> Production
          </span>
        </div>
        <h3 class="project-title">${project.title[currentLang]}</h3>
        <p class="project-desc">${project.desc[currentLang]}</p>
        <div class="project-tags">
          ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}
        </div>
        <div class="project-footer">
          <a href="javascript:void(0)" class="project-detail-link" onclick="openProjectModal('${project.id}')">
            ${dict.projectDetailBtn}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </a>
          <div class="project-icon-links">
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-icon-link" aria-label="GitHub Repository">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  `).join("");

  if (container.classList.contains("is-visible")) {
    const cards = container.querySelectorAll(".project-card");
    cards.forEach((card, idx) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px) scale(0.96)";
      setTimeout(() => {
        card.style.transition = "opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)";
        card.style.opacity = "1";
        card.style.transform = "translateY(0) scale(1)";
      }, idx * 70);
    });
  }
}

function initFilterButtons() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-filter") || "all";
      renderProjects();
    });
  });
}

// --- Project Details Modal ---
function initModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener("click", closeProjectModal);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeProjectModal();
    }
  });
}

function openProjectModal(projectId) {
  const project = projectsData.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const dict = translations[currentLang] || translations.id;

  const banner = document.getElementById("modal-banner-img");
  const title = document.getElementById("modal-title");
  const category = document.getElementById("modal-category");
  const desc = document.getElementById("modal-desc");
  const caseStudyContainer = document.getElementById("modal-casestudy-section");
  const featureList = document.getElementById("modal-features");
  const tagsContainer = document.getElementById("modal-tags");

  if (banner) banner.src = project.image;
  if (title) title.textContent = project.title[currentLang];
  if (category) category.textContent = project.categoryLabel[currentLang];
  if (desc) desc.textContent = project.desc[currentLang];

  if (caseStudyContainer) {
    if (project.caseStudy) {
      const cs = project.caseStudy[currentLang] || project.caseStudy.id;
      caseStudyContainer.innerHTML = `
        <h4 class="modal-section-title" style="margin-top: 1.25rem;">${dict.caseStudyTitle || (currentLang === "en" ? "Engineering Case Study:" : "Studi Kasus Rekayasa:")}</h4>
        <div class="modal-casestudy-grid">
          <div class="case-card problem">
            <div class="case-card-header">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              <span>${dict.caseProblem || (currentLang === "en" ? "Problem & Challenge" : "Problem / Tantangan")}</span>
            </div>
            <div class="case-card-body">${cs.problem}</div>
          </div>
          <div class="case-card solution">
            <div class="case-card-header">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>
              <span>${dict.caseSolution || (currentLang === "en" ? "Engineering Solution" : "Solusi Rekayasa")}</span>
            </div>
            <div class="case-card-body">${cs.solution}</div>
          </div>
          <div class="case-card architecture">
            <div class="case-card-header">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
              <span>${dict.caseArchitecture || (currentLang === "en" ? "Architecture & Protocols" : "Arsitektur & Protokol")}</span>
            </div>
            <div class="case-card-body">${cs.architecture}</div>
          </div>
          <div class="case-card result">
            <div class="case-card-header">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>${dict.caseResult || (currentLang === "en" ? "Result & Impact" : "Hasil & Dampak")}</span>
            </div>
            <div class="case-card-body">${cs.result}</div>
          </div>
        </div>
      `;
    } else {
      caseStudyContainer.innerHTML = "";
    }
  }

  if (featureList) {
    featureList.innerHTML = project.features[currentLang].map(f => `
      <li>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${f}</span>
      </li>
    `).join("");
  }

  if (tagsContainer) {
    tagsContainer.innerHTML = project.tags.map(t => `<span class="skill-pill">${t}</span>`).join("");
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// Global scope attachment for onclick handlers
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;

// --- Interactive Ambient Canvas (Constellation & Nodes) ---
function initAmbientCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor((width * height) / 22000), 55);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2 + 1,
      baseAlpha: Math.random() * 0.4 + 0.2
    });
  }

  let mouse = { x: -1000, y: -1000 };
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function render() {
    ctx.clearRect(0, 0, width, height);

    const isDark = currentTheme === "dark";
    const nodeColor = isDark ? "6, 182, 212" : "3, 105, 161"; // cyan vs sky blue

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${nodeColor}, ${p.baseAlpha})`;
      ctx.fill();

      // Connect with nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          const alpha = (1 - dist / 130) * 0.18;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(${nodeColor}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Connect with mouse
      const mdx = p.x - mouse.x;
      const mdy = p.y - mouse.y;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < 160) {
        const mAlpha = (1 - mdist / 160) * 0.35;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(139, 92, 246, ${mAlpha})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

// --- Animated Metric Counter on Scroll ---
function initMetricCounter() {
  const metrics = document.querySelectorAll(".metric-number");
  if (!metrics.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const endValue = parseFloat(target.getAttribute("data-target")) || 0;
          const suffix = target.getAttribute("data-suffix") || "";
          animateValue(target, 0, endValue, suffix, 1400);
          obs.unobserve(target);
        }
      });
    },
    { threshold: 0.5 }
  );

  metrics.forEach((m) => observer.observe(m));
}

function animateValue(obj, start, end, suffix, duration) {
  let startTimestamp = null;
  const isDecimal = end % 1 !== 0;

  function step(timestamp) {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    // EaseOutCubic
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = start + ease * (end - start);

    obj.innerHTML = `${isDecimal ? current.toFixed(1) : Math.floor(current)}<span>${suffix}</span>`;

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      obj.innerHTML = `${isDecimal ? end.toFixed(1) : end}<span>${suffix}</span>`;
    }
  }

  window.requestAnimationFrame(step);
}

// --- Contact Form Handling with Real Email Dispatch ---
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type='submit']");
    const dict = translations[currentLang] || translations.id;
    const originalContent = btn.innerHTML;

    const nameInput = form.querySelector("[name='name']");
    const emailInput = form.querySelector("[name='email']");
    const subjectInput = form.querySelector("[name='subject']");
    const messageInput = form.querySelector("[name='message']");

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const subject = subjectInput ? subjectInput.value.trim() : "Pesan Baru dari Portofolio";
    const message = messageInput ? messageInput.value.trim() : "";

    btn.disabled = true;
    btn.innerHTML = `<span class="pulse-dot"></span> ${dict.formSending}`;

    try {
      const response = await fetch("https://formsubmit.co/ajax/richardkumbang04@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _subject: `[Portfolio] ${subject}`,
          message: message,
          _captcha: "false",
          _template: "table"
        })
      });

      const result = await response.json();

      if (response.ok && (result.success === "true" || result.success === true)) {
        form.reset();
        showToast(dict.toastSentSuccess, "success");
      } else if (result.message && result.message.toLowerCase().includes("activation")) {
        form.reset();
        showToast(dict.toastSentActivation, "info");
      } else {
        throw new Error(result.message || "Failed to send");
      }
    } catch (err) {
      console.warn("FormSubmit fetch fallback to mailto:", err);
      showToast(dict.toastSentError, "info");
      // Fallback: Open mailto so the user's message is directly delivered
      setTimeout(() => {
        window.location.href = `mailto:richardkumbang04@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Halo Richard,\n\nNama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`)}`;
      }, 1200);
    } finally {
      btn.disabled = false;
      btn.innerHTML = originalContent;
    }
  });
}

// --- Copy to Clipboard Buttons ---
function initCopyButtons() {
  const copyBtns = document.querySelectorAll(".copy-btn");
  copyBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const text = btn.getAttribute("data-copy");
      if (!text) return;
      navigator.clipboard.writeText(text).then(() => {
        const dict = translations[currentLang] || translations.id;
        showToast(dict.toastCopied, "success");
      });
    });
  });
}

// --- Toast Display ---
function showToast(message, type = "success") {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  let icon = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color: var(--accent-emerald)">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>`;

  if (type === "info") {
    icon = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color: var(--accent-cyan)">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>`;
  } else if (type === "error") {
    icon = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color: #ef4444)">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="15" y1="9" x2="9" y2="15"></line>
        <line x1="9" y1="9" x2="15" y2="15"></line>
      </svg>`;
  }

  toast.innerHTML = `${icon}<span>${message}</span>`;

  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 4500);
}

// --- Mobile Navigation Menu ---
function initMobileMenu() {
  const btn = document.getElementById("hamburger-btn");
  const menu = document.getElementById("nav-menu");
  const links = document.querySelectorAll(".nav-link");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("open");
      const isOpen = menu.classList.contains("open");
      btn.setAttribute("aria-expanded", isOpen);
      btn.innerHTML = isOpen
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });

    links.forEach((l) => {
      l.addEventListener("click", () => {
        menu.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        btn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      });
    });
  }
}

// --- Scroll-Driven Reveal System & Deferred Loading ---
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal, .reveal-stagger");
  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.12,
      rootMargin: "0px 0px -50px 0px"
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

// --- Active Navigation On Scroll ---
function initScrollActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let currentId = "";
    const scrollPos = window.scrollY + 200;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    if (currentId) {
      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        link.classList.toggle("active", href === `#${currentId}`);
      });
    }
  }, { passive: true });
}

// --- Seamless Cross-Browser CV Download (Chrome, Edge, Safari, Mobile) ---
function initCvDownload() {
  const cvBtn = document.getElementById("hero-btn-cv");
  if (!cvBtn) return;

  cvBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const url = cvBtn.getAttribute("href");
    const filename = cvBtn.getAttribute("download") || "CV_Richard_Mobile_IoT_Software_Engineer.pdf";

    try {
      // Fetch as blob to bypass Chrome's target/_blank & popup blocker restrictions
      const response = await fetch(url);
      if (!response.ok) throw new Error("Gagal mengambil file CV");

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.style.display = "none";
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();

      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
        link.remove();
      }, 400);
    } catch (err) {
      console.warn("Direct blob download failed, falling back to direct navigation:", err);
      // Fallback: direct programmatic link trigger
      const fallbackLink = document.createElement("a");
      fallbackLink.href = url;
      fallbackLink.download = filename;
      document.body.appendChild(fallbackLink);
      fallbackLink.click();
      setTimeout(() => fallbackLink.remove(), 200);
    }
  });
}


