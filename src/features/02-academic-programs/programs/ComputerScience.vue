<script setup>
import coverImage from '@/assets/images/drone_shot.jpg'
import logo from '@/assets/logos/css.png'
import ProgramPage from './ProgramPage.vue'

const competenceAreas = [
  'Algorithms and Complexity',
  'Architecture and Organization',
  'Discrete Structures',
  'Human Computer Interaction',
  'Information Assurance and Security',
  'Networks and Communications',
  'Operating Systems',
  'Programming Languages (Design and Implementation)',
  'Software Development Fundamentals',
  'Software Engineering',
  'Social Issues and Professional Practice',
]

const educObjectives = "1. Exhibit skills, knowledge and leadership to excel in their information technology careers and related discipline.<br>2. Exhibit high standard of professionalism who are effective members of multi-discipline development teams<br>3. Involved in scholarly activities, research and outreach that contributes to the improvement and transformation of society<br>4. Demonstrate ethical, professional, spiritual values, and social responsibility associated with their Information Technology careers and related professions.<br>5. Exhibit proficiency in the use of traditional and digital media arts, designing, developing and implementing digital media solutions in fields of entertainment and corporate environments."
const programOutcomes = "<strong>The graduates have the ability to</strong><br>a) articulate and  discuss the  latest developments  in the  specific field  of practice.    (Philippine Qualifications Framework (PQF) level 6 descriptor)  (Graduate Outcomes:  CS 10, IS 10, IT13).<br>b) effectively communicate orally and in writing using both English and Filipino (Graduate Outcomes:  CS08,  1508,  IT10).<br>c) work effectively  and  independently  in   multi-disciplinary  and multi-cultural teams. (PQF level 6 descriptor) (Graduate Outcomes:  CS07, ISO?, IT08).<br>d) act in recognition of professional, social and ethical responsibility (Graduate Outcomes:CS09, 1509,  IT12)<br>e) preserve and promote “Filipino  historical  and cultural heritage” (based  on RA 7722).<br><strong>The graduates of BSCS, BSIS, and BSIT must have the ability to</strong><br>a) analyze complex problems, and   identify and   define the computing requirements   needed  to  design  an  appropriate solution  (Graduate Outcomes:CS02, 1502-03,  IT03).<br>b) apply  computing   and  other  knowledge  domains  to  address real-world  problems (Graduate Outcomes:  CSO 1,  1501,  IT01).<br>c) design and  develop computing solutions using  a system-level perspective  (Graduate  Outcomes:  CS03-05,  1504-05,  IT05).<br>d) utilize modern computing tools  (Graduate  Outcomes:   CSOS, ISOS,  IT07)."

const graduateOutcomes = [
  { outcome: 'CS01', description: 'Apply knowledge of computing fundamentals, knowledge of a computing specialization, and mathematics, science, and domain knowledge appropriate for the computing specialization to the abstraction and conceptualization of computing models from defined problems and requirements.' },
  { outcome: 'CS02', description: 'Identify, analyze, formulate, research literature, and solve complex computing problems and requirements reaching substantiated conclusions using fundamental principles of mathematics, computing sciences, and relevant domain disciplines.' },
  { outcome: 'CS03', description: 'An ability to apply mathematical foundations, algorithmic principles and computer science theory in the modeling and design of computer-based systems in a way that demonstrates comprehension of the tradeoffs involved in decision choices.' },
  { outcome: 'CS04', description: 'Knowledge and understanding of information security issues in relation to the design, development and use of information systems.' },
  { outcome: 'CS05', description: 'Design and evaluate solutions for complex computing problems, and design and evaluate systems, components, or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations.' },
  { outcome: 'CS06', description: 'Create, select, adapt and apply appropriate techniques, resources and modern computing tools to complex computing activities, with an understanding of the limitations to accomplish a common goal.' },
  { outcome: 'CS07', description: 'Function effectively as an individual and as a member or leader in diverse teams and in multidisciplinary settings.' },
  { outcome: 'CS08', description: 'Communicate effectively with the computing community and with society at large about complex computing activities by being able to comprehend and write effective reports, design documentation, make effective presentations, and give and understand clear instructions.' },
  { outcome: 'CS09', description: 'An ability to recognize the legal, social, ethical and professional issues involved in the utilization of computer technology and be guided by the adoption of appropriate professional, ethical and legal practices.' },
  { outcome: 'CS10', description: 'Recognize the need, and have the ability, to engage in independent learning for continual development as a computing professional.' },
]
</script>

<template>
  <ProgramPage
    course="Computer Science"
    :image="coverImage"
    :logo="logo"
    introduction="The Computer Science (CS) Program is designed for students who wants to study computing in depth."
    :educObjectives="educObjectives"
    :programOutcomes="programOutcomes"
    rationale="The computing field has grown enormously and is described as dynamic. It encompasses computer engineering, software engineering, computer science, information systems, and information technology. Based on the Guidelines for the Implementation of CMO 46 s 2012 which implements the shift to learning competency-based standards/outcomes-based education” the Commission released CMO 25 s 2015 last August 2015 that integrates the outcomes-based education.  It specifies the “core competencies” expected of graduates of Bachelor of Science in Computer Science (BSCS), Bachelor of Science in Information Systems (BSIS) and Bachelor of Science in Information Technology (BSIT).  The Commission recognizes the need to be responsive to the current needs of the country and in order to face the challenges of advancement.  It is essential and important that the country’s computing capability be continually developed and strengthened. In this PSG it clearly defines the area of focus for each field, common outcomes for each discipline and new GE for K-12 program. In the PSG it defines the BSCS program that includes the study of computing concepts and theories, algorithmic foundations and new developments in computing.  The program prepares students to design and create algorithmically complex software and develop new and effective algorithms for solving computing problems."
    description="The BSCS curriculum includes foundation and professional courses that cover theory, algorithms, software design and development, and new developments in computing."
    :graduateOutcomes="graduateOutcomes"
    :competenceAreas="competenceAreas"
  />
</template>
