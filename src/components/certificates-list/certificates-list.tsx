import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function CertificatesList() {
  return (
    <>
      <ImageList variant="masonry" cols={3} gap={8}>
        {certificatesData.map((item) => (
            <ImageListItem key={item.name}>
            <img
                src={`${item.certs[0]}?w=248&fit=crop&auto=format`}
                alt={item.name}
                loading="lazy"
            />
            </ImageListItem>
        ))}
        </ImageList>

      <ImageList variant="masonry" cols={3} gap={8}>
      {certificatesData.map((item) => (
        <ImageListItem key={item.name}>
          <img
            src={item.certs[0]}
            alt={item.name}
            loading="lazy"
          />
          <ImageListItemBar position="bottom" title={item.name} subtitle={item.by}/>
        </ImageListItem>
      ))}
    </ImageList>

        
    </>
    
  );
}


const certificatesData = [
    {
      'name': 'AspNet Core Web/API + Çok Katmanlı Mimari | Best Practices',
      'hours': 9.5,
      'by': 'Udemy',
      'date': '2020-11-17T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-191f89b9-abb5-43d3-a09f-e5d2360e1d46/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-191f89b9-abb5-43d3-a09f-e5d2360e1d46.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-191f89b9-abb5-43d3-a09f-e5d2360e1d46.pdf'
      ]

    },
    {
      'name': 'C# en Profundidad',
      'hours': 8.5,
      'by': 'Udemy',
      'date': '2021-02-01T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-7f464d10-304a-4c17-a187-eabd30dc3a03/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-7f464d10-304a-4c17-a187-eabd30dc3a03.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-7f464d10-304a-4c17-a187-eabd30dc3a03.pdf'
      ]

    },
    {
      'name': 'IP address Basics to Advance',
      'hours': 2,
      'by': 'Udemy',
      'date': '2020-12-21T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-7f624bd0-611c-4cbb-8839-36fb2ea623cd/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-7f624bd0-611c-4cbb-8839-36fb2ea623cd.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-7f624bd0-611c-4cbb-8839-36fb2ea623cd.pdf'

      ]

    },
    {
      'name': 'Clean Code with Java examples',
      'hours': 2,
      'by': 'Udemy',
      'date': '2021-01-08T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-c3b0f3e1-0018-4040-a8c2-b3797a66446c/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-c3b0f3e1-0018-4040-a8c2-b3797a66446c.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-c3b0f3e1-0018-4040-a8c2-b3797a66446c.pdf'
      ]

    },
    {
      'name': 'Microsoft Active Directory Essentials on Windows Server 2019',
      'hours': 1.5,
      'by': 'Udemy',
      'date': '2021-01-14T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-62f65f36-60f9-4548-98a8-bc21c2a01910/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-62f65f36-60f9-4548-98a8-bc21c2a01910.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-62f65f36-60f9-4548-98a8-bc21c2a01910.pdf'
      ]

    },
    {
      'name': 'Getting Started with .NET Core Identity Server 4',
      'hours': 4.5,
      'by': 'Udemy',
      'date': '2021-01-18T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-ea15a0b1-439d-4fee-ad81-176913c46134/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-ea15a0b1-439d-4fee-ad81-176913c46134.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-ea15a0b1-439d-4fee-ad81-176913c46134.pdf'

      ]

    },
    {
      'name': 'Typing Course - How to Touch Type Faster - New Way to Learn',
      'hours': 1.5,
      'by': 'Udemy',
      'date': '2021-01-28T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-6d6c8183-073c-4a77-880c-7951c2b948a1/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-6d6c8183-073c-4a77-880c-7951c2b948a1.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-6d6c8183-073c-4a77-880c-7951c2b948a1.pdf'

      ]

    },
    {
      'name': 'Learn Rest API Automation Using Rest Assured',
      'hours': 5.5,
      'by': 'Udemy',
      'date': '2021-02-04T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-49e373a1-3580-47b0-a6c0-b53d0d86091d/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-49e373a1-3580-47b0-a6c0-b53d0d86091d.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-49e373a1-3580-47b0-a6c0-b53d0d86091d.pdf'
      ]

    },
    {
      'name': 'IT Support & Troubleshooting Tips - Legacy Operating Systems',
      'hours': 0.5,
      'by': 'Udemy',
      'date': '2021-02-07T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-f3e297ff-4964-4b3f-b9a2-290aac2df084/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-f3e297ff-4964-4b3f-b9a2-290aac2df084.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-f3e297ff-4964-4b3f-b9a2-290aac2df084.pdf'
      ]

    },
    {
      'name': 'Css Positioning For Absolute Beginners: A Basic Introduction',
      'hours': 1,
      'by': 'Udemy',
      'date': '2021-03-01T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-450ea754-9390-42c5-b402-4bf44494a0af/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-450ea754-9390-42c5-b402-4bf44494a0af.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-450ea754-9390-42c5-b402-4bf44494a0af.pdf'
      ]

    },
    {
      'name': 'Learn ASP.Net MVC and Entity Framework (Database First)',
      'hours': 6.5,
      'by': 'Udemy',
      'date': '2021-02-15T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-432c8abd-e48c-4fef-bb46-62549041467a/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-432c8abd-e48c-4fef-bb46-62549041467a.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-432c8abd-e48c-4fef-bb46-62549041467a.pdf'
      ]

    },
    {
      'name': 'Autenticación y Autorización en ASP.NET MVC',
      'hours': 3,
      'by': 'Udemy',
      'date': '2021-03-02T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-c5084f94-9d4d-41be-86fd-b7d485263aab/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-c5084f94-9d4d-41be-86fd-b7d485263aab.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-c5084f94-9d4d-41be-86fd-b7d485263aab.pdf'
      ]

    },
    {
      'name': 'ASP.NET MVC 5',
      'hours': 14.5,
      'by': 'Udemy',
      'date': '2021-03-04T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-ed84a4f1-d401-443b-a61a-01cf2439ae9a/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-ed84a4f1-d401-443b-a61a-01cf2439ae9a.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-ed84a4f1-d401-443b-a61a-01cf2439ae9a.pdf'
      ]

    },
    {
      'name': 'Mastering CI/CD with TeamCity and Octopus Deploy',
      'hours': 4.5,
      'by': 'Udemy',
      'date': '2021-03-16T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-56a1e92b-9e1b-4594-b85b-b093ad2cd9f9/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-56a1e92b-9e1b-4594-b85b-b093ad2cd9f9.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-56a1e92b-9e1b-4594-b85b-b093ad2cd9f9.pdf'
      ]

    },
    {
      'name': '1 Hour CSS',
      'hours': 1,
      'by': 'Udemy',
      'date': '2021-01-25T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-107e7b37-0e6c-413e-9850-5400f96843a4/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-107e7b37-0e6c-413e-9850-5400f96843a4.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-107e7b37-0e6c-413e-9850-5400f96843a4.pdf'
      ]

    },
    {
      'name': 'The Angular Certification Course',
      'hours': 1,
      'by': 'Udemy',
      'date': '2021-04-10T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-10d350c0-5e7e-4888-9204-cb511b818d85/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-10d350c0-5e7e-4888-9204-cb511b818d85.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-10d350c0-5e7e-4888-9204-cb511b818d85.pdf'
      ]

    },
    {
      'name': 'Angular 9 / 10 para Principiantes',
      'hours': 2,
      'by': 'Udemy',
      'date': '2021-04-11T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-4d051178-2f17-4fd4-bd6b-780abfa73f9b/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-4d051178-2f17-4fd4-bd6b-780abfa73f9b.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-4d051178-2f17-4fd4-bd6b-780abfa73f9b.pdf'
      ]

    },
    {
      'name': 'Angular interview questions with answers',
      'hours': 2,
      'by': 'Udemy',
      'date': '2021-04-21T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-41bb47f1-c078-4d53-8d05-f6c0c2de827f/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-41bb47f1-c078-4d53-8d05-f6c0c2de827f.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-41bb47f1-c078-4d53-8d05-f6c0c2de827f.pdf'
      ]
    },
    {
      'name': '2021 - Learn Angular from scratch step by step',
      'hours': 2.5,
      'by': 'Udemy',
      'date': '2021-04-11T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-ac739350-055c-4249-8cc0-6bc9690cdd7f/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-ac739350-055c-4249-8cc0-6bc9690cdd7f.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-ac739350-055c-4249-8cc0-6bc9690cdd7f.pdf'
      ]
    },
    {
      'name': 'Angular 10 Course: Build Angular Apps (Step by Step)',
      'hours': 1,
      'by': 'Udemy',
      'date': '2020-09-14T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-e85514fe-03b2-4c3d-9796-3e935887ceeb/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-e85514fe-03b2-4c3d-9796-3e935887ceeb.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-e85514fe-03b2-4c3d-9796-3e935887ceeb.pdf'
      ]
    },
    {
      'name': 'Typescript Guia Completa | Fundamentos de Typescript',
      'hours': 1.5,
      'by': 'Udemy',
      'date': '2021-04-26T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-42e17c15-07f5-415b-8018-a9f9e3717286/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-42e17c15-07f5-415b-8018-a9f9e3717286.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-42e17c15-07f5-415b-8018-a9f9e3717286.pdf'
      ]
    },
    {
      'name': 'Clean Code with PHP examples',
      'hours': 2,
      'by': 'Udemy',
      'date': '2021-01-08T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-0c9293aa-7798-4771-ad05-5d2698639ea4/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-0c9293aa-7798-4771-ad05-5d2698639ea4.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-0c9293aa-7798-4771-ad05-5d2698639ea4.pdf'
      ]
    },
    {
      'name': 'Mastering The Complete Agile Scrum Master Workshop',
      'hours': 3.5,
      'by': 'Udemy',
      'date': '2020-12-15T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-ba2fea28-d06a-4233-a571-2c6f49db2f4c/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-ba2fea28-d06a-4233-a571-2c6f49db2f4c.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-ba2fea28-d06a-4233-a571-2c6f49db2f4c.pdf'
      ]
    },
    {
      'name': 'Learn C sharp in 1 hour',
      'hours': 1,
      'by': 'Udemy',
      'date': '2020-12-15T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-df63007c-c315-4f31-8e81-a84b728029d5/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-df63007c-c315-4f31-8e81-a84b728029d5.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-df63007c-c315-4f31-8e81-a84b728029d5.pdf'
      ]
    },
    {
      'name': 'Scrum Fundamentals for Scrum Master and Agile Projects- 2021',
      'hours': 2,
      'by': 'Udemy',
      'date': '2020-11-24T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-2a5c6f28-8adf-48b3-8824-1a8bfe3653aa/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-2a5c6f28-8adf-48b3-8824-1a8bfe3653aa.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-2a5c6f28-8adf-48b3-8824-1a8bfe3653aa.pdf'
      ]
    },
    {
      'name': 'JavaScript Algorithms and Data Structures Certification',
      'hours': 300,
      'by': 'freeCodeCamp',
      'date': '2020-12-10T00:00:00',
      'certs' : [
        'https://www.freecodecamp.org/certification/vitmfs/javascript-algorithms-and-data-structures',
        'https://www.mediafire.com/convkey/757b/85q37cesj9raupgzg.jpg',
        ''
      ]
    },
    {
      'name': 'CSS Tech Gig',
      'hours': 1,
      'by': 'Tech Gig',
      'date': '2021-05-06T00:00:00',
      'certs' : [
        'https://www.mediafire.com/convkey/0d29/eos3hcqskqnx3qczg.jpg',
        'https://www.mediafire.com/convkey/0d29/eos3hcqskqnx3qczg.jpg',
        ''
      ]
    },
    {
      'name': 'SQL Básico - Intermedio ¡Añade valor a tu CV en 2 horas!',
      'hours': 1.5,
      'by': 'Udemy',
      'date': '2020-11-25T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-e05f0dd0-07ee-4bc1-ab94-c2193a222862/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-e05f0dd0-07ee-4bc1-ab94-c2193a222862.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-e05f0dd0-07ee-4bc1-ab94-c2193a222862.pdf'
      ]
    },
    {
      'name': 'Agile Software Testing',
      'hours': 3,
      'by': 'Udemy',
      'date': '2020-11-23T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-8b3262b4-6a1b-4e20-8c35-716e1dcc4f44/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-8b3262b4-6a1b-4e20-8c35-716e1dcc4f44.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-8b3262b4-6a1b-4e20-8c35-716e1dcc4f44.pdf'
      ]
    },
    {
      'name': 'The Complete 3i Time Management Productivity System',
      'hours': 1.5,
      'by': 'Udemy',
      'date': '2020-11-16T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-828ee7c2-4a2f-4bd6-be90-049960bcdd88/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-828ee7c2-4a2f-4bd6-be90-049960bcdd88.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-828ee7c2-4a2f-4bd6-be90-049960bcdd88.pdf'
      ]
    },
    {
      'name': 'The Complete 2021 PHP Full Stack Web Developer Bootcamp',
      'hours': 49,
      'by': 'Udemy',
      'date': '2020-11-11T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-e947a10f-9d1e-43ff-bf4d-c3ec588794fe/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-e947a10f-9d1e-43ff-bf4d-c3ec588794fe.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-e947a10f-9d1e-43ff-bf4d-c3ec588794fe.pdf'
      ]
    },
    {
      'name': 'Agile Project Management: Agile, Scrum, Kanban & XP',
      'hours': 3.5,
      'by': 'Udemy',
      'date': '2020-11-12T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-bd7c0fb4-c8ce-458b-aa9e-648c1fc58dad/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-bd7c0fb4-c8ce-458b-aa9e-648c1fc58dad.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-bd7c0fb4-c8ce-458b-aa9e-648c1fc58dad.pdf'
      ]
    },
    {
      'name': 'The HTML 5 Course 2020',
      'hours': 1,
      'by': 'Udemy',
      'date': '2020-11-04T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-783ca35b-de99-4bb6-8dd2-a83f48b9c311/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-783ca35b-de99-4bb6-8dd2-a83f48b9c311.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-783ca35b-de99-4bb6-8dd2-a83f48b9c311.pdf'
      ]
    },
    {
      'name': 'Everything You Need For Web Development',
      'hours': 2.5,
      'by': 'Udemy',
      'date': '2020-11-04T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-f965214b-e4e3-4853-bc7f-cec7de80e0a1/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-f965214b-e4e3-4853-bc7f-cec7de80e0a1.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-f965214b-e4e3-4853-bc7f-cec7de80e0a1.pdf'
      ]
    },
    {
      'name': 'JavaScript Course: Complete Guide (Step by Step)',
      'hours': 2,
      'by': 'Udemy',
      'date': '2020-09-07T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-ff6e3f89-c25b-49b0-9df1-f5ab3d8edeab/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-ff6e3f89-c25b-49b0-9df1-f5ab3d8edeab.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-ff6e3f89-c25b-49b0-9df1-f5ab3d8edeab.pdf'
      ]
    },
    {
      'name': 'The Complete Developer Bootcamp',
      'hours': 4.5,
      'by': 'Udemy',
      'date': '2020-11-02T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-3473059e-b8c9-4e5d-afd4-c62502a4e1df/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-3473059e-b8c9-4e5d-afd4-c62502a4e1df.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-3473059e-b8c9-4e5d-afd4-c62502a4e1df.pdf'
      ]
    },
    {
      'name': 'Create a Members Only Blog using PHP, MySQL, & AJAX',
      'hours': 2,
      'by': 'Udemy',
      'date': '2020-10-10T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-6a266817-1ee9-4d16-baa9-cd20214b07c9/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-6a266817-1ee9-4d16-baa9-cd20214b07c9.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-6a266817-1ee9-4d16-baa9-cd20214b07c9.pdf'
      ]
    },
    {
      'name': 'Apache Web Server',
      'hours': 1,
      'by': 'Udemy',
      'date': '2020-10-29T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-87f250a8-b429-42fe-aed6-85987343533d/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-87f250a8-b429-42fe-aed6-85987343533d.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-87f250a8-b429-42fe-aed6-85987343533d.pdf'
      ]
    },
    {
      'name': 'Deliver software faster with Microservices',
      'hours': 1,
      'by': 'Udemy',
      'date': '2020-10-26T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-f747ee09-fec8-42e1-968d-0362e52acf10/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-f747ee09-fec8-42e1-968d-0362e52acf10.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-f747ee09-fec8-42e1-968d-0362e52acf10.pdf'
      ]
    },
    {
      'name': 'DevOps Tools for Beginners: Git in 1 hour',
      'hours': 1,
      'by': 'Udemy',
      'date': '2020-10-23T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-f7db2d1f-a702-4362-a118-2b017a5e5443/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-f7db2d1f-a702-4362-a118-2b017a5e5443.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-f7db2d1f-a702-4362-a118-2b017a5e5443.pdf'
      ]
    },
    {
      'name': 'Basics Web Design Course For Beginners',
      'hours': 1,
      'by': 'Udemy',
      'date': '2020-06-14T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-a079c4b5-5053-4291-978d-ea0010458284/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-a079c4b5-5053-4291-978d-ea0010458284.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-a079c4b5-5053-4291-978d-ea0010458284.pdf'
      ]
    },
    {
      'name': 'Most Essential & Popular Excel Formulas And Functions - 2021',
      'hours': 3.5,
      'by': 'Udemy',
      'date': '2020-10-22T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-fd224a5a-8d00-4264-b38e-dff76396ab96/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-fd224a5a-8d00-4264-b38e-dff76396ab96.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-fd224a5a-8d00-4264-b38e-dff76396ab96.pdf'
      ]
    },
    {
      'name': 'Microsoft Excel -Basic Excel/ Advanced Excel Formulas',
      'hours': 4.5,
      'by': 'Udemy',
      'date': '2020-10-24T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-5fd86c67-fe38-464a-8a06-30622a29975f/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-5fd86c67-fe38-464a-8a06-30622a29975f.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-5fd86c67-fe38-464a-8a06-30622a29975f.pdf'
      ]
    },
    {
      'name': 'Kotlin | Introducción a la Programación',
      'hours': 3.5,
      'by': 'Udemy',
      'date': '2020-10-24T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-42a2a3d6-59cd-4f9a-8349-4a284d10c242/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-42a2a3d6-59cd-4f9a-8349-4a284d10c242.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-42a2a3d6-59cd-4f9a-8349-4a284d10c242.pdf'
      ]
    },
    {
      'name': 'DevOps Fundamentals',
      'hours': 2,
      'by': 'Udemy',
      'date': '2020-10-21T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-2f634eba-be0a-46a7-b3b0-841185912e32/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-2f634eba-be0a-46a7-b3b0-841185912e32.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-2f634eba-be0a-46a7-b3b0-841185912e32.pdf'
      ]
    },
    {
      'name': 'Programación en C# desde cero',
      'hours': 4.5,
      'by': 'Udemy',
      'date': '2020-10-20T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-db47d89a-fbd7-46f9-9a3e-a43e5a7eb7dd/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-db47d89a-fbd7-46f9-9a3e-a43e5a7eb7dd.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-db47d89a-fbd7-46f9-9a3e-a43e5a7eb7dd.pdf'
      ]
    },
    {
      'name': 'Start Coding Browser Extensions Using JavaScript!',
      'hours': 2,
      'by': 'Udemy',
      'date': '2020-10-10T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-5355c3da-ab74-447b-a90f-884b4939627d/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-5355c3da-ab74-447b-a90f-884b4939627d.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-5355c3da-ab74-447b-a90f-884b4939627d.pdf'
      ]
    },
    {
      'name': 'Modern JavaScript for React JS - ES6.',
      'hours': 1.5,
      'by': 'Udemy',
      'date': '2020-09-26T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-21fddef5-a340-4052-a3f2-6d10cdf38f34/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-21fddef5-a340-4052-a3f2-6d10cdf38f34.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-21fddef5-a340-4052-a3f2-6d10cdf38f34.pdf'
      ]
    },
    {
      'name': 'JavaScript ES6 Course: ECMA Script 6 (Step by Step)',
      'hours': 1,
      'by': 'Udemy',
      'date': '2020-09-23T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-d4e0bf29-cfe1-472b-b069-5ce0075c0f23/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-d4e0bf29-cfe1-472b-b069-5ce0075c0f23.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-d4e0bf29-cfe1-472b-b069-5ce0075c0f23.pdf'
      ]
    },
    {
      'name': 'Bootstrap & jQuery - Certification Course for Beginners',
      'hours': 4,
      'by': 'Udemy',
      'date': '2020-07-04T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-3088de04-3051-4593-918f-968427e94a6f/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-3088de04-3051-4593-918f-968427e94a6f.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-3088de04-3051-4593-918f-968427e94a6f.pdf'
      ]
    },
    {
      'name': 'Creating Payload Guide For Ethical Hackers',
      'hours': 1,
      'by': 'Udemy',
      'date': '2020-07-30T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-3d4f91d9-38f3-4b65-bc5a-e520a075c74d/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-3d4f91d9-38f3-4b65-bc5a-e520a075c74d.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-3d4f91d9-38f3-4b65-bc5a-e520a075c74d.pdf'
      ]
    },
    {
      'name': 'Peak Productivity Hacks – Triple Your Productivity',
      'hours': 1,
      'by': 'Udemy',
      'date': '2020-07-30T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-66007ba4-3231-41ce-b4a5-3d764abdd4ed/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-66007ba4-3231-41ce-b4a5-3d764abdd4ed.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-66007ba4-3231-41ce-b4a5-3d764abdd4ed.pdf'
      ]
    },
    {
      'name': 'Liferay for Beginners Create Your Website Without Coding',
      'hours': 2.5,
      'by': 'Udemy',
      'date': '2020-07-06T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-90cc0728-483f-4348-8104-2c2e8220dafb/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-90cc0728-483f-4348-8104-2c2e8220dafb.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-90cc0728-483f-4348-8104-2c2e8220dafb.pdf'
      ]
    },
    {
      'name': 'CSS & JavaScript - Certification Course for Beginners',
      'hours': 3,
      'by': 'Udemy',
      'date': '2020-07-01T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-c16f1195-b855-44cc-83ea-e7baae5683d6/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-c16f1195-b855-44cc-83ea-e7baae5683d6.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-c16f1195-b855-44cc-83ea-e7baae5683d6.pdf'
      ]
    },
    {
      'name': 'HTML, JavaScript, & Bootstrap - Certification Course',
      'hours': 6.5,
      'by': 'Udemy',
      'date': '2020-06-30T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-860c720e-5e9c-40ae-97c2-1f9e70ddf016/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-860c720e-5e9c-40ae-97c2-1f9e70ddf016.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-860c720e-5e9c-40ae-97c2-1f9e70ddf016.pdf'
      ]
    },
    {
      'name': 'JavaScript & jQuery - Certification Course for Beginners',
      'hours': 2.5,
      'by': 'Udemy',
      'date': '2020-07-02T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-917fb1a7-1ec4-448a-b9f7-4674114b3437/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-917fb1a7-1ec4-448a-b9f7-4674114b3437.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-917fb1a7-1ec4-448a-b9f7-4674114b3437.pdf'
      ]
    },
    {
      'name': 'Practical Web Design & Development: 7 Courses in 1',
      'hours': 5,
      'by': 'Udemy',
      'date': '2020-06-14T00:00:00',
      'certs' : [
        'Practical Web Design & Development: 7 Courses in 1',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-ec1c19d9-c99d-4205-a116-44746bc3fd1e.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-ec1c19d9-c99d-4205-a116-44746bc3fd1e.pdf'
      ]
    },
    {
      'name': 'Angular 8 Certification Training (basic to advanced level)',
      'hours': 20.5,
      'by': 'Udemy',
      'date': '2021-05-19T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-52063515-f9f4-4c64-8a80-7281adb2c21d/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-52063515-f9f4-4c64-8a80-7281adb2c21d.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-52063515-f9f4-4c64-8a80-7281adb2c21d.pdf'
      ]
    },
    {
      'name': 'CSS Tech Gig  Intermediate',
      'hours': 1,
      'by': 'Tech Gig',
      'date': '2021-05-25T00:00:00',
      'certs' : [
        'https://www.mediafire.com/convkey/c1df/bz42y8y1251605gzg.jpg',
        'https://www.mediafire.com/convkey/c1df/bz42y8y1251605gzg.jpg',
        'https://www.mediafire.com/convkey/c1df/bz42y8y1251605gzg.jpg'
      ]
    },
    {
      'name': 'Learn HTML5 Programming From Beginner to Pro',
      'hours': 2.5,
      'by': 'Udemy',
      'date': '2021-05-25T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-311fb780-522c-43df-893a-13d16badb509/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-311fb780-522c-43df-893a-13d16badb509.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-311fb780-522c-43df-893a-13d16badb509.pdf'
      ]
    },
    {
      'name': 'HTML Basic',
      'hours': 1,
      'by': 'W3docs',
      'date': '2021-07-07T00:00:00',
      'certs' : [
        'https://www.w3docs.com/quiz/certificate/3/98.75/1625668332/V%C3%ADtor%20Manuel%20Ferreira%20da%20Silva/a7e71ac7d96e8da93439f392e6c515f0',
        'https://www.mediafire.com/convkey/4123/uc54uge5tq41zgc7g.jpg',
        ''
      ]
    },
    {
      'name': 'CSS Basic',
      'hours': 1,
      'by': 'W3docs',
      'date': '2021-05-25T00:00:00',
      'certs' : [
        'https://www.w3docs.com/quiz/certificate/5/95/1621954060/V%C3%ADtor%20Manuel%20Ferreira%20da%20Silva/f114dbce58a46cc3737e252aa5801aeb',
        'https://www.mediafire.com/convkey/f750/egkgd6cn8x8rsl5zg.jpg',
        ''
      ]
    },
    {
      'name': 'SoloLearn CSS',
      'hours': 3,
      'by': 'SoloLearn',
      'date': '2021-05-25T00:00:00',
      'certs' : [
        'https://www.mediafire.com/convkey/9312/x17u9x7bjkr5i6q7g.jpg',
        'https://www.sololearn.com/Certificate/1023-5041222/jpg',
        'https://www.sololearn.com/Certificate/1023-5041222/pdf'
      ]
    },
    {
      'name': 'Learn Font Awesome',
      'hours': 1,
      'by': 'Udemy',
      'date': '2021-05-26T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-8c17a913-f312-4ddb-8c16-da3c35052d9d/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-8c17a913-f312-4ddb-8c16-da3c35052d9d.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-8c17a913-f312-4ddb-8c16-da3c35052d9d.pdf'
      ]
    },
    {
      'name': 'ES 6 Basic',
      'hours': 1,
      'by': 'W3docs',
      'date': '2021-05-28T00:00:00',
      'certs' : [
        'https://www.w3docs.com/quiz/certificate/32/88.888888888889/1622202207/V%C3%ADtor%20Manuel%20Ferreira%20da%20Silva/371326d7d365fede9ba7c514fae8ae00',
        'https://www.mediafire.com/convkey/1fcf/z8w5qi1t0t2ivd47g.jpg',
        ''
      ]
    },
    {
      'name': 'Diversity At Workplace',
      'hours': 1,
      'by': 'Udemy',
      'date': '2021-05-31T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-e8eb9e3f-1c23-46b0-8378-e1e8a8ea715b/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-e8eb9e3f-1c23-46b0-8378-e1e8a8ea715b.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-e8eb9e3f-1c23-46b0-8378-e1e8a8ea715b.pdf'
      ]
    },
    {
      'name': 'C# .NET tutorial for complete beginners - Masterclass in 3h',
      'hours': 3,
      'by': 'Udemy',
      'date': '2021-05-31T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-24aaea3e-417c-4dcb-a231-4b8a0e1300a6/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-24aaea3e-417c-4dcb-a231-4b8a0e1300a6.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-24aaea3e-417c-4dcb-a231-4b8a0e1300a6.pdf'
      ]
    },
    {
      'name': 'Frontend Fundamentals',
      'hours': 10,
      'by': 'Pirple',
      'date': '2021-06-17T00:00:00',
      'certs' : [
        'https://www.pirple.com/certificates/xihhzhpr0s',
        'https://www.mediafire.com/convkey/a826/fi4axslg0ce6dro7g.jpg',
        ''
      ]
    },
    {
      'name': 'C# And Visual Studio Productivity Masterclass',
      'hours': 2.5,
      'by': 'Udemy',
      'date': '2021-06-21T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-0a1bcf99-abc8-4925-ae23-43c0c9a59a82/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-0a1bcf99-abc8-4925-ae23-43c0c9a59a82.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-0a1bcf99-abc8-4925-ae23-43c0c9a59a82.pdf'
      ]
    },
    {
      'name': 'HTML, CSS, and Javascript for Web Developers',
      'hours': 30,
      'by': 'Coursera',
      'date': '2021-06-30T00:00:00',
      'certs' : [
        'https://www.coursera.org/account/accomplishments/verify/A9TGUDQBGCZQ',
        'https://www.mediafire.com/convkey/f2dd/ssj8hx2qbz9ioq87g.jpg',
        'https://www.coursera.org/account/accomplishments/certificate/A9TGUDQBGCZQ'
      ]
    },
    {
      'name': 'Competencias digitales. Herramientas de ofimática (Microsoft Word, Excel, Power Point)',
      'hours': 45,
      'by': 'Coursera',
      'date': '2020-10-16T00:00:00',
      'certs' : [
        'https://www.coursera.org/account/accomplishments/verify/VDRTQJ5SRMCD',
        'https://www.mediafire.com/convkey/2842/a9r3or3p2tje36x7g.jpg',
        'https://www.coursera.org/account/accomplishments/certificate/VDRTQJ5SRMCD'
      ]
    },
    {
      'name': 'Front-End JavaScript Frameworks: Angular',
      'hours': 24,
      'by': 'Coursera',
      'date': '2021-04-14T00:00:00',
      'certs' : [
        'https://www.coursera.org/account/accomplishments/verify/3LHVBM3JWU4X',
        'https://www.mediafire.com/convkey/2f2a/1ggksfwy1pcc5rd4g.jpg',
        'https://www.coursera.org/account/accomplishments/certificate/3LHVBM3JWU4X'
      ]
    },
    {
      'name': 'Exploring Emerging Technologies for Lifelong Learning and Success',
      'hours': 5,
      'by': 'Coursera',
      'date': '2020-05-13T00:00:00',
      'certs' : [
        'https://www.coursera.org/account/accomplishments/verify/TASHM4M2MX5U',
        'https://www.mediafire.com/convkey/810e/c6y84s0pbdv4hyk4g.jpg',
        'https://www.coursera.org/account/accomplishments/certificate/TASHM4M2MX5U'
      ]
    },
    {
      'name': 'IA para todos',
      'hours': 12,
      'by': 'Coursera',
      'date': '2020-10-05T00:00:00',
      'certs' : [
        'https://www.coursera.org/account/accomplishments/verify/WXDSXGV2PZWC',
        'https://www.mediafire.com/convkey/c59d/h4jtp8x4y857c794g.jpg',
        'https://www.coursera.org/account/accomplishments/certificate/WXDSXGV2PZWC'
      ]
    },
    {
      'name': 'TECH GIG HTML Beginner Skill Test',
      'hours': 1,
      'by': 'TECHGIG',
      'date': '2021-07-07T00:00:00',
      'certs' : [
        'https://www.mediafire.com/view/hp8qzc0ekqhg167/certificate_techgig_html.png/file',
        'https://www.mediafire.com/convkey/0bed/hp8qzc0ekqhg1677g.jpg',
        ''
      ]
    },
    {
      'name': 'Angular + Nest JS course',
      'hours': 3,
      'by': 'SoloLearn',
      'date': '2021-04-23T00:00:00',
      'certs' : [
        '',
        'https://www.mediafire.com/convkey/1c37/7ajycufzmwfpiy77g.jpg',
        ''
      ]
    },
    {
      'name': 'C++ Tutorial course',
      'hours': 3,
      'by': 'SoloLearn',
      'date': '2018-03-14T00:00:00',
      'certs' : [
        '',
        'https://www.mediafire.com/convkey/8575/d20ctixz78g783o7g.jpg',
        ''
      ]
    },
    {
      'name': 'C# Tutorial course',
      'hours': 3,
      'by': 'SoloLearn',
      'date': '2017-06-13T00:00:00',
      'certs' : [
        '',
        'https://www.mediafire.com/convkey/b19a/x3ybj15px5akeyo7g.jpg',
        ''
      ]
    },
    {
      'name': 'C Tutorial course',
      'hours': 3,
      'by': 'SoloLearn',
      'date': '2018-12-22T00:00:00',
      'certs' : [
        '',
        'https://www.mediafire.com/convkey/bede/2wsx469diq4neuj7g.jpg',
        ''
      ]
    },
    {
      'name': 'HTML Fundamentals course',
      'hours': 3,
      'by': 'SoloLearn',
      'date': '2017-06-27T00:00:00',
      'certs' : [
        '',
        'https://www.mediafire.com/convkey/3e65/jyje553879biezs7g.jpg',
        ''
      ]
    },
    {
      'name': 'JavaScript Tutorial course',
      'hours': 3,
      'by': 'SoloLearn',
      'date': '2017-07-11T00:00:00',
      'certs' : [
        '',
        'https://www.mediafire.com/convkey/41f6/nayicltx5azmm5q7g.jpg',
        ''
      ]
    },
    {
      'name': 'Java Tutorial course',
      'hours': 3,
      'by': 'SoloLearn',
      'date': '2017-06-21T00:00:00',
      'certs' : [
        '',
        'https://www.mediafire.com/convkey/18cb/mj6q4fu8vvpod0r7g.jpg',
        ''
      ]
    },
    {
      'name': 'PHP Tutorial course',
      'hours': 3,
      'by': 'SoloLearn',
      'date': '2017-07-11T00:00:00',
      'certs' : [
        '',
        'https://www.mediafire.com/convkey/139f/7sfpktjykqx8nln7g.jpg',
        ''
      ]
    },
    {
      'name': 'Python 3 Tutorial course',
      'hours': 3,
      'by': 'SoloLearn',
      'date': '2017-10-13T00:00:00',
      'certs' : [
        '',
        'https://www.mediafire.com/convkey/4237/fevasd3gw7wxkmq7g.jpg',
        ''
      ]
    },
    {
      'name': 'Ruby Tutorial course',
      'hours': 3,
      'by': 'SoloLearn',
      'date': '2017-10-03T00:00:00',
      'certs' : [
        '',
        'https://www.mediafire.com/convkey/5cde/10dx6694dcn82907g.jpg',
        ''
      ]
    },
    {
      'name': 'SQL Fundamentals course',
      'hours': 3,
      'by': 'SoloLearn',
      'date': '2017-07-12T00:00:00',
      'certs' : [
        '',
        'https://www.mediafire.com/convkey/2d31/ro4tizu60ijv3xi7g.jpg',
        ''
      ]
    },
    {
      'name': 'jQuery Tutorial course',
      'hours': 3,
      'by': 'SoloLearn',
      'date': '2018-02-07T00:00:00',
      'certs' : [
        '',
        'https://www.mediafire.com/convkey/1809/usjgf8hwi94sqk17g.jpg',
        ''
      ]
    },
    {
      'name': 'Responsive Web Design course',
      'hours': 3,
      'by': 'SoloLearn',
      'date': '2021-04-20T00:00:00',
      'certs' : [
        '',
        'https://www.mediafire.com/convkey/c613/o8gzkrfe76xkvmb7g.jpg',
        ''
      ]
    },
    {
      'name': 'Coding for Marketers course',
      'hours': 3,
      'by': 'SoloLearn',
      'date': '2021-08-30T00:00:00',
      'certs' : [
        'https://www.mediafire.com/convkey/1cba/fec6qerhnc7mpo17g.jpg',
        'https://www.mediafire.com/convkey/1cba/fec6qerhnc7mpo17g.jpg',
        ''
      ]
    },
    {
      'name': 'Front-End Web UI Frameworks and Tools: Bootstrap 4',
      'hours': 24,
      'by': 'Coursera',
      'date': '2021-09-28T00:00:00',
      'certs' : [
        'https://www.coursera.org/account/accomplishments/verify/99775EBJ9MJN',
        'https://www.mediafire.com/convkey/1d84/au7sztaa0v2j1x87g.jpg',
        'https://www.coursera.org/account/accomplishments/certificate/99775EBJ9MJN'
      ]
    },
    {
      'name': 'Web Service REST APIs - The Complete Guide',
      'hours': 9.5,
      'by': 'Udemy',
      'date': '2021-09-06T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-16841ccb-97d5-49c5-83da-d2bafe04507f/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-16841ccb-97d5-49c5-83da-d2bafe04507f.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-16841ccb-97d5-49c5-83da-d2bafe04507f.pdf'
      ]
    },
    {
      'name': 'API Engineer: Node | Python | Django | Postman | PostgreSQL',
      'hours': 5.5,
      'by': 'Udemy',
      'date': '2021-09-09T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-a978fdf6-06ab-41a7-a62f-dee54510450b/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-a978fdf6-06ab-41a7-a62f-dee54510450b.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-a978fdf6-06ab-41a7-a62f-dee54510450b.pdf'
      ]
    },
    {
      'name': '[2021] The Complete Guide to .NET Core (.NET 5) Web API',
      'hours': 6,
      'by': 'Udemy',
      'date': '2021-09-15T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-0f086e86-931f-4d5b-98ca-4343e445d356/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-0f086e86-931f-4d5b-98ca-4343e445d356.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-0f086e86-931f-4d5b-98ca-4343e445d356.pdf'
      ]
    },
    {
      'name': 'Certification Course in Work & Workforce Management',
      'hours': 5,
      'by': 'Udemy',
      'date': '2021-09-16T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-99619ff3-a393-4d77-bac7-d55f8b3563da/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-99619ff3-a393-4d77-bac7-d55f8b3563da.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-99619ff3-a393-4d77-bac7-d55f8b3563da.pdf'
      ]
    },
    {
      'name': 'Angular 12, .NET Core Web API & Microsoft SQL full-stack app',
      'hours': 1,
      'by': 'Udemy',
      'date': '2021-09-22T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-2e89096b-9a11-495f-922c-cb47b5477671/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-2e89096b-9a11-495f-922c-cb47b5477671.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-2e89096b-9a11-495f-922c-cb47b5477671.pdf'
      ]
    },
    {
      'name': 'Learn Basic HTML, CSS & JavaScript (Typescript) with Svelte',
      'hours': 1,
      'by': 'Udemy',
      'date': '2021-08-30T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-36b52255-b6bb-4638-a790-29ca92f6bad1/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-36b52255-b6bb-4638-a790-29ca92f6bad1.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-36b52255-b6bb-4638-a790-29ca92f6bad1.pdf'
      ]
    },
    {
      'name': 'Swagger API Documentation with Node JS',
      'hours': 1,
      'by': 'Udemy',
      'date': '2021-08-30T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-f36a7e65-676c-41b8-80f7-680b80b943e5/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-f36a7e65-676c-41b8-80f7-680b80b943e5.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-f36a7e65-676c-41b8-80f7-680b80b943e5.pdf'
      ]
    },
    {
      'name': 'API Crash Course: What is an API, how to create it & test it',
      'hours': 3.5,
      'by': 'Udemy',
      'date': '2021-08-23T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-bc81887e-e765-4ad7-a9b0-4661e692249a/',
        'https://udemy-certificate.s3.amazonaws.com/image/UC-bc81887e-e765-4ad7-a9b0-4661e692249a.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-bc81887e-e765-4ad7-a9b0-4661e692249a.pdf'
      ]
    },
    {
      'name': 'Formação Pedagógica Inicial de Formadores',
      'hours': 105,
      'by': 'Bee Consulting',
      'date': '2006-09-29T00:00:00',
      'certs' : [
        'https://www.mediafire.com/convkey/1e01/sbesyv0v5gwbi857g.jpg',
        'https://www.mediafire.com/convkey/1e01/sbesyv0v5gwbi857g.jpg',
        ''
      ]
    },
    {
      'name': 'How Well Do You Know Angular',
      'hours': 1,
      'by': 'ProProfs',
      'date': '2021-04-16T00:00:00',
      'certs' : [
        'https://www.mediafire.com/convkey/139f/gi81m94itqckhvn7g.jpg',
        'https://www.mediafire.com/convkey/139f/gi81m94itqckhvn7g.jpg',
        ''
      ]
    },
    {
      'name': 'Computer Fundamentals 101',
      'hours': 1,
      'by': 'ProProfs',
      'date': '2020-10-24T00:00:00',
      'certs' : [
        'https://www.mediafire.com/convkey/bbb7/8vo15pj55tx2n2e7g.jpg',
        'https://www.mediafire.com/convkey/bbb7/8vo15pj55tx2n2e7g.jpg',
        ''
      ]
    },
    {
      'name': 'Internet Terms',
      'hours': 1,
      'by': 'ProProfs',
      'date': '2020-10-24T00:00:00',
      'certs' : [
        'https://www.mediafire.com/convkey/1b33/5foug5guws6nuat7g.jpg',
        'https://www.mediafire.com/convkey/1b33/5foug5guws6nuat7g.jpg',
        ''
      ]
    },
    {
      'name': 'JavaScript Basic Knowledge',
      'hours': 1,
      'by': 'ProProfs',
      'date': '2020-11-15T00:00:00',
      'certs' : [
        'https://www.mediafire.com/convkey/1117/ova11g0lm7mg9ll7g.jpg',
        'https://www.mediafire.com/convkey/1117/ova11g0lm7mg9ll7g.jpg',
        ''
      ]
    },
    {
      'name': 'JavaScript Academic',
      'hours': 1,
      'by': 'ProProfs',
      'date': '2020-11-15T00:00:00',
      'certs' : [
        'https://www.mediafire.com/convkey/4fbf/xvxp03p58d9oecs7g.jpg',
        'https://www.mediafire.com/convkey/4fbf/xvxp03p58d9oecs7g.jpg',
        ''
      ]
    },
    {
      'name': 'JavaScript Test',
      'hours': 1,
      'by': 'ProProfs',
      'date': '2020-11-15T00:00:00',
      'certs' : [
        'https://www.mediafire.com/convkey/925e/8xgwhuzetyoxc017g.jpg',
        'https://www.mediafire.com/convkey/925e/8xgwhuzetyoxc017g.jpg',
        ''
      ]
    },
    {
      'name': 'JavaScript Test',
      'hours': 1,
      'by': 'ProProfs',
      'date': '2020-11-15T00:00:00',
      'certs' : [
        'https://www.mediafire.com/convkey/925e/8xgwhuzetyoxc017g.jpg',
        'https://www.mediafire.com/convkey/925e/8xgwhuzetyoxc017g.jpg',
        ''
      ]
    },
    {
      'name': 'Linux Command Line',
      'hours': 1,
      'by': 'ProProfs',
      'date': '2020-10-24T00:00:00',
      'certs' : [
        'https://www.mediafire.com/convkey/4fed/1dhhlcnl9rzwq817g.jpg',
        'https://www.mediafire.com/convkey/4fed/1dhhlcnl9rzwq817g.jpg',
        ''
      ]
    },
    {
      'name': 'Types of Computers',
      'hours': 1,
      'by': 'ProProfs',
      'date': '2020-10-24T00:00:00',
      'certs' : [
        'https://www.mediafire.com/convkey/392f/izl14fmy7b0xdqy7g.jpg',
        'https://www.mediafire.com/convkey/392f/izl14fmy7b0xdqy7g.jpg',
        ''
      ]
    },
    {
      'name': 'Advanced Computer',
      'hours': 1,
      'by': 'ProProfs',
      'date': '2020-10-24T00:00:00',
      'certs' : [
        'https://www.mediafire.com/convkey/c964/y4bi2b0a0mplmrw7g.jpg',
        'https://www.mediafire.com/convkey/c964/y4bi2b0a0mplmrw7g.jpg',
        ''
      ]
    },
    {
      'name': 'Introduction to Angular',
      'hours': 2,
      'by': 'Great Learning',
      'date': '2022-01-03T00:00:00',
      'certs' : [
        'https://www.mediafire.com/convkey/b11d/1fosxyytckuv8lc7g.jpg',
        'https://www.mediafire.com/convkey/b11d/1fosxyytckuv8lc7g.jpg',
        ''
      ]
    },
    {
      'name': 'Angular for Beginners',
      'hours': 2.5,
      'by': 'Great Learning',
      'date': '2022-01-06T00:00:00',
      'certs' : [
        'https://www.mediafire.com/convkey/0a36/1fosxyytckuv8lc7g.jpg',
        'https://www.mediafire.com/convkey/0a36/1fosxyytckuv8lc7g.jpg',
        ''
      ]
    },
    {
      'name': 'Angular for Intermediate Level',
      'hours': 2.5,
      'by': 'Great Learning',
      'date': '2022-01-09T00:00:00',
      'certs' : [
        'https://www.mediafire.com/convkey/6dad/czihxn2pk1kpegp7g.jpg',
        'https://www.mediafire.com/convkey/6dad/czihxn2pk1kpegp7g.jpg',
        ''
      ]
    },
    {
      'name': 'Angular for Advanced Level',
      'hours': 3,
      'by': 'Great Learning',
      'date': '2022-01-12T00:00:00',
      'certs' : [
        'https://www.mediafire.com/convkey/d546/uz2j53uj9dtndv17g.jpg',
        'https://www.mediafire.com/convkey/d546/uz2j53uj9dtndv17g.jpg',
        ''
      ]
    },
    {
      'name': 'Game Development With JS',
      'hours': 3,
      'by': 'SoloLearn',
      'date': '2022-01-25T00:00:00',
      'certs' : [
        'https://www.mediafire.com/convkey/8744/pqxqpvzic24ots67g.jpg',
        'https://www.mediafire.com/convkey/8744/pqxqpvzic24ots67g.jpg',
        'https://www.sololearn.com/Certificate/1140-5041222/pdf'
      ]
    },
    {
      'name': 'The Advanced HTML5 Course',
      'hours': 1,
      'by': 'Udemy',
      'date': '2022-01-25T00:00:00',
      'certs' : [
        'https://www.mediafire.com/convkey/0d80/4lsaq6jk2whpnbp7g.jpg',
        'https://www.mediafire.com/convkey/0d80/4lsaq6jk2whpnbp7g.jpg',
        'https://www.udemy.com/certificate/UC-6c856025-9098-475b-a8d8-26fd774cd4ec/'
      ]
    },
    {
      'name': 'Protocolos de redes - instalação e configuação em sistemas linux',
      'hours': 50,
      'by': 'Ciência e Letras',
      'date': '2012-10-15T00:00:00',
      'certs' : [
        'https://www.mediafire.com/convkey/e169/j1uzy2puanbpxbp7g.jpg',
        'https://www.mediafire.com/convkey/e169/j1uzy2puanbpxbp7g.jpg',
        'https://www.mediafire.com/convkey/e169/j1uzy2puanbpxbp7g.jpg'
      ]
    },
    {
      'name': 'Sistema Operativo - Distribuições Linux',
      'hours': 50,
      'by': 'Ciência e Letras',
      'date': '2012-11-14T00:00:00',
      'certs' : [
        'https://www.mediafire.com/convkey/79a2/4wyhp3ircjatoso7g.jpg',
        'https://www.mediafire.com/convkey/79a2/4wyhp3ircjatoso7g.jpg',
        'https://www.mediafire.com/convkey/79a2/4wyhp3ircjatoso7g.jpg'
      ]
    },
    {
      'name': 'Aprende Typescript de 0 a 100',
      'hours': 3,
      'by': 'Udemy',
      'date': '2022-01-27T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-eb449d77-c512-4969-8ea2-b3ecddc5f33b',
        'https://www.mediafire.com/convkey/2730/x8p0cx0j2r4m5tc7g.jpg',
        'https://udemy-certificate.s3.amazonaws.com/pdf/UC-eb449d77-c512-4969-8ea2-b3ecddc5f33b.pdf'
      ]
    },
    {
      'name': 'Visual Studio Online',
      'hours': 1,
      'by': 'Great Learning',
      'date': '2022-01-27T00:00:00',
      'certs' : [
        'https://www.mediafire.com/convkey/30b0/6b8u4v05p8lz0te7g.jpg',
        'https://www.mediafire.com/convkey/30b0/6b8u4v05p8lz0te7g.jpg',
        'https://www.mediafire.com/convkey/30b0/6b8u4v05p8lz0te7g.jpg'
      ]
    },
    {
      'name': 'Web Development Fundamentals',
      'hours': 3,
      'by': 'SoloLearn',
      'date': '2022-02-03T00:00:00',
      'certs' : [
        'https://www.mediafire.com/convkey/5f31/mgzr4cp97ntusgq7g.jpg',
        'https://www.mediafire.com/convkey/5f31/mgzr4cp97ntusgq7g.jpg',
        'https://www.mediafire.com/convkey/5f31/mgzr4cp97ntusgq7g.jpg'
      ]
    },
    {
      'name': '.Net Fundamentals',
      'hours': 2,
      'by': 'Great Learning',
      'date': '2022-02-04T00:00:00',
      'certs' : [
        'https://www.mediafire.com/convkey/e814/pnrc35dutsq32k07g.jpg',
        'https://www.mediafire.com/convkey/e814/pnrc35dutsq32k07g.jpg',
        'https://www.mediafire.com/convkey/e814/pnrc35dutsq32k07g.jpg'
      ]
    },
    {
      'name': 'MSK TypeScript Bootcamp',
      'hours': 3,
      'by': 'Udemy',
      'date': '2022-02-15T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-3b23c64b-373e-45d0-ad63-a5bfb4ddc3b6/',
        'https://www.mediafire.com/convkey/eb47/rpu3a8124ag1yat7g.jpg',
        'https://www.mediafire.com/convkey/e814/pnrc35dutsq32k07g.jpg'
      ]
    },
    {
      'name': 'Batch Script Programming Crash Course (CMD)',
      'hours': 2,
      'by': 'Udemy',
      'date': '2022-02-22T00:00:00',
      'certs' : [
        'https://www.udemy.com/certificate/UC-69824c20-8513-41dd-95ad-3fb41b83db29/',
        'https://www.mediafire.com/convkey/854a/7sn7td5snhur7b97g.jpg',
        'https://www.mediafire.com/convkey/854a/7sn7td5snhur7b97g.jpg'
      ]
    },

  ];