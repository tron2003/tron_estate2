import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },avatar:{
 type:String,default:"https://media.istockphoto.com/id/1582174301/photo/underwater-phot-of-schooling-fish-near-coral-reef.webp?b=1&s=170667a&w=0&k=20&c=CaTcUEwhRqlOvar-XtQERinW0fMtFz7a1tQGmRpxO_M="
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;