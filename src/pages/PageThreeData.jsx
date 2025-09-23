export const baseUrl =
  "https://di00ymfrmfyeb.cloudfront.net/BothoUniversityOnline-";

export const bscindatascience = {
  heroContent: {
    question: "Bachelor of Science in Data Science",
    image: "/images/courses-images/Bsc in data science.jpeg",
    downloadurl: `${baseUrl}BSCinDataScience.pdf`,
    typicalfulltimestudyperiod: 4,
    // maxPeriod: 6,
    programmeCredit: "$13",
    totalProgrammeCredit: 495,
    noOfModules: "35 (27 Core + 8 Elective)",
    totalFee: "$6,435",
    cta: true,
    timer: true,
    overview: true,
  },
  courseStruture: [
    {
      semester: "Semester 1",
      courses: [
        {
          question: "Physics",
          subanswer:
            "Code: E5-PHY-22<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module introduces key concepts in physical mechanics, including motion, momentum, energy conservation, and rotational dynamics. Students will explore vibrations, wave motion, and physical optics. Through exams, coursework, and discussions, they will develop a strong understanding of physical laws and their applications in solving numerical and conceptual problems.",
        },
        {
          question: "Pre-Calculus",
          subanswer:
            "Code: : E5-PCA-22<br/>Module Fees: $312<br/>Module Credits: 24",
          answer:
            "This module reviews key algebraic concepts, including exponents, polynomials, and complex numbers, before progressing to trigonometry, matrices, and graphing. Students will explore logarithms, conic sections, sequences, and probability. Through lectures and practice exercises, they will develop problem-solving skills and prepare for advanced mathematical topics such as calculus.",
        },

        {
          question: "Writing and Communication",
          subanswer:
            "Code: D5-WCO-20<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module enhances students' academic communication skills, enabling them to confidently express ideas, synthesise perspectives, and engage critically with texts. Emphasising referencing, grammar, and plagiarism-free writing, students will develop structured, coherent, and professional work while mastering research tools and communication theories relevant to their academic and professional fields.",
        },
        {
          question: "Computer Architecture",
          subanswer:
            "Code: C6-CSA-20<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module introduces the fundamentals of computer system architecture, covering digital logic, Boolean functions, processor organisation, memory, and peripheral devices. Students will learn about combinational and sequential circuits, CPU functionality, instruction sets, pipeline processing, and parallel computing. By completion, they will understand how digital systems are designed and operate.",
        },
      ],
    },
    {
      semester: "Semester 2",
      courses: [
        {
          question: "Programming Skill 1",
          subanswer:
            "Code:  C5-PS1-22<br/>Module Fees: $78<br/>Module Credits: 6",
          answer:
            "This module introduces students to programming in C++, covering structured development techniques, data types, arrays, functions, and object-oriented programming (OOP). Students will learn to design algorithms, write efficient code, and apply programming concepts to solve problems, building a strong foundation for further studies in software development.",
        },
        {
          question: "Business and Entrepreneurship",
          subanswer:
            "Code: B5-BEN-22<br/>Module Fees: $390<br/>Module Credits: 30",
          answer:
            "This module equips learners with essential entrepreneurial and business management skills. Students will critically understand entrepreneurship, idea generation, opportunity exploitation, and new venture creation. Emphasising creativity, problem-solving, and entrepreneurial culture, the module prepares students to identify business opportunities and apply innovative strategies for successful business management and growth.",
        },
        {
          question: "Operating Systems",
          subanswer:
            "Code: C6-OPS-22<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module explores fundamental operating system concepts and algorithms, covering OS components, structures, memory management, processes, threads, CPU scheduling, and security. Students will learn about deadlocks, process synchronisation, and file management. By completion, they will understand OS functionality and its role in managing hardware and software resources efficiently.",
        },
      ],
    },
    {
      semester: "Semester 2 Elective Group (Choose One)",
      courses: [
        {
          question: "Biology 1",
          subanswer:
            "Code: D5-BIO-22<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module furnishes non-biological science students with fundamental knowledge of anatomy, physiology, pathology, and pharmacology. It enables effective collaboration with health professionals on interdisciplinary projects, such as developing healthcare software. Students will gain insights into key body systems, common diseases, and their treatment or management approaches.",
        },
        {
          question: "Chemistry 1",
          subanswer:
            "Code: E5-CHE-22<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module introduces fundamental chemistry concepts, including the periodic table, atomic structure, and periodic trends. Students will explore ionisation energy, metallic character, stoichiometry, aqueous reactions, and gas laws. By completion, they will understand chemical formulae, equations, and the principles governing the behaviour of elements and compounds.",
        },
      ],
    },
    {
      semester: "Semester 3",
      courses: [
        {
          question: "Calculus",
          subanswer:
            "Code: E6-CAL-22<br/>Prerequisite: E5-PCA-22<br/Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module introduces key calculus concepts, including differentiation, integration, and their relationship in the Fundamental Theorem of Calculus. Students will learn to differentiate and integrate basic functions, apply calculus to graphing, optimisation, and real-world problems, and use integration to calculate area, volume, and work values.",
        },

        {
          question: "Programming Skill 2",
          subanswer:
            "Code:  C6-PS2-22<br/>Prerequisite: C5-PS1-22<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module introduces students to data analysis using R, covering data import, manipulation, visualisation, and reporting. Students will learn to create dynamic reports with R Markdown, clean data with tidyr, visualise data using ggplot2, write functions with loops and conditionals, and handle special data types like dates, times, and strings.",
        },
        {
          question: "Computer Networks",
          subanswer:
            "Code:  C6-COM-22<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module provides a solid foundation in network communication, covering network models, signal types, transmission media, and switching techniques. Students will learn about error detection, data link control, network layer protocols, wireless LANs, and backbone networks. They will also explore high-speed digital access technologies like DSL, cable modems, and SONET.",
        },
        {
          question: "Data Structures and Algorithms",
          subanswer:
            "Code: C6-DSA-22<br/>Prerequisite: C5-PS1-22<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module covers fundamental data structures and algorithms, emphasising practical C++ implementation. Students will master linear (linked lists, stacks, queues) and non-linear (graphs, trees) structures, along with sorting, searching, hashing, and file access. Proficiency in pointers, recursion, and threads will be developed, enabling effective data management.",
        },
        {
          question: "Databases",
          subanswer:
            "Code: C7-DBS-22<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module explores the database approach, contrasting it with file-oriented systems. Topics include the relational model, relational algebra, SQL, database design, normalisation, security, and administration. Students will analyse RDBMS design, apply SQL for data manipulation, and understand advanced database concepts, bridging theory and practice in modern database systems.",
        },
      ],
    },
    // {
    //   semester: "Semester 3 Elective Group One (Choose One)",
    //   courses: [
    //     {
    //       question: "Cloud Computing",
    //       subanswer:
    //         "Code: C6-CLC-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $117<br/>Module Credits: 9",
    //       answer:
    //         "This module provides a hands-on study of Cloud computing, covering service models like IaaS, PaaS, SaaS, and BPaaS. Students will explore cloud security, risk management, cryptographic key management, and access control. They will also analyse cloud computing essentials, security baselines, and architectural concepts whilst implementing cloud security measures.",
    //     },
    //     {
    //       question: "Emerging Technologies 1",
    //       subanswer:
    //         "Code: C6-EM1-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $117<br/>Module Credits: 9",
    //       answer:
    //         "This course explores the integration of educational technology into curriculum design, emphasising best practices, national standards, and emerging technologies.Students will research and apply IoT concepts, including its functionalities, applications, enabling technologies, and interoperability. They will also analyse challenges affecting IoT adoption across various industries and domains.",
    //     },
    //   ],
    // },
    {
      semester: "Semester 4",
      courses: [
        {
          question: "Discrete Mathematics for Computer Science",
          subanswer:
            "Code: E6-DMC-22<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module introduces discrete mathematics, crucial for computing. Students will learn its relevance, understand mathematical statements, and grasp concepts like trees, graphs, and numeric functions. The module emphasises applying these principles to logical and mathematical exercises, building a foundation for computational problem-solving.",
        },
        {
          question: "Data Mining",
          subanswer:
            "Code: C7-DMI-22<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module explores core Data Mining and Machine Learning principles. Students will learn to analyse, implement, and evaluate techniques using real datasets and toolkits. They'll compare methods, interpret results, and demonstrate awareness of current research, enabling them to adapt solutions for practical problems.",
        },
        {
          question: "Research Methodology",
          subanswer:
            "Code: C7-REM-22<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module introduces students to standard research methodologies, theories, and processes. Students will learn to define research topics, set objectives, review academic literature, and apply appropriate data collection and analysis methods. Emphasis is placed on ethical considerations, research planning, proposal writing, and effective presentation of findings.",
        },
        {
          question: "Project Management",
          subanswer:
            "Code: C7-PMA-22<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module focuses on IT project management, teaching learners to organise, plan, and control projects. Students will learn project scheduling, risk management, resource allocation, and software estimation. They'll explore quality standards, build reliable software, and create cost estimations. Teamwork, interpersonal skills, and applying standard methodologies are emphasised.",
        },
      ],
    },
    {
      semester: "Semester 4 Elective Group (Choose Two)",
      courses: [
        {
          question: "Cloud Computing",
          subanswer:
            "Code: C6-CLC-22<br/>Module Fees: $117<br/>Module Credits: 9",
          answer:
            "This module provides a hands-on study of Cloud computing, covering service models like IaaS, PaaS, SaaS, and BPaaS. Students will explore cloud security, risk management, cryptographic key management, and access control. They will also analyse cloud computing essentials, security baselines, and architectural concepts whilst implementing cloud security measures.",
        },
        {
          question: "Emerging Technologies 1",
          subanswer:
            "Code: C6-EM1-22<br/>Module Fees: $117<br/>Module Credits: 9",
          answer:
            "This course explores the integration of educational technology into curriculum design, emphasising best practices, national standards, and emerging technologies.Students will research and apply IoT concepts, including its functionalities, applications, enabling technologies, and interoperability. They will also analyse challenges affecting IoT adoption across various industries and domains.",
        },
        {
          question: "Cryptography",
          subanswer:
            "Code: C6-CRG-22<br/>Module Fees: $117<br/>Module Credits: 9",
          answer:
            "This course explores cryptosystem principles and design, covering traditional, block, and stream ciphers, public/private key systems, hash functions, and network security. Students will analyse cryptographic goals, design principles, and attack vectors. They'll understand key management, security notions, and apply mathematical foundations like discrete logarithms and factorising.",
        },
        {
          question: "Mobile Operating Systems",
          subanswer:
            "Code: C6-MOS-22<br/>Module Fees: $117<br/>Module Credits: 9",
          answer:
            "This module explores mobile operating systems, focusing on Android architecture. Students will learn about processes, threads, scheduling, concurrency, and synchronisation. Memory management, file systems, storage, and input/output mechanisms are also covered, providing a comprehensive understanding of mobile OS functionality and enhancement.",
        },
        {
          question: "Advanced Computer Networks",
          subanswer:
            "Code: C6-ACN-22<br/>Prerequisite: C6-COM-22<br/>Module Fees: $117<br/>Module Credits: 9",
          answer:
            "This module advances networking knowledge, covering network architecture, protocols, and applications. Students will analyse packet-switched networks, implement web services, and explore wireless technologies. Topics include routing, security, multimedia networking, and network management, providing a comprehensive understanding of modern network infrastructure.",
        },
        {
          question: "Optimisation",
          subanswer:
            "Code: E6-OPT-22<br/>Module Fees: $117<br/>Module Credits: 9",
          answer:
            "This module introduces Mathematical Optimisation, covering theory and algorithms for solving optimisation problems. Students will learn combinatorial algorithms and their underlying mathematics. They'll apply algorithms, interpret outputs, prove propositions, and determine optimisation problem geometries using linear algebra. Practical computations are emphasised, building a strong foundation in optimisation techniques.",
        },
      ],
    },

    {
      semester: "Semester 5",
      courses: [
        {
          question: "Probability and Statistics",
          subanswer:
            "Code: E7-PAS-22<br/>Prerequisite: E6-DMC-22<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module introduces statistical concepts for engineering, covering probability, random variables, and data analysis. Students will learn to describe data, compute probabilities,construct probability distributions, and apply binomial and normal distributions. Emphasis is on practical application, enabling students to critically evaluate data and draw reliable conclusions.",
        },
        {
          question: "Programming Skill 3",
          subanswer:
            "Code: C7-PS3-22<br/>Prerequisite: C6-PS2-22<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module introduces Data Science techniques using Python. Students will learn Python basics, loops, and control flows. Using NumPy and Pandas, they'll manipulate data structures like Series and DataFrames, performing data wrangling on numeric, string, and datetime data.The focus is on practical application for data analysis.",
        },
        {
          question: "Data Visualisation",
          subanswer:
            "Code: C7-DVI-22<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module explores data visualisation, covering theoretical foundations and practical skills.Students will learn design principles, analyse data-informed decisions, and apply concepts to projects. Using tools like Tableau, they'll create effective visualisations, connecting to data sources and ensuring data quality. Emphasis is on translating raw data into actionable insights.",
        },

        {
          question: "Linear Algebra",
          subanswer:
            "Code: E7-LAL-22 <br/>Prerequisite: E6-CAL-22<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module advances linear algebra, progressing from linear systems to abstract concepts.Students will solve diverse problems, understand theoretical mathematics, and explore topics like vector spaces, matrices, diagonalisation, inner product spaces, and groups. The module emphasises a transition from coordinate-based to abstract linear algebra.",
        },
        {
          question: "Data Analytics",
          subanswer:
            "Code: C7-DAN-22<br/>Prerequisite: C7-DBS-22<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module builds foundational data analytics skills, focusing on data preparation, modelling, and statistical tools. Students will apply and interpret descriptive and inferential statistics, analyse computer output, and critically evaluate statistical applications in various contexts. The emphasis is on practical application and responsible data interpretation.",
        },
      ],
    },
    {
      semester: "Semester 6",
      courses: [
        {
          question: "Machine Learning",
          subanswer:
            "Code: C7-MLE-22<br/>Module Fees: $312<br/>Module Credits: 24",
          answer:
            "This module teaches effective machine learning techniques, combining theory with practical implementation. Students will solve tasks independently using tools like Jupyter Notebook, Anaconda, and Python. They'll derive principles, apply them to new problems, and understand best practices. Students will select appropriate tools for diverse applications, particularly in Human-Computer Interaction.",
        },
        {
          question: "Artificial Intelligence",
          subanswer:
            "Code: C7-ARI-22<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module introduces AI's core principles, techniques, and applications. Students will explore AI history, apply problem-solving and learning principles, and understand intelligent agents, neural networks, and expert systems. They'll discuss AI's scope, limitations, and societal impact, fostering a foundational understanding of the field.",
        },
      ],
    },
    {
      semester: "Semester 6 Elective Group(Choose Three)",
      courses: [
        {
          question: "Emerging Technologies 2",
          subanswer:
            "Code: C7-EM2-22<br/>Module Fees: $117<br/>Module Credits: 9",
          answer:
            "This module explores emerging technologies, focusing on practical application and future trends. Students will design applications, develop algorithms, and critically evaluate technology's impact. They'll address ethical, legal, and social implications, assess intelligent devices, and analyse customer experience through data analytics. Emphasis is on developing critical thinking, communication, and problem-solving skills.",
        },
        {
          question: "Nature Language Engineering",
          subanswer:
            "Code: C7-NLE-25<br/>Module Fees: $117<br/>Module Credits: 9",
          answer:
            "This module introduces Natural Language Processing (NLP), covering automated linguistic data processing from diverse sources. Students will learn core NLP principles, algorithms, and challenges, including language models, parsing, and text classification. Practical skills involve using state-of-the-art tools, creating NLP pipelines, and adapting existing models.",
        },
        {
          question: "Computational Biology",
          subanswer:
            "Code: D7-CBI-22<br/>Module Fees: $117<br/>Module Credits: 9",
          answer:
            "This module introduces non-biological science students to key concepts in anatomy, physiology, pathology, and pharmacology, fostering interdisciplinary collaboration in health-related projects. Students will explore computational biology, bioinformatics, and data analytics whilst developing essential IT and statistical skills to solve biological problems, generate reports, and create professional presentations.",
        },
        {
          question: "Computational Finance",
          subanswer:
            "Code: B7-CFI-22<br/>Module Fees: $117<br/>Module Credits: 9",
          answer:
            "This module equips students with programming skills to solve financial models using VBA and Python. They'll compute security values, price various options (American, European, Asian, barrier), and apply calibration techniques like Black-Scholes. Monte Carlo simulation for option pricing and Greek estimates is also covered, fostering practical financial modelling expertise.",
        },
        {
          question: "Computational Statistics",
          subanswer:
            "Code: E7-COS-22<br/>Module Fees: $117<br/>Module Credits: 9",
          answer:
            "This module focuses on computational statistics using R, enhancing data manipulation and visualisation skills. Students will learn computationally intensive techniques, applying them to real-world data. They'll master R programming, data management, and graphical representation. The module emphasises result interpretation, teamwork, and research skills, fostering practical statistical problem-solving abilities.",
        },
      ],
    },

    {
      semester: "Semester 7",
      courses: [
        {
          question: "Industrial Attachment",
          subanswer:
            "Code: C7-PPR-22<br/>Prerequisite: 240 credits<br/>Module Fees: $780<br/>Module Credits: 60",
          answer:
            "This module bridges academic study with real-world work experience. Students will apply learned skills, reflect on their programme's relevance, and understand the importance of graduate profile traits. The focus is on practical application, professional development, and adapting to the work environment.",
        },
      ],
    },
    {
      semester: "Semester 8",
      courses: [
        {
          question: "Multivariate Statistics",
          subanswer:
            "Code: E7-MUS-22<br/>Prerequisite: E7-PAS-22<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module explores multivariate data analysis, addressing high-dimensional data challenges. Students will learn geometric and algebraic foundations of techniques, applying them using R. The module covers models and methods for multivariate data, fostering familiarity with key techniques and the ability to analyse real-world datasets.",
        },
        {
          question: "Individual Project in Data Science",
          subanswer:
            "Code: C7-IPD-22<br/>Prerequisite: C7-REM-22<br/>Module Fees: $312<br/>Module Credits: 24",
          answer:
            "This module fosters independent problem-solving through student-selected projects. Students apply learned knowledge to complex issues, demonstrating practical understanding. The module emphasises lifelong learning, encouraging reflection on the skills and knowledge required for successful project completion.",
        },
        {
          question: "Professional Issues and Ethics",
          subanswer:
            "Code: C7-PIE-22<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module explores ethical challenges in computing, covering topics like privacy, security, and intellectual property. Students will analyse computer crimes, software development ethics, and data protection. They'll apply ethical decision-making, understand IT professional responsibilities, and evaluate approaches to protect privacy and freedom of speech in the digital age.",
        },
      ],
    },
    {
      semester: "Semester 8 Elective Group (Choose Two)",
      courses: [
        {
          question: "Big Data Databases",
          subanswer:
            "Code: C7-BDD-22<br/>Module Fees: $117<br/>Module Credits: 9",
          answer:
            "This module explores big data's challenges in modelling, storage, and access. Students will learn to recognise big data characteristics, identify organisational benefits, distinguish data sources, apply security best practices, and understand the data lifecycle.",
        },
        {
          question: "Algorithm Analysis",
          subanswer:
            "Code: C7-AAN-22<br/>Module Fees: $117<br/>Module Credits: 9",
          answer:
            "This module introduces students to algorithm analysis, covering step-by-step problem-solving procedures. By module end, students will: understand algorithm and data structure design techniques, apply data structures in algorithm implementation, design efficient algorithms, prove correctness, analyse efficiency, and understand fundamental algorithmic problems and solutions.",
        },
        {
          question: "Big Data Technologies",
          subanswer:
            "Code: C7-BDT-22<br/>Module Fees: $117<br/>Module Credits: 9",
          answer:
            "This module introduces the intersection of data engineering and data science for extracting knowledge from Big Data. Students will learn to use Big Data infrastructure, solve integration and storage challenges, perform data analytics, derive strategies for privacy and policy, and conduct original research on Big Data problems.",
        },
        {
          question: "Advanced Artificial Intelligence",
          subanswer:
            "Code: C7-AAI-22<br/>Prerequisite: C7-ARI-22<br/>Module Fees: $117<br/>Module Credits: 9",
          answer:
            "This module teaches modern AI through coding and training machine learning algorithms. Students learn supervised and unsupervised methods, deep learning concepts, mathematical foundations, data preprocessing, and model evaluation. Practical examples cover reasoning, language, and image recognition.",
        },
      ],
    },
  ],
  requirements: [
    {
      question: "Admission Requirements",
      answer:
        "IGCSE/equivalent with 5 Passes including English and Mathematics. Applicants in possession of a Diploma or Higher Diploma in related fields may be given exemptions based on the credit point equivalency.",
    },

    {
      question: "Technical Requirements",
      answer: `<div class="technical-requirements">
  <p>
    To ensure a smooth and effective learning experience, students enrolling in this programme must meet the following technical requirements:
  </p></br>

  <p><strong>Device Requirements:</strong></p>
  <ul>
    <li>
      <p>Computer/Laptop:</p> Windows (10 or later) or Mac (macOS 10.15 or later); Processor: Intel i3 (or equivalent) and above; RAM: Minimum 4 GB (8 GB recommended for multitasking); Storage: Minimum 20 GB free space for coursework and downloads; Camera and Microphone: Built-in or external for live sessions and presentations.
    </li></br>
    <li><p>OR</p></li></br>
    <li>
      <p>Tablet/Smartphone:</p> Suitable for accessing content on the go (limited functionality for assignments/exams).
    </li>
  </ul></br>

  <p><strong>Internet Requirements:</strong></p>
  <ul>
    <li>
      Connection speed: Minimum 5 Mbps download and 2 Mbps upload (10 Mbps recommended for seamless video conferencing).
    </li>
    <li>
      Stable Wi-Fi or Ethernet connection recommended for live Zoom sessions.
    </li>
  </ul></br>

  <p><strong>Software and Platforms: </strong></p>
  <ul>
    <li>
      <p>Virtual Live Sessions: Zoom (Synchronous learning); Document Processing: Microsoft Office (Word, Excel, PowerPoint) or equivalent (Google Docs).</p>
    </li>
  </ul></br>

  <p><strong>Browser Requirements: </strong></p>
  <ul>
    <li>
      Supported browsers: Chrome (latest version), Safari (for Mac users); Cookies and JavaScript: Enabled for full Blackboard functionality.
    </li>
  </ul></br>

  <p><strong>Additional Tools: </strong>(Optional but Recommended)</p>
  <ul>
    <li>Headset: For clear audio during virtual classes.</li>
    <li>External storage (USB/Cloud): For backups of important coursework.</li>
    <li>Antivirus software: To protect against malware or data loss.</li>
  </ul>
</div>
`,
    },
  ],
  programOverview: `Want to become a data expert? Our BSc in Data Science equips you to transform raw data into meaningful insights. This forward-looking programme integrates statistics, machine learning, computer science, and data analytics, preparing students to master data processing, analytics, and visualisation alongside advanced techniques in machine learning, data mining, and big data technologies.<br></br>Through hands-on experience with AI, cloud computing, a capstone project, and an industrial attachment, students develop practical, industry-ready skills. Graduates are prepared for exciting careers as data scientists, business analysts, or AI engineers across finance, healthcare, technology, and beyond.`,
};

