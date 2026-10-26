<script setup>
import { Card, Column, Container } from '@/features/shared/components'

const historyParagraphs = [
  'The college began in 1995 with the birth of the Bachelor of Science in Computer Science (BSCS) program under the College of Commerce. The first batch of students was composed of two sections with about 100 students headed by Prof. Mary O’ T. Penetrante.',
  'During the first semester of AY 2001–2002, the Computer Science Department was transferred to the College of Engineering together with the newly offered Bachelor of Science in Software Engineering (BSSE) course. It was then called the Software Engineering and Computer Science (SE & CS) Department and was headed by Engr. Cirilo C. Calibjo, PEE. At the same time of the transfer, the Bachelor in Information Science and Management (BISM) which was the brainchild of Prof. Aquiles Sansing, was offered in the College of Commerce.',
  'At the end of school year AY 2002–2003, it was proposed that the BSCS program under the College of Engineering and the BSISM program under the College of Commerce, along with another new course, Bachelor of Science in Information Technology (BSIT) would be combined under one college. The university then approved the proposal and the College of Computer Studies began.',
  'In the first semester of AY 2003–2004, Engr. Cirilo C. Calibjo, Department Chair of the Department of SE & CS in the College of Engineering, became its first Dean. The new college was housed in the Mary Thomas Building.',
  'In April 2004, two new degree courses, Master in Computer Science (MCS) and Master of Science in Computer Science (MSCS), were approved to be offered.',
  'During the First Semester of AY 2006-2007, Engr. Calibjo went to Manila to pursue his doctoral studies in Electrical Engineering at the University of the Philippines, Diliman, upon which, Prof. Rodney A. Gicana was appointed as the Officer-in-Charge during his absence. Prof. Gicana was previously the Department Head of the Software Engineering Department.',
  'As time progressed, a lot of changes were upheld in the College with the programs it offers, as well as its facilities. As Dr. Calibjo completed his Doctoral degree, he then came back to the College of Computer Studies as the Dean and allowed more exciting things to happen.',
  'In the year 2011, the College applied for PAASCU Accreditation and had its preliminary visit in this year. A lot of improvements were made to enhance the facilities and increase the standards of education for the college itself.',
  'In 2014, a highlight for the CCS, a consultancy visit made by the PAASCU was made possible to assure that all the requirements are met before a formal visit is to commence. At this time, the Bachelor of Science in Digital Media and Interactive Arts (BSDMIA) was established.',
  'By March 2015, a formal visit was conducted by the PAASCU and by June of the same year, the College of Computer Studies was granted a Level 1 Status for the BSCS, BSIT and BSIS programs of the college.',
  'In June 2016, Prof. Rea P. Balontong was appointed as the Office-in-Charge for the College of Computer Studies.',
  'In June 2018, the Bachelor of Science in Library and Information Science migrated to the College of Computer Studies.',
  'As the academic year of 2018-2019 has begun, Prof. Ma. Christina A. Quijano was appointed as the Officer-in-Charge for the College and is at present (AY 2021-2022), Acting Dean.',
  'On September 16-18, 2019, a re-survey visit for Level 1 status for the BSCS, BSIT and BSIS programs was made by the PAASCU Accreditation Team. After the visit, the College is then granted a 5 year Level 1 re-accredited status.',
  'The BLIS program underwent an orientation from the PACUCOA Accrediting body last October 2019 and is to have its preliminary survey early this year 2020.',
  'This indeed is another milestone achieved by the college. With the vast changes and improvements, there is more to it than what the eyes can see.',
  'More achievements and goals are yet to come, as CCS will make its mark in the history of Central Philippine University.',
]
</script>

<template>
  <Container>
    <Column :spacing="32" :margin="{ bottom: 64 }">
      <Container :padding="{ left: 192, top: 96, bottom: 32 }" color="var(--secondary)" width="100%">
        <h1 class="history-title">College History</h1>
      </Container>
      <Card shadow="sm" :borderWidth="1" borderColor="var(--border)" :padding="32" :margin="{ x: 96 }">
        <div class="history-content">
          <p v-for="paragraph in historyParagraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
      </Card>
    </Column>
  </Container>
</template>

<style scoped>
.history-title {
  margin-bottom: 32px;
  color: var(--secondary-foreground);
  font-size: 36px;
  font-weight: 700;
}

.history-content {
  color: var(--foreground);
  font-size: 16px;
  line-height: 1.8;
}

.history-content p {
  margin-bottom: 20px;
}

.history-content p:last-child {
  margin-bottom: 0;
}
</style>
