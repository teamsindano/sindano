//images for team section
import anshulaNathan from "../images/team/anshula_nathan.png";
import nandiAllman from "../images/team/nandi_allman.png";
import anyaMarshall from "../images/team/anya_marshall.png";
import coleBuckle from "../images/team/cole_buckle.png";
import ritChowdhury from "../images/team/rit_chowdhury.png";
import pieChart from "../images/piechart.svg";

export const data = {
  chartStats: [
    { content: "Covered by my health insurance", number: 78 },
    { content: "Cost I have to pay", number: 74 },
    { content: "Past experience was good", number: 74 },
    {
      content: "A clinician has good expertise (eg, training, schooling)",
      number: 70,
    },
    { content: "Friendliness of the staff", number: 69 },
    { content: "A facility has a good reputation/scored well", number: 68 },
    { content: "A clinician has a good reputation/scored well", number: 68 },
    { content: "Facilities were up-to-date/nice", number: 68 },
    {
      content: "How convenient the choices are for when can get care",
      number: 67,
    },
    {
      content: "How convenient the choices are for where to get care",
      number: 66,
    },
    {
      content: "The care provider has my medical history/information",
      number: 64,
    },
    { content: "Following your clinician's recommendation", number: 62 },
  ],

  statsCards: [
    {
      id: 1,
      cardHeader: "76%",
      cardText:
        "Reported experiencing at least one symptom of a mental health condition in the past year",
      source:
        "Source: Jade Y. (2020), Data Report on mental health state of LGBTQ+ people in the U.S., source",
    },
    {
      id: 2,
      cardHeader: "2-4x",
      cardText:
        "Times LGBTQ+ American adults are more likely to experience depression, anxiety and suicidal ideation than non-LGBTQ+ American adults",
      source:
        "Source: Jade Y. (2020), Data Report on mental health state of LGBTQ+ people in the U.S., source",
    },
    {
      id: 3,
      cardHeader: "6x",
      cardText:
        "LGBTQ+ teens are six times more likely to experience symptoms of depression than non-LGBTQ+ identifying teens.",
      source:
        "Source: Jade Y. (2020), Data Report on mental health state of LGBTQ+ people in the U.S., source",
    },
    {
      id: 4,
      cardHeader: "22%",
      cardText:
        "Of transgender individuals say they have avoided doctors or health care our of concern they would be discriminated against.",
      source:
        "Source: Jade Y. (2020), Data Report on mental health state of LGBTQ+ people in the U.S., source",
    },
  ],

  team: [
    {
      image: anshulaNathan,
      name: "Anshula Nathan (she/her)",
      title: "Director of Research and Health Informatics",
    },
    {
      image: nandiAllman,
      name: "Nandi K. Allman (they/them)",
      title: "Director of Product and Community",
    },
    {
      image: anyaMarshall,
      name: "Anya Marshall (she/her)",
      title:
        "Key Technical Advisor - Software Engineering, Product Development and Data Engineering",
    },
    {
      image: coleBuckle,
      name: "Cole Buckle (she/her)",
      title: "Software Development",
    },
    {
      image: ritChowdhury,
      name: "Rit Chowdhury (he/him)",
      title: "Consulting AI/ML Engineer",
    },
  ],

  whatWeDoCard: [
    {
      id: 1,
      cardTitle: "For Healthcare System",
      text: [
        "Many industry players lack needed technology and processes to support the key parts of value-based care—such as a [data-driven] population-based, whole-person approach to care.",
        " - David Gallegos, SVP of Consulting, Change Healthcare",
        "Reduce administrative inefficiencies, maximize revenue potential, drive quality of care improvements and enable value-based care innovations for better patient and practice outcomes.",
      ],
    },
    {
      id: 2,
      cardTitle: "For Mental Healthcare Centers",
      text: [
        "Reduce costs due to patient churn, low patient engagement, and poor patient outcomes leading to loss of employer contracts and mass exodus of therapists from insurance networks.",
        "Even with the movement toward value-based care, without reliable, accurate data, you can’t have value-based contracting. Many of these companies rely on clinically validated measures, such as the Patient Health Questionnaire (PHQ) and Generalized Anxiety Disorder (GAD) screeners to assess symptom improvement for anxiety, depression, and other common mental health issues. However, this is limited by the boundaries of the assessments and are not tailored for diverse and marginalized populations. These leads to poor measurement, and inadequate value-based care models.",
        "Get the real data with Sindano Health Insights. Our real-time insights and trends analytics and reporting relies upon scientifically backed forms and surveys completed by LGBTQ+ patient communities. Our Insights and Reporting dashboard delivers the rich, experience-level data that provides the context and framework necessary to design appropriate value-based care models that can truly enable better patient outcomes.",
      ],
    },
    {
      id: 3,
      cardTitle: "For Corporate Enterprise",
      text: [
        "About two-thirds of employees have clinically measurable mental health symptoms of anxiety or depression, according to SilverCloud Health’s 2021 Employee Mental Health and Wellbeing Checkup, which surveyed over 2,000 employed U.S. adults in July 2021. 1 poor mental health day per month = $53 billion less total income each year",
        "However, wellness programming, EAPs and even mental healthcare benefits are NOT making the difference employers hoped they would. Even though 53 percent of small firms (those with three to 200 employees) and 81 percent of large companies adopted some form adopted wellness programs of some kind, there was no statistically significant improvement, as measured by reduced health-care costs, improved employee underlying health measures, reduced absenteeism and improved overall job-performance-related data. Source: https://www.healthaffairs.org/doi/abs/10.1377/hlthaff.2020.01808 ",
        "With Sindano Health Insights, our real-time patient insights and trends reporting dashboard, employers can better understand the efficacy of specific provider mental health outcomes across several data points, including age, race, gender, sexual minority statusvand geographic location. To better contextualize the problem, employers with over 500 or more employees can also access similar reporting specific to their employee population.",
      ],
    },
    {
      id: 4,
      cardTitle: "For Policymakers and Advocates",
      text: [
        " Eradicate systemic inequities in the mental healthcare system for LGBTQ+ and other marginalized communities",
      ],
    },
  ],

  unfoldDataCard: [
    {
      id: 1,
      dataTitle: "71%",
      dataContent: [
        "Of providers reported Mental and behavioral health as the most significant need for the LGBTQ+ community",
      ],
      source:
        "Source: Jade Y. (2020), Data Report on mental health state of LGBTQ+ people in the U.S., source",
    },
    {
      id: 2,
      dataTitle: "Discrimination deters seeking care",
      dataContent: {
        bar1: "7%",
        bar2: "23%",
        bar1Explanation: "Non-LGBTQIA+",
        bar2Explanation: "LGBTQIA+",
      },
      source:
        "Source: Jade Y. (2020), Data Report on mental health state of LGBTQ+ people in the U.S., source",
    },
    {
      id: 3,
      dataTitle: "50%",
      dataContent: [
        "Of full-time U.S. workers have left previous roles due, at least in part, to mental health reasons.",
        "This number Rises to:",
        "81% of Gen Z respondents",
        "68% of Millenial respondens",
        "32% when considering voluntary departures",
      ],
      source:
        "Source: Jade Y. (2020), Data Report on mental health state of LGBTQ+ people in the U.S., source",
    },
    {
      id: 4,
      dataContent: {
        image: pieChart,
        pink: "Mental Disorders",
        grey: "Diabetes",
        palePurple: "Cardiovascular diseases",
        teal: "Chronic respiratory disease",
        blue: "Cancer",
      },
      text: "In 10\u00b9\u00b2 US$",
      source:
        "Source: Jade Y. (2020), Data Report on mental health state of LGBTQ+ people in the U.S., source",
    },
  ],
  questions: {
    title: "FAQ",
    cards: [
      {
        id: 1,
        question: "Q: What is Lorem Ipsum?",
        answer:
          "A: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: 2,
        question: "Q: What is Lorem Ipsum?",
        answer:
          "A: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: 3,
        question: "Q: What is Lorem Ipsum?",
        answer:
          "A: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: 4,
        question: "Q: What is Lorem Ipsum?",
        answer:
          "A: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
  },
};