export const bbainbusinessmanagement = {
  heroContent: {
    question: "BBA in Business Management",
    image: "/images/courses-images/BBA in bus mgmt.jpeg",
    downloadurl: `${baseUrl}BBABusinessManagement.pdf`,
    typicalfulltimestudyperiod: 4,
    // maxPeriod: 6,
    programmeCredit: "$13",
    totalProgrammeCredit: 480,
    noOfModules: "42 (38 core + 4 elective)",
    totalFee: "$6,240",
    cta: true,
    timer: true,
    overview: true,
  },
  courseStruture: [
    {
      semester: "Semester 1",
      courses: [
        {
          question: "Introduction to MS Office",
          subanswer:
            "Code: C5-IMO-20<br/>Prerequisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module equips students with essential digital skills for academic, professional, and personal productivity. It provides practical experience with Microsoft Office applications, fostering proficiency in word processing, spreadsheets, presentations, database management, and email communication to build a strong foundation for effective digital engagement.",
        },
        {
          question: "Academic Writing for Business",
          subanswer:
            "Code: D5-AWB-20<br/>Prerequisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module develops essential academic writing skills, emphasising paragraph structure, thesis statements, and coherent argumentation. It addresses plagiarism, its implications, and strategies for avoidance. Students also gain competence in referencing, citation techniques, resource evaluation, and the use of tools such as Mendeley to uphold academic integrity.",
        },
        {
          question: "Business Mathematics and Statistics 1",
          subanswer:
            "Code: B5-BS1-17<br/>Prerequisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces fundamental mathematical concepts such as fractions, percentages, algebra, and their applications in business. It covers basic statistics, including data organisation, measures of central tendency, dispersion, and spreadsheet analysis. Probability concepts, including axioms, distributions, and the standard normal curve, are examined to strengthen quantitative decision-making skills.",
        },
        {
          question: "Legal Aspects of Business",
          subanswer:
            "Code: B5-LAB-20<br/>Prerequisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces the origins of law and the structure of legal systems, with particular reference to Botswana. It examines both criminal and civil law and explores key areas such as contracts, sales, leases, credit agreements, insurance, agency, employment, intellectual property, negotiable instruments, and business enterprises, providing essential legal foundations.",
        },
        {
          question: "Introduction to Financial Accounting",
          subanswer:
            "Code: A5-IFA-20<br/>Prerequisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module provides a foundational understanding of financial accounting principles and techniques. Students will be introduced to accounting, financial record preparation, and adjustments aligned with international accounting standards. Emphasising error analysis and financial reporting, the module equips students with essential skills to manage financial records and support informed business decision-making.",
        },
        {
          question: "Business Management 1",
          subanswer:
            "Code: B5-BM1-20<br/>Prerequisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces business management as a discipline, addressing core concepts, economic systems, and stakeholder roles. It examines the business environment, management functions, and key areas including operations, finance, human resources, and marketing. Leadership principles and theories are explored to build a foundation for sound business strategy and decision-making.",
        },
      ],
    },
    {
      semester: "Semester 2",
      courses: [
        {
          question: "Principles of Marketing",
          subanswer:
            "Code: B5-PMK-20<br/>Prerequisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces the fundamentals of marketing, covering the 7 P’s, consumer behaviour, and decision-making processes. It examines market research, segmentation, and targeting strategies, alongside product development, pricing, and promotion. Students gain essential skills to apply marketing principles effectively in dynamic and competitive business environments.",
        },
        {
          question: "Business Mathematics and Statistics 2",
          subanswer:
            "Code: B6-BS2-21<br/>Prerequisite: B5-BS1-17<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module develops essential mathematical skills through topics such as quadratic equations, functions, differentiation, and integration. It introduces statistical concepts including sampling distributions, confidence intervals, hypothesis testing, and chi-square tests, while also covering regression analysis, decision theory, and time series forecasting to support data-driven decision-making in business and research.",
        },
        {
          question: "Microeconomics",
          subanswer:
            "Code: B6-MIE-17<br/>Prerequisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces key economic principles, including scarcity, choice, and the functioning of economic systems. It examines demand and supply, market equilibrium, and elasticity, alongside firm behaviour, production costs, and market structures. Externalities, public goods, and income distribution are also addressed, offering insights into economic decision-making and policy development.",
        },
        {
          question: "Financial Accounting 1",
          subanswer:
            "Code: A6-FA1-17<br/>Prerequisite: A5-IFA-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces accounting principles, financial reporting, and corporate structures. It examines company formation, financial statement preparation, and adjustments in line with IFRS and IAS standards. Key areas include limited liability companies, partnerships, ratio analysis, and asset management, with emphasis on reporting frameworks and financial information for effective decision-making.",
        },
        {
          question: "Business Management 2",
          subanswer:
            "Code: B6-BM2-20<br/>Prerequisite: B5-BM1-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module provides a foundation in management principles, addressing managerial roles, strategic planning, decision-making, and organisational structures. It explores human resource management, change management, diversity, and logistics. Emphasis is placed on adapting to environmental shifts, utilising information systems, and developing skills for sustainable competitive advantage in contemporary business contexts.",
        },
        {
          question: "Customer Relationship Management",
          subanswer:
            "Code: B7-CRM-20<br/>Prerequisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module explores the management of marketing with a focus on Customer Relationship Management (CRM). Students will critically understand CRM principles, their role in business strategy, and the importance of customer service. Through real-world examples, they will apply CRM strategies to acquire, coordinate, and maximize customer relationships effectively.",
        },
      ],
    },

    {
      semester: "Semester 3",
      courses: [
        {
          question: "Macroeconomics",
          subanswer:
            "Code: B6-MAE-17<br/>Prerequisite: B6-MIE-17<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces macroeconomic principles, covering economic perspectives, national income measurement, and business cycles. It explores aggregate demand and supply, fiscal and monetary policies, and the role of central banks. Additionally, it examines inflation, unemployment, and international trade, highlighting the impact of economic policies on national and global markets.",
        },
        {
          question: "Small Business Management",
          subanswer:
            "Code: B6-SBM-21<br/>Prerequisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module explores the role of small enterprises in economic growth, job creation, and poverty reduction. Students will learn about small business management, funding access, market opportunities, and government incentives. It covers business lifecycles, challenges, and leadership strategies, preparing students to drive small business success and economic development.",
        },
        {
          question: "Fundamentals of Financial Management",
          subanswer:
            "Code: B6-FFM-20<br/>Prerequisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces financial management principles, emphasising financial analysis, decision-making, and resource management. Students will explore financial markets, investment risks, capital budgeting, and corporate valuation. Key topics include firm financing, mergers, dividend policy, and international finance. The course equips students with quantitative skills for risk management and working capital optimisation.",
        },
        {
          question: "Financial Accounting 2",
          subanswer:
            "Code: A6-FA2-17<br/>Prerequisite: A6-FA1-17<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module equips students with the skills to prepare financial statements for single entities and simple groups under IFRS. It covers branch accounts, hire purchase, royalties, and consolidating subsidiaries. Students will apply the IASB framework, prepare cash flow statements, and gain proficiency in IFRS compliance for real-world financial reporting.",
        },
        {
          question: "Organisational Behaviour",
          subanswer:
            "Code: B6-OBE-20<br/>Prerequisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module explores organisational behavior, focusing on group dynamics, leadership, motivation, structure, and change management. Students will learn team building, conflict resolution, and labor management while analysing human and organisational interactions. Key topics include stress management, industrial relations, and the systems approach, preparing students to navigate evolving organisational environments effectively.",
        },
        {
          question: "Business Information Systems",
          subanswer:
            "Code: B6-BIS-20<br/>Prerequisite: C5-IMO-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces Business Information Systems (BIS), focusing on how information technology enhances organisational performance and decision-making. Students will learn to manage IT systems, analyse business intelligence, and model information flow. Topics include regulatory issues, system quality, cybercrime, and security, preparing students to manage and apply information systems effectively in business.",
        },
      ],
    },
    {
      semester: "Semester 4",
      courses: [
        {
          question: "Operations Management",
          subanswer:
            "Code: B6-OPM-20<br/>Prerequisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module teaches principles and techniques for efficient production and distribution of goods and services, focusing on minimising waste. Students will explore operations management, including inventory, quality control, logistics, and process optimisation. Key topics include forecasting, scheduling, project management, and quality methods. Students will develop skills in project management, teamwork, and communication.",
        },
        {
          question: "Computerised Accounting",
          subanswer:
            "Code: A6-CAF-17<br/>Prerequisite: C5-IMO-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module provides students with practical knowledge of accounting software and its use in recording business transactions. Students will learn to record transactions, perform bank reconciliations, and manage inventory and fixed assets. Students will be able to set up a computerised system, generate financial reports, and understand its impact on efficiency and accuracy.",
        },
        {
          question: "Consumer Behaviour",
          subanswer:
            "Code: B6-COB-21<br/>Prerequisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module provides an interdisciplinary understanding of consumer behavior, integrating psychological and sociological theories to inform business strategies. Students will explore key theories and models, applying them to real-world consumer contexts. They will analyse how marketing and promotional activities influence purchasing decisions, equipping them to shape effective business strategies.",
        },
        {
          question: "Marketing Management",
          subanswer:
            "Code: B6-MKT-20<br/>Prerequisite: B5-PMK-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module provides a comprehensive understanding of marketing management, focusing on coordinating and running marketing activities within an organisation. Students will learn to manage the marketing mix, conduct research, and apply strategies to achieve business objectives and enhance customer satisfaction. Students will be equipped to discuss and apply marketing management principles effectively.",
        },
        {
          question: "Cost Accounting",
          subanswer:
            "Code: A6-COA-20<br/>Prerequisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces key costing principles, including cost behaviour, classification, and the accounting of materials and labour. It covers inventory valuation, overhead allocation, marginal and absorption costing, as well as job, batch, and process costing. Cost-volume-profit analysis, standard costing, variance analysis, and budgeting are also examined to support effective cost control.",
        },
        {
          question: "Purchasing Management",
          subanswer:
            "Code: B6-PMT-21<br/>Prerequisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module equips students with principles and techniques for efficient procurement, focusing on minimising waste. Students will gain insight on purchase operations, payment processes, inventory management, supplier evaluation, and quality control. Students will learn to apply strategic sourcing, manage supplier relationships, and use negotiation skills to optimise procurement processes and achieve organisational goals.",
        },
      ],
    },

    {
      semester: "Semester 5",
      courses: [
        {
          question: "Quality Management",
          subanswer:
            "Code: B7-QUM-20<br/>Prerequisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module provides tutors with a critical understanding of quality management and the skills to implement quality initiatives accurately, ensuring compliance with standards. There is coverage of quality systems, ISO 9000, TQM, and Six Sigma, enabling students to assess and improve quality practices in both product and service environments while addressing regulatory and environmental issues.",
        },
        {
          question: "Corporate Finance",
          subanswer:
            "Code: B7-CFI-21<br/>Prerequisite: B6-FFM-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module teaches students how to raise and manage financial resources within an organisation, focusing on corporate finance techniques. Students will learn to analyse financial accounts, evaluate valuation techniques, and understand the relationship between risk and return. They gain in-depth knowledge on capital structure, funding sources, mergers, acquisitions, and international finance, preparing students for key financial decision-making.",
        },
        {
          question: "Project Management",
          subanswer:
            "Code: B7-PRM-20<br/>Prerequisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module teaches students essential project management skills, focusing on timelines, deliverables, and key issues like team dynamics, communication, quality control, and risk management. Students will learn core principles, evaluate Project Life Cycle models, apply methodologies, use project management software, and conduct project appraisals using capital budgeting techniques to assess viability and outcomes.",
        },
        {
          question: "Import and Export Management",
          subanswer:
            "Code: B7-IEM-20<br/>Prerequisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module equips students with the skills to manage the import and export process, covering procedures, documentation, and regulations in international trade. Students will learn key principles of global trade, payment methods, financing, risk management, logistics, and containerisation. The module also emphasises the use of technology to improve efficiency in import-export operations.",
        },
      ],
    },
    {
      semester: "Semester 5 Elective Group (Choose Two)",
      courses: [
        {
          question: "Managing Consulting",
          subanswer:
            "Code: B7-MNC-21<br/>Prerequisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module offers an interdisciplinary approach to managing consulting in business, equipping students with a deep understanding of consulting practices and strategic implications. Students will learn to manage consultancy processes, navigate the consulting life cycle, balance creativity and methodology, address trust and risk, and apply ethical principles, while exploring consulting career opportunities.",
        },
        {
          question: "International Business Management",
          subanswer:
            "Code: B7-IBM-20<br/>Prerequisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces students to managing businesses in an international context, focusing on key concepts and practices. Students will learn to navigate international management systems, develop global business intelligence, formulate and implement international strategies, understand regulatory and cultural challenges, and appreciate the complexities of cross-border operations in global environments.",
        },
        {
          question: "Family Business Management",
          subanswer:
            "Code: B7-FBM-20<br/>Prerequisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module provides an understanding of the dynamics and challenges in managing a family-owned business. Students will learn about family business structures, the advantages and disadvantages of such setups, decision-making processes, and succession planning. It also covers themes like leadership, governance, and managing family relationships for sustainable growth.",
        },
      ],
    },

    ///6

    {
      semester: "Semester 6",
      courses: [
        {
          question: "E-Business",
          subanswer:
            "Code: B7-EBS-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module explores the relationship between technology and business, focusing on the impact of technological changes like the Internet and eCommerce on business practices. Students will learn e-business models, risks, opportunities, and strategies, including supply chain management, e-marketing, and CRM. The module also covers the design, implementation, and monitoring of e-business systems, ensuring students can effectively manage digital business operations.",
        },
        {
          question: "Human Resource Management",
          subanswer:
            "Code: B7-HRM-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces Human Resource Management (HRM) in organisations, focusing on managing human capital strategically. Students will learn HR practices like recruitment, development, employee relations, and health and safety. They will also explore union roles, human capital development, and HR policies to drive organisational success and maintain a safe, productive workplace.",
        },
        {
          question: "Research Methods in Business",
          subanswer:
            "Code: B7-RMB-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module explores business and management research, covering epistemology, research strategies, ethics, and proposal development. It examines literature review, research design, data collection methods, and SPSS for analysis. Additionally, it addresses time and resource management, data presentation, and report writing, equipping learners with essential research skills for academic and professional inquiry.",
        },
        {
          question: "Transport and Logistics Management",
          subanswer:
            "Code: B7-TLM-21<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module teaches students the principles and techniques of packaging, distributing goods, and optimising logistics. Topics include transportation and logistics management, integrating logistics with customer care, addressing supply chain challenges, creating competitive advantages, resource management, teamwork, and planning with freight transportation to enhance efficiency and minimise costs.",
        },
      ],
    },
    {
      semester: "Semester 6 Elective Group (Choose Two)",
      courses: [
        {
          question: "Business Ethics and Corporate Social Responsibility",
          subanswer:
            "Code: B7-BEC-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module explores the ethical dimensions of business, focusing on governance, corporate social responsibility (CSR), and sustainability. Students will understand the importance of ethics in decision-making, evaluate CSR trends, assess the role of corporate culture and leadership, and address ethical challenges in areas like marketing, governance, and stakeholder relations for long-term success.",
        },
        {
          question: "Change Management",
          subanswer:
            "Code: B7-CHM-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module equips students with the skills to manage and navigate organisational change effectively. Students will learn about the stages of change, levels at which it occurs, strategies to manage resistance, assess change readiness, and implement sustainable change management strategies to foster long-term adaptability and organisational success.",
        },
        {
          question: "Corporate Governance",
          subanswer:
            "Code: B7-CGV-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module provides students with a comprehensive understanding of corporate governance, focusing on its role in effective organisational management. Students will explore governance principles, global trends, and the OECD guidelines, evaluate the impact of good governance on performance, identify signs of ineffective governance, and address governance challenges in family-owned businesses and board responsibilities.",
        },
        {
          question: "Brand Management",
          subanswer:
            "Code: B7-BMT-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module equips students with the essential skills for effective brand management. It covers the principles of branding, brand positioning, and equity, along with strategies for designing and implementing brand marketing programmes. Students will also explore brand management in local and international markets and the growing importance of digital branding.",
        },
      ],
    },
    {
      semester: "Semester 7",
      courses: [
        {
          question: "Knowledge Management",
          subanswer:
            "Code: B7-KNM-21<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module provides an interdisciplinary understanding of knowledge management and its strategic implications for business managers. Students will critically evaluate knowledge management concepts and applications, design effective strategies to foster organisational learning, and learn to manage the implementation of knowledge management processes to enhance organisational success and development.",
        },
        {
          question: "Strategic Management",
          subanswer:
            "Code: B7-STM-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "This module equips students with the skills to analyse, formulate, and implement business strategies in the business management landscape. It focuses on competitive analysis, decision-making, resource management, and sustainability. Students learn to develop strategic plans that enhance organisational performance and long-term success in a dynamic business environment.",
        },
        {
          question: "Research Project 1: Proposal Writing",
          subanswer:
            "Code: B7-RP1-20<br/>Prerequisite: B7-RMB-20<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces students to business and management research, focusing on proposal writing for their final-year project. Students will learn to design data collection tools, understand research strategies (qualitative and quantitative), ensure ethical practices, use SPSS for data analysis, and analyse and present data effectively. The module also covers writing structured, well-reasoned business research reports.",
        },
        {
          question: "Entrepreneurship and Innovation",
          subanswer:
            "Code: B8-ENI-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "This module explores entrepreneurship and innovation, covering enterprise development, opportunity discovery, and business planning. It examines innovation principles, feasibility assessment, business modelling, and disruptive technologies. Students will learn to validate risks, market size, and pricing while developing entrepreneurial teams, fostering creativity, and building sustainable, innovative ventures.",
        },
      ],
    },
    {
      semester: "Semester 8",
      courses: [
        {
          question: "Professional Practice in Business",
          subanswer:
            "Code: B7-PPB-20<br/>Prerequisite: 240 Credits<br/>Co-requisite: None<br/>Module Fees: $520<br/>Module Credits: 40",
          answer:
            "This internship module bridges the gap between academic learning and real-world application. Students will gain practical experience, develop specialist knowledge, and improve decision-making, research, and communication skills. They will also learn to identify entrepreneurial opportunities and foster a commitment to lifelong learning, aligning with the Botho Graduate Profile.",
        },
        {
          question: "Research Project 2: Dissertation",
          subanswer:
            "Code: B7-RP2-20<br/>Prerequisite: B7-RP1-20<br/>Co-requisite: None<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "This module helps students identify, research, and address real-world industry problems by developing a holistic project. Students will define a specific problem, provide background context, conduct literature reviews, design research methodologies, collect and analyse data, draw conclusions, and write a final report. It enhances research skills and applies theoretical knowledge to business challenges.",
        },
      ],
    },
  ],
  requirements: [
    {
      question: "Admission Requirements",
      answer:
        "IGCSE/equivalent with 5 Passes including English and Mathematics. Applicants in possession of a Diploma or Higher Diploma in related fields may be given exemptions based on the credit point equivalency.",
    },

    {
      question: "Technical Requirements",
      answer: `<div class="technical-requirements">
  <p>
  To ensure a smooth and effective learning experience, students enrolling in this programme must meet the following technical requirements:
  </p></br>
  <p><strong>Device Requirements:</strong></p>
  <ul>
    <li>
      <p>Computer/Laptop:</p> Windows (10 or later) or Mac (macOS 10.15 or later); Processor: Intel i3 (or equivalent) and above; RAM: Minimum 4 GB (8 GB recommended for multitasking); Storage: Minimum 20 GB free space for coursework and downloads; Camera and Microphone: Built-in or external for live sessions and presentations.
    </li></br>
    <li><p>OR</p></li></br>
    <li>
      <p>Tablet/Smartphone:</p> Suitable for accessing content on the go (limited functionality for assignments/exams).
    </li></br>
  </ul>
  <p><strong>Internet Requirements: </strong></p>
  <ul>
    <li>
      Connection speed: Minimum 5 Mbps download and 2 Mbps upload (10 Mbps recommended for seamless video conferencing).
    </li>
    <li>
      Stable Wi-Fi or Ethernet connection recommended for live Zoom sessions.
    </li>
  </ul></br>

  <p><strong>Software and Platforms: </strong></p>
  <ul>
    <li>
      <p>Virtual Live Sessions: Zoom (Synchronous learning); Document Processing: Microsoft Office (Word, Excel, PowerPoint) or equivalent (Google Docs).</p>
    </li>
  </ul></br>

  <p><strong>Browser Requirements: </strong></p>
  <ul>
    <li>
      Supported browsers: Chrome (latest version), Safari (for Mac users); Cookies and JavaScript: Enabled for full Blackboard functionality.
    </li>
  </ul></br>

  <p><strong>Additional Tools: </strong>(Optional but Recommended)</p>
  <ul>
    <li>Headset: For clear audio during virtual classes.</li>
    <li>External storage (USB/Cloud): For backups of important coursework.</li>
    <li>Antivirus software: To protect against malware or data loss.</li>
  </ul></br>
</div>
`,
    },
  ],
  programOverview: `Aiming for a leadership role in the global business environment? Our Bachelor of Business Administration in Business Management provides the strategic mindset and skills you need. This programme covers key areas like management, finance, marketing, entrepreneurship, operations, and digital transformation, with a strong focus on innovation, sustainability, and ethical leadership.<br></br>Through case studies, collaborative projects, and industry-driven learning, you will gain real-world experience while sharpening critical thinking and problem-solving abilities. Whether your ambition is to launch an entrepreneurial venture or advance in a corporate career, this degree equips you to drive innovation and achieve lasting success.`,
};

// export const bcominhospitalitymanagement = {
//   heroContent: {
//     question: "BCom in Hospitality Management",
//     image: "/images/courses-images/Bcom in Hospitality.jpeg",
//     downloadurl: `${baseUrl}BCominHospitalityManagement.pdf`,
//     minPeriod: 4,
//     maxPeriod: 6,
//     programmeCredit: "$13",
//     totalProgrammeCredit: 515,
//     noOfModules: "36 (35 Core + 1 Elective)",
//     totalFee: "$6,695",
//     cta: true,
//     timer: true,
//     overview: true,
//   },
//   courseStruture: [
//     {
//       semester: "Semester 1",
//       courses: [
//         {
//           question: "Principles of Hospitality and Tourism",
//           subanswer:
//             "Code: H6-PHT-22<br/>Prerequisite: None<br/>Corequisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
//           answer:
//             "Principles of Hospitality and Tourism is a module that introduces students to the hospitality and tourism industry, covering lodging, travel, recreation, attractions, and food services. It develops communication, time management, and customer service skills while exploring industry history and key success traits, preparing learners to meet professional standards in a dynamic global sector.",
//         },
//         {
//           question: "Computers and its Essentials",
//           subanswer:
//             "Code: C5-CE1-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
//           answer:
//             "This module provides a foundational understanding of computers and their essentials, covering basic functions, hardware and software components, and how they operate. It explores the history and evolution of computers and data processing. Students will learn about Microsoft Office, with an emphasis on Microsoft Word and PowerPoint. Through hands-on activities and assessments, learners will develop a comprehensive understanding of computer essentials.",
//         },
//         {
//           question: "Academic Writing for Business",
//           subanswer:
//             "Code: D5-AWB-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
//           answer:
//             "The Academic Writing for Business module develops students' ability to communicate effectively in a professional and academic business context. It enhances critical thinking, research, and writing skills, focusing on clarity, coherence, and proper structure. Students learn to present arguments, analyze data, and produce well-structured business reports and documents.",
//         },
//         {
//           question: "Professional Cookery 1",
//           subanswer:
//             "Code: H5-PC1-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
//           answer:
//             "Professional Cookery module equips students with essential culinary skills, food preparation techniques, and kitchen management principles. It emphasizes hygiene, nutrition, and presentation while fostering creativity and efficiency in a professional kitchen. Students gain hands-on experience to meet industry standards and excel in various culinary and hospitality settings.",
//         },
//         {
//           question: "Introduction to Hotel Operations",
//           subanswer:
//             "Code: H5-IHO-17<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
//           answer:
//             "Introduction to Hotel Operations module provides students with a foundational understanding of hotel management, including front office, housekeeping, food and beverage, and guest services. It emphasizes industry standards, operational efficiency, and customer satisfaction, preparing students for roles in hospitality by developing practical skills and knowledge of hotel functions.",
//         },
//         {
//           question: "Introduction to Financial Accounting",
//           subanswer:
//             "Code:A5-IFA-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
//           answer:
//             "Financial Accounting module equips students with fundamental accounting principles, including recording, analyzing, and interpreting financial transactions. It covers financial statements, bookkeeping, and regulatory standards, enabling students to understand business finances, make informed decisions, and ensure transparency in financial reporting within the hospitality and business sectors.",
//         },
//       ],
//     },
//     {
//       semester: "Semester 2",
//       courses: [
//         {
//           question: "Professional Cookery 2",
//           subanswer:
//             "Code: H7-PC2-22<br/>Prerequisite: H5-PC1-22<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 15",
//           answer:
//             "Professional Cookery 2 module provides intensive training in professional cookery, equipping learners with essential skills, techniques, and culinary knowledge. Students gain expertise in cooking methods, menu planning, and recipe development while understanding ingredient costs, quality, and usage. It prepares them to create diverse dishes and excel in the culinary industry.",
//         },
//         {
//           question: "Business Communication",
//           subanswer:
//             "Code: D7-BUC-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 15",
//           answer:
//             "Business Communication module develops students' ability to communicate effectively in professional settings. It covers written, verbal, and non-verbal communication, focusing on clarity, persuasion, and etiquette. Students learn to create business reports, emails, and presentations, enhancing their interpersonal and organizational communication skills for successful business interactions.",
//         },
//         {
//           question: "Microeconomics",
//           subanswer:
//             "Code: B5-MIE-17<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
//           answer:
//             "Microeconomics module introduces students to fundamental economic principles, focusing on how individuals and businesses make decisions regarding resource allocation, pricing, and production. It covers supply and demand, market structures, consumer behaviour, and cost analysis, equipping students with analytical skills to understand and apply economic concepts in business environments.",
//         },
//         {
//           question: "Principles of Hospitality Franchise",
//           subanswer:
//             "Code: H7-PHT-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 15",
//           answer:
//             " Principles of Hospitality Franchise module introduces students to the fundamentals of franchising in the hospitality industry. It covers franchise models, operations, legal aspects, and financial considerations. Students gain insights into franchise management, brand consistency, and growth strategies, preparing them for entrepreneurial or managerial roles in hospitality franchising.",
//         },
//         {
//           question: "Front Office Operations",
//           subanswer:
//             "Code: H7-FRO-17<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 15",
//           answer:
//             "Front Office Operations module provides students with essential knowledge and skills in hotel front desk management. It covers guest relations, reservations, check-in/check-out procedures, billing, and communication. Emphasizing customer service and operational efficiency, the module prepares students for roles in hospitality reception, concierge services, and front office management.",
//         },
//       ],
//     },

//     {
//       semester: "Semester 3",
//       courses: [
//         {
//           question: "Business Mathematics",
//           subanswer:
//             "Code: B6-BMA-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
//           answer:
//             "Business Mathematics module equips students with essential mathematical concepts and analytical skills for business decision-making. It covers topics like percentages, ratios, financial calculations, algebra, and statistical analysis. This module helps students apply mathematical techniques in finance, accounting, and economics, enhancing problem-solving abilities in business and hospitality management.",
//         },

//         {
//           question: "Clinary Studies and Nutrition 1",
//           subanswer:
//             "Code: H7-CS1-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
//           answer:
//             "Culinary and Nutrition Studies module explores the relationship between food preparation and nutrition. It equips students with essential cooking techniques, menu planning skills, and knowledge of balanced diets. Emphasizing health, sustainability, and dietary needs, the module prepares students to create nutritious, high-quality meals in the hospitality and food industries.",
//         },
//         {
//           question: "HouseKeeping Management",
//           subanswer:
//             "Code: H7-HKP-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
//           answer:
//             "The Housekeeping Management module focuses on the leadership and organizational skills required to manage a hotel’s housekeeping department. It covers staffing, training, budgeting, inventory control, and quality assurance. Students learn to optimize operations, maintain cleanliness and safety standards, and ensure exceptional guest satisfaction through effective housekeeping management practices.",
//         },
//         {
//           question: "Customer Service Management",
//           subanswer:
//             "Code: H7-CSM-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 15",
//           answer:
//             "Customer Service Management module equips students with essential skills to deliver exceptional guest experiences. It covers communication, problem-solving, service etiquette, and handling customer feedback. Emphasizing professionalism and customer satisfaction, the module prepares students to enhance guest loyalty and service excellence in hotels, restaurants, and tourism businesses.",
//         },
//         {
//           question: "Hospitality Health and Safety",
//           subanswer:
//             "Code: H6-HHS-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
//           answer:
//             "Hospitality Health and Safety module equips students with essential knowledge of workplace safety, hygiene, and risk management in the hospitality industry. It covers food safety, fire prevention, hazard control, and legal compliance. Students learn to create safe environments for guests and staff while adhering to industry health regulations.",
//         },
//         {
//           question: "Food Service Operations",
//           subanswer:
//             "Code: H5-FSE-14<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
//           answer:
//             "Food Service Operations module equips students with essential skills in managing food and beverage services in hospitality settings. It covers service styles, customer interaction, order management, hygiene, and operational efficiency. Students learn to enhance guest experiences, maintain quality standards, and oversee restaurant or catering service operations effectively.",
//         },
//       ],
//     },

//     {
//       semester: "Semester 4",
//       courses: [
//         {
//           question: "Business Statistics",
//           subanswer:
//             "Code: B7-BST-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 15",
//           answer:
//             "Food Service Operations module equips students with essential skills in managing food and beverage services in hospitality settings. It covers service styles, customer interaction, order management, hygiene, and operational efficiency. Students learn to enhance guest experiences, maintain quality standards, and oversee restaurant or catering service operations effectively.",
//         },

//         {
//           question: "Culinary Studies and Nutrition  2",
//           subanswer:
//             "Code: H7-CS2-22<br/>Prerequisite: H7-CS1-22<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 15",
//           answer:
//             "Culinary and Nutrition Studies 2 module builds on foundational culinary skills, focusing on advanced cooking techniques and specialized dietary needs. It emphasizes creating nutritious meals for specific populations, such as those with allergies, intolerances, or medical conditions. Students gain expertise in menu design, food preparation, and nutritional analysis.",
//         },
//         {
//           question: "Food and Beverages Studies",
//           subanswer:
//             "Code: H7-FBS-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 15",
//           answer:
//             "Food and Beverage Studies module provides students with a comprehensive understanding of food and drink management in the hospitality industry. It covers menu planning, service techniques, cost control, hygiene, and customer service. Students gain practical knowledge to enhance dining experiences and manage food and beverage operations efficiently.",
//         },
//         {
//           question: "Tourism and Hospitality laws and Ethics",
//           subanswer:
//             "Code: H7-THL-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 15",
//           answer:
//             "Tourism and Hospitality Law and Ethics module introduces students to legal and ethical principles governing the hospitality and tourism industry. It covers contracts, liability, consumer rights, employment laws, and ethical decision-making. Students learn to navigate legal frameworks, uphold industry standards, and ensure responsible business practices.",
//         },
//         {
//           question: "Accomodation and Management",
//           subanswer:
//             "Code: H7-ACM-22<br/>Prerequisite: H7-HKP-22<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 15",
//           answer:
//             "Accommodation Management module equips students with the skills to oversee lodging operations in hotels, resorts, and other hospitality establishments. It covers front office coordination, housekeeping, guest relations, and revenue management. Students learn to optimize occupancy, maintain service quality, and ensure efficient, customer-focused accommodation services.",
//         },
//       ],
//     },

//     {
//       semester: "Semester 5",
//       courses: [
//         {
//           question: "Financial Accounting",
//           subanswer:
//             "Code: A7-FAC-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 15",
//           answer:
//             "Financial Accounting module equips students with essential accounting principles for recording, analysing, and reporting financial transactions. It covers financial statements, bookkeeping, budgeting, and regulatory compliance. Students develop the skills to interpret financial data, support decision-making, and ensure transparency in financial management within the hospitality and business sectors.",
//         },
//         {
//           question: "Hospility Operations and Supply Chain",
//           subanswer:
//             "Code: H7-HOS-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 15",
//           answer:
//             "Hospitality Operations and Supply Chain module explores the management of hospitality services and the efficient flow of goods and resources. It covers procurement, inventory control, logistics, and service delivery. Students learn to optimize operations, reduce costs, and enhance service quality while ensuring smooth supply chain management in hospitality businesses.",
//         },
//         {
//           question: "Marketing for Hospitality and Tourism ",
//           subanswer:
//             "Code: H7-MHT-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 15",
//           answer:
//             "Marketing for Hospitality and Tourism module equips students with essential marketing strategies tailored to the hospitality and tourism industry. It covers market research, consumer behavior, branding, digital marketing, and service promotion. Students learn to develop effective marketing campaigns to attract and retain customers in a competitive global market.",
//         },
//         {
//           question: "Hospitality and Tourism Information",
//           subanswer:
//             "Code: H7-HTI-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 15",
//           answer:
//             "Hospitality Tourism Information module provides students with essential knowledge on information management systems used in the hospitality and tourism industry. It covers reservation systems, data analysis, customer relationship management, and digital tools. Students learn to utilize technology to enhance guest experiences, streamline operations, and support decision-making processes.",
//         },
//         {
//           question: "Events Management",
//           subanswer:
//             "Code: H7-EVM-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 15",
//           answer:
//             "Events Management module equips students with the skills to plan, organize, and execute events in the hospitality and tourism industry. It covers event planning, budgeting, marketing, logistics, and risk management. Students learn to manage conferences, weddings, and corporate events while ensuring seamless execution and exceptional guest experiences.",
//         },
//       ],
//     },
//     {
//       semester: "Semester 6",
//       courses: [
//         {
//           question: "Research Proposal Writing",
//           subanswer:
//             "Code: H8-PRI-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
//           answer:
//             "Project 1 is a Research Proposal module that equip students with the skills to develop a structured research plan. It covers problem identification, literature review, research design, and methodology. Students learn to formulate clear objectives, justify their study, and outline data collection methods, preparing them for successful research project execution.",
//         },
//         {
//           question: "Strategic Management",
//           subanswer:
//             "Code:B7-STM-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $260<br/>Module Credits: 20",
//           answer:
//             "Strategic Management module equips students with the skills to analyze, formulate, and implement business strategies in the business management landscape. It focuses on competitive analysis, decision-making, resource management, and sustainability. Students learn to develop strategic plans that enhance organizational performance and long-term success in a dynamic business environment.",
//         },
//         {
//           question: "Quality Systems for the Hospitality Industry",
//           subanswer:
//             "Code: H7-QSH-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 15",
//           answer:
//             "Quality Systems for Hospitality Industry module focuses on implementing and managing quality assurance frameworks to enhance service excellence. It covers industry standards, customer satisfaction, continuous improvement, and regulatory compliance. The module equips learners with skills to maintain high operational standards, ensuring efficiency, guest satisfaction, and business success in hospitality.",
//         },
//         {
//           question: "Destination Management",
//           subanswer:
//             "Code: H7-DTM-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 15",
//           answer:
//             "The Destination Management module explores strategies for developing, marketing, and sustaining tourist destinations. It covers stakeholder collaboration, tourism planning, visitor experience enhancement, and sustainability practices. Learners gain insights into managing destinations effectively, balancing economic growth with environmental and cultural preservation to create competitive, appealing, and sustainable tourism experiences.",
//         },
//         {
//           question: "French",
//           subanswer:
//             "Code: D7-FRE-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 15",
//           answer:
//             "The French module aims to develop essential language skills for communication in hospitality and tourism. It covers basic vocabulary, grammar, and conversational phrases relevant to customer service. Learners gain cultural awareness and practical language proficiency, enabling them to interact effectively with French-speaking guests and enhance their professional opportunities.",
//         },
//       ],
//     },

//     {
//       semester: "Semester 7",
//       courses: [
//         {
//           question: "Project 2 - Dissertation",
//           subanswer:
//             "Code: H8-PR2-17<br/>Prerequisite: H8-PR1-17<br/>Co-requisite: None<br/>Module Fees: $260<br/>Module Credits: 20",
//           answer:
//             "Research Project 2 module enables students to apply research methodologies to investigate a hospitality or tourism-related topic. It develops critical thinking, analytical, and problem-solving skills through data collection, analysis, and report writing. Students gain hands-on experience in conducting independent research, preparing them for academic and professional pursuits.",
//         },
//         {
//           question: "Entrepreneurship and Innovation",
//           subanswer:
//             "Code: B8-ENI-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $260<br/>Module Credits: 20",
//           answer:
//             "This module equips students with the skills to generate innovative ideas, identify business opportunities, and manage new ventures. It covers entrepreneurship, idea generation, innovation management, intellectual property rights, and creativity in business. Students will learn to build an entrepreneurial culture that fosters innovation and drives sustainable business growth.",
//         },
//       ],
//     },
//     {
//       semester: "Semester 7 Elective Group One (Choose One)",
//       courses: [
//         {
//           question: "Cultural Tourism",
//           subanswer:
//             "Code: H7-CLT-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 15",
//           answer:
//             "Cultural Tourism module explores the role of culture in tourism, focusing on heritage, traditions, and local experiences. It covers cultural site management, community involvement, and sustainable tourism practices. Students learn to promote and preserve cultural assets while creating enriching tourism experiences that benefit both visitors and host communities.",
//         },
//         {
//           question: "Risk,Cris and Disaster Management",
//           subanswer:
//             "Code: H7-RCD-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 15",
//           answer:
//             "Risk, Crisis, and Disaster Management module equips students with skills to identify, assess, and manage risks in the hospitality and tourism industry. It covers crisis preparedness, emergency response, and business continuity planning. Students learn to develop strategies for minimizing disruptions and ensuring safety in unpredictable situations.",
//         },
//         {
//           question: "Hospitality and Tourism Distribution",
//           subanswer:
//             "Code: H7-HTD-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 15",
//           answer:
//             "Hospitality and Tourism Distribution module explores the channels and systems used to deliver tourism and hospitality products to consumers. It covers travel agencies, online booking platforms, global distribution systems, and supply chain management. Students learn to optimize distribution strategies, enhance market reach, and improve customer accessibility to services.",
//         },
//         {
//           question: "Ethics and Sustainability",
//           subanswer:
//             "Code: H7-EST-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 15",
//           answer:
//             "Ethics and Sustainability module equips students with knowledge of ethical decision-making and sustainable practices in hospitality and tourism. It covers corporate social responsibility, environmental conservation, and ethical business operations. Students learn to implement responsible strategies that balance profitability with social and environmental well-being for long-term industry sustainability.",
//         },
//       ],
//     },
//     {
//       semester: "Semester 8 ",
//       courses: [
//         {
//           question: "Professional Practice in Business",
//           subanswer:
//             "Code: B7-PPB-20<br/>Prerequisite: 240 Credits<br/>Co-requisite: None<br/>Module Fees: $520<br/>Module Credits: 40",
//           answer:
//             "The Professional Practice / Hospitality Internship module provides hands-on industry experience, allowing learners to apply theoretical knowledge in real-world hospitality settings. It enhances practical skills, professionalism, and problem-solving abilities while fostering industry connections. The module prepares students for career readiness, boosting confidence and employability in the hospitality sector.",
//         },
//       ],
//     },
//   ],
//   requirements: [
//     {
//       question: "Admission Requirements",
//       answer:
//         "IGCSE/equivalent with 5 Passes. Applicants in possession of a Diploma or Higher Diploma in related fields may be given exemptions based on the credit point equivalency. ",
//     },

//     {
//       question: "Technical Requirements",
//       answer: `<div class="technical-requirements">
//   <p>
//     To ensure a smooth and effective learning experience, students enrolling in this programme must meet the following technical requirements:
//   </p></br>

//   <p><strong>Device Requirements:</strong></p>
//   <ul>
//     <li>
//       <p>Computer/Laptop:</p> Windows (10 or later) or Mac (macOS 10.15 or later); Processor: Intel i3 (or equivalent) and above; RAM: Minimum 4 GB (8 GB recommended for multitasking); Storage: Minimum 20 GB free space for coursework and downloads; Camera and Microphone: Built-in or external for live sessions and presentations.
//     </li></br>
//     <li><p>OR</p></li></br>
//     <li>
//       <p>Tablet/Smartphone:</p> Suitable for accessing content on the go (limited functionality for assignments/exams).
//     </li>
//   </ul></br>

//   <p><strong>Internet Requirements: </strong></p>
//   <ul>
//     <li>
//       Connection speed: Minimum 5 Mbps download and 2 Mbps upload (10 Mbps recommended for seamless video conferencing).
//     </li>
//     <li>
//       Stable Wi-Fi or Ethernet connection recommended for live Zoom sessions.
//     </li>
//   </ul></br>

//   <p><strong>Software and Platforms: </strong></p>
//   <ul>
//     <li>
//       <p>Virtual Live Sessions: Zoom (Synchronous learning); Document Processing: Microsoft Office (Word, Excel, PowerPoint) or equivalent (Google Docs).</p>
//     </li>
//   </ul></br>

//   <p><strong>Browser Requirements: </strong></p>
//   <ul>
//     <li>
//       Supported browsers: Chrome (latest version), Safari (for Mac users); Cookies and JavaScript: Enabled for full Blackboard functionality.
//     </li>
//   </ul></br>

//   <p><strong>Additional Tools: </strong>(Optional but Recommended)</p>
//   <ul>
//     <li>Headset: For clear audio during virtual classes.</li>
//     <li>External storage (USB/Cloud): For backups of important coursework.</li>
//     <li>Antivirus software: To protect against malware or data loss.</li>
//   </ul></br>
// </div>
// `,
//     },
//   ],
//   programOverview: `Aspiring to a leadership role in the vibrant hospitality sector? Our Bachelor of Commerce in Hospitality Management provides a strong foundation in business principles alongside specialised hospitality skills. You'll cover core areas like accounting and marketing, combined with modules in hotel operations, food and beverage management, and tourism development.<br></br>This programme emphasises practical experience through internships and case studies, nurturing your problem-solving, customer service, and managerial abilities. We'll equip you with entrepreneurial thinking, sustainability awareness, and digital proficiency, preparing you for diverse leadership roles in hotels, restaurants, tourism, and event management globally.`,
// };

