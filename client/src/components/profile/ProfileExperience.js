const ProfileExperience = ({ experience = [] }) => {
  if (!Array.isArray(experience)) experience = [];

  return (
    <div className="profile-exp bg-white p-2">
      <h2 className="text-primary">Experience</h2>

      {experience.length === 0 ? (
        <h4>No experience credentials</h4>
      ) : (
        experience.map((exp, index) => (
          <div key={index}>
            <h3>{exp.company}</h3>
            <p>
              {exp.from} - {exp.to ? exp.to : 'Now'}
            </p>
            <p><strong>Position: </strong>{exp.title}</p>
            {exp.description && <p><strong>Description: </strong>{exp.description}</p>}
          </div>
        ))
      )}
    </div>
  );
};

export default ProfileExperience;