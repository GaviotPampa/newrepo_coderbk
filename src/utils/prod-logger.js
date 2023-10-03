/* port winston from "winston"; */

import { createLogger, /* format, */ transports } from "winston";
/* const { combine, printf, timestamp, colorize, simple } = format; */

/* const customLevelsOptions = {
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
}; */
const prodLogger = createLogger({
 /*  level: customLevelsOptions.level, */
/*   format: combine(
    colorize({ colors: customLevelsOptions.colors }),
    simple(),
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    printf((info) => `[${info.timestamp}] ${info.level} ${info.message}`)
  ), */

  transports: [
   
    new transports.Console({
        level: "debug",
      }),
  ],
});

export default prodLogger;
