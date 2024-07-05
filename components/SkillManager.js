// components/SkillManager.js
import { useState } from 'react';
import axios from 'axios';

const SkillManager = ({ userId, fetchSkills }) => {
  const [skillName, setSkillName] = useState('');

  const addSkill = async () => {
    try {
      await axios.post('/api/add-skill', { userId, skillName });
      setSkillName('');
      fetchSkills();
    } catch (error) {
      console.error('Error adding skill:', error);
    }
  };

  const deleteSkill = async (skillName) => {
    try {
      await axios.post('/api/delete-skill', { userId, skillName });
      fetchSkills();
    } catch (error) {
      console.error('Error deleting skill:', error);
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-2">Manage Skills</h3>
      <div className="flex mb-4">
        <input
          type="text"
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
          placeholder="New skill name"
          className="border rounded-md p-2 mr-2 flex-grow"
        />
        <button onClick={addSkill} className="bg-blue-500 text-white p-2 rounded-md">Add Skill</button>
      </div>
      <div>
        {skills.map((skill) => (
          <div key={skill.name} className="flex justify-between items-center mb-2">
            <span>{skill.name}</span>
            <button onClick={() => deleteSkill(skill.name)} className="bg-red-500 text-white p-1 rounded-md">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillManager;
