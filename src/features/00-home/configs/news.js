import news1 from '@/assets/images/news 1.jpg'
import news2 from '@/assets/images/news 2.jpg'
import news3 from '@/assets/images/news 3.jpg'

export const news = [
    {
        title: 'Kation Technologies hires CCS graduates',
        excerpt: 'Kation Technologies Inc., a Microsoft Gold Partner company in the Philippines enabling people with world-class technology.',
        publishDate: 'Nov 23, 2021',
        src: news1,
    },
    {
        title: 'Congratulations to our New Librarians!',
        excerpt: [
            'Congratulations to our New Librarians! 🥳📚',
            '60% CPU passing percentage (1st takers) , 47.7% National passing percentage, 50% passing percentage (1st takers and retakers)',
            'during the Librarians Licensure Board Examination September 2021',
            'The CCS family is proud of you all! ⚔️',
            'To God be the glory!!!'
        ].join('\n\n'),
        publishDate: 'Nov 23, 2021',
        src: news2,
    },
    {
        title: 'Community Engagement MOA Signing Ceremony',
        excerpt: [
            'Memorandum of Agreement signing between Central Philippine University (CPU) College of Computer Studies (CCS) and Mandurriao Elementary School (MES) held last December 7, 2021. This signing ceremony serves as the start of partnership between two institutions.',
            'The community engagement program “Adopt a School” of the college will have its first session on December 9, 2021. This program will be done virtually, the instructors will be the CCS faculty members, and the participants will be the MES faculty members. The first session will cover topics regarding various types of Learning Management Systems (LMS) such as Free Canvas, Google Classroom and Facebook Groups.'
        ].join('\n\n'),
        publishDate: 'Dec 8, 2021',
        src: news3,
    }
]