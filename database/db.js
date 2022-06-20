import mongoose from 'mongoose';

export const Connection = async (URL) =>{
    try{
          await mongoose.connect(URL, {  useUnifiedTopology: true, useNewUrlParser: true });
          console.log('Database Connected Successfully on PROJECT0');
    }catch(error){
        console.log('Error While connecting with the database', error.message);
    }
}

export default Connection;