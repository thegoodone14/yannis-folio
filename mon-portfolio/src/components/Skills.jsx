const skills = [
    { name: "React", level: "Avancé" },
    { name: "Node.js", level: "Intermédiaire" },
    { name: "Next.js", level: "Intermédiaire" },
    { name: "CSS", level: "Avancé" },
  ];
  
  const Skills = () => (
    <section id="skills" className="p-10 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4">Compétences</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 text-center">
        {skills.map((skill) => (
          <div key={skill.name} className="p-4 bg-gray-800 rounded-lg  shadow hover:shadow-lg">
            <h3 className="text-xl font-bold">{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Skills;
  