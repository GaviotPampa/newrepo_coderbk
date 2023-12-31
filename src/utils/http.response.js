import {HttpStatus} from "../lib/error/info.Error.js";
/* const HttpStatus = {
    OK: 200,
    NOT_FOUND: 404,
    UNAUTHORIZED: 403,
    FORBIDDEN: 401,
    INTERNL_SERVER_ERROR: 500,
} */

export class HttpResponse {

    Ok(res, obj){
        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            message: 'success',
            data: obj
        });
    };

    NotFound(res, data){
        return res.status(HttpStatus.NOT_FOUND).json({
            status: HttpStatus.NOT_FOUND,
            message: 'Not Found',
            error: data
        });
    }

    Unauthorized(res, data){
        return res.status(HttpStatus.UNAUTHORIZED).json({
            status: HttpStatus.UNAUTHORIZED,
            message: 'Unauthorized',
            error: data
        });
    };
    
    BadRequest(res, data){
        return res.status(HttpStatus.BAD_REQUEST).json({
            status: HttpStatus.BAD_REQUEST,
            message: 'La solicitud no fue válida',
            error: data
        });
    };
    Forbidden(res, data){
        return res.status(HttpStatus.FORBIDDEN).json({
            status: HttpStatus.FORBIDDEN,
            message: 'Forbidden',
            error: data
        });
    };
    UnprocessableEntity (res, data){
        return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
            status: HttpStatus.UNPROCESSABLE_ENTITY,
            message: 'Contenido Invalido',
            error: data
        });
    };
    ServerError(res, data){
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            message: 'Interrnal Server Error',
            error: data
        });
    };
};