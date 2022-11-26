const express = require('express');
const router = express.Router();
/**
 * @openapi
 * /api/test:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     parameters:
 *       - name: name
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */

router.get('/test', function (req, res, next) {
  const name = req.query.name || 'World';
  res.json({ message: `Hello ${name}` });
});
module.exports = router;
