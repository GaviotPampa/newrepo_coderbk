import winston from "winston";
import { transports, format, createLogger } from "winston";
import devLogger from "../utils/dev-logger.js";
import prodLogger from "../utils/prod-logger.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
export const __dirname = dirname(fileURLToPath(import.meta.url));
const { combine, printf, timestamp, colorize, simple } = format;



const customLevelsOptions = {
    level: {
      fatal: 0,
      error: 1,
      warning: 2,
      info: 3,
      http: 4,
      default: 5,
    },
    colors: {
      fatal: "red",
      error: "orange",
      warning: "yellow",
      info: "blue",
      http: "green",
      debug: "rose",
    },
  };
  let logger = null;

const loggerConfig =

{
    level: customLevelsOptions.level,
    format: combine(
      colorize({ colors: customLevelsOptions.colors }),
      simple(),
      timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      printf((info) => `[${info.timestamp}] ${info.level} ${info.message}`)
    ),
    transports:[
        new winston.transports.File(
            {
                maxFiles: 15,
                filename: `${__dirname}/../logs/errors.log`,
                level: "error",
              }
        ),
           
    new transports.Console({
        level: "debug",
      }),
    ]

}

if (loggerConfig !== 'production') {
    logger = prodLogger;
    
} else {
    logger = devLogger;
    
}

export const addLogger = (req, res, next)=>{
    req.logger = loggerConfig;
    req.logger.http(`${req.method} en ${req.url}`)
    next();
}
export default  logger = winston.createLogger(loggerConfig)