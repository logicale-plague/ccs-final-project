<script setup>
import coverImage from '@/assets/images/drone_shot.jpg'
import logo from '@/assets/logos/itso.png'
import ProgramPage from './ProgramPage.vue'

const areas = [
  'Information Technology Fundamentals',
  'Human Computer Interaction',
  'Information Assurance and Security',
  'Information Management',
  'Integrative Programming and Technologies',
  'Networking',
  'Platform Technologies',
  'Systems Administration and Maintenance',
  'Systems Integration and Architecture',
  'Social and Professional Issues',
  'Web Systems and Technologies',
]
const objectives = `1. Exhibit skills, knowledge and leadership to excel in their information technology careers and related discipline.<br>2. Exhibit high standard of professionalism who are effective members of multi-discipline development teams<br>3. Involved in scholarly activities, research and outreach that contributes to the improvement and transformation of society<br>4. Demonstrate ethical, professional, spiritual values, and social responsibility associated with their Information Technology careers and related professions.<br>5. Exhibit proficiency in the use of traditional and digital media arts, designing, developing and implementing digital media solutions in fields of entertainment and corporate environments.`
const outcomes = `<strong>The graduates have the ability to</strong><br>a) articulate and discuss the latest developments in the specific field of practice. (Graduate Outcomes: CS10, IS10, IT13).<br>b) effectively communicate orally and in writing using both English and Filipino (Graduate Outcomes: CS08, IS08, IT10).<br>c) work effectively and independently in multi-disciplinary and multi-cultural teams. (Graduate Outcomes: CS07, IS07, IT08).<br>d) act in recognition of professional, social and ethical responsibility (Graduate Outcomes: CS09, IS09, IT12)<br>e) preserve and promote “Filipino historical and cultural heritage” (based on RA 7722).<br><br><strong>The graduates of BSCS, BSIS, and BSIT must have the ability to</strong><br>a) analyze complex problems and identify and define the computing requirements needed to design an appropriate solution (Graduate Outcomes: CS02, IS02-03, IT03).<br>b) apply computing and other knowledge domains to address real-world problems (Graduate Outcomes: CS01, IS01, IT01).<br>c) design and develop computing solutions using a system-level perspective (Graduate Outcomes: CS03-05, IS04-05, IT05).<br>d) utilize modern computing tools (Graduate Outcomes: CS06, IS06, IT07).`
const rationale = `The computing field has grown enormously and is dynamic. It encompasses computer engineering, software engineering, computer science, information systems and information technology. Based on the Guidelines for the Implementation of CMO 46 s 2012 and CMO 25 s 2015, the program follows learning competency-based standards and outcomes-based education.<br><br>The BSIT program includes the utilization of hardware and software technologies involving planning, installing, customizing, operating, managing, administering and maintaining information technology infrastructure. It prepares graduates to address user needs through the selection, development, application, integration and management of computing technologies within an organization.<br><br>The program prepares students to work on information security, network architecture, database administration, systems administration and computer support.`
const description = `The BSIT curriculum includes basic and advanced courses on planning, development, integration and management of information technology infrastructure that provide computing solutions to address organizational needs.<br><br>The curriculum should include courses that cover Knowledge Areas as recommended in ACM Information Technology Curricula 2008.<br><br><strong>Defines eleven (11) Knowledge Areas:</strong>`
const graduateOutcomes = [
  ['IT01', 'Apply knowledge of computing, science, and mathematics appropriate to the discipline.'],
  ['IT02', 'Understand best practices and standards and their applications.'],
  [
    'IT03',
    'Analyze complex problems, and identify and define the computing requirements appropriate to its solution.',
  ],
  [
    'IT04',
    'Identify and analyze user needs and take them into account in the selection, creation, evaluation and administration of computer-based systems.',
  ],
  [
    'IT05',
    'Design, implement, and evaluate computer-based systems, processes, components, or programs to meet desired needs and requirements under various constraints.',
  ],
  ['IT06', 'Integrate IT-based solutions into the user environment effectively.'],
  [
    'IT07',
    'Apply knowledge through the use of current techniques, skills, tools and practices necessary for the IT profession.',
  ],
  [
    'IT08',
    'Function effectively as a member or leader of a development team recognizing the different roles within a team to accomplish a common goal.',
  ],
  ['IT09', 'Assist in the creation of an effective IT project plan.'],
  [
    'IT10',
    'Communicate effectively with the computing community and with society at large about complex computing activities through logical writing, presentations, and clear instructions.',
  ],
  [
    'IT11',
    'Analyze the local and global impact of computing information technology on individuals, organizations, and society.',
  ],
  [
    'IT12',
    'Understand professional, ethical, legal, security and social issues and responsibilities in the utilization of information technology.',
  ],
  [
    'IT13',
    'Recognize the need for and engage in planning self-learning and improving performance as a foundation for continuing professional development.',
  ],
].map(([outcome, description]) => ({ outcome, description }))
</script>

<template>
  <ProgramPage
    course="Information Technology"
    :image="coverImage"
    :logo="logo"
    introduction="The Information Technology (IT) program is designed to bridge the gap between computer science and management information systems."
    :educObjectives="objectives"
    :programOutcomes="outcomes"
    :rationale="rationale"
    :description="description"
    :graduateOutcomes="graduateOutcomes"
    :competenceAreas="areas"
  />
</template>
