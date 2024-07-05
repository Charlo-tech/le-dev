import axios from 'axios';

export default async function handler(req, res) {
  const { userId } = req.query;

  try {
    const response = await axios.get(`https://wakatime.com/api/v1/users/${userId}/stats/last_7_days`, {
      headers: {
        Authorization: `Bearer ${process.env.WAKATIME_API_KEY}`,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