export const mcominhumanresourcemanagement = {
  heroContent: {
    question: "MCom in Human Resource Management",
    image: "/images/courses-images/MCom in Human resource.jpeg",
    downloadurl: `${baseUrl}MCom-HumanResourceManagement.pdf`,
    typicalfulltimestudyperiod: 2,
    // maxPeriod: 4,
    programmeCredit: "$19.50",
    totalProgrammeCredit: 260,
    noOfModules: "12 (11 core + 1 elective)",
    totalFee: "$5,070",
    cta: true,
    timer: true,
    overview: true,
    launchDate: "2025-08-02T00:00:00", // <<< unique per course
  },
  courseStruture: [
    {
      semester: "Semester 1",
      courses: [
        {
          question: "Human Resource Management",
          subanswer:
            "Code: B9-HRM-22<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module explores the history, principles, and best practices of Human Resource Management, including workforce planning, recruitment, and selection. It develops skills in employee development, performance management, and compensation, fosters strong workplace relations, and applies strategies to enhance motivation, productivity, engagement, and long-term organisational success.",
        },
        {
          question: "Training and Development",
          subanswer:
            "Code: B9-TRD-22<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module covers strategic HR development, adult learning, needs analysis, training design, and modern learning methods. Learners develop skills to enhance employee and management growth through effective workplace training and future-ready solutions, improving performance, fostering innovation, and driving business success with advanced human resource development practices.",
        },
        {
          question: "Human Resource Planning and Development",
          subanswer:
            "Code: B9-HRP-22<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "Drive business success with strategic Human Resource Development and Planning! Human Resource Planning and Development module resonates with strategy, job analysis, forecasting, and succession management. Human Resource Planning and Development navigate environmental influences, leverage technology, and optimize global HR practices. The human resource planning and development  effectively assist to build a future-ready workforce and achieve sustainable organizational growth and transform HR into a competitive advantage!",
        },
        {
          question: "Managing Equality and Diversity",
          subanswer:
            "Code: B9-MED-222<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module explores equality, diversity, and inclusion, guiding learners to recognise and address inappropriate behaviours and understand individual needs. It covers legal frameworks and strategies for creating respectful, fair, and diverse workplaces that foster innovation and organisational success.",
        },
      ],
    },
    {
      semester: "Semester 2",
      courses: [
        {
          question: "Strategic Human Resource Management",
          subanswer:
            "Code: B9-SRM-22<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module equips learners to align HR with business strategy, apply best practices, and develop data-driven workforce plans. It covers performance management, employee engagement, and change negotiation, integrating ethical HR practices to achieve sustainable success and competitive advantage in today’s dynamic workplace.",
        },
        {
          question: "Performance and Resource Management",
          subanswer:
            "Code: B9-PRM-22<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module develops understanding of workplace productivity, reward strategies, pay structures, and performance measurement. Learners design competitive compensation systems, implement effective performance management, and align rewards with contributions, gaining strategies to manage team performance and foster employee growth for organisational success.",
        },
        {
          question: "Employment Law and Employee Relations",
          subanswer:
            "Code: B9-ELR-22<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module introduces key legislation, labour laws, employee relations, trade unions, and collective bargaining. Learners gain insight into dispute resolution, occupational risks, and the role of the International Labour Organisation (ILO) in promoting fair and effective workplace policies.",
        },
      ],
    },

    {
      semester: "Semester 3",
      courses: [
        {
          question:
            "Contemporary Issues in Work, Employment and People Management",
          subanswer:
            "Code: B9-CEP-22<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "Explore evolving landscape of Work and Employment with our cutting-edge module on Contemporary HRM Issues. Understand how internal and external factors, market dynamics, globalization, and government policies shape HR and organizational strategies. Students gain insights into effective approaches for managing modern workforce challenges and driving competitive advantage in a rapidly changing world.",
        },

        {
          question: "Change Management",
          subanswer:
            "Code: B9-CHM-25<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module explores the foundations of change, guiding learners through individual, team, and organisational transitions. It addresses common myths, readiness assessment, and resistance management, equipping learners with strategies to implement effective change processes and achieve sustainable success in today’s evolving business landscape.",
        },
        // {
        //   question: "Cross Cultural Management",
        //   subanswer:
        //     "Code: B9-CCM-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 10",
        //   answer:
        //     "Cross-Cultural Management module assists students to explore cultural diversity, global business practices, and leadership across cultures. The module equips students effective communication, conflict resolution, and team collaboration in multicultural environments. The module seeks to develop strategies to navigate cultural differences and drive success in today’s interconnected and international business landscape.",
        // },
        {
          question: "Business Research Methods",
          subanswer:
            "Code: B9-BRM-17<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module develops skills in crafting research proposals, conducting literature reviews, and applying suitable methodologies. Learners study research paradigms, sampling, and data collection, analyse quantitative and qualitative data, ensure validity and reliability, present findings, publish conceptual papers, and uphold ethical research standards.",
        },
      ],
    },
    {
      semester: "Semester 3 Elective Group One (Choose One)",
      courses: [
        {
          question: "Counselling and Coaching at the Workplace",
          subanswer:
            "Code: B9-CCW-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module develops skills in workplace counselling and coaching to strengthen relationships and address challenges. Learners gain strategies to support employees, resolve issues, and improve behaviours, fostering an engaged, productive, and motivated workforce while avoiding common coaching pitfalls.",
        },
        // {
        //   question: "Managing Equality and Diversity",
        //   subanswer:
        //     "Code: B9-MED-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 10",
        //   answer:
        //     "Foster an inclusive workplace with our Managing Equality and Diversity module. Explore key concepts of equality, diversity, and inclusion, learn to identify and challenge inappropriate behaviors, and understand individual needs. The module assists students in formulating legal frameworks and implement effective strategies to create a respectful, fair, and diverse work environment that drives innovation and success.",
        // },

        {
          question: "Management of Safety and Health",
          subanswer:
            "Code: B9-MSH-22<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module covers health and safety regulations, risk assessment, and hazard prevention. Learners develop skills in accident prevention, workplace wellness, and compliance management to foster a safety culture, protect employees, and enhance organisational productivity and well-being.",
        },
        {
          question: "Managing Organisations",
          subanswer:
            "Code: B9-MNO-22<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module examines organisational structure, culture, and change management. Learners develop strategies to enhance performance, improve decision-making, and drive innovation, while gaining insight into leadership styles, team dynamics, and effective communication for optimising organisational success.",
        },
        // {
        //   question: "Climate Changes and Sustainability",
        //   subanswer:
        //     "Code: B9-CCS-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 10",
        //   answer:
        //     "Climate Change and Sustainability module expose students to by climate economics, policies, and governance for sustainable development. Students are further exposed to responsible leadership, environmental management, and climate risk planning. Students expected to discover strategies for climate justice, resilience, and effective communication in dynamic and sustainable environments.",
        // },
      ],
    },
    {
      semester: "Semester 4",
      courses: [
        {
          question: "Dissertation",
          subanswer:
            "Code: B9-DIS-17<br/>Prerequisite: B9-BRM-17<br/>Module Fees: $1170.00<br/>Module Credits: 60",
          answer:
            "This module develops skills to produce impactful research, including crafting an overview, writing a compelling introduction, conducting an in-depth literature review, designing a robust methodology, analysing findings, and presenting clear conclusions and recommendations.",
        },
      ],
    },
  ],
  requirements: [
    {
      question: "Admission Requirements",
      answer:
        "Bachelors or Honours Bachelors Degree from a recognised institution in Business, HRM or related areas",
    },

    {
      question: "Technical Requirements",
      answer: `<div class="technical-requirements">
  <p>
    To ensure a smooth and effective learning experience, students enrolling in this programme must meet the following technical requirements:
  </p></br>

  <p><strong>Device Requirements:</strong></p>
  <ul>
    <li>
      <p>Computer/Laptop:</p> Windows (10 or later) or Mac (macOS 10.15 or later); Processor: Intel i3 (or equivalent) and above; RAM: Minimum 4 GB (8 GB recommended for multitasking); Storage: Minimum 20 GB free space for coursework and downloads; Camera and Microphone: Built-in or external for live sessions and presentations.
    </li></br>
    <li><p>OR</p></li></br>
    <li>
      <p>Tablet/Smartphone:</p> Suitable for accessing content on the go (limited functionality for assignments/exams).
    </li>
  </ul></br>

  <p><strong>Internet Requirements:</strong></p>
  <ul>
    <li>
      Connection speed: Minimum 5 Mbps download and 2 Mbps upload (10 Mbps recommended for seamless video conferencing).
    </li>
    <li>
      Stable Wi-Fi or Ethernet connection recommended for live Zoom sessions.
    </li>
  </ul></br>

  <p><strong>Software and Platforms:</strong></p>
  <ul>
    <li>
      <p>Virtual Live Sessions: Zoom (Synchronous learning); Document Processing: Microsoft Office (Word, Excel, PowerPoint) or equivalent (Google Docs).</p>
    </li>
  </ul></br>

  <p><strong>Browser Requirements:</strong></p>
  <ul>
    <li>
      Supported browsers: Chrome (latest version), Safari (for Mac users); Cookies and JavaScript: Enabled for full Blackboard functionality.
    </li>
  </ul></br>

  <p><strong>Additional Tools:</strong> (Optional but Recommended)</p>
  <ul>
    <li>Headset: For clear audio during virtual classes.</li>
    <li>External storage (USB/Cloud): For backups of important coursework.</li>
    <li>Antivirus software: To protect against malware or data loss.</li>
  </ul>
</div>
`,
    },
  ],
  programOverview: `Looking to become a leader in talent management? The Master of Commerce in Human Resource Management (MCom HRM) is a transformative qualification designed for today’s business landscape. It provides a strong foundation in strategic HR planning, recruitment, performance assessment, and related areas.
<br></br>The programme equips learners to drive sustainable talent development, reduce dependence on external skills, and support economic growth, particularly in emerging economies. Ideal for professionals seeking career advancement and meaningful impact, the MCom HRM develops leadership, innovation, and strategic decision-making, opening exceptional opportunities for professional success and national contribution.`,
};

export const masterofbusinessadministration = {
  heroContent: {
    question: "Master of Business Administration (MBA)",
    image: "/images/courses-images/MBA.png",
    downloadurl: `${baseUrl}MBA.pdf`,
    typicalfulltimestudyperiod: 2,
    // maxPeriod: 4,
    programmeCredit: "$19.50",
    totalProgrammeCredit: 250,
    noOfModules: "14 (12 core + 2 elective)",
    totalFee: "$4,875",
    cta: true,
    timer: true,
    overview: true,
  },
  courseStruture: [
    {
      semester: "Semester 1",
      courses: [
        {
          question: "Collaborative Business Strategies",
          subanswer:
            "Code: B9-CBS-17<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module focuses on business collaboration strategies, including franchising, outsourcing, licensing, and joint ventures. Learners examine benefits and challenges, exploring how organisations can use these approaches to expand, share risks, and achieve sustainable growth and long-term success in global markets.",
        },
        {
          question: "Management Information Systems",
          subanswer:
            "Code: B9-MIS-17<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module examines the role of information systems in organisations, covering leadership strategies, database management, and networks. It includes ERP, CRM, e-business, mobile technologies, knowledge management, security, auditing, ethics, privacy, and practical skills in operating systems and software applications.",
        },
        {
          question: "Management Accounting",
          subanswer:
            "Code: A9-MAC-17<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module explores how management accounting supports operational efficiency and decision-making. It covers control systems, cost management, and cost behaviour analysis, using traditional and activity-based costing. Learners examine organisational design, responsibility centres, performance assessment, and budgeting to align objectives, motivate performance, and guide investment decisions.",
        },
        {
          question: "Project Management",
          subanswer:
            "Code: B9-PMT-17<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module covers industry-standard project management strategies, including developing comprehensive plans, managing scope, cost, and schedule, and using Earned Value to track progress. Learners build skills in enhancing team performance, communication, and sustainability while ensuring clear objectives and accountability for successful project outcomes.",
        },
      ],
    },
    {
      semester: "Semester 2",
      courses: [
        {
          question: "Managerial Economics",
          subanswer:
            "Code: B9-MEC-17<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module develops skills for strategic business decision-making, including cost analysis, pricing optimisation, market forecasting, and value maximisation. Learners apply game theory, manage risks, align incentives, and gain expertise in investment decisions, bargaining, and supply chain management to navigate complex economic environments effectively.",
        },
        {
          question: "Marketing Management",
          subanswer:
            "Code: B9-MGT-17<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module develops understanding of marketing processes, environmental analysis, and Marketing Information Systems. Learners study buyer behaviour, product development, pricing, and distribution, applying market-driven communication strategies to promote effectively, build lasting customer relationships, and address contemporary marketing challenges for sustained growth and success.",
        },
        {
          question: "Financial Management",
          subanswer:
            "Code: A9-FMT-17<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module explains the distinction between financial management and accounting, covering key financial ratios and investment performance. Learners study Time Value of Money (TVM), capital structure, risk–return strategies, capital budgeting, stock types, bonds, and forecasting techniques to support informed, profitable decision-making.",
        },
        {
          question: "Decision Analysis",
          subanswer:
            "Code: B9-DAS-17<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module develops skills to identify problems, assess business situations, and generate creative alternatives using effective methodologies. Learners model opportunities, prioritise key factors, assess resource needs, and evaluate options strategically to select the best course of action for driving business success.",
        },
      ],
    },

    {
      semester: "Semester 3",
      courses: [
        {
          question: "Strategic Management",
          subanswer:
            "Code: B9-STM-17<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module builds expertise in strategic management through understanding mission, vision, and values. Learners analyse industries, assess competition, and evaluate company strengths. They develop, implement, and assess strategies, using tools to create competitive advantage and achieve long-term organisational goals.",
        },
        {
          question: "Business Research Methods",
          subanswer:
            "Code: B9-BRM-17<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module develops skills in crafting research proposals, conducting literature reviews, and applying suitable methodologies. Learners study research paradigms, sampling, and data collection, analyse quantitative and qualitative data, ensure validity and reliability, present findings, publish conceptual papers, and uphold ethical research standards.",
        },
        {
          question: "Climate Change and Sustainability",
          subanswer:
            "Code: B9-CSS-24<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module explores climate economics, policies, and governance for sustainable development. Learners study responsible leadership, environmental management, and climate risk planning, developing strategies for climate justice, resilience, and effective communication in promoting sustainable and adaptable environments.",
        },
      ],
      electives: [
        {
          question: "International Investment Analysis",
          subanswer:
            "Code: A9-IIA-17<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module examines financial reporting standards, including income statements, cash flow statements, and statements of financial position. Learners explore investment analysis techniques, valuation of inventories, assets, and liabilities, financial statement quality, income taxes, intercorporate investments, and integrating financial analysis for multinational operations to support strategic decision-making.",
        },
        {
          question: "Risk Management in Financial Institutions",
          subanswer:
            "Code: A9-RMF-17<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module explores treasury policies, debt capacity, and bank finance. Learners study bond valuation, credit ratings, asset securitisation, and derivatives for risk mitigation, alongside cash and liquidity management, treasury systems, tax, and accounting to enhance financial stability and support strategic decision-making.",
        },
        {
          question: "Financial Markets and Treasury Management",
          subanswer:
            "Code: A9-FTM-17<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module covers risk navigation, liquidity optimisation, and financial decision-making. Learners study risk management, treasury policies, debt financing, bond valuation, and asset securitisation, exploring derivatives for risk mitigation, cash flow strategies, and treasury operations, including tax and accounting.",
        },
        {
          question: "Strategic Marketing",
          subanswer:
            "Code: B9-SMT-17<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module develops skills in creating effective strategies to guide impactful marketing tactics. Learners use data-driven decision-making and market insights to manage business growth, applying strategic marketing tools to enhance brand positioning, customer engagement, and long-term business success.",
        },
        {
          question: "New Product Development and Management",
          subanswer:
            "Code: B9-NPD-17<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module covers opportunity identification, strategic planning, and the product development process. Learners explore creativity, concept development, and customer problem-solving, gaining insight into strategic elements, idea generation, and execution to launch innovative products and drive business growth.",
        },
        {
          question: "Operations Strategy",
          subanswer:
            "Code: B9-OPS-17<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module focuses on resource development, process optimisation, and strategic impact. Learners study performance management, capacity, purchasing, and supply strategies, alongside continuous improvement and innovation, to formulate, implement, monitor, and control operations strategies for sustainable business success and operational excellence.",
        },
        {
          question: "Technopreneurship",
          subanswer:
            "Code: B9-TPN-17<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module introduces innovative and entrepreneurial fundamentals to support job creation, creativity, and economic growth. Learners build skills to develop successful technology ventures, create effective business plans, and apply strategies for launching technology-based initiatives.",
        },
        {
          question: "Business Statistics",
          subanswer:
            "Code: B9-BST-17<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module develops skills for data-driven decision-making, covering descriptive statistics, probability distributions, sampling, hypothesis testing, ANOVA, t-tests, and Chi-Square analysis. Learners also study correlation, regression, decision analysis, and non-parametric statistics to generate insights and support business success.",
        },
      ],
    },
    {
      semester: "Semester 4",
      courses: [
        {
          question: "Dissertation",
          subanswer:
            "Code: B9-DIS-17<br/>Prerequisite: B9-BRM-17<br/>Module Fees: $1170<br/>Module Credits: 60",
          answer:
            "This module develops skills to produce impactful research, including crafting an overview, writing a compelling introduction, conducting an in-depth literature review, designing a robust methodology, analysing findings, and presenting clear conclusions and recommendations.",
        },
      ],
    },
  ],
  requirements: [
    {
      question: "Admission Requirements",
      answer:
        "Bachelors or Honours Bachelors Degree from a recognised institution",
    },

    {
      question: "Technical Requirements",
      answer: `<div class="technical-requirements">
  <p>
    To ensure a smooth and effective learning experience, students enrolling in this programme must meet the following technical requirements:
  </p></br>

  <p><strong>Device Requirements:</strong></p>
  <ul>
    <li>
      <p>Computer/Laptop:</p> Windows (10 or later) or Mac (macOS 10.15 or later); Processor: Intel i3 (or equivalent) and above; RAM: Minimum 4 GB (8 GB recommended for multitasking); Storage: Minimum 20 GB free space for coursework and downloads; Camera and Microphone: Built-in or external for live sessions and presentations.
    </li></br>
    <li><p>OR</p></li></br>
    <li>
      <p>Tablet/Smartphone:</p> Suitable for accessing content on the go (limited functionality for assignments/exams).
    </li>
  </ul></br>

  <p><strong>Internet Requirements: </strong></p>
  <ul>
    <li>
      Connection speed: Minimum 5 Mbps download and 2 Mbps upload (10 Mbps recommended for seamless video conferencing).
    </li>
    <li>
      Stable Wi-Fi or Ethernet connection recommended for live Zoom sessions.
    </li>
  </ul></br>

  <p><strong>Software and Platforms: </strong></p>
  <ul>
    <li>
      <p>Virtual Live Sessions: Zoom (Synchronous learning); Document Processing: Microsoft Office (Word, Excel, PowerPoint) or equivalent (Google Docs).</p>
    </li>
  </ul></br>

  <p><strong>Browser Requirements: </strong></p>
  <ul>
    <li>
      Supported browsers: Chrome (latest version), Safari (for Mac users); Cookies and JavaScript: Enabled for full Blackboard functionality.
    </li>
  </ul></br>

  <p><strong>Additional Tools: </strong>(Optional but Recommended)</p>
  <ul>
    <li>Headset: For clear audio during virtual classes.</li>
    <li>External storage (USB/Cloud): For backups of important coursework.</li>
    <li>Antivirus software: To protect against malware or data loss.</li>
  </ul>
</div>
`,
    },
  ],
  programOverview: `Aiming to become a top executive in the global business arena? Our MBA programme is designed for ambitious professionals. It equips you with the skills to tackle complex challenges, focusing on critical thinking, entrepreneurship, financial resilience, and innovative problem-solving.<br></br>The programme offers flexibility to balance work, life, and study while developing expertise in international business, leadership, accounting, risk management, technology, and marketing. With a strong foundation in business and executive acumen, the MBA prepares graduates to thrive in competitive environments and achieve long-term professional success.`,
};

export const diplomainoccupationalhealthsafety = {
  heroContent: {
    question: "Diploma in Occupational Health Safety",
    image: "/images/courses-images/Diploma in Occup.jpeg",
    downloadurl: `${baseUrl}DiplomaInOccupationalHealthAndSafety.pdf`,
    typicalfulltimestudyperiod: 2,
    // maxPeriod:1,
    programmeCredit: "$13",
    totalProgrammeCredit: 248,
    noOfModules: "17 (16 core + 1 elective)",
    totalFee: "$3,224",
    cta: true,
    timer: true,
    overview: true,
  },
  courseStruture: [
    {
      semester: "SEMESTER 1",
      courses: [
        {
          question: "Communication and Study Skills",
          subanswer:
            "Code: D5-CSS-21<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to enhance students' academic and professional communication abilities, including writing, presentation, and critical thinking. It also focuses on effective study techniques, time management, and research skills to improve learning efficiency and success in academic and workplace settings.",
        },
        {
          question: "Information Communication Technology",
          subanswer:
            "Code: C5-ICT-21<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to provide students with a solid understanding of the fundamentals of computers, including essential hardware and software concepts. The module also covers practical skills in using word processing software and presentation tools, preparing students for effective digital communication.",
        },
        {
          question: "Introduction to Occupational Health and Safety Management",
          subanswer:
            "Code: D6-OHS-21<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "The purpose of this module is to provide students with the knowledge and skills to identify, assess, and mitigate workplace hazards. It aims to promote a culture of safety, ensure regulatory compliance, and protect the well-being of employees in various occupational settings.",
        },
        {
          question: "Introduction to Occupational Hygiene and Toxicology",
          subanswer:
            "Code: D6-OHT-21<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "The purpose of this module is to study the effects of harmful substances on living organisms and the environment. It aims to provide students with the knowledge and tools to assess risks, prevent exposure, and develop strategies for managing and mitigating the impact of toxins in occupation.",
        },
        {
          question: "Occupational Health and Safety Law I",
          subanswer:
            "Code: D6-OHL-21<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "The purpose of this module is to familiarise students with the legal frameworks and regulations governing workplace safety and health standards. It aims to promote compliance, protect employee rights, and ensure safe working environments through an understanding of legal responsibilities and obligations.",
        },
      ],
    },
    {
      semester: "SEMESTER 2",
      courses: [
        {
          question: "Safety Management and the Built Environment",
          subanswer:
            "Code: D6-SMB-21<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "The purpose of this module is to explore the principles and practices of ensuring safety in the design, construction, and maintenance of built structures. It aims to promote risk assessment, hazard control, and compliance with safety standards to create secure and sustainable environments for occupants and users.",
        },
        {
          question: "Environmental Management",
          subanswer:
            "Code: D6-ENM-21<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "The purpose of this module is to introduce principles of environmental sustainability, resource management, and policies to mitigate environmental degradation.",
        },
        {
          question: "Risk Management",
          subanswer:
            "Code: D6-RMN-21<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "The purpose of this module is to equip students with the skills and strategies to identify, assess, and mitigate risks in various organisational contexts. It aims to promote proactive decision-making and resilience by minimising potential threats and maximising opportunities for success.",
        },
        {
          question: "Occupational Health and Safety Law II",
          subanswer:
            "Code: D6-OS2-21<br/>Prerequisite: D6-OHL-21<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "The purpose of this module is to deepen students' understanding of advanced legal principles and case studies related to workplace safety and health regulations. It aims to enhance skills in interpreting and applying complex legal requirements to ensure organisational compliance and foster a culture of safety.",
        },
        {
          question: "Quality Management",
          subanswer:
            "Code: D6-QUM-21<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "The purpose of this module is to equip students with the knowledge and tools necessary to design, implement, and maintain effective quality assurance systems within organisations. It aims to promote continuous improvement, customer satisfaction, and operational excellence through the application of quality standards and methodologies.",
        },
      ],
    },
    {
      semester: "Semester 3",
      courses: [
        {
          question: "Labour Law",
          subanswer:
            "Code: D7-LBL-21<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "The purpose of this module is to provide an understanding of legal frameworks governing employment relationships, including workers' rights, employer obligations, and dispute resolution. It covers labour standards, workplace safety regulations, and collective bargaining to ensure fair and lawful practices in the workplace.",
        },
        {
          question: "Biostatistics",
          subanswer:
            "Code: D7-BST-21<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "The purpose of this module is to provide students with the foundational knowledge and skills in statistical methods used in the field. It covers data analysis, probability, statistical inference, and the application of statistical tools to interpret biological and medical research effectively.",
        },
        {
          question: "Ergonomics",
          subanswer:
            "Code: D7-ERG-21<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "The purpose of this module Ergonomics is to study the interaction between humans and their working environments to optimise safety, comfort, and productivity. It aims to apply principles of design and engineering to reduce physical strain, prevent injuries, and enhance overall efficiency in various tasks and workplaces.",
        },
        {
          question: "Emergency Preparedness and Disaster Management",
          subanswer:
            "Code: D7-EPM-21<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "The purpose of this module is to equip students with skills to plan, respond to, and manage emergencies and disasters. It focuses on risk assessment, crisis communication, resource coordination, and recovery strategies to minimise impacts and ensure safety in various settings.",
        },
        {
          question: "Occupational Diseases",
          subanswer:
            "Code: D7-OPD-21<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "The purpose of this module is to study diseases caused by workplace exposures, their prevention, and management. It covers identification of occupational hazards, diagnostic methods, legal frameworks, and strategies to mitigate risks, ensuring healthier and safer work environments.",
        },
      ],
    },
    {
      semester: "SEMESTER 3 ELECTIVE GROUP (CHOOSE ONE)",
      courses: [
        {
          question: "Employee Relations (Elective)",
          subanswer:
            "Code: D7-ERT-21<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "The purpose of this module is to explore strategies for managing workplace relationships, resolving conflicts, and fostering a positive work environment. It emphasises effective communication, employee engagement, and compliance with labour laws to enhance organisational productivity and employee satisfaction.",
        },
        {
          question: "Health and Safety in Transport (Elective)",
          subanswer:
            "Code: D7-HST-21<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "The purpose of this module is to explore safety protocols, risk management, and regulatory compliance in transportation systems. It focuses on identifying hazards, implementing preventive measures, and ensuring the health and safety of passengers, workers, and the public in various transport environments, including road, rail, air, and maritime sectors.",
        },
        {
          question: "Building Maintenance (Elective)",
          subanswer:
            "Code: D7-BDM-21<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "The purpose of this module is to provide knowledge and skills for maintaining safe, functional, and efficient building operations. It covers preventive maintenance strategies, repair techniques, and safety protocols to ensure compliance with health, safety, and environmental standards, while extending the lifespan of building infrastructure.",
        },
      ],
    },
    {
      semester: "Semester 4",
      courses: [
        {
          question: "Industrial Attachment",
          subanswer:
            "Code: D6-INA-21<br/>Prerequisite: 120 credits<br/>Module Fees: $780<br/>Module Credits: 60",
          answer:
            "The purpose of this module is to provide students with practical, hands-on experience in a real-world work environment. It aims to bridge the gap between academic learning and professional practice, enhancing skills, knowledge, and employability in their chosen field.",
        },
      ],
    },
  ],
  requirements: [
    {
      question: "Admission Requirements",
      answer: "IGCSE/equivalent.",
    },
    {
      question: "Technical Requirements",
      answer: `<div class="technical-requirements">
<p>To ensure a smooth and effective learning experience, students enrolling in this programme must meet the following technical requirements:</p></br>
<p><strong>Device Requirements:</strong></p>
<ul>
  <li><p>Computer/Laptop:</p> Windows (10 or later) or Mac (macOS 10.15 or later); Processor: Intel i3 (or equivalent) and above; RAM: Minimum 4 GB (8 GB recommended for multitasking); Storage: Minimum 20 GB free space; Camera & Microphone: Required.</li></br>
  <li><p>Tablet/Smartphone:</p> For content access (limited assignment functionality).</li>
</ul></br>
<p><strong>Internet Requirements: </strong></p>
<ul>
  <li>Minimum 5 Mbps download / 2 Mbps upload (10 Mbps recommended).</li>
  <li>Stable connection recommended for Zoom live sessions.</li>
</ul></br>
<p><strong>Software and Platforms: </strong></p>
<ul>
  <li>Zoom for live classes.</br>MS Office or Google Docs for assignments.</li>
</ul></br>
<p><strong>Browser Requirements: </strong></p>
<ul>
  <li>Chrome (latest) or Safari: JavaScript and cookies enabled.</li>
</ul>
<p>Optional Tools:</p>
<ul>
  <li>Headset, External storage, Antivirus software.</li>
</ul>
<p><strong>Additional Tools (Optional but Recommended)
</strong></p>
<p>Headset: For clear audio during virtual classes; External storage (USB/Cloud): For backups of important coursework; Antivirus software: To protect against malware or data loss</p>




</div>`,
    },
  ],
  programOverview: `Fascinated by creating safer workplaces? The Diploma in Occupational Health and Safety is designed for those passionate about protecting people and organisations. The programme combines occupational health, safety management, risk assessment, and environmental sustainability, equipping learners with practical skills to identify, evaluate, and control workplace hazards while ensuring regulatory compliance.<br></br/>

Graduates are prepared for impactful careers across manufacturing, construction, healthcare, and beyond. With its balance of theory and hands-on learning, the diploma develops professionals ready to prevent injuries, illnesses, and accidents, while fostering a strong culture of safety and employee well-being.`,
};

export const bscinhealthinformationmanagement = {
  heroContent: {
    question: "BSc in Health Information Management",
    image: "/images/courses-images/BSc in health info.jpeg",
    downloadurl: `${baseUrl}BScInHIM.pdf`,
    typicalfulltimestudyperiod: 4,
    // maxPeriod: 6,
    programmeCredit: "$13",
    totalProgrammeCredit: 480,
    noOfModules: "35 (32 Core + 3 Elective)",
    totalFee: "$6,240",
    cta: true,
    timer: true,
    overview: true,
  },
  courseStruture: [
    {
      semester: "Semester 1",
      courses: [
        {
          question: "Computer and its Essentials 1",
          subanswer:
            "Code: C5-CE1-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module provides a foundational understanding of computers and their essentials, covering basic functions, hardware and software components, and how they operate. It explores the history and evolution of computers and data processing. Students will learn about Microsoft Office, with an emphasis on Microsoft Word and PowerPoint. Through hands-on activities and assessments, learners will develop a comprehensive understanding of computer essentials.",
        },
        {
          question: "Academic Writing for STEM",
          subanswer:
            "Code: D6-AWS-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to equip students with essential skills in academic writing, focusing on clear and structured communication in the STEM fields. The module covers citation and referencing techniques, as well as research writing skills, enabling students to effectively present and support their academic work.",
        },
        {
          question: "Introduction to Anatomy and Physiology",
          subanswer:
            "Code: D6-IAP-21<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "The purpose of this module is to equip students with a foundational understanding of human anatomy and physiology. It focuses on system-wide concepts, enabling students to connect these concepts with terminology used in disease coding and transcription, thus providing essential knowledge for healthcare-related fields.",
        },
        {
          question: "Business Management 1",
          subanswer:
            "Code: B5-BM1-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces business management as a discipline, addressing core concepts, economic systems, and stakeholder roles. It examines the business environment, management functions, and key areas including operations, finance, human resources, and marketing. Leadership principles and theories are explored to build a foundation for sound business strategy and decision-making.",
        },
        {
          question: "Law and HIM Practice",
          subanswer:
            "Code: D6-LHP-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to provide students with a comprehensive understanding of health law, the legal system, and its application in healthcare settings. Topics include the role of health professionals in managing legal risks, ethical issues in the workplace, and resolving medico-legal problems effectively.",
        },
      ],
    },
    {
      semester: "Semester 2",
      courses: [
        {
          question: "Computer and its Essentials 2",
          subanswer:
            "Code: C6-CE2-20<br/>Prerequisite: C5-CE1-20<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module builds on foundational computing skills, equipping students with advanced capabilities in Microsoft Excel and Google collaboration tools. It covers key spreadsheet functionalities, including data organisation, advanced formulas, chart creation, and data analysis using pivot tables. Additionally, students will explore Google Docs, Spreadsheets, Forms, and Drive to enhance online collaboration and information sharing.",
        },
        {
          question: "Business Management 2",
          subanswer:
            "Code: B6-BM2-20<br/>Prerequisite: B5-BM1-20<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module provides a foundation in management principles, addressing managerial roles, strategic planning, decision-making, and organisational structures. It explores human resource management, change management, diversity, and logistics. Emphasis is placed on adapting to environmental shifts, utilising information systems, and developing skills for sustainable competitive advantage in contemporary business contexts.",
        },
        {
          question: "Introduction to Pathology and Pharmacology",
          subanswer:
            "Code: D6-IPP-21<br/>Prerequisite: D6-IAP-21<br/>Co-requisite: None<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "The purpose of this module is to provide foundational knowledge on the pharmacology of drugs and the pathology of diseases. It explores the role of drugs in modern medicine, linking this understanding to the essential knowledge needed for accurate coding of drugs and diseases in healthcare.",
        },
        {
          question: "Principles of Marketing",
          subanswer:
            "Code: B5-PMK-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces the fundamentals of marketing, covering the 7 P’s, consumer behaviour, and decision-making processes. It examines market research, segmentation, and targeting strategies, alongside product development, pricing, and promotion. Students gain essential skills to apply marketing principles effectively in dynamic and competitive business environments.",
        },
        {
          question: "Health Ethics",
          subanswer:
            "Code: D6-HET-21<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to provide students with an understanding of medical ethics and the legal aspects surrounding healthcare practices. It focuses on promoting good ethical practices, particularly in the handling of patient-related data, ensuring confidentiality, respect, and compliance with legal standards in healthcare settings.",
        },
      ],
    },
    ///
    {
      semester: "Semester 3",
      courses: [
        {
          question: "Introduction to Medical Terminology",
          subanswer:
            "Code: D6-IMT-21<br/>Prerequisite: D6-IPP-21<br/>Co-requisite: None<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "The purpose of this module is to provide students with a foundational understanding of medical terms used in healthcare. It covers terminology related to various disease conditions, as well as the musculoskeletal, respiratory, and digestive systems, enabling effective communication in medical and clinical settings.",
        },
        {
          question: "Basic Life Support and Emergency Care",
          subanswer:
            "Code: D5-BLS-21<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to equip learners with essential skills to respond effectively in emergency situations. It covers fundamental life-saving techniques, including first aid, and emergency response procedures, ensuring readiness to provide immediate care in critical situations.",
        },
        {
          question: "Introduction to E-Health",
          subanswer:
            "Code: D5-IEH-21<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to provide an understanding of key e-health concepts, the integration of healthcare processes with information systems, and e-health implementation. It explores challenges in low-resource settings and examines current research trends, equipping students with essential knowledge for digital transformation in healthcare.",
        },
        {
          question: "Operations Management",
          subanswer:
            "Code: B6-OPM-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to equip students with essential principles and techniques for efficient production and distribution of goods and services while minimising waste. It covers key areas such as product and service creation, purchasing, inventory management, quality control, logistics, and process evaluation to enhance operational efficiency.",
        },
        {
          question: "Medical Databases",
          subanswer:
            "Code: D5-MDB-25<br/>Prerequisite: C6-CE2-20<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to introduce students to medical databases, including SQL and OpenMRS. Students will learn how to design, manage, and analyse healthcare data, ensuring efficient storage and retrieval of patient records. The module emphasises data security, integrity, and compliance with healthcare standards.",
        },
      ],
    },
    ///////

    {
      semester: "Semester 4",
      courses: [
        {
          question: "Introduction to Global Health",
          subanswer:
            "Code: D5-IGH-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to explore global health strategies, financing, and implementation in today's world. It examines the socioeconomic and environmental determinants of health, highlighting their impact on communities. Students will gain insights into global health challenges and solutions for improving health outcomes worldwide.",
        },
        {
          question: "Epidemiology",
          subanswer:
            "Code: D6-EPI-13<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "The purpose of this module is to equip students with essential skills to study disease patterns and risks. It covers measures of disease occurrence, study design, clinical test accuracy, epidemiological analysis methods, and research ethics, enabling students to critically evaluate public health data and contribute to disease prevention and control.",
        },
        {
          question: "Medical Transcription",
          subanswer:
            "Code: D6-ITR-25<br/>Prerequisite: D6-IMT-21<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to equip students with the skills to accurately transcribe dictated patient records and edit transcribed files. Emphasis is placed on practical transcribing, ensuring proficiency in medical documentation, terminology, and formatting to maintain accuracy and professionalism in healthcare communication.",
        },
        {
          question: "Computing in Health Administration",
          subanswer:
            "Code: D6-CHA-25<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to equip students with the skills to use technology in managing health-related data. It covers Medical Decision Support Systems, Clinical Decision Support Systems, Natural Language Processing, and Weka for predictive risk analysis using machine learning, concept learning, training, and classification.",
        },
      ],
    },
    {
      semester: "Semester 4 Elective Group One (Select One)",
      courses: [
        {
          question: "Introduction to Financial Accounting",
          subanswer:
            "Code: A5-IFA-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module provides a foundational understanding of financial accounting principles and techniques. Students will be introduced to accounting, financial record preparation, and adjustments aligned with international accounting standards. Emphasising error analysis and financial reporting, the module equips students with essential skills to manage financial records and support informed business decision-making.",
        },
        {
          question: "Fundamentals of Financial Management",
          subanswer:
            "Code: B5-FFM-25<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to equip students with the skills to prepare, analyse, and interpret financial information essential for decision-making, planning, and resource management in healthcare organisations. It focuses on understanding financial data to effectively manage and control resources.",
        },
      ],
    },

    {
      semester: "Semester 5",
      courses: [
        {
          question: "Biostatistics",
          subanswer:
            "Code: D7-BIO-23<br/>Prerequisite: D6-EPI-13<br/>Co-requisite: None<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "The purpose of the module is to provide students with the foundational knowledge and skills in statistical methods used in the field. It covers data analysis, probability, statistical inference, and the application of statistical tools to interpret biological and medical research effectively.",
        },
        {
          question: "Procurement and Tender Management",
          subanswer:
            "Code: B6-PTM-21<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of the module is to develop a deeper understanding and expertise in procurement and tender management. It focuses on the factors influencing the procurement and tender processes and critically assesses their role in improving the performance of small businesses.",
        },
        {
          question: "Data Management and Information Governance",
          subanswer:
            "Code: D7-DMI-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "The purpose of the module to equip students with knowledge of data governance principles, focusing on confidentiality, data protection, subject access requests, and freedom of information. This module aims to ensure students understand the legal and ethical responsibilities related to managing and safeguarding data effectively.",
        },
        {
          question: "Principles of Community Health",
          subanswer:
            "Code: D6-PCM-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of the module is to provide students with an understanding of the key concepts and strategies in promoting and improving community health. It covers topics such as health promotion, disease prevention, and the role of social determinants in influencing public health outcomes.",
        },
      ],
    },
    {
      semester: "Semester 6",
      courses: [
        {
          question: "Health Information Systems",
          subanswer:
            "Code: D7-HIS-21<br/>Prerequisite: D7-DMI-23<br/>Co-requisite: None<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "The purpose of the module is to equip students with knowledge and skills in collection, storage, retrieval, communication, and use of health-related data. It covers computer literacy, information systems literacy, and defines key terms related to information systems, while also identifying the essential components of health information systems.",
        },
        {
          question: "Fundamentals of Health Insurance",
          subanswer:
            "Code: D6-FHI-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of the module is to provide an in-depth understanding of key aspects of health insurance, including its history, major insurance industries, and the coding systems used within the sector. It aims to equip students with foundational knowledge to navigate and analyze the health insurance industry effectively.",
        },
        {
          question: "Disease Coding",
          subanswer:
            "Code: D7-DCO-13<br/>Prerequisite: D6-IPP-21,D6-IMT-21<br/>Co-requisite: None<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "The purpose of the module is to provide students with a comprehensive understanding of ICD-10 diagnostic and procedural coding conventions and guidelines. It covers coding for inpatient, outpatient, and ambulatory care settings, equipping students with the skills needed to accurately assign codes for various medical conditions and procedures.",
        },
        {
          question: "Research Methods",
          subanswer:
            "Code: D7-RME-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of the module is to equip students with a comprehensive understanding of quantitative, qualitative, and systematic review methodologies. Students will learn to critically read and analyze health sciences literature, gaining the skills to evaluate research studies and apply appropriate methodologies.",
        },
      ],
    },

    {
      semester: "Semester 7",
      courses: [
        {
          question: "Health Information Risk Management",
          subanswer:
            "Code: D7-HIR-21<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of the module is to explore key risk management concepts within the healthcare sector. It covers medical malpractice, strategies for reducing liability, and effective approaches to managing potential risks. Additionally, the module examines litigation alternatives to enhance organizational resilience and mitigate legal challenges in healthcare settings.",
        },
        {
          question: "Entrepreneurship and Innovation",
          subanswer:
            "Code: B8-ENI-20<br/>Prerequisite: B6-OPM-20<br/>Co-requisite: None<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "The purpose of the Entrepreneurship and Innovation module is to equip students with the knowledge and skills necessary to understand entrepreneurial processes and behaviors. It explores the fundamentals of entrepreneurship, including the creation and development of business ideas, and the essential steps in crafting a comprehensive business plan for successful ventures.",
        },
        {
          question: "Research Project Proposal",
          subanswer:
            "Code: D7-RPP-23<br/>Prerequisite: D7-RME-23<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of the module is to equip students with the essential skills to write comprehensive research proposals. This includes formulating research questions, reviewing literature, developing a methodology, and presenting a clear plan for investigation. The module focuses on structured writing and critical thinking in research proposal development.",
        },
      ],
    },
    ///
    {
      semester: "Semester 7 Elective Group (Choose Two)",
      courses: [
        {
          question: "Health Economics",
          subanswer:
            "Code: D7-HEC-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to equip students with the fundamental principles and tools used in health economics. It provides a comprehensive understanding of how economic principles can be applied to healthcare systems, including cost-effectiveness analysis, resource allocation, and the economic evaluation of health interventions.",
        },
        {
          question: "Project Management",
          subanswer:
            "Code: B7-PRM-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to equip students with the skills and knowledge necessary for effective project planning and control. It covers various tools and techniques for managing projects efficiently, including the use of Microsoft Project scheduling software.",
        },
        {
          question: "Human Resource Management",
          subanswer:
            "Code: B7-HRM-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces Human Resource Management (HRM) in organisations, focusing on managing human capital strategically. Students will learn HR practices like recruitment, development, employee relations, and health and safety. They will also explore union roles, human capital development, and HR policies to drive organisational success and maintain a safe, productive workplace.",
        },
      ],
    },
    {
      semester: "Semester 8",
      courses: [
        {
          question: "Professional Practice in HIM",
          subanswer:
            "Code: D7-PPR-21<br/>Prerequisite: 240 credits<br/>Co-requisite: None<br/>Module Fees: $520<br/>Module Credits: 40",
          answer:
            "The purpose of this module is to provide students with the necessary skills and knowledge to excel in the field of Health Information Management (HIM). It focuses on the ethical, legal, and practical aspects of HIM practice, emphasising professional conduct, data management, and healthcare regulations.",
        },
        {
          question: "Research Project 2 (Dissertation)",
          subanswer:
            "Code: D8-RPD-25<br/>Prerequisite: D7-BIO-23, D7-RPP-25<br/>Co-requisite: None<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "The purpose of this module is to guide students through the process of conducting independent research, building on the knowledge gained from the research proposal. Students will refine their research questions, collect data, analyse results, and present findings, developing critical thinking and research skills essential for academic and professional success.",
        },
      ],
    },
  ],
  requirements: [
    {
      question: "Admission Requirements",
      answer:
        "IGCSE/equivalent with 5 Passes including English and Mathematics. Applicants in possession of a Diploma or Higher Diploma in related fields may be given exemptions based on the credit point equivalency.",
    },

    {
      question: "Technical Requirements",
      answer: `<div class="technical-requirements">
  <p>
    To ensure a smooth and effective learning experience, students enrolling in this programme must meet the following technical requirements:
  </p></br>

  <p><strong>Device Requirements:</strong></p>
  <ul>
    <li>
      <p>Computer/Laptop:</p> Windows (10 or later) or Mac (macOS 10.15 or later); Processor: Intel i3 (or equivalent) and above; RAM: Minimum 4 GB (8 GB recommended for multitasking); Storage: Minimum 20 GB free space for coursework and downloads; Camera and Microphone: Built-in or external for live sessions and presentations.
    </li></br>
    <li><p>OR</p></li></br>
    <li>
      <p>Tablet/Smartphone:</p> Suitable for accessing content on the go (limited functionality for assignments/exams).
    </li>
  </ul></br>

  <p><strong>Internet Requirements: </strong></p>
  <ul>
    <li>
      Connection speed: Minimum 5 Mbps download and 2 Mbps upload (10 Mbps recommended for seamless video conferencing).
    </li>
    <li>
      Stable Wi-Fi or Ethernet connection recommended for live Zoom sessions.
    </li>
  </ul></br>

  <p><strong>Software and Platforms: </strong></p>
  <ul>
    <li>
      <p>Virtual Live Sessions: Zoom (Synchronous learning); Document Processing: Microsoft Office (Word, Excel, PowerPoint) or equivalent (Google Docs).</p>
    </li>
  </ul></br>

  <p><strong>Browser Requirements: </strong></p>
  <ul>
    <li>
      Supported browsers: Chrome (latest version), Safari (for Mac users); Cookies and JavaScript: Enabled for full Blackboard functionality.
    </li>
  </ul></br>

  <p><strong>Additional Tools: </strong>(Optional but Recommended)</p>
  <ul>
    <li>Headset: For clear audio during virtual classes.</li>
    <li>External storage (USB/Cloud): For backups of important coursework.</li>
    <li>Antivirus software: To protect against malware or data loss.</li>
  </ul>
</div>
`,
    },
  ],
  programOverview: `Fascinated by the intersection of healthcare and technology? The BSc in Health Information Management equips learners to manage health data, information systems, and technology solutions. This interdisciplinary programme combines health sciences, IT, and management principles, preparing graduates for careers in healthcare data management and analytics.<br></br>
Students develop expertise in maintaining data integrity, privacy, and compliance with healthcare regulations, alongside analytical, technical, and managerial skills. Graduates are well-prepared for roles such as Health Information Managers or Clinical Data Analysts, making a meaningful contribution to the future of healthcare information management.`,
};

export const bscinhospitaladministration = {
  heroContent: {
    question: "BSc in Hospital Administration",
    image: "/images/courses-images/BSc in Hospitality.jpeg",
    downloadurl: `${baseUrl}BScInHospitalAdministration.pdf`,
    typicalfulltimestudyperiod: 4,
    // maxPeriod: 6,
    programmeCredit: "$13",
    totalProgrammeCredit: 480,
    noOfModules: "36 (34 core + 2 elective)",
    totalFee: "$6,240",
    cta: true,
    timer: true,
    overview: true,
  },
  courseStruture: [
    {
      semester: "Semester 1",
      courses: [
        {
          question: "Computer and its Essentials 1",
          subanswer:
            "Code: C5-CE1-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module provides a foundational understanding of computers and their essentials, covering basic functions, hardware and software components, and how they operate. It explores the history and evolution of computers and data processing. Students will learn about Microsoft Office, with an emphasis on Microsoft Word and PowerPoint. Through hands-on activities and assessments, learners will develop a comprehensive understanding of computer essentials.",
        },
        {
          question: "Human Biology 1",
          subanswer:
            "Code: D5-HB1-25<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "This module introduces the fundamental principles of human anatomy and physiology. It covers tissues, cartilage, bones, and joints, as well as the composition and functions of blood. Topics include respiratory, digestive, urinary, cardiovascular, endocrine, and nervous systems, providing essential knowledge for healthcare and related disciplines.",
        },
        {
          question: "Academic Writing for STEM",
          subanswer:
            "Code: D6-AWS-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to equip students with essential skills in academic writing, focusing on clear and structured communication in the STEM fields. The module covers citation and referencing techniques, as well as research writing skills, enabling students to effectively present and support their academic work.",
        },
        {
          question: "Principles of Management",
          subanswer:
            "Code: D6-POM-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to introduce management theories, functions, and practices. It focuses on planning, organising, leading, and controlling resources to achieve organisational goals.",
        },
        {
          question: "Principles of Hospital Administration",
          subanswer:
            "Code: D6-PHA-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to cover core concepts of hospital management, including planning, organisation, and leadership. It prepares students to oversee healthcare facilities effectively.",
        },
      ],
    },

    {
      semester: "Semester 2",
      courses: [
        {
          question: "Fundamentals of Accounting",
          subanswer:
            "Code: A5-FOA-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to introduce basic accounting principles, financial statements, and bookkeeping. It focuses on understanding financial data, budgeting, and decision-making to manage resources effectively in healthcare or business settings.",
        },
        {
          question: "Human Biology 2",
          subanswer:
            "Code: D6-HB2-25<br/>Prerequisite: D5-HB1-25<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "This module builds on core biological concepts by introducing pathology and pharmacology. Students learn about cell injury, inflammation, and neoplasms, alongside the therapeutic use of drugs. Topics include respiratory and cardiovascular drugs, antimicrobials, chemotherapy agents, and anaesthetics, equipping learners with essential knowledge for understanding disease mechanisms and treatment approaches.",
        },
        {
          question: "Computer and its Essentials 2",
          subanswer:
            "Code: C6-CE2-20<br/>Prerequisite: C5-CE1-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module builds on foundational computing skills, equipping students with advanced capabilities in Microsoft Excel and Google collaboration tools. It covers key spreadsheet functionalities, including data organisation, advanced formulas, chart creation, and data analysis using pivot tables. Additionally, students will explore Google Docs, Spreadsheets, Forms, and Drive to enhance online collaboration and information sharing.",
        },
        {
          question: "Introduction to Global Health",
          subanswer:
            "Code: D5-IGH-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to explore global health strategies, financing, and implementation in today's world. It examines the socioeconomic and environmental determinants of health, highlighting their impact on communities. Students will gain insights into global health challenges and solutions for improving health outcomes worldwide.",
        },
        {
          question: "Health Ethics, Law and Policy",
          subanswer:
            "Code: D6-HLP-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to examine ethical, legal, and policy issues in healthcare. It covers patient rights, confidentiality, and regulatory frameworks to ensure ethical decision-making in healthcare administration.",
        },
      ],
    },

    //3
    {
      semester: "Semester 3",
      courses: [
        {
          question: "Hospital Services Management Core, Support and Utility",
          subanswer:
            "Code: D6-HSM-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to focus on managing hospital operations, including patient care, resource allocation, and service delivery. It prepares students to ensure efficient and effective healthcare services.",
        },
        {
          question: "Health Database Management System",
          subanswer:
            "Code: D6-DMS-23<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "The purpose of this module is to teach the design, implementation, and management of health databases. It focuses on ensuring accurate data storage, retrieval, and security for effective healthcare operations.",
        },
        {
          question: "Epidemiology",
          subanswer:
            "Code: D6-EPI-13<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "The purpose of this module is to equip students with essential skills to study disease patterns and risks. It covers measures of disease occurrence, study design, clinical test accuracy, epidemiological analysis methods, and research ethics, enabling students to critically evaluate public health data and contribute to disease prevention and control.",
        },
        {
          question: "Health Informatics",
          subanswer:
            "Code: D6-HEF-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to explore the use of information technology in healthcare. It focuses on data management, electronic health records, and digital tools to improve patient care and operational efficiency.",
        },
      ],
    },
    //4

    {
      semester: "Semester 4",
      courses: [
        {
          question: "Health Economics",
          subanswer:
            "Code: D7-HEC-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to equip students with the fundamental principles and tools used in health economics. It provides a comprehensive understanding of how economic principles can be applied to healthcare systems, including cost-effectiveness analysis, resource allocation, and the economic evaluation of health interventions.",
        },
        {
          question: "Medical Records Department",
          subanswer:
            "Code: D6-MRD-23<br/>Prerequisite: D6-DMS-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to teach the management of medical records. It focuses on maintaining accuracy, confidentiality, and accessibility of patient information in healthcare settings.",
        },
        {
          question: "Patient Care and Safety in Hospitals",
          subanswer:
            "Code: D7-PCS-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to emphasise patient-centered care, safety protocols, and quality improvement in healthcare settings. It prepares students to ensure optimal patient outcomes.",
        },
        {
          question: "Organisational Behaviour",
          subanswer:
            "Code: B7-OBE-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module explores organisational behavior, focusing on group dynamics, leadership, motivation, structure, and change management. Students will learn team building, conflict resolution, and labor management while analysing human and organisational interactions. Key topics include stress management, industrial relations, and the systems approach, preparing students to navigate evolving organisational environments effectively.",
        },
        {
          question: "Material Management in Hospitals",
          subanswer:
            "Code: D7-MMH-23<br/>Prerequisite: D6-HSM-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to manage hospital resources efficiently. It focuses on procurement, inventory control, and distribution of medical supplies and equipment.",
        },
        {
          question: "Ethical and Legal Issues in Administration",
          subanswer:
            "Code: D7-ELA-23<br/>Prerequisite: D6-HLP-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to examine ethical and legal challenges in healthcare administration. It focuses on patient rights, compliance, and ethical decision-making in complex scenarios.",
        },
      ],
    },

    {
      semester: "Semester 5",
      courses: [
        {
          question: "Research Trends in Hospital Administration",
          subanswer:
            "Code: D7-RTH-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to explore current research and innovations in hospital management. It focuses on evidence-based practices and emerging trends to improve healthcare delivery.",
        },
        {
          question: "Medical Terminology",
          subanswer:
            "Code: D7-MTE-23<br/>Prerequisite: D6-HB2-25<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "The purpose of this module is to provide students with a foundational understanding of medical terms used in healthcare. It covers terminology related to various disease conditions, as well as the musculoskeletal, respiratory, and digestive systems, enabling effective communication in medical and clinical settings.",
        },
        {
          question: "Healthcare Quality Management",
          subanswer:
            "Code: D7-HQM-23<br/>Prerequisite: D6-HSM-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to teach strategies for improving healthcare quality. It covers patient safety, performance metrics, and continuous improvement in healthcare delivery.",
        },
        {
          question: "Strategic Management",
          subanswer:
            "Code: B7-STM-23<br/>Prerequisite: D6-POM-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to teach strategic planning and decision-making in organisations. It focuses on aligning resources and goals to achieve long-term success in healthcare or other industries.",
        },
      ],
    },
    {
      semester: "Semester 5 Elective Group (Choose One)",
      courses: [
        {
          question: "Environmental Health and Safety",
          subanswer:
            "Code: D6-EHS-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to address environmental factors affecting health. It focuses on safety protocols, risk assessment, and sustainable practices in healthcare settings.",
        },
        {
          question: "Disaster Management",
          subanswer:
            "Code: D6-DMA-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to teach strategies for managing healthcare during disasters. It focuses on preparedness, response, and recovery in crisis situations.",
        },
      ],
    },

    ///6
    {
      semester: "Semester 6",
      courses: [
        {
          question: "Research Methodology",
          subanswer:
            "Code: D6-REM-23<br/>Prerequisite: D6-AWS-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to introduce research design, data collection, and analysis techniques. It equips students with skills to conduct evidence-based studies in healthcare and related fields.",
        },
        {
          question: "Medical Statistics",
          subanswer:
            "Code: D7-MST-13<br/>Prerequisite: D6-EPI-13<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "The purpose of this module is to apply statistical methods to healthcare data. It covers data interpretation, analysis, and reporting to support decision-making in medical research and practice.",
        },
        {
          question: "Health Insurance and Policies",
          subanswer:
            "Code: D7-HIP-23<br/>Prerequisite: D7-ELA-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to explore health insurance systems and policies. It focuses on understanding coverage, reimbursement, and regulatory frameworks in healthcare.",
        },
        {
          question: "Human Resource Management",
          subanswer:
            "Code: B7-HRM-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to teach recruitment, training, performance evaluation, and employee relations. It equips students with skills to manage human capital effectively in healthcare or other industries.",
        },
      ],
    },
    {
      semester: "Semester 6 Elective Group (Choose One)",
      courses: [
        {
          question: "Personal and Professional Development",
          subanswer:
            "Code: D7-PPD-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to enhance personal and professional skills. It focuses on communication, leadership, and career growth in healthcare administration.",
        },
        {
          question: "Public and Community Health",
          subanswer:
            "Code: D7-PCH-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to explore public health initiatives and community engagement. It focuses on disease prevention, health promotion, and addressing health disparities.",
        },
      ],
    },
    {
      semester: "Semester 7",
      courses: [
        {
          question: "Research Project 1",
          subanswer:
            "Code: D7-RPR-23<br/>Prerequisite: D6-REM-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to apply research skills to a specific healthcare topic. It involves designing, conducting, and presenting a research project under supervision.",
        },
        {
          question: "Disease Coding and CPT",
          subanswer:
            "Code: D7-DCC-23<br/>Prerequisite: D7-MTE-23<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "The purpose of this module is to teach disease classification and procedural coding. It focuses on accurate documentation and billing in healthcare administration.",
        },
        {
          question: "Entrepreneurship and Innovation",
          subanswer:
            "Code: B8-ENI-20<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "This module explores entrepreneurship and innovation, covering enterprise development, opportunity discovery, and business planning. It examines innovation principles, feasibility assessment, business modelling, and disruptive technologies. Students will learn to validate risks, market size, and pricing while developing entrepreneurial teams, fostering creativity, and building sustainable, innovative ventures.",
        },
        {
          question: "Risk Management",
          subanswer:
            "Code: D7-RMN-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The purpose of this module is to teach strategies to identify, assess, and mitigate risks in healthcare settings. It focuses on patient safety, legal compliance, and organisational resilience.",
        },
      ],
    },
    {
      semester: "Semester 8",
      courses: [
        {
          question: "Professional Practice",
          subanswer:
            "Code: D7-PRP-23<br/>Prerequisite: 240 Credits<br/>Module Fees: $540<br/>Module Credits: 40",
          answer:
            "The purpose of this module is to prepare students for real-world healthcare administration. It focuses on practical skills, ethical practices, and professional development in healthcare settings.",
        },
        {
          question: "Research Project 2",
          subanswer:
            "Code: D8-RP2-23<br/>Prerequisite: D7-RPR-23<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "The purpose of this module is to conduct an advanced research project in healthcare. It builds on Research Project 1, emphasizing in-depth analysis and practical application.",
        },
      ],
    },
  ],
  requirements: [
    {
      question: "Admission Requirements",
      answer:
        "IGCSE/equivalent with 5 Passes including English and Mathematics. Applicants in possession of a Diploma or Higher Diploma in related fields may be given exemptions based on the credit point equivalency.",
    },

    {
      question: "Technical Requirements",
      answer: `<div class="technical-requirements">
  <p>
    To ensure a smooth and effective learning experience, students enrolling in this programme must meet the following technical requirements:
  </p></br>

  <p><strong>Device Requirements:</strong></p>
  <ul>
    <li>
      <p>Computer/Laptop:</p> Windows (10 or later) or Mac (macOS 10.15 or later); Processor: Intel i3 (or equivalent) and above; RAM: Minimum 4 GB (8 GB recommended for multitasking); Storage: Minimum 20 GB free space for coursework and downloads; Camera and Microphone: Built-in or external for live sessions and presentations.
    </li></br>
    <li><p>OR</p></li></br>
    <li>
      <p>Tablet/Smartphone:</p> Suitable for accessing content on the go (limited functionality for assignments/exams).
    </li>
  </ul></br>

  <p><strong>Internet Requirements: </strong></p>
  <ul>
    <li>
      Connection speed: Minimum 5 Mbps download and 2 Mbps upload (10 Mbps recommended for seamless video conferencing).
    </li>
    <li>
      Stable Wi-Fi or Ethernet connection recommended for live Zoom sessions.
    </li>
  </ul></br>

  <p><strong>Software and Platforms: </strong></p>
  <ul>
    <li>
      <p>Virtual Live Sessions: Zoom (Synchronous learning); Document Processing: Microsoft Office (Word, Excel, PowerPoint) or equivalent (Google Docs).</p>
    </li>
  </ul></br>

  <p><strong>Browser Requirements: </strong></p>
  <ul>
    <li>
      Supported browsers: Chrome (latest version), Safari (for Mac users); Cookies and JavaScript: Enabled for full Blackboard functionality.
    </li>
  </ul></br>

  <p><strong>Additional Tools: </strong>(Optional but Recommended)</p>
  <ul>
    <li>Headset: For clear audio during virtual classes.</li>
    <li>External storage (USB/Cloud): For backups of important coursework.</li>
    <li>Antivirus software: To protect against malware or data loss.</li>
  </ul></br>
</div>
`,
    },
  ],
  programOverview: `Aspiring to a leadership position in healthcare? Our BSc in Hospital Administration is a specialised programme designed to equip you with essential knowledge and skills. It seamlessly integrates business administration, healthcare management, and public health principles, addressing the unique challenges of the sector.<br></br>You'll delve into healthcare systems, hospital operations, and patient care protocols, gaining a holistic understanding of this complex industry. Our curriculum blends theory with practical applications through case studies and experiential learning, preparing you to drive improvements in healthcare delivery, optimise resources, and enhance patient outcomes in diverse settings like hospitals and clinics.`,
};

