"use client";

import React, { useEffect, useState } from 'react';

const Footer = ({ wakatimeUserId, githubUsername }) => {
  const [wakatimeData, setWakatimeData] = useState(null);
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    const fetchWakatimeData = async () => {
      // Replace with actual API call to WakaTime
      const data = await fetch(`/api/wakatime/${wakatimeUserId}`).then(res => res.json());
      setWakatimeData(data);
    };

    const fetchGithubData = async () => {
      // Replace with actual API call to GitHub
      const data = await fetch(`/api/github/${githubUsername}`).then(res => res.json());
      setGithubData(data);
    };

    fetchWakatimeData();
    fetchGithubData();
  }, [wakatimeUserId, githubUsername]);

  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div>
        <h4 className="text-lg font-semibold mb-2">WakaTime Stats</h4>
        {wakatimeData ? (
          <div>
            {/* Display WakaTime data here */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2">GitHub Stats</h4>
        {githubData ? (
          <div>
            {/* Display GitHub data here */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </footer>
  );
};

export default Footer;