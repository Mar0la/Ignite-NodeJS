import express from 'express';
import { router } from './routes/index'
import swaggerUi from 'swagger-ui-express'
import swagerFile from './swagger.json'


const app = express();

app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagerFile));
app.use(router)

app.listen(3333, () => console.log("Serve is running"))
