import type { IncomingMessage, ServerResponse } from 'node:http';
import { processInquirySubmission } from '../server/inquiryHandler.ts';

/**
 * Serverless / Node.js API Route for /api/inquiries
 * Supports Vercel, Netlify, Express, and Vite Connect middleware.
 */
export default async function handler(req: IncomingMessage, res: ServerResponse) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Allow', 'POST');
    res.end(JSON.stringify({ success: false, message: 'Method Not Allowed' }));
    return;
  }

  // Enforce 32KB request body limit
  const MAX_BYTES = 32 * 1024;
  let receivedBytes = 0;
  let bodyStr = '';

  req.on('data', (chunk: Buffer) => {
    receivedBytes += chunk.length;
    if (receivedBytes > MAX_BYTES) {
      req.destroy();
      res.statusCode = 413;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ success: false, message: 'Payload Too Large (Max 32KB)' }));
    } else {
      bodyStr += chunk.toString('utf8');
    }
  });

  req.on('end', async () => {
    try {
      const parsedBody = bodyStr ? JSON.parse(bodyStr) : {};
      const clientIp =
        (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
        req.socket?.remoteAddress ||
        '127.0.0.1';

      const outcome = await processInquirySubmission(parsedBody, clientIp);

      res.statusCode = outcome.status;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(outcome.body));
    } catch {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ success: false, message: 'Malformed JSON payload.' }));
    }
  });
}