export const bscinsafetyhealthandenvironmentalmanagement = {
  heroContent: {
    question: "BSc in Safety, Health and Environmental Management",
    image: "/images/courses-images/BSc in Safety..png",
    downloadurl: `${baseUrl}BScInSafetyHealthandEnviroMgmt.pdf`,
    typicalfulltimestudyperiod: 4,
    // maxPeriod: 6,
    programmeCredit: "$13",
    totalProgrammeCredit: 508,
    noOfModules: "38 (36 core + 2 elective)",
    totalFee: "$6,604",
    cta: true,
    timer: true,
    overview: true,
  },
  courseStruture: [
    {
      semester: "Semester 1",
      courses: [
        {
          question: "Environmental Management",
          subanswer:
            "Code: D5-ENM-25<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module introduces students to the principles and practices of environmental management. It covers environmental issues, classifications, and regulations, types of pollutants, waste management strategies, and assessment of environmental risks, health, and hazards. Students will also develop skills in conducting environmental audits to promote compliance and sustainable practices.",
        },
        {
          question: "Computing and Information Skills",
          subanswer:
            "Code: C5-CIS-23<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module provides students with essential computing knowledge and practical skills. It covers computer hardware, software, memory, and storage, alongside the historical development and current trends in computing. Students will gain proficiency in operating systems, word processing, spreadsheets, presentations, databases, internet use, and email for effective digital communication.",
        },
        {
          question: "Business Communication",
          subanswer:
            "Code: D5-BUC-25<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "The purpose of the module is to equip students with essential skills in academic writing, focusing on clear and structured communication in the Business fields. The module covers citation and referencing techniques, as well as research writing skills, enabling students to effectively present and support their academic work.",
        },
        {
          question:
            "Mathematics for Safety, Health and Environmental Management",
          subanswer:
            "Code: C5-MSH-25<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module introduces fundamental mathematical concepts essential covers numerals, fractions, decimals, percentages, ratio, proportion, measurement systems, and algebra. Students will also apply these concepts in practical contexts such as dosage, concentration, and statistics, developing essential skills for professional accuracy and application.",
        },
        {
          question: "Advanced Integrated Science",
          subanswer:
            "Code: C5-AIS-23<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module explores the interdisciplinary nature of advanced integrated science by combining biological, chemical, and physical concepts. Students will study principles across disciplines, analyse energy, forces, motion, and reactions within systems, and develop practical skills in designing experiments, data analysis, interpretation, and scientific reasoning for holistic scientific understanding.",
        },
      ],
    },
    //2
    {
      semester: "Semester 2",
      courses: [
        {
          question: "Quality Management",
          subanswer:
            "Code: D6-QUM-21<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module equips students with the knowledge and tools necessary to design, implement, and maintain effective quality assurance systems within organisations. It aims to promote continuous improvement, customer satisfaction, and operational excellence through the application of quality standards and methodologies.",
        },
        {
          question: "Introduction to Occupational Health and Safety Management",
          subanswer:
            "Code: D6-OHS-21<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module introduces fundamental concepts of occupational health and safety management. It explores ILO instruments, national prevention tools, workplace programmes, and OSH management systems. Students will examine industrial toxin guidelines, HIV/AIDS workplace issues, health promotion, education, and injury prevention, alongside policy formulation to enhance safe and healthy working environments.",
        },
        {
          question: "Risk Management",
          subanswer:
            "Code: D6-RSM-23<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module equips students with the skills and strategies to identify, assess, and mitigate risks in various organisational contexts. It aims to promote proactive decision-making and resilience by minimising potential threats and maximising opportunities for success.",
        },
        {
          question: "Occupational Health and Safety Law I",
          subanswer:
            "Code: D6-OHL-21<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module familiarises students with the legal frameworks and regulations governing workplace safety and health standards. It aims to promote compliance, protect employee rights, and ensure safe working environments through an understanding of legal responsibilities and obligations.",
        },
        {
          question: "Safety Procedures at the Workplace",
          subanswer:
            "Code: D7-SPW-25<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module equips students with knowledge and skills to implement safety procedures in the workplace. It covers hazard identification, risk assessment, emergency response, use of personal protective equipment, and adherence to health and safety regulations. Students will develop the competence to maintain safe, compliant, and efficient work environments.",
        },
      ],
    },

    //3
    {
      semester: "Semester 3",
      courses: [
        {
          question: "HIV and AIDS Management",
          subanswer:
            "Code: D6-HIV-23<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module provides comprehensive knowledge of HIV and AIDS management. Students will explore surveillance, prevention strategies, social determinants of care, and the role of the private sector. It covers antenatal screening, mother-to-child transmission, innovative treatments, gene-expression strategies, and challenges such as drug interactions, equipping students for effective HIV/AIDS intervention.",
        },
        {
          question: "Occupational Epidemiology",
          subanswer:
            "Code: D7-OEP-25<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module introduces students to epidemiological principles and methods within occupational health. It covers epidemiological approaches, data sources, measurement techniques, and disease spread analysis, including mortality and morbidity rates. Students will learn research designs, data collection tools, and software applications for disease screening and classification in workplace contexts.",
        },
        {
          question: "Ergonomics",
          subanswer:
            "Code: D6-ERG-25<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module studies the interaction between humans and their working environments to optimise safety, comfort, and productivity. It aims to apply principles of design and engineering to reduce physical strain, prevent injuries, and enhance overall efficiency in various tasks and workplaces.",
        },
        {
          question: "Biostatistics",
          subanswer:
            "Code: D7-BST-21<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module provides students with foundational knowledge and skills in statistical methods used in the field. It covers data analysis, probability, statistical inference, and the application of statistical tools to interpret biological and medical research effectively.",
        },
        {
          question: "Emergency Preparedness and Disaster Management",
          subanswer:
            "Code: D7-EPM-21<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module equips students with skills to plan, respond to, and manage emergencies and disasters. It focuses on risk assessment, crisis communication, resource coordination, and recovery strategies to minimise impacts and ensure safety in various settings.",
        },
      ],
    },

    {
      semester: "Semester 4",
      courses: [
        {
          question: "Organisational Behavior",
          subanswer:
            "Code: B6-ORB-25<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module explores the dynamics of individual and group behaviour within organisational settings. It aims to enhance students' understanding of how effective leadership, communication, and motivation contribute to achieving organisational goals and improving workplace performance.",
        },
        {
          question: "Occupational Health and Safety Law II",
          subanswer:
            "Code: D7-OS2-25<br/>Prerequisite: D6-OHL-21<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module deepens students' understanding of advanced legal principles through case studies related to workplace safety and health regulations. It aims to enhance skills in interpreting and applying complex legal requirements to ensure organisational compliance and foster a culture of safety.",
        },
        {
          question: "Occupational Toxicology",
          subanswer:
            "Code: D7-OTX-25<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module introduces students to modern occupational toxicology, emphasising underlying mechanisms of toxicity. It covers the identification of toxicants, their effects on the body, cellular injury mechanisms, and the body’s adaptive responses to exposure. Students will gain essential knowledge for assessing, managing, and preventing toxic hazards in the workplace.",
        },
        {
          question: "Fire Ecology and Management",
          subanswer:
            "Code: D7-FEM-25<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module provides students with knowledge of fire chemistry, fire ecology, and management principles. It covers the importance of fire safety, risk assessment, and the development of strategies to minimise fire incidents. Students will also learn to ensure compliance with legal and regulatory requirements in workplace and community settings.",
        },
        {
          question: "Environmental Impact Assessment",
          subanswer:
            "Code: D7-EIA-23<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module provides students with the tools and methodologies to evaluate the potential environmental consequences of projects and policies. It aims to promote sustainable development by identifying mitigation measures and ensuring informed decision-making that balances economic growth with environmental protection.",
        },
      ],
    },
    {
      semester: "Semester 5",
      courses: [
        {
          question: "Incident/Accident Investigation",
          subanswer:
            "Code: D7-IAI-25<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module equips students with the knowledge and skills to identify, analyse, and prevent workplace accidents effectively. It promotes a culture of safety by teaching systematic investigation techniques and implementing preventive measures to reduce risks and enhance organisational safety standards.",
        },
        {
          question: "Concepts and Principles of Climate Change",
          subanswer:
            "Code: D7-PCC-25<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module introduces students to the fundamental concepts and principles of climate change. It covers the impacts of climate change, the relationship between fossil fuels, greenhouse gases, and global warming, relevant legal frameworks and international agreements, and strategies for reducing carbon footprints and enhancing carbon sinks for sustainable environmental management.",
        },
        {
          question: "Global Health Dynamics",
          subanswer:
            "Code: D7-GHD-23<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module examines the complex factors influencing health outcomes and systems across different regions and populations worldwide. It explores strategies for addressing global health challenges, such as infectious diseases, health inequities, and cross-border health threats, through collaborative and innovative approaches.",
        },
        {
          question: "Waste Management and Pollution Control",
          subanswer:
            "Code: D7-WMN-25<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module provides students with knowledge of waste types and their impacts on the environment and public health. It covers relevant legal requirements and explores practical strategies for waste management and pollution control. Students develop skills to implement effective, sustainable solutions for environmental protection and health safety.",
        },
        {
          question: "Safety Management and the Built Environment",
          subanswer:
            "Code: D6-SMB-21<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module introduces principles of safety management within the built environment. Students explore risk assessment, hazard identification, and strategies to ensure health and safety in construction and building operations. Emphasis is placed on regulatory compliance, safety planning, and practical measures to create secure and sustainable built environments.",
        },
      ],
    },
    {
      semester: "Semester 6",
      courses: [
        {
          question: "Research Methods",
          subanswer:
            "Code: D7-RSM-23<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module equips students with a comprehensive understanding of quantitative, qualitative, and systematic review methodologies. Students learn to critically read and analyse health sciences literature, gaining skills to evaluate research studies and apply appropriate methodologies.",
        },
        {
          question: "Security Management",
          subanswer:
            "Code: D7-SMN-23<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module introduces students to the principles of security management within organisations. It covers the roles and responsibilities of security managers, types of security management, skills of competent personnel, relevant legislation, site evaluations, and incident reporting. Students develop practical and analytical skills for effective organisational security management.",
        },
        {
          question: "Occupational Hygiene",
          subanswer:
            "Code: D7-OCH-25<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module educates students on identifying, evaluating, and controlling workplace hazards that may affect worker health and well-being. It promotes safe and healthy work environments through the application of scientific principles and preventive measures.",
        },
        {
          question: "First Aid Procedures",
          subanswer:
            "Code: D7-FAP-25<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module equips students with essential knowledge and skills to provide immediate and effective care in emergency situations. It promotes confidence and competence in administering first aid to preserve life, prevent further injury, and support recovery until professional medical help arrives.",
        },
        {
          question: "Counselling at the Workplace",
          subanswer:
            "Code: D7-COW-25<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module equips students with knowledge and skills for effective workplace counselling. It covers the importance of counselling, multicultural competencies, ethics, psychoanalytic and behavioural approaches, self-awareness, and counsellor self-care. Students learn key counselling processes and gain practical experience in conducting brief, professional counselling sessions within organisational settings.",
        },
      ],
    },
    {
      semester: "Semester 6 Elective Group (Choose One)",
      courses: [
        {
          question: "Health and Safety in Transport",
          subanswer:
            "Code: D7-HST-21<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module educates students on the principles and practices of ensuring safety and well-being in transportation systems and operations. It addresses risks, promotes regulatory compliance, and implements strategies to protect passengers, workers, and the public in various transport environments.",
        },
        {
          question: "Building Maintenance",
          subanswer:
            "Code: D7-BDM-21<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module provides students with the knowledge and skills necessary to ensure the proper upkeep and functionality of buildings and infrastructure. It promotes efficient maintenance practices, prolongs the lifespan of structures, and ensures safe and comfortable environments for occupants.",
        },
        {
          question: "Employee Relations",
          subanswer:
            "Code: D7-ERT-21<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module explores the dynamics and strategies for fostering positive relationships between employers and employees within an organisation. It promotes effective communication, conflict resolution, and fair practices to enhance workplace harmony, productivity, and employee satisfaction.",
        },
      ],
    },
    {
      semester: "Semester 7",
      courses: [
        {
          question: "Safety, Health and Environmental Management Systems",
          subanswer:
            "Code: D8-SHE-25<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module introduces students to the principles and practices of safety, health, and environmental management systems. It covers risk assessment, regulatory compliance, and the design and implementation of management frameworks. Students develop skills to monitor, evaluate, and improve organisational systems, ensuring workplace safety, environmental protection, and sustainable operations.",
        },
        {
          question: "Research Project 1 (Proposal Writing)",
          subanswer:
            "Code: D7-RP1-23<br/>Prerequisite: D7-OEP-25<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module equips students with skills to design and develop a comprehensive research proposal. It covers critical analysis, evaluation, and synthesis of academic materials, identification of research gaps, justification of methodology and tools, and formulation of a primary research project proposal. Students develop a proposal under a supervisor's guidance and present their work.",
        },
        {
          question: "Records Management in the Workplace",
          subanswer:
            "Code: D7-RMW-25<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module introduces students to effective records management in workplace settings. It covers the documentation of incidents and accidents, including details of injuries, witnesses, and preventive measures. Students develop skills to accurately record, report, and maintain workplace records, ensuring compliance, accountability, and informed decision-making for health and safety management.",
        },
        {
          question: "Environmental Sustainability",
          subanswer:
            "Code: D8-ENS-25<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module explores principles of ecology and human-environment interactions to promote sustainable practices. Students examine self-sustaining ecosystems, population stabilisation strategies, and conservation of biological diversity, water, and land resources. It also addresses the relationship between economics and the environment, equipping students to develop solutions for sustainable environmental management.",
        },
      ],
    },
    {
      semester: "Semester 7 Elective Group (Choose One)",
      courses: [
        {
          question: "Food Safety and Hygiene",
          subanswer:
            "Code: D8-FSH-23<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module educates students on the principles and practices of handling, preparing, and storing food safely to prevent contamination and foodborne illnesses. It promotes compliance with health standards and ensures the delivery of safe, high-quality food to consumers.",
        },
        {
          question: "Introduction to Mine Safety",
          subanswer:
            "Code: D8-MNS-25<br/>Module Fees: $156<br/>Module Credits: 12",
          answer:
            "This module provides students with the knowledge and skills to identify, assess, and mitigate hazards in mining operations. It promotes a culture of safety, ensures regulatory compliance, and protects the health and well-being of workers in the mining industry.",
        },
      ],
    },
    {
      semester: "Semester 8",
      courses: [
        {
          question: "Research Project 2",
          subanswer:
            "Code: D7-RP2-25<br/>Prerequisite: D7-RP1-25<br/>Module Fees: $208<br/>Module Credits: 16",
          answer:
            "This module guides students in continuing and completing their research proposals through a structured dissertation. Students conduct in-depth research on environmental sustainability topics, apply appropriate methodologies, analyse data, and critically interpret findings. It develops independent research, problem-solving, and academic writing skills for contributing to sustainable environmental practices.",
        },
        {
          question: "Industrial Attachment",
          subanswer:
            "Code: D7-INA-25<br/>Prerequisite: 240 credits<br/>Module Fees: $780<br/>Module Credits: 60",
          answer:
            "This module develops students’ specialist knowledge and professional competencies in Safety, Health, and Environmental Management (SHEM). It emphasises lifelong learning, multidisciplinary problem-solving, informed decision-making, research, and effective communication. Students explore entrepreneurship, practical application of knowledge, and reflect on how their programme studies contribute to workplace performance and professional growth.",
        },
      ],
    },
  ],
  requirements: [
    {
      question: "Admission Requirements",
      answer:
        "IGCSE/equivalent with five Passes including a grade C in English, Mathematics/Statistics and Science (Biology, Chemistry, Physics or Double Science). Applicants in possession of a Diploma or Higher Diploma in related fields may be given exemptions based on the credit point equivalency.",
    },

    {
      question: "Technical Requirements",
      answer: `<div class="technical-requirements">
  <p>
  To ensure a smooth and effective learning experience, students enrolling in this programme must meet the following technical requirements:
  </p></br>
  <p><strong>Device Requirements:</strong></p>
  <ul>
    <li>
      <p>Computer/Laptop:</p> Windows (10 or later) or Mac (macOS 10.15 or later); Processor: Intel i3 (or equivalent) and above; RAM: Minimum 4 GB (8 GB recommended for multitasking); Storage: Minimum 20 GB free space for coursework and downloads; Camera and Microphone: Built-in or external for live sessions and presentations.
    </li></br>
    <li><p>OR</p></li></br>
    <li>
      <p>Tablet/Smartphone:</p> Suitable for accessing content on the go (limited functionality for assignments/exams).
    </li>
  </ul></br>

  <p><strong>Internet Requirements: </strong></p>
  <ul>
    <li>
      Connection speed: Minimum 5 Mbps download and 2 Mbps upload (10 Mbps recommended for seamless video conferencing).
    </li>
    <li>
      Stable Wi-Fi or Ethernet connection recommended for live Zoom sessions.
    </li>
  </ul></br>

  <p><strong>Software and Platforms: </strong></p>
  <ul>
    <li>
      <p>Virtual Live Sessions: Zoom (Synchronous learning); Document Processing: Microsoft Office (Word, Excel, PowerPoint) or equivalent (Google Docs).</p>
    </li>
  </ul></br>

  <p><strong>Browser Requirements: </strong></p>
  <ul>
    <li>
      Supported browsers: Chrome (latest version), Safari (for Mac users); Cookies and JavaScript: Enabled for full Blackboard functionality.
    </li>
  </ul></br>

  <p><strong>Additional Tools: </strong>(Optional but Recommended)</p>
  <ul>
    <li>Headset: For clear audio during virtual classes.</li>
    <li>External storage (USB/Cloud): For backups of important coursework.</li>
    <li>Antivirus software: To protect against malware or data loss.</li>
  </ul></br>
</div>
`,
    },
  ],
  programOverview: `Ready to champion workplace safety and environmental well-being? The BSc in Safety, Health, and Environment (SHE) Management is an interdisciplinary programme that integrates occupational health, environmental science, and risk management principles.<br></br>
Learners study how to identify and assess workplace hazards, design effective control measures, and ensure compliance with safety and environmental regulations. The programme also places emphasis on sustainable practices. Graduates are prepared to meet the rising demand for SHE professionals across industries such as manufacturing, construction, and healthcare, making a meaningful contribution to both worker welfare and environmental stewardship.`,
};

export const bedinprimaryeducation = {
  heroContent: {
    question: "Bachelor of Education in Primary Education",
    image: "/images/courses-images/Bed in Primary.png",
    downloadurl: `${baseUrl}BEdInPrimaryEducation.pdf`,
    typicalfulltimestudyperiod: 4,
    // maxPeriod: 6,
    programmeCredit: "$13",
    totalProgrammeCredit: 520,
    noOfModules:
      "English specialisation 44 (39 core + 5 elective); Mathematics specialisation 42 (37 core + 5 elective)",
    totalFee: "$6,760",
    cta: true,
    timer: true,
    overview: true,
  },
  courseStruture: [
    {
      semester: "Semester 1",
      courses: [
        {
          question: "Communication and Academic Literacy Skills",
          subanswer:
            "Code: D5-CAS-23<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "This module equips student teachers with the knowledge, skills, and competences to develop learners’ foundational literacy - listening, speaking, reading, and writing - critical for academic success and future careers. It includes phonemic awareness, vocabulary, spelling, and comprehension, fostering effective communication and enabling learners to participate meaningfully in studies and professional contexts.",
        },
        {
          question: "Computer Skills Fundamentals",
          subanswer:
            "Code: D5-CSF-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $260.00<br/>Module Credits: 20",
          answer:
            "This module introduces basic computer concepts essential for primary school teaching, learning, and everyday life. Learners explore key terminology, use Microsoft Windows, and manage files and folders. It also covers fundamental features of MS Office applications – Word, Excel, Outlook, PowerPoint, and Access – equipping learners with practical digital skills.",
        },
        {
          question: "Introduction to Educational Psychology",
          subanswer:
            "Code: D5-IEP-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module explores key issues in education and their impact on teachers and learners. It emphasises understanding learners’ developmental stages and supporting learning effectively. Using educational psychology, it examines human behaviour, growth, learning processes, and experiences, deepening understanding and enhancing the ability to address diverse educational needs.",
        },
        {
          question:
            "Historical, Philosophical and Sociological Foundations of Education",
          subanswer:
            "Code: D6-HPF-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module examines the historical, philosophical, and sociological foundations of education. It explores the history of education in various countries, the role of different stakeholders in shaping educational goals, and the origins of philosophy and sociology, highlighting contributions of key thinkers to educational thought and development.",
        },
        {
          question: "Introduction to Numeracy and Science for Teachers",
          subanswer:
            "Code: D6-INS-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces and examines essential knowledge and skills in numeracy, science, and technology, providing a cross-curricular foundation vital for effectively teaching these subjects in primary schools.",
        },
      ],
    },
    {
      semester: "Semester 2",
      courses: [
        {
          question: "Writing in English",
          subanswer:
            "Code: D6-WIE-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module develops learners’ English writing skills for academic tasks such as essays and assignments, and prepares them for professional communication, including emails, reports, and formal documents. Primary school teachers must be well equipped with strong English writing skills for effective communication and lesson facilitation.",
        },
        {
          question: "Introduction to Chemistry and Physics",
          subanswer:
            "Code: D6-ICP-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces student teachers to fundamental concepts in chemistry and physics, covering the structure of matter, key quantitative and qualitative aspects of chemistry, and core principles of physics, including light, electricity, and sound.",
        },
        {
          question: "Indigenous People and their Environment",
          subanswer:
            "Code: D6-IPE-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module examines indigenous peoples, their origins, and their environments. It explores their social, cultural, economic, and political lives, highlighting the importance for student teachers to understand these communities’ past and contemporary socio-economic activities and social structures.",
        },
        {
          question:
            "Introductory Biology and Earth Science for Primary Teachers",
          subanswer:
            "Code: D6-IBE-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module equips student teachers with the theoretical knowledge, skills, and abilities to understand and apply principles of biology and earth sciences, preparing them to integrate these concepts effectively into primary science teaching.",
        },
      ],
    },
    {
      semester: "Semester 2 (English Specialisation)",
      courses: [
        {
          question: "The Pronunciation of English",
          subanswer:
            "Code: D6-TPE-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module focuses on understanding how words and sentences interact to form speech, alongside pronunciation and grammatical foundations essential for communication. Learners explore key linguistic rules and structures necessary for effective teaching and learning in primary schools.",
        },
        {
          question: "English Linguistics",
          subanswer:
            "Code: D6-ELG-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "The study of English linguistics provides student teachers with a systematic understanding of how language functions, evolves, and influences communication. This module develops analytical skills to examine English structure – phonetics, morphology, syntax, semantics, and pragmatics – enhancing written and spoken communication in primary schools.",
        },
      ],
    },
    {
      semester: "Semester 2 (Mathematics Specialisation)",
      courses: [
        {
          question: "Introductory Mathematics",
          subanswer:
            "Code: D6-ITM-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $260.00<br/>Module Credits:20",
          answer:
            "This module provides a solid foundation in core mathematical concepts, essential for applying mathematics across subjects. It develops basic mathematical skills and introduces their practical application in diverse problem-solving contexts.",
        },
      ],
    },

    //sub

    {
      semester: "Semester 3",
      courses: [
        {
          question: "Introduction to Educational Research",
          subanswer:
            "Code: D6-IER-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module equips learners with an understanding of research principles and the ability to evaluate different research methods. It examines how chosen theories, methods, and approaches shape the research process, ensuring student teachers are well grounded in basic research skills essential for effective primary school teaching and learning.",
        },
        {
          question: "Foundations of Mathematics",
          subanswer:
            "Code: D7-FDM-25<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "This module explores the logical and philosophical foundations of mathematics, examining key concepts, principles, and methodologies in mathematical reasoning.",
        },
        {
          question: "Project-Based Learning and Teaching",
          subanswer:
            "Code: D7-PLT-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module develops active learning, collaboration, and critical thinking skills. Students work on projects addressing real-world problems, creating solutions and presenting findings to an academic audience. Through this experiential approach, student teachers acquire 21st-century skills essential for effectively teaching and engaging modern learners.",
        },
        {
          question: "Strategies for Teaching Numeracy and Science in Schools",
          subanswer:
            "Code: D7-STN-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module prepares Primary Education Science student teachers to select suitable teaching approaches, methods, techniques, and strategies for science instruction. It also equips them with the skills to develop schemes of work, lesson plans, and engage in microteaching and teaching practice effectively.",
        },

        // cut
      ],
    },
    {
      semester: "Semester 3 (English Specialisation)",
      courses: [
        {
          question: "Introduction to Reading Process",
          subanswer:
            "Code: D6-IRP-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module develops learners into independent readers, emphasising the use of context, dictionaries, and tables of contents. It fosters thoughtful responses to texts, enhancing creative and critical thinking while promoting clear, purposeful reading and comprehension.",
        },

        // cut
      ],
    },
    {
      semester: "Semester 3 (Mathematics Specialisation)",
      courses: [
        {
          question: "Introductory Set and Number Theory",
          subanswer:
            "Code: D6-ISN-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module helps student teachers understand fundamental branches of mathematics, including sets and their relationships, and the properties and relationships of numbers such as integers. It provides a foundation for modern mathematics and its core concepts.",
        },
      ],
    },
    {
      semester: "Semester 3 - Elective Group One (Choose One)",
      courses: [
        {
          question: "Counselling over a Life Span",
          subanswer:
            "Code: D6-COL-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module equips student teachers with the knowledge and skills to provide counselling services to clients. It covers key aspects, including attachment, school adjustment, social skills, identity formation, peer relationships, emotional regulation, and risk behaviours, preparing teachers to support learners’ personal and social development effectively.",
        },
        {
          question: "Foundations of Early Childhood Education",
          subanswer:
            "Code: D6-FEC-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces student teachers to essential principles, knowledge, and practices for effective teaching and learning of young children from birth to age eight. It covers child development, learning theories, supportive environments, curriculum design, and pedagogy to enhance early childhood education.",
        },
        {
          question: "Foundations of Environmental Education",
          subanswer:
            "Code: D6-FEE-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module enables student teachers to explore environmental issues and create awareness to address related problems. It examines human interaction with the environment, covering topics such as climate change, pollution, sustainability, environmental health, and waste management to promote informed and responsible practices.",
        },
      ],
    },

    ///suhb
    {
      semester: "Semester 4",
      courses: [
        {
          question: "Practitioner Research",
          subanswer:
            "Code: D7-PRE-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces student teachers to practice-based research aimed at enhancing teaching and learning. It equips them with the knowledge, skills, and competences necessary to improve their professional practice as primary school educators.",
        },
        {
          question: "Human Growth and Development",
          subanswer:
            "Code: D7-HGD-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module examines aspects of human growth and development, including physical, cognitive, emotional, social, and moral changes across the lifespan, and their educational implications. Stages covered include infancy, childhood, adolescence, and adulthood.",
        },
        {
          question: "Assessment in Primary Schools",
          subanswer:
            "Code: D7-APS-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module develops learners’ theoretical knowledge and skills in understanding and applying assessment principles. It focuses on using these principles effectively to assess primary science learning, ensuring meaningful evaluation of student progress and achievement.",
        },
        {
          question:
            "Information and Communication Technology Application in Schools",
          subanswer:
            "Code: D7-ICT-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module equips student teachers with the skills and competences to apply information technologies in teaching 21st-century learners.",
        },
        {
          question: "Strategies for Teaching Literacy in Schools",
          subanswer:
            "Code: D6-STL-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module equips student teachers with strategies for teaching literacy across the curriculum using thematic and pedagogical approaches. Learners develop skills to integrate literacy into daily activities and design instruction with informative, narrative, and persuasive texts, supported by key theories of literacy acquisition and contextual understanding.",
        },
      ],
    },
    {
      semester: "Semester 4 (English Specialisation)",
      courses: [
        {
          question: "Poetry of Southern Africa",
          subanswer:
            "Code: D7-PSA-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module explores the role of poetry in fostering language, creativity, emotional intelligence, and critical thinking. Student teachers learn how poetry enhances teaching and learning, particularly at the primary school level, and master its benefits as an educational tool.",
        },
      ],
    },
    {
      semester: "Semester 4 (Mathematics Specialisation)",
      courses: [
        {
          question: "Teaching Methods for Mathematics in Primary Schools",
          subanswer:
            "Code: D7-TMM-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces effective teaching strategies and techniques for primary school mathematics, exploring appropriate pedagogies, purposes, scope, sequence, materials, and methodologies. It supports students in meeting essential requirements for primary teaching through the development of practical, evidence-based skills for effective mathematics instruction and learning.",
        },
      ],
    },
    {
      semester: "Semester 4 Elective Group (Choose One)",
      courses: [
        {
          question: "Listening, Composing and Performing",
          subanswer:
            "Code: D6-LCP-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module explores the core processes of music engagement – listening, composing, and performing. Student teachers examine how these activities are interconnected and the role of music education in enhancing learning at the primary school level.",
        },
        {
          question:
            "Organisation and Administration of Physical Education and Sports",
          subanswer:
            "Code: D6-AOP-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module equips student teachers with the knowledge, skills, and competences for effective organisation and management of physical education and sports. It covers leadership qualities and key functions – planning, organising, staffing, directing, coordinating, controlling, evaluating, and innovating – to deliver efficient, high-quality physical activity programmes.",
        },
        {
          question:
            "Practical Art, Craft and Design Methods and Materials for Schools",
          subanswer:
            "Code: D6-PAC-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces primary education student teachers to the importance of arts, crafts, and design methods for effective teaching and learning. Topics include drawing, painting, sculpture, printmaking, product design, and clay modelling, with opportunities to apply theoretical knowledge through practical activities.",
        },
      ],
    },

    ///sub
    {
      semester: "Semester 5",
      courses: [
        {
          question: "Instructional Materials",
          subanswer:
            "Code: D7-IMP-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module equips learners with the knowledge and skills to design, develop, evaluate, and use instructional materials that enhance teaching and learning experiences.",
        },
        {
          question:
            "Education for Children with Attention Deficit Hyper Disorder",
          subanswer:
            "Code: D7-ECD-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module equips student teachers with the knowledge, skills, and competences to effectively support and facilitate learning for children with Attention Deficit Hyperactivity Disorder (ADHD).",
        },
        {
          question: "Infusing Environmental Education in the Curriculum",
          subanswer:
            "Code: D7-IEE-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module enables learners to understand how their decisions and actions affect the environment. It builds skills to address complex environmental issues and explores practical ways to promote a healthy, sustainable future.",
        },
        {
          question: "Characteristics of Human Language",
          subanswer:
            "Code: D7-CHL-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module equips student teachers with the skills and competences to understand and express the characteristics of human language. It analyses topics such as arbitrariness, productivity, creativity, duality of patterning, cultural transmission, and interchangeability.",
        },
        {
          question: "Conducting Remedial Teaching in Schools",
          subanswer:
            "Code: D7-CRT-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module develops theoretical knowledge in selecting suitable teaching approaches, methods, techniques, and strategies for effectively planning and delivering remedial classes in primary schools.",
        },
      ],
    },
    {
      semester: "Semester 5 (English Specialisation)",
      courses: [
        {
          question: "Theory and Practice of Second Language Teaching",
          subanswer:
            "Code: D7-TPS-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces key theories of second language acquisition, enabling learners to apply effective classroom teaching strategies. It also examines challenges in second language learning and guides learners in designing interventions to support student progress.",
        },
      ],
    },
    {
      semester: "Semester 5 (Mathematics Specialisation)",
      courses: [
        {
          question: "Geometry for Primary School Teachers",
          subanswer:
            "Code: D7-GPT-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module explores the combinatorial properties of geometric objects – point sets, subspace arrangements, convex polytopes, and geometric graphs – introducing fundamental concepts, key structures, and selected results in the field.",
        },
      ],
    },
    {
      semester: "Semester 5 Elective Group (Choose One)",
      courses: [
        {
          question: "Multicultural Counselling",
          subanswer:
            "Code: D7-MCC-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces student teachers to multicultural counselling, focusing on how culture influences mental health and well-being. Using a therapeutic approach, it covers cultural awareness, cultural sensitivity, gender, race, socio-economic background, cultural competence, and strategies for addressing systemic issues.",
        },
        {
          question:
            "Appropriate Art, Craft and Design Methods and Materials for School",
          subanswer:
            "Code: D7-ACD-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces primary school student teachers to appropriate art, craft, and design methods and materials for effective teaching and learning. It covers drawing, painting, collage, simple sculpture, and textile work, fostering creativity in the classroom.",
        },
        {
          question: "Motor Learning and Human Performance",
          subanswer:
            "Code: D7-MLH-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module equips student teachers with the knowledge and skills to master motor skills essential for physical activity, development, and well-being. Topics include motor skill acquisition, practice methods, feedback, cognitive factors, and individual differences.",
        },
      ],
    },
    //sub
    {
      semester: "Semester 6",
      courses: [
        {
          question:
            "Organising and Implementing Remedial Programmes in Schools",
          subanswer:
            "Code: D7-OIR-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module equips student teachers with the knowledge and skills to organise and implement remedial programmes in schools. It covers planning, approaches, and strategies for the successful delivery of such programmes to support learners’ academic progress.",
        },
        {
          question: "Managing Education for Sustainable Development",
          subanswer:
            "Code: D6-MES-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module fosters appreciation and respect for nature, raising awareness of environmental issues affecting communities and the world. It promotes understanding of the relationship between individuals, society, and the environment, equipping learners with knowledge and skills for sustainable and harmonious human–environment interaction.",
        },
        {
          question: "Literacy across the Curriculum",
          subanswer:
            "Code: D7-LAC-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module highlights the importance of integrating literacy across all curriculum areas. Student teachers learn to develop reading, writing, speaking, and listening skills in subjects such as mathematics, science, and social studies, not solely within English language arts.",
        },
      ],
    },
    {
      semester: "Semester 6 (English Specialisation)",
      courses: [
        {
          question: "The Structure of the Sentence",
          subanswer:
            "Code: D7-TSS-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module teaches sentence structure, focusing on declarative, interrogative, imperative, and exclamative forms. Learners identify, construct, and explain each type, understanding their purpose. Mastery of sentence structure is essential for academic success and effective communication, particularly in primary school teaching and learning.",
        },
        {
          question: "Teaching Reading in the Primary School",
          subanswer:
            "Code: D7-TRP-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module equips student teachers with the knowledge and skills for effective teaching of the reading process in primary schools. It covers strategies to make reading enjoyable, relevant, and suited to children’s interests and comprehension within a supportive, well-structured learning environment.",
        },
      ],
    },
    {
      semester: "Semester 6 (Mathematics Specialisation)",
      courses: [
        {
          question: "Teaching Number System in the Primary Schools",
          subanswer:
            "Code: D7-TNS-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module equips student teachers with the knowledge, skills, and competences for effective teaching of the number system in primary schools. It emphasises hands-on, engaging learning, guiding learners from the known to the unknown through real-world examples to enhance understanding and application.",
        },
        {
          question: "Teaching Algebra in Schools",
          subanswer:
            "Code: D7-TAS-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module prepares primary school teachers to plan and deliver algebra lessons suited to learners’ developmental levels. It builds the knowledge and skills needed to teach algebra effectively and confidently in primary schools.",
        },
      ],
    },
    {
      semester: "Semester 6 Elective Group Four (Choose One)",
      courses: [
        {
          question: "Curriculum Development in Early Childhood Education",
          subanswer:
            "Code: D7-CDE-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module prepares student teachers for effective curriculum design, planning, and the development of instructional design models in early childhood education.",
        },
        {
          question: "Substance Abuse Counselling",
          subanswer:
            "Code: D7-SAC-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module equips student teachers with the knowledge and skills to effectively address cases of alcoholism, addiction, and depression among students.",
        },
        {
          question: "Environmental Conservation Strategies I",
          subanswer:
            "Code: D7-ECS-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces student teachers to environmental conservation and strategies for protecting the environment. Topics include waste management, energy conservation, tree planting, and promoting sustainable transportation to support ecological balance and long-term sustainability.",
        },
      ],
    },
    //sub
    {
      semester: "Semester 7 (English Specialisation)",
      courses: [
        {
          question: "Modern English Grammar",
          subanswer:
            "Code: D7-MEG-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module examines English grammar theories and applications from the Early Modern English period to the present. It focuses on analysing spoken and written texts using traditional, structural, and modern linguistic theories, enabling learners to describe, analyse, and construct language at word, phrase, clause, and discourse levels.",
        },
        {
          question: "Usage in English",
          subanswer:
            "Code: D7-UIE-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module teaches student teachers the principles and practice of English language usage, focusing on how words and phrases are used. It emphasises appropriate and effective usage within sentences, a skill essential for teaching at the primary school level.",
        },
        {
          question: "Literature in Primary Schools",
          subanswer:
            "Code: D7-LIP-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces student teachers to various forms of prose, both fiction and non-fiction, including essays, autobiographies, short stories, and novels, and provides a brief overview of other literary genres such as poetry and drama.",
        },
        {
          question: "Breakthrough to Literacy",
          subanswer:
            "Code: D7-BTL-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module equips future teachers with strategies for teaching literacy across the curriculum. Learners explore thematic and pedagogical approaches, integrate literacy into daily lessons, and design instruction using informative, narrative, and persuasive texts, supported by theories of literacy acquisition and relevant contextual frameworks.",
        },
        {
          question: "Strategies in Teaching Literacy in Schools",
          subanswer:
            "Code: D7-SIN-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module focuses on strategies for teaching literacy in primary schools, emphasising phonics, fluency, vocabulary, and comprehension. Student teachers gain the knowledge and skills to incorporate engaging activities, making literacy teaching and learning enjoyable and effective in primary classrooms.",
        },
      ],
    },
    {
      semester: "Semester 7 (Mathematics Specialisation)",
      courses: [
        {
          question: "Mathematical Applications for Teachers",
          subanswer:
            "Code: D7-MAT-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module prepares students for life, work, and further study in a world of continuous learning. It strengthens mathematical knowledge, skills, and concepts through practical, analytical, and problem-solving tasks, encouraging integration with other modules.",
        },
        {
          question: "Teaching School Mathematics",
          subanswer:
            "Code: D7-TSM-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module prepares student teachers for effective mathematics teaching at the primary school level. It emphasises creating a positive learning environment through concrete materials and real-world applications, enabling teachers to build learners’ strong foundation in number sense, place value, and problem-solving skills.",
        },
        {
          question: "The Use of Technology in Teaching Primary Mathematics",
          subanswer:
            "Code: D7-UTM-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module helps student teachers enhance the teaching and learning of primary school mathematics through technology, making concepts more engaging, visual, and interactive. It emphasises the need for 21st-century teachers to integrate technology for improved student engagement and teaching effectiveness.",
        },
        {
          question: "Calculus",
          subanswer:
            "Code: D8-CLS-25<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "This module introduces learners to differential calculus and its applications, with no prior knowledge required. Topics include functions and graphs, powers and roots, limits, rates of change, and derivatives. Learners apply differentiation rules, explore exponential and logarithmic functions, and use derivatives for graph sketching and optimisation.",
        },
      ],
    },
    {
      semester: " SEMESTER 7 ELECTIVE GROUP FIVE (CHOOSE ONE)	",
      courses: [
        {
          question: "Consultations in Schools and Community Settings",
          subanswer:
            "Code: D7-CSC-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module highlights the importance of school–community relations. It examines how counsellors or psychologists work with teachers and parents to address learner issues. Topics include consultation, consultative services, collaboration, and building partnerships between schools and communities to support student development and well-being.",
        },
        {
          question: "Theory of Moral Education",
          subanswer:
            "Code: D7-TME-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module examines the role of moral education in shaping learners’ character at the primary school level. Topics include morality in educational settings, moral formation, moral inquiries, moral education theories, and the overall importance of moral education.",
        },
        {
          question: "Scientific Basis of Coaching and Officiating",
          subanswer:
            "Code: D7-SBC-23<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This physical education module introduces student teachers to the theory and practice of physical activities and athletic performance. Topics include coaching, kinesiology, physiology, motor learning, sports psychology, cognitive science, psychology of officiating, ethics and integrity, communication, integration, and mental skills training.",
        },
      ],
    },

    //sub

    {
      semester: "Semester 8",
      courses: [
        {
          question: "Teaching Practice",
          subanswer:
            "Code: D7-TPC-23<br/>Prerequisite: 240 credits<br/>Module Fees: $780<br/>Module Credits: 60",
          answer:
            "This module provides student teachers with practical classroom experience, bridging theory and practice. It prepares them for the realities of teaching by building skills, confidence, and adaptability in real educational settings.",
        },
      ],
    },
  ],
  requirements: [
    {
      question: "Admission Requirements",
      answer:
        "IGCSE/equivalent with 5 Passes including English and Mathematics. Applicants in possession of a Diploma or Higher Diploma in related fields may be given exemptions based on the credit point equivalency.",
    },
    {
      question: "Technical Requirements",
      answer: `<div class="technical-requirements">


  <p>
  To ensure a smooth and effective learning experience, students enrolling in this programme must meet the following technical requirements:
  </p></br>
  <p><strong>Device Requirements:</strong></p> 
  <ul>
    <li>
      <p>Computer/Laptop:</p> Windows (10 or later) or Mac (macOS 10.15 or later); Processor: Intel i3 (or equivalent) and above; RAM: Minimum 4 GB (8 GB recommended for multitasking); Storage: Minimum 20 GB free space for coursework and downloads; Camera and Microphone: Built-in or external for live sessions and presentations.
    </li></br>
    <li><p>OR</p></li></br>
    <li>
      <p>Tablet/Smartphone:</p> Suitable for accessing content on the go (limited functionality for assignments/exams).
    </li>
  </ul></br>

  <p><strong>Internet Requirements: </strong></p>
  <ul>
    <li>
      Connection speed: Minimum 5 Mbps download and 2 Mbps upload (10 Mbps recommended for seamless video conferencing).
    </li>
    <li>
      Stable Wi-Fi or Ethernet connection recommended for live Zoom sessions.
    </li>
  </ul></br>

  <p><strong>Software and Platforms: </strong></p>
  <ul>
    <li>
      <p>Virtual Live Sessions: Zoom (Synchronous learning); Document Processing: Microsoft Office (Word, Excel, PowerPoint) or equivalent (Google Docs).</p>
    </li>
  </ul></br>

  <p><strong>Browser Requirements: </strong></p>
  <ul>
    <li>
      Supported browsers: Chrome (latest version), Safari (for Mac users); Cookies and JavaScript: Enabled for full Blackboard functionality.
    </li>
  </ul></br>

  <p><strong>Additional Tools: </strong>(Optional but Recommended)</p>
  <ul>
    <li>Headset: For clear audio during virtual classes.</li>
    <li>External storage (USB/Cloud): For backups of important coursework.</li>
    <li>Antivirus software: To protect against malware or data loss.</li>
  </ul>
</div>
`,
    },
  ],
  programOverview: `Ready to shape the future of education? Botho University's Bachelor of Education (Primary Education) programme is designed for aspiring and current educators, equipping you with essential skills and knowledge to excel. With specialised training in English language and Mathematics, this dynamic programme ensures you stay ahead, aligning with the latest policy initiatives on teacher retooling.<br></br>Whether you're just starting or enhancing your career, our comprehensive curriculum prepares you for success. Unlock exciting opportunities in education, social services, training, and research, empowering you to make a real impact on the next generation. Join us and become a leader in primary education!`,
};

