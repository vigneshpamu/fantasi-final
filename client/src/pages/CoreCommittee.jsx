import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from 'react-icons/io5'

const CoreCommittee = () => {
  // Updated committee members data
  const committeeMembers = [
    // CP and VCPs
    {
      name: 'Anulaxmi Thevar',
      designation: 'Chairperson',
      image: '/images/committee/Anulaxmi_Thevar.jpg',
      description:
        'Anulaxmi exudes positive energy, turning challenges into triumphs with her friendly leadership style, making the work environment a joyous place for the team.',
    },
    {
      name: 'Neetu',
      designation:
        'Vice Chairperson of Public Relations, Hospitality, Refreshment, and Marketing',
      // department: "",
      image: '/images/committee/Neetu.jpg',
      description:
        'Neetu is a multitasking maestro, leading with resilience and inclusivity, fostering a supportive environment that earns her respect and admiration from her peers.',
    },
    {
      name: 'Pranav Sharma',
      designation: 'Vice Chairperson Events & Creatives',
      // department: "",
      image: '/images/committee/Pranav_Sharma.jpg',
      description:
        'Pranav navigates complexities with empathy and decisiveness, providing unwavering support and protection to the team, guiding and inspiring them with his exceptional leadership qualities.',
    },
    {
      name: 'Mutthu Krishnan',
      designation: 'Vice Chairperson of O&D, Sports, and Logistics',
      // department: "",
      image: '/images/committee/Mutthu_Krishnan.jpg',
      description:
        "Mutthu's ambitious leadership and carefree energy infuse joy into the fest, reminding everyone to embrace spontaneity, making him the soul of the celebration.",
    },
    {
      name: 'Dipesh Barai',
      designation: 'Vice Chairperson of Admin and Technicals',
      // department: "",
      image: '/images/committee/Dipesh_Barai.jpg',
      description:
        "Dipesh's approachable demeanor and attention to detail create a friendly atmosphere, supporting team cohesion and handling challenges gracefully, fostering a positive environment for all.",
    },
    {
      name: 'Swaroop Dhayapule',
      designation: 'Vice Chairperson of Informals, Digitals, and Publicity',
      // department: "",
      image: '/images/committee/Swaroop_Dhayapule.jpg',
      description:
        "Swaroop's dedication and humor shine as he manages multiple departments effortlessly, earning recognition for his leadership and bringing countless trophies to the college.",
    },
    // HR Department
    {
      name: 'Vidhi',
      designation: 'Head of HR',
      // department: "HR",
      image: '/images/committee/Vidhi.jpg',
      description:
        "Vidhi's kind-hearted and supportive nature fosters unity among volunteers, leading with humility and understanding, making her a beloved leader without any ego.",
    },
    {
      name: 'Rakesh',
      designation: 'Jt. Head of HR',
      // department: "HR",
      image: '/images/committee/Rakesh.jpg',
      description:
        "Rakesh's caring demeanor and ability to create a lively atmosphere uplift the team, spreading positivity and turning any room into a vibrant space.",
    },
    {
      name: 'Mugdha',
      designation: 'Jt. Head of HR',
      // department: "HR",
      image: '/images/committee/Mugdha.jpg',
      description:
        "Mugdha's sweet and bubbly personality, coupled with her efficient leadership style, creates a productive yet enjoyable work environment, making her stand out as extraordinary.",
    },
    {
      name: 'Nischal',
      designation: 'Jt. Head of HR',
      // department: "HR",
      image: '/images/committee/Nischal.jpg',
      description:
        "Nischal's friendly and approachable nature, combined with his proactive spirit, spreads enthusiasm among the team, making him the go-to person for support and motivation.",
    },

    // Public Relations Department
    {
      name: 'Pranesh',
      designation: 'Head of Public Relations',
      // department: "Public Relations",
      image: '/images/committee/Pranesh.jpg',
      description:
        "Pranesh's excellent management skills and approachability create a well-coordinated and enjoyable work environment, fostering collaboration and friendship among the team.",
    },
    {
      name: 'Mittali',
      designation: 'Jt. Head of Public Relations',
      // department: "Public Relations",
      image: '/images/committee/Mittali.jpg',
      description:
        "Mittali's leadership in communication endeavors and dedication elevate the brand, fostering inclusivity and support for team growth, leaving an indelible mark on organizational success.",
    },
    {
      name: 'Aditya',
      designation: 'Jt. Head of Public Relations',
      // department: "Public Relations",
      image: '/images/committee/Aditya.jpg',
      description:
        "Aditya's radiant personality and cooperation inspire the team for continuous improvement, offering unwavering support and motivation, contributing significantly to the team's well-being.",
    },
    {
      name: 'Sailee',
      designation: 'Jt. Head of Public Relations',
      // department: "Public Relations",
      image: '/images/committee/Sailee.jpg',
      description:
        "Sailee's calm and helpful demeanor, along with her dedication to her work, makes her an inspiring leader who seamlessly transforms into a friend, winning the hearts of the team.",
    },

    // Events Department
    {
      name: 'Dhwaj',
      designation: 'Head of Events',
      // department: "Events",
      image: '/images/committee/Dhwaj.jpg',
      description:
        "Dhwaj's energy and enthusiasm contribute invaluable ideas to improve committee activities, inspiring others with courage and passion, creating a positive atmosphere loved by all.",
    },
    {
      name: 'Mahi',
      designation: 'Jt. Head of Events',
      // department: "Events",
      image: '/images/committee/Mahi.jpg',
      description:
        "Mahi's creativity, dedication, and kindness make her an inspiring and collaborative leader, known for her selfless and understanding nature, fostering a supportive environment for the entire team.",
    },
    {
      name: 'Disha',
      designation: 'Jt. Head of Events',
      // department: "Events",
      image: '/images/committee/Disha.jpg',
      description:
        "Disha's visionary artistry and leadership lead the team with grace, weaving a tapestry of ideas and adventures, creating memorable experiences while maintaining a balance of chill and productivity.",
    },
    {
      name: 'Aayushi',
      designation: 'Jt. Head of Events',
      // department: "Events",
      image: '/images/committee/Aayushi.jpg',
      description:
        "Aayushi's positive attitude and warm-hearted nature foster a fun and enjoyable work environment, assuring the team with excellent communication and leadership skills, making her a beloved leader.",
    },
    {
      name: 'Juhi',
      designation: 'Jt. Head of Events',
      // department: "Events",
      image: '/images/committee/Juhi.jpg',
      description:
        "Juhi's blend of fun and hard work maintains a strong work ethic, ensuring a sharp focus on goals and deadlines, while infusing tasks with energy and a playful spirit, making her the team's best leader.",
    },

    // Admin Department
    {
      name: 'Swasthi',
      designation: 'Head of Admin',
      // department: "Admin",
      image: '/images/committee/Swasthi.jpg',
      description:
        "Swasthi's loving and hardworking leadership style motivates and inspires the team, with attention to detail and organizational skills that make her an invaluable asset, exuding confidence, positivity, and mystery.",
    },
    {
      name: 'Pooja',
      designation: 'Jt. Head of Admin',
      // department: "Admin",
      image: '/images/committee/Pooja.jpg',
      description:
        "Pooja's blend of professionalism and approachability creates a comfortable team environment, excelling in guiding the team with confidence and efficiency, providing support and guidance when needed.",
    },
    {
      name: 'Kishan',
      designation: 'Jt. Head of Admin',
      // department: "Admin",
      image: '/images/committee/Kishan.jpg',
      description:
        "Kishan's calm and fun-loving nature, combined with his positive mindset and leadership skills, creates a positive atmosphere within the volunteers, handling situations gracefully and creating unity within the team.",
    },
    {
      name: 'Prerna',
      designation: 'Jt. Head of Admin',
      // department: "Admin",
      image: '/images/committee/Prerna.jpg',
      description:
        "Prerna's boldness, diplomacy, and balancing act in work endear her to the team, with her humors, simplicity, and lovely yet non-indulgent demeanor making her an exceptional leader.",
    },

    // Marketing Department
    {
      name: 'Krishna',
      designation: 'Head of Marketing',
      // department: "Marketing",
      image: '/images/committee/Krishna.jpg',
      description:
        "Krishna's disciplined leadership sets a high standard for excellence, turning potential chaos into a well-coordinated symphony, fostering collaboration and friendship, creating a workplace where success thrives.",
    },
    {
      name: 'Darshan',
      designation: 'Jt. Head of Marketing',
      // department: "Marketing",
      image: '/images/committee/Darshan.jpg',
      description:
        "Darshan's innovative marketing strategies and smart tactics persuade and inspire, while his strong personality and soft interior ensure a supportive and effective leadership style.",
    },
    {
      name: 'Rhea',
      designation: 'Jt. Head of Marketing',
      // department: "Marketing",
      image: '/images/committee/Rhea.jpg',
      description:
        "Rhea's persistence and belief in her schemes fuel her leadership, facing challenges with resilience and excellence, building skills and motivation within the team.",
    },
    {
      name: 'Kushal',
      designation: 'Jt. Head of Marketing',
      // department: "Marketing",
      image: '/images/committee/Kushal.jpg',
      description:
        "Kushal's entertaining leadership style and unwavering support create a strong team bond, providing guidance and advice to improve and excel, making him a valued leader in the team.",
    },

    // Creatives Department
    {
      name: 'Saniya',
      designation: 'Head of Creatives',
      // department: "Creatives",
      image: '/images/committee/Saniya.jpg',
      description:
        "Saniya's meticulous and precise leadership style ensures flawless execution of creative endeavors, with exceptional creativity and a supportive demeanor propelling the team towards excellence.",
    },
    {
      name: 'Amay',
      designation: 'Jt. Head of Creatives',
      // department: "Creatives",
      image: '/images/committee/Amay.jpg',
      description:
        "Amay's joyful personality and creative skills create a cheerful atmosphere, engaging and entertaining volunteers while effectively managing departmental tasks.",
    },
    {
      name: 'Madhura',
      designation: 'Jt. Head of Creatives',
      // department: "Creatives",
      image: '/images/committee/Madhura.jpg',
      description:
        "Madhura's calm and focused leadership style addresses volunteer concerns with empathy and determination, providing valuable support and guidance while maintaining a supportive and productive environment.",
    },

    // Technicals Department
    {
      name: 'Raeed Modak',
      designation: 'Head of Technicals',
      // department: "Technicals",
      image: '/images/committee/Raeed_Modak.jpg',
      description:
        "Raeed's expertise in music and sound systems, coupled with his friendly leadership style, creates a supportive environment for volunteers, with his knack for technical problem-solving making him an invaluable head.",
    },
    {
      name: 'Japbir Babra',
      designation: 'Jt. Head of Technicals',
      // department: "Technicals",
      image: '/images/committee/Japbir_Babra.jpg',
      description:
        "Japbir's knowledge of music editing and DJing, combined with his friendly and approachable demeanor, ensures a supportive and positive environment for volunteers, making him an important part of the team.",
    },

    // Publicity Department
    {
      name: 'Meet',
      designation: 'Head of Publicity',
      // department: "Publicity",
      image: '/images/committee/Meet.jpg',
      description:
        "Meet's leadership and dedication to publicity set a high standard for excellence, with a perfect fashion sense and supportive demeanor fostering collaboration and friendship within the team.",
    },
    {
      name: 'Khushi',
      designation: 'Jt. Head of Publicity',
      // department: "Publicity",
      image: '/images/committee/Khushi.jpg',
      description:
        "Khushi's commitment and humility create a supportive and trustworthy environment, with her dedication and support ensuring successful outcomes for the team.",
    },
    {
      name: 'Shreyas',
      designation: 'Jt. Head of Publicity',
      // department: "Publicity",
      image: '/images/committee/Shreyas.jpg',
      description:
        "Shreyas's positive attitude and energetic approach motivate the team to excel, with his supportive nature and teamwork creating a positive and productive atmosphere.",
    },

    // Informals Department
    {
      name: 'Saumya',
      designation: 'Head of Informals',
      // department: "Informals",
      image: '/images/committee/Saumya.jpg',
      description:
        "Saumya's spirit of competition and effective communication creates a cohesive and supportive environment, inspiring the team to outperform themselves, with her compassionate and resilient nature encouraging excellence.",
    },

    // Digitals Department
    {
      name: 'Aditya',
      designation: 'Head of Digitals',
      // department: "Digitals",
      image: '/images/committee/Aditya_Digitals.jpg',
      description:
        "Aditya's hard work and dedication shine through in every aspect of digital management, capturing memories and providing support with sarcasm and humor, making him an essential part of the team.",
    },
    {
      name: 'Gopika',
      designation: 'Jt. Head of Digitals',
      // department: "Digitals",
      image: '/images/committee/Gopika.jpg',
      description:
        "Gopika's kindness and helpfulness create a supportive environment for volunteers, with her excellent ideas and photography skills ensuring perfect moments are captured, making her an invaluable asset.",
    },
    {
      name: 'Neha',
      designation: 'Jt. Head of Digitals',
      // department: "Digitals",
      image: '/images/committee/Neha.jpg',
      description:
        "Neha's confidence and resilience shine through in her photography and videography, with her astute outlook and supportiveness leaving a lasting impression on the team, making her an indispensable leader.",
    },

    // Logistics Department
    {
      name: 'Gautam Lakshmanan',
      designation: 'Head of Logistics',
      // department: "Logistics",
      image: '/images/committee/Gautam_Lakshmanan.jpg',
      description:
        "Gautam's keen eye for detail and strategic planning ensure smooth operations, orchestrating logistics with dedication and efficiency, making him the driving force behind the fest's success.",
    },

    // O&D Department
    {
      name: 'Shravan Mhatre',
      designation: 'Head of O&D',
      // department: "O&D",
      image: '/images/committee/Shravan_Mhatre.jpg',
      description:
        "Shravan's humility and dedication ensure smooth and safe operations, putting others before himself and maintaining order, making him a dependable and trustworthy leader.",
    },
    {
      name: 'Jishnu',
      designation: 'Jt. Head of O&D',
      // department: "O&D",
      image: '/images/committee/Jishnu.jpg',
      description:
        "Jishnu's cheerful demeanor and ambition create harmony within the team, transforming chaos into harmony with his approachable and supportive leadership style.",
    },
    {
      name: 'Tarun',
      designation: 'Joint head of O&D',
      // department: "O&D",
      image: '/images/committee/Tarun.jpg',
      description:
        "Tarun's responsibility and reliability make him an invaluable asset, maintaining harmony and precision with his meticulous approach, ensuring structured excellence in all aspects of fest operations.",
    },
    {
      name: 'Gaurav',
      designation: 'Joint head of O&D',
      // department: "O&D",
      image: '/images/committee/Gaurav.jpg',
      description:
        "Gaurav's maturity and reliability ensure order and efficiency within the team, with his fun-loving nature and strong leadership creating a supportive and effective environment.",
    },
    {
      name: 'Happy',
      designation: 'Jt. Head of O&D',
      // department: "O&D",
      image: '/images/committee/Happy.jpg',
      description:
        "Happy's infectious happiness and resourcefulness create a positive and productive atmosphere within the department, motivating the team to give their best and maintaining harmony within the team.",
    },

    // Sports Department
    {
      name: 'Shrushti Shetty',
      designation: 'Head of Sports',
      // department: "Sports",
      image: '/images/committee/Shrushti_Shetty.jpg',
      description:
        "Shrushti's spirit of competition and effective communication create a supportive and cohesive environment, inspiring excellence and building strong connections within the team, making her a compassionate and resilient leader.",
    },
  ]

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="mb-8 mt-10 text-center">
        <h1 className="text-3xl font-bold mb-5">Organizing Committee</h1>
      </div>

      {/* Chairperson Section */}
      <div className="mb-10 max-w-lg mx-auto">
        <p className="text-xl font-semibold mb-2">Chairperson</p>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {/* Chairperson slide */}
          {committeeMembers
            .filter((member) => member.designation === 'Chairperson')
            .map((member, index) => (
              <SwiperSlide key={index}>
                {/* Chairperson card */}
                <div className="rounded-lg bg-gray-200 p-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto mb-2"
                  />
                  <p className="text-xl font-semibold">{member.name}</p>
                  <p className="text-lg">{member.designation}</p>
                  <p>{member.description}</p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* Vice Chairpersons Section */}
      <div className="mb-10 max-w-lg mx-auto">
        <p className="text-xl font-semibold mb-2">Vice Chairpersons</p>
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          spaceBetween={50}
          navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
          breakpoints={{}}
          className="gap- bor der-2   relative"
        >
          {committeeMembers
            .filter((member) =>
              member.designation.startsWith('Vice Chairperson')
            )
            .map((member, index) => (
              <SwiperSlide key={index}>
                {/* Vice Chairperson card */}
                <div className="rounded-lg bg-gray-200 p-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto mb-2"
                  />
                  <p className="text-xl font-semibold">{member.name}</p>
                  <p className="text-lg">{member.designation}</p>
                  <p>{member.description}</p>
                </div>
              </SwiperSlide>
            ))}
          <div className="absolute bottom-[-10px] right-5 z-10">
            <button className="arrow-left  arrow text-3xl text-customColor">
              <IoArrowBackCircleOutline />
            </button>
            <button className="arrow-right  arrow text-3xl text-customColor">
              <IoArrowForwardCircleOutline />
            </button>
          </div>
        </Swiper>
        {/* <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay
          navigation={true}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {committeeMembers
            .filter((member) =>
              member.designation.startsWith('Vice Chairperson')
            )
            .map((member, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-lg bg-gray-200 p-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto mb-2"
                  />
                  <p className="text-xl font-semibold">{member.name}</p>
                  <p className="text-lg">{member.designation}</p>
                  <p>{member.description}</p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper> */}
      </div>

      {/* Heads and Joint Heads Section */}
      <div>
        <p className="text-xl font-semibold mb-2">Heads and Joint Heads</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Loop through all departments */}
          {committeeMembers
            .filter(
              (member) =>
                !member.designation.startsWith('Chairperson') &&
                !member.designation.startsWith('Vice Chairperson')
            )
            .map((member, index) => (
              <div key={index} className="rounded-lg bg-gray-200 p-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full rounded-sm h-auto mb-2"
                />
                <p className="text-xl font-semibold">{member.name}</p>
                <p className="text-lg">{member.designation}</p>
                <br></br>
                <p className="text-sm">{member.department}</p>
                <p>{member.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default CoreCommittee
