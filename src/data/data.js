import hertsImage from "../img/hertfordshire_university.jpg";
import collegeImage from "../img/college.jpg";
import schoolImage from "../img/school.jpg";

export const cardData = [
    {
      place: "High School",
      name: "Caister High School",
      image: schoolImage,
      stats: 8,
      content: [],
      qualifications: [
        {
          type: "GCSEs",
          subjects: [
            { name: "Information Technology", result: "A", content: [] },
            { name: "Maths", result: "B", content: [] },
            { name: "English Language", result: "C", content: [] },
            { name: "English Literature", result: "C", content: [] },
          ]
        }
      ],
    },

    {
      place: "College",
      name: "East Norfolk Sixth Form College",
      image: collegeImage,
      stats: 4,
      content: ["Data structures and algorithms"],
      qualifications: [
        {
          type: "A-Levels",
          subjects: [
            { name: "Computing", result: "Pass", content: ["Data structures and algorithms"] },
            { name: "Physics", result: "Pass", content: [] },
            { name: "Social & Environmental Biology", result: "Pass", content: [] },
          ]
        },
        {
          type: "AS-Levels",
          subjects: [
            { name: "General Studies", result: "Pass", content: [] },
          ]
        }
      ]
    },
    {
      place: "University",
      name: "University of Hertfordshire",
      image: hertsImage,
      stats: 1,
      content: [
                "Software systems design",
                "Programming (C++)",
                "OOP Programming (Java)",
                "Computer architecture",
                "Computer science fundamentals",
                "Web services using SOAP",
                "Web development (.NET / PHP)",
                "Networks",
              ],
      qualifications: [
        {
          type: "BSc (Hons) Degree",
          subjects: [
            {
              name: "Computer Systems & Networks",
              result: "Pass",
              content: [
                "Software systems design",
                "Programming (C++)",
                "OOP Programming (Java)",
                "Computer architecture",
                "Computer science fundamentals",
                "Web services using SOAP",
                "Web development (.NET / PHP)",
                "Networks",
              ]
            }
          ]
        }
      ]
    }
  ]