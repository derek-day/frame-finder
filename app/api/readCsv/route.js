import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

// export default function handler(req, res) {
//     const filePath = path.join(process.cwd(), 'public', 'testitems3.csv'); // Adjust path if needed
//     const file = fs.readFileSync(filePath, 'utf8');

//     Papa.parse(file, {
//         header: true,
//         skipEmptyLines: true,
//         complete: (results) => {
//             res.status(200).json(results.data);
//         },
//     });

//     console.log(results.data);
// }

// export default function handler(req, res) {
//     if (req.method === 'GET') {
//         const filePath = path.join(process.cwd(), 'public', 'testitems3.csv'); // Adjust path if needed
//         const file = fs.readFileSync(filePath, 'utf8');

//         Papa.parse(file, {
//             header: true,
//             skipEmptyLines: true,
//             complete: (results) => {
//                 res.status(200).json(results.data);
//             },
//         });
//     } else {
//         // If it's not a GET request, return a 405 Method Not Allowed
//         res.status(405).json({ error: `Method ${req.method} Not Allowed` });
//     }
// }

export default function handler(req, res) {
    if (req.method === 'GET') {
        const filePath = path.join(process.cwd(), 'public', 'data.csv'); // Make sure the path is correct
        try {
            const file = fs.readFileSync(filePath, 'utf8');
            Papa.parse(file, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    res.status(200).json(results.data); // Send CSV data as JSON
                },
            });
        } catch (error) {
            console.error("Error reading CSV file:", error);
            res.status(500).json({ error: 'Failed to read the CSV file.' });
        }
    } else {
        // Handle other methods (e.g., POST) if needed
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}
