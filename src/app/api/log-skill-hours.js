// pages/api/log-skill-hours.js
import clientPromise from '../../lib/mongodb';
import mongoose from 'mongoose';

export default async function handler(req, res) {
  const { userId, skillName, hours } = req.body;
  try {
    const client = await clientPromise;
    const db = client.db();
    await db.collection('users').updateOne(
      { _id: new mongoose.Types.ObjectId(userId), 'skills.name': skillName },
      { $inc: { 'skills.$.hours': hours } }
    );

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