export const postgraduatediplomainhighereducation = {
  heroContent: {
    question: "Post Graduate Diploma in Higher Education (PGDHE)",
    image: "/images/courses-images/PGDHE.png",
    downloadurl: `${baseUrl}PGDHE.pdf`,
    typicalfulltimestudyperiod: 1,
    // maxPeriod :2,
    programmeCredit: "$19.50",
    totalProgrammeCredit: 130,
    noOfModules: "9 (8 core + 1 elective)",
    totalFee: "$2,535.00",
    cta: true,
    timer: true,
    overview: true,
  },
  courseStruture: [
    {
      semester: "SEMESTER 1",
      courses: [
        {
          question: "Educational Foundations",
          subanswer:
            "Code: D8-FED-24<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module introduces the foundational areas of education—philosophy, psychology, sociology, and history—helping learners understand the key components that form the field of education.",
        },
        {
          question: "Pedagogics and Andragogics in Education",
          subanswer:
            "Code: D8-PAE-24<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module enables learners to identify student needs and integrate them into teaching, learning, and assessment. It offers general strategies relevant to supporting learners in higher education.",
        },
        {
          question: "Outcome-Based Assessment",
          subanswer:
            "Code: D9-OBA-25<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module teaches learners to plan, design, and administer outcome-based assessments using competency-based methods. It focuses on aligning assessments with programme learning outcomes to effectively measure student learning.",
        },
        {
          question: "Curriculum Design, Development and Review",
          subanswer:
            "Code: D8-CDR-24<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module explores historical, philosophical, economic, political, and sociological perspectives on curriculum design, development, implementation, and review. Learners will also apply contemporary and real-world educational issues across various themes.",
        },
        {
          question: "Introduction to Psychology of Education",
          subanswer:
            "Code: D8-PSE-25<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module equips learners with knowledge and skills in the psychology of education, child development, and learning psychology. It addresses diverse learning needs, focusing on how learners learn, effective instructional methods, learning environments, and the cognitive, emotional, and social influences on learning.",
        },
      ],
    },
    {
      semester: "SEMESTER 2",
      courses: [
        {
          question: "Integrating Technology into Curriculum",
          subanswer:
            "Code: D7-ITC-25<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module equips learners with the knowledge and skills to use technology effectively in teaching, learning, and assessment. It supports curriculum planning, delivery, and evaluation across face-to-face and online modes, enabling educators to develop e-learning content, provide learner support, assess progress, and manage academic tasks efficiently.",
        },
        {
          question: "Research Methods",
          subanswer:
            "Code: D8-REM-25<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module equips learners with lifelong research skills, fostering a commitment to continuous learning. It develops understanding of research principles, methods, and theories, and their impact on the research process, enabling learners to critically apply appropriate approaches throughout their academic and professional careers.",
        },
        {
          question: "Teaching Practicum",
          subanswer:
            "Code: D8-TPT-24<br/>Prerequisite: D8-PAE-24<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module offers learners the opportunity to apply principles of teaching, learning, and assessment in higher education. It provides hands-on experience to develop professional skills and create effective learning environments, fostering awareness of the roles and responsibilities involved in becoming a reflective and impactful educator.",
        },
      ],
    },
    {
      semester: "SEMESTER 2 ELECTIVE GROUP (CHOOSE ONE)",
      courses: [
        {
          question:
            "Understanding Student Diversity in Higher Education (Elective)",
          subanswer:
            "Code: D8-USD-24<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module promotes tolerance and a sense of security in diverse learning environments. It fosters intercultural sensitivity, helping learners navigate differences in culture, religion, race, gender, and more. Students gain improved cultural awareness, creativity, performance, and the ability to challenge prejudice and embrace diversity in educational and social settings.",
        },
        {
          question: "Leadership and Management in Higher Education (Elective)",
          subanswer:
            "Code: D8-LMH-24<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module provides learners with comprehensive knowledge of leadership and management in education. Aimed at aspiring leaders, it covers key areas such as innovation, educational technology, communication, conflict resolution, organisational culture, policy, inspection systems, and leadership philosophy, equipping learners for effective administration in academic settings.",
        },
        {
          question: "Context and Policy in Higher Education (Elective)",
          subanswer:
            "Code: D8-CPH-24<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module explores key education policy issues through historical, philosophical, economic, political, and sociological lenses. Students will analyse the development of education systems and debate education's role in society, enhancing their critical thinking and analytical skills in relation to education and policy.",
        },
      ],
    },
  ],
  requirements: [
    {
      question: "Admission Requirements",
      answer:
        "Bachelors or Honours Bachelors Degree from a recognised institution.",
    },
    {
      question: "Technical Requirements",
      answer: `<div class="technical-requirements">
  <p>
  To ensure a smooth and effective learning experience, students enrolling in this programme must meet the following technical requirements:
  </p></br>
  <p><strong>Device Requirements:</strong></p> 
  <ul>
    <li>
      <p>Computer/Laptop:</p> Windows (10 or later) or Mac (macOS 10.15 or later); Processor: Intel i3 (or equivalent) and above; RAM: Minimum 4 GB (8 GB recommended for multitasking); Storage: Minimum 20 GB free space for coursework and downloads; Camera and Microphone: Built-in or external for live sessions and presentations.
    </li></br>
    <li><p>OR</p></li></br>
    <li>
      <p>Tablet/Smartphone:</p> Suitable for accessing content on the go (limited functionality for assignments/exams).
    </li>
  </ul></br>

  <p><strong>Internet Requirements: </strong></p>
  <ul>
    <li>
      Connection speed: Minimum 5 Mbps download and 2 Mbps upload (10 Mbps recommended for seamless video conferencing).
    </li>
    <li>
      Stable Wi-Fi or Ethernet connection recommended for live Zoom sessions.
    </li>
  </ul></br>

  <p><strong>Software and Platforms: </strong></p>
  <ul>
    <li>
      <p>Virtual Live Sessions: Zoom (Synchronous learning); Document Processing: Microsoft Office (Word, Excel, PowerPoint) or equivalent (Google Docs).</p>
    </li>
  </ul></br>

  <p><strong>Browser Requirements: </strong></p>
  <ul>
    <li>
      Supported browsers: Chrome (latest version), Safari (for Mac users); Cookies and JavaScript: Enabled for full Blackboard functionality.
    </li>
  </ul></br>

  <p><strong>Additional Tools: </strong>(Optional but Recommended)</p>
  <ul>
    <li>Headset: For clear audio during virtual classes.</li>
    <li>External storage (USB/Cloud): For backups of important coursework.</li>
    <li>Antivirus software: To protect against malware or data loss.</li>
  </ul>
</div>
`,
    },
  ],
  programOverview: `Ready to advance your teaching career? Our Postgraduate Diploma in Higher Education (PGDHE) is a transformative one-year programme designed to equip you with advanced teaching skills, curriculum design expertise, and effective assessment strategies. You'll gain a deep understanding of pedagogy, assessment, moderation, and learner diversity.<br></br>With a mix of core and elective modules, you can tailor your learning. This hands-on qualification includes a practical teaching exercise, offering real-world experience. Delivered via Blended and Distance Learning, it's flexible for both national and international students. Enrol today and become a leader in higher education!`,
};

export const medinleadershipandmanagement = {
  heroContent: {
    question: "Master of Educational Leadership and Management",
    image: "/images/courses-images/Med in educational leadership and mgmt.jpeg",
    downloadurl: `${baseUrl}MasterOfEduLeadershipManagement.pdf`,
    typicalfulltimestudyperiod: 2,
    // maxPeriod: 4,
    programmeCredit: "$19.50",
    totalProgrammeCredit: 248,
    noOfModules: "14 (13 core + 1 elective)",
    totalFee: "$4836",
    cta: true,
    timer: true,
    overview: true,
  },
  courseStruture: [
    {
      semester: "Semester 1",
      courses: [
        {
          question: "Educational Leadership and Curriculum Development",
          subanswer:
            "Code: D8-ELC-25<br/>Module Fees: $234<br/>Module Credits: 12",
          answer:
            "This module provides an overview of educational leadership and curriculum development, examining their interrelationship. It equips learners with knowledge of leadership principles, curriculum design, and the ways in which effective leadership influences curriculum development and implementation to enhance educational practice and outcomes.",
        },
        {
          question: "Advanced Educational Technology",
          subanswer:
            "Code: D9-AET-25<br/>Module Fees: $234<br/>Module Credits: 12",
          answer:
            "This module equips learners to use technology effectively in designing, developing, planning, and evaluating e-learning activities. It also introduces the concepts of open, distance, and mobile learning, enabling learners to integrate educational technology into teaching practice and enhance the delivery of modern learning environments.",
        },
        {
          question: "Strategic Management in Education",
          subanswer:
            "Code: D8-SME-25<br/>Module Fees: $234<br/>Module Credits: 12",
          answer:
            "This module develops the knowledge, skills, and competencies required for strategic management in education. Learners will undertake in-depth strategic analysis of educational settings and organisations, applying management principles to enhance decision-making, leadership, and organisational performance within the educational context.",
        },
        {
          question: "Education Policy and Law",
          subanswer:
            "Code: D7-EPL-25<br/>Module Fees: $234<br/>Module Credits: 12",
          answer:
            "This module provides a conceptual and practical understanding of the linkages between education policy, planning, and legal processes. Learners will examine how policies are developed and implemented within legal frameworks, and how these processes shape decision-making, governance, and accountability in educational contexts.",
        },
        {
          question: "Educational Research",
          subanswer:
            "Code: D8-EDR-25<br/>Module Fees: $234<br/>Module Credits: 12",
          answer:
            "This module enables learners to connect theory and practice in educational leadership and management through research activities. It develops skills in designing and conducting research, analysing findings, and evaluating policy changes, fostering evidence-based decision-making within educational contexts.",
        },
      ],
    },
    {
      semester: "Semester 2",
      courses: [
        {
          question: "School Administration, Supervision, and Instruction",
          subanswer:
            "Code: D8-ASI-25<br/>Module Fees: $234<br/>Module Credits: 12",
          answer:
            "This module equips learners with the knowledge, skills, and competencies to promote effective school administration, supervision, and instructional practices. It focuses on leadership, management, and instructional support processes that strengthen accountability, efficiency, and quality teaching and learning within school environments.",
        },
        {
          question: "Educational Cost and Financial Analysis",
          subanswer:
            "Code: D8-ECF-25<br/>Module Fees: $234<br/>Module Credits: 12",
          answer:
            "This module equips learners with the knowledge, skills, and competencies required for financial management in education. It develops proficiency in analysing costs, budgets, and resource allocation, while fostering an understanding of the complex financial structures and dynamics that underpin effective management of educational organisations.",
        },
        {
          question: "Human Resources Administration in Education",
          subanswer:
            "Code: D9-HRA-23<br/>Module Fees: $234<br/>Module Credits: 12",
          answer:
            "This module provides learners with theoretical and practical knowledge of human resource administration in education. It covers recruitment, employee relations, staff training, development, retention, and compensation, equipping learners with the skills to manage personnel effectively and support the growth and sustainability of educational institutions.",
        },
        {
          question: "Research Proposal",
          subanswer:
            "Code: D9-RPL-25<br/>Prerequisite: D9-EDR-25<br/>Module Fees: $702<br/>Module Credits: 36",
          answer:
            "This module deepens learners’ understanding of educational research by integrating theoretical and practical perspectives. Learners are required to design and present a research proposal that demonstrates the application of research skills to improve teaching, learning, and wider educational practice, fostering professional growth and institutional development.",
        },
      ],
    },
    {
      semester: "Semester 3",
      courses: [
        {
          question: "Education Society and Community Relations",
          subanswer:
            "Code: D9-ESC-23<br/>Module Fees: $234<br/>Module Credits: 12",
          answer:
            "This module equips learners with the knowledge, skills, and competencies to build effective relationships between schools and communities. It emphasises the interdependence of education and society, demonstrating how strong school-community partnerships enhance educational quality and contribute to the holistic development of pupils, students, and the wider community.",
        },
        {
          question: "Quality Management in Education",
          subanswer:
            "Code: D9-QME-23<br/>Module Fees: $234<br/>Module Credits: 12",
          answer:
            "This module equips learners with the knowledge, skills, and competencies required for quality management in education. It explores principles and techniques for developing, improving, and maintaining the quality of educational processes, services, and products, enabling learners to apply quality assurance frameworks to enhance institutional effectiveness and performance.",
        },
        {
          question: "Dissertation 1",
          subanswer:
            "Code: D9-DI1-23<br/>Prerequisite: D9-RPL-25<br/>Module Fees: $468<br/>Module Credits: 24",
          answer:
            "This module builds on the research proposal, deepening learners’ understanding of educational research through theoretical and practical perspectives. Learners are required to review and analyse research findings, applying insights to improve teaching, learning, and wider educational practice, while strengthening their ability to engage critically with evidence.",
        },
      ],
    },
    {
      semester: "Semester 3 Elective Group (Choose One)",
      courses: [
        {
          question: "Decision Making in Secondary and Tertiary Institutions",
          subanswer:
            "Code: D9-DST-23<br/>Module Fees: $234<br/>Module Credits: 12",
          answer:
            "This module equips learners with the knowledge, skills, and competencies required for informed decision-making in secondary and tertiary institutions. It emphasises ethical and professional judgement, enabling educational leaders and decision-makers to apply structured approaches to problem-solving and policy implementation within diverse educational contexts.",
        },
        {
          question: "Education Reforms and Curriculum Development",
          subanswer:
            "Code: D9-ERC-23<br/>Module Fees: $234<br/>Module Credits: 12",
          answer:
            "This module equips learners with the knowledge and skills to analyse, design, and implement curriculum reforms and education policies. It examines the drivers of educational change, the processes of curriculum development, and the implications of reform, enabling learners to contribute to effective and sustainable improvements in education.",
        },
        {
          question: "Leadership and Management in Education",
          subanswer:
            "Code: D9-LME-23<br/>Module Fees: $234<br/>Module Credits: 12",
          answer:
            "This module equips learners with the knowledge, skills, and competencies required for effective leadership and management in education. It focuses on principles and practices that support sound decision-making, organisational improvement, and professional effectiveness in schools and educational institutions",
        },
      ],
    },
    {
      semester: "Semester 4",
      courses: [
        {
          question: "Dissertation 2",
          subanswer:
            "Code: D9-DI2-23<br/>Prerequisite: D9-DI1-23<br/>Module Fees: $1092<br/>Module Credits: 56",
          answer:
            "This module advances the work undertaken in Dissertation 1, enabling learners to apply theoretical and practical aspects of educational research. Learners are required to analyse research findings in depth and present a dissertation that contributes to improving teaching, learning, and wider educational practice.",
        },
      ],
    },
  ],
  requirements: [
    {
      question: "Admission Requirements",
      answer:
        "Bachelors or Honours Bachelors Degree from a recognised institution.",
    },

    {
      question: "Technical Requirements",
      answer: `<div class="technical-requirements">
  <p>
    To ensure a smooth and effective learning experience, students enrolling in this programme must meet the following technical requirements:
  </p></br>

  <p><strong>Device Requirements:</strong></p>
  <ul>
    <li>
      <p>Computer/Laptop:</p> Windows (10 or later) or Mac (macOS 10.15 or later); Processor: Intel i3 (or equivalent) and above; RAM: Minimum 4 GB (8 GB recommended for multitasking); Storage: Minimum 20 GB free space for coursework and downloads; Camera and Microphone: Built-in or external for live sessions and presentations.
    </li></br>
    <li><p>OR</p></li></br>
    <li>
      <p>Tablet/Smartphone:</p> Suitable for accessing content on the go (limited functionality for assignments/exams).
    </li>
  </ul>

  <p><strong>Internet Requirements: </strong></p>
  <ul>
    <li>
      Connection speed: Minimum 5 Mbps download and 2 Mbps upload (10 Mbps recommended for seamless video conferencing).
    </li>
    <li>
      Stable Wi-Fi or Ethernet connection recommended for live Zoom sessions.
    </li>
  </ul></br>

  <p><strong>Software and Platforms: </strong></p>
  <ul>
    <li>
      <p>Virtual Live Sessions: Zoom (Synchronous learning); Document Processing: Microsoft Office (Word, Excel, PowerPoint) or equivalent (Google Docs).</p>
    </li>
  </ul></br>

  <p><strong>Browser Requirements: </strong></p>
  <ul>
    <li>
      Supported browsers: Chrome (latest version), Safari (for Mac users); Cookies and JavaScript: Enabled for full Blackboard functionality.
    </li>
  </ul></br>

  <p><strong>Additional Tools: </strong>(Optional but Recommended)</p>
  <ul>
    <li>Headset: For clear audio during virtual classes.</li>
    <li>External storage (USB/Cloud): For backups of important coursework.</li>
    <li>Antivirus software: To protect against malware or data loss.</li>
  </ul></br>
</div>
`,
    },
  ],
  programOverview: ` Aspiring to lead in education? Our Master of Educational Leadership and Management is a prestigious programme designed to advance your career. You will develop advanced leadership, management, and strategic decision-making skills through a blend of core and elective modules.
<br><br/>
With a strong emphasis on research and innovation, the programme includes advanced training in research methodology and culminates in a dissertation. It is ideal for both national and international students seeking to enhance their expertise and make a lasting impact on the future of education`,
};

export const medincurriculumdesignandinstruction = {
  heroContent: {
    question: "Master of Education in Curriculum Design and Instruction",
    image: "/images/courses-images/Med in curriculum.jpeg",
    downloadurl: `${baseUrl}MasterOfCurriculumDesignDevp.pdf`,
    typicalfulltimestudyperiod: 2,
    // maxPeriod: 4,
    programmeCredit: "$19.50",
    totalProgrammeCredit: 240,
    noOfModules: "15 (12 core + 3 electives)",
    totalFee: "$4680",
    cta: true,
    timer: true,
    overview: true,
  },
  courseStruture: [
    {
      semester: "Semester 1",
      courses: [
        {
          question: "Learning, Teaching and Assessment",
          subanswer:
            "Code: D8-LTA-25<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module enables learners to develop the knowledge, skills, and competencies required to enhance teaching and assessment practices. It emphasises the application of effective approaches to curriculum development and instructional processes, supporting improved learning outcomes and professional practice in educational contexts.",
        },
        {
          question: "Theories of Curriculum Development",
          subanswer:
            "Code: D8-TCD-25<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module enables learners to familiarise themselves with key theories of curriculum development and instruction. It emphasises the application of these theories to learning and teaching processes, fostering an understanding of how theoretical perspectives inform curriculum design, implementation, and evaluation in educational practice.",
        },
        {
          question: "Computer Applications in Education",
          subanswer:
            "Code: D9-CAE-25<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module introduces fundamental concepts of information technology and their application in education. Learners will apply digital tools to support teaching and learning, collaborate effectively with stakeholders, and enhance research practices, thereby strengthening technological integration in educational contexts.",
        },
        {
          question: "Foundations of Curriculum Design and Development",
          subanswer:
            "Code: D8-FCD-25<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module introduces learners to the theoretical and practical foundations of curriculum design and development. As a core element of education, it emphasises the principles that guide curriculum construction and instruction, ensuring learners acquire the knowledge and skills necessary to engage effectively in curriculum planning and implementation.",
        },
        {
          question: "Instructional Strategies Using Internet",
          subanswer:
            "Code: D9-ISI-22<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module introduces instructional strategies for online learning, highlighting the flexibility it provides for learners to study at their own pace and in varied settings. It contrasts online learning with traditional face-to-face approaches, emphasising the opportunities for adaptable teaching and learning beyond rigid schedules.",
        },
      ],
    },
    {
      semester: "Semester 2",
      courses: [
        {
          question: "Curriculum Design and Development",
          subanswer:
            "Code: D9-CDD-22<br/>Prerequisite: D9-FCD-25<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module provides a critical understanding of the drivers, processes, and models of curriculum design and development. Learners will develop the competencies to critique, evaluate, design, and implement quality curricula, enabling them to apply curriculum development principles effectively in educational contexts.",
        },
        {
          question: "Research Methods",
          subanswer:
            "Code: D9-REM-22<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module develops learners’ ability to connect theory and practice in curriculum development and instruction through research activities. It also equips them to evaluate policy changes affecting education, fostering the skills required to design, conduct, and analyse research that informs curriculum practice and educational decision-making.",
        },
        {
          question: "Assessment and Moderation in Outcomes-Based Education",
          subanswer:
            "Code: D8-ABE-22<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module develops a critical understanding of assessment and moderation within Outcomes-Based Education (OBE). Learners will apply OBE principles to teaching, learning, and evaluation, gaining the knowledge and competencies required to implement effective assessment strategies and ensure quality assurance in contemporary educational practice.",
        },
      ],
    },
    {
      semester: "Semester 2 Elective Group (Choose One)",
      courses: [
        {
          question: "Learning Theories",
          subanswer:
            "Code: D9-LTH-22<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module introduces learning theories as frameworks that underpin teaching and learning. It enables learners to apply educational psychology principles to identify learning needs and adopt appropriate instructional practices. By engaging with major theoretical perspectives, learners develop informed approaches to enhance teaching effectiveness and student outcomes.",
        },
        // {
        //   question: "Virtual Learning in Instruction",
        //   subanswer:
        //     "Code: D9-VLI-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 10",
        //   answer:
        //     "This module provides a critical understanding of digital teaching and learning. It explores how to redesign content for virtual delivery and highlights the flexibility of online education. Learners examine the use of synchronous and asynchronous methods to support effective, accessible, and engaging learning for both educators and students.",
        // },
        {
          question: "Comparative Education",
          subanswer:
            "Code: D9-CED-22<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module equips learners with an understanding of educational concepts, systems in different countries, and the implementation of international standards. It emphasises comparative analysis, problem-solving, and the practical application of education to address global challenges, while highlighting its role in improving economic and social development.",
        },
      ],
    },
    {
      semester: "Semester 3",
      courses: [
        {
          question: "Designing and Maintaining E-Learning",
          subanswer:
            "Code: D9-DME-25<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module enables learners to apply technology effectively in designing, developing, planning, and evaluating e-learning activities. It introduces the concepts of open, distance, and mobile learning, equipping learners with the skills to integrate educational technology into teaching practice and enhance the delivery of flexible, technology-supported learning.",
        },
        {
          question: "Curriculum Evaluation",
          subanswer:
            "Code: D9-CEV-22<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module equips learners with the knowledge, skills, and competencies to evaluate curricula effectively. It focuses on assessing whether curriculum objectives are being achieved, fostering the ability to apply evaluation frameworks and methods that support continuous improvement in curriculum design, implementation, and educational outcomes.",
        },
        // {
        //   question: "Assessment and Moderation in Outcomes-based Education",
        //   subanswer:
        //     "Code: D9-ABE-22<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 10",
        //   answer:
        //     "This module enables learners to demonstrate a critical understanding of assessment and moderation within Outcomes Based Education (OBE). It equips them to apply OBE principles in teaching, learning, and evaluation, fostering competence in contemporary educational practice.",
        // },
        {
          question: "Dissertation 1",
          subanswer:
            "Code: D9-DI1-25<br/>Prerequisite: D9-REM-22<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module equips learners with the knowledge, skills, and competencies required to design and present a research proposal in education. It develops the ability to frame research questions, apply appropriate methodologies, and produce proposals that demonstrate academic rigour and potential impact on educational practice.",
        },
      ],
    },
    {
      semester: "Semester 4",
      courses: [
        {
          question: "Dissertation 2",
          subanswer:
            "Code: D9-DI2-25<br/>Prerequisite:D9-DI1-25<br/>Module Fees: $780<br/>Module Credits: 40",
          answer:
            "This module builds on Dissertation 1 by deepening learners’ understanding of educational research through both theoretical and practical engagement. Learners are required to analyse research findings and present a dissertation that demonstrates academic rigour while contributing to the improvement of teaching, research, and wider practices in education.",
        },
      ],
    },
    {
      semester: "Semester 4 Elective Group (Choose Two)",
      courses: [
        {
          question: "Contemporary Issues in Curriculum Development",
          subanswer:
            "Code: D9-CHD-25<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module enables learners to examine contemporary issues in higher education and strategies for addressing emerging challenges. It equips them with relevant professional knowledge while fostering the capacity to critically analyse and reflect on challenges and opportunities at both institutional and individual levels, promoting informed and responsive practice.",
        },
        {
          question: "Quality Frameworks in Education",
          subanswer:
            "Code: D9-QHE-25<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module provides a critical understanding of international quality assurance methodologies and their application in higher education. Learners will examine quality frameworks with particular reference to Botswana, developing the ability to contextualise local practices within broader international standards of quality assurance.",
        },
        {
          question: "Curriculum Analysis",
          subanswer:
            "Code: D9-CUA-25<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module equips learners with the knowledge, skills, and competencies required for effective curriculum analysis. It develops the ability to deconstruct curricula into their component parts, fostering a critical understanding of how each element contributes to overall design, implementation, and evaluation within educational contexts.",
        },
      ],
    },
  ],
  requirements: [
    {
      question: "Admission Requirements",
      answer:
        "Bachelors or Honours Bachelors Degree from a recognised institution.",
    },

    {
      question: "Technical Requirements",
      answer: `<div class="technical-requirements">
  <p>
    To ensure a smooth and effective learning experience, students enrolling in this programme must meet the following technical requirements:
  </p></br>

  <p><strong>Device Requirements:</strong></p>
  <ul>
    <li>
      <p>Computer/Laptop:</p> Windows (10 or later) or Mac (macOS 10.15 or later); Processor: Intel i3 (or equivalent) and above; RAM: Minimum 4 GB (8 GB recommended for multitasking); Storage: Minimum 20 GB free space for coursework and downloads; Camera and Microphone: Built-in or external for live sessions and presentations.
    </li></br>
    <li><p>OR</p></li></br>
    <li>
      <p>Tablet/Smartphone:</p> Suitable for accessing content on the go (limited functionality for assignments/exams).
    </li>
  </ul></br>

  <p><strong>Internet Requirements: </strong></p>
  <ul>
    <li>
      Connection speed: Minimum 5 Mbps download and 2 Mbps upload (10 Mbps recommended for seamless video conferencing).
    </li>
    <li>
      Stable Wi-Fi or Ethernet connection recommended for live Zoom sessions.
    </li>
  </ul></br>

  <p><strong>Software and Platforms: </strong></p>
  <ul>
    <li>
      <p>Virtual Live Sessions: Zoom (Synchronous learning); Document Processing: Microsoft Office (Word, Excel, PowerPoint) or equivalent (Google Docs).</p>
    </li>
  </ul></br>

  <p><strong>Browser Requirements: </strong></p>
  <ul>
    <li>
      Supported browsers: Chrome (latest version), Safari (for Mac users); Cookies and JavaScript: Enabled for full Blackboard functionality.
    </li>
  </ul></br>

  <p><strong>Additional Tools: </strong>(Optional but Recommended)</p>
  <ul>
    <li>Headset: For clear audio during virtual classes.</li>
    <li>External storage (USB/Cloud): For backups of important coursework.</li>
    <li>Antivirus software: To protect against malware or data loss.</li>
  </ul></br>
</div>
`,
    },
  ],
  programOverview: `Ready to lead in education and curriculum development? Our Master of Education in Curriculum Design and Instruction is your pathway to becoming an expert in shaping effective learning experiences. You will gain mastery in learning, teaching and assessment, curriculum theories, and practical approaches to curriculum design and development.<br></br>
This forward-looking programme also integrates technology through computer applications in education and internet-based instructional strategies, ensuring you are equipped for modern educational challenges. With research training and a dissertation, the programme prepares you to innovate, evaluate, and transform curricula, positioning you as a leader in education.`,
};

