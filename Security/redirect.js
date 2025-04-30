import express from 'express';
import { URL } from 'url'; 

const app = express();

const TRUSTED_DOMAINS = ['example.com', 'trusted.com'];

app.get('/redirect', (req, res) => {
  try {
    const userUrl = req.query.url; 

    if (!userUrl) {
      return res.status(400).json({ error: 'Missing URL parameter' });
    }

    const parsedUrl = new URL(userUrl);
    const hostname = parsedUrl.hostname; 

    if (!TRUSTED_DOMAINS.includes(hostname)) {
      return res.status(400).json({ error: `Unauthorized redirect to: ${hostname}` });
    }

    res.redirect(userUrl);
  } catch (error) {
    res.status(400).json({ error: 'Invalid URL' });
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
