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
      <div class="badge">Instant Auto Glass Estimate</div>
      <h1>Get a fast estimate and schedule with confidence.</h1>
      <p>Select your service to begin your quote.</p>
    </div>

    <div class="card">
      <div class="steps">
        <div class="step active">1. Service</div>
        <div class="step">2. Vehicle</div>
        <div class="step">3. Estimate</div>
        <div class="step">4. Book or Call</div>
      </div>

      <h2>What service do you need?</h2>
      <p class="subtitle">Choose the option that best matches your auto glass issue.</p>

      <div class="grid">
        <button class="service">
          <strong>Windshield Replacement</strong>
          <span>For cracked or damaged windshields that need a full replacement.</span>
        </button>

        <button class="service">
          <strong>Windshield Repair</strong>
          <span>For small chips or minor damage that may not require replacement.</span>
        </button>

        <button class="service">
          <strong>Door Glass</strong>
          <span>For side windows on the driver or passenger doors.</span>
        </button>

        <button class="service">
          <strong>Back Glass</strong>
          <span>For rear windshield or back window replacement.</span>
        </button>

        <button class="service">
          <strong>Quarter Glass</strong>
          <span>For smaller side glass panels near the rear of the vehicle.</span>
        </button>

        <button class="service">
          <strong>ADAS Calibration</strong>
          <span>For vehicles with cameras, sensors, lane assist, or safety features.</span>
        </button>
      </div>

      <div class="trust">
        Estimates may vary based on glass availability, OEM vs aftermarket glass, ADAS requirements, and vehicle options.
      </div>
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