export const bscinnetworksecurityandcomputerforensics = {
  heroContent: {
    question: "BSc in Network Security and Computer Forensics",
    image: "/images/courses-images/BSc in network security.jpeg",
    downloadurl: `${baseUrl}BScInNetworkSecurityComputerForensics.pdf`,
    typicalfulltimestudyperiod: 4,
    // maxPeriod: 6,
    programmeCredit: "$13",
    totalProgrammeCredit: 480,
    noOfModules: "37 (35 core + 2 elective)",
    totalFee: "$6,240",
    cta: true,
    timer: true,
    overview: false,
  },
  courseStruture: [
    {
      semester: "Semester 1",
      courses: [
        {
          question: "Computer and its Essentials 1",
          subanswer:
            "Code: C5-CE1-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module provides a foundational understanding of computers and their essentials, covering basic functions, hardware and software components, and how they operate. It explores the history and evolution of computers and data processing. Students will learn about Microsoft Office, with an emphasis on Microsoft Word and PowerPoint. Through hands-on activities and assessments, learners will develop a comprehensive understanding of computer essentials.",
        },
        {
          question: "Programming Logic and Design",
          subanswer:
            "Code: C5-PLD-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module provides a foundation in programming principles, focusing on algorithm design, logical structures, and flowchart development. Students will learn problem-solving techniques essential for software development and cybersecurity applications. It covers key concepts such as variables, data types, control structures, and debugging, ensuring a solid understanding of programming fundamentals.",
        },
        {
          question: "Mathematics",
          subanswer:
            "Code: C5-MAT-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module covers essential mathematical concepts used in computing, including Boolean algebra, logic gates, number systems, and probability theory. Students will develop analytical skills necessary for network security, encryption, and algorithm design. The module also explores set theory, discrete mathematics, and binary arithmetic, providing a strong mathematical foundation for computing applications.",
        },
        {
          question: "Operating Systems and Hardware",
          subanswer:
            "Code: C5-OSH-11<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "Students will explore the fundamentals of operating systems, hardware configurations, and system management. The module covers key concepts such as process management, memory allocation, file systems, and security protocols. Through hands-on experience in managing system resources, virtualisation, and troubleshooting, students will develop practical skills essential for IT administration and cybersecurity.",
        },
        {
          question: "Professional Issues and Ethics",
          subanswer:
            "Code: C6-PIE-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module examines the ethical and legal issues in cybersecurity and computing, exploring topics such as data privacy, intellectual property rights, cybercrime laws, and professional responsibilities. Students will study cybersecurity policies, compliance regulations, and responsible digital practices, ensuring they develop ethical decision-making skills essential for technology and security professions.",
        },
      ],
    },
    {
      semester: "Semester 2",
      courses: [
        {
          question: "Networking Fundamentals",
          subanswer:
            "Code: C6-NEF-20<br/>Prerequisite: C5-CE1-20<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "This module provides an introduction to networking principles, covering network topology, protocols, IP addressing, and troubleshooting techniques. Students will explore key concepts such as LAN and WAN technologies, subnetting, routing, and network security fundamentals. This foundation prepares them for more advanced studies in networking, cybersecurity, and infrastructure management.",
        },
        {
          question: "Database Concepts",
          subanswer:
            "Code: C6-DBC-20<br/>Prerequisite: C6-CE2-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module explores the principles of database design, management, and security, covering data modelling, normalisation, and relational database concepts. Students will learn SQL for querying and managing data, as well as techniques for ensuring data integrity, access control, and protection against cyber threats, preparing them for database administration and security roles.",
        },
        {
          question: "Academic Writing for STEM",
          subanswer:
            "Code: D6-AWS-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This specialised module enhances research and technical writing skills, focusing on academic documentation, citation techniques, and effective communication in STEM disciplines. Students will develop proficiency in structuring research papers, analysing scientific literature, and presenting technical information clearly and concisely, preparing them for academic and professional writing in technology fields.",
        },
        {
          question: "Computer and its Essentials 2",
          subanswer:
            "Code: C6-CE2-20<br/>Prerequisite: C5-CE1-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module builds on foundational computing skills, equipping students with advanced capabilities in Microsoft Excel and Google collaboration tools. It covers key spreadsheet functionalities, including data organisation, advanced formulas, chart creation, and data analysis using pivot tables. Additionally, students will explore Google Docs, Spreadsheets, Forms, and Drive to enhance online collaboration and information sharing.",
        },
        {
          question: "Essentials of Linux",
          subanswer:
            "Code: C6-EOL-20<br/>Prerequisite: C5-OSH-11<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces Linux operating systems, focusing on essential command-line operations, system security, and user management. Students will explore file system structure, permissions, and process management while gaining hands-on experience with open-source networking tools. The module also covers system administration tasks, preparing students for careers in Linux-based environments and security.",
        },
      ],
    },
    {
      semester: "Semester 3",
      courses: [
        {
          question: "Computer Forensics",
          subanswer:
            "Code: C6-CFO-23<br/>Prerequisite: C5-OSH-11<br/>Co-requisite: C6-CFL-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "Students will learn forensic investigation techniques, data recovery methods, and evidence collection strategies essential for cybercrime investigations. The module covers digital evidence handling, forensic imaging, malware analysis, and incident response procedures. Through practical exercises, students will develop the skills needed to analyse cyber incidents and support legal proceedings in cybersecurity.",
        },
        {
          question: "Computer Forensics Lab",
          subanswer:
            "Code: C6-CFL-23<br/>Prerequisite: C5-OSH-11<br/>Co-requisite: C6-CFO-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This hands-on lab module provides practical experience in forensic investigation techniques, including disk imaging, data recovery, and malware analysis. Students will use industry-approved and standardised tools to examine digital evidence, detect security breaches, and analyse cyber threats. The module enhances critical thinking and technical skills essential for cybersecurity and forensic professionals.",
        },
        {
          question: "Programming Using C++",
          subanswer:
            "Code: C6-IPC-11<br/>Prerequisite: C5-PLD-20<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "This module introduces students to C++ programming, covering programming logic, object-oriented principles, and software development methodologies for cybersecurity applications. Students will learn about data structures, memory management, and algorithm design while developing secure and efficient code. Hands-on projects reinforce problem-solving skills essential for software development and cybersecurity solutions.",
        },

        {
          question: "Routing and Switching",
          subanswer:
            "Code: C6-RSW-20<br/>Prerequisite: C6-NEF-20<br/>Co-requisite: C6-RSL-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module covers network routing and switching principles, including VLANs, WAN, LAN, subnetting, and traffic management, essential for network security professionals. Students will learn to configure and troubleshoot network devices, implement security protocols, and optimise network performance. The module provides a strong foundation for designing, managing, and securing modern network infrastructures.",
        },
        {
          question: "Routing and Switching Lab",
          subanswer:
            "Code: C6-RSL-20<br/>Prerequisite: C6-NEF-20<br/>Co-requisite: C6-RSW-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This practical networking module focuses on configuring, securing, and troubleshooting network routers and switches in simulated environments. Students will gain hands-on experience using industry-standard Cisco software and hardware, learning essential skills in network administration, traffic management, and security implementation. The module prepares students for real-world networking challenges in cybersecurity and IT infrastructure.",
        },
      ],
    },

    {
      semester: "Semester 4",
      courses: [
        {
          question: "Scripting for Cyber Security",
          subanswer:
            "Code: C7-SCS-25<br/>Prerequisite: C6-IPC-11<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "Students will learn scripting techniques using Python, PowerShell, and Bash to automate security tasks such as threat detection, incident response, and vulnerability assessments. The module covers scripting fundamentals, regular expressions, and automation frameworks, equipping students with the skills to develop efficient security scripts and streamline cybersecurity operations.",
        },
        {
          question: "Principles of Cyber Security",
          subanswer:
            "Code: C6-PCS-25<br/>Prerequisite: C6-NEF-20<br/><br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "An introduction to core cybersecurity principles, including risk assessment, threat modelling, and security frameworks used to protect digital assets. Students will explore attack vectors, defensive strategies, and ethical considerations in cybersecurity. This module builds foundational knowledge essential for understanding cybersecurity threats, vulnerabilities, and best practices in securing systems.",
        },
        {
          question: "Operating System Forensics",
          subanswer:
            "Code: C6-OSF-23<br/>Prerequisite: C6-CFO-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module focuses on forensic techniques used to analyse and investigate security breaches within operating systems. Students will study file system analysis, memory forensics, log analysis, and malware detection. Practical exercises using forensic tools will enhance their ability to extract, preserve, and interpret digital evidence in cybercrime investigations.",
        },
        {
          question: "Network Security",
          subanswer:
            "Code: C6-NSE-20<br/>Prerequisite: C6-NEF-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "Students will explore network defence strategies, including firewall configurations, intrusion detection systems, and encryption protocols. The module covers key topics such as VPNs, security policies, and secure network design. Practical labs ensure students develop hands-on skills in detecting and mitigating network-based cyber threats and vulnerabilities.",
        },
        {
          question: "Wireless and Mobile Security",
          subanswer:
            "Code: C6-WMS-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module examines the security risks in wireless networks, mobile devices, and IoT environments. Topics include wireless encryption, authentication protocols, access control mechanisms, and mobile application security. Students will gain hands-on experience in securing wireless infrastructures, detecting vulnerabilities, and implementing security policies for mobile and IoT devices.",
        },
      ],
    },
    {
      semester: "Semester 5",
      courses: [
        {
          question: "Information and Data Security",
          subanswer:
            "Code: C7-IDS-23<br/>Prerequisite: C6-CFO-23, C6-CFL-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "Students will study data protection strategies, including access control models, cryptographic methods, and compliance with security standards. The module covers data classification, secure storage solutions, and identity management. Students will learn how to safeguard sensitive data against breaches, unauthorised access, and cyber threats in various computing environments.",
        },
        {
          question: "Ethical Hacking",
          subanswer:
            "Code: C7-EHK-13<br/>Prerequisite: C6-PCS-23<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "A hands-on module covering penetration testing techniques, vulnerability assessments, and ethical hacking methodologies to identify and mitigate security threats. Students will explore network scanning, exploitation techniques, and countermeasures. The module emphasises ethical considerations, legal implications, and responsible disclosure in conducting cybersecurity assessments and penetration testing engagements.",
        },
        {
          question: "Software Defined Network Engineering",
          subanswer:
            "Code: C7-SDN-20<br/>Prerequisite: C6-RSW-20, C6-RSL-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces software-defined networking (SDN) concepts, exploring network automation, virtualisation, and programmable network infrastructure. Students will learn about SDN controllers, network function virtualisation (NFV), and security challenges in SDN environments. Hands-on labs provide experience in deploying, managing, and securing SDN architectures in modern networks.",
        },
        {
          question: "Forensic Investigation Techniques",
          subanswer:
            "Code: C7-FIT-23<br/>Prerequisite: C6-OSF-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "Students will gain expertise in forensic methodologies, digital evidence handling, and cybercrime investigation frameworks. The module covers forensic imaging, log analysis, data recovery, and malware forensics. Practical exercises using industry-standard tools will enhance students’ ability to conduct forensic investigations and support legal proceedings in cybersecurity incidents.",
        },
        {
          question: "Cryptographic Techniques",
          subanswer:
            "Code: C7-CGT-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module covers encryption algorithms, key management, and secure communication techniques essential for cybersecurity professionals. Topics include symmetric and asymmetric encryption, digital signatures, and hashing techniques. Students will learn cryptographic protocols, secure data transmission methods, and cryptanalysis techniques used to protect and verify digital information.",
        },
      ],
    },
    {
      semester: "Semester 6",
      courses: [
        {
          question: "Research Methods for STEM",
          subanswer:
            "Code: C7-RMS-20<br/>Prerequisite: C5-MAT-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "An introduction to research methodologies, focusing on data analysis, hypothesis testing, and experimental design in computing and cybersecurity. Students will learn literature review techniques, research proposal development, and ethical considerations in research. This module prepares students for conducting independent studies and technical research in STEM fields.",
        },
        {
          question: "Malware Analysis",
          subanswer:
            "Code: C7-MAN-25<br/>Prerequisite: C6-NSE-20<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "Students will study malware behaviour, reverse engineering techniques, and threat intelligence analysis to combat cyber threats. The module covers static and dynamic malware analysis, sandboxing, and exploit detection. Practical labs provide experience in analysing real-world malware samples and developing strategies to mitigate and defend against cyberattacks.",
        },
        {
          question: "Advanced Ethical Hacking",
          subanswer:
            "Code: C7-AEH-23<br/>Prerequisite: C7-EHK-13<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "An advanced module that delves deeper into penetration testing, exploit development, and security bypass techniques. Students will explore buffer overflow attacks, privilege escalation, advanced reconnaissance, and post-exploitation tactics. Ethical and legal considerations are emphasised, ensuring students develop responsible hacking skills for cybersecurity defence.",
        },
        {
          question: "Mobile Forensics",
          subanswer:
            "Code: C7-MFO-20<br/>Prerequisite: C6-CFO-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module focuses on mobile device security, data extraction techniques, and forensic investigation of smartphones and tablets. Students will analyse mobile operating systems, encrypted communications, and deleted data recovery. Hands-on labs provide experience in using forensic tools to investigate mobile security incidents and cybercrime cases.",
        },
      ],
    },
    {
      semester: "Semester 6 Elective Group (Choose One)	",
      courses: [
        {
          question: "Internet of Things",
          subanswer:
            "Code: C7-IOT-23<br/>Prerequisite: C6-NEF-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module explores IoT security challenges, device vulnerabilities, and secure implementation strategies in interconnected environments. Students will study IoT architectures, network protocols, and attack surfaces in smart devices. Hands-on labs will provide experience in securing IoT ecosystems, detecting threats, and implementing best practices to mitigate cyber risks in IoT networks.",
        },
        {
          question: "Cloud Computing and Security",
          subanswer:
            "Code: C7-CCS-20<br/>Prerequisite: C6-NEF-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module explores the principles of cloud computing and its associated security challenges. Students will learn about cloud architectures, virtualisation, data protection strategies, and compliance with cloud security frameworks. The course also covers risk management, identity and access control, and best practices for securing cloud environments from cyber threats.",
        },
        {
          question: "Security by Design",
          subanswer:
            "Code: C7-SDE-20<br/>Prerequisite: C6-NSE-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module focuses on integrating security measures at the core of software and system development. Students will study secure coding principles, threat modelling, and vulnerability mitigation techniques. The module emphasises proactive security strategies, ensuring that applications and networks are resilient against cyber threats from the early stages of development.",
        },
      ],
    },
    {
      semester: "Semester 7",
      courses: [
        {
          question: "Cyber Crime Investigation",
          subanswer:
            "Code: C7-CCI-25<br/>Prerequisite: C7-FIT-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "Students will explore legal and investigative approaches to cybercrime, including fraud, identity theft, and digital evidence collection. The module covers case analysis, cyber laws, forensic reporting, and courtroom procedures. Practical exercises will enhance students’ ability to conduct cybercrime investigations and support law enforcement efforts.",
        },
        {
          question: "Research Project 1: Proposal Writing",
          subanswer:
            "Code: C7-RP1-20<br/>Prerequisite: C7-RMS-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "A preparatory module for research projects, where students develop research proposals and methodologies for cybersecurity topics. Students will learn academic writing, literature review techniques, and research design principles. This module ensures they are equipped to plan and justify their research effectively before conducting their studies.",
        },
        {
          question: "Cyber Law",
          subanswer:
            "Code: C7-CYL-23<br/>Prerequisite: C6-PCS-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module examines legal frameworks, data protection laws, and regulatory compliance in cybersecurity. Topics include intellectual property rights, cybercrime legislation, and digital privacy laws. Students will analyse case studies and learn how cybersecurity policies align with national and international legal standards.",
        },
        {
          question: "Entrepreneurship and Innovation",
          subanswer:
            "Code: B8-ENI-20<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "The purpose of this module is to equip students with the knowledge and skills necessary to understand entrepreneurial processes and behaviours. It explores the fundamentals of entrepreneurship, including the creation and development of business ideas, and the essential steps in crafting a comprehensive business plan for successful ventures.",
        },
      ],
    },
    {
      semester: "Semester 7 Elective Group (Choose One)",
      courses: [
        {
          question: "Media and Storage",
          subanswer:
            "Code: C8-MAS-20<br/>Prerequisite: C6-CFO-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module covers digital media storage technologies, data retention policies, and storage security. Students will explore topics such as file systems, disk encryption, cloud storage solutions, and secure data backup methodologies. Practical exercises will help students understand how to manage, protect, and recover digital assets efficiently and securely.",
        },
        {
          question: "Media Forensics",
          subanswer:
            "Code: C8-MEF-23<br/>Prerequisite: C6-CFO-23<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module focuses on the investigation and analysis of digital media, including images, videos, and audio files. Students will learn forensic techniques for detecting tampering, recovering deleted media, and verifying the authenticity of digital evidence. The module prepares students for forensic analysis roles in cybercrime investigations.",
        },
        {
          question: "Information Security Management and Governance",
          subanswer:
            "Code: C8-ISG-23<br/>Prerequisite: C6-PIE-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module provides a comprehensive understanding of information security policies, risk management, and compliance with cybersecurity regulations. Students will explore governance frameworks such as ISO 27001 and NIST, learning how to develop and implement security policies that align with organisational and legal requirements.",
        },
      ],
    },
    {
      semester: "Semester 8",
      courses: [
        {
          question: "Research Project 2: Dissertation",
          subanswer:
            "Code: C8-RP2-20<br/>Prerequisite: C7-RP1-20<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "A capstone project requiring students to conduct independent research, analyse cybersecurity challenges, and present findings. Students will apply research methodologies, collect data, and produce a well-structured dissertation. This module develops their analytical and problem-solving skills in addressing real-world cybersecurity issues.",
        },
        {
          question: "Professional Practice in Computing",
          subanswer:
            "Code: C7-PPC-20<br/>Prerequisite: 240 credits<br/>Module Fees: $520<br/>Module Credits: 40",
          answer:
            "A work-integrated learning module that provides students with industry exposure, project management skills, and hands-on cybersecurity experience. Students will work on real-world projects, collaborate with industry professionals, and develop technical and professional competencies essential for their careers in cybersecurity and computing.",
        },
      ],
    },
  ],
  requirements: [
    {
      question: "Admission Requirements",
      answer:
        "IGCSE/equivalent with 5 Passes including English and Mathematics. Applicants in possession of a Diploma or Higher Diploma in related fields may be given exemptions based on the credit point equivalency. ",
    },

    {
      question: "Technical Requirements",
      answer: `<div class="technical-requirements">
  <p>
  To ensure a smooth and effective learning experience, students enrolling in this programme must meet the following technical requirements:
  </p></br>
  <p><strong>Device Requirements:</strong></p> 
  <ul>
    <li>
      <p>Computer/Laptop:</p> Windows (10 or later) or Mac (macOS 10.15 or later); Processor: Intel i3 (or equivalent) and above; RAM: Minimum 4 GB (8 GB recommended for multitasking); Storage: Minimum 20 GB free space for coursework and downloads; Camera and Microphone: Built-in or external for live sessions and presentations.
    </li></br>
    <li><p>OR</p></li></br>
    <li>
      <p>Tablet/Smartphone:</p> Suitable for accessing content on the go (limited functionality for assignments/exams).
    </li>
  </ul></br>

  <p><strong>Internet Requirements: </strong></p>
  <ul>
    <li>
      Connection speed: Minimum 5 Mbps download and 2 Mbps upload (10 Mbps recommended for seamless video conferencing).
    </li>
    <li>
      Stable Wi-Fi or Ethernet connection recommended for live Zoom sessions.
    </li>
  </ul></br>

  <p><strong>Software and Platforms: </strong></p>
  <ul>
    <li>
      <p>Virtual Live Sessions: Zoom (Synchronous learning); Document Processing: Microsoft Office (Word, Excel, PowerPoint) or equivalent (Google Docs).</p>
    </li>
  </ul></br>

  <p><strong>Browser Requirements: </strong></p>
  <ul>
    <li>
      Supported browsers: Chrome (latest version), Safari (for Mac users); Cookies and JavaScript: Enabled for full Blackboard functionality.
    </li>
  </ul></br>

  <p><strong>Additional Tools: </strong>(Optional but Recommended)</p>
  <ul>
    <li>Headset: For clear audio during virtual classes.</li>
    <li>External storage (USB/Cloud): For backups of important coursework.</li>
    <li>Antivirus software: To protect against malware or data loss.</li>
  </ul></br>
</div>
`,
    },
  ],
  programOverview: `Interested in safeguarding digital systems and uncovering cybercrime? Our BSc in Network Security and Computer Forensics is a specialised degree designed to prepare students to protect information assets and investigate cyber incidents. The programme offers practical training in penetration testing, digital forensics, and network defence, combining fundamental computing with advanced security practices. <br></br>

Students will engage with key topics such as ethical hacking, cybercrime investigation, and malware analysis, while also developing a strong grounding in ethical and legal considerations. Graduates emerge ready for careers as network security specialists or digital forensic investigators in government, corporations, and law enforcement, addressing critical challenges in today’s digital world.`,
};
export const medinhighereducation = {
  heroContent: {
    question: "Masters of Education in Higher Education",
    image: "/images/courses-images/Med in higher education.jpeg",
    downloadurl: `${baseUrl}MedInHigherEducation.pdf`,
    typicalfulltimestudyperiod: 2,
    // maxPeriod: 4,
    programmeCredit: "$19.50",
    totalProgrammeCredit: 240,
    noOfModules: "12 (9 core + 3 elective)",
    totalFee: "$4,680",
    cta: true,
    timer: true,
    overview: false,
  },
  courseStruture: [
    {
      semester: "Semester 1",
      courses: [
        {
          question: "Learning, Teaching and Assessment",
          subanswer:
            "Code: D9-LTA-22<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module develops learners’ competence in effective teaching and assessment practices. It establishes a foundation in educational theories and principles, supporting their application across diverse learning environments. Learners examine classroom practice and align assessment methods with intended outcomes, ensuring constructive feedback that enhances teaching quality and student learning.",
        },
        {
          question: "Intergrated Foundations of Education",
          subanswer:
            "Code: D9-IFE-25<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module enables learners to appreciate the importance of educational foundations and their role in the teaching and learning process. It examines ideological, philosophical, psychological, sociological, and historical perspectives, highlighting their influence on educational aims and methods. Learners also analyse the interrelationship between education, culture, society, and psychology.",
        },
        // {
        //   question: "Research in Higher Education",
        //   subanswer:
        //     "Code: D9-RHE-24<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $390.00<br/>Module Credits: 20",
        //   answer:
        //     "This module equips a learner with lifelong research skills that will empower them to continually seek and apply new knowledge throughout their career.",
        // },
        {
          question: "Academic Writing",
          subanswer:
            "Code: D9-ACW-25<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module equips learners with the knowledge, skills, and competencies required for effective academic reading and writing in English. It develops the ability to interpret, structure, and produce academic work with clarity and precision, supporting learners in applying these skills for practical and scholarly purposes.",
        },
      ],
    },
    {
      semester: "Semester 2",
      courses: [
        {
          question: "Educational Technology and e-Learning",
          subanswer:
            "Code: D9-ETE-25<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module enables learners to use technology effectively in designing, developing, planning, and evaluating e-learning activities. It introduces the concepts of open, distance, and mobile learning, equipping learners with the skills to integrate educational technology into teaching and learning for enhanced accessibility and instructional effectiveness.",
        },
        {
          question: "Curriculum Design and Development",
          subanswer:
            "Code: D9-CDD-22<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module equips learners with a critical understanding of the drivers, processes, and models of curriculum design and development. It develops the competencies to critique, evaluate, and design curricula, enabling learners to apply principles of quality curriculum development effectively in educational contexts.",
        },
        {
          question: "Professional Academic in Action",
          subanswer:
            "Code: D9-PPA-24<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This teaching practice module enables student teachers to apply learning, teaching, and assessment in real classroom settings. It provides opportunities to put theory into practice, reflect on professional experiences, and develop the skills and confidence necessary to prepare for a successful career in teaching.",
        },
      ],
    },
    // {
    //   semester: "Semester 2 Elective Group One (Choose One)",
    //   courses: [
    //     {
    //       question: "Quality Framework in Higher Education",
    //       subanswer:
    //         "Code: D9-QHE-24<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195.00<br/>Module Credits: 10",
    //       answer:
    //         "This module aims to give tutors a critical understanding of international quality assurance methodologies, and the ability to place the Quality Frameworks in Botswana and Partner Institutions within this context; to enable tutors to understand the implications for curriculum design and delivery.",
    //     },
    //     {
    //       question: "Globalisation in Higher Education",
    //       subanswer:
    //         "Code: D9-GHE-24<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195.00<br/>Module Credits: 10",
    //       answer:
    //         "This module will expose the learner to issues of globalization in higher education and the strategies used by higher education institutions to respond to these. Students will study conceptual frameworks linking higher education institutions to economic competitiveness in a global economy and critically analyse recent national and international reports on this topic.",
    //     },
    //     {
    //       question: "Contemporary Issues in Higher Education",
    //       subanswer:
    //         "Code: D9-CHE-24<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195.00<br/>Module Credits: 10",
    //       answer:
    //         "The module will enable learners to explore the current issues affecting Higher Education and strategies of addressing the challenges. It is essential that learners will be equipped with salient professional knowledge of contemporary educational issues. In addition, analyse and critically reflect on the challenges and potentialities at institutional and individual levels.",
    //     },
    //   ],
    // },
    {
      semester: "Semester 3",
      courses: [
        {
          question: "Research in Higher Education",
          subanswer:
            "Code: D9-RHE-25<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module equips learners with lifelong research skills, enabling them to seek and apply new knowledge throughout their careers. As part of the module, learners are required to develop a research proposal that will form the foundation of their dissertation in the final semester.",
        },
        {
          question: "Assessment and Moderation in Outcomes-Based Education",
          subanswer:
            "Code:D9-ABE-25<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module develops a critical understanding of assessment and moderation within Outcomes-Based Education (OBE). Learners will apply OBE principles to teaching, learning, and evaluation, gaining the knowledge and competencies required to implement effective assessment strategies and ensure quality assurance in contemporary educational practice.",
        },
        // {
        //   question: "Assessment and Moderation in Outcomes-based Education",
        //   subanswer:
        //     "Code: D9-ABE-24<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $195<br/>Module Credits: 10",
        //   answer:
        //     "This module equips learners with theoretical and practical skills for conducting assessment and moderation based on Outcomes-Based Education (OBE). It emphasises learner-centred approaches, enabling educators to apply OBE principles effectively in teaching, learning, assessment, and moderation within educational institutions.",
        // },
      ],
    },
    {
      semester: "Semester 3 Elective Group (Choose Three)",
      courses: [
        {
          question: "Quality Framework in Higher Education",
          subanswer:
            "Code: D9-QHE-25<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module provides a critical understanding of international quality assurance methodologies and their application in higher education. Learners will examine quality frameworks with particular reference to Botswana, developing the ability to contextualise local practices within broader international standards of quality assurance.",
        },
        {
          question: "Globalisation in Higher Education",
          subanswer:
            "Code: D9-GHE-25<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module introduces learners to issues of globalisation in higher education and the strategies institutions adopt in response. It examines conceptual frameworks linking higher education to economic competitiveness in the global economy and requires learners to critically analyse recent national and international reports on the subject.",
        },
        {
          question: "Contemporary Issues in Higher Education",
          subanswer:
            "Code: D9-CHE-25<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module enables learners to examine contemporary issues in higher education and strategies for addressing emerging challenges. It equips them with relevant professional knowledge while fostering the capacity to critically analyse and reflect on challenges and opportunities at both institutional and individual levels, promoting informed and responsive practice.",
        },
        {
          question: "Governance and Management in Higher Education",
          subanswer:
            "Code: D9-GMH-25<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module familiarises learners with governance, leadership, and management structures in higher education institutions. It enhances understanding of the processes and systems through which such institutions are managed, equipping learners with the knowledge to support effective attainment of organisational goals and objectives.",
        },
        {
          question: "Organisational Development",
          subanswer:
            "Code: D9-ODE-25<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module introduces contemporary issues in organisational development, including organisational behaviour, individual dimensions, group dynamics, conflict resolution, negotiation, stress management, change leadership, decision-making, culture, and ethics. Learners develop the knowledge and skills to analyse and address these critical aspects, fostering effective practice in modern organisational contexts.",
        },
        {
          question: "Special Needs Education",
          subanswer:
            "Code: D9-SNE-25<br/>Module Fees: $195<br/>Module Credits: 10",
          answer:
            "This module equips learners with the knowledge, skills, and competencies to support students with special needs in higher education. It emphasises inclusive education principles, recognising individual differences, and promoting unity, equity, and democratic practice, thereby fostering effective teaching and learning in diverse educational settings.",
        },
      ],
    },
    {
      semester: "Semester 4",
      courses: [
        {
          question: "Dissertation",
          subanswer:
            "Code: D9-DIS-14<br/>Prerequisite: D9-RHE-25<br/>Module Fees: $1170<br/>Module Credits: 60",
          answer:
            "This module consolidates learners’ knowledge of educational research through theoretical and practical engagement. Learners are required to produce and present a full dissertation, demonstrating the ability to analyse research findings critically and apply them to improve teaching, learning, and wider practices in higher education.",
        },
      ],
    },
  ],

  requirements: [
    {
      question: "Admission Requirements",
      answer:
        "Bachelors or Honours Bachelors Degree from a recognised institution.",
    },

    {
      question: "Technical Requirements",
      answer: `<div class="technical-requirements">
  <p>
    To ensure a smooth and effective learning experience, students enrolling in this programme must meet the following technical requirements:
  </p></br>

  <p><strong>Device Requirements:</strong></p>
  <ul>
    <li>
      <p>Computer/Laptop:</p> Windows (10 or later) or Mac (macOS 10.15 or later); Processor: Intel i3 (or equivalent) and above; RAM: Minimum 4 GB (8 GB recommended for multitasking); Storage: Minimum 20 GB free space for coursework and downloads; Camera and Microphone: Built-in or external for live sessions and presentations.
    </li></br>
    <li><p>OR</p></li></br>
    <li>
      <p>Tablet/Smartphone:</p> Suitable for accessing content on the go (limited functionality for assignments/exams).
    </li>
  </ul></br>

  <p><strong>Internet Requirements: </strong></p>
  <ul>
    <li>
      Connection speed: Minimum 5 Mbps download and 2 Mbps upload (10 Mbps recommended for seamless video conferencing).
    </li>
    <li>
      Stable Wi-Fi or Ethernet connection recommended for live Zoom sessions.
    </li>
  </ul></br>

  <p><strong>Software and Platforms: </strong></p>
  <ul>
    <li>
      <p>Virtual Live Sessions: Zoom (Synchronous learning); Document Processing: Microsoft Office (Word, Excel, PowerPoint) or equivalent (Google Docs).</p>
    </li>
  </ul></br>

  <p><strong>Browser Requirements: </strong></p>
  <ul>
    <li>
      Supported browsers: Chrome (latest version), Safari (for Mac users); Cookies and JavaScript: Enabled for full Blackboard functionality.
    </li>
  </ul></br>

  <p><strong>Additional Tools: </strong>(Optional but Recommended)</p>
  <ul>
    <li>Headset: For clear audio during virtual classes.</li>
    <li>External storage (USB/Cloud): For backups of important coursework.</li>
    <li>Antivirus software: To protect against malware or data loss.</li>
  </ul></br>
</div>
`,
    },
  ],
  programOverview: `Elevate your expertise with our Master of Education in Higher Education. This specialised programme equips you with advanced pedagogical skills, covering learning, teaching and assessment, curriculum design, and academic writing. You will gain a deep understanding of quality frameworks in higher education while integrating educational technology and e-learning.<br></br>With a strong emphasis on research and practical experience, including modules on higher education research and a dissertation, the programme prepares you for leadership roles in universities and colleges, empowering you to shape the future of higher education.`,
};

export const masterofscienceininformationsystemsmanagement = {
  heroContent: {
    question: "MSc in Information Systems Management",
    image: "/images/courses-images/Msc in Information Systems management.jpeg",
    downloadurl: `${baseUrl}MScInInformationSysMgmt.pdf`,
    typicalfulltimestudyperiod: 2,
    // maxPeriod: 4,
    programmeCredit: "$19.50",
    totalProgrammeCredit: 240,
    noOfModules: "10 (8 core + 2 elective)",
    totalFee: "$4,680",
    cta: true,
    timer: true,
    overview: false,
  },
  courseStruture: [
    {
      semester: "Semester 1",
      courses: [
        {
          question: "Big Data Management",
          subanswer:
            "Code: C9-BDM-22<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module provides a broad understanding of big data and technologies used in managing urban data. Topics include big data ecosystems, parallel programming, MapReduce, Hadoop, Spark, Pig, and NoSQL solutions. Students will develop analytical solutions and gain hands-on experience with Apache Spark and Hadoop.",
        },
        {
          question: "System Development Management and Governance",
          subanswer:
            "Code: C9-SDG-22<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module examines the link between governance and sustainable development, focusing on stakeholder involvement in policy processes. Students will explore governance complexities, sustainable development goals, and policy-making, while developing analytical and problem-solving skills, and effectively using online platforms for communication and knowledge exchange.",
        },
      ],
    },
    {
      semester: "Semester 1 Elective Group One (Choose One)",
      courses: [
        {
          question: "Infrastructure Management",
          subanswer:
            "Code: C9-IFM-22<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module provides students with knowledge of IT infrastructure management, focusing on storage, security, and service delivery. Students will analyse security practices, threats, and challenges in IT, understand IT ethics, and explore emerging trends in the IT sector to manage infrastructure effectively.",
        },
        {
          question: "ICT Strategic Management",
          subanswer:
            "Code: C9-ICM-22<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module covers strategic IT management, including infrastructure, service delivery, security, and emerging trends. Students will learn to align IT with organisational goals, develop IT strategies, assess current systems, and recommend improvements, while addressing key future IT management issues.",
        },
      ],
    },
    {
      semester: "Semester 2",
      courses: [
        {
          question: "Information Security Management",
          subanswer:
            "Code: C9-ISM-15<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module focuses on information security threats and countermeasures, covering key concepts, technologies, and management techniques. Students will gain practical experience in penetration testing, incident response, and cybercrime investigation, learning to secure information systems, detect vulnerabilities, and implement security measures like firewalls and intrusion prevention systems.",
        },
        {
          question: "ICT Project Management",
          subanswer:
            "Code: C9-IPM-22<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module equips students with advanced project management skills, focusing on software/IT project activities, risk management, scheduling, quality control, and resource allocation. Students will learn to apply methodologies, estimate costs, and manage software projects effectively while developing interpersonal skills for teamwork and achieving organisational goals.",
        },
      ],
    },
    {
      semester: "Semester 2 Elective Group One (Choose One)",
      courses: [
        {
          question: "Content Management Systems",
          subanswer:
            "Code: C9-CMS-22<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module introduces students to content management systems (CMS), focusing on WordPress, Drupal, and Joomla. Students will learn the differences between CMS and static websites, explore server-side databases, create and deploy CMS websites, and understand maintenance considerations, content creation, and custom template development.",
        },
        {
          question: "Data Analytics",
          subanswer:
            "Code: C9-DAN-22<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module focuses on developing the skills to make informed decisions using data analytics. Students will apply various data analytics techniques, from descriptive to predictive analytics, to real business problems and learn how to prepare data for effective analysis and communication of results.",
        },
      ],
    },
    {
      semester: "Semester 3",
      courses: [
        {
          question: "Principles of Information Technology Management",
          subanswer:
            "Code: C9-PIM-22<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module focuses on management decisions in single and multi-user systems, network architecture, database management, and software development. Students will evaluate interdisciplinary management concepts, assess the role of information systems in organisations, and demonstrate proficiency in solving business problems using software applications.",
        },
        {
          question: "Management Information Systems",
          subanswer:
            "Code: C9-MIS-22<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module introduces Management Information Systems (MIS), focusing on techniques for managing IT opportunities to enhance organisational competitiveness. Students will learn to identify key aspects, classifications, and types of MIS, data warehousing, data mining, and planning enterprise resource systems for effective IT project management.",
        },
        {
          question: "Research Project 1: Proposal Writing",
          subanswer:
            "Code: C9-RP1-25<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module provides students with a solid understanding of research methodologies, theory, and processes. Students will learn to plan, design, and manage research projects, select appropriate research methods, critically review literature, consider ethical issues, and effectively write research proposals and dissertations.",
        },
      ],
    },
    {
      semester: "Semester 4",
      courses: [
        {
          question: "Research Project 2: Dissertation",
          subanswer:
            "Code: C9-RP2-25<br/>Prerequisite: C9-RP1-25<br/>Module Fees: $1170<br/>Module Credits: 60",
          answer:
            "This module enables students to undertake individual computer science projects, with supervision, covering various areas like system management. Students will investigate problems, design solutions, manage risks, implement and test solutions, evaluate research, and produce a dissertation. The project may be industry-based with formal presentations.",
        },
      ],
    },
  ],
  requirements: [
    {
      question: "Admission Requirements",
      answer:
        "Bachelors or Honours Bachelors Degree from a recognised institution in Computing/Computer Science/Information Technology or any computer field.",
    },

    {
      question: "Technical Requirements",
      answer: `<div class="technical-requirements">
  <p>
    To ensure a smooth and effective learning experience, students enrolling in this programme must meet the following technical requirements:
  </p></br>

  <p><strong>Device Requirements:</strong></p>
  <ul>
    <li>
      <p>Computer/Laptop:</p> Windows (10 or later) or Mac (macOS 10.15 or later); Processor: Intel i3 (or equivalent) and above; RAM: Minimum 4 GB (8 GB recommended for multitasking); Storage: Minimum 20 GB free space for coursework and downloads; Camera and Microphone: Built-in or external for live sessions and presentations.
    </li></br>
    <li><p>OR</p></li></br>
    <li>
      <p>Tablet/Smartphone:</p> Suitable for accessing content on the go (limited functionality for assignments/exams).
    </li>
  </ul></br>

  <p><strong>Internet Requirements: </strong></p>
  <ul>
    <li>
      Connection speed: Minimum 5 Mbps download and 2 Mbps upload (10 Mbps recommended for seamless video conferencing).
    </li>
    <li>
      Stable Wi-Fi or Ethernet connection recommended for live Zoom sessions.
    </li>
  </ul></br>

  <p><strong>Software and Platforms: </strong></p>
  <ul>
    <li>
      <p>Virtual Live Sessions: Zoom (Synchronous learning); Document Processing: Microsoft Office (Word, Excel, PowerPoint) or equivalent (Google Docs).</p>
    </li>
  </ul></br>

  <p><strong>Browser Requirements: </strong></p>
  <ul>
    <li>
      Supported browsers: Chrome (latest version), Safari (for Mac users); Cookies and JavaScript: Enabled for full Blackboard functionality.
    </li>
  </ul></br>

  <p><strong>Additional Tools: </strong>(Optional but Recommended)</p>
  <ul>
    <li>Headset: For clear audio during virtual classes.</li>
    <li>External storage (USB/Cloud): For backups of important coursework.</li>
    <li>Antivirus software: To protect against malware or data loss.</li>
  </ul></br>
</div>
`,
    },
  ],
  programOverview: `Interested in safeguarding digital systems and uncovering cybercrime? Our BSc in Network Security and Computer Forensics is a specialised degree designed to prepare students to protect information assets and investigate cyber incidents. The programme offers practical training in penetration testing, digital forensics, and network defence, combining fundamental computing with advanced security practices.<br></br> Students will engage with key topics such as ethical hacking, cybercrime investigation, and malware analysis, while also developing a strong grounding in ethical and legal considerations. Graduates emerge ready for careers as network security specialists or digital forensic investigators in government, corporations, and law enforcement, addressing critical challenges in today’s digital world.`,
};

