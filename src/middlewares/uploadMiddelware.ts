import { NextFunction, Request, Response } from 'express';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

export const uploadMiddleware = (
    maxFiles: number,
    path: string,
    allowedTypes: string[] = ['image/jpeg', 'image/png'],
    maxSize: number = 5 * 1024 * 1024,
) => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            const folder = `public/images/${path}/`;
            fs.mkdirSync(folder, { recursive: true });
            cb(null, folder);
        },
        filename: (req, file, cb) => {
            const filename = `${uuidv4()}-${file.originalname}`;
            cb(null, filename);
        },
    });

    const upload = multer({
        storage: storage,
    });

    return (req: Request, res: Response, next: NextFunction) => {
        // Use multer upload instance
        upload.array('file', maxFiles)(req, res, (err) => {
            if (err) {
                return res.status(400).json({ error: err.message });
            }
            // Retrieve uploaded files
            const files = req.files as any;
            const errors = [];

            // Validate file types and sizes
            files.forEach((file) => {
                if (!allowedTypes.includes(file.mimetype)) {
                    errors.push(`Invalid file type: ${file.originalname}`);
                }

                if (file.size > maxSize) {
                    errors.push(`File too large: ${file.originalname}`);
                }
            });

            // Handle validation errors
            if (errors.length > 0) {
                // Remove uploaded files
                files.forEach((file) => {
                    fs.unlinkSync(file.path);
                });

                return res.status(400).json({ errors });
            }

            // Attach files to the request object
            req.files = files.map((file) => ({
                url: file.path,
                name: file.filename,
                size: file.size,
                type: file.mimetype,
            }));

            // Proceed to the next middleware or route handler
            next();
        });
    };
};
