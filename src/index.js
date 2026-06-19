export default {
  async fetch(request) {
    const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Auto Glass Booking</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f6f7f9;
      margin: 0;
      padding: 24px;
      color: #111;
    }
    .card {
      max-width: 720px;
      margin: 0 auto;
      background: white;
      border-radius: 18px;
      padding: 28px;
      box-shadow: 0 10px 30px rgba(0,0,0,.08);
    }
    h1 {
      margin-bottom: 8px;
    }
    .subtitle {
      color: #555;
      margin-bottom: 24px;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }
    .service {
      padding: 18px;
      border: 1px solid #ddd;
      border-radius: 14px;
      background: #fff;
      font-size: 16px;
      cursor: pointer;
      text-align: left;
    }
    .service:hover {
      border-color: #111;
      background: #f2f2f2;
    }
    @media (max-width: 600px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Auto Glass Booking</h1>
    <p class="subtitle">Select the service you need to get started.</p>

    <div class="grid">
      <button class="service">Windshield Replacement</button>
      <button class="service">Windshield Repair</button>
      <button class="service">Door Glass</button>
      <button class="service">Back Glass</button>
      <button class="service">Quarter Glass</button>
      <button class="service">ADAS Calibration</button>
    </div>
  </div>
</body>
</html>
`;

    return new Response(html, {
      headers: { "content-type": "text/html;charset=UTF-8" },
    });
  },
};
