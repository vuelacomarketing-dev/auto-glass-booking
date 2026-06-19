export default {
  async fetch(request) {
    const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Auto Glass Booking</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #f7f8fb, #edf1f7);
      color: #111827;
      padding: 28px;
    }
    .shell {
      max-width: 980px;
      margin: 0 auto;
    }
    .hero {
      text-align: center;
      margin-bottom: 28px;
    }
    .badge {
      display: inline-block;
      background: #111827;
      color: #fff;
      padding: 8px 14px;
      border-radius: 999px;
      font-size: 13px;
      margin-bottom: 14px;
    }
    h1 {
      font-size: 42px;
      margin: 0 0 10px;
      letter-spacing: -1px;
    }
    .hero p {
      color: #5b6472;
      font-size: 18px;
      margin: 0;
    }
    .card {
      background: rgba(255,255,255,.92);
      border: 1px solid rgba(17,24,39,.08);
      border-radius: 26px;
      padding: 32px;
      box-shadow: 0 24px 60px rgba(15,23,42,.10);
    }
    .steps {
      display: flex;
      gap: 10px;
      margin-bottom: 28px;
      font-size: 13px;
      color: #6b7280;
    }
    .step {
      flex: 1;
      padding: 10px;
      border-radius: 999px;
      background: #f3f4f6;
      text-align: center;
    }
    .step.active {
      background: #111827;
      color: white;
    }
    h2 {
      margin: 0 0 8px;
      font-size: 26px;
    }
    .subtitle {
      color: #6b7280;
      margin: 0 0 24px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    .service {
      border: 1px solid #e5e7eb;
      background: #fff;
      border-radius: 20px;
      padding: 22px;
      text-align: left;
      cursor: pointer;
      transition: .2s ease;
    }
    .service:hover {
      transform: translateY(-3px);
      border-color: #111827;
      box-shadow: 0 16px 34px rgba(15,23,42,.10);
    }
    .service strong {
      display: block;
      font-size: 18px;
      margin-bottom: 8px;
    }
    .service span {
      color: #6b7280;
      font-size: 14px;
      line-height: 1.45;
    }
    .trust {
      margin-top: 24px;
      padding: 18px;
      border-radius: 18px;
      background: #f9fafb;
      color: #4b5563;
      font-size: 14px;
      line-height: 1.5;
    }
    @media (max-width: 700px) {
      body { padding: 16px; }
      h1 { font-size: 32px; }
      .grid { grid-template-columns: 1fr; }
      .steps { flex-direction: column; }
    }
  </style>
</head>
<body>
  <div class="shell">
  <div class="hero">
  <h1>Let's get your glass repaired.</h1>
  <p>Answer a few questions to receive an estimate and schedule service.</p>
</div>

    <div class="card">
    <div style="margin-bottom:24px;">
  <img
    src="https://placehold.co/180x60?text=Client+Logo"
    style="max-height:60px;"
  />
</div>
   <div class="grid">

  <button class="service">
    <strong>🚗 Windshield Replacement</strong>
    <span>Cracked or damaged windshield requiring replacement.</span>
  </button>

  <button class="service">
    <strong>🔧 Windshield Repair</strong>
    <span>Small chips and minor damage that may be repairable.</span>
  </button>

  <button class="service">
    <strong>🪟 Door Glass</strong>
    <span>Driver or passenger side window replacement.</span>
  </button>

  <button class="service">
    <strong>🚘 Back Glass</strong>
    <span>Rear window replacement service.</span>
  </button>

  <button class="service">
    <strong>📍 Quarter Glass</strong>
    <span>Small rear side window replacement.</span>
  </button>

  <button class="service">
    <strong>📷 ADAS Calibration</strong>
    <span>Calibration for vehicle cameras and safety systems.</span>
  </button>

</div>
    return new Response(html, {
      headers: { "content-type": "text/html;charset=UTF-8" },
    });
  },
};
