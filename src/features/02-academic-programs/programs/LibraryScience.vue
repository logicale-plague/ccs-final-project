<script setup>
import coverImage from '@/assets/images/drone_shot.jpg'
import logo from '@/assets/logos/lisso.png'
import ProgramPage from './ProgramPage.vue'

const objectives = `1. Exhibit skills, knowledge and leadership to excel in their information technology careers and related discipline.<br>2. Exhibit high standard of professionalism who are effective members of multi-discipline development teams<br>3. Involved in scholarly activities, research and outreach that contributes to the improvement and transformation of society<br>4. Demonstrate ethical, professional, spiritual values, and social responsibility associated with their Information Technology careers and related professions.<br>5. Exhibit proficiency in the use of traditional and digital media arts, designing, developing and implementing digital media solutions in fields of entertainment and corporate environments.`
const outcomes = `<strong>The graduates have the ability to</strong><br>a) articulate and discuss the latest developments in the specific field of practice. (Graduate Outcomes: CS10, IS10, IT13).<br>b) effectively communicate orally and in writing using both English and Filipino (Graduate Outcomes: CS08, IS08, IT10).<br>c) work effectively and independently in multi-disciplinary and multi-cultural teams. (Graduate Outcomes: CS07, IS07, IT08).<br>d) act in recognition of professional, social and ethical responsibility (Graduate Outcomes: CS09, IS09, IT12)<br>e) preserve and promote “Filipino historical and cultural heritage” (based on RA 7722).`
const rationale = `Based on the Guidelines for the Implementation of CMO 46 s. 2012, this PSG implements the shift to learning competency-based standards and outcomes-based education. It specifies the core competencies expected of Bachelor of Library and Information Science graduates regardless of the type of HEI they graduate from. It also provides space for HEIs to innovate in the curriculum in line with their contexts and missions.<br><br>Policies and standards in the Library and Information Science program are necessary for the highest level of quality desired for the education and training of library and information science professionals. They institutionalize the profession’s central function of providing quality information service to library and information center clientele. The program makes LIS education responsive to changing information needs brought about by rapid technological changes and keeps LIS professionals globally competitive.`
const description = `The LIS curriculum is designed to equip the professional with the composite knowledge, skills, attitudes and tools to respond to the changing information needs of society.`
const graduateOutcomes = [
  [
    'LIS01',
    'Select, evaluate, organize and disseminate print, multimedia, electronic and digital information resources.',
  ],
  [
    'LIS02',
    'Effectively communicate orally and in writing, using a variety of communication methods in a manner that best enables the message to be understood.',
  ],
  ['LIS03', 'Demonstrate logical and systematic approaches to the accomplishment of tasks.'],
  [
    'LIS04',
    'Formulate objectives, policies and processes as well as design and manage resources in anticipation of future educational or organizational changes.',
  ],
  [
    'LIS05',
    'Recognize, analyze and constructively solve problems, provide appropriate direction and assistance, and overcome barriers when necessary.',
  ],
  [
    'LIS06',
    'Identify users’ needs and wants through reference interviews, customer surveys, complaint logs and other means in order to evaluate the effectiveness of current services and improve these and other practices.',
  ],
  [
    'LIS07',
    'Work well in groups and seek ways to build team efforts to solve problems and achieve common goals.',
  ],
  [
    'LIS08',
    'Understand library automation systems and the use of computer hardware, software and peripherals, including online collaboration tools.',
  ],
  [
    'LIS09',
    'Develop information technology solutions such as library automation systems, websites and email systems.',
  ],
  [
    'LIS10',
    'Conduct significant research projects that will benefit the library and the organization.',
  ],
  [
    'LIS11',
    'Evaluate and debate information policy and ethical issues applicable in local, national or global contexts.',
  ],
  [
    'LIS12',
    'Participate in continuing education activities organized by library associations and other entities.',
  ],
].map(([outcome, description]) => ({ outcome, description }))
</script>

<template>
  <ProgramPage
    course="Library and Information Science"
    :image="coverImage"
    :logo="logo"
    introduction="The Degree of Bachelor of Library and Information Science (BLIS) is a four-year program that prepares students in the development, deployment, and management of information resources in print, non-print, electronic, and digital formats."
    :educObjectives="objectives"
    :programOutcomes="outcomes"
    :rationale="rationale"
    :description="description"
    :graduateOutcomes="graduateOutcomes"
  />
</template>
