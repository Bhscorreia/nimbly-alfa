export default function Status(req, res) {
    res.json({ status: 'OK', timestamp: Date().toString() });
}