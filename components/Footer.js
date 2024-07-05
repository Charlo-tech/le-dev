"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';

const Footer = ({ wakatimeUserId, githubUsername }) => {
  const [wakatimeStats, setWakatimeStats] = useState(null);
  const [githubStats, setGithubStats] = useState(null);

  useEffect(() => {
    const fetchWakatimeStats = async () => {
      try {
        const { data } = await axios.get(`/api/wakatime-stats?userId=${wakatimeUserId}`);
        setWakatimeStats(data);
      } catch (error) {
        console.error('Error fetching WakaTime stats:', error);
      }
    };

    const fetchGithubStats = async () => {
      try {
        const { data } = await axios.get(`/api/github-stats?username=${githubUsername}`);
        setGithubStats(data);
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      }
    };

    fetchWakatimeStats();
    fetchGithubStats();
  }, [wakatimeUserId, githubUsername]);

  return (
    <footer className="bg-gray-100 py-6 border-t mt-10">
      <h3 className="text-xl font-medium text-center">Developer Stats</h3>
      <div className="flex justify-around mt-4">
        {wakatimeStats && (
          <div className="w-1/2 p-4 border rounded-md bg-white">
            <h4 className="text-lg font-medium mb-2">WakaTime Last 7 Days</h4>
            <p>Total Coding Time: {wakatimeStats.data.human_readable_total}</p>
            <p>Languages:</p>
            <ul className="list-disc list-inside">
              {wakatimeStats.data.languages.map((lang) => (
                <li key={lang.name}>
                  {lang.name}: {lang.text}
                </li>
              ))}
            </ul>
          </div>
        )}
        {githubStats && (
          <div className="w-1/2 p-4 border rounded-md bg-white">
            <h4 className="text-lg font-medium mb-2">GitHub Stats</h4>
            <p>Username: {githubStats.login}</p>
            <p>Public Repos: {githubStats.public_repos}</p>
            <p>Followers: {githubStats.followers}</p>
            <p>Following: {githubStats.following}</p>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
