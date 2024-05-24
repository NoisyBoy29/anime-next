import Image from "next/image";

const teamMembers = [
  {
    name: "M. Mulyadi",
    npm: 50420685,
    position: "Product Manager",
    photo: "/assets/mul.jpg",
  },
  {
    name: "Daniel Ryan Simatupang",
    npm: 50420333,
    position: "System Design",
    photo: "/assets/nil.jpg",
  },
  {
    name: "Naufal Maulana Al Ghifari Irawan",
    npm: 50420956,
    position: "Ayanokoji",
    photo: "/assets/nop.jpeg",
  },
  {
    name: "Rizky Bagaskara",
    npm: 51420127,
    position: "Ayanokoji",
    photo: "/assets/bagas.jpg",
  },
  {
    name: "Mohammad Rizky",
    npm: 50420734,
    position: "Ayanokoji",
    photo: "/assets/moris.jpg",
  },
  {
    name: "Bimo Rinekso Nugroho",
    npm: 50420285,
    position: "Ayanokoji",
    photo: "/assets/bimo.jpg",
  },
  {
    name: "Arif Fatullah",
    npm: 50420223,
    position: "Ayanokoji",
    photo: "/assets/makima.jpg",
  },
  {
    name: "Jossia Elang Abraham",
    npm: 50420622,
    position: "Ayanokoji",
    photo: "/assets/jossia.jpg",
  },
  {
    name: "Arief Taufik Rahman",
    npm: 50420221,
    position: "Ayanokoji",
    photo: "/assets/pik.jpg",
  },
];

const About = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-gray-100">
      <h1 className="mb-8 text-4xl font-bold text-color-primary">
        Tentang Kami
      </h1>
      {/* First Row: One person */}
      <div className="flex flex-col items-center mb-8">
        <Image
          src={teamMembers[0].photo}
          alt={teamMembers[0].name}
          width={200}
          height={200}
          className="object-cover rounded-full"
        />
        <h2 className="mt-4 text-2xl font-semibold text-color-secondary">
          {teamMembers[0].name}
        </h2>
        <h4 className="mt-4 text-xl font-semibold text-color-secondary">
          {teamMembers[0].npm}
        </h4>
        <h4 className="mt-4 text-xl font-semibold text-color-secondary">
          {teamMembers[0].position}
        </h4>
      </div>
      {/* Second Row: Eight persons with 4 persons per row */}
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4">
        {teamMembers.slice(1).map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={member.photo}
              alt={member.name}
              width={200}
              height={200}
              className="object-cover rounded-full"
            />
            <h2 className="mt-4 text-2xl font-semibold text-color-secondary">
              {member.name}
            </h2>
            <h4 className="mt-4 text-xl font-semibold text-color-secondary">
              {member.npm}
            </h4>
            <h4 className="mt-4 text-xl font-semibold text-color-secondary">
              {member.position}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
