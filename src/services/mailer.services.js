import { Mail } from "../DTO/mailler.dto.js"
import transport from "../config/mailler.config.js";

export class MailerServices {
    constuctor(){}

    sendMail = async(name, email, message) => {
        const mail = new Mail(name, email, message);

        if(!mail){
            return ({succes: false, message: 'No se pudo enviar el correo'})
        }
        
        const result = await transport.sendMail({
          from :mail.email,
          to: 'gabriel.m.ledesma96@gmail.com',
          subject: 'Nueva consulta',
          html:`<div>
                    <p>Nombre: ${mail.name}</p>
                    <p>Email: ${mail.email}</p>
                    <p>Mensaje: ${mail.message}</p>
                </div>`
        })
  
        return ({succes: true, message: 'Proceso exitoso'})
      }
}