import multer from 'multer';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const folder = 'uploads/';
        fs.mkdir(folder, { recursive: true }, (error) => {
            if (error) {
                console.error(
                    'Error al crear el directorio de destino:',
                    error,
                );
                throw error;
            }
            cb(null, folder);
        });
    },
    filename: (req, file, cb) => {
        const filename = `${uuidv4()}-${file.originalname}`;
        cb(null, filename);
    },
});

export const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
            return cb(new Error('Solo se permiten archivos de imagen.'));
        }
        cb(null, true);
    },
});
