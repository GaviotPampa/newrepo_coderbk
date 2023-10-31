import "dotenv/config.js";

export default {
     PORT: process.env.PORT || 8080,
     ENV: process.env.ENV || 'dev',
     MONGO_ATLAS_URL: process.env.MONGO_ATLAS_URL,
     MONGO_LOCAL_URL: process.env.MONGO_LOCAL_URL,

     SECRET_KEY_JWT: process.env.SECRET_KEY_JWT,

     PERSISTENCE: process.env.PERSISTENCE,

     EMAIL: process.env.EMAIL, 
     PASSWORD: process.env.PASSWORD,
     SECRET_COOKIES: process.env.SECRET_COOKIES,
     GITHUB_LOCAL_ID: process.env.GITHUB_LOCAL_ID,
     GITHUB_LOCAL_CLIENTSECRET: process.env.GITHUB_LOCAL_CLIENTSECRET,
     
     ADMIN_EMAIL: process.env.ADMIN_EMAIL,
     ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,

     PORT_ETHEREAL: process.env.PORT_ETHEREAL,
     EMAIL_ETHEREAL: process.env.EMAIL_ETHEREAL,
     PASSWORD_ETHEREAL: process.env.PASSWORD_ETHEREAL,
     HOST_ETHEREAL: process.env.HOST_ETHEREAL,

     NODE_ENV: process.env.NODE_ENV,
     LOG_LEVEL: process.env.LOG_LEVEL,

     EMAIL_GMAIL: process.env.EMAIL_GMAIL,
     PASSWORD_NODEMAILER: process.env.PASSWORD_NODEMAILER

}
