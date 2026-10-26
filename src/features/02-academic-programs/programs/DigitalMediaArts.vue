<script setup>
import coverImage from '@/assets/images/drone_shot.jpg'
import logo from '@/assets/logos/midas.png'
import ProgramPage from './ProgramPage.vue'

const objectives = `1. Exhibit skills, knowledge and leadership to excel in their information technology careers and related discipline.<br>2. Exhibit high standard of professionalism who are effective members of multi-discipline development teams<br>3. Involved in scholarly activities, research and outreach that contributes to the improvement and transformation of society<br>4. Demonstrate ethical, professional, spiritual values, and social responsibility associated with their Information Technology careers and related professions.<br>5. Exhibit proficiency in the use of traditional and digital media arts, designing, developing and implementing digital media solutions in fields of entertainment and corporate environments.`
const outcomes = `<strong>The graduates have the ability to</strong><br>a) articulate and discuss the latest developments in the specific field of practice. (Graduate Outcomes: CS10, IS10, IT13).<br>b) effectively communicate orally and in writing using both English and Filipino (Graduate Outcomes: CS08, IS08, IT10).<br>c) work effectively and independently in multi-disciplinary and multi-cultural teams. (Graduate Outcomes: CS07, IS07, IT08).<br>d) act in recognition of professional, social and ethical responsibility (Graduate Outcomes: CS09, IS09, IT12)<br>e) preserve and promote “Filipino historical and cultural heritage” (based on RA 7722).`
const rationale = `The Bachelor of Science in Digital Media and Interactive Arts (BSDMIA) program is offered based on CMO 19 s 2016 article III section 11, which states that an autonomous institution has the privilege to offer new courses or programs in the undergraduate and/or graduate levels. Technology has also expanded the field of arts and other art-related careers.<br><br>Interactive arts and media combines the elements of arts, design and technology. Artists in the field typically have advanced skills in visual design, digital storytelling, time-based media and shaping interactive experiences, applied in animation, mobile communications and video games.<br><br>Students are introduced to industry-standard tools and applications in video editing, animation, 3D modeling, photography, graphic design, video game design and virtual reality.<br><br>Graduates can work in advertising agencies, game design companies, production houses, graphic design firms, art studios, mobile communication companies, magazines, publishers and web design companies.`
const description = `The Degree of Bachelor of Science in Digital Media and Interactive Arts is focused on creativity, applied arts and digital media technologies. It is designed to develop creative talents for applied arts industries including entertainment, education, advertising and commercials, films and corporate communications.<br><br>The structure of the course enables students from different disciplines to collaborate and produce artworks acceptable to industry standards.`
const graduateOutcomes = [
  [
    'DMIA01',
    'Apply knowledge of mathematics, digital media arts exhibit and management, and digital media creation, delivery and consumption appropriate to the field of practice in compliance to established standards and best practices',
  ],
  [
    'DMIA02',
    'Identify user requirements leading to design selection, digital media art creation, evaluation and delivery of digital media- and interactive arts-based solutions',
  ],
  ['DMIA03', 'Design, merge and bridge traditional arts with digital media'],
  [
    'DMIA04',
    'Deliver and implement creations, and evaluate digital media consumption in entertainment and corporate environments effectively',
  ],
  ['DMIA05', 'Demonstrate the use of current techniques, skills, tools and practices'],
  [
    'DMIA06',
    'Function effectively as an individual and as a member or leader in diverse teams and in multidisciplinary settings',
  ],
  [
    'DMIA07',
    'Recognize professional, ethical, legal, security, and social issues and responsibility',
  ],
  ['DMIA08', 'Socially communicate effectively with a diverse audience'],
  ['DMIA09', 'Identify contemporary practices and issues'],
  [
    'DMIA10',
    'Recognize the need for and engage in planning self-learning and improving performance as a foundation for continuing professional development.',
  ],
].map(([outcome, description]) => ({ outcome, description }))
</script>

<template>
  <ProgramPage
    course="Digital Media and Interactive Arts"
    :image="coverImage"
    :logo="logo"
    introduction="The Degree of Bachelor of Science in Digital Media and Interactive Arts is focused on creativity, applied arts and digital media technologies."
    :educObjectives="objectives"
    :programOutcomes="outcomes"
    :rationale="rationale"
    :description="description"
    :graduateOutcomes="graduateOutcomes"
  />
</template>
