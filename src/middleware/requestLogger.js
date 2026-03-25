import logger from "../config/logger.js"
const requestLogger = (req,res,next)=>{
const start = Date.now()
res.on("finish",()=>{
const duraƟon = Date.now()-start
logger.info({
method:req.method,
url:req.originalUrl,
status:res.statusCode,
duraƟon:`${duraƟon}ms`
})
})
next()
}
export default requestLogger