export const mscincomputerscience = {
  heroContent: {
    question: "Master of Science in Computer Science",
    image: "/images/courses-images/Msc in computer science.jpeg",
    downloadurl: `${baseUrl}MScInComputerScience.pdf`,
    typicalfulltimestudyperiod: 2,
    // maxPeriod: 4,
    programmeCredit: "$19.50",
    totalProgrammeCredit: 240,
    noOfModules: "9 (7 core + 2 elective)",
    totalFee: "$4,680",
    cta: true,
    timer: true,
    overview: false,
  },
  courseStruture: [
    {
      semester: "Semester 1",
      courses: [
        {
          question: "Algorithms and Data Structures",
          subanswer:
            "Code: C9-ADS-24<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $390<br/>Module Credits: 20",
          answer:
            "This module enhances students' problem-solving abilities by introducing key algorithms and data structures. It empowers students to solve simple problems, apply advanced techniques, and improve their programming skills. Students will evaluate algorithms, analyse time and space complexities, and select appropriate data structures to design solutions for various problems.",
        },
        {
          question: "Object Oriented Software Engineering",
          subanswer:
            "Code: C9-OSE-25<br/>Module Fees: $312<br/>Module Credits: 16",
          answer:
            "This module equips students with the skills to manage software projects and develop systems using object-oriented methods. Students will learn key concepts and techniques for system design and program implementation using rapid application development tools and designing graphical user interfaces to create, test, and implement software solutions.",
        },
        {
          question: "Operating Systems",
          subanswer:
            "Code: C9-OPS-25<br/>Module Fees: $312<br/>Module Credits: 16",
          answer:
            "This module reviews the design, implementation, and functioning of operating systems. It explores the principles behind centralised and distributed systems, focusing on real-world applications. Students will understand the structure and functions of operating systems, analysing requirements for specific scenarios and relating system functions to machine architecture",
        },
      ],
    },
    {
      semester: "Semester 1 Elective Group (Choose One)",
      courses: [
        {
          question: "Machine Learning",
          subanswer:
            "Code: C9-MLE-25<br/>Module Fees: $234<br/>Module Credits: 12",
          answer:
            "This module provides an in-depth introduction to supervised and unsupervised machine learning, covering key models and algorithms for regression, classification, clustering, and probabilistic classification. Students will critically evaluate approaches, understand applications, design machine learning systems, apply problem-solving techniques, and develop skills for further research in the field.",
        },
        {
          question: "Web Engineering",
          subanswer:
            "Code: C9-WEN-25<br/>Module Fees: $234<br/>Module Credits: 12",
          answer:
            "This module provides hands-on experience in designing and developing internet-based applications. Students will learn internet architecture, HTML, CSS, JavaScript, server-side development, XML concepts, and web services. By completion, they will gain practical skills in building web applications and writing programs for front-end and back-end development.",
        },
      ],
    },
    {
      semester: "Semester 2",
      courses: [
        {
          question: "Data Warehousing",
          subanswer:
            "Code:C9-DWH-25<br/>Module Fees: $312<br/>Module Credits: 16",
          answer:
            "This module covers key concepts and components of data warehousing techniques and applications. Students will gain in-depth knowledge of data warehousing, including design methodologies, OLAP techniques, and development. They will design, implement, and evaluate data warehousing applications, analysing and applying core concepts for effective data management and analysis.",
        },
        {
          question: "Computing Research Methods",
          subanswer:
            "Code: C9-CRM-25<br/>Module Fees: $312<br/>Module Credits: 16",
          answer:
            "Computing Research Methods explore systematic approaches to investigating computational problems, developing algorithms, and evaluating systems. It includes qualitative and quantitative techniques, experimental design, data analysis, and simulation. These methods ensure rigour in software engineering, AI, cybersecurity, and more, driving innovation and advancing knowledge in computer science and information technology.",
        },
        {
          question: "Computer Networking and Communications",
          subanswer:
            "Code: C9-CNC-25<br/>Module Fees: $312<br/>Module Credits: 16",
          answer:
            "This module introduces the principles of structured networks and future challenges for network designers. It covers network protocols, internet technologies, and data communications. Students will explore familiar concepts like the web and email before studying more complex networking aspects, including LAN, WAN, MAN, and network security.",
        },
      ],
    },
    {
      semester: "Semester 2 Elective Group (Choose One)",
      courses: [
        {
          question: "Grid Computing Systems",
          subanswer:
            "Code: C9-GCS-25<br/>Module Fees: $234<br/>Module Credits: 12",
          answer:
            "This course explores advanced distributed computing, focusing on service-oriented systems like Grid Computing. Students will learn technologies, architectures, and applications, including cluster and data grids. It covers IT infrastructure, business value, middleware, and grid-enabled services, equipping students to design, develop, and implement grid computing models and applications.",
        },
        {
          question: "Information Retrieval",
          subanswer:
            "Code: C9-INR-25<br/>Module Fees: $234<br/>Module Credits: 12",
          answer:
            "This module introduces students to information retrieval systems, focusing on retrieving the best possible information for user queries. It covers key algorithms, evaluation methods, probabilistic retrieval, ranking principles, and real-world applications in web search and recommendation systems, along with emerging topics like MapReduce, portfolio retrieval, and online advertising.",
        },
      ],
    },

    {
      semester: "Semester 3 (One Year)",
      courses: [
        {
          question: "Supervised Research and Dissertation",
          subanswer:
            "Code: C9-SRD-25<br/>Prerequisite: C9-CRM-25<br/>Module Fees: $2340<br/>Module Credits: 120",
          answer:
            "This module involves independent, in-depth study under expert guidance, culminating in a scholarly thesis. It includes topic selection, literature review, methodology development, data analysis, and findings presentation. This process hones critical thinking, research skills, and subject expertise, contributing original knowledge to the academic and professional fields.",
        },
      ],
    },
  ],
  requirements: [
    {
      question: "Admission Requirements",
      answer:
        "Bachelors or Honours Bachelors Degree from a recognised institution",
    },

    {
      question: "Technical Requirements",
      answer: `<div class="technical-requirements">
  <p>
    To ensure a smooth and effective learning experience, students enrolling in this programme must meet the following technical requirements:
  </p></br>

  <p><strong>Device Requirements:</strong></p>
  <ul>
    <li>
      <p>Computer/Laptop:</p> Windows (10 or later) or Mac (macOS 10.15 or later); Processor: Intel i3 (or equivalent) and above; RAM: Minimum 4 GB (8 GB recommended for multitasking); Storage: Minimum 20 GB free space for coursework and downloads; Camera and Microphone: Built-in or external for live sessions and presentations.
    </li></br>
    <li><p>OR</p></li></br>
    <li>
      <p>Tablet/Smartphone:</p> Suitable for accessing content on the go (limited functionality for assignments/exams).
    </li>
  </ul></br>

  <p><strong>Internet Requirements: </strong></p>
  <ul>
    <li>
      Connection speed: Minimum 5 Mbps download and 2 Mbps upload (10 Mbps recommended for seamless video conferencing).
    </li>
    <li>
      Stable Wi-Fi or Ethernet connection recommended for live Zoom sessions.
    </li>
  </ul></br>

  <p><strong>Software and Platforms: </strong></p>
  <ul>
    <li>
      <p>Virtual Live Sessions: Zoom (Synchronous learning); Document Processing: Microsoft Office (Word, Excel, PowerPoint) or equivalent (Google Docs).</p>
    </li>
  </ul></br>

  <p><strong>Browser Requirements: </strong></p>
  <ul>
    <li>
      Supported browsers: Chrome (latest version), Safari (for Mac users); Cookies and JavaScript: Enabled for full Blackboard functionality.
    </li>
  </ul></br>

  <p><strong>Additional Tools: </strong>(Optional but Recommended)</p>
  <ul>
    <li>Headset: For clear audio during virtual classes.</li>
    <li>External storage (USB/Cloud): For backups of important coursework.</li>
    <li>Antivirus software: To protect against malware or data loss.</li>
  </ul></br>
</div>
`,
    },
  ],
  programOverview: `Aspiring to excel in the tech industry? Our Master of Science in Computer Science is an advanced, flexible programme designed to strengthen both technical expertise and analytical capability. It covers core computing principles alongside advanced topics such as software development, data analysis, artificial intelligence, and cybersecurity.<br><br/> Students gain practical experience with industry-standard tools, mastering algorithms, software engineering, and secure system design. The programme builds strong critical thinking and problem-solving skills, preparing graduates to create scalable solutions and address ethical challenges. Career opportunities include roles in software engineering, data science, and cybersecurity, with the potential to drive innovation in the digital era.`,
};

export const bcominaccounting = {
  heroContent: {
    question: "BCom in Accounting",
    image: "/images/courses-images/Bcom in accounting.jpeg",
    downloadurl: `${baseUrl}BComAccounting.pdf`,
    typicalfulltimestudyperiod: 4,
    // maxPeriod: 6,
    programmeCredit: "$13",
    totalProgrammeCredit: 480,
    noOfModules: "38 (37 Core and 1 Elective)",
    totalFee: "$6,240",
    cta: true,
    timer: true,
    overview: false,
  },
  courseStruture: [
    {
      semester: "Semester 1",
      courses: [
        {
          question: "Introduction to MS Office",
          subanswer:
            "Code: C5-IMO-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module equips students with essential digital skills for academic, professional, and personal productivity. It provides practical experience with Microsoft Office applications, fostering proficiency in word processing, spreadsheets, presentations, database management, and email communication to build a strong foundation for effective digital engagement.",
        },
        {
          question: "Academic Writing for Business",
          subanswer:
            "Code: D5-AWB-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module develops essential academic writing skills, emphasising paragraph structure, thesis statements, and coherent argumentation. It addresses plagiarism, its implications, and strategies for avoidance. Students also gain competence in referencing, citation techniques, resource evaluation, and the use of tools such as Mendeley to uphold academic integrity.",
        },
        {
          question: "Business Mathematics and Statistics 1 ",
          subanswer:
            "Code: B5-BS1-17<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces fundamental mathematical concepts such as fractions, percentages, algebra, and their applications in business. It covers basic statistics, including data organisation, measures of central tendency, dispersion, and spreadsheet analysis. Probability concepts, including axioms, distributions, and the standard normal curve, are examined to strengthen quantitative decision-making skills.",
        },
        {
          question: "Legal Aspects of Business",
          subanswer:
            "Code: B5-LAB-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces the origins of law and the structure of legal systems, with particular reference to Botswana. It examines both criminal and civil law and explores key areas such as contracts, sales, leases, credit agreements, insurance, agency, employment, intellectual property, negotiable instruments, and business enterprises, providing essential legal foundations.",
        },
        {
          question: "Fundamentals of Business and Finance",
          subanswer:
            "Code: A5-FBF-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces fundamental concepts in business and finance, covering management, organisational structures, strategy, risk management, corporate governance, and financial information. It also explores personal finance, the role of professional accountants, and the influence of economic factors on business operations, equipping students with essential knowledge for informed decision-making.",
        },
        {
          question: "Business Management 1",
          subanswer:
            "Code: B5-BM1-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces business management as a discipline, addressing core concepts, economic systems, and stakeholder roles. It examines the business environment, management functions, and key areas including operations, finance, human resources, and marketing. Leadership principles and theories are explored to build a foundation for sound business strategy and decision-making.",
        },
      ],
    },
    {
      semester: "Semester 2",
      courses: [
        {
          question: "Principles of Marketing",
          subanswer:
            "Code: B5-PMK-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces the fundamentals of marketing, covering the 7 P’s, consumer behaviour, and decision-making processes. It examines market research, segmentation, and targeting strategies, alongside product development, pricing, and promotion. Students gain essential skills to apply marketing principles effectively in dynamic and competitive business environments.",
        },
        {
          question: "Business Mathametics and Statistics 2",
          subanswer:
            "Code: B6-BS2-21<br/>Prerequisite: B5-BS1-17<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module develops essential mathematical skills through topics such as quadratic equations, functions, differentiation, and integration. It introduces statistical concepts including sampling distributions, confidence intervals, hypothesis testing, and chi-square tests, while also covering regression analysis, decision theory, and time series forecasting to support data-driven decision-making in business and research.",
        },
        {
          question: "Introduction to Financial Accounting",
          subanswer:
            "Code: A6-IFA-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces the principles of accounting within its conceptual and regulatory framework. It covers accounting systems, ledger maintenance, trial balances, bank reconciliations, and control accounts. Students will develop the ability to prepare financial statements for various entities, including sole traders, partnerships, companies, and unincorporated organisations, alongside manufacturing accounts and cash flow statements.",
        },
        {
          question: "Business Ethics and Assurance",
          subanswer:
            "Code: A6-BEA-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "TThis module examines the role of external auditing within its regulatory framework, emphasising fraud detection and reporting responsibilities. It covers pre-audit investigations, audit planning, risk assessment, materiality, and auditors’ legal liability. The module also distinguishes financial statement audits from the assurance of sustainability reports, highlighting emerging professional responsibilities.",
        },
        {
          question: "Business Management 2",
          subanswer:
            "Code: B6-BM2-20<br/>Prerequisite: B5-BM1-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module provides a foundation in management principles, addressing managerial roles, strategic planning, decision-making, and organisational structures. It explores human resource management, change management, diversity, and logistics. Emphasis is placed on adapting to environmental shifts, utilising information systems, and developing skills for sustainable competitive advantage in contemporary business contexts.",
        },
        {
          question: "Computerised Accounting 1",
          subanswer:
            "Code: A6-CP1-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces computerised accounting systems, focusing on transaction processing and enterprise resource planning (ERP). It addresses cybercrime, fraud prevention, security controls, and auditing of technology-based systems. Revenue and expenditure cycles, together with system development, analysis, design, and implementation, are also examined.",
        },
      ],
    },
    {
      semester: "Semester 3",
      courses: [
        {
          question: "Taxation 1",
          subanswer:
            "Code: A6-TA1-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module provides an understanding of taxation systems with particular reference to Botswana. It examines different types of taxes, principal tax laws, and taxpayer obligations. Key areas include tax procedures, objections and appeals, withholding taxes, gross income, deductions, employment income, capital allowances, and taxable income for individuals, sole traders, and partnerships.",
        },
        {
          question: "Micreconomics",
          subanswer:
            "Code: B6-MIE-17<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces key economic principles, including scarcity, choice, and the functioning of economic systems. It examines demand and supply, market equilibrium, and elasticity, alongside firm behaviour, production costs, and market structures. Externalities, public goods, and income distribution are also addressed, offering insights into economic decision-making and policy development.",
        },
        {
          question: "Cost Accounting",
          subanswer:
            "Code: A6-COA-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces key costing principles, including cost behaviour, classification, and the accounting of materials and labour. It covers inventory valuation, overhead allocation, marginal and absorption costing, as well as job, batch, and process costing. Cost-volume-profit analysis, standard costing, variance analysis, and budgeting are also examined to support effective cost control.",
        },
        {
          question: "Computerised Accounting 2",
          subanswer:
            "Code: A7-CP2-25<br/>Prerequisite: A6-CP1-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module provides practical training in computerised accounting systems, focusing on company setup, system navigation, and core functionalities. It covers customer and supplier account management, inventory and general ledger configuration, and financial transaction processing. Emphasis is placed on error correction, automated invoicing, financial reporting, and bank reconciliations to improve efficiency and accuracy.",
        },
        {
          question: "Corporate Administration 1",
          subanswer:
            "Code: A6-CA1-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module examines strategic and functional administration with an emphasis on corporate governance, organisational hierarchies, and best practices. It explores information management, confidentiality within legal frameworks, and the influence of technological advancements. Human resource functions, employer–employee relations, and contractual rights within corporate contexts are also critically analysed.",
        },
        {
          question: "Financial Accounting 1",
          subanswer:
            "Code: A6-FA1-17<br/>Prerequisite: A6-IFA-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces accounting principles, financial reporting, and corporate structures. It examines company formation, financial statement preparation, and adjustments in line with IFRS and IAS standards. Key areas include limited liability companies, partnerships, ratio analysis, and asset management, with emphasis on reporting frameworks and financial information for effective decision-making.",
        },
      ],
    },
    {
      semester: "Semester 4",
      courses: [
        {
          question: "Macroeconomics",
          subanswer:
            "Code: B6-MAE-17<br/>Prerequisite: B6-MIE-17<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces macroeconomic principles, covering economic perspectives, national income measurement, and business cycles. It explores aggregate demand and supply, fiscal and monetary policies, and the role of central banks. Additionally, it examines inflation, unemployment, and international trade, highlighting the impact of economic policies on national and global markets.",
        },
        {
          question: "Audit and Assurance",
          subanswer:
            "Code: A6-ASS-20<br/>Prerequisite: A6-BEA-20<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "This module explores key auditing principles, emphasising responsibilities, risk assessment, and response strategies. It covers gathering audit evidence, utilising the work of others, and forming audit conclusions. The module also examines audit reporting, ensuring compliance with standards and enhancing the reliability of financial information for stakeholders.",
        },
        {
          question: "Financial Management 1",
          subanswer:
            "Code: A6-FM1-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module explores financial management principles, focusing on investment, financing, and dividend decisions. It examines the roles of financial managers, working capital management, credit risk, and short-term financing. Additionally, it covers capital budgeting, the time value of money, and the risk-return relationship, equipping learners with essential financial decision-making skills.",
        },
        {
          question: "Corporate Secretaryship",
          subanswer:
            "Code: A6-CSC-20<br/Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module examines the formation, administration, and management of companies, covering types, incorporation, and regulatory provisions. It explores share capital, capital maintenance, and financial reporting. Additionally, it highlights the roles and responsibilities of members, directors, and company officers, ensuring compliance with legal and governance frameworks for corporate operations.",
        },
        {
          question: "Financial Accounting 2",
          subanswer:
            "Code: A7-FA2-25<br/>Prerequisite: A7-FA1-17<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module focuses on key financial reporting standards, including IAS 38 for intangible assets, IAS 17 for leases, IAS 2 for inventories, and IFRS cash flow preparation. It explores revenue recognition, financial instruments, and their measurement, ensuring compliance with IFRS principles for accurate financial reporting and decision-making.",
        },
      ],
    },
    {
      semester: "Semester 5",
      courses: [
        {
          question: "Taxation 2",
          subanswer:
            "Code: A7-TA2-20<br/>Prerequisite: A6-TA1-20<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "This module provides an overview of tax systems, with particular reference to Botswana and Lesotho. It covers key taxes, legislation, and taxpayer obligations, including individual and corporate liabilities, chargeable gains, withholding taxes, and VAT. It also examines dispute resolution processes, such as objections and appeals, within a broader regulatory context.",
        },
        {
          question: "Management Accounting",
          subanswer:
            "Code: A7-MAC-17<br/>Prerequisite: A6-COA-20<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "This module introduces management accounting concepts, focusing on cost analysis, budgeting, and decision-making. It explores marginal vs. absorption costing, activity-based costing, and cost-volume-profit analysis. Additionally, it covers budgeting, variance analysis, and short-run decision-making, equipping learners with techniques for effective cost control and financial planning in business operations.",
        },
        {
          question: "Financial Reporting",
          subanswer:
            "Code: A7-FIR-13<br/>Prerequisite: A7-FA2-25<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "This module explores key accounting standards, including IAS 8 for accounting policies, IAS 23 for borrowing costs, and IAS 20 for government grants. It covers income tax accounting (IAS 12), earnings per share (IAS 33), and group financial statements, including consolidation (IAS 27) and accounting for associates (IAS 28).",
        },
      ],
    },
    {
      semester: "Semester 6",
      courses: [
        {
          question: "Financial Management 2",
          subanswer:
            "Code: A7-FM2-20<br/>Prerequisite: A6-FM1-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module explores business financing options, cost of capital, and valuation principles. It examines factors affecting capital costs, asset and business valuation methods, and risk management techniques. Learners will develop skills to evaluate financing alternatives, optimize capital structures, and apply risk mitigation strategies for effective financial decision-making.",
        },
        {
          question: "Research Methods in Business",
          subanswer:
            "Code: B7-RMB-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module explores business and management research, covering epistemology, research strategies, ethics, and proposal development. It examines literature review, research design, data collection methods, and SPSS for analysis. Additionally, it addresses time and resource management, data presentation, and report writing, equipping learners with essential research skills for academic and professional inquiry.",
        },
        {
          question: "Company Law",
          subanswer:
            "Code: A7-COL-20<br/>Prerequisite: B5-LAB-20<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "This module provides an overview of legal systems, with particular reference to Botswana. It examines court structures, sources of law, and statutory interpretation. Key areas include contract and employment law, company formation, agency, partnerships, and corporate governance. The module also explores capital financing, insolvency, and the legal implications of fraud and criminal conduct in business operations.",
        },
        {
          question:
            "Business Analysis and Valuation Using Financial Statements",
          subanswer:
            "Code: A7-BAV-20<br/>Prerequisite: A7-FA2-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module explores business analysis and valuation using financial statements. It covers financial reporting’s role in capital markets, strategy and accounting analysis, financial and prospective analysis, and valuation techniques. Learners will apply forecasting, ratio analysis, and discounted cash flow models, with insights into mergers, acquisitions, and corporate financial decision-making.",
        },
      ],
    },
    {
      semester: "Semester 6 Elective Group (Choose One)",
      courses: [
        {
          question: "Advanced Taxation",
          subanswer:
            "Code: A7-TA3-25<br/>Prerequisite: A7-TA2-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module focuses on the scope of income tax, including employment, self-employment, property, investment, and trust income. It explores tax on gains, losses, and inheritance, along with computing taxable income and liabilities. Students will learn to apply exemptions, minimize tax liabilities, and assess taxation's impact on financial decisions.",
        },
        {
          question: "Advanced Audit and Assurance",
          subanswer:
            "Code: A7-AS2-20<br/>Prerequisite: A6-ASS-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module focuses on the audit engagement process, including pre-audit investigations, planning, risk assessment, and materiality. It examines audit procedures, evidence gathering, and financial statement reporting responsibilities. Students will explore auditors' legal liabilities, fraud detection, and differences between auditing financial statements and providing assurance on sustainability reports.",
        },
        {
          question: "Computerized Auditing",
          subanswer:
            "Code: A7-CUA-20<br/>Prerequisite: A6-ASS-20<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces students to computer auditing, covering key aspects such as tests of control and substantive procedures in computerized information systems. It explores computer-assisted audit techniques, special control considerations, and the use of computers in audit practices. Students will also learn about computerized working paper programs to enhance audit efficiency.",
        },

        // {
        //   question: "Corporate Secretaryship 2",
        //   subanswer:
        //     "Code: A7-CS2-20<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $130<br/>Module Credits: 10",
        //   answer:
        //     "This module provides a comprehensive understanding of the legal and regulatory framework governing companies. It covers company formation, types, incorporation effects, and statutory compliance. Students will explore share capital, financial reporting, corporate governance, and directors' responsibilities. Emphasis is placed on legal provisions, corporate structure, and effective company administration.",
        // },

        {
          question: "Risk Management and Insurance",
          subanswer:
            "Code: A7-RMI-20<br/>Prerequisite: B6-BS2-21<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module introduces risk and insurance, covering risk types, classification, and management principles. It explores risk identification, measurement, and planning, along with legal principles in insurance contracts. Students will learn life and non-life insurance techniques, insurance company management, government regulations, and risk management practices within the insurance industry.",
        },
      ],
    },
    {
      semester: "Semester 7",
      courses: [
        {
          question: "Public Sector Financial Reporting",
          subanswer:
            "Code: A7-PSR-20<br/>Prerequisite: A7-FA2-25<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module focuses on public sector financial reporting standards, including cash and accrual basis accounting under IPSAS. It explores financial statement presentation, cash flow reporting, accounting policies, and asset management. Students will learn about consolidation, intangible assets, revenue from non-exchange transactions, leases, and first-time adoption of accrual-based IPSAS standards.",
        },
        {
          question: "Research Project 1: Proposal Writing",
          subanswer:
            "Code: A7-RP1-20<br/>Prerequisite: B7-RMB-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module guides students in developing a research proposal, covering problem identification, background, and objective formulation. It includes literature review, methodology selection, research instrument design, ethical considerations, data analysis methods, budgeting, and timeline construction. Students will gain essential skills for structuring and planning a scientific research project effectively.",
        },
        {
          question: "Corporate Governance",
          subanswer:
            "Code: B7-CGV-20<br/><br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module explores corporate governance, its principles, stakeholders, and global trends. It covers the benefits of good governance, warning signs of inefficiency, and governance in family-owned enterprises. Students will examine shareholder rights, board responsibilities, audit committees, financial reporting governance, and the OECD principles, fostering ethical and effective corporate leadership.",
        },
        {
          question: "Corporate Administration 2",
          subanswer:
            "Code: A7-CA2-20<br/>Prerequisite: A6-CA1-20<br/>Module Fees: $130<br/>Module Credits: 10",
          answer:
            "This module focuses on employment law, workplace compliance, and health and safety regulations. It explores company wellness policies, retirement funding, and pension scheme administration. Students will also examine risk management principles, asset management, acquisition, protection, and facilities management, emphasizing their role in achieving organizational objectives and operational efficiency.",
        },
        {
          question: "Entrepreneurship and Innovation",
          subanswer:
            "Code: B8-ENI-20<br/Module Fees: $260<br/>Module Credits: 20",
          answer:
            "This module explores entrepreneurship and innovation, covering enterprise development, opportunity discovery, and business planning. It examines innovation principles, feasibility assessment, business modelling, and disruptive technologies. Students will learn to validate risks, market size, and pricing while developing entrepreneurial teams, fostering creativity, and building sustainable, innovative ventures.",
        },
      ],
    },
    // {
    //   semester: "Semester 7 Elective Group 1 (Select Any One)",
    //   courses: [

    //     {
    //       question: "Social Entrepreneurship",
    //       subanswer:
    //         "Code: B8-SOE-21<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $260<br/>Module Credits: 20",
    //       answer:
    //         "This module explores how social entrepreneurs develop innovative solutions to address global challenges. Students will gain practical skills in managing small enterprises, leveraging disruptive technologies, and applying entrepreneurial thinking to foster sustainability. Areas of focus include scaling social businesses, impact measurement, and integrating sustainable development goals for lasting change.",
    //     },
    //     {
    //       question: "Innovation for Sustainable Development",
    //       subanswer:
    //         "Code: E8-ISD-17<br/>Prerequisite: None<br/>Co-requisite: None<br/>Module Fees: $260<br/>Module Credits: 20",
    //       answer:
    //         "This module focuses on group dynamics, enhancing efficiency, participation, and satisfaction. It equips students with facilitation, research, and analytical skills while fostering multidisciplinary collaboration through design thinking. Students will define and analyze real societal problems, applying self-competencies and teamwork to develop and implement practical solutions.",
    //     },
    //   ],
    // },
    {
      semester: "Semester 8",
      courses: [
        {
          question: "Professional Practice In Accounting",
          subanswer:
            "Code: A7-PRA-20<br/>Prerequisite: 240 Credits<br/>Module Fees: $520<br/>Module Credits: 40",
          answer:
            "This module provides students with industry attachment for hands-on experience in accounting. Assessment emphasizes supervision, a final paper, and a portfolio of evidence. Students will demonstrate key competencies, balance theory with practice, and engage in academic discourse to enhance their professional skills in real-world accounting environments.",
        },
        {
          question: "Professional Practice (Internship)",
          subanswer:
            "Code: A7-PPR-25<br/>Prerequisite: A7-RP1-20<br/>Module Fees: $260<br/>Module Credits: 20",
          answer:
            "This module guides students in conducting independent research at honours level. It covers problem identification, literature review, research design, data collection, analysis, and interpretation. Students will develop a well-structured dissertation, drawing conclusions and making recommendations, demonstrating their ability to apply research skills to real-world issues.",
        },
        // {
        //   question: "Research Project 2: Dissertation",
        //   subanswer:
        //     "Code: B7-RP2-20<br/>Prerequisite: B7-RP1-20<br/>Co-requisite: None<br/>Module Fees: $260<br/>Module Credits: 20",
        //   answer:
        //     "This module guides students in conducting independent research at the honours level. It covers problem identification, literature review, research design, data collection, analysis, and interpretation. Students will develop a well-structured dissertation, drawing conclusions and making recommendations, demonstrating their ability to apply research skills to real-world issues.",
        // },
      ],
    },
  ],
  requirements: [
    {
      question: "Admission Requirements",
      answer:
        "IGCSE/equivalent with 5 Passes including English and Mathematics. Applicants in possession of a Diploma or Higher Diploma in related fields may be given exemptions based on the credit point equivalency. ",
    },

    {
      question: "Technical Requirements",
      answer: `<div class="technical-requirements">
  <p>
  To ensure a smooth and effective learning experience, students enrolling in this programme must meet the following technical requirements:
  </p></br>
  <p><strong>Device Requirements:</strong></p>
  <ul>
    <li>
      <p>Computer/Laptop:</p> Windows (10 or later) or Mac (macOS 10.15 or later); Processor: Intel i3 (or equivalent) and above; RAM: Minimum 4 GB (8 GB recommended for multitasking); Storage: Minimum 20 GB free space for coursework and downloads; Camera and Microphone: Built-in or external for live sessions and presentations.
    </li></br>
    <li><p>OR</p></li></br>
    <li>
      <p>Tablet/Smartphone:</p> Suitable for accessing content on the go (limited functionality for assignments/exams).
    </li>
  </ul></br>

  <p><strong>Internet Requirements: </strong></p>
  <ul>
    <li>
      Connection speed: Minimum 5 Mbps download and 2 Mbps upload (10 Mbps recommended for seamless video conferencing).
    </li>
    <li>
      Stable Wi-Fi or Ethernet connection recommended for live Zoom sessions.
    </li>
  </ul></br>

  <p><strong>Software and Platforms: </strong></p>
  <ul>
    <li>
      <p>Virtual Live Sessions: Zoom (Synchronous learning); Document Processing: Microsoft Office (Word, Excel, PowerPoint) or equivalent (Google Docs).</p>
    </li>
  </ul></br>

  <p><strong>Browser Requirements: </strong></p>
  <ul>
    <li>
      Supported browsers: Chrome (latest version), Safari (for Mac users); Cookies and JavaScript: Enabled for full Blackboard functionality.
    </li>
  </ul></br>

  <p><strong>Additional Tools: </strong>(Optional but Recommended)</p>
  <ul>
    <li>Headset: For clear audio during virtual classes.</li>
    <li>External storage (USB/Cloud): For backups of important coursework.</li>
    <li>Antivirus software: To protect against malware or data loss.</li>
  </ul></br>
</div>
`,
    },
  ],
  programOverview: `Your Future in Accounting Starts Here! Our Bachelor of Commerce in Accounting programme offers a practical, industry-focused approach to a rewarding career in accounting and finance. You'll gain essential expertise in financial reporting, auditing, taxation, and management accounting. What sets this degree apart is its blend of theory and hands-on experience, including a compulsory semester-long internship for invaluable real-world exposure.<br></br>Prepare for success in diverse roles across public and private accounting, financial analysis, banking, and government. This programme also provides a strong foundation for professional certifications like ACCA, CPA, and CIMA, opening doors to advanced career development and ensuring you're ready to confidently navigate the financial world.`,
};
