const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: 'mongodb+srv://vaibhav:Va9KlJPm7oRETaIH@cluster0.uvzg0.gcp.mongodb.net/test'
}

export default config
