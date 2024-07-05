import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: { type:String, unique: true },
    skills: [
        {
            name: String,
            hours: { type: Number, default: 0 },
        },
    ],
});

export default mongoose.models.User || mongoose.model('User', UserSchema);