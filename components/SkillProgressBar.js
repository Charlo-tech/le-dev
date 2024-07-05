// components/SkillProgressBar.js
const SkillProgressBar = ({ skill }) => {
    const progress = (skill.hours / 10000) * 100;
  
    return (
      <div className="mb-4">
        <h3 className="text-lg font-medium">{skill.name}</h3>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="mt-2 text-sm">{skill.hours} / 10000 hours</p>
      </div>
    );
  };
  
  export default SkillProgressBar;
